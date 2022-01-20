import React from 'react';
import headerDeco from './../../assets/header-deco.svg'

export default function ImgHeader({
    header= "Hello, my name is Irene Wu. I am a front-end developer and designer.",
    description="",
    img="",
}) {
  return <div className='header-cont'>
      <div className='img-info-cont'>
          <div>
            <h1>{header}</h1>
            <p>{description}</p>
          </div>
          <img src={img} />
      </div>
      <img src={headerDeco.src} />
  </div>
}
