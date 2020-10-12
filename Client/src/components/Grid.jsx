import React from "react";
import axios from "axios";
import Photo from "./Photo.jsx";
import Search from "./search.js";
import Footer from './footer.jsx';
import {Animated} from "react-animated-css";
import { NavLink } from "react-router-dom";

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
      setPhotoModalData(setModalPhoto);
      setModalToggle(true);
    }
  };

  const getPhotos = () => {
    
    axios.get(`/photos`)
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
        console.log("error getting photos: ", err);
      });
  };

  return (
    <div>
      <Search />
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
        <div className="gridWrap">
          <div className="pageHeader">
            <h1>Hobbies</h1>
            <p>These include Landscape Photography, Traveling and Hiking. I was an English Instructor in South Korea and have included photos from my journey across Asia.</p>
          </div>

          <Photo
            togglePhoto={togglePhoto}
            photoData={allPhotos}
            photoID={photoModalData}
            bool={modalToggle}
          />
          {photos.map((photo, i) => (
            <div key={i} className="photoRow">
              <div className="imgTile" to="/photo" onClick={() => togglePhoto(event)}>
                <img id={photo[0].id} className="photo" src={photo[0].url} />
              </div>

              <div className="imgTile" to="/photo" onClick={() => togglePhoto(event)}>
                <img id={photo[1].id} className="photo" src={photo[1].url} />
              </div>

              <div className="imgTile" to="/photo" onClick={() => togglePhoto(event)}>
                <img id={photo[2].id} className="photo" src={photo[2].url} />
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </Animated>
    </div>
  );
};

export default Grid;
