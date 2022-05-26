import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
// components
import WorkHeader from '../../comps/header/WorkHeader';
// images
import RevampMobile from './../../assets/revamp/revamp-mobile.png';
import Popular from './../../assets/revamp/revamp-popular.png';
import DIYs from './../../assets/revamp/revamp-diys.png';
import DIY1 from './../../assets/revamp/revamp-diy1.png';


export default function Project() {
  return <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>reVamp Project | Irene Wu Frontend Developer portfolio, BCIT D3 Web Development 2022</title>
    <meta name='description' content='reVamp, a web application that provides sustainable ways to reduce environmental impact. A 4 person collaborative project completed in 4 months, with Irene as a lead frontend developer and UX/UI designer in this project.' />
  </Head>
    <WorkHeader 
      header='reVamp'
      projectScope='4 months, Feb-May 2021'
      projectType='4 person Collaborative Project'
      role='Lead Front-end Developer, UX/UI Designer'
      tools='Figma, Next.js, Styled-Components'
      img={RevampMobile}
    />
    <div className='project-info-cont'>
      <section>
        <div>
          <h4>Introduction</h4>
          <p>reVamp is a web application that provides sustainable ways to reduce environmental impact by showing how to repurpose your clothes, where donate your old garments, or showing the impacts of fast fashion on our planet.</p>
        </div>
        <img src={Popular.src} />
      </section>
      <section>
        <div>
          <h4>Project Brief</h4>
          <p>This project had a team of 4 members of UX/UI Designers and Front-end Developers. We used did user testing and a lot of research, and used Figma, Illustrator, and Next.js to make this web application. </p>
        <img src={DIYs.src} />
        </div>
      </section>
      <section>
        <div>
          <h4>Challenges and Outcome</h4>
          <p>Throughout the process, there were a couple difficulties my and my teammate faced. We struggled with some data implementation, as there were a lot of information. But with the help from our professor, we learned how to use dynamic routing, and use that to implement our data without having to create multiple pages of the same layout. </p>
          <p>This project was also completed online, as we were in a middle of a pandemic. One of our members was in Korea, and so we had to consider reasonable times to meet so that we can finish this project efficiently. With countless hours of meetings and working, we successfully completed a fully functioning, and imformative web application.</p>
        <img src={DIY1.src} />
        </div>
      </section>
    </div>
  </motion.div>;
}
