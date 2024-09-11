import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Development"
          des="I have experience as a full stack developer! I have experience working with databases aswell as developing a UI."
          icon={<AiFillAppstore />}
        />

        <Card
          title="Mobile Development"
          des="I'm currently building my app development skills and am taking a class on Android studio!"
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="I'm comfartable using figma and pride myself on creating beautiful products!"
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
