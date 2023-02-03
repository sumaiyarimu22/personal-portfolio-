import { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356745/personal-portfolio/me_qhgfz0.jpg",
  img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675357436/personal-portfolio/IMG_20230202_230203_kxnsac.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  useHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div className="hero container mx-auto mt-16 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>React.js</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
