import { useState } from "react";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import ToolItem from "../Common/ToolItem";
import { Stack, SkillsData, Divide } from "../../utils/interface";

const SkillItem = ({ skillId, skillName, description, stacks }: SkillsData) => {
  const [descOpen, setDescOpen] = useState(false);
  const divideStacks = ((stacks: Stack[]): Divide[] => {
    const rowDivide: Divide[] = [];
    if (skillId !== 4) {
      const rows = Math.ceil(stacks.length / 3);

      for (let i = 0; i < rows; i++) {
        const start = i * 3;
        const end = start + 3;
        rowDivide.push({ [i]: stacks.slice(start, end) });
      }
    }
    return rowDivide;
  })(stacks);

  return (
    <div className="border-b border-grey">
      <div
        className="py-6 flex justify-between items-center cursor-pointer"
        onClick={() => setDescOpen(!descOpen)}
      >
        <div className="flex items-end">
          <div className="w-56 font-bold text-2xl leading-none">
            {skillName}
          </div>
          <div className="flex gap-3">
            <div
              className={`flex ${skillId === 4 ? "gap-4" : "flex-col gap-3"}`}
            >
              {skillId === 4
                ? stacks.map((stack) => (
                    <ToolItem
                      key={stack.toolId}
                      toolsName={stack.toolsName}
                      iconCode={stack.iconCode}
                    />
                  ))
                : divideStacks.map((row, idx) => (
                    <div key={idx} className="flex gap-4">
                      {row[idx].map((item) => (
                        <ToolItem
                          key={item.toolId}
                          toolsName={item.toolsName}
                          iconCode={item.iconCode}
                        />
                      ))}
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div
          className={`${descOpen ? "-rotate-90" : "rotate-0"} transition-transform`}
        >
          <ShortArrow />
        </div>
      </div>
      <div
        className={`${descOpen ? "h-auto" : "h-0"} ml-56 font-pretendard ${descOpen ? "pb-6" : "pb-0"} overflow-hidden transition-all`}
      >
        {description}
      </div>
    </div>
  );
};

export default SkillItem;
