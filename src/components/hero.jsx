import { Canvas } from "@react-three/fiber";
import Herobackground from "./herobackground";
import Herotext from "./herotext";
import Meteor from "./meteor";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  
  return (
     <section id="home"
      style={{ minHeight: isMobile ? "80vh" : "100vh" }}
      className={`relative flex flex-col w-full overflow-hidden c-space ${
        isMobile ? "justify-center items-center" : "items-start justify-start"
      }`}
    > 
    <Herotext  />
      <Herobackground  />
      <figure className="absolute inset-0 z-0" style={{ zIndex: -1, pointerEvents: "none" }}>
        <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 1, 5] }} gl={{ alpha: true }} className="h-screen w-screen">
          {/* Desktop animation */}
          {!isMobile && (
            <>
              {/* Meteor 1: comes from right and stays bottom-right */}
              <Meteor
                position={[5, -2, 0]}
                scale={0.6}
                direction={[-0.01, 0, 0]}
                rotationSpeed={0.01}
              />
              {/* Meteor 2: comes from right, moves across screen to left */}
              <Meteor
                position={[6, 1, -1]}
                scale={0.8}
                direction={[-0.03, 0, 0]}
                rotationSpeed={0.02}
              />
              {/* Meteor 3: comes from left, moves to right */}
              <Meteor
                position={[-6, 0, 1]}
                scale={0.58}
                direction={[0.02, 0, 0]}
                rotationSpeed={0.015}
              />
              
            </>
          )}

          {/* Mobile animation */}
          {isMobile && (
            <>
              {/* All meteors move in circular patterns */}
              <Meteor
                position={[-2, 0, 0]}
                scale={0.7}
                direction={[0.01, 0.005, 0]}
                rotationSpeed={0.02}
              />
              <Meteor
                position={[1, 1, -1]}
                scale={0.18}
                direction={[0.008, -0.006, 0]}
                rotationSpeed={0.015}
              />
              <Meteor
                position={[-1, -1, 1]}
                scale={0.3}
                direction={[0.009, 0.007, 0]}
                rotationSpeed={0.018}
              />
              <Meteor
                position={[-1, -1, 1]}
                scale={0.5}
                direction={[0.009, 0.009, 0]}
                rotationSpeed={0.018}
              />
            </>
          )}

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas >
      </figure>
      </section>
);
};

export default Hero;
