import { useTransform,useScroll,motion, useSpring } from "motion/react";

const Herobackground=()=>{
    const{scrollYProgress}=useScroll();
    const x=useSpring(scrollYProgress,{damping:50})
     const opacity1 = useTransform(x, [0, 0.5], [1, 0]);
  const opacity3 = useTransform(x, [0, 0.5], [0, 1]);

  
  const scale1 = useTransform(x, [0, 0.5], [1, 1.2]);
  const scale3 = useTransform(x, [0, 0.5], [1, 1.2]);
   
    return(
        <section className="absolute  inset-0 bg-black/40 ">
            <div className="relative h-screen overflow-hidden">
                <motion.div className="absolute inset-0 w-full h-screen -z-50"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369151/spacebg1-DCH6T1WO_mpwi7y.jpg)` ,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    opacity:opacity1,
                    scale:scale1,
                }}></motion.div>
                <motion.div className="absolute inset-0 w-full h-screen -z-50"
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369231/spacebg3-nTax9_y8_rt9uwj.jpg)` ,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    opacity:opacity3,
                    scale:scale3,
                }}></motion.div>
                </div>
        </section>
    )
}
export default Herobackground;