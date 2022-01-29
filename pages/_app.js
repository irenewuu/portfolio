import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from 'styled-components';
import Head from 'next/head';

import '../styles/app.scss';
// components import
import desktopDeco from './../assets/header-deco.svg'
import tabletDeco from './../assets/mobile-header-deco.svg'
import Navbar from '../comps/navbar/Navbar';
import Footer from '../comps/footer/Footer';

const AppCont = styled(motion.div)``;

function MyApp({ Component, pageProps }) {
  return (<AppCont 
    className='centered-cont'
    exit={{opacity: 0}}
    transition={{duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}}
  >
    <Head>
      <title>Irene Wu</title>
      <link ref="shortcut icon" href="/icon.png" />
    </Head>
    <Navbar />
      <img src={desktopDeco.src} className='bg-deco desktop-deco' />
      <img src={tabletDeco.src} className='bg-deco tablet-deco' />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    <Footer />
  </AppCont>)
}

export default MyApp
