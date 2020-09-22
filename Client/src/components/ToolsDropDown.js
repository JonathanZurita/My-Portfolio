import React from 'react';
import Table from 'react-bootstrap/Table';

const toolData = ['JavaScript', 'React', 'React Native', 'PostgreSQL', 'MongoDB', 'MySQL', 'Hooks', 'Express', 'lodash']
const projects = ['Landescape', 'Prrget', 'Back End Testing', 'Sharity']
const education = ["Hack Reactor Software Engineering Grad: 2020", "Arizona State University", "Masters in Teaching English to Speakers of Other Languages", 'Texas State University', 'Business Admi/Mgmt with Entrepreneurial Concentration']
const hobbies = ["landscape photography", 'traveling', 'hiking'];
const Tools = ({toolsDrop, handleToolsDrop}) => {

    if(toolsDrop) {
        return (
            <div className="modalWrap" onClick={() => handleToolsDrop()}>
                <span>
                <Table className='toolsTable' >
                    <thead>
                        <tr>
                        <th className="table">tools</th></tr>
                    </thead>
                    <tbody>
                        {toolData.map(row => 
                            <tr className="table">
                                <td>{row}</td>
                            </tr>
                        )}  
                    </tbody>
                </Table>
                </span>
                <span>

                <Table className='projTable'  >
                    <thead>
                        <tr>
                        <th className="table">projects</th></tr>
                    </thead>
                    <tbody>
                        {projects.map(row => 
                            <tr className="table">
                                <td>{row}</td>
                            </tr>
                        )}  
                    </tbody>
                </Table>
                </span>
                <span>
                <Table className='eduTable'  >
                    <thead>
                        <tr>
                        <th className="table">education</th></tr>
                    </thead>
                    <tbody>
                        {education.map(row => 
                            <tr className="table">
                                <td>{row}</td>
                            </tr>
                        )}  
                    </tbody>
                </Table>
                </span>
                <span >
                <Table className='hobTable'>
                    <thead>
                        <tr>
                            <th>hobbies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hobbies.map((row, i) => 
                            <tr>
                                <td className="table">{row}</td>
                            </tr>
                        )}  
                    </tbody>
                </Table>
                </span>
            </div>
        )
    } else return null;
}

export default Tools;