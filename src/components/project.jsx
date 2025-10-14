
import { FaArrowRight } from "react-icons/fa6";
import Projectdetails from "./projectdetails";
import { useState } from "react";

const Project=({title,description,subDescription,href,image,tags,setpreview})=>{
    const [isHidden,setIsHidden]= useState(false);
    return(
        <>
        <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 "
        onMouseEnter={()=>setpreview(image)}
        onMouseLeave={()=>{setpreview(null)}}
        >
            <div>
                <p className="text-2xl">{title}</p>
                <div className="flex gap-5 mt-2 text-sand overflow-x-hidden">
                    {
                        tags.map((tag)=>(
                            <span key={tag.id}>{tag.name}</span>
                        ))
                    }
                </div>
            </div>
            <button 
            onClick={()=>setIsHidden(true)}
            className="flex items-center gap-1 cursor-pointer hover-animation">
                Read More
                <span className="flex items-center"><FaArrowRight/></span>
            </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
        {isHidden&&(<Projectdetails title={title} description={description}
        subDescription={subDescription} image={image}
        tags={tags} href={href}
        closeModal={()=>setIsHidden(false)}/>)}
        </>
    )
}
export default Project;