import React, { useState, useEffect } from 'react';

const Project = ({ data }) => {
  const [projectData, setProjData] = useState(data);

  const makeBullets = () => {
    var sentences = projectData.info.split('\n');
    return (
      <ul className="projectBullets">
        {sentences.map((sentence, i) => 
          <li 
            key={i}>{sentence}</li>
        )}
        
      </ul>
    )
  }
 
  return (
    <div className="projectContainer" id={projectData.title}>
      <div className="proTitle">{projectData.title}</div>
    
      <div className="proDate">{projectData.explanation}</div>

      <div id={projectData.dataclass} className="proInfo">
          {makeBullets()}
      </div>
        
      <iframe id="project"
          className={projectData.vidclass}
          width="98%" height="90%"
          marginWidth="0" 
          src={`${projectData.url}`}
          frameBorder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
      > </iframe>
    
      <div className="proTech">{projectData.tech}</div>
      
    </div>
  )
}

export default Project;