import { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../Hooks/gsap";

const Project = ({ project }) => {
  const projectLeftRef = useRef(null);
  const projectRightRef = useRef(null);

  const projectRefs = [projectRightRef, projectLeftRef];

  useHoverEffect(projectRightRef, project.img1, project.img2);
  useProjectLeftRightReveal(projectRefs);
  return (
    <div className="project grid grid-cols-1 xl:grid-cols-5 gap-20 overflow-hidden">
      <div
        className="project-left xl:col-span-3 flex flex-col gap-10"
        ref={projectLeftRef}
      >
        <span className="text-9xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p>{project.description}</p>
        <span className="text-cyan-400 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className="flex gap-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Live Site
          </a>
          <a
            href={project.frontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            front-End Code
          </a>
          {project.backendLink && (
            <a
              href={project.backendLink}
              target="_blank"
              rel="noreferrer"
              className="uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
            >
              back-end Code
            </a>
          )}
        </div>
      </div>
      <div
        className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
