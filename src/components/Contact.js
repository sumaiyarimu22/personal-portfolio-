import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"LET'S TALK"} />
      <form className="mt-40 grid grid-cols-2 gap-20">
        <div className="from-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            rows="1"
            cols="30"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className=" border py-16 px-28 rounded-full border-white/20 outline-none hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full uppercase cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
