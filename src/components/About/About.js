import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about container">
      <h2 className="section-title" data-aos="fade-up">About Me</h2>
      <div className="about-content" data-aos="fade-left">
        <p>
          I am a passionate Software Developer with a deep interest in AI concepts, including machine learning, natural language processing, and AI-driven analytics. My journey in tech is driven by a desire to innovate and create impactful solutions.
        </p>
        <p>
          With strong proficiency in Python and C#, I enjoy crafting efficient and scalable applications. I have experience in developing AI solutions and I'm committed to staying at the forefront of technology.
        </p>
        <p>
          I'm also knowledgeable in cybersecurity principles and dedicated to enhancing security measures in all my projects. I believe in continuous learning and am always looking for opportunities to expand my skill set.
        </p>
        <blockquote data-aos="fade-right">"Strive not to be a success, but rather to be of value." - Albert Einstein</blockquote>
      </div>
    </div>
  );
};

export default About;
