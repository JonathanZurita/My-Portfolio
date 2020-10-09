import React from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";

const toolData = [
  "JavaScript",
  "React",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Hooks",
  "Express",
  "lodash",
];
const projects = ["Landescape", "Prrget", "Sharity"];
const education = [
  "Hack Reactor Software Engineering Grad: 2020",
  "Arizona State University:",
  "Masters in Teaching English to Speakers of Other Languages",
  "Texas State University:",
  "Business Admi/Mgmt with Entrepreneurial Concentration",
];
const hobbies = ["landscape photography", "traveling", "hiking"];

const Tools = ({ toolsDrop, handleToolsDrop }) => {
  if (toolsDrop) {
    return (
      <div onClick={() => handleToolsDrop()}>
        <div className="emptySpaceModalNavSection"></div>
        <div className="modalWrap" onClick={() => handleToolsDrop()}>
          <span>
            <Table className="toolsTable">
              <thead>
                <tr>
                  <th className="table">My Toolbox</th>
                </tr>
              </thead>
              <tbody>
                {toolData.map((row, i) => (
                  <tr key={i} className="table">
                    <td>{row}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </span>
          <span>
            <Table className="projTable">
              <thead>
                <tr>
                  <th className="table">
                    <NavLink to="/projects">Projects</NavLink>
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((row, i) => (
                  <tr key={i} className="table">
                    <td>
                      <NavLink to={`/${row}`}>{row}</NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </span>
          <span>
            <Table className="eduTable">
              <thead>
                <tr>
                  <th className="table">Education</th>
                </tr>
              </thead>
              <tbody>
                {education.map((row, i) => (
                  <tr key={i} className="table">
                    <td>{row}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </span>
          <span>
            <NavLink to="/pics">
              <Table className="hobTable">
                <thead>
                  <tr>
                    <th>Hobbies</th>
                  </tr>
                </thead>
                <tbody>
                  {hobbies.map((row, i) => (
                    <tr key={i}>
                      <td className="table">{row}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </NavLink>
          </span>
        </div>
      </div>
    );
  } else return null;
};

export default Tools;
