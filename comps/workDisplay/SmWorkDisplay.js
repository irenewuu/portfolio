import React from 'react'
import { motion } from 'framer-motion'

export default function SmWorkDisplay({
  imgPreview='',
  title="reVamp",
  description='This web application provides sustainable ways to reduce environmental impact by showing how to repurpose your clothes, where donate your old garments, or showing the impacts of fast fashion on our planet.',
  projectPage=()=>{},
  techUsed='Figma',
}) {
  return (
    <motion.div className='sm-work-cont'
      whileHover={{scale: 1.03}}
      transition={{duration: 0.3}}
      onClick={projectPage}>
      <img src={imgPreview.src} alt={title} />
      <div className='sm-work-description'>
        <h4>{title}</h4>
        <div>
          <p className='tech-used'>{techUsed}</p>
          
        </div>
      </div>
    </motion.div>
  )
}
