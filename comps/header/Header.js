import React from 'react';
import { motion } from 'framer-motion';
import downarrow from './../../assets/down-arrow.svg';

export default function Header({
    header= "Hello, my name is Irene Wu. I am a front-end developer and designer.",
    description=""
}) {
  return <div className='header-cont'>
      <div className='info-cont'>
          <div>
            <h1>{header}</h1>
            <div>
              <p>{description}</p>
              {/* <div></div> */}
            </div>
          </div>
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
