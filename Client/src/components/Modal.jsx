import React from 'react';


const Modal = ({ contactInfoModal, handleContactInfoModal }) => {

  if(contactInfoModal) {
    return (
      <div 
        className="modalWrap" 
        
        id="contactModal"
        onClick={()=> handleContactInfoModal()}
      >
            <div className="modalBody"
            aria-roledescription="this is a modal with my contact information on it"
            >
              <img 
                src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/profile+circle+pic.png"  
                height='100px' width='100px'
                alt="A professional head shot of me" />
              <a 
                href="https://github.com/JonathanZurita"
                aria-roledescription="My GitHub profile link"
              >
                <i className="fab fa-github-alt"></i>
                {'\u00A0'} github.com/JonathanZurita
              </a>
              <a 
                href="https://www.linkedin.com/in/jonathanzurita123/"
                aria-roledescription="A link to my LinkedIn profile"
              >
                <i className="fab fa-linkedin"></i>
                {'\u00A0'} linkedin.com/in/jonathanzurita123/
              </a>
              <a 
                href="https://www.instagram.com/trail_less_traveled/"
                aria-roledescription="My Instagram Profile link"
              > 
                <i className="fab fa-instagram"></i>
                {'\u00A0'} trail_less_traveled
              </a>
              <a 
                href="mailto:jonrzurita@gmail.com"
                aria-roledescription="a link to email me"
              >email: jonrzurita@gmail.com</a>
              <a 
                href="tel:5123955046"
                aria-roledescription="a link to call Jonathan"
              >phone: 512-395-5046</a>
              <a>Home: Austin, TX</a>
            </div>
          </div>
    )
  } else return null;
}

export default Modal;