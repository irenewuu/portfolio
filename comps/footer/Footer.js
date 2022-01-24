import React from 'react';
import Linkedin from './../../assets/linkedin.svg';
import Github from './../../assets/github.svg';
import Email from './../../assets/email.svg';

export default function Footer() {
  return <div className='footer-cont'>
    <p>&copy; 2022 Irene Wu · <a href="mailto: irenewu222@gmail.com">irenewu222@gmail.com</a></p>
    <div className='links-cont'>
      <a href="https://www.linkedin.com/in/irenewuu/" target="_blank">
        <img src={Linkedin.src} alt="Linkedin icon" />
      </a>
      <a href="https://github.com/irenewuu" target="_blank">
        <img src={Github.src} alt="Github icon" />
      </a>
      <a href="mailto: irenewu222@gmail.com">
        <img src={Email.src} alt="Email icon" />
      </a>
    </div>
  </div>
}
