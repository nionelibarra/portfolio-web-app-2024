import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 mt-40 flex-shrink-0 w-[300px] md:mt-30 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="company-img"
      ></motion.img>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        {/* <div className="flex space-x-2 my-2">
          {experience.technologies.map((value)=>(
            <p>{String(value)}</p>
          ))}
        </div> */}
        <p className="uppercase py-5 text-gray-300">
          Started work at {experience.dateStarted} - {experience.isCurrentlyWorkingHere ? 'currently works here':`ended at ${experience.dateEnded}`}        
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg"></ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
