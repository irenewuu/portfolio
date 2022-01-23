import React from 'react';
import Header from "../comps/header/Header";
import downarrow from '../assets/down-arrow.svg';

export default function Works() {
  return <div className="centered-cont">
  <Header 
    header='UX/UI & Development'
    description='Here are some of the UX/UI design and Front-end development projects I have worked on the past two years.'
  />
  <img className="down-arrow" src={downarrow.src} />
  <h2>work in progress</h2>
</div>
}
