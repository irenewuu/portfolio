import React from 'react';
import { motion } from "framer-motion";
// components
import WorkHeader from '../../comps/header/WorkHeader';
// images
import KalmMobile from './../../assets/kalm/kalm-mobile.png';
import Home from './../../assets/kalm/kalm-howareyou.png';
import Gratitude from './../../assets/kalm/kalm-gratitude.png';
import Relief from './../../assets/kalm/kalm-relief.png';
import Focus from './../../assets/kalm/kalm-focus.png';
 
export default function Project() {
  return <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
    <WorkHeader 
      header='Kalm'
      projectType='6 person Collaborative Project'
      tools='Figma, React.js, Styled-Components'
      img={KalmMobile}
    />
    <div className='project-info-cont'>
      <section>
        <div>
          <h4>Introduction</h4>
          <p>Kalm is a self-help web application for stress and anxiety management. We recognize that there are many people who need help, but not all resources are available at the same moment. We would like to create a solution as small as helping someone to calm down, or as large as stopping someone from harming themselves, and therefore we came up with this idea.</p>
          <p>Our mission is to create a front-line solution for those who are emotionally overwhelmed. Kalm starts by documenting how users feel at that certain moment and respond with activities regarding that state of feeling. This application combats certain unhealthy feelings such as stress and anxiety, by providing convenient access to emotional relief activities. </p>
        </div>
        <img src={Gratitude.src} />
      </section>
      <section>
        <div>
          <h4>Project Brief</h4>
          <p>This was a project where the D3 program collaborated with the FSWD program. Our team consisted of 3 designers and front-end develoers, and 3 full-stack developers. We used React.js, Express, and MySQL to develop the web application, and had it hosted on Heroku.</p>
        </div>
        <div className='row-space-between img-cont'>
          <img src={Relief.src} className='mobile-img' />
          <img src={Focus.src} className='mobile-img second-img' />
        </div>
      </section>
      <section>
        <div>
          <h4>Challenges and Outcomes</h4>
          <p>As our team consisted of 6 students that had a fully packed schedule, we found it hard to spend as much time on this project as we wished to. But using good organization and time management, we worked continuously in a tight schedule, while studying and completing other assignments that were coming at us. In the end, we built a successful, responsive web application despite the schedule, and presented to a large audience of at least 100 members.</p>
        </div>
        <img src={Home.src} />
      </section>
    </div>
  </motion.div>;
}
