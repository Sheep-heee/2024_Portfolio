import { ProjectData } from "../../utils/interface";
import ToolItem from "../Common/ToolItem";
import { skillsData } from "../../utils/utils";
import { Stack } from "../../utils/interface";

const ProjectThum = ({ thumbnail, scale, toolId }: ProjectData) => {
  const stackList: Stack[] = [];

  (() => {
    skillsData.map((data) => {
      stackList.push(...data.stacks);
    });
  })();

  return (
    <div className="w-full h-full flex flex-col justify-between rounded-3xl overflow-hidden p-8 relative">
      <img
        className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0"
        src="/img/mockup.png"
        alt="project thumnail"
      />
      <div className="w-full flex justify-end">
        <span className="bg-mainBlack text-white z-10 font-nunitoSans py-1 px-5 rounded-full">
          {scale}
        </span>
      </div>
      <div className="w-fit flex gap-2 z-10 text-mainBlack text-nowrap">
        {toolId.map((item: number, index) => (
          <ToolItem
            key={index}
            toolId={stackList[item].toolId}
            toolsName={stackList[item].toolsName}
            iconCode={stackList[item].iconCode}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectThum;
