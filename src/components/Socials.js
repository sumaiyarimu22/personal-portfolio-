import { useRef } from "react";
import { useSocialReveal } from "../Hooks/gsap";
const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/sumaiya.rimu.313",
  },
  { id: 2, title: "Twitter", url: "https://twitter.com/SumaiyaRimu1" },
  { id: 3, title: "Github", url: "https://github.com/sumaiyarimu22" },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sumaiya-rimu-b24712249/",
  },
];

const Socials = () => {
  const SocialReveal = useRef();
  useSocialReveal(SocialReveal, 1.5);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-5 top-[85%] -rotate-90 origin-left text-white/50 bg-black/30 p-5 backdrop:blur-xl z-50"
      ref={SocialReveal}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
