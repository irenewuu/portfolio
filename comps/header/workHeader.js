import React from 'react';
import downarrow from './../../assets/down-arrow.svg';

export default function WorkHeader({
    header= "Project",
    projectScope="4 months",
    projectType="Collaborative Project",
    role="Front-end Developer, UX/UI Designer",
    tools="Figma,",
    img=""
}) {
  return <div className='header-cont'>
      <div className='project-cont'>
          <div>
            <h1>{header}</h1>
            <div>
              <p><b>Project Scope: </b>{projectScope}</p>
              <p><b>Project Type: </b>{projectType}</p>
              <p><b>Role: </b>{role}</p>
              <p><b>Tools: </b>{tools}</p>
              {/* <div></div> */}
            </div>
          </div>
          <div className='project-preview'>
            <img src={img.src} />
          </div>
      </div>
      <img className="down-arrow" src={downarrow.src} />
    </div>
}
