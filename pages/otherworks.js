import React from 'react';
import { motion } from "framer-motion";
// components
import Header from '../comps/header/Header';

export default function otherworks() {
  return <motion.div 
  className="centered-cont"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96]}}>
  <Header 
    header='Other Works'
    description='Here are some other works I have worked on during the past two years. It includes front-end development, UX/UI design, graphic design, etc.'
  />
  <div>
    <h2>work in progress</h2>
  </div>
  </motion.div>;
}
