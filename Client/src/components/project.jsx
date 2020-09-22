import React, { useState, useEffect } from 'react';

const Project = ({url, data, vidclass, dataclass}) => {
  const [projectData, setProjData] = useState(data);

  return (
    <div className="projectContainer">
      <div className={dataclass}>
        <div className="proTitle">{projectData.title}</div>
        <div className="proDate">{projectData.date}</div>
        <div className="proInfo">{projectData.info}</div>
      </div>
        <div id="project" className={vidclass}>
            <iframe 
                width="100%" height="100%" 
                src={`${url}`}
                frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            > </iframe>
          <div className="proTech">{projectData.tech}</div>
      </div>
      
    </div>
  )
}

export default Project;