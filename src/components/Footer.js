import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
        
        
      
      <div className="social-links">
        <a href="https://github.com/abhishekvats29" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/abhishekvats29" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} />
        </a>
        <a href="https://www.hackerrank.com/abhishekvats29" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faHackerrank} style={{ color: '#2ec866' }} />
        </a>
        <a href="https://twitter.com/abhishekvats29" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} />
        </a>
      </div>
      <p>&copy; 2024 Abhishek Vats All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
