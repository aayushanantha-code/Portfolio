import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-1mt-6 lgl:mt-14 w-full h-[950px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Computational Media"
            subTitle="Georgia Institure of Technology"
            result="2024-2026"
            des="The computational media major is quite unique to Georgia Tech and is esentially a blend of the colleges of computing and design. It's allowed me to persue both my passion for software and design simultanesouly."
          />
          <ResumeCard
            title="BS in Computer Science"
            subTitle="University of Georgia"
            result="2022-2023"
            des="My first three semesters of college were spent at the University of Georgia. My education here gave me a great baseline understanding of computer science to build upon."
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
