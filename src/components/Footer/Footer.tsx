import Sphere from "../../assets/Sphere";

const Footer = () => {
  return (
    <div
      className={`w-full h-40 flex items-center bg-mainBlack px-32 text-white max-homeSm:pl-10 max-homeSm:pr-28 max-projectXsm:h-20 max-aboutXsm:pr-16`}
    >
      <div className="w-full flex items-center justify-between max-experienceImgHidden:justify-start max-experienceImgHidden:gap-5">
        <div className="flex items-center gap-5 max-projectSm:gap-2">
          <span className="w-16 h-16 rounded-full overflow-hidden bg-mainBlack circleBorderFooter max-projectSm:w-10 max-projectSm:h-10 max-projectXsm:w-5 max-projectXsm:h-5">
            <Sphere area="footer" />
          </span>
          <span className="font-nunitoSans font-bold text-7xl uppercase max-projectSm:text-5xl max-projectXsm:text-2xl">
            Heejin
          </span>
        </div>
        <span className="font-nunitoSans text-lg max-projectSm:text-sm">
          Copyright 2024. Yang Heejin All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
