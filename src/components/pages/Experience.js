import React, { Component } from 'react';
import '../../assets/css/Experience.css';

class Experience extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="experienceStyle">
              <h1>Experience</h1>
              <hr />
              <br />
              <div className="projectStyle">
                <h2>Projects</h2>
                <br />
                  <h4><a className="linkStyle" href="https://www.noahvarghese.me/projects/todo/">React Todo App</a></h4>
                  <br />
                  <p>A simple todo list written using React. Was used to get familiar with React and state management.</p>  
                  <br />
                  <h4><a className="linkStyle" href="https://github.com/noahvarghese/userApi">Authentication Api</a></h4>
                  <br />
                  <p>A restful api that handles user authentication using json web tokens. Written in PHP and uses a mySQL database. Demonstrates secure user authentication techniques, as well as database security and scripting.</p>
                  <br />
                  <h4><a className="linkStyle" href="https://www.noahvarghese.me/projects/restaurant">Restaurant Generator</a></h4>
                  <br />
                  <p>A single page web app written in JavaScript and using Bootstrap for styling. Was used to get familiar with bootstrap and responsive design. Utilizes the geolocation api, as well as Yelp's api. Demonstrates familiarity with ajax and json.</p>  
              </div>
              <div className="skillsStyle">
                <h2>Skills</h2>
                <br />
                <div>
                <h4>Back End Technologies</h4>
                <ul>
                  <li>PHP</li>
                  <li>C#/ASP.NET/.NET CORE</li>
                </ul>
                <br />
                </div>
                <div>
                <h4>Front End Technologies</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
                <br />
                </div>
                <div>
                <h4>Frameworks</h4>
                <ul>
                  <li>BootStrap 4</li>
                  <li>React</li>
                  <li>jQuery</li>
                  <li>ASP.NET MVC</li>
                  <li>Entity Framework</li>
                </ul>
                </div>
                <br />
                <div>
                <h4>Databases</h4>
                <ul>
                  <li>SQL (MSSQL, mySQL)</li>
                </ul>
                <br />
                </div>
              </div>
            </div>
        </React.Fragment>
    );
  }
}

export default Experience;
