import React, { useState, useEffect } from 'react';
import Search from './components/search.js';
import "../dist/styles.css";
import Tools from './components/ToolsDropDown.js';
import Welcome from './components/Welcome.js';
import Grid from './components/Grid.jsx';
import Modal from './components/Modal.jsx';
import Projects from './components/Projects.jsx';

import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
    const [data, setData] = useState([])
    const [toolsDrop, setToolsDrop] = useState(false);
    const [contactInfoModal, setContactInfoModal] = useState(false);
    const toggleToolsDropModal = ()=> {
        if(toolsDrop) {
            console.log('false')
            setToolsDrop(false)
        } else {
            setToolsDrop(true)
            console.log('true')
        }
    }
    const toggleContactInfoModal = ()=> {
        if(contactInfoModal) {
            console.log('false')
            setContactInfoModal(false)
        } else {
            setContactInfoModal(true)
            console.log('true')
        }
    }

    return (
        <div className="wrap">

            <div className="background" />
            <Search 
                handleToolsDrop={toggleToolsDropModal} 
                handleContactInfoModal={toggleContactInfoModal}
            />

            <Tools 
                toolsDrop={toolsDrop} 
                handleToolsDrop={toggleToolsDropModal}
            />
            <div>
                <Welcome /> 
            </div>
            <Projects />
            <div>
                <Grid /> 
            </div>

            
            <Modal 
                contactInfoModal={contactInfoModal}
                handleContactInfoModal={toggleContactInfoModal} 
            />
            <div className="footer">
                <div className="footerContent">
                    <div>LN</div>
                    <div>GITHUB</div>
                    <div>email</div>
                </div>
                
            </div>
        </div>
    )
}

export default App;