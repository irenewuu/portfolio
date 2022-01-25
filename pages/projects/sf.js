import React from 'react';
import WorkHeader from '../../comps/header/WorkHeader';
import SFMobile from './../../assets/sf/sf-mobile.png';

export default function Project() {
  return <div className="centered-cont">
    <WorkHeader 
      header='SF Hackathon'
      projectScope='1 month'
      projectType='2 person Collaborative Project'
      tools='Figma, Next.js, Sass, MongoDB Atlas Search'
      img={SFMobile}
    />
  </div>;
}
