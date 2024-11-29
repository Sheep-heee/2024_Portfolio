import ToolItem from "../Common/ToolItem";
import { skillsData } from "../../utils/utils";
import { Stack } from "../../utils/interface";

interface ProjectThumProps {
  thumbnail: string;
  scale: string;
  toolId: number[];
}

const ProjectThum = ({ thumbnail, scale, toolId }: ProjectThumProps) => {
  let stackList: Stack[] = [];

  (() => {
    skillsData.forEach((data) => {
      stackList.push(...data.stacks);
    });
  })();

  return (
    <div className="w-full h-full flex flex-col justify-between rounded-2xl overflow-hidden p-6 relative">
      <img
        className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 transition-transform duration-300 hover:scale-110 max-[768px]:hover:scale-100"
        src={thumbnail}
        alt="project thumnail"
      />
      <div className="w-full flex justify-end">
        <span className="bg-mainBlack text-white z-10 font-nunitoSans py-1 px-5 rounded-full">
          {scale}
        </span>
      </div>
      <div className="w-fit flex gap-2 items-center z-10 text-mainBlack text-nowrap flex-wrap">
        {toolId.slice(0, 2).map((item: number, index) =>
          index === toolId.slice(0, 2).length - 1 && toolId.length > 2 ? (
            <div className="flex gap-2" key={index}>
              <ToolItem
                toolId={stackList[item].toolId}
                toolsName={stackList[item].toolsName}
                iconCode={stackList[item].iconCode}
              />
              <div className="font-bold text-xl leading-none py-2 px-3 rounded-xl bg-white text-mainBlack max-[1600px]:py-0 max-[1600px]:px-3 max-[1600px]:rounded-md max-[1600px]:text-base">
                +{toolId.length - 2}
              </div>
            </div>
          ) : (
            <ToolItem
              key={index}
              toolId={stackList[item].toolId}
              toolsName={stackList[item].toolsName}
              iconCode={stackList[item].iconCode}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectThum;
