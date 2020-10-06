import React from 'react';

const Photo = ({ handleToggle, bool, photoID}) => {
  var icons = [];
  
  if(bool) {
    if(photoID.city.length > 0 && photoID.state.length > 0) {
      icons.push("fas fa-calendar-day", "fas fa-map-marker-alt");
      
    }
    return(
      <div 
          className="modalWrap" 
          id="photoModal"
          onClick={()=> handleToggle()}
        >
          <div className="modalBody" id="photoModalBody">
            <div className="imageOnModalWrap">
              <img className="imageOnModal" src={photoID.url} />
            </div>
            <p className="photoDeats" id="picDesc">{photoID.description}</p>
            <p className="photoDeats" id="picDate"><span><i class={icons[0]}></i></span> <span>{photoID.date}</span></p>
            <p className="photoDeats" id="picLoc"> <span><i class={icons[1]}></i></span> <span>{photoID.city} {photoID.state}</span></p>
          
          </div>
        </div>


    )
  } else return null;
}

export default Photo;