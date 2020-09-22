import React, { useState, useEffect } from 'react';

const Project = ({url, data, vidclass, dataclass}) => {
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
    <div className="projectContainer" id={dataclass}>
      <div className="proTitle">{projectData.title}</div>
    
      <div className="proDate">{projectData.exp}</div>

      <div className="proInfo">
          {makeBullets()}
      </div>
        
      <iframe id="project"
          className={vidclass}
          width="98%" height="90%"
          marginWidth="0" 
          src={`${url}`}
          frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
      > </iframe>
    
      <div className="proTech">{projectData.tech}</div>
      
    </div>
  )
}

export default Project;