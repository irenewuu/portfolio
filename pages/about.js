import React from 'react';
import { motion } from "framer-motion";
// componennts
import ImgHeader from "../comps/header/ImgHeader";
// images
import Me from '../assets/me.png';
import Github from "../assets/dark-github.svg";
import Linkedin from "../assets/dark-linkedin.svg";

export default function About() {
  return  <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
  <ImgHeader 
    header='About Me'
    description='Hello! My name is Irene and I enjoy designing and developing things for the web. I reside in Vancouver, BC, and will be graduating from the Digital Design and Development Program at British Columbia Institute of Technology, in May 2022. I have been exploring various fields, such as graphic design, video production and UI/UX design, and will continuously focus on web development as they are my area of interest. '
    img={Me.src}
  />

  <div className='info-cont skills'>
    <h3>My Skills</h3>
    <div className='skills-cont'>
      {/* <div> */}
      <ul>
        <li>Front-end Development</li>
        <li>Responsive Coding</li>
        <li>UX/UI Design</li>
        <li>User Testing</li>
        <li>Debugging</li>
      </ul>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Sass</li>
      </ul>
      <ul>
        <li>React</li>
        <li>Github</li>
        <li>Figma</li>
        <li>Wordpress</li>
        <li>Adobe Creative Cloud</li>
      </ul>
      <ul>
        <li>Communication</li>
        <li>Collaboration</li>
        <li>Organization</li>
        <li>Time Management</li>
        <li>Problem Solving</li>
      </ul>
    </div>
  </div>

  <div className='info-cont'>
    <h3>Like what you see?</h3>
    <div className='connect-cont'>
      <p>If you would like to know about me, feel free connect with me on Linkedin or send me an email!</p>
      {/* <a href="https://github.com/irenewuu" target="_blank"><img src={Github.src} alt="github icon" /></a>
      <a href="https://linkedin.com/irenewuu" target="_blank"><img src={Linkedin.src} alt="linkedin icon" /></a> */}
      
      {/* better way to view resume */}
      <button type="button" onClick={()=>window.open("../irenes_resume_frontend-developer.pdf", "_blank")}>
      <a>View Resume</a>
        {/* <a href="../irenes_resume_frontend-developer.pdf" download>View Resume</a> */}
      </button>
    </div>
  </div>
</motion.div>
}
