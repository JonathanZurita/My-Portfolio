import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './components/search.js';
import "../dist/styles.css";
import Tools from './components/ToolsDropDown.js';
import Welcome from './components/Welcome.js';
import Grid from './components/Grid.jsx';
import Modal from './components/Modal.jsx';
import Projects from './components/Projects.jsx';

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
            <div>
                <Grid /> 
            </div>

            
            <Projects />
            <Modal 
                contactInfoModal={contactInfoModal}
                handleContactInfoModal={toggleContactInfoModal} 
            />
        </div>
    )
}

export default App;