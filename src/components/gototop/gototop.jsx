import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
    
     
      const topThreshold = 100; 
            const bottomThreshold = 100;     
      if (scrollY < topThreshold || scrollY + windowHeight + bottomThreshold >= documentHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="go-to-top-button  fixed bottom-6 right-6 p-2 rounded-lg bg-blue-500 text-white text-lg hover:bg-blue-700 focus:outline-none"
          onClick={scrollToTop}
        >
          Top
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
