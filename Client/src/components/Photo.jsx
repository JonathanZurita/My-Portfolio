import React from 'react';

const Photo = ({bool, photoID, togglePhoto}) => {
  var icons = [];

  if(bool) {
    if(photoID.city !== null) {
      icons.push("fas fa-calendar-day", "fas fa-map-marker-alt");
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
        
          <p className="photoDeats" id="picDate"><span><i class={icons[0]}></i></span> <span>{photoID.date}</span></p>
          <p className="photoDeats" id="picLoc"> <span><i class={icons[1]}></i></span> <span>{photoID.city} {photoID.state}</span></p>
          <div className="imgBtnWrap">
            <a className="fullSizeImg" href={photoID.url} target="_blank">Full Size Image</a>
          </div>
          
        </div>
      </div>
    )
  } else return null;
}

export default Photo;