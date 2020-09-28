import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';

const Grid = () => {
  
  const [photos, setPhotos] = React.useState([]);
  const [modalToggle, setModalToggle] = React.useState(false);
  const [photoUrl, setUrl] = React.useState('');

  React.useEffect(()=> {
    getPhotos();
  },[]);

  const togglePhoto = (e) => {
    if(modalToggle) {
      setModalToggle(false);
    } else {
      setUrl(e.target.src);
      setModalToggle(true);
    }

  }

  const getPhotos = () => {
    axios.get(`/photos`)
      .then(res => {
        var row = [];
        var grid = [];
        for(var i = 0; i < res.data.length; i++) {

          row.push(res.data[i].url);

          if(row.length === 3) {
            grid.push(row);
            row = [];
          }

        }
        setPhotos(grid);
      })

      .catch(err => {
        console.log('axios error getting photos: ', err);
      })
  }

  return (
    <div className="gridWrap">
      <div className="pageHeader">
        <h1>Hobbies</h1>
        <p>When I'm immersed in nature, I feel most at home.</p>
      </div>

      <Photo 
          handleToggle={togglePhoto} 
          photoUrl={photoUrl} 
          bool={modalToggle}
        />
      {photos.map((photo, i) =>
        <div key={i} className='photoRow'>

          <div className="imgTile">
            <img 
              className="photo"  
              src={photo[0]} 
              onClick={() => togglePhoto(event)}
            />
          </div>
          <div 
            value={photo[1]} 
            className="imgTile" 
            //onClick={() => togglePhoto(event)}
          >
            <img 
              className="photo"  
              src={photo[1]}
              onClick={() => togglePhoto(event)}
            />
          </div>
          <div value={photo[2]} className="imgTile" >
            <img 
              className="photo" 
              src={photo[2]}
              onClick={() => togglePhoto(event)}
              />
          </div>
        </div>
      )}
      
    </div>

  )
}

export default Grid;