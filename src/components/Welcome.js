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
                    src="https://lh3.googleusercontent.com/pw/ACtC-3dzYMIKBGtvdBsvy-Ry75eKHvHKujxX1aESWmqnr7ockRPKivGkO9JPej6T2vNsyHxP96BqyZEebTpFsIysnentThTEUcWi2hl70q8o8bv4K5gqO0AcmfFom3ErWdw99ZbX7dDw9cKmt_GSNliz2Ks2ew=s373-no?authuser=0"
                    width="70vh" height="70vh"
                />
            </Animated>
        </span>
            
        <span aria="photo of fireworks" className="fireworksContainer">
            <Animated className="flashAnimation" animationIn="flash" animationOut="fadeOut" isVisible={true}>
                
                <iframe className="fireworks2"
                  title="Fireworks illuminating over a night sky"
                  src="https://lh3.googleusercontent.com/ktfftxnLfOvtlEgm6Wpg40Kse3BMV7EQxa9hJ1H30p0CvHlj0GeUZFhDjbUSN7TRZH3vgf603hwFgi8BX6L9Ahha8VVHADfIGN6JENaqM5Kueu4FkcysnkUweST3egZAzd-1sZ0Gd6pZT4BjIIKJkT37OSh9KWGKCt5re-c30crcesopHNvfa-7WjWpXSMlagafdowbJILHcYQCRh8SOkDNvtpmEEOjqq4UlJzcHQsIIzl39Dmwece0QFOvIvRoS_TacT6o6A4YxECZH-H5sU-kmwd0mNhEJ3fqlHzKrVz0LJKA-bu2cU6MnWpFqIZI-6p6fuKwNu6eVgQU6DyGuuZlWTlwJBRNe1NJPthMXmM-oRfekC4dhncnHFMUHh5Gy9X9NGWO0FVVkozrklNVETR8rSJQ29PsF2h5oRFllgHNLmU55ZnWLtnq5hQzmZjO904jRT7vlagpy0hWrK2oCVy6dw2yh74DFvH9TkT5yhacg0uV_gL-C04YeTu2-GI69HgWv8pBzDzdDu_KXFrRnAwLZNwpLy48ySVhO3JluwdmjBriXTQV75UfnrGsze4fp7E78oocgao-3YaQ3TfK-L3QHGj6S1kmtvZwzPEV8mD6_N6wXrpb9eERFcsCGrR7FZq2l59dQcY1iBAYz7CA0l_crDg1FF8GwIDaiyL9SJA0Ann5tR7Cl7FcLvENFJ2ai5kkDLpWTy--L5QCvPluQmA4u=w460-h300-no?authuser=0"
                >
                </iframe>
            </Animated>
        </span>

        <span aria="decoration of bridge" className="bridgeContainer">
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                <img className="bridge" 
                    alt="gwangan bridge graphic design animated with an L.E.D. lights show"
                    src="https://lh3.googleusercontent.com/_RukR3aArW13cQDAspUATxaiZExgikkN5lf-Z8yMYv158D3B5vFnUljrAE4KRFeO3Xq-2Y3vk82qHo293rTNHXQVh0X4xoaB7JV157CcZcSZDagk0htrCOUIqT1_yH31QDjoTJo4zO-1KqQi_q1uMVzRianJlf1uslDOSFD4WLTnqW_hr6iJ8eilREznUF8LXj2tx4t66YOaxPayQOukLNwll7TqQVhQ9-ei38hzK6gV3M0vwUFNMeXGfjNbyXmCu1_yRIBlc4k79_M-WCwUoMxxUEzHZTQGffFDxtYO4rQ4DTJ0ipzUHlTOmwT8RWpVtuw5uC9j9rP8IcQ7JsP9GUkXmUy2iRpXDA1WwLjTAcdvV0cRfiRAPHsCD2Ki3TD2B-GbkB74zx8ntfWG4HQpTTLD7mHv52pOSBKFi3j4_LGyZiqcUR5u5Jd4oCBi6Ogjhwz7pJEXeY5Jk3Y7QYei5QGaZHwXePRdVHPk0OYeweGlv28Qis_xg8rJJ1kbZ2W8lj5PFmiehu5Yir-jdX89CJV-2HH7zxxAfYaawdreG0EIuEoZXJLzXUv5RA7_ugyB9KF3oQmDCjEQhEvEMVazPUOBoqK-I6KlZgWgUYaodkipwzl3eXArTduEi8jn7C5EK3ErGEO36ygaFXT1Gq2IYDxlFIBpVxtKFnwT6b_zRTwHP2dUneIBf5wdg7idf5iF2LxZFtRAVkdLQlTNIytOK-p5=w2310-h532-no?authuser=0"
                />
            </Animated>
        </span>

        <span aria="decoration of water" className="water" />

    </div>
)
}

export default WelcomePage;