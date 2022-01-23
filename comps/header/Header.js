import React from 'react';
import desktopDeco from './../../assets/header-deco.svg'
import tabletDeco from './../../assets/mobile-header-deco.svg'

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
      <img src={desktopDeco.src} className='bg-deco desktop-deco' />
      <img src={tabletDeco.src} className='bg-deco tablet-deco' />
  </div>
}
