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
            As a MERN stack developer, my personal portfolio showcases my skills
            and experience in building dynamic web applications using the MERN
            (MongoDB, Express, React, Node) technology stack. I have experience
            in developing back-end APIs, utilizing MongoDB for data storage, and
            building responsive front-end interfaces using React.
            <br />
            In my portfolio, you'll find examples of my work, including projects
            that demonstrate my ability to design and implement scalable,
            maintainable, and efficient applications. I also showcase my
            expertise in developing RESTful APIs using Node.js and Express, as
            well as my proficiency in working with React, Redux, and other
            front-end technologies. <br /> I'm passionate about learning new
            technologies and staying up-to-date with the latest trends in the
            industry. In my portfolio, you'll see evidence of my commitment to
            continuous learning and growth as a developer. <br /> Overall, my
            personal portfolio is a reflection of my skills, experience, and
            passion for building high-quality web applications using the MERN
            stack.
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
