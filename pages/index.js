import {useRouter} from 'next/router';
import { motion } from "framer-motion";
import Head from 'next/head';
// component
import HomeHeader from "../comps/header/HomeHeader";
// images
import SF from '../assets/sf/sf-mobile.png';
import Kalm from '../assets/kalm/kalm-mobile.png';
import SfWork from '../assets/sf/sf-homepage.png';
import KalmWork from '../assets/kalm/kalm-activities.png';
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
      <title>Irene Wu Frontend Developer portfolio, BCIT D3 Web Development 2022 | Homepage</title>
      <meta name='description' content='This portfolio includes UX/UI, Graphic Design, and Web Development projects. Irene Wu is a frontend developer with UX/UI design knowledge, and will be graduating from the Digital Design and Development Program at British Columbia Institute of Technology in May, 2022.' />
    </Head>

    <HomeHeader 
      img={Vector.src}
    />
    <div className="page-info-cont">
      <h3>Recent Works</h3>
        <WorkDisplay imgPreview={SF} 
          title="S/F E-Commerce"
          figmaLink='https://www.figma.com/file/WVwcDF8enJTjMFmXhTvbQS/SF-MongoDB-Hackathon-2022?node-id=97%3A236'
          githubLink='https://github.com/irenewuu/E-Commerce-MongoDB-Hackathon-2022'
          previewLink='https://streetzfootwear.vercel.app/'
          description='S/F is a shoes e-commerce store designed and built with Next.js, SASS, Mongoose, and MongoDB Atlas Search in less than one month for a hackathon hosted by MongoDB.'
          projectPage={()=>router.push('/projects/sf')}
          techUsed='Figma&emsp;Next.js&emsp;Sass&emsp;MongoDB Atlas Search'/>
        <WorkDisplay imgPreview={Kalm} 
          figmaLink='https://www.figma.com/proto/NofvrFzll8aKm0PXDafOAb/Kalm-Project?node-id=814%3A1754&scaling=min-zoom&page-id=797%3A1587&starting-point-node-id=814%3A1614'
          githubLink='https://github.com/irenewuu/kalm-app'
          previewLink='https://kalm-app.vercel.app/auth/home/0'
          projectPage={()=>router.push('/projects/kalm')}
          techUsed='Figma&emsp;React.js&emsp;Styled-Components' />
          {/* tablet/mobile ver */}
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
    </div>
  </motion.div>
}
