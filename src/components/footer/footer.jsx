import React from 'react';
import LogoImg from "../../assets/logomain.png"
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"

const Footer = () => {

 
  const currentYear = new Date().getFullYear();
const handleGithub = ()=>{
    window.open("https://github.com/moezthedev/","__blank")
}
const handleLink = ()=>{
    window.open("https://www.linkedin.com/in/moezdev/","__blank")
}
  return (
    <footer className=" bg-gradient-to-l from-ablack via-tertiary to-tertiary  text-white py-4">
      <div className="container  flex justify-around items-center">
       
        <div className="text-lg font-semibold">
          <img src={LogoImg} alt="Moez Logo" className="w-16 ml-2 md:ml-4" />
        </div>
        <div className="text-center ">
        <p className="text-sm">&copy; {currentYear}  <span className='font-semibold'>Moez Ahsan.</span><span className='hidden md:block'> All Rights Reserved.</span></p>
      </div>
        
        <div className="space-x-2 flex flex-row">
          
     <img className="w-5 md:w-8 cursor-pointer hover:bg-ablue rounded-xl" onClick={handleGithub} src={Github} />
     <img className="w-5 md:w-8 cursor-pointer hover:bg-ablue rounded-xl" onClick={handleLink} src={Linkedin} />
          
        </div>
        
      </div>

      
   
    </footer>
  );
};

export default Footer;
