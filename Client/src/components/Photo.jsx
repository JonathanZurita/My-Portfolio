import React from 'react';

const Photo = ({ handleToggle, bool, photoUrl}) => {

  if(bool) {
    return(
      <div 
          className="modalWrap" 
          id="photoModal"
          onClick={()=> handleToggle()}
        >
          <div className="modalBody">
            <img src={photoUrl} />
          </div>
        </div>


    )
  } else return null;
}

export default Photo;