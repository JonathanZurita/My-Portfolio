import React from 'react';
import Project from './project.jsx';
import axios from 'axios';
import {Animated} from "react-animated-css";
import { NavLink } from "react-router-dom";
import Search from './search.js';
import Footer from './footer.jsx';
const Projects = ({ projectNamefromRouter }) => {
  // console.log(projectName)

  const [projectData, setProjectData] = React.useState([]);
  const [projectName, setProjectName] = React.useState(projectNamefromRouter);

  React.useEffect(()=> {
    getProjects();
  },[]);

  //sets project data state from the DB
  const getProjects = () => {

    axios.get(`/project`, {params : {name: projectName}})
    .then(res => {
      setProjectData(res.data);
    })
    .catch(err => {
      console.log('axios error getting project info: ', err);
    })
  }

  return (
    <div>

      <Search />

      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOut"
        isVisible={true}
      >
      <div className="pageHeader">
        <NavLink className="projectsTitle" to="/projects">
          <h1 id="title">Projects</h1>
        </NavLink>
        <div  className="projectLinks">
            <NavLink className="linkName1" to="/landescape">
              <span> Landescape </span>
            </NavLink>
            <NavLink className="linkName2" to="/sharity">
              <span> Sharity </span>
            </NavLink>
            <NavLink className="linkName3" to="/prrget">
              <span> Prrget </span>
            </NavLink>
        </div>
      </div>

      <div className="projectsWrapper">
        {projectData.map((project, i) => 
          <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <Project key={i}
              data={project} 
            />
          </Animated>
        )}
      </div>
      <Footer />
      </Animated>
    </div>
  )
}

export default Projects;