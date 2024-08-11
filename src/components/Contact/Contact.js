import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact container">
      <h2 className="section-title" data-aos="fade-up">Contact</h2>
      <p data-aos="fade-right">Feel free to reach out to me via email or through my social media channels.</p>
      <ul className="contact-links" data-aos="fade-up">
        <li>Email: <a href="mailto:Sharif.a1901@gmail.com">Sharif.a1901@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sharif-a-9088a7168/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sharif-a-9088a7168/</a></li>
        <li>GitHub: <a href="https://github.com/Shariffffff" target="_blank" rel="noopener noreferrer">github.com/Shariffffff</a></li>
      </ul>
    </div>
  );
};

export default Contact;
