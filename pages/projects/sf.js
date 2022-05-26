import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
// components
import WorkHeader from '../../comps/header/WorkHeader';
// images
import SFMobile from './../../assets/sf/sf-mobile.png';
import Homepage from './../../assets/sf/sf-homepage.png';
import Products from './../../assets/sf/sf-products.png';
import Product from './../../assets/sf/sf-product.png';

export default function Project() {
  return <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>SF E-Commerce Project | Irene Wu Frontend Developer portfolio, BCIT D3 Web Development 2022</title>
    <meta name='description' content='SF E-Commerce, a e-commerce store developed for a hackathon hosted by MongoDB and DEVs. A 2 person collaborative project completed in less than a month, with Irene as a frontend developer and UX/UI designer in this project.' />
  </Head>
    <WorkHeader 
      header='SF E-Commerce'
      projectScope='1 month, Jan-Feb 2022'
      projectType='2 person Collaborative Project'
      tools='Figma, Next.js, Sass, MongoDB Atlas Search'
      img={SFMobile}
    />
    <div className='project-info-cont'>
      <section>
        <div>
          <h4>Introduction</h4>
          <p>MongoDB + DEVs hosted a Hackathon for the duration between December 13, 2021 to January 13, 2022. My team decided to work on a shoes e-commerce store, and begun designing and development nearing the end of December.</p>
        </div>
        <img src={Homepage.src} />
      </section>
      <section>
        <div>
          <h4>Project Brief</h4>
          <p>S/F is a shoes e-commerce store designed and built with Next.js, SASS, Mongoose, and MongoDB Atlas Search. You can browse the products by all, gender, or collection, and can also filter by shoe sizes and price. There is also a search function, where it uses MongoDB&#39;s Atlas Search to find the products you want to look for.</p>
        <img src={Products.src} />
        </div>
      </section>
      <section>
        <div>
          <h4>Challenges and Outcome</h4>
          <p>Throughout the process, there were a couple difficulties my teammate and I faced. I onboarded a week after the Hackathon started, so we had to pick up the pace. We would work for hours, but in a couple days, we ironed out the design prototype and started coding. There have been points where I struggled with some codes, such as connecting the database information to the products, but my teammate, Ryan, helped me with that. I learned a lot from this project, because my teammate was a good teacher and explained to me how the serverside codes worked, and how they communicated with each other.</p>
        <img src={Product.src} />
        </div>
      </section>
    </div>
  </motion.div>;
}
