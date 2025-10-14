import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import {motion} from "motion/react";
import { IoMdClose } from "react-icons/io";

function Navigation(){
    const navli=["home","About","work","contact"]
    return(
        <ul className="nav-ul">
        {
            navli.map((items,index)=>(
                <li id= {`#${items.toLowerCase()}`} key={index} className="nav-li text-white"><a className="nav-link" href={`#${items.toLowerCase()}`}> {items.charAt(0).toUpperCase()+items.slice(1)}</a></li>
            ))
        }
        </ul>
    )
}

const Navbar=()=>{
    const [isOpen,setisOPen]=useState(false)
    return(
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl w-full px-6">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">Sourabh.</a>
                    <div className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden" onClick={()=>setisOPen(!isOpen)}>
                        <span>{isOpen?<IoMdClose/>:<CiMenuFries/>}</span>
                    </div>
                    <nav className="hidden sm:flex">
                        <Navigation/>
                    </nav>
                </div>
            </div>
            {isOpen&&(
                 
                <motion.div className="block overflow-hidden text-center sm:hidden" 
                initial={{opacity:0,x:-10}}
                animate={{opacity:1,x:0}}
                style={{maxHeight:"100vh"}}
                transition={{duration:1}}>
                    <nav className="pb-5"><Navigation/></nav>
            </motion.div>
            )}
            
        </div>
    )
}
export default Navbar;