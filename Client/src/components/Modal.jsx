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
            <div>
              <i className="fab fa-github-alt"></i>
              {'\u00A0'} github.com/JonathanZurita
            </div>
            <div>
              <i className="fab fa-linkedin"></i>
              {'\u00A0'} linkedin.com/in/jonathanzurita123/
            </div>
            <div> 
              <i className="fab fa-instagram"></i>
              {'\u00A0'} trail_less_traveled
            </div>
            <div>email: jonrzurita@gmail.com</div>
            <div>phone: 512-395-5046</div>
            <div>Austin, TX</div>
        </div>
      </div>
    )
  } else return null;
}

export default Modal;