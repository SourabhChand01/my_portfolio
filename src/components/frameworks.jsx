import { Orbitory } from "./orbitary"
export default function FrameWorks() {
  const skills=[
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369081/html5_mdehxj.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369080/css3_hum2jx.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369081/javascript_cbimln.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369085/react_xqprtg.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369080/git_sqz9nh.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369084/tailwindcss_mfxhgu.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369080/github_pfesuf.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369086/vite_bmb8jz.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369086/visualstudiocode_uosv8t.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369085/react_xqprtg.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369084/threejs_ifodsq.svg",
    "https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369086/wordpress_rezert.svg",
  ]
  
    return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Orbitory iconSize={40}>
        {skills.map((skill,index)=>(
           <Icons key={index} src={skill}/> 
        ))}
      </Orbitory>
      <Orbitory
       iconSize={30} 
       radius={100} 
       reverse speed={2}
       >
        {skills.reverse().map((skill,index)=>(
           <Icons key={index} src={skill}/> 
        ))}
        </Orbitory>
    </div>
  )
}
const Icons=({src})=>(
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
)


