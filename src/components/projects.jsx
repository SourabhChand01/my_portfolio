import { motion, useMotionValue, useSpring } from "motion/react";
import {myprojects} from "../constants";
import Project from "./project";
import { useState } from "react";

const Projects=()=>{
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const springX=useSpring(x,{damping:10, stiffness:50});
    const springY=useSpring(y,{damping:10,stiffness:50});
    const handleMouseMove=(e)=>{
        x.set(e.clientX+20);
        y.set(e.clientY+20);
    }
    const [preview,setpreview]=useState(null);
    return(
        <section onMouseMove={handleMouseMove} className="relative c-space section-spacing " id="work">
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-gradient-to-r from-transparent
            via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
            {myprojects.map((project)=>(
            <Project key={project.id} {...project} setpreview={setpreview}/>
            ))}
            
              {preview&&(  <motion.img
             className="fixed top-0 left-0 z-50  h-56 rounded-lg shadow-lg pointer-events-none w-80 object-contain" 
             src={preview}
            style={{x:springX,y:springY}}/>
        )}
       
            
        </section>

    )
}
export default Projects;