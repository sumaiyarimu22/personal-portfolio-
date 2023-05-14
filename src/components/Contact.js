import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useContactReveal } from "../Hooks/gsap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const fromControl1Ref = useRef(null);
  const fromControl2Ref = useRef(null);
  const fromControl3Ref = useRef(null);
  const fromControl4Ref = useRef(null);

  const fromControlArray = [
    fromControl1Ref,
    fromControl2Ref,
    fromControl3Ref,
    fromControl4Ref,
  ];
  useContactReveal(fromControlArray);

  const sendEmail = (e) => {
    e.preventDefault();

    //email integration
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("message sent");
        },
        () => {
          console.log("Message not send");
        }
      );
    //reset
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"LET'S TALK"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden"
        ref={formRef}
      >
        <div className="from-control overflow-hidden" ref={fromControl1Ref}>
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border py-16 px-28 rounded-full border-black outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={fromControl2Ref}>
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-black outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden" ref={fromControl3Ref}>
          <textarea
            placeholder="Write your message"
            name="message"
            required
            className="message bg-transparent border py-16 px-28 rounded-full border-black outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            rows="1"
            cols="30"
          />
        </div>
        <div className="from-control overflow-hidden" ref={fromControl4Ref}>
          <input
            type="submit"
            value="Send message"
            className="border py-16 px-28 rounded-full border-black outline-none hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full uppercase cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
