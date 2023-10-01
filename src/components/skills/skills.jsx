import { motion } from 'framer-motion';
import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

const GlassmorphicCard = () => {
   
  return (
    <>
<Element name="skills" id="skills"></Element>
    <div id="skills" name="skills" className="bg-opacity-100 bg-gradient-to-t from-primary via-tertiary p-[50px] md:p-[150px]  
    to-tertiary bg-blur-lg p-6  shadow-lg">
     <h1 className='text-white font-bold pb-6 text-5xl pl-2'>Skills</h1>
      <motion.div initial={{ opacity: 0,y:100, }}
  whileInView={{ opacity: 1,y:0,transition: { duration: 1, ease: "easeInOut" }}} className="bg-opacity-10  bg-white bg-blur-3xl p-8 rounded-xl cursor-context-menu shadow-lg  ">
      
        <h2 className="text-4xl pb-8 pl-4  text-blue-400 border-white font-bold text-justify border-b-6 text-center">  Web Dev.  </h2>
        
        <div className="text-white transform transition-transform hover:translate-x-5 ">
        <ol>
            <li><span className='font-bold'>• Front End:</span> React</li>
            <li><span className='font-bold'>• Backend:</span> Flask,Django</li>
            <li><span className='font-bold'>• Database:</span> Mongodb,SQL</li>
            <li><span className='font-bold'>• Styling:</span> Custom Css, Tailwind Css, Bootstrap</li>
            <li><span className='font-bold'>• State Management:</span>  Redux, React Context</li>
            <li><span className='font-bold'>• Authentication:</span> JWT,Formik</li>
        </ol>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0,y:100, }}
  whileInView={{ opacity: 1,y:0,transition: { duration: 1, ease: "easeInOut" }}} className="bg-opacity-10 mt-10 bg-white bg-blur-3xl p-8 rounded-xl cursor-context-menu shadow-lg  ">
      
        <h2 className="text-4xl pb-8  pl-4  text-blue-400 border-white font-bold text-justify border-b-6 text-center">  Others  </h2>
        
        <div className="text-white transform transition-transform hover:translate-x-5 ">
        <ol>
            <li><span className='font-bold'>• C++</span></li>
            <li><span className='font-bold'>• Java</span></li>
            <li><span className='font-bold'>• DevOps</span> </li>
            <li><span className='font-bold'>• IOT</span> </li>
            <li><span className='font-bold'>• Python</span>  </li>
           
        </ol>
      </div>
      </motion.div>
    </div>
    </>
  );
};

export default GlassmorphicCard;
