import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'; // Importing icons
import './About.css';  // Import your CSS styles for About section

const About = () => {
  return (
    <section className="about" id="about">
      <img src="/assets/profile.jpg" alt="Matt Cristintello" className="profile-img" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
          I'm Matt Cristintello, a passionate senior web developer with 7+ years of experience in creating scalable web applications. 
          I’ve recently expanded my skill set into AI/ML and Cloud Computing, making me well-rounded in modern technologies.
        </p>

        <h3>Skills</h3>
        <div className="skills">
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <h4>React</h4>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <h4>Node.js</h4>
          </div>
          <div className="skill-item">
            <FaPython className="skill-icon" />
            <h4>Python</h4>
          </div>
          <div className="skill-item">
            <FaAws className="skill-icon" />
            <h4>AWS</h4>
          </div>
          <div className="skill-item">
            <FaDocker className="skill-icon" />
            <h4>Docker</h4>
          </div>
          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <h4>Git</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;