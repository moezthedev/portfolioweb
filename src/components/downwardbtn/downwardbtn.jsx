import React, { useState, useEffect } from 'react';
import scrolldownImg from "../../assets/loader.gif"

const DownwardButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
   
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShouldHide(true);
      } else {
        setShouldHide(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`downward-button-container text-center  ease-in-out animate-bounce ${isClicked ? 'rotate-180' : ''} ${shouldHide ? 'hidden' : ''}`}>
      
        <span className={`text-blue-300  arrow-down transform transition-transform ${isClicked ? '-rotate-90' : 'rotate-0'}`}>
        ⬇️
        
            </span> 
            
    </div>
  );
};

export default DownwardButton;
