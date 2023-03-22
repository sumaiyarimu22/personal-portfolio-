import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../Hooks/gsap";
const data = {
  img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1679496356/personal-portfolio/IMG_1676991302306_jfsbak.jpg",
  img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356745/personal-portfolio/me_qhgfz0.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];
  useProjectLeftRightReveal(abouts);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a React developer with expertise in Redux and Tailwind CSS, you
            have a passion for building responsive and user-friendly
            applications. I am skilled in using React components, state
            management with Redux, and styling with Tailwind CSS to create
            dynamic and engaging web pages. I attention to detail and ability to
            create visually appealing and functional user interfaces has made
            you a valuable asset on any project.
          </p>
          <p className="mt-10">
            I am dedicated to staying up-to-date with the latest technologies
            and best practices in the industry and are always seeking to improve
            your skills. My expertise in building responsive and user-friendly
            applications has resulted in a portfolio of successful projects,
            demonstrating your ability to deliver high-quality and impactful
            results. I am an asset to any team, and I bring my unique skillset
            and experience to every project.
          </p>
          <a
            href="https://docs.google.com/document/d/1QxSL3GzC0FJMQjPISQvSSD_jr5hM5Txlu9cfEBxmXSY/edit"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
