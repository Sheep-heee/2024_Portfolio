import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { projectTab } from "../../utils/utils";
import projectData from "../../utils/projectsData.json";
import { ProjectTab } from "../../utils/interface";
import { ProjectData } from "../../utils/interface";
import ProjectThum from "./ProjectThum";
import SmallArrow from "../../assets/icon/ui_icon/SmallArrow";

const ProjectsLayout = () => {
  const [newTab, setNewTab] = useState(projectTab);
  const [newProjectData, setNewProjectData] = useState(projectData);
  const controls = useAnimationControls();
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
    const updatedItems =
      num === 1
        ? [...slideProject.slice(1), slideProject[0]]
        : [slideProject[slideProject.length - 1], ...slideProject.slice(-1)];
    setNewProjectData(updatedItems);
  };

  return (
    <>
      <div className="flex justify-between items-end font-nunitoSans mb-14">
        <div className="text-9xl uppercase font-bold">Projects</div>
        <ul className="flex gap-5">
          {newTab.map((tab: ProjectTab) => {
            return (
              <li key={tab.id}>
                <button
                  className={`${tab.active && "bg-blue"} text-xl py-3 px-5 rounded-full transition-colors active:bg-blue`}
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
          <div className="flex gap-12 w-fit">
            {newProjectData.map((data: ProjectData) => (
              <div key={data.id} className="flex flex-col gap-8 w-129">
                <div className="w-full h-88 cursor-pointer">
                  <ProjectThum
                    thumbnail={data.thumbnail}
                    scale={data.scale}
                    toolId={data.toolId}
                  />
                </div>
                <div className="flex flex-col gap-6 font-pretendard">
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-medium">{data.name}</span>
                    <span className="font-light">{data.date}</span>
                  </div>
                  <span className="font-light">{data.description}</span>
                </div>
              </div>
            ))}
          </div>
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
