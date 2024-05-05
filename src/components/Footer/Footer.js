import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-content'>
      <ul>
        <li>
          <FaFacebook className='footer-icon' />
        </li>
        <li>
          <FaTwitter className='footer-icon' />
        </li>
        <li>
          <FaInstagram className='footer-icon' />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
