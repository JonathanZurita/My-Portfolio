import React from 'react';
import Photos from './photos.js';
const Grid = () => {
  //const [photos, setPhotos] = React.useState('');
  const [width, setWidth] = React.useState('100%');
  const [height, setHeight] = React.useState('100%');
  return (
    <div className="gridWrap">
      <div className="pageHeader">
        <h1>Hobbies</h1>
        <p>When I'm immersed in nature, I feel at home.</p>
      </div>
      {Photos.map((photo, i) =>
        <div key={i} className='photoRow'>
          <div className="imgTile">
            <img className="photo" src={photo[0]} width={width} height={height}/>
            <button className="photoBtns">heart</button>
            <button className="photoBtns">view</button>
          </div>
          <div className="imgTile">
            <img className="photo"  src={photo[1]} width={width} height={height}/>
          </div>
          <div className="imgTile">
            <img  className="photo" src={photo[2]} width={width} height={height}/>
          </div>
        </div>
      )}
    </div>

  )
}

export default Grid;