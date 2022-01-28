import React from 'react';
import Head from 'next/head';
import desktopDeco from './../assets/header-deco.svg'
import tabletDeco from './../assets/mobile-header-deco.svg'

import '../styles/app.scss';

// components import
import Navbar from '../comps/navbar/Navbar';
import Footer from '../comps/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (<div className='centered-cont'>
    <Head>
      <title>Irene Wu</title>
      {/* <link ref="icon" href="icon.png" /> */}
    </Head>
    <Navbar />
      <img src={desktopDeco.src} className='bg-deco desktop-deco' />
      <img src={tabletDeco.src} className='bg-deco tablet-deco' />
    <Component {...pageProps} />
    <Footer />
  </div>)
}

export default MyApp
