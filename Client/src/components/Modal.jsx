import React from 'react';


const Modal = ({ contactInfoModal, handleContactInfoModal }) => {

  if(contactInfoModal) {
    return (
      <div 
        className="modalWrap" 
        id="contactModal"
        onClick={()=> handleContactInfoModal()}
      >
        <div className="contactModalBodyDetail">
          <div className="contactModalBodyDetail2">
            <div className="modalBody">
              <img src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/profile+circle+pic.png"  height='100px' width='100px' />
              <a href="https://github.com/JonathanZurita">
                <i className="fab fa-github-alt"></i>
                {'\u00A0'} github.com/JonathanZurita
              </a>
              <a href="https://www.linkedin.com/in/jonathanzurita123/">
                <i className="fab fa-linkedin"></i>
                {'\u00A0'} linkedin.com/in/jonathanzurita123/
              </a>
              <a href="https://www.instagram.com/trail_less_traveled/"> 
                <i className="fab fa-instagram"></i>
                {'\u00A0'} trail_less_traveled
              </a>
              <a href="mailto:jonrzurita@gmail.com">email: jonrzurita@gmail.com</a>
              <a href="tel:5123955046">phone: 512-395-5046</a>
              <a>Austin, TX</a>
            </div>
          </div>
        </div>
      </div>
    )
  } else return null;
}

export default Modal;