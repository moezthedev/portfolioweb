import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

function TypewriterComponent({pVariants}) {
  return (
    <motion.div  initial="initial" animate="animate"  variants={pVariants} className='text-xl pt-2 text-agreen font-bold'>
      
      <Typewriter
        options={{
          strings: ['Backend Engineer', 'Devops Engineer',"Front End Engineer","C++ Developer","IOT Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </motion.div>
  );
}

export default TypewriterComponent;

