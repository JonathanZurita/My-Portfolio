import React from "react";
import axios from "axios";
import Photo from "./Photo.jsx";
import Search from "./search.js";
import Footer from './footer.jsx';
import {Animated} from "react-animated-css";

const Grid = () => {
  const [photos, setPhotos] = React.useState([]);
  const [modalToggle, setModalToggle] = React.useState(false);
  const [photoModalData, setPhotoModalData] = React.useState([]);
  const [allPhotos, setAllPhotos] = React.useState([]);

  React.useEffect(() => {
    getPhotos();
  }, []);

  const togglePhoto = (e) => {
    if (modalToggle) {
      setModalToggle(false);
    } else {
      var setModalPhoto = "";
      for (var i = 0; i < allPhotos.length; i++) {
        if (allPhotos[i].id == e.target.id) {
          setModalPhoto = allPhotos[i];
        }
      }
      console.log(e.target.id);
      setPhotoModalData(setModalPhoto);
      setModalToggle(true);
    }
  };

  const getPhotos = () => {
    console.log("axios get photo initiated");
    axios
      .get(`/photos`)
      .then((res) => {
        var row = [];
        var grid = [];
        for (var i = 0; i < res.data.length; i++) {
          row.push(res.data[i]);

          if (row.length === 3) {
            grid.push(row);
            row = [];
          }
        }
        setPhotos(grid);
        setAllPhotos(res.data);
      })

      .catch((err) => {
        console.log("axios error getting photos: ", err);
      });
  };

  return (
    <div>
      <Search />
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
        <div className="gridWrap">
          <div className="pageHeader">
            <h1>Hobbies</h1>
            <p>When I'm immersed in nature, I feel most at home.</p>
          </div>

          <Photo
            handleToggle={togglePhoto}
            photoData={allPhotos}
            photoID={photoModalData}
            bool={modalToggle}
          />
          {photos.map((photo, i) => (
            <div key={i} className="photoRow">
              <div className="imgTile" onClick={() => togglePhoto(event)}>
                <img id={photo[0].id} className="photo" src={photo[0].url} />
              </div>

              <div className="imgTile" onClick={() => togglePhoto(event)}>
                <img id={photo[1].id} className="photo" src={photo[1].url} />
              </div>

              <div className="imgTile" onClick={() => togglePhoto(event)}>
                <img id={photo[2].id} className="photo" src={photo[2].url} />
              </div>
            </div>
          ))}
        </div> 
        <Footer />
      </Animated>
    </div>
  );
};

export default Grid;
