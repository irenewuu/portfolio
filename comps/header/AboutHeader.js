import React from 'react';
import { motion } from 'framer-motion';
import downarrow from './../../assets/down-arrow.svg';

export default function AboutHeader({
    header= "",
    description="",
    img="",
}) {
  return <div className='header-cont'>
      <div className='img-info-cont'>
          <div>
            <h1>{header}</h1>
            <div>
              <p>Hello! My name is Irene and I enjoy designing and developing things for the web. I reside in Vancouver, BC, and will be graduating from the 
              &nbsp;<a href="https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6405dipma/" target="_blank">Digital Design and Development Program</a>
              &nbsp; at &nbsp;
              <a href="https://www.bcit.ca/" target="_blank">British Columbia Institute of Technology</a>
              , in May 2022. I have been exploring various fields, such as graphic design, video production and UI/UX design, and will continuously focus on web development as they are my area of interest.</p>
              {/* <p>{description}</p> */}
              <div></div>
            </div>
          </div>
          <div className='profile-img-cont'>
            <img src={img} alt='profile image' />
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
