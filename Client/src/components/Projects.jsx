import React from 'react';
import Project from './project.jsx';
import axios from 'axios';

const path = process.env.PATH || 'http://localhost:3000';

const Projects = () => {

  const [projectData, setProjectData] = React.useState([]);

  React.useEffect(()=> {
    getProjects();
  },[]);

  const getProjects = () => {
    axios.get(`${path}/project/`)
      .then(res => {
        setProjectData(res.data);
      })
      .catch(err => {
        console.log('axios error getting project info: ', err);
      })
  }

  return (
    <div>
      <div className="pageHeader">
        <h1>Projects</h1>
        <div className="projectLinks">
            <span className="linkName1">
              Landescape
            </span>
            <span className="linkName2">
              Sharity
            </span>
            <span className="linkName3">
              Prrget
            </span>

        </div>
      </div>
      <div className="projectsWrapper">
        {projectData.map((project, i) => 
          <Project key={i} 
            url={project.url} 
            vidclass={project.vidclass} 
            dataclass={project.dataclass} 
            data={project} 
          />
        )}
      </div>
    </div>
  )
}

export default Projects;