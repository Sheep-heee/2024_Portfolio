import Sphere from "../../assets/Sphere";

const Footer = () => {
  return (
    <div
      className={`w-full h-40 flex items-center bg-mainBlack px-32 text-white`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="w-16 h-16 rounded-full overflow-hidden bg-mainBlack circleBorderFooter">
            <Sphere area="footer" />
          </span>
          <span className="font-nunitoSans font-bold text-7xl uppercase">
            Heejin
          </span>
        </div>
        <span className="font-nunitoSans text-lg">
          Copyright 2024. Yang Heejin All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
