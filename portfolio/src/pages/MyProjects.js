import React from "react";
import background from '../images/background1.png';
import { Parallax } from 'react-parallax';
import SkillsBar from "../components/SkillsBar";
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation";
import ResumeBar from "./ResumeBar";
import project1 from '../images/project1.png';
const MyProjects = () =>{
    return(
        <div>
        <Parallax strength={600} bgImage={background}>
<motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
    <h1 className="my_contact">My Projects</h1>
    <div className="project">
        <div>
        <div className="projectcard">
            <img className="project1" src={project1} alt="my image"/>
            
        </div>
        <h3>Music Player</h3>
        </div>

        <div>
        <div className="projectcard">
            <img className="project1" src={project1} alt="my image"/>
            
        </div>
        <h3>Music Player</h3>
        </div>
        
      
        <div>
        <div className="projectcard">
            <img className="project1" src={project1} alt="my image"/>
            
        </div>
        <h3>Music Player</h3>
        </div>
       
        </div>
       
   
{/* <SkillsBar/>
<ResumeBar/> */}
    </motion.div>
  
</Parallax>
 <div className="extraspace"></div>
 </div>
    );
}

export default MyProjects;