import { motion } from "framer-motion";
import Sphere from "../../assets/Sphere";
import ExperienceItem from "./ExperienceItem";

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
        <div className="h-96 flex flex-col border-b border-grey">
          <div className="experienceTitle">careers</div>
          <div className="flex flex-col ">
            <ExperienceItem />
          </div>
        </div>
        <div className="w-full flex gap-16">
          <div className="h-96 grow border-b border-grey"></div>
          <div className="h-96 grow border-b border-grey"></div>
          <div className="h-96 grow border-b border-grey"></div>
        </div>
      </div>
      <motion.div
        className="w-36 h-36 rounded-full circleBorder bg-blue absolute -top-32 left-32 overflow-hidden"
        animate={{ y: [0, -130, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sphere area="home1" color="blue" />
      </motion.div>
    </div>
  );
};

export default Experience;
