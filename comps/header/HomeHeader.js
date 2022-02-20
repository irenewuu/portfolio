import React from 'react';
import { motion } from 'framer-motion';
import downarrow from './../../assets/down-arrow.svg';

export default function HomeHeader({
    header= "Hello, my name is Irene Wu, a Front-End Developer with UX/UI design knowledge.",
    description="",
    img="",
}) {
  return <div className='header-cont'>
      <div className='home-info-cont'>
          <div>
            <h2>{header}</h2>
            <div>
              <p>{description}</p>
              <div></div>
            </div>
          </div>
          {/* <div className='profile-img-cont'> */}
            <img src={img} alt='profile image' className='home-img' />
          {/* </div> */}
      </div>
      <motion.img 
        className="down-arrow" 
        src={downarrow.src} 
        alt="down arrow"
        initial={{opacity: 0}}
        animate={{ y: 20, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2 }}
        />
    </div>
}
