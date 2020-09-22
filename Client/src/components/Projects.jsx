import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="pageHeader">
        <h1>Projects</h1>
        <p>Here is a list of recent projects I've been a part of</p>
      </div>
      <div className="projectContainerOne">
        
        <div id="project" className="projectPrrget">
            <iframe 
                width="60%" height="40%" 
                src="https://www.youtube.com/embed/LqqZ-tMqGM4" 
                frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            > </iframe>

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

export default Projects;