import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import LinkOut from './../../assets/linkout.svg';
import Github from './../../assets/dark-github.svg';
import Figma from './../../assets/figma.svg';

export default function WorkDisplay({
  imgPreview="",
  alt="work preview",
  title="Kalm",
  figmaLink="",
  githubLink="",
  previewLink="",
  description="Kalm is a self-help web application for stress and anxiety management. It provides convenient access to emotional relief activities and emergency relief, to combat certain unhealthy feelings such as stress and anxiety.",
  projectPage=()=>{},
  techUsed=""
}) {
  const r = useRouter()
  return (
    <motion.div className='work-cont'
    whileHover={{scale: 1.01}}
    transition={{duration: 0.3}}
    onClick={projectPage}
    >
        <img className='display-img' src={imgPreview.src} alt={alt} />
        <div className='description-cont'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className='tech-used'>{techUsed}</p>
          <a className='read-more-link' onClick={projectPage}>Read more &gt;</a>
        </div>
        <div className='display-links'>
            <a href={figmaLink} target="_blank"><img src={Figma.src} alt="figma icon" /></a>
            <a href={githubLink} target="_blank"><img src={Github.src} alt="github icon" /></a>
            <a href={previewLink} target="_blank"><img src={LinkOut.src} alt="preview icon" /></a>
        </div>
    </motion.div>
  )
}
