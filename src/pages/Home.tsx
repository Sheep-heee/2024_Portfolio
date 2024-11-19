import { useEffect, useRef, useState } from "react";
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
import { skillsData } from "../utils/utils";
import ProjectsLayout from "../components/Projects/ProjectsLayout";
import Experience from "../components/Home/Experience";
import ContactSlide from "../components/Home/ContactSlide";
import FlipSlide from "../components/Home/FlipSlide";
import { RootState } from "../redux/reducers";

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const contactImageRef = useRef<HTMLDivElement>(null);
  const scrollY = useSelector((state: RootState) => state.scrollY.scrollY);

  const contactTop = -(
    (contactRef.current !== null && contactImageRef.current !== null
      ? contactRef.current.offsetHeight - contactImageRef.current.offsetHeight
      : 0) / 2
  );

  const [contactTopValue, setContactTopValue] = useState(contactTop);
  const [contactLeftValue, setContactLeftValue] = useState(-100);

  const handleScroll = () => {
    if (scrollY <= 4602) return;
    if (scrollY >= 5580) return;

    const ratio = (scrollY - 4602) / (5580 - 4602);
    setContactTopValue(contactTop + ratio * (0 - contactTop));
  };

  const handleScrollLeft = () => {
    if (scrollY <= 4602) return;

    const ratio = (scrollY - 4602) / (5580 - 4602);
    setContactLeftValue(scrollY < 5580 ? -100 + ratio * (0 - -100) : 0);
  };

  useEffect(() => {
    handleScroll();
    handleScrollLeft();
  }, [scrollY]);

  return (
    <div className="h-[7491px]">
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
        className="w-full h-auto relative max-[1595px]:h-[831px] max-[1390px]:h-[728px]"
      >
        <div className="w-400 h-235 max-[1595px]:w-352 max-[1390px]:w-308 max-homeMd:w-200 max-homeSm:hidden">
          <AboutClipImage />
        </div>
        <div className="hidden px-8 pb-8 w-full h-110 relative max-homeSm:block">
          <AboutClipImageSm />
        </div>
        <div className="w-400 h-120 absolute top-80 right-0 bg-mainBlack rounded-l-full flex items-center gap-20 max-[1725px]:w-380 max-[1613px]:w-11/12 max-[1595px]:top-48 max-[1390px]:top-40 max-[1360px]:w-full max-[1360px]:rounded-none max-[1360px]:justify-center max-homeSm:static">
          <div className="ml-56 font-pretendard flex flex-col gap-5 max-[1725px]:w-187.5 max-[1613px]:w-11/12 max-[1360px]:ml-0">
            <span className="text-white text-4xl font-semibold max-[1613px]:hidden">
              안녕하세요, 프론트엔드 개발자&nbsp;
              <span className="text-mainBlack font-extrabold bg-white py-1 px-3 rounded-md">
                양희진
              </span>
              &nbsp;입니다.
            </span>
            <span className="hidden text-white text-4xl font-semibold max-[1613px]:block max-[1360px]:text-center max-[1360px]:mb-2 max-[560px]:hidden">
              <div className="mb-2">안녕하세요,</div>
              <span>
                프론트엔드 개발자&nbsp;
                <span className="text-mainBlack font-extrabold bg-white py-1 px-3 rounded-md">
                  양희진
                </span>
                &nbsp;입니다.
              </span>
            </span>
            <span className="hidden text-white text-4xl font-semibold text-center mb-2 max-[560px]:block ">
              <div className="mb-2">안녕하세요,</div>
              <div className="mb-2">프론트엔드 개발자&nbsp;</div>
              <span className="text-mainBlack font-extrabold bg-white py-1 px-3 rounded-md max-[1360px]:py-0">
                양희진
              </span>
              &nbsp;입니다.
            </span>
            <span className="text-white text-xl font-light flex flex-col max-[1613px]:hidden">
              <span>
                쇼핑몰의 운영 디자이너로 일한 약 6년의 시간동안 시각적인
                요소에만 집중하였습니다.
              </span>
              <span>
                그러나 단순히 이미지로만 보이는 것보다는 더 인터랙티브한 사용자
                경험을 제공하고 싶은 욕심이 생겼습니다.
              </span>
              <span>그리하여 프론트엔드 개발자의 길을 걷기로 하였습니다.</span>
            </span>
            <span className="hidden text-white text-xl font-light max-[1613px]:block max-[1613px]:grow max-[1360px]:text-center">
              <span className="break-keep">
                쇼핑몰의 운영 디자이너로 일한 약 6년의 시간동안 시각적인
                요소에만 집중하였습니다. 그러나 단순히 이미지로만 보이는
                것보다는 더 인터랙티브한 사용자 경험을 제공하고 싶은 욕심이
                생겼습니다. 그리하여 프론트엔드 개발자의 길을 걷기로 하였습니다.
              </span>
            </span>
            <hr />
            <div className="flex gap-8 max-[1360px]:gap-0 max-[1360px]:justify-between max-[438px]:flex-col max-[438px]:items-center">
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
          <div className="w-80 h-96 bg-blue rounded-xl flex items-center justify-center text-white max-[1613px]:mr-28 max-[1613px]:flex-none max-[1360px]:hidden">
            Photo
          </div>
        </div>
        <div className="w-96 h-200 overflow-hidden absolute bottom-0 right-3/4 max-[1784px]:right-[78%] max-[1613px]:right-[74%] max-[1360px]:hidden">
          <img src="\img\placeholder_photo.png" alt="human illust" />
        </div>
      </section>
      <section
        id="myskills"
        className="w-full h-auto relative mt-20 font-nunitoSans max-homeSm:mt-60"
      >
        <MySkillsTitle />
        <div className="h-auto pt-72 pb-24 relative">
          <Arrow section={"skill"} />
          <div className="h-full px-32 flex gap-20 pt-28">
            <div className="w-284">
              <div className="flex flex-col gap-3 leading-none mb-20">
                <span className="font-semibold text-7xl">
                  IDEA, DESIGN, DEVELOP
                </span>
                <div>
                  <span className="uppercase font-medium text-3xl">
                    Modular, Interactive, Creative
                  </span>
                </div>
              </div>
              {skillsData.map((skill) => (
                <SkillItem key={skill.skillId} {...skill} />
              ))}
            </div>
            <div className="grow flex relative">
              <SkillsClipImage />
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="w-full h-screen bg-mainBlack px-32 py-24 text-white overflow-hidden"
      >
        <ProjectsLayout />
      </section>
      <section id="experience" className="w-full h-auto px-32 pt-52 pb-24">
        <Experience />
      </section>
      <section id="contact" className="w-full h-auto relative">
        <div
          ref={contactRef}
          className={`w-full h-screen flex items-center ${scrollY >= 5508 && 6712 >= scrollY && contactTopValue <= 0 && contactTopValue > contactTop ? "fixed top-0" : "relative top-0"} ${scrollY > 6712 && "fixed top-[1250px]"}`}
        >
          {scrollY >= 6200 ? (
            <div
              className={`w-full h-full absolute z-10 perspective-2000 flex items-center justify-center ${scrollY >= 6400 ? "opacity-100" : "opacity-0"}`}
            >
              <FlipSlide />
            </div>
          ) : null}
          <div
            ref={contactImageRef}
            className="w-fit h-fit relative"
            style={{ left: `${contactLeftValue}%` }}
          >
            <ContactSlide />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
