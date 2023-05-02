import { useRef } from "react";
import { useBioReveal } from "../Hooks/gsap";
const Bio = () => {
  const bioRef = useRef();
  useBioReveal(bioRef);
  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        I am a MERN-stack Developer specialized in building responsive web
        applications using Next.js, MongoDB, Express, React, and Node. It
        includes examples of my work, demonstrating my ability to design and
        implement scalable, efficient, and maintainable applications.
      </p>
    </div>
  );
};

export default Bio;
