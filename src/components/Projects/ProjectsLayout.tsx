import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { useSelector } from "react-redux";
import { projectTab } from "../../utils/utils";
import projectData from "../../utils/projectsData.json";
import { ProjectTab } from "../../utils/interface";
import { ProjectData } from "../../utils/interface";
import ProjectThum from "./ProjectThum";
import SmallArrow from "../../assets/icon/ui_icon/SmallArrow";
import { RootState } from "../../redux/reducers";

const ProjectsLayout = () => {
  const navigate = useNavigate();
  const [newTab, setNewTab] = useState(projectTab);
  const [newProjectData, setNewProjectData] = useState(projectData);
  const controls = useAnimationControls();

  const windowWidth = useSelector(
    (state: RootState) => state.windowWidth.windowWidth
  );

  const windowBeginWidth = () => {
    let width;
    if (window.innerWidth > 1902) {
      width = (document.documentElement.clientWidth - 256 - 96) / 3;
    } else if (window.innerWidth > 1620) {
      width = (document.documentElement.clientWidth - 256 - 80) / 3;
    } else if (window.innerWidth <= 1620 && window.innerWidth > 1200) {
      width = (document.documentElement.clientWidth - 256 - 40) / 2;
    } else if (window.innerWidth <= 1200 && window.innerWidth > 1000) {
      width = (document.documentElement.clientWidth - 48 - 40) / 2;
    } else {
      width = document.documentElement.clientWidth - 48;
    }
    return width;
  };

  const [projectItemWidth, setProjectItemWidth] = useState(
    windowBeginWidth() as number
  );

  const activeChange = (select: ProjectTab) => {
    const updatedTabs = projectTab.map((tab: ProjectTab) => {
      return { ...tab, active: tab.id === select.id };
    });
    setNewTab(updatedTabs);
    setNewProjectData(
      projectData.filter((data) =>
        updatedTabs[0].active
          ? data
          : updatedTabs.filter((item) => item.active)[0].name === data.category
      )
    );
  };

  const dataSlideFuc = async (num: number) => {
    let slideProject = newProjectData;
    if (slideProject.length < 4) return;

    let xWidth =
      windowWidth > 1902 ? projectItemWidth + 48 : projectItemWidth + 40;

    await controls.start({
      x: -xWidth * num,
      transition: { duration: 0.2 },
    });

    const updatedItems =
      num === 1
        ? [...slideProject.slice(1), slideProject[0]]
        : [
            slideProject[slideProject.length - 1],
            ...slideProject.slice(0, slideProject.length - 1),
          ];
    setNewProjectData(updatedItems);

    controls.set({ x: 0 });
  };

  useEffect(() => {
    if (windowWidth > 1902) {
      setProjectItemWidth(
        (windowWidth -
          256 -
          96 -
          (windowWidth - document.documentElement.clientWidth)) /
          3
      );
    } else if (windowWidth > 1620) {
      setProjectItemWidth(
        (windowWidth -
          256 -
          80 -
          (windowWidth - document.documentElement.clientWidth)) /
          3
      );
    } else if (windowWidth <= 1620 && windowWidth > 1200) {
      setProjectItemWidth(
        (windowWidth -
          256 -
          40 -
          (windowWidth - document.documentElement.clientWidth)) /
          2
      );
    } else if (windowWidth <= 1200 && windowWidth > 1000) {
      setProjectItemWidth(
        (windowWidth -
          48 -
          40 -
          (windowWidth - document.documentElement.clientWidth)) /
          2
      );
    } else {
      setProjectItemWidth(
        windowWidth - 48 - (windowWidth - document.documentElement.clientWidth)
      );
    }
  }, [windowWidth]);

  console.log(projectItemWidth);

  return (
    <>
      <div className="flex justify-between items-end font-nunitoSans mb-14 max-projectLg:flex-col max-projectLg:justify-center max-projectLg:items-center">
        <div className="text-9xl uppercase font-bold max-projectSm:text-7xl max-projectXsm:mb-2">
          Projects
        </div>
        <ul className="flex gap-5 max-projectSm:flex-wrap max-projectSm:justify-center max-projectSm:gap-2">
          {newTab.map((tab: ProjectTab) => {
            return (
              <li key={tab.id}>
                <button
                  className={`${tab.active && "bg-blue"} text-xl py-3 px-5 rounded-full transition-colors active:bg-blue max-projectSm:py-1 max-projectSm:px-3 max-projectSm:text-lg`}
                  onClick={() => activeChange(tab)}
                >
                  {tab.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full relative">
        <div className="w-full overflow-hidden">
          <motion.div
            animate={controls}
            className={`w-fit flex gap-12 ${newProjectData.length > 3 ? "relative" : ""} max-projectXlg:gap-10`}
            style={{
              left: `-${newProjectData.length > 3 && windowWidth > 1903 ? projectItemWidth + 48 : projectItemWidth + 40}px`,
            }}
          >
            {newProjectData.map((data: ProjectData) => (
              <div
                key={data.id}
                className="flex flex-col gap-8"
                style={{ width: `${projectItemWidth}px` }}
              >
                <div
                  className="w-full h-88 cursor-pointer"
                  onClick={() =>
                    navigate(`/project/${data.id.slice(7)}`, {
                      state: { fromHome: true },
                    })
                  }
                >
                  <ProjectThum
                    thumbnail={data.thumbnail_small}
                    scale={data.scale}
                    toolId={data.toolId}
                  />
                </div>
                <div className="flex flex-col gap-6 font-pretendard">
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-medium">{data.name}</span>
                    <span className="font-light">{data.date}</span>
                  </div>
                  <span className="font-light">{data.overview}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        {newProjectData.length > 3 ? (
          <div className="w-full h-10 flex justify-between">
            <div
              className="w-10 h-10 flex justify-center items-center bg-blue rounded-full -rotate-90 absolute top-[27%] left-5 cursor-pointer"
              onClick={() => dataSlideFuc(-1)}
            >
              <div className="w-4 h-4 pt-0.5">
                <SmallArrow />
              </div>
            </div>
            <div
              className="w-10 h-10 flex justify-center items-center bg-blue rounded-full rotate-90 absolute top-[27%] right-5 cursor-pointer"
              onClick={() => dataSlideFuc(1)}
            >
              <div className="w-4 h-4 pt-0.5">
                <SmallArrow />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProjectsLayout;
