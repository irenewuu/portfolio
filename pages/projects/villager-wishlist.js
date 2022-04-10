import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
// components
import WorkHeader from '../../comps/header/WorkHeader';
// images
import ACNHMobile from './../../assets/villagerWishlist/acnh-mobile.png';
import ACNHSearch from './../../assets/villagerWishlist/acnh-search.png';
import ACNHFilter from './../../assets/villagerWishlist/acnh-filter-panel.png';
import ACNHSettings from './../../assets/villagerWishlist/acnh-setting.png';
import ACNHProfile from './../../assets/villagerWishlist/acnh-profile.png';
import ACNHTablet from './../../assets/villagerWishlist/acnh-wishlist.png';

export default function Project() {
  return <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>ACNH Villager Wishlist Project | Irene Wu Frontend Developer portfolio, BCIT D3 Web Development 2022</title>
    <meta name='description' content='ACNH Villager Wishlist, a web app developed for users to add villagers they like to a wishlist. A 6 person collaborative project completed in two months, with Irene as a fullstack developer in this project.' />
  </Head>
    <WorkHeader 
      header='ACNH Villager Wishlist'
      projectScope='2 months'
      projectType='6 person Collaborative Project'
      role='Fullstack Developer'
      tools='Figma, Next.js, Sass, MongoDB, Socket.io'
      img={ACNHMobile}
    />
    <div className='project-info-cont'>
      <section>
        <div>
          <h4>Introduction</h4>
          <p></p>
        </div>
        <img src={ACNHTablet.src} />
      </section>
      <section>
        <div>
          <h4>Project Brief</h4>
          <p></p>
        </div>
        <div className='row-space-between img-cont'>
          <img src={ACNHSearch.src} className='mobile-img' />
          <img src={ACNHFilter.src} className='mobile-img second-img' />
        </div>
      </section>
      <section>
        <div>
          <h4>Challenges and Outcome</h4>
          <p></p>
        </div>
        <div className='row-space-between img-cont'>
          <img src={ACNHSettings.src} className='mobile-img' />
          <img src={ACNHProfile.src} className='mobile-img second-img' />
        </div>
      </section>
    </div>
  </motion.div>;
}
