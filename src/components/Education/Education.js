import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education container">
      <h2 className="section-title" data-aos="fade-up">Education</h2>
      <div className="timeline">

        {/* University Education */}
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content">
            <h3>BSc (Hons) Computer Science, Brunel University London</h3>
            <p>Sept 2021 – July 2024 (First Class Honours)</p>
            <ul>
              <li>Cybersecurity (A+)</li>
              <li>Software Engineering (B+)</li>
              <li>Advanced topics in Computer Science (B)</li>
              <li>Final Year Project (A*)</li>
              <li>Artificial Intelligence (B)</li>
            </ul>
          </div>
        </div>

        {/* A Levels */}
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content">
            <h3>A Levels, Regent Sixth Form</h3>
            <p>Sept 2017 – June 2019</p>
            <ul>
              <li>Business (A)</li>
              <li>Psychology (B)</li>
              <li>English Literature (C)</li>
            </ul>
          </div>
        </div>

        {/* GCSEs */}
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content">
            <h3>GCSEs, Regent Sixth Form</h3>
            <p>Sept 2012 – June 2017</p>
            <ul>
              <li>Mathematics (6)</li>
              <li>English Language (7)</li>
              <li>Science (B)</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
