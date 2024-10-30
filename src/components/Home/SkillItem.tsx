import { useState } from "react";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import HTML5Icon from "../../assets/icon/dev_icon/HTML5Icon";

const SkillItem = () => {
  const [descOpen, setDescOpen] = useState(false);

  return (
    <div className="border-b border-grey">
      <div
        className="py-6 flex justify-between items-center cursor-pointer"
        onClick={() => setDescOpen(!descOpen)}
      >
        <div className="flex items-end">
          <div className="w-56 font-bold text-2xl leading-none">Publishing</div>
          <div className="flex gap-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-1 py-2 px-5 bg-white rounded-xl">
                <HTML5Icon />
                <span className="uppercase font-bold text-xl leading-none">
                  HTML5
                </span>
              </div>
              <div className="flex items-center gap-1 py-2 px-5 bg-white rounded-xl">
                <HTML5Icon />
                <span className="uppercase font-bold text-xl leading-none">
                  HTML5
                </span>
              </div>
              <div className="flex items-center gap-1 py-2 px-5 bg-white rounded-xl">
                <HTML5Icon />
                <span className="uppercase font-bold text-xl leading-none">
                  HTML5
                </span>
              </div>
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
        HTML, CSS를 사용하여 웹페이지를 구현한 뒤 Javascript로 동적인 사용자
        경험을 제공할 수 있습니다.
      </div>
    </div>
  );
};

export default SkillItem;
