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
      projectScope='2 months, Feb-Mar 2022'
      projectType='6 person Collaborative Project'
      role='Fullstack Developer'
      tools='Figma, Next.js, Sass, MongoDB, Express.js, Socket.io'
      img={ACNHMobile}
    />
    <div className='project-info-cont'>
      <section>
        <div>
          <h4>Introduction</h4>
          <p>Villager Wishlist is a web application for Animal Crossing New Horizon users to add villagers they like to their wishlist. They can find villagers they like through search and filtering, and can learn about each villagers information, such as birthday, personality, hobby, etc.</p>
        </div>
        <img src={ACNHTablet.src} />
      </section>
      <section>
        <div>
          <h4>Project Brief</h4>
          <p>In this project, our main goal was to learn how to use MongoDB, and how to setup the backend to connect with the frontend. In this case, we found an Animal Crossing Dataset, so we imported the data into MongoDB, connected MongoDB with the backend, and then used HTTP requests for our RESTful API, to create, access, and use data. </p>
        </div>
        <div className='row-space-between img-cont'>
          <img src={ACNHSearch.src} className='mobile-img' />
          <img src={ACNHFilter.src} className='mobile-img second-img' />
        </div>
      </section>
      <section>
        <div>
          <h4>Challenges and Outcome</h4>
          <p>Throughout this project, there were many things we didn't know about backend since we were still learning about how it works, and had to ask the professors many questions. It took a while to understand how RESTful APIs work, but once we understood it, it was so much easier to work on the project.  </p>
          <p>One of the challenges I faced was making the search with filters to work. I spent many hours just working on the filter panel, due to being unable to understand why there are no search results after applying multiple filters. It took many tries later that I realized if the filters were too specific, nothing would show up. For example, there were only female villagers with Peppy or Snooty personality, but I kept adding male to the filters. </p>
          <p>Long story short, I learned a lot of backend related things just working on this project, such as setting up the backend, using MongoDB, and making error handlers so that we can at least know what is going wrong. RESTful APIs is also one of the big things I learned, as it is important to use them properly and figure how to make the data fetch faster. And in the end, we were able to successfully build a fully functional web application.</p>
        </div>
        <div className='row-space-between img-cont'>
          <img src={ACNHSettings.src} className='mobile-img' />
          <img src={ACNHProfile.src} className='mobile-img second-img' />
        </div>
      </section>
    </div>
  </motion.div>;
}
