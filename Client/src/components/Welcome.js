import React, { useState, useEffect } from 'react';
import {Animated} from "react-animated-css";


const WelcomePage = () => {

return (
    <div className="container">
                <div className="title">
                    <div className="titleWrap">
                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <h1 className="name">Jonathan Zurita</h1>
                        </Animated>
                        
                        <div className="titleAboutWrap">
                        <span className="aboutBtn">about me ...</span>
                        <div className="aboutWrap">
                        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
                                <p className="about">
                                I'm passionate about creating User Interfaces that are not just functional,
                                but beautiful, in which people can enjoy interacting with.
                                I care deeply about helping people through my craft, and learning about all things tech.
                                Currently, Im looking to join a diverse and inclusive team where ideas are welcomed
                                and I can contribute my experience of carting, scaling and maintaining applications.
                                </p>
                            </Animated>
                        </div>
                        </div>
                    </div>
                </div>
            <div className="moon">
                <Animated animationIn="flipInY" animationOut="fadeOut" isVisible={true}>
                    <img className="fireworks" 
                        src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/FBE778C8-6CDE-4830-8760-A2045C809C04.png" 
                        width="70vh" height="70vh"
                    />
                </Animated>
                </div>
        
            <div className="fireworksContainer">
            <Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
                    <iframe className="fireworks2" 
                        src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/ezgif.com-gif-maker+(1).gif"
                    />
                </Animated>
                </div>
            <div className="bridgeContainer">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <img className="bridge" 
                        src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/77056C27-3AE5-4594-ADF7-619EB65DD799.png"
                    />
                </Animated>
            </div>

        </div>
)
}

export default WelcomePage;