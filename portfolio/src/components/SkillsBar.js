import React from "react";
import background1 from '../images/background6.png';
import { Parallax } from 'react-parallax';


function SkillsBar () {
   return (
    <Parallax strength={600} bgImage={background1}>
       <div className="container">
           <h1 className="title-text">My <span className="skill">skills</span></h1>

           <div className="skill-box">
               <span className="title">HTML</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                     
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JavaScript</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                      
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Python</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                      
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ReactJS</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                      
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">SQL</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                      
                   </span>
               </div>
           </div>
          
       </div>
       </Parallax>
   )
}

export default SkillsBar;