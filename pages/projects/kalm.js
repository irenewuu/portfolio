import React from 'react';
import WorkHeader from './../../comps/header/workHeader';
import KalmMobile from './../../assets/kalm/kalm-mobile.png';

export default function Project() {
  return <div className="centered-cont">
    <WorkHeader 
      header='Kalm'
      projectType='6 person Collaborative Project'
      tools='Figma, React.js, Styled-Components'
      img={KalmMobile}
    />
  </div>;
}
