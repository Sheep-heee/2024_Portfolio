interface Props {
  area: string;
  color?: string;
}

const animationPick = (area: string): string => {
  switch (area) {
    case "header":
      return "animate-sphereY";
    case "home1":
      return "animate-sphereHome1";
    case "home2":
      return "animate-sphereHome2";
    case "home3":
      return "animate-sphereHome3";
    default:
      return "";
  }
};

const Sphere = ({ area, color }: Props) => {
  return (
    <div className="w-full h-full perspective-1000">
      <div
        className={`w-full h-full relative preserve-3d ${animationPick(area)}`}
      >
        {/* X Axis */}
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-0`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-25`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-50`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-75`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-100`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-125`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-x-150`}
        ></div>
        {/* Y Axis */}
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-0`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-25`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-50`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-75`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-100`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-125`}
        ></div>
        <div
          className={`circle ${color === "blue" ? "bg-blue" : " bg-bgGrey"} circleBorder rotate3d-y-150`}
        ></div>
        {/* Z Axis */}
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-0`}
        ></div>
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-25`}
        ></div>
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-50`}
        ></div>
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-75`}
        ></div>
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-100`}
        ></div>
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-125`}
        ></div>
        <div
          className={`circle ${color === "blue" ? " bg-blue" : "bg-bgGrey"} rotate3d-z-150`}
        ></div>
      </div>
    </div>
  );
};

export default Sphere;
