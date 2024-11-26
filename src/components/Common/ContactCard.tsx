import { GitHubIcon, NotionIcon } from "../../assets/icon/dev_icon/ToolsIcon";
import CoffeeIcon from "../../assets/icon/ui_icon/CoffeeIcon";
import EmailIcon from "../../assets/icon/ui_icon/EmailIcon";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import KakaoIcon from "../../assets/icon/ui_icon/KakaoIcon";
import {
  LinkedInIcon,
  TwitterXIcon,
  ThreadsIcon,
} from "../../assets/icon/ui_icon/SnsIcon";

const ContactCard = () => {
  const emailCopy = async () => {
    try {
      await navigator.clipboard.writeText("sheephi0609@gmail.com");
      alert("이메일이 복사되었습니다!");
    } catch (err) {
      alert(err);
    }
  };

  const kakaoCopy = async () => {
    try {
      await navigator.clipboard.writeText("senna123");
      alert("카카오톡ID가 복사되었습니다!");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-full h-full rounded-3xl bg-lightGrey p-24 max-aboutXlg:p-10">
      <div className="h-full flex gap-20 font-nunitoSans max-aboutXlg:flex-col max-aboutXlg:gap-5 max-aboutXlg:items-center max-aboutXlg:text-center">
        <div className="h-full flex flex-col justify-between max-aboutXlg:items-center max-aboutXlg:justify-start max-aboutXlg:gap-10">
          <div className="flex flex-col max-aboutXlg:items-center max-projectXsm:">
            <div className="font-extrabold text-8xl mb-5 max-projectXsm:text-4xl max-projectXsm:mb-1">
              CONTACT
            </div>
            <div className="font-pretendard text-xl text-darkGrey mb-10 max-projectXsm:text-sm max-projectXsm:mb-4">
              프로젝트 문의나 협업을 위해 언제든지 연락 주세요.
              <br />
              모든 메세지를 환영합니다!
            </div>
            <div className="w-fit flex gap-3 items-center pb-3 border-b-3 border-mainBlack max-experienceImgHidden:pb-0 max-projectXsm:border-none">
              <div className="w-14 h-14 flex items-center max-experienceImgHidden:w-6 max-experienceImgHidden:h-6 max-projectXsm:hidden">
                <EmailIcon fill={"mainBlack"} />
              </div>
              <div className="font-medium text-6xl max-experienceImgHidden:text-3xl max-projectXsm:text-xl max-projectXsm:font-bold">
                sheephi0609@gmail.com
              </div>
              <button
                className="px-4 py-2 bg-grey rounded-lg font-pretendard text-xl whitespace-nowrap max-experienceImgHidden:text-sm max-experienceImgHidden:px-2 max-experienceImgHidden:py-1 max-projectXsm:hidden"
                onClick={emailCopy}
              >
                복사
              </button>
            </div>
            <div className="w-fit flex gap-3 items-center pt-5 pb-3 border-b-3 border-mainBlack max-experienceImgHidden:pb-0 max-projectXsm:pt-2 max-projectXsm:border-none ">
              <div className="w-14 h-14 flex justify-center max-experienceImgHidden:w-6 max-experienceImgHidden:h-6 max-projectXsm:hidden">
                <KakaoIcon />
              </div>
              <div className="font-medium text-6xl max-experienceImgHidden:text-3xl max-projectXsm:text-xl max-projectXsm:font-bold">
                senna123
              </div>
              <button
                className="px-4 py-2 bg-grey rounded-lg font-pretendard text-xl whitespace-nowrap max-experienceImgHidden:text-sm max-experienceImgHidden:px-2 max-experienceImgHidden:py-1 max-projectXsm:hidden"
                onClick={kakaoCopy}
              >
                복사
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <div
              className="w-10 h-10 cursor-pointer"
              onClick={() => window.open("https://github.com/Sheep-heee")}
            >
              <GitHubIcon />
            </div>
            <div
              className="w-10 h-10 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://heejinn.notion.site/Project-Log-1233b2fcbef6805b83e8f8a5d9ac18aa?pvs=4"
                )
              }
            >
              <NotionIcon />
            </div>
            <div className="w-fit h-10 flex gap-2 items-center">
              <div
                className="w-10 h-full cursor-pointer peer"
                onClick={() =>
                  window.open(
                    "https://heejinn.notion.site/12a3b2fcbef68009a355f73f652e3fa8?pvs=105"
                  )
                }
              >
                <CoffeeIcon />
              </div>
              <div className="w-28 h-7 bg-[url('/img/coffeeBubble.svg')] bg-center bg-no-repeat font-medium pl-3.5 leading-7.5 opacity-0 transition-opacity duration-500 peer-hover:opacity-100 max-aboutXlg:opacity-100 max-aboutXlg:pl-2">
                Coffee Chat!
              </div>
            </div>
          </div>
        </div>
        <div className="w-145 h-full rounded-2xl bg-grey flex flex-col overflow-hidden max-aboutXlg:w-full max-aboutXlg:flex-row-reverse">
          <div className="w-full grow rounded-2xl overflow-hidden max-aboutXlg:h-full max-aboutXlg:grow-0 max-aboutXlg:rounded-none">
            <img
              className="w-full h-full object-cover object-center"
              src="/img/contact2.png"
              alt="contact image2"
            />
          </div>
          <div className="flex justify-center items-center pt-8 pb-12 max-aboutXlg:pt-8 max-aboutXlg:pb-8 max-aboutXlg:w-4/6 max-aboutXlg:px-6">
            <div className="flex flex-col gap-3">
              <div className="font-medium text-darkGrey text-2xl">SNS</div>
              <div className="flex gap-5 max-aboutXlg:flex-col max-aboutXlg:whitespace-nowrap">
                <div
                  className="w-fit flex gap-1.5 items-center border-b-2 border-mainBlack pb-1 cursor-pointer"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/yangheee/")
                  }
                >
                  <div className="w-6 h-6">
                    <LinkedInIcon />
                  </div>
                  <span className="font-medium text-xl leading-none">
                    LinkedIn
                  </span>
                  <div className="w-6 h-6">
                    <div className="w-full h-full rotate-135">
                      <ShortArrow />
                    </div>
                  </div>
                </div>
                <div
                  className="w-fit flex gap-1.5 items-center border-b-2 border-mainBlack pb-1 cursor-pointer"
                  onClick={() => window.open("https://x.com/massok_doldol")}
                >
                  <div className="w-6 h-6">
                    <TwitterXIcon />
                  </div>
                  <span className="font-medium text-xl leading-none">
                    X (Twitter)
                  </span>
                  <div className="w-6 h-6">
                    <div className="w-full h-full rotate-135">
                      <ShortArrow />
                    </div>
                  </div>
                </div>
                <div
                  className="w-fit flex gap-1.5 items-center border-b-2 border-mainBlack pb-1 cursor-pointer"
                  onClick={() =>
                    window.open("https://www.threads.net/@sheep_heeee")
                  }
                >
                  <div className="w-6 h-6">
                    <ThreadsIcon />
                  </div>
                  <span className="font-medium text-xl leading-none">
                    Threads
                  </span>
                  <div className="w-6 h-6">
                    <div className="w-full h-full rotate-135">
                      <ShortArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
