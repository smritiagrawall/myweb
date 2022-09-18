import React from "react";
import { Link } from "react-router-dom";
import smruti from '../images/smruti.png';
import {motion} from 'framer-motion';
//import styled from 'styled-components';
import background from '../images/background1.png';
import { Parallax } from 'react-parallax';
import {pageAnimation} from "../animation";

const AboutSection = () => {
    const titleanimation ={
hidden:{opacity:0},
show:{opacity:1,transition:{duration:2}},
    }

    const containerr={
        hidden:{x:100},
        show:{x:0,transition:{duration:0.75,ease:"easeOut",staggerChildren:1,when:'beforeChildren'}},
        
    }
    return(
<Parallax strength={600} bgImage={background}>
        <motion.div className="comp" exit="exit" variants={pageAnimation} initial="hidden" animate="show">
             
<div className="description">
<div className="title">
<motion.div variants={containerr} initial="hidden" animate="show"  className="hide">
    <motion.h2 variants={titleanimation} initial="hidden" animate="show">Hii, I'am <span className="namehighlight">Smruti Agrawal <br/> </span>
    Student <span>  of cs </span>department <br/> specialising in
    <span className="datahighlight"> Data Science</span>
    </motion.h2>

    {/* <h3 className="datahighlight">Data science</h3> */}
</motion.div>

<motion.p variants={containerr} initial="hidden" animate="show" className="paar">Exceling in the field of datascience and currently working as frontend web developer. </motion.p>
<Link to="/contact" ><button className="button">Contact me</button></Link>
</div>
</div>
<div className="image">
    <img className="imagee" src={smruti} alt="my image"/>
</div>

</motion.div>
</Parallax>
    )
}

export default AboutSection;