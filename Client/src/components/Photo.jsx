import React from 'react';

const Photo = ({bool, photoID, togglePhoto}) => {
  var icons = [];

  if(bool) {
    if(photoID.city !== null) {
      icons.push("fas fa-calendar", "fas fa-map-marker-alt");
    }
    return(
      <div className="photoModWrap" onClick={()=> togglePhoto()}>
        <div id="photoModalBody">

          <div className="imageOnModalWrap">
            <img className="imageOnModal" src={photoID.url} />
          </div>
          <div className="photoDeatsWrap">
            <p className="photoDeats" id="picDesc">{photoID.description}</p> 
          </div>
        
          <p className="photoDeats" id="picDate"><span><i className={icons[0]}></i></span> <span>{photoID.date}</span></p>
          <p className="photoDeats" id="picLoc"> <span><i className={icons[1]}></i></span> <span>{photoID.city} {photoID.state}</span></p>
          <div className="imgBtnWrap">
            <a className="fullSizeImg" href={photoID.url} target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
          </div>
          
        </div>
      </div>
    )
  } else return null;
}

export default Photo;