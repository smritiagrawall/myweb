import React from "react";
import { Link } from "react-router-dom";
import background from '../images/background1.png';
import { Parallax } from 'react-parallax';
import resume from '../images/resume.png';
import {pageAnimation} from "../animation";
import {motion} from 'framer-motion';
const ResumeBar =()=>{

return(
  <Parallax strength={600} bgImage={background}>
<motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
  <div className="resutitle">
<h1 className="title-text">Personal <span className="skill">Resume</span></h1>
</div>
 <div className="reumediv">
<img className="resume1" src={resume} alt="my image"/>
 </div>
 
 </motion.div>
 </Parallax>

);

}
export default ResumeBar;