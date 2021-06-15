import React from 'react';
import Project from './project.jsx';
import axios from 'axios';
import {Animated} from "react-animated-css";
import { NavLink } from "react-router-dom";
import Search from './search.js';
import Footer from './footer.jsx';


const ProjectList = [ 
  {
    'title': "Prrget",
    'timeline': "Jun 2020 — Jul 2020",
    'info': "Collaborated in agile workflow with team of 4 engineers using a SOA. \n Redesigned shopping cart modal, increasing  initial load speed. \n Researched AWS and deployed on elastic beanstalk due to speed and compatibility. \n  Dynamically rendered shopping cart items by listening to other services.",
    'tech': "Tech used: JavaScript, React, Express, NodeJS, HTML/CSS, AWS S3, RDS and Elastic Beanstalk.",
    'url': "https://www.youtube.com/embed/LqqZ-tMqGM4",
    'explanation': "Replicated Target Website",
    'dataclass': "landescapeData",
    'vidclass': "prrgetVid"
  }, {
    'title': "Landescape", 
    'timeline': 'Jul 2020 — Sept 2020', 
    'info':"Researched react native tools and created full-stack mobile application.\n Drafted wireframes with Figma and designed/built PostgresQL DB\n Optimized components with react native elements.\n Custom-mapped photos into grid layout with Javascript.\n Designed photo markers with react native maps and Unsplash API.",
    'tech': "Tech used: React Native, Expo, PostgresQL, S3, node, Express, Axios, knexJS, Unsplash API, babel",
    'url': 'https://youtube.com/embed/_h0yZfQ3jiE',
    'explanation': "Photography/Hiking React Native App",
    'dataclass': "landescapeData",
    'vidclass':  "landescapeVid",
  }
]
const Projects = ({ projectNamefromRouter }) => {
  // console.log(projectName)

  const [projectData, setProjectData] = React.useState(ProjectList);
  const [projectName, setProjectName] = React.useState(projectNamefromRouter);

  React.useEffect(()=> {
    //getProjects();
  },[]);

  //sets project data state from the DB
  // const getProjects = () => {

  //   axios.get(`/project`, {params : {name: projectName}})
  //   .then(res => {
  //     setProjectData(res.data);
  //   })
  //   .catch(err => {
  //     console.log('axios error getting project info: ', err);
  //   })
  // }

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
          <Animated className="projectAnimation" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <Project key={i}
              rank={i}
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