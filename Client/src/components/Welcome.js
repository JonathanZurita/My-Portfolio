import React, { useState, useEffect } from 'react';

const WelcomePage = () => {

return (
    <div className="container">
                <div className="title">
                    <span className="name">Jonathan Zurita</span>
                    <span className="subheader">Full Stack Software Engineer</span>
                    <span className="about">
                    I'm passionate about creating User Interfaces that are not just functional, <br/>
                    but beautiful, in which people can enjoy interacting with.<br/>
                    I care deeply about helping people through my craft, and learning about all things tech.<br/>
                    Currently, Im looking to join a diverse and inclusive team where ideas are welcomed <br/>
                    and I can contribute my experience of carting, scaling and maintainig applications.
                    </span>
                </div>
            <div className="moon">
                    <img className="fireworks" 
                        src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/FBE778C8-6CDE-4830-8760-A2045C809C04.png" 
                        width="70vh" height="70vh"
                    />
                </div>
        
            <div className="fireworksContainer">
                    <img className="fireworks2" 
                        src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/firework2.gif" 
                    />
                </div>
            <div className="bridgeContainer">
                    <img className="bridge" 
                        src="https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/77056C27-3AE5-4594-ADF7-619EB65DD799.png" 
                
                    />
            </div>

        </div>
)
}

export default WelcomePage;