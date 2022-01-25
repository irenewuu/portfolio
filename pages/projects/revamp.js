import React from 'react';
import WorkHeader from '../../comps/header/WorkHeader';
import RevampMobile from './../../assets/revamp/revamp-mobile.png';

export default function Project() {
  return <div className="centered-cont">
    <WorkHeader 
      header='reVamp'
      projectType='4 person Collaborative Project'
      role='Lead Front-end Developer, UX/UI Designer'
      tools='Figma, Next.js, Styled-Components'
      img={RevampMobile}
    />
  </div>;
}
