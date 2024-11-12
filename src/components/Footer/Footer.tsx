import Sphere from "../../assets/Sphere";

const Footer = () => {
  return (
    <div className="h-80 bg-mainBlack px-32 text-white pt-44">
      <div className="flex items-center justify-between">
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
