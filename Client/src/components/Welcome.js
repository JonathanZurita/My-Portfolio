import React, { useState, useEffect } from 'react';
import {Animated} from "react-animated-css";
import {NavLink} from "react-router-dom";


const WelcomePage = () => {

return (
    <div className="container">
        <div role="heading" aria-level="1">
          <h1 id="name1"> 
              Hi, my name is Jonathan Zurita 
          </h1>
          <h1 id="name2">  
            and I'm a Full Stack Software Developer.
          </h1>
        </div>
        <Animated aria="link" className="welcomeBtnAnimation"  animationIn="flipInX" animationOut="fadeOut" isVisible={true} animationInDelay={5000}>
            <NavLink aria="link" className="welcomeBtn" to='/projects'> ...check out my work</NavLink>
        </Animated>

        <span aria="decoration" className="moon">
            <Animated animationIn="flipInY" animationOut="fadeOut" isVisible={true}>
                <img className="fireworks" 
                    alt="graphic of an eclipsed moon"
                    src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/FBE778C8-6CDE-4830-8760-A2045C809C04.png" 
                    width="70vh" height="70vh"
                />
            </Animated>
        </span>
            
        <span aria="photo of fireworks" className="fireworksContainer">
            <Animated className="flashAnimation" animationIn="flash" animationOut="fadeOut" isVisible={true}>
                
                <iframe className="fireworks2"
                  title="Fireworks illuminating over a night sky"
                  src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/fireworks_gif.gif"
                >
                </iframe>
            </Animated>
        </span>

        <span aria="decoration of bridge" className="bridgeContainer">
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <img className="bridge" 
                    alt="gwangan bridge graphic design animated with an L.E.D. lights show"
                    src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/77056C27-3AE5-4594-ADF7-619EB65DD799.png"
                />
            </Animated>
        </span>

        <span aria="decoration of water" className="water" />

    </div>
)
}

export default WelcomePage;