import {useRouter} from 'next/router';
import { motion } from "framer-motion";
import Head from 'next/head';
// component
import Header from "../comps/header/Header";
// images
import SF from '../assets/sf/sf-homepage.png';
import Kalm from '../assets/kalm/kalm-activities.png'
import Linkout from '../assets/linkout_white.svg';

export default function Home() {
  const router = useRouter();


  return <motion.div 
    className="centered-cont"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
    <Header />
    <Head>
      
      <link ref="icon" href="favicon.ico" />
    </Head>
    {/* <div className="recent-works-cont"> */}
    <div className="page-info-cont">
      <h3>My Recent Works</h3>
        <div className="recent-works">
          <div className="lg-recent-work">
            <img src={SF.src} className='project-img'/>
            <div className="overlay"
              onClick={()=> router.push("/projects/sf")} >
              <h4>SF E-commerce</h4>
              <p>View Project</p>
              <img src={Linkout.src} />
            </div>
          </div>
          <div className="sm-recent-work">
            <img src={Kalm.src} className='project-img'/>
            <div className="overlay"
              onClick={()=> router.push("/projects/kalm")} >
              <h4>Kalm</h4>
              <p>View Project</p>
              <img src={Linkout.src} />
            </div>
          </div>
        </div>
        {/* <div className="recent-works">
          <div className="lg-recent-work">
            <img src="" />
          </div>
          <div className="sm-recent-work">
            <img src="" />
          </div>
        </div> */}
    </div>
  </motion.div>
}
