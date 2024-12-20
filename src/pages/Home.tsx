import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Sphere from "../assets/Sphere";
import BirthdayCake from "../assets/icon/ui_icon/BirthdayCake";
import EmailIcon from "../assets/icon/ui_icon/EmailIcon";
import CodeTag from "../assets/icon/dev_icon/CodeTag";
import Arrow from "../assets/Arrow";
import AboutClipImage from "../components/Home/AboutClipImage";
import AboutClipImageSm from "../components/Home/AboutClipImageSm";
import SkillsClipImage from "../components/Home/SkillsClipImage";
import MySkillsTitle from "../components/Home/MySkillsTitle";
import SkillItem from "../components/Home/SkillItem";
import SkillItemMb from "../components/Home/SkillItemMb";
import { skillsData } from "../utils/utils";
import ProjectsLayout from "../components/Projects/ProjectsLayout";
import Experience from "../components/Home/Experience";
import FlipSlide from "../components/Home/FlipSlide";
import { RootState } from "../redux/reducers";

const Home = () => {
  const windowWidth = useSelector(
    (state: RootState) => state.windowWidth.windowWidth
  );

  return (
    <div className="h-fit">
      <section id="main" className="relative pt-24 z-10">
        <Arrow section={"main"} />
        <motion.div
          className="w-96 h-96 absolute top-38 -right-20 rounded-full circleBorder overflow-hidden bg-bgGrey max-homeMd:w-60 max-homeMd:h-60 max-homeSm:w-28 max-homeSm:h-28 max-homeSm:top-64 max-homeSm:-right-6"
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Sphere area={"home1"} />
        </motion.div>
        <motion.div
          className="w-80 h-80 absolute top-149 right-96 rounded-full circleBorder overflow-hidden bg-bgGrey max-homeMd:w-52 max-homeMd:h-52 max-homeMd:top-120 max-homeMd:right-72 max-homeSm:hidden"
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Sphere area={"home2"} />
        </motion.div>
        <motion.div
          className="w-44 h-44 absolute top-120 right-40 max-homeMd:w-32 max-homeMd:h-32 max-homeMd:top-88 max-homeMd:right-20  max-homeSm:hidden"
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-full h-full rounded-full circleBorder overflow-hidden animate-sphereBounce3 bg-bgGrey hover:scale-110">
            <Sphere area={"home3"} />
          </div>
        </motion.div>
        <div className="px-24 h-168 flex flex-col justify-between mb-12 max-homeMd:justify-normal max-homeMd:h-96 max-homeSm:h-36">
          <div className="font-nunitoSans flex flex-col max-homeSm:flex-col-reverse max-homeSm:items-center max-homeSm:mt-10">
            <div className="font-bold flex items-center gap-5 mt-20 max-homeSm:gap-2 max-homeSm:mt-0">
              <h1 className="leading-none tracking-titleSpacing text-title max-homeLg:text-9xl max-homeMd:text-7xl max-homeSm:text-5xl">
                PORTFOLIO
              </h1>
              <div className="w-48 max-homeLg:w-28 max-homeMd:w-20 max-homeSm:w-14">
                <CodeTag />
              </div>
            </div>
            <div className="text-7xl font-light tracking-titleSpacing max-homeLg:text-5xl max-homeMd:text-3xl max-homeMd:text-nowrap">
              Crafting Experiences
            </div>
          </div>
          <div className="flex flex-col max-homeMd:mt-32 max-homeSm:mt-3 max-homeSm:flex-row max-homeSm:items-center  max-homeSm:justify-center max-homeSm:gap-3">
            <div className="font-nunitoSans text-xl font-light leading-none tracking-titleSpacing max-[418px]:text-nowrap">
              Frontend Developer
            </div>
            <div className="text-3xl tracking-titleSpacing flex items-center">
              <span className="font-pretendard font-bold max-homeSm:text-xl max-[418px]:text-nowrap">
                양희진
              </span>
              <span className="font-nunitoSans max-homeSm:hidden">
                &nbsp;YANG HEEJIN
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="aboutme"
        className="w-full h-auto relative max-aboutMd:h-[831px] max-aboutSm:h-[728px]"
      >
        <div className="w-400 h-235 max-aboutMd:w-352 max-aboutSm:w-308 max-homeMd:w-200 max-homeSm:hidden">
          <AboutClipImage />
        </div>
        <div className="hidden px-8 pb-8 w-full h-110 relative max-homeSm:block">
          <AboutClipImageSm />
        </div>
        {windowWidth < 839 && (
          <img
            className="w-108 absolute -top-16 left-1/2 -translate-x-1/2"
            src="/img/profile_transparent.png"
            alt="My Profile Photo"
          />
        )}
        <div className="w-400 h-120 absolute top-80 right-0 bg-mainBlack rounded-l-full flex items-center gap-20 max-aboutXlg:w-380 max-aboutLg:w-11/12 max-aboutMd:top-48 max-aboutSm:top-40 max-skillMd:w-full max-skillMd:rounded-none max-skillMd:justify-center max-homeMd:top-20 max-homeSm:top-0 max-homeSm:relative">
          <div className="ml-56 font-pretendard flex flex-col gap-5 max-aboutXlg:w-187.5 max-aboutLg:w-11/12 max-skillMd:ml-0">
            {windowWidth > 1613 ? (
              <span className="text-white text-4xl font-semibold">
                안녕하세요, 프론트엔드 개발자&nbsp;
                <span className="text-mainBlack font-extrabold bg-white py-1 px-3 rounded-md">
                  양희진
                </span>
                &nbsp;입니다.
              </span>
            ) : windowWidth > 560 ? (
              <span className="text-white text-4xl font-semibold max-skillMd:text-center max-skillMd:mb-2">
                <div className="mb-2">안녕하세요,</div>
                <span>
                  프론트엔드 개발자&nbsp;
                  <span className="text-mainBlack font-extrabold bg-white py-1 px-3 rounded-md">
                    양희진
                  </span>
                  &nbsp;입니다.
                </span>
              </span>
            ) : (
              <span className="text-white text-4xl font-semibold text-center mb-2">
                <div className="mb-2">안녕하세요,</div>
                <div className="mb-2">프론트엔드 개발자&nbsp;</div>
                <span className="text-mainBlack font-extrabold bg-white py-1 px-3 rounded-md max-skillMd:py-0">
                  양희진
                </span>
                &nbsp;입니다.
              </span>
            )}
            {windowWidth > 1613 ? (
              <span className="text-white text-xl font-light flex flex-col">
                <span>
                  쇼핑몰의 운영 디자이너로 일한 약 6년의 시간동안 시각적인
                  요소에만 집중하였습니다.
                </span>
                <span>
                  그러나 단순히 이미지로만 보이는 것보다는 더 인터랙티브한
                  사용자 경험을 제공하고 싶은 욕심이 생겼습니다.
                </span>
                <span>
                  그리하여 프론트엔드 개발자의 길을 걷기로 하였습니다.
                </span>
              </span>
            ) : (
              <span className="text-white text-xl font-light max-aboutLg:grow max-skillMd:text-center">
                <span className="break-keep">
                  쇼핑몰의 운영 디자이너로 일한 약 6년의 시간동안 시각적인
                  요소에만 집중하였습니다. 그러나 단순히 이미지로만 보이는
                  것보다는 더 인터랙티브한 사용자 경험을 제공하고 싶은 욕심이
                  생겼습니다. 그리하여 프론트엔드 개발자의 길을 걷기로
                  하였습니다.
                </span>
              </span>
            )}
            <hr />
            <div className="flex gap-8 max-skillMd:gap-0 max-skillMd:justify-between max-aboutXsm:flex-col max-aboutXsm:items-center">
              <div className="text-white text-xl font-light flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <BirthdayCake />
                </div>
                1997. 06. 09
              </div>
              <div className="text-white text-xl font-light flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <EmailIcon />
                </div>
                sheephi0609@gmail.com
              </div>
            </div>
          </div>
          {windowWidth > 1360 && (
            <div className="w-80 h-96 bg-blue rounded-xl flex items-center justify-center text-white overflow-hidden max-aboutLg:mr-28 max-aboutLg:flex-none">
              <img src="/img/profile.png" alt="My Profile Photo" />
            </div>
          )}
        </div>
        {windowWidth > 1360 && (
          <div className="w-96 h-200 overflow-hidden absolute bottom-0 right-3/4 max-[1784px]:right-[78%] max-aboutLg:right-[74%]">
            <img src="\img\placeholder_photo.png" alt="human illust" />
          </div>
        )}
      </section>
      <section
        id="myskills"
        className="w-full h-auto relative mt-20 font-nunitoSans max-homeSm:mt-60"
      >
        <MySkillsTitle />
        <div className="h-auto pt-72 pb-24 relative max-homeSm:pt-40">
          {windowWidth > 1360 && (
            <div>
              <Arrow section={"skill"} />
            </div>
          )}
          <div className="h-full px-32 flex gap-20 pt-28 max-skillLg:pt-20 max-homeSm:px-5">
            <div className="w-284 max-skillXlg:w-full">
              <div className="flex flex-col gap-3 leading-none mb-20 max-skillLg:mb-10 max-skillMd:items-center">
                <span className="font-semibold text-7xl max-skillLg:text-5xl max-skillMd:text-center">
                  IDEA, DESIGN, DEVELOP
                </span>
                <div className="max-skillMd:text-center">
                  <span className="uppercase font-medium text-3xl max-skillLg:text-2xl max-skillMd:text-center">
                    Modular, Interactive, Creative
                  </span>
                </div>
              </div>
              {windowWidth < 1360
                ? skillsData.map((skill) => (
                    <SkillItemMb key={skill.skillId} {...skill} />
                  ))
                : skillsData.map((skill) => (
                    <SkillItem key={skill.skillId} {...skill} />
                  ))}
            </div>
            {windowWidth > 1360 && (
              <div className="grow flex relative max-skillXlg:grow-0 max-skillXlg:flex-none max-skillXlg:w-108 max-[1440px]:w-80">
                <SkillsClipImage />
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="w-full h-auto bg-mainBlack px-32 py-24 text-white overflow-hidden max-projectMd:px-6 max-projectSm:py-14"
      >
        <ProjectsLayout />
      </section>
      <section
        id="experience"
        className="w-full h-auto px-32 pt-52 pb-20 max-projectMd:px-6 max-projectSm:pt-32 max-projectXsm:pt-14"
      >
        <Experience />
      </section>
      <section
        id="contact"
        className="w-full h-200 pb-20 max-aboutXlg:h-235 max-headerSm:h-200 max-projectXsm:h-168"
      >
        <div
          className={`w-full h-full perspective-2000 flex items-center justify-center relative`}
        >
          <FlipSlide />
        </div>
      </section>
    </div>
  );
};

export default Home;
