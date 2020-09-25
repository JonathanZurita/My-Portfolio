import React from 'react';


const Modal = ({ contactInfoModal, handleContactInfoModal }) => {

  if(contactInfoModal) {
    return (
      <div 
        className="modalWrap" 
        id="contactModal"
        onClick={()=> handleContactInfoModal()}
      >
        <div className="modalBody">
          <img src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/profile+circle+pic.png"  height='50%' width='39%' />
          <div>github.com/JonathanZurita</div>
          <div>linkedin.com/in/jonathanzurita123/</div>
          <div>email: jonrzurita@gmail.com</div>
          <div>phone: 512-395-5046</div>
          <home>Austin, TX</home>

        </div>
      </div>
    )
  } else return null;
}

export default Modal;