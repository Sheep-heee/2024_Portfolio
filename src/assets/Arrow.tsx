import { Section } from "../utils/interface";

const Arrow = ({ section }: Section) => {
  return (
    <div className={section === "main" ? "mainArrow" : "skillArrow"}>
      <div className="w-full h-full relative flex items-center">
        <span
          className={`absolute ${section === "main" ? "top-8.5" : "top-4"} w-4 h-0.75 rounded-sm bg-mainBlack -rotate-45 origin-left`}
        ></span>
        <span className="w-full h-0.75 bg-mainBlack rounded-sm"></span>
        <span
          className={`absolute ${section === "main" ? "top-8.5" : "top-4"} w-4 h-0.75 rounded-sm bg-mainBlack rotate-45 origin-left`}
        ></span>
      </div>
    </div>
  );
};

export default Arrow;
