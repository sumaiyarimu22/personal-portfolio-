import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../Hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  useFooterReveal(footerRef);
  return (
    <footer className="my-40 text-center text-black/70 overflow-hidden">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink
          smooth
          to="#home"
          className="link-item hover:text-black  duration-500"
        >
          Sumaiya Rimu
        </HashLink>
        . Crafted by yours truly Emmet Abbreviation
      </p>
    </footer>
  );
};

export default Footer;
