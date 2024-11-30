import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Sphere from "../../assets/Sphere";
import ExperienceItem from "./ExperienceItem";
import { experienceList } from "../../utils/utils";
import { RootState } from "../../redux/reducers";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import ExperienceItemMb from "./ExperienceItemMb";

const Experience = () => {
  const [descOpen, setDescOpen] = useState({
    careers: false,
    education: false,
    certifications: false,
    study: false,
  });
  const windowWidth = useSelector(
    (state: RootState) => state.windowWidth.windowWidth
  );
  return (
    <div className="w-full relative">
      <div className="w-full flex justify-between items-end font-nunitoSans uppercase mb-32 max-aboutMd:flex-col max-aboutMd:items-center max-aboutSm:mb-20 max-homeSm:mb-10">
        <div className="flex flex-col text-2xl gap-2 pb-6 leading-none max-aboutMd:w-full max-aboutMd:flex-row max-aboutMd:justify-between max-homeSm:pb-3 max-homeSm:text-sm">
          <span>Journey</span>
          <span>Collaboration</span>
        </div>
        <h2 className="text-title font-bold tracking-titleSpacing leading-none max-aboutSm:text-9xl max-homeSm:text-7xl max-projectXsm:text-5xl">
          Experience
        </h2>
      </div>
      {windowWidth > 943 ? (
        <div className="w-full flex flex-col">
          <div className="flex flex-col border-b border-grey pb-16">
            <div className="experienceTitle">careers</div>
            <div className="flex h-fit gap-20 px-7 pt-10 max-homeMd:gap-10">
              <div className="flex flex-col gap-4 flex-1">
                {experienceList[0].list.slice(0, 3).map((careers) => (
                  <ExperienceItem
                    key={careers.listId}
                    date={careers.date}
                    title={careers.title}
                    description={careers.description}
                    others={careers.others}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {experienceList[0].list.slice(3).map((careers) => (
                  <ExperienceItem
                    key={careers.listId}
                    date={careers.date}
                    title={careers.title}
                    description={careers.description}
                    others={careers.others}
                  />
                ))}
              </div>
              <div className="w-full h-auto rounded-3xl overflow-hidden flex-1 relative max-experienceImgHidden:hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="./img/careers.png"
                  alt="careers img"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-16 pt-16 max-skillLg:gap-6">
            <div className="pb-16 grow border-b border-grey">
              <div className="experienceTitle">education</div>
              <div className="flex gap-20 px-7">
                <div className="flex flex-col gap-4 pt-10">
                  {experienceList[1].list.map((edu) => (
                    <ExperienceItem
                      key={edu.listId}
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
              <div className="flex gap-20 px-7 max-skillLg:gap-10 max-homeMd:flex-col max-homeMd:gap-4">
                <div className="flex flex-col gap-4 pt-10">
                  {experienceList[2].list.slice(0, 2).map((certification) => (
                    <ExperienceItem
                      key={certification.listId}
                      date={certification.date}
                      title={certification.title}
                      description={certification.description}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-10 max-homeMd:p-0">
                  {experienceList[2].list.slice(2).map((certification) => (
                    <ExperienceItem
                      key={certification.listId}
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
                      key={study.listId}
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
      ) : (
        <div>
          {experienceList.map((exp, idx) => {
            return (
              <div key={idx} className="border-b border-grey">
                <div
                  className="flex justify-between items-center "
                  onClick={() =>
                    setDescOpen({
                      ...descOpen,
                      [exp.type]: !descOpen[exp.type as keyof typeof descOpen],
                    })
                  }
                >
                  <div className="flex gap-1.5 items-center p-2">
                    <span className="uppercase font-nunitoSans font-bold text-2xl">
                      {exp.type}
                    </span>
                    <span className="font-pretendard text-darkGrey text-sm">
                      {exp.typeH}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 ${descOpen[exp.type as keyof typeof descOpen] ? "-rotate-90" : "rotate-0"} transition-transform`}
                  >
                    <ShortArrow />
                  </div>
                </div>
                <div
                  className={`${descOpen[exp.type as keyof typeof descOpen] ? "h-auto" : "h-0"} font-pretendard ${descOpen[exp.type as keyof typeof descOpen] ? "pb-6" : "pb-0"} overflow-hidden transition-all duration-300 cursor-pointer`}
                >
                  {exp.list.map((item, index) => (
                    <ExperienceItemMb key={index} {...item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <motion.div
        className="w-36 h-36 rounded-full circleBorder bg-blue absolute -top-32 left-32 overflow-hidden max-projectXsm:w-20 max-projectXsm:h-20 max-projectXsm:left-12"
        animate={{ y: [0, -130, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      >
        <Sphere area="home1" color="blue" />
      </motion.div>
    </div>
  );
};

export default Experience;
