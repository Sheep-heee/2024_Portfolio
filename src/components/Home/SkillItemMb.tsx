import { useState } from "react";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import ToolItem from "../Common/ToolItem";
import { SkillsData } from "../../utils/interface";

const SkillItem = ({ skillName, description, stacks }: SkillsData) => {
  const [descOpen, setDescOpen] = useState(false);

  return (
    <div className="border-b border-grey">
      <div
        className="py-6 flex flex-col gap-2 cursor-pointer"
        onClick={() => setDescOpen(!descOpen)}
      >
        <div className="w-full flex justify-between">
          <div className="w-56 font-bold text-2xl leading-none">
            {skillName}
          </div>
          <div
            className={`w-8 h-8 ${descOpen ? "-rotate-90" : "rotate-0"} transition-transform`}
          >
            <ShortArrow />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap text-nowrap">
          {stacks.map((stack) => (
            <ToolItem key={stack.toolId} {...stack} />
          ))}
        </div>
      </div>
      <div
        className={`${descOpen ? "h-auto" : "h-0"} font-pretendard ${descOpen ? "pb-6" : "pb-0"} overflow-hidden transition-all`}
      >
        {description}
      </div>
    </div>
  );
};

export default SkillItem;
