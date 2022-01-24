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

}) {
  return <div className='display-cont'>
      <img className='display-img' src={imgPreview.src} />
      <div className='display-info-cont'>
          <div className='row-space-between display-header'>
            <h3>{title}</h3>
            <div className='display-links'>
                <a href={figmaLink} target="_blank"><img src={Figma.src} /></a>
                <a href={githubLink} target="_blank"><img src={Github.src} /></a>
                <a href={previewLink} target="_blank"><img src={LinkOut.src} /></a>
            </div>
          </div>
          <p>{description}</p>
          <a className='read-more-link' onClick={projectPage}>Read more &gt;</a>
      </div>
  </div>
}
