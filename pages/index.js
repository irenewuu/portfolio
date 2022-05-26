import {useRouter} from 'next/router';
import { motion } from "framer-motion";
import Head from 'next/head';
// component
import HomeHeader from "../comps/header/HomeHeader";
// images
import ACNH from '../assets/villagerWishlist/acnh-mobile.png';
import SF from '../assets/sf/sf-mobile.png';
import Kalm from '../assets/kalm/kalm-mobile.png';
import ReVamp from '../assets/revamp/revamp-mobile.png';
import ACNHWork from '../assets/villagerWishlist/acnh-list-wide.png';
import SfWork from '../assets/sf/sf-homepage.png';
import KalmWork from '../assets/kalm/kalm-activities.png';
import RevampWork from '../assets/revamp/revamp-popular.png';
import Linkout from '../assets/linkout_white.svg';
import Vector from '../assets/homepage_vector.svg';
import WorkDisplay from '../comps/workDisplay/WorkDisplay';
import SmWorkDisplay from '../comps/workDisplay/SmWorkDisplay';

export default function Home() {
  const router = useRouter();


  return <motion.div 
    className="centered-cont"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Home | Irene Wu Frontend Developer portfolio, BCIT D3 Web Development 2022</title>
      <meta name='description' content='Irene Wu is a frontend developer with UX/UI design knowledge, and will be graduating from the Digital Design and Development Program at British Columbia Institute of Technology in May, 2022. This portfolio showcases Web Development - UX/UI projects completed during her time at BCIT. ' />
    </Head>

    <HomeHeader 
      img={Vector.src}
    />
    <div className="page-info-cont">
      <h3>Recent Works</h3>
        <WorkDisplay imgPreview={ACNH} 
          title="ACNH Villager Wishlist"
          figmaLink='https://www.figma.com/file/aFQeDvQ71KS8LCSMd6KYny/ACNH-Villager-Wishlist-App?node-id=2%3A7'
          githubLink='https://github.com/irenewuu/villager-wishlist'
          previewLink='https://acnh-villagerwishlist.vercel.app/'
          description='ACNH Villager Wishlist is an app where users can create their own wishlist of villagers they like. You can view all the villagers from Animal Crossing New Horizons, including their basic information, such as birthday, gender, and personality.'
          projectPage={()=>router.push('/projects/villager-wishlist')}
          techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;Styled-Components&emsp;MongoDB&emsp;Express.js&emsp;Socket.io'/>
          
        <WorkDisplay imgPreview={Kalm} 
          figmaLink='https://www.figma.com/file/NofvrFzll8aKm0PXDafOAb/Kalm-Project?node-id=862%3A2358'
          githubLink='https://github.com/irenewuu/kalm-app'
          previewLink='https://kalm-app.vercel.app/auth/home/0'
          projectPage={()=>router.push('/projects/kalm')}
          techUsed='Figma&emsp;React.js&emsp;Styled-Components' />
          
        <WorkDisplay imgPreview={SF} 
          title="S/F E-Commerce"
          figmaLink='https://www.figma.com/file/WVwcDF8enJTjMFmXhTvbQS/SF-MongoDB-Hackathon-2022?node-id=97%3A236'
          githubLink='https://github.com/irenewuu/E-Commerce-MongoDB-Hackathon-2022'
          previewLink='https://streetzfootwear.vercel.app/'
          description='S/F is a shoes e-commerce store designed and built with Next.js, SASS, Mongoose, and MongoDB Atlas Search in less than one month for a hackathon hosted by MongoDB.'
          projectPage={()=>router.push('/projects/sf')}
          techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;MongoDB Atlas Search'/>

        <WorkDisplay imgPreview={ReVamp} 
          title="reVamp"
          figmaLink='https://www.figma.com/file/737HCHw3VZQWXFjp55oJ32/reVamp-Web-Application?node-id=1069%3A8283'
          githubLink='https://github.com/irenewuu/revamp'
          previewLink='https://revamp.vercel.app/'
          description='This web application provides sustainable ways to reduce environmental impact by showing how to repurpose your clothes, where donate your old garments, or showing the impacts of fast fashion on our planet.'
          projectPage={()=>router.push('/projects/revamp')}
          techUsed='Figma&emsp;Next.js&emsp;Styled-Components'/>
          
          {/* tablet/mobile ver */}
          <SmWorkDisplay 
            imgPreview={ACNHWork}
            title="ACNH Villager Wishlist"
            projectPage={()=>router.push('/projects/villager-wishlist')}
            techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;Styled-Components&emsp;MongoDB&emsp;Express.js&emsp;Socket.io'
          />
          <SmWorkDisplay 
            imgPreview={KalmWork}
            title="Kalm"
            projectPage={()=>router.push('/projects/kalm')}
            techUsed='Figma&emsp;React.js&emsp;Styled-Components'
            />
            <SmWorkDisplay 
              imgPreview={SfWork}
              title="S/F E-Commerce"
              projectPage={()=>router.push('/projects/sf')}
              techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;MongoDB Atlas Search'
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
