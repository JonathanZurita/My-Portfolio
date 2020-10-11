import React, { useState, useEffect } from 'react';


const Project = ({ data, rank }) => {
  const [projectData, setProjData] = useState(data);

  const makeBullets = () => {
    var sentences = projectData.info.split('\n');
    var bullets = [];
    for(var i = 0; i < sentences.length; i++) {
      if(sentences[i].length > 0) {
        bullets.push(sentences[i])
      }
    }
    return (
      <ul className="projectBullets">
        {bullets.map((bullet, i) => 
        
          <li className="bullet"
            key={i}>{bullet}</li>

        )}
        
      </ul>
    )
  }
 
  return (
    <div className="projectContainer" id={projectData.title} id={`rank${rank % 2}`}>
      
      <div className="proTitle">{projectData.title}</div>
    
      <div className="proDate">{projectData.explanation}</div>
    
      <div id={projectData.dataclass} className="proInfo" >
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