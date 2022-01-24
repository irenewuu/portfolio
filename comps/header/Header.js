import React from 'react';
import downarrow from './../../assets/down-arrow.svg';

export default function Header({
    header= "Hello, my name is Irene Wu. I am a front-end developer and designer.",
    description=""
}) {
  return <div className='header-cont'>
      <div className='info-cont'>
          <div>
            <h1>{header}</h1>
            <p>{description}</p>
          </div>
      </div>
      <img className="down-arrow" src={downarrow.src} />
  </div>
}