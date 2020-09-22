import React from 'react';
import Project from './project.jsx';

const projectData = 
[{
  vidclass: "landescapeVid",
  dataclass: "landescapeData",
  url: 'https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/Landescape.mp4',
  title: 'Landescape - Photography/Hiking React Native App',
  date: 'Jul 2020 — Sept 2020',
  info: "Researched react native tools and created full-stack mobile application.\n Drafted wireframes with Figma and designed/built PostgresQL DB\n Optimized components with react native elements.\n Custom-mapped photos into grid layout with Javascript.\n Designed photo markers with react native maps and Unsplash API.",
  tech: "Tech used: React Native, Expo, PostgresQL, S3, node, Express, Axios, knexJS, Unsplash API, babel"
}, {
  vidclass: "sharityVid",
  dataclass: "sharityData",
  url: 'https://landescape.s3.amazonaws.com/sharity.gif',
  title: "Sharity- React App Connecting Donors & Charities",
  date: "Jul 2020 — Aug 2020",
  info: "Was delegated as the UI Manager in agile workflow with team of 8 engineers.\n Researched user lifecycle and created element tree to visualize relationship of services.\n Built wireframes using Figma to depict features of each UI component.\n Created list components and sorting algorithm to allow user to sort through data easily.",
  tech: "Tech used: JavaScript, HTML/CSS, ReactJS, Lodash, MongoDB, AWS, Express"

}, {
  vidclass: "prrgetVid",
  dataclass: "prrgetData",
  url: "https://www.youtube.com/embed/LqqZ-tMqGM4",
  title: " Frontend Replica - Replicated Target Website",
  date: "Jun 2020 — Jul 2020",
  info: "Collaborated in agile workflow with team of 4 engineers using a SOA. Redesigned shopping cart modal, increasing  initial load speed. Researched AWS and deployed on elastic beanstalk due to speed and compatibility. Dynamically rendered shopping cart items by listening to other services.",
  tech: "Tech used: JavaScript, React, Express, NodeJS, HTML/CSS, AWS S3, RDS and Elastic Beanstalk."
}];

const Projects = () => {
  
  return (
    <div>
      <div className="pageHeader">
        <h1>Projects</h1>
        <p>Here is a list of recent projects I've been a part of</p>
      </div>
      <div>
        {projectData.map((project, i) => 
          <Project key={i} 
            url={project.url} 
            vidclass={project.vidclass} 
            dataclass={project.dataclass} 
            data={project} 
          />
        )}
      </div>
{/* 
      <Project url={prrgetVid} data={projectData} vidclass={"prrgetVid"} dataclass={"prrgetData"}/>
      <Project url={sharityVid} data={prrgetData} vidclass={"sharityVid"} dataclass={"sharityData"}/>
      <Project url={landescapeVid} data={prrgetData} vidclass={"landescapeVid"} dataclass={"landescapeData"}/> */}
    </div>
  )
}

export default Projects;