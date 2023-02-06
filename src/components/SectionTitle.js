import { useRef } from "react";
import { useSectionTitleReveal } from "../Hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionTitleRef = useRef();
  useSectionTitleReveal(sectionTitleRef);
  return (
    <div className="overflow-hidden">
      <h2 className="section-title" ref={sectionTitleRef}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
