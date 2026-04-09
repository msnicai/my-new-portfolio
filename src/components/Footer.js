import React from 'react';
import './Footer.css';  // Your existing footer styles

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
              alt="GitHub" 
              className="github-icon" 
              width="30" height="30" 
            />
          </a>
        </li>
        {/* Add other social links here if needed */}
      </ul>
    </footer>
  );
};

export default Footer;