import { GitHubIcon, NotionIcon } from "../../assets/icon/dev_icon/ToolsIcon";
import CoffeeIcon from "../../assets/icon/ui_icon/CoffeeIcon";
import EmailIcon from "../../assets/icon/ui_icon/EmailIcon";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import SmartphoneIcon from "../../assets/icon/ui_icon/SmartphoneIcon";

const ContactCard = () => {
  return (
    <div className="w-11/12 h-11/12 rounded-3xl bg-lightGrey p-24 absolute top-0 left-1/2 -translate-x-1/2">
      <div className="h-full flex gap-20 font-nunitoSans">
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="font-extrabold text-8xl mb-5">CONTACT</div>
            <div className="font-pretendard text-xl text-darkGrey mb-10">
              프로젝트 문의나 협업을 위해 언제든지 연락 주세요.
              <br />
              모든 메세지를 환영합니다!
            </div>
            <div className="flex gap-3 items-center pb-3 border-b-3 border-mainBlack">
              <div className="w-14 h-14 flex items-center">
                <EmailIcon fill={"mainBlack"} />
              </div>
              <div className="font-medium text-6xl">sheephi0609@gmail.com</div>
              <div className="w-14 h-14">
                <div className="w-full h-full rotate-135">
                  <ShortArrow />
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center pb-3 border-b-3 border-mainBlack">
              <div className="w-14 h-14 flex justify-center">
                <div className="w-8 h-full">
                  <SmartphoneIcon fill={"mainBlack"} />
                </div>
              </div>
              <div className="font-medium text-6xl">010-6429-9645</div>
              <div className="w-14 h-14">
                <div className="w-full h-full rotate-135">
                  <ShortArrow />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10">
              <GitHubIcon />
            </div>
            <div className="w-10 h-10">
              <NotionIcon />
            </div>
            <div className="w-10 h-10">
              <CoffeeIcon />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactCard;
