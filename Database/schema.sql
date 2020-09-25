DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;
use portfolio;


create table project(
  id INT Auto_INCREMENT PRIMARY KEY,
  title varchar(255),
  timeline varchar(255),
  info varchar(1000),
  tech varchar(255),
  url varchar(255),
  explanation varchar(255),
  dataclass varchar(100),
  vidclass varchar(100)
);

create table photo(
  id INT Auto_INCREMENT PRIMARY KEY,
  url varchar(255)
)

INSERT into project(title, timeline, info, tech, url, explanation, dataclass, vidclass) VALUES (
  "Prrget", 
  "Jun 2020 — Jul 2020", 
  "Collaborated in agile workflow with team of 4 engineers using a SOA. \n Redesigned shopping cart modal, increasing  initial load speed. \n Researched AWS and deployed on elastic beanstalk due to speed and compatibility. \n  Dynamically rendered shopping cart items by listening to other services.",
  "Tech used: JavaScript, React, Express, NodeJS, HTML/CSS, AWS S3, RDS and Elastic Beanstalk.",
  "https://www.youtube.com/embed/LqqZ-tMqGM4",
  "Replicated Target Website",
  "prrgetData",
  "prrgetVid"
);
INSERT into project(title, timeline, info, tech, url, explanation, dataclass, vidclass) VALUES (
  "Landescape", 
  'Jul 2020 — Sept 2020', 
  "Researched react native tools and created full-stack mobile application.\n Drafted wireframes with Figma and designed/built PostgresQL DB\n Optimized components with react native elements.\n Custom-mapped photos into grid layout with Javascript.\n Designed photo markers with react native maps and Unsplash API.",
  "Tech used: React Native, Expo, PostgresQL, S3, node, Express, Axios, knexJS, Unsplash API, babel",
  'https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/Landescape.mp4',
  "Photography/Hiking React Native App",
  "landescapeData",
  "landescapeVid"
);

INSERT into project(title, timeline, info, tech, url, explanation, dataclass, vidclass) VALUES (
  "Sharity", 
  "Jul 2020 — Aug 2020", 
  "Was delegated as the UI Manager in agile workflow with team of 8 engineers.\n Researched user lifecycle and created element tree to visualize relationship of services.\n Built wireframes using Figma to depict features of each UI component.\n Created list components and sorting algorithm to allow user to sort through data easily.",
  "Tech used: JavaScript, HTML/CSS, ReactJS, Lodash, MongoDB, AWS, Express",
  'https://interviewstuffjonathanzurita.s3.us-east-2.amazonaws.com/sharity.mp4',
  "React App Connecting Donors & Charities",
  "sharityData",
  "sharityVid"
);

INSERT into photo(url) VALUES ('https://lh3.googleusercontent.com/9U54cumz_3OUSeJTu0Pm0cHweyLD4jTLnCrfwpyUa-J_LR0zbJL79xf1FInIOgJ2fKw7yN-3kYKR5Lvstn2dKO_B9zeYPJ7g46EJCZ02TLGKiSFbTYqerYKKtpi2TePK0NyrK6Ry8pY=w1000-h1000');
INSERT into photo(url) VALUES ('https://lh3.googleusercontent.com/jrOhF8pP876-wVI8JuG6OzwnnAYoLKU1HtouG8ErKdyfN_ed2XpdyDsByQ36HJEr1h0ohqjNOk7IYCbR8Cmv4ZB1RVQnJoqOXLPzs7ih6zq6ZwGkT1aS-PDoeWg5h0QkAo0IhGws3zA=w1000-h1000');
INSERT into photo(url) VALUES ('https://lh3.googleusercontent.com/dXR5hTCevsNBaE-caR5HOArE2NdviG_sxDaq2JkgCxh9k1cJSHpjA_EtMWbJmAmbNHvBPSoghLBz_lZtJoHX0j7AI9shqRq5pOdA4uMtovxQ9CP_hwwfFZxR_LmU_Ky1vPI0utlG290=w1000-h1000');