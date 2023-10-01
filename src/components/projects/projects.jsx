import React from "react";
import P1 from "../../assets/p1.jpg"
import P2 from "../../assets/p2.jpg"
import P3 from "../../assets/p3.jpg"
import P4 from "../../assets/p4.jpg"
import P6 from "../../assets/p6.jpg"
import P7 from "../../assets/p7.jpg"
import P8 from "../../assets/p8.jpg"
import P9 from "../../assets/p9.jpg"
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from 'react-scroll';
import Particle from "../particle/particle";
const projects = [
  {
    title: "Summerize",
    imageUrl: `${P1}`,
    technologies: "React, Custom CSS,Rapid Api",
    description: "An AI-powered web app that generates concise and coherent summaries of text content.User enters link of website which he want summary and summerize generates summary.",
    githubLink: "https://github.com/moezthedev",
    liveDemoLink: "https://summerise.netlify.app/",
  }, {
    title: "Car Revolution",
    imageUrl: `${P2}`,
    technologies: "HTML,CSS,Javascript",
    description: "A web app showcasing an impressive collection of cars with detailed specifications and images.A responsive slider in which cars of different companies are showcased.",
    githubLink: "https://github.com/moezthedev/carRevolution",
    liveDemoLink: "https://carrevolution.netlify.app",
  },{
    title: "Slide Sync",
    imageUrl: `${P3}`,
    technologies: "React,Custom CSS,Formik,Nodejs,Mongo db",
    description: "An AI-powered web app that effortlessly creates visually appealing presentation slides from your content, saving you time and effort.A user can select from different themes,edit content on site and download content generated from Ai in ppt format ",
    githubLink: "https://github.com/moezthedev/PresentationsML",
    liveDemoLink: "https://slidesync.netlify.app ",
  },
  {
    title: "Creative Landing Web Page",
    imageUrl: `${P4}`,
    technologies: "HTML,CSS,JS",
    description: "Experience a creative landing page web app that empowers you to craft stunning first impressions. Seamlessly design captivating, custom landing pages that engage and convert visitors. Elevate your online presence with intuitive tools, and leave a lasting impact on your audience.",
    githubLink: "https://github.com/moezthedev/chromacraft",
    liveDemoLink: "https://chromacraft.netlify.app/",
  },

  {
    title: "Tesla",
    imageUrl: `${P6}`,
    technologies: "React, JS, CSS",
    description: "Explore a meticulously designed Tesla clone web app that replicates the iconic electric car manufacturer's website. Experience the sleek and intuitive interface, browse Tesla's cutting-edge vehicle lineup, and access detailed product information, all while embracing the spirit of innovation that Tesla embodies.",
    githubLink: "https://github.com/moezthedev/Tesla",
    liveDemoLink: "https://tesladrive.netlify.app/",
  },
  {
    title: "Soft Ai",
    imageUrl: `${P7}`,
    technologies: "React,  CSS, MUI",
    description: "Discover an all-in-one AI web app that revolutionizes text analysis and completion. Effortlessly detect spam, gauge sentiment, transform text into compelling headlines, and swiftly complete sentences. Harness the power of AI for accurate and efficient text processing, enhancing communication and content creation.",
    githubLink: " https://github.com/moezthedev/SoftAi",
    liveDemoLink: "https://softml.netlify.app ",
  },
  {
    title: "Consulting Edge",
    imageUrl: `${P8}`,
    technologies: "HTML,CSS,JS",
    description: "Experience our consulting web app's dynamic landing page, designed to captivate and inform. Navigate through an engaging interface that showcases our consulting expertise, services, and client success stories.",
    githubLink: "https://github.com/moezthedev/consultingedge",
    liveDemoLink: "https://consultingedge.netlify.app",
  },
  ,
  {
    title: "Bitnine",
    imageUrl: `${P9}`,
    technologies: "React,JS,CSS",
    description: "A web app made in react for bitnine global as per thier coding test requirement",
    githubLink: "https://github.com/moezthedev/bitnineglobal",
    liveDemoLink: "https://bitnine-beryl.vercel.app/",
  }

];

const ShowcaseProjects = () => {
    return (
        <>
        <Element name="project" id="project"></Element>
         <Particle/>
         <h1 className='text-white font-bold pb-6 pt-2   text-5xl pl-2 text-center bg-primary'>Projects</h1>
      <div className="grid bg-opacity-100  bg-gradient-to-t from-tertiary via-secondary to-primary grid-cols-1 md:grid-cols-2 p-4 md:p-12 lg:grid-cols-3 gap-4 md:gap-8">
      
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }} 
            
            whileHover={{ scale: 1.05,y:-10 }} 
            whileInView={{ opacity: 1,y:0,transition: { duration:"1", ease: "easeIn" }}}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-[500px] h-64 object-fit object-center "
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold  text-blue-500">
                {project.title}
              </h2>
              <p className="text-gray-800 text-sm mb-4">{project.technologies}</p>
              <p className="text-gray-700">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project?.githubLink}
                  className="text-blue-500 hover:font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    className="ml-4 text-blue-500 hover:font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </>
    );
  };
  
  export default ShowcaseProjects;
  