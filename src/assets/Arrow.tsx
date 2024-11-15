import { Section } from "../utils/interface";

const Arrow = ({ section }: Section) => {
  return (
    <div
      className={
        section === "main"
          ? "mainArrow max-[1669px]:mainArrow1669 max-[1221px]:mainArrow1221 max-[856px]:hidden"
          : "skillArrow"
      }
    >
      <div className="w-full h-full relative flex items-center">
        <span
          className={`absolute ${section === "main" ? "top-8.5 max-[1669px]:top-5.5 max-[1221px]:top-4" : "top-4"} w-4 h-0.75 rounded-sm bg-mainBlack -rotate-45 origin-left`}
        ></span>
        <span className="w-full h-0.75 bg-mainBlack rounded-sm"></span>
        <span
          className={`absolute ${section === "main" ? "top-8.5 max-[1669px]:top-5.5 max-[1221px]:top-4" : "top-4"} w-4 h-0.75 rounded-sm bg-mainBlack rotate-45 origin-left`}
        ></span>
      </div>
    </div>
  );
};

export default Arrow;
