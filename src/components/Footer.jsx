import React from 'react';
import twi_logo from '../images/twitter.png';
import git_logo from '../images/github.png';
import insta_logo from '../images/instagram.png';
import face_logo from '../images/facebook.png';

function Footer() {
  return (
    <>
      <div className='footer'>
        <a href="https://github.com/davidvalenciaz" target="_blank" rel="noopener noreferrer">
          <img src={git_logo} alt="github" />
        </a>
        <a href="https://www.facebook.com/DavidValenciaz/" target="_blank" rel="noopener noreferrer">
          <img src={face_logo} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/davidvalenciaz/" target="_blank" rel="noopener noreferrer">
          <img src={insta_logo} alt="instagram" />
        </a>
        <a href="https://twitter.com/davidvalenciaz" target="_blank" rel="noopener noreferrer">
          <img src={twi_logo} alt="twitter" />
        </a>
      </div>
    </>
  );
}

export default Footer;
