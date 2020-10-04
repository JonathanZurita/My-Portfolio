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
            <p className="photoDeats" id="picDate">{photoID.date}</p>
            <p className="photoDeats" id="picLoc">{photoID.city}, {photoID.state}</p>
          
          </div>
        </div>


    )
  } else return null;
}

export default Photo;