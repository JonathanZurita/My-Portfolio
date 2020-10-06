import React, { useState, useEffect } from 'react';
import Search from './components/search.js';
import Tools from './components/ToolsDropDown.js';
import Welcome from './components/Welcome.js';
import Grid from './components/Grid.jsx';
import Modal from './components/Modal.jsx';
import Projects from './components/Projects.jsx';
import SearchSuggest from './components/searchSuggestions.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";



const App = () => {
    const [toolsDrop, setToolsDrop] = useState(false);
    const [contactInfoModal, setContactInfoModal] = useState(false);
    
    const toggleToolsDropModal = ()=> {
        if(toolsDrop) {
            setToolsDrop(false)
        } else {
            setToolsDrop(true)
        }
    }
    const toggleContactInfoModal = ()=> {
        if(contactInfoModal) {
            setContactInfoModal(false)
        } else {
            setContactInfoModal(true)
        }
    }

    return (
        <div className="wrap">
        <Router>
            <div className="background" />
            <Search 
                handleToolsDrop={toggleToolsDropModal} 
                handleContactInfoModal={toggleContactInfoModal}
            />
            <SearchSuggest />
                <Switch>
                <div>
                    <Route path="/projects" component={Projects} />
                    <Route path="/pics" component={Grid} />
                        <Route path="/sharity">
                            <Projects projectNamefromRouter={"Sharity"} />
                        </Route>
                        <Route path="/landescape">
                            <Projects projectNamefromRouter={"Landescape"} />
                        </Route>
                        <Route path="/prrget">
                            <Projects projectNamefromRouter={"Prrget"} />
                        </Route>
                    <Route path="/" exact>
                        <Welcome />
                        <Projects />
                        <Grid />
                    </Route>
                    </div>
                </Switch>
            
            <Tools 
                toolsDrop={toolsDrop} 
                handleToolsDrop={toggleToolsDropModal}
            />

            <Modal 
                contactInfoModal={contactInfoModal}
                handleContactInfoModal={toggleContactInfoModal} 
            />
            <div className="footer">
                <div className="footerContent">
                    <a href="https://www.linkedin.com/in/jonathanzurita123/" className="icon"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/JonathanZurita" className="icon"><i className="fab fa-github-alt"></i></a>
                    <a href="https://www.instagram.com/trail_less_traveled/" className="icon"><i className="fab fa-instagram"></i></a>
                </div>
                
            </div>
            </Router>
        
        </div>
    )
}

export default App;