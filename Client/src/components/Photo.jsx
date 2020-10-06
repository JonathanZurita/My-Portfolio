import React from 'react';

const Photo = ({ handleToggle, bool, photoID}) => {

  if(bool) {
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
            <p className="photoDeats" id="picDate"><span><i class="fas fa-calendar-day"></i></span> <span>{photoID.date}</span></p>
            <p className="photoDeats" id="picLoc"> <span><i class="fas fa-map-marker-alt"></i></span> <span>{photoID.city} {photoID.state}</span></p>
          
          </div>
        </div>


    )
  } else return null;
}

export default Photo;