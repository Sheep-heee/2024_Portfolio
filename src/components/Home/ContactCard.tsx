import { GitHubIcon, NotionIcon } from "../../assets/icon/dev_icon/ToolsIcon";
import CoffeeIcon from "../../assets/icon/ui_icon/CoffeeIcon";
import EmailIcon from "../../assets/icon/ui_icon/EmailIcon";
import ShortArrow from "../../assets/icon/ui_icon/ShortArrow";
import SmartphoneIcon from "../../assets/icon/ui_icon/SmartphoneIcon";
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

  return (
    <div className="w-11/12 h-11/12 rounded-3xl bg-lightGrey p-24 absolute top-0 left-1/2 -translate-x-1/2">
      <div className="h-full flex gap-20 font-nunitoSans">
        <div className="grow h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="font-extrabold text-8xl mb-5">CONTACT</div>
            <div className="font-pretendard text-xl text-darkGrey mb-10">
              프로젝트 문의나 협업을 위해 언제든지 연락 주세요.
              <br />
              모든 메세지를 환영합니다!
            </div>
            <div className="w-fit flex gap-3 items-center pb-3 border-b-3 border-mainBlack">
              <div className="w-14 h-14 flex items-center">
                <EmailIcon fill={"mainBlack"} />
              </div>
              <div className="font-medium text-6xl">sheephi0609@gmail.com</div>
              <button
                className="px-4 py-2 bg-grey rounded-lg font-pretendard text-xl"
                onClick={emailCopy}
              >
                복사
              </button>
            </div>
            <div className="w-fit flex gap-3 items-center pt-5 pb-3 border-b-3 border-mainBlack">
              <div className="w-14 h-14 flex justify-center">
                <div className="w-8 h-full">
                  <SmartphoneIcon fill={"mainBlack"} />
                </div>
              </div>
              <div className="font-medium text-6xl">010-6429-9645</div>
            </div>
            <div></div>
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
              <div className="w-28 h-7 bg-[url('/img/coffeeBubble.svg')] bg-center bg-no-repeat font-medium pl-3.5 leading-7.5 opacity-0 transition-opacity duration-500 peer-hover:opacity-100">
                Coffee Chat!
              </div>
            </div>
          </div>
        </div>
        <div className="w-145 h-full rounded-2xl bg-grey flex flex-col">
          <div className="w-full grow rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="/img/contact2.png"
              alt="contact image2"
            />
          </div>
          <div className="flex justify-center items-center pt-8 pb-12">
            <div className="flex flex-col gap-3">
              <div className="font-medium text-darkGrey text-2xl">SNS</div>
              <div className="flex gap-5">
                <div
                  className="w-fit flex gap-1.5 items-center border-b-2 border-mainBlack pb-1 cursor-pointer"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/yangheee/")
                  }
                >
                  <div className="w-6 h-6">
                    <LinkedInIcon />
                  </div>
                  <span className="font-medium text-2xl leading-none">
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
                  <span className="font-medium text-2xl leading-none">
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
                  <span className="font-medium text-2xl leading-none">
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
