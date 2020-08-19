import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './components/search.js';
import "../dist/styles.css";

const App = () => {
    const [data, setData] = useState([])

    return (
        <div>
            <Search />
            
            <div className="openingImage">
                <div className="name">
                    <div className="title">
                        <div>Jonathan Zurita</div>
                        <div className="subheader">--Full Stack Developer</div>
                    </div>
                </div>
            </div>
            <div className="projectContainerOne">
                <h1>Projects</h1>
                <div id="project" className="projectPrrget">
                </div>
                <div id="project" className="projectBackEnd">
                    back end scalability
                </div>
            </div>

            <div className="projectContainerTwo">
                <div id="project" className="projectLandescape">
                    MVP
                </div>
                <div id="project" className="projectSharity">
                </div>
            </div>
        </div>
    )
}

export default App;