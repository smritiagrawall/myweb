import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import progressBar from "../components/progressBar";
import SkillsBar from "../components/SkillsBar";
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation";

const aboutus = () =>{
    return(
        <div >
            

<AboutSection />
<ServicesSection />
<SkillsBar/>

</div>
    )
}
export default aboutus;