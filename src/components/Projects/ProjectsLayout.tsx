import { useState } from "react";
import { projectTab } from "../../utils/utils";
import projectData from "../../utils/projectsData.json";
import { ProjectTab } from "../../utils/interface";
import { ProjectData } from "../../utils/interface";
import ProjectThum from "./ProjectThum";

const ProjectsLayout = () => {
  const [newTab, setNewTab] = useState(projectTab);
  const activeChange = (select: ProjectTab) => {
    const updatedTabs = projectTab.map((tab: ProjectTab) => {
      return { ...tab, active: tab.id === select.id };
    });
    setNewTab(updatedTabs);
  };

  const newProjectData = projectData.filter((data) =>
    newTab[0].active
      ? data
      : newTab.filter((item) => item.active)[0].name === data.category
  );

  return (
    <>
      <div className="flex justify-between items-end font-nunitoSans mb-14">
        <div className="text-9xl uppercase font-bold">Projects</div>
        <ul className="flex gap-5">
          {newTab.map((tab: ProjectTab) => {
            return (
              <li key={tab.id}>
                <button
                  className={`${tab.active && "bg-blue"} text-xl py-3 px-5 rounded-full active:bg-blue`}
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
                  <ProjectThum {...data} />
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
          <div className="projectSlideArrow h-16 flex justify-between border absolute top-1/4 -left-5">
            <span className="w-16 h-full bg-mainBlack rounded-full"></span>
            <span className="w-16 h-full bg-mainBlack rounded-full"></span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProjectsLayout;
