import React, { useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import logoMain from "../assets/logomain.png"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [click, setclick] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setclick(!click);
  };

  const imgVariants = {
    initial: { opacity: 0, x: -100, scale: 0 },
    animate: {
      opacity: 1,
      x: 0,
      rotate: click ? 360 : 0,
      scale: 1,
      transition: { delay: 0.2, duration: 1, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -100, scale: 1 },
  };

  return (
    <>
      <nav className="bg-gray-900/50 border-white-600 top-0 shadow-md text-white p-8 flex justify-between lg:justify-around lg:items-center">
        <motion.h1 initial="initial" animate="animate" onClick={handleClick} variants={imgVariants} className="cursor-pointer text-10xl font-bold ">
          <img className="w-[70px]" src={logoMain} />
        </motion.h1>
        <div className="lg:hidden sm:flex justify-between">
          <button
            onClick={toggleMenu}
            className={`text-3xl text-white focus:outline-none transition-transform transform ${
              isMenuOpen ? 'rotate-0' : 'rotate-180'
            }`}
          >
            <div>{isMenuOpen ? '✖' : '☰'}</div>
          </button>
        </div>
        <ul
          className={`lg:flex lg:space-x-8 font-bold text-lg ${
            isMenuOpen ? 'hidden' : 'hidden'
          } mt-4 lg:mt-0`}
        >
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <ScrollLink
              to="skills" 
              smooth={true} 
              offset={-100} 
              className="cursor-pointer hover:text-gray-400"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to='project' smooth={true} offset={-100} className="hover:text-gray-400 cursor-pointer">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to='services' smooth={true} offset={-100} className="hover:text-gray-400 cursor-pointer">
             Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} offset={-100} className="hover:text-gray-400 cursor-pointer">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className=' backdrop-blur-md z-500 absolute w-[100vw] bg-gray-900/50 transition-transform transform transition-duration-300 ease-in-out'>
          <ul className=''>
            <li className='border-b-2 border-gray-700/70 p-6 text-xl font-semibold text-white hover:text-gray-400'>
              <a href='#'>Home</a>
            </li>
            <li  className='border-b-2 border-gray-700/70 p-6 text-xl font-semibold text-white hover:text-gray-400'><ScrollLink onClick={toggleMenu} to='skills'  smooth={true} offset={-100}>Skills</ScrollLink></li>
            <li className='border-b-2 border-gray-700/70 p-6 text-xl font-semibold text-white hover:text-gray-400' ><ScrollLink onClick={toggleMenu} to='project'  smooth={true} offset={-100}>Projects</ScrollLink></li>
            <li className='border-b-2 border-gray-700/70 p-6 text-xl font-semibold text-white hover:text-gray-400'><ScrollLink onClick={toggleMenu} to='services'  smooth={true} offset={-100}>Services</ScrollLink></li>
            <li className=' border-b-2 border-gray-700/70 p-6 text-xl font-semibold text-white hover:text-gray-400'><ScrollLink onClick={toggleMenu} to='contact'  smooth={true} offset={-100}>Get in Touch</ScrollLink></li>
          </ul>
        </div>
      )}
    
    </>
  );
};

export default Navbar;
