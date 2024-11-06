import { useEffect, useRef, useState } from "react";
import ToolItem from "../Common/ToolItem";
import { skillsData } from "../../utils/utils";
import { Stack } from "../../utils/interface";

interface ProjectThumProps {
  thumbnail: string;
  scale: string;
  toolId: number[];
}

const ProjectThum = ({ thumbnail, scale, toolId }: ProjectThumProps) => {
  const [toolsWidth, setToolsWidth] = useState(0);
  const toolsArea = useRef<HTMLDivElement>(null);
  const stackList: Stack[] = [];

  (() => {
    skillsData.map((data) => {
      stackList.push(...data.stacks);
    });
  })();

  useEffect(() => {
    setToolsWidth(
      toolsArea.current !== null ? toolsArea.current.clientWidth : 0
    );
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between rounded-2xl overflow-hidden p-6 relative">
      <img
        className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 transition-transform duration-300 hover:scale-110"
        src={thumbnail}
        alt="project thumnail"
      />
      <div className="w-full flex justify-end">
        <span className="bg-mainBlack text-white z-10 font-nunitoSans py-1 px-5 rounded-full">
          {scale}
        </span>
      </div>
      <div
        ref={toolsArea}
        className="w-fit flex gap-2 items-center z-10 text-mainBlack text-nowrap"
      >
        {toolId
          .slice(0, toolsWidth > 468 ? 1 : 2)
          .map((item: number, index) => (
            <ToolItem
              key={index}
              toolId={stackList[item].toolId}
              toolsName={stackList[item].toolsName}
              iconCode={stackList[item].iconCode}
            />
          ))}
        {toolId.length > 2 ? (
          <div className="font-bold text-xl leading-none py-2 px-3 bg-white rounded-xl text-darkGrey">
            +
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectThum;
