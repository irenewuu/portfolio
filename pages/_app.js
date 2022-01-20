import React from 'react';
import Head from 'next/head';

import '../styles/app.scss';

// components import
import Navbar from '../comps/navbar/Navbar';
import Footer from '../comps/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (<div className='centered-cont'>
    <Head>
      <title>Irene Wu</title>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>)
}

export default MyApp
