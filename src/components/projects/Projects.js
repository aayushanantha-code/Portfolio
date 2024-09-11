import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Web 3.0 Crypto Blockchain Application"
          des="Modern web3.0 application connected to blockchain that allows users to connect wallet and make transactions with crypto currency."
          src={projectOne}
        />
        <ProjectsCard
          title="Interactive Admin Dashboard"
          des="This React-based dashboard features interactive graphs for dynamic data visualization and includes user account management, team member administration, and event scheduling making it a versatile tool for managing and visualizing key information."
          src={projectTwo}
        />
        <ProjectsCard
          title="Art Gallery Search Engine Application"
          des="I used multiple RESTFUL APIS's, including the Harvard Art Gallery API to create a catalogue where users could enter preferences for the art and artifacts they wanted to see. Once requests were submitted, the artifacts that matched their criteria were displayed in a slide show format."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
