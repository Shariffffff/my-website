import React from 'react';
import './Experience.css';
import AOS from 'aos';

const Experience = () => {
  return (
    <div className="experience container">
      <h2 className="section-title" data-aos="fade-up">Experience</h2>
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content">
            <h3>Software Developer, InvictIQ</h3>
            <p>July 2024 - Present</p>
            <ul>
              <li>Spearheaded the development of a sophisticated intelligent healthcare research agent using C# and utilising Azure AI services.</li>
              <li>Engineered MongoDB databases to store and retrieve complex medical data efficiently.</li>
              <li>Implemented Azure DevOps CI/CD pipelines to automate testing, deployment, and version control processes.</li>
              <li>Integrated Azure OpenAI to enhance the agent's language understanding capabilities.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-left">
          <div className="timeline-content">
            <h3>Sales Athlete, Nike</h3>
            <p>July 2022 - Present</p>
            <ul>
              <li>Provided exceptional customer service by assisting and engaging with customers throughout the day.</li>
              <li>Played a key role in stock management by consistently replenishing and organising merchandise.</li>
              <li>Stayed updated with the latest Nike products, technologies, and innovations.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content">
            <h3>Pharmacists’ Assistant, Pharmacy Republic</h3>
            <p>July 2017 – Sep 2018</p>
            <ul>
              <li>Proficiently handled private prescriptions ensuring accuracy and confidentiality.</li>
              <li>Logged private prescriptions into the pharmacy's database maintaining detailed records for reference and compliance.</li>
              <li>Demonstrated strong organisational skills by efficiently storing and categorising minor ailment products.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
