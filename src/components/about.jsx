import { useRef } from "react";
import Card from "./card";
import { Globe } from "./globe";
import Copyemail from "./copyemail";
import FrameWorks from "./frameworks";
import TimeZone from "./timezone";
const About=()=>{
    const grid2Container=useRef();
    return(
        <section className="c-space section-spacing  bg-black" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                <div className="flex items-end grid-default-color grid-1">
                    <img src="https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369212/aboutpic1-94IXuIBD_otkrkk.png" alt="pic" 
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"/>
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Sourabh,</p>
                        <p className="subtext text-white">
                         A full-stack web developer. <br /> I specialize in designing and developing robust web applications, leveraging modern frameworks and technologies across the frontend and backend.
                        </p>
                    
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
                </div>

                <div className=" grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">Good At </p>
                    <Card
                    style={{rotate:"10deg",top:"10%",left:"20%"}}
                    text="Responsive UI "
                    containerRef={grid2Container}/>

                    <Card
                    style={{rotate:"75deg",top:"30%",left:"15%"}}
                    image={"/assets/react.svg"}
                    containerRef={grid2Container}/>

                    

                    <Card
                    style={{rotate:"-30deg",top:"60%",left:"45%"}}
                    image={"/assets/tailwindcss.svg"}
                    containerRef={grid2Container}/>


                    <Card
                    style={{rotate:"60deg",bottom:"30%",left:"70%"}}
                    text="Design Pattern"
                    containerRef={grid2Container}/>

                    <Card
                    style={{rotate:"-20deg",top:"65%",left:"0%"}}
                    text="Full Stack"
                    containerRef={grid2Container}/>

                    <Card
                    style={{rotate:"20deg",top:"7%",left:"55%"}}
                    text="Creative pages"
                    containerRef={grid2Container}/>

                    <Card
                    style={{rotate:"-20deg",top:"70%",left:"48%"}}
                    text="Scalable Projects"
                    containerRef={grid2Container}/>

                </div>
                </div>
            <div className=" grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext ">Time Zone
                        <br /><span className="text-2xl mt-0"><TimeZone/></span>
                        </p>
                    <p>I'm based in India, and open to remote work worldwide</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe/>
                        </figure></div>  
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Do you want to start a project together?
                    </p>
                    <Copyemail/>
                </div>
            </div>
            <div className=" grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headText">Tech Stack</p>
                    <p className="subtext">
                        I specialize in a wide range of languages, frameworks, and tools, enabling me to build robust, scalable, and high-performance web applications.
                    </p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%]
                md:scale-125">
                    <FrameWorks/>
                </div>
            </div>
            
            </div>

        </section>
    )
}
export default About;