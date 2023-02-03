import Project from "./Project";
const data = [
  {
    id: 1,
    title: "Easy-tech is an online e-commerce store",
    img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356804/personal-portfolio/p-1_balxa1.jpg",
    img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356812/personal-portfolio/p-1_2_vezmcb.jpg",
    description:
      "React & Redux e-commerce app with Tailwind CSS styling. Allows browsing, cart management, and simulated purchases. A front-end focused example showcasing practical use of these technologies.",
    tools: [
      " React",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://resonant-crisp-514db3.netlify.app/",
    frontEndLink: "https://github.com/sumaiyarimu22/easy-tech.git",
  },
  {
    id: 2,
    title: " TOdo list to manage your daily tasks.",
    img1: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356788/personal-portfolio/Screenshot_551_xp65v9.png",
    img2: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1675356786/personal-portfolio/Screenshot_2023-02-02_at_08-43-13_Todo-app_zsmdfs.png",
    description:
      "TODO App is an online application that allows you to keep track of your daily tasks and mark them as complete once they are done. This app is designed to be user-friendly and helps you to prioritize your tasks and stay organized.",
    tools: [" React", "Tailwind CSS"],
    liveLink: "https://reliable-conkies-d11b05.netlify.app/",
    frontEndLink: "https://github.com/sumaiyarimu22/react-todo-app.git",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <h2 className="section-title">projects</h2>
      </div>

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
