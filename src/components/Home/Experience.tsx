import { motion } from "framer-motion";
import Sphere from "../../assets/Sphere";
import ExperienceItem from "./ExperienceItem";
import { experienceList } from "../../utils/utils";

const Experience = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex justify-between items-end font-nunitoSans uppercase mb-32">
        <div className="flex flex-col text-2xl gap-2 pb-6 leading-none">
          <span>Journey</span>
          <span>Collaboration</span>
        </div>
        <h2 className="text-title font-bold tracking-titleSpacing leading-none">
          Experience
        </h2>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col border-b border-grey pb-16">
          <div className="experienceTitle">careers</div>
          <div className="flex gap-20 px-7">
            <div className="flex flex-col gap-4 pt-10">
              {experienceList[0].list.slice(0, 3).map((careers) => (
                <ExperienceItem
                  date={careers.date}
                  title={careers.title}
                  description={careers.description}
                  others={careers.others}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 pt-10">
              {experienceList[0].list.slice(3).map((careers) => (
                <ExperienceItem
                  date={careers.date}
                  title={careers.title}
                  description={careers.description}
                  others={careers.others}
                />
              ))}
            </div>
            <div className="w-165 h-76 pt-10 rounded-3xl overflow-hidden">
              <img
                className="rounded-3xl object-cover"
                src="./img/careers.png"
                alt="careers img"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-16 pt-16">
          <div className="pb-16 grow border-b border-grey">
            <div className="experienceTitle">education</div>
            <div className="flex gap-20 px-7">
              <div className="flex flex-col gap-4 pt-10">
                {experienceList[1].list.map((edu) => (
                  <ExperienceItem
                    date={edu.date}
                    title={edu.title}
                    description={edu.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pb-16 grow border-b border-grey">
            <div className="experienceTitle">certifications</div>
            <div className="flex gap-20 px-7">
              <div className="flex flex-col gap-4 pt-10">
                {experienceList[2].list.slice(0, 2).map((certification) => (
                  <ExperienceItem
                    date={certification.date}
                    title={certification.title}
                    description={certification.description}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-10">
                {experienceList[2].list.slice(2).map((certification) => (
                  <ExperienceItem
                    date={certification.date}
                    title={certification.title}
                    description={certification.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pb-16 grow border-b border-grey">
            <div className="experienceTitle">study</div>
            <div className="flex gap-20 px-7">
              <div className="flex flex-col gap-4 pt-10">
                {experienceList[3].list.map((study) => (
                  <ExperienceItem
                    date={study.date}
                    title={study.title}
                    description={study.description}
                    others={study.others}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="w-36 h-36 rounded-full circleBorder bg-blue absolute -top-32 left-32 overflow-hidden"
        animate={{ y: [0, -130, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      >
        <Sphere area="home1" color="blue" />
      </motion.div>
    </div>
  );
};

export default Experience;
