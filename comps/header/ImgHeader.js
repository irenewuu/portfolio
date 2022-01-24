import React from 'react';
import downarrow from './../../assets/down-arrow.svg';

export default function ImgHeader({
    header= "Hello, my name is Irene Wu. I am a front-end developer and designer.",
    description="",
    img="",
}) {
  return <div className='header-cont'>
      <div className='img-info-cont'>
          <div>
            <h1>{header}</h1>
            <div>
              <p>{description}</p>
              <div></div>
            </div>
          </div>
          <div className='profile-img-cont'>
            <img src={img}/>
          </div>
      </div>
      <img className="down-arrow" src={downarrow.src} />
    </div>
}
