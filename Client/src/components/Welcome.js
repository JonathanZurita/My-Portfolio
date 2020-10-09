import React, { useState, useEffect } from 'react';
import {Animated} from "react-animated-css";
import {NavLink} from "react-router-dom";


const WelcomePage = () => {

return (
    <div className="container">
        <div className="name"> 
            Hi, my name is Jonathan Zurita and
            I am a Full Stack Software Developer... 
        </div>
        <Animated className="welcomeBtnAnimation"  animationIn="flipInX" animationOut="fadeOut" isVisible={true} animationInDelay={5000}>
            <NavLink className="welcomeBtn" to='/projects'> ...check out my work</NavLink>
        </Animated>

        <span className="moon">
            <Animated animationIn="flipInY" animationOut="fadeOut" isVisible={true}>
                <img className="fireworks" 
                    src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/FBE778C8-6CDE-4830-8760-A2045C809C04.png" 
                    width="70vh" height="70vh"
                />
            </Animated>
        </span>
            
        <span className="fireworksContainer">
            <Animated className="flashAnimation" animationIn="flash" animationOut="fadeOut" isVisible={true}>
                <iframe className="fireworks2" 
                    src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/ezgif.com-gif-maker+(1).gif"
                />
            </Animated>
        </span>

        <span className="bridgeContainer">
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <img className="bridge" 
                    src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/77056C27-3AE5-4594-ADF7-619EB65DD799.png"
                />
            </Animated>
        </span>

        <span className="water" />

    </div>
)
}

export default WelcomePage;