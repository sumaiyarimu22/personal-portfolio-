import { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../Hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356745/personal-portfolio/me_qhgfz0.jpg",
  img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675708986/personal-portfolio/IMG_20230206_221519_rcssfb.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadline1Ref, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);
  return (
    <div className="hero container mx-auto mt-16 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1Ref}>React.js</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
