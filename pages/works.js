import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
import {useRouter} from 'next/router';
// components
import Header from "../comps/header/Header";
import WorkDisplay from '../comps/workDisplay/WorkDisplay';
// images
import ACNH from './../assets/villagerWishlist/acnh-mobile.png';
import KalmImg from './../assets/kalm/kalm-mobile.png';
import RevampImg from './../assets/revamp/revamp-mobile.png';
import SfImg from './../assets/sf/sf-mobile.png';
import KalmWork from './../assets/kalm/kalm-activities.png';
import RevampWork from './../assets/revamp/revamp-popular.png';
import SfWork from './../assets/sf/sf-homepage.png';
import ACNHWork from './../assets/villagerWishlist/acnh-list-wide.png';
import SmWorkDisplay from '../comps/workDisplay/SmWorkDisplay';

export default function Works() {
	const router = useRouter();

  return <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>Development - UX/UI Works | Irene Wu Frontend Developer portfolio, BCIT D3 Web Development 2022</title>
    <meta name='description' content='Web Development and User Experience/User Interface Design projects. Irene Wu, Frontend Developer, Digital Design and Development Student at BCIT 2022.' />
  </Head>
  {/* <Header 
    header='UX/UI & Development'
    description='Here are some of the UX/UI design and Front-end development projects I have worked on the past two years.'
  /> */}
  <div className='page-info-cont dev-works-cont'>
    <h1>Development Works</h1>
    <p>Here are some of the development projects I have worked on the past two years.</p>
  </div>
  <div className='page-info-cont'>
    <WorkDisplay imgPreview={ACNH} 
      title="ACNH Villager Wishlist"
      figmaLink='https://www.figma.com/file/aFQeDvQ71KS8LCSMd6KYny/ACNH-Villager-Wishlist-App?node-id=2%3A7'
      githubLink='https://github.com/irenewuu/villager-wishlist'
      previewLink='https://acnh-villagerwishlist.vercel.app/'
      description='ACNH Villager Wishlist is an app where users can create their own wishlist of villagers they like. You can view all the villagers from Animal Crossing New Horizons, including their basic information, such as birthday, gender, and personality.'
      projectPage={()=>router.push('/projects/villager-wishlist')}
      techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;Styled-Components&emsp;MongoDB&emsp;Express.js&emsp;Socket.io'/>
    <WorkDisplay 
      imgPreview={KalmImg}
      figmaLink='https://www.figma.com/file/NofvrFzll8aKm0PXDafOAb/Kalm-Project?node-id=862%3A2358'
      githubLink='https://github.com/irenewuu/kalm-app'
      previewLink='https://kalm-app.vercel.app/auth/home/0'
      projectPage={()=>router.push('/projects/kalm')}
      techUsed='Figma&emsp;React.js&emsp;Styled-Components'
    />
    <WorkDisplay 
      imgPreview={SfImg}
      title="S/F E-Commerce"
      figmaLink='https://www.figma.com/file/WVwcDF8enJTjMFmXhTvbQS/SF-MongoDB-Hackathon-2022?node-id=97%3A236'
      githubLink='https://github.com/irenewuu/E-Commerce-MongoDB-Hackathon-2022'
      previewLink='https://streetzfootwear.vercel.app/'
      description='S/F is a shoes e-commerce store designed and built with Next.js, SASS, Mongoose, and MongoDB Atlas Search in less than one month for a hackathon hosted by MongoDB.'
      projectPage={()=>router.push('/projects/sf')}
      techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;MongoDB Atlas Search'
    />
    <WorkDisplay 
      imgPreview={RevampImg}
      title="reVamp"
      figmaLink='https://www.figma.com/file/737HCHw3VZQWXFjp55oJ32/reVamp-Web-Application?node-id=1069%3A8283'
      githubLink='https://github.com/irenewuu/revamp'
      previewLink='https://revamp.vercel.app/'
      description='This web application provides sustainable ways to reduce environmental impact by showing how to repurpose your clothes, where donate your old garments, or showing the impacts of fast fashion on our planet.'
      projectPage={()=>router.push('/projects/revamp')}
      techUsed='Figma&emsp;Next.js&emsp;Styled-Components'
    />
    {/* tablet/mobile ver */}
    <SmWorkDisplay 
      imgPreview={ACNHWork}
      title="ACNH Villager Wishlist"
      projectPage={()=>router.push('/projects/villager-wishlist')}
      techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;Styled-Components&emsp;MongoDB&emsp;Express.js&emsp;Socket.io'
    />
    <SmWorkDisplay 
      imgPreview={SfWork}
      title="S/F E-Commerce"
      projectPage={()=>router.push('/projects/sf')}
      techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;MongoDB Atlas Search'
    />
    <SmWorkDisplay 
      imgPreview={KalmWork}
      title="Kalm"
      projectPage={()=>router.push('/projects/kalm')}
      techUsed='Figma&emsp;React.js&emsp;Styled-Components'
    />
    <SmWorkDisplay 
      imgPreview={RevampWork}
      title="reVamp"
      projectPage={()=>router.push('/projects/revamp')}
      techUsed='Figma&emsp;Next.js&emsp;Styled-Components'
    />
  </div>
</motion.div>
}
