import React from 'react';
import ImgHeader from "../comps/header/ImgHeader";
import downarrow from '../assets/down-arrow.svg';
import Me from '../assets/me.png'

export default function About() {
  return  <div className="centered-cont">
  <ImgHeader 
    header='About Me'
    description='Hello! My name is Irene and I enjoy creating and designing things for the web. I am currently at BCIT studying Digital Design and Development, and will graduate in June 2022. I have been exploring various fields, such as graphic design, video production, and will continuously focus on UI/UX design, and front-end development as they are my area of interest. '
    img={Me.src}
  />
  <img className="down-arrow" src={downarrow.src} />
  <h2>work in progress</h2>
</div>
}
