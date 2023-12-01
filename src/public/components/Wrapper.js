import React from 'react';
import { motion } from 'framer-motion';
import { pageEffect } from './animation';

const Wrapper = ({ children, ...rest }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1.5 }}
      variants={pageEffect}
      style={{width:"100%", height:"100%"}}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;