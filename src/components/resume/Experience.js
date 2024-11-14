import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Development Intern"
            subTitle="Nuvizz Inc"
            result="Jun 2024 - Aug 2024"
            des="Designed and developed a data purger component into the developer dashboard. I was given creative freedom with the UI and it allowed me to advance my front end skillset significanty. Additonally, I was able to gain valuable experience with MongoDB and NodeJS as tested and devloped the databases and backend."
          />
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="Nuvizz Inc"
            result="Jun 2021 - Jan 2022"
            des="Using the tesseract OCR engine, I created an application that would allow delivery drivers to take pictures of their delivery form and receive the signficant data from it in a digital ticket. This would essentially make the delivery process paperless for the driver."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
