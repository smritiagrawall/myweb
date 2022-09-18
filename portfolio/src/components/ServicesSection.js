import React from "react";
import background1 from '../images/background9.png';
import { Parallax } from 'react-parallax';

const ServicesSection = () =>{
    return(
        <Parallax strength={600} bgImage={background1}>
<div className="services">
    <div className="description2">
        <h2 className="educationhead">My <span className="datahighlight">Education </span></h2>
        <div className="card">
            <div className="content">
<h3>10th</h3>
<p>Vidyaniketan English<br/> Medium School<br/><br/> (93%)</p>

            </div>
            <div className="content">
            <h3>12th</h3>
<p>Atulesh High School<br/><br/><br/> (74%)</p>
            </div>
            <div className="content">
            <h3>Btech</h3>
<p>Shri Ramdeobaba College<br/> of engineering and management<br/><br/> (current cgpa : 8.9)</p>
            </div>
        </div>
    </div>
   
</div>
</Parallax>
    )
}

export default ServicesSection;