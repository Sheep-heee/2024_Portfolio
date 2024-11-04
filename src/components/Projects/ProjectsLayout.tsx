import { useEffect, useState } from "react";
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
      <div className="flex gap-12 w-fit">
        {projectData.map((data: ProjectData) => (
          <div key={data.id} className="flex flex-col gap-8 w-128">
            <div className="w-full h-80 cursor-pointer">
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
    </>
  );
};

export default ProjectsLayout;
