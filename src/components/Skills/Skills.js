import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="skills container">
      <h2 className="section-title" data-aos="fade-up">Skills</h2>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">JavaScript</span>
        <div className="skill-bar-fill" style={{ width: '75%' }}>
          <span className="skill-percentage">75%</span>
        </div>
      </div>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">React</span>
        <div className="skill-bar-fill" style={{ width: '75%' }}>
          <span className="skill-percentage">75%</span>
        </div>
      </div>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">Node.js</span>
        <div className="skill-bar-fill" style={{ width: '70%' }}>
          <span className="skill-percentage">70%</span>
        </div>
      </div>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">Python</span>
        <div className="skill-bar-fill" style={{ width: '75%' }}>
          <span className="skill-percentage">75%</span>
        </div>
      </div>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">C#</span>
        <div className="skill-bar-fill" style={{ width: '45%' }}>
          <span className="skill-percentage">45%</span>
        </div>
      </div>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">R</span>
        <div className="skill-bar-fill" style={{ width: '70%' }}>
          <span className="skill-percentage">70%</span>
        </div>
      </div>

      <div className="skill-bar" data-aos="fade-right">
        <span className="skill-title">Azure AI Services</span>
        <div className="skill-bar-fill" style={{ width: '60%' }}>
          <span className="skill-percentage">60%</span>
        </div>
      </div>

      <p className="skill-description" data-aos="fade-up">
        The bars above indicate my level of proficiency in each skill, with higher percentages representing greater expertise.
      </p>
    </div>
  );
};

export default Skills;
