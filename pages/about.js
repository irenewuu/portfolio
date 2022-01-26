import React from 'react';
import ImgHeader from "../comps/header/ImgHeader";
import Me from '../assets/me.png'

export default function About() {
  return  <div className="centered-cont">
  <ImgHeader 
    header='About Me'
    description='Hello! My name is Irene and I enjoy creating and developing things for the web. I reside in Vancouver, BC, and will be graduating from the Digital Design and Development Program at British Columbia Institute of Technology, in May 2022. I have been exploring various fields, such as graphic design, video production and UI/UX design, and will continuously focus on front-end development as they are my area of interest. '
    img={Me.src}
  />
  <div className='page-info-cont'>
    <h3>My Skills</h3>
    <div className='skills-cont'>
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
</div>
}
