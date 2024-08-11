import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="projects container">
      <h2 className="section-title" data-aos="fade-up">Projects</h2>
      
      <h3 className="sub-section-title" data-aos="fade-left">Active Projects</h3>
      <div className="projects-grid">
        <div className="project-card project-active" data-aos="zoom-in">
          <div className="project-info">
            <h3>Website Portfolio</h3>
            <p>Independently created a personal website portfolio using front-end development technologies.</p>
          </div>
        </div>
      </div>

      <h3 className="sub-section-title" data-aos="fade-left">Inactive Projects</h3>
      <div className="projects-grid">
        <div className="project-card project-inactive" data-aos="zoom-in">
          <div className="project-info">
            <h3>JAVA Airport System</h3>
            <p>Collaboratively developed an airport management system using Eclipse IDE and WindowBuilder.</p>
          </div>
        </div>
        <div className="project-card project-inactive" data-aos="zoom-in">
          <div className="project-info">
            <h3>UNICEF Sustainable Development Goal Web Application</h3>
            <p>Developed a web application for UNICEF using ReactJS within Visual Studio.</p>
          </div>
        </div>
        <div className="project-card project-inactive" data-aos="zoom-in">
          <div className="project-info">
            <h3>Python-based Chatbot for Autistic Care</h3>
            <p>Engineered a specialised chatbot using Python leveraging the natural language processing library NLTK.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
