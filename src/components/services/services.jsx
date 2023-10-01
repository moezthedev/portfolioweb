    import React from 'react';
    import { motion } from 'framer-motion';
    import Devops from "../../assets/devops.png"
    import Frontend from "../../assets/development.png"
    import Backend from "../../assets/development2.png"
    import { Link as ScrollLink, Element } from 'react-scroll';
    const Card = ({ imageUrl, title, description }) => {
    return (
       <>
       
        <motion.div initial={{ opacity: 0,y:10, }}
        whileInView={{ opacity: 1,y:0,transition: { ease: "easeIn" }}}  whileTap={{ scale: 0.9 }} className="w-[100%]  md:w-[100%] hover:bg-new cursor-pointer transform transition transition-transform md:hover:translate-y-[-30px] ease-in 
        md:mb-16  bg-opacity-50  mt-16 bg-sblack rounded-lg shadow-md p-4">
        <img src={imageUrl} alt={title} className="w-[150px] h-[150px]  object-cover justify-center rounded " />
        <h1 className="text-xl text-blue-900 font-bold   mt-2">{title}</h1>
        <p className="text-white" >{description}</p>
        </motion.div>
        </>
    );
    };

    const CardList = () => {
    const cardsData = [
        {
        imageUrl: `${Frontend}`,
        title: 'Front End Developement',
        description: 'I specialize in front-end web development, crafting captivating user interfaces and seamless user experiences. Proficient in HTML, CSS, and JavaScript, I transform designs into responsive, interactive websites that engage visitors.',
        },
        {
        imageUrl: `${Backend}`,
        title: 'Backend Developement',
        description: 'Powering websites with robust server logic and dynamic functionality. Proficient in languages like PHP, Python, or Node.js, I build databases, optimize performance, and ensure data security. I am dedicated to making websites function flawlessly, delivering scalable solutions for a seamless user experience.',
        },
        {
        imageUrl: `${`${Devops}`}`,
        title: 'DevOps',
        description: 'As a DevOps specialist, I bridge the gap between development and IT operations, streamlining the software development lifecycle. With expertise in automation, continuous integration/continuous delivery (CI/CD), and infrastructure as code (IaC).',
        },
    ];

    return (
        <>
        <Element name="services" id="project"></Element>
        <h1 className='text-white font-bold pb-6 pt-2   text-5xl pl-2 text-center bg-tertiary'>Services</h1>
        <div  className="  bg-opacity-100  bg-gradient-to-t from-primary via-tertiary    to-tertiary flex flex-col md:flex-row justify-between  p-4 md:gap-4">
    
        {cardsData.map((card, index) => (
            <Card key={index} {...card} />
        ))}
        </div>
        </>
    );
    };

    export default CardList;
