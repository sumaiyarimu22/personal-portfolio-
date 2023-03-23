import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useSkillLineReveal, useSkillTextReveal } from "../Hooks/gsap";
const data = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "SASS" },
  { id: 4, title: "Bootstrap" },
  { id: 5, title: "Tailwind CSS" },
  { id: 6, title: "JavaScript" },
  { id: 7, title: "REact.js" },
  { id: 8, title: "React Router" },
  { id: 9, title: "Redux.js" },
  { id: 10, title: "Redux Toolkit" },
  { id: 11, title: "Axios" },
  { id: 12, title: "GSAP" },
  { id: 13, title: "Firebase" },
  { id: 14, title: "Node.js" },
  { id: 15, title: "Express.js" },
  { id: 16, title: "MongoDB" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />

      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 sm:gap-20 mt-40 gap-10">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
