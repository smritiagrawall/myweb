import React from "react";
import smruti from '../images/smruti.png';
import { Link } from "react-router-dom";
import github from '../images/github_icon3.png';
import linkdin from '../images/linkdin.png';
import background from '../images/background1.png';
import { Parallax } from 'react-parallax';
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation";

const ContactMe = () =>{
    return(
        <Parallax strength={600} bgImage={background}>
        <motion.div className="overall" exit="exit" variants={pageAnimation} initial="hidden" animate="show">
    <h1 className="my_contact">My Contacts</h1>        
<div className="cont">

    <div className="image2">
    <img className="imagee2" src={smruti} alt="my image"/>
    <h1 className="name">Smruti Agrawal</h1>
    <h3 className="par3">Frontend <span className="changeclr"> web developer</span> </h3>
</div>
<div className="contact_para">
    {/* <h1 className="name">Smruti Agrawal</h1>
    <h3 className="par">Frontend <span className="changeclr"> web developer</span> <br/>You can contact me via Email</h3> */}
   <div className="space">
    <div className="connection">
    <h3 className="par">You can contact me via Email:</h3>     
<h3 className="par1"><span className="changeclr">Email:</span> smrutiagrawal02@gmail.com</h3><br/>
<h3 className="par">You can connect with me here:-</h3>
<div className="icondiv">
<a href="https://github.com/smritiagrawall" target="_blank" rel="noreferrer">
<img className="icons" src={github} alt="my image"/></a>
<a href="https://www.linkedin.com/in/smruti-agrawal/" target="_blank" rel="noreferrer">
<img className="icons2" src={linkdin} alt="my image"/></a>
<a href="https://github.com/smritiagrawall" target="_blank" rel="noreferrer">
<img className="icons" src={github} alt="my image"/></a>
    </div>
    </div>
    </div>
</div>

</div>
</motion.div>
</Parallax>
    );
}

export default ContactMe;