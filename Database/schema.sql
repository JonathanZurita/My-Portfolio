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
  url varchar(255),
  description varchar(1000),
  alt varchar(255),
  date varchar(255),
  city varchar(255),
  state varchar(255)
);

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
  'https://youtube.com/embed/_h0yZfQ3jiE',
  "Photography/Hiking React Native App",
  "landescapeData",
  "landescapeVid"
);


INSERT into project(title, timeline, info, tech, url, explanation, dataclass, vidclass) VALUES (
  "Portfolio",
    "Sept 2020- Oct 2020",
    "Front end software development project. \n Researched compatibility best practices and optimized for mobile. \n Created scalable portfolio with interactive welcome section. \n Includes photo grid and modal for hobbies section. \n Photos hosted on S3 bucket and data on mysql DB on RDS. \n
components mapping data from DB for scalability.",
"Tech used: React.js, Javascript, HTML, CSS, Elastic Beanstalk, AWS RDS, Mysql Workbench, S3, NodeJS, Express, Axios, Bootstrap",
"https://www.youtube.com/embed/hJZEQbLzUZw",
"Front End Project/My Portfolio",
"portfolioData",
"portfolioVid"
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

INSERT into photo(url, description, alt, date, city, state) VALUES (
  'https://lh3.googleusercontent.com/9U54cumz_3OUSeJTu0Pm0cHweyLD4jTLnCrfwpyUa-J_LR0zbJL79xf1FInIOgJ2fKw7yN-3kYKR5Lvstn2dKO_B9zeYPJ7g46EJCZ02TLGKiSFbTYqerYKKtpi2TePK0NyrK6Ry8pY=w1000-h1000',
  'Austin, Texas is the city I call home. This city is a safehaven for outcasts and wonderers like myself. This photo was taken in the fall at dawn. The State Capitol is siloughetted by the glow of the fall sunset.',
  'Photo of the Texas State Capitol siloughetted by a fall sunset.',
  'October 24th, 2018',
  'Austin',
  'Texas'
);
INSERT into photo(url, description, alt, date, city, state) VALUES (
  'https://lh3.googleusercontent.com/jrOhF8pP876-wVI8JuG6OzwnnAYoLKU1HtouG8ErKdyfN_ed2XpdyDsByQ36HJEr1h0ohqjNOk7IYCbR8Cmv4ZB1RVQnJoqOXLPzs7ih6zq6ZwGkT1aS-PDoeWg5h0QkAo0IhGws3zA=w1000-h1000',
  'Gwangan Bridge has quickly become a globally known landmark after being featured on The Black Panther. This beach was my escape while living in Busan. The bridge glows in LED lights at night in Korean fashion, and every year the city puts on an epic fireworks show behind it.',
  'The Gwangang Bridge is off focus in the background with a close up of a sand filled beach scene',
  'September of 2017',
  'Busan',
  'South Korea'
);
INSERT into photo(url, description, alt, date, city, state) VALUES (
  'https://lh3.googleusercontent.com/dXR5hTCevsNBaE-caR5HOArE2NdviG_sxDaq2JkgCxh9k1cJSHpjA_EtMWbJmAmbNHvBPSoghLBz_lZtJoHX0j7AI9shqRq5pOdA4uMtovxQ9CP_hwwfFZxR_LmU_Ky1vPI0utlG290=w1000-h1000',
  'This was the scene from the balcony of the teacher\'s lounge of the school where I worked at. I came out here to relax, but the sounds of children laughing in the distance could still be heard.',
  'Buildings stacked against a mountain in a crowded neighborhood in Busan, South Korea',
  'September of 2016',
  'Busan',
  'South Korea'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0107.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0121.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0190.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0217.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0275.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0279.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0293.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0346.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0375.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0420.jpg'
);


INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2693.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2623.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2617.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_1536.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_1489.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_1488.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_1457.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_0549.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/FullSizeRender.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_1435.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_1423.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_1399.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0540.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0533.jpg'
);
INSERT into photo(url) VALUES (
  'https://landscapefavpics.s3-us-west-2.amazonaws.com/DSC_0524.jpg'
);

INSERT into photo(url) VALUES (
"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2877.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2910.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2911.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2912.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2999.jpg"
);
INSERT into photo(url) VALUES (
"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_2876.jpg"
);

INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_3041.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_3224.jpg"
);

INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_3582.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_3707.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_4151.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_4824.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_5496.jpg"
);
INSERT into photo(url) VALUES (

"https://landscapefavpics.s3-us-west-2.amazonaws.com/IMG_5525.jpg"
);





