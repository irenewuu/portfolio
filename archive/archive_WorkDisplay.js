import React from 'react';
import LinkOut from './../../assets/linkout.svg';
import Github from './../../assets/dark-github.svg';
import Figma from './../../assets/figma.svg';

export default function WorkDisplay({
    imgPreview="",
    title="Kalm",
    figmaLink="",
    githubLink="",
    previewLink="",
    description="Kalm is a self-help web application for stress and anxiety management. It provides convenient access to emotional relief activities and emergency relief, to combat certain unhealthy feelings such as stress and anxiety.",
    projectPage="",
    techUsed=""

}) {
  return <div className='display-cont'>
      {/* <img className='display-img' src={imgPreview.src} alt="preview work" />
      <div className='display-info-cont'>
          <div className='row-space-between display-header'>
            <h4>{title}</h4>
            <div className='display-links'>
                <a href={figmaLink} target="_blank"><img src={Figma.src} alt="figma icon" /></a>
                <a href={githubLink} target="_blank"><img src={Github.src} alt="github icon" /></a>
                <a href={previewLink} target="_blank"><img src={LinkOut.src} alt="preview icon" /></a>
            </div>
          </div>
          <p className='display-descript'>{description}</p>
          <a className='read-more-link' onClick={projectPage}>Read more &gt;</a>
          <p className='tech-used'>{techUsed}</p>
      </div> */}
  </div>
}
