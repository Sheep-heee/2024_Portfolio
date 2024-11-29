import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Sphere from "../../assets/Sphere";
import KakaoIcon from "../../assets/icon/ui_icon/KakaoIcon";
import CoffeeIcon from "../../assets/icon/ui_icon/CoffeeIcon";
import { GitHubIcon, NotionIcon } from "../../assets/icon/dev_icon/ToolsIcon";
import { mainMenuPC } from "../../utils/utils";
import { mainMenuMO } from "../../utils/utils";
import { MenuItem } from "../../utils/interface";
import {
  ScrollYActionType,
  updateScrollY,
} from "../../redux/actions/scrollValueAction";
import {
  WindowWidthActionType,
  updateWindowWidth,
} from "../../redux/actions/windowSizeAction";
import { RootState } from "../../redux/reducers";

interface ModalOpenSet {
  modal: (value: boolean) => void;
  menuClick: (value: boolean) => void;
}

const Header = ({ modal, menuClick }: ModalOpenSet) => {
  const dispatchScroll: Dispatch<ScrollYActionType> = useDispatch();
  const dispatchWindowWidth: Dispatch<WindowWidthActionType> = useDispatch();
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean)[0];
  const filpOpen = useSelector((state: RootState) => state.filpOpen.filpOpen);

  const handleScroll = () => {
    dispatchScroll(updateScrollY(window.scrollY));
  };

  const windowWidth = () => {
    dispatchWindowWidth(
      updateWindowWidth(document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    windowWidth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", windowWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", windowWidth);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-fit flex justify-between items-center font-nunitoSans`}
      >
        <div
          className="hidden max-headerSm:block max-headerSm:cursor-pointer max-headerSm:relative"
          onClick={() => setSmallMenuOpen(true)}
        >
          MENU
        </div>
        <div
          className="w-12 h-12 rounded-full circleBorder overflow-hidden cursor-pointer max-headerSm:absolute max-headerSm:left-1/2 max-headerSm:-translate-x-1/2"
          onClick={() => {
            pathSegments === "project"
              ? navigate("/")
              : window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Sphere area={"header"} />
        </div>
        <nav className="max-headerSm:hidden">
          <ul className="flex gap-7">
            {mainMenuPC.map((item: MenuItem) => {
              return (
                <li key={item.id} className="group">
                  <HashLink
                    smooth
                    to={item.hashLink as string}
                    onClick={() => {
                      window.removeEventListener("scroll", handleScroll);
                      menuClick(true);
                      setTimeout(() => {
                        menuClick(false);
                        window.addEventListener("scroll", handleScroll);
                      }, 1000);
                    }}
                  >
                    {item.name}
                  </HashLink>
                  <div className="w-0 h-px bg-mainBlack transition-all group-hover:w-full"></div>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className={`border border-mainBlack bg-bgGrey rounded-full py-1.5 px-5 transition hover:bg-mainBlack hover:text-bgGrey ${filpOpen ? "invisible" : "visible"} max-headerSm:p-0 max-headerSm:border-none max-headerSm:hover:bg-bgGrey max-headerSm:hover:text-mainBlack`}
          onClick={() => {
            modal(true);
          }}
        >
          CONTACT
        </button>
      </div>
      <div
        className={`hidden w-full h-screen fixed top-0 transition-all duration-300 ${smallMenuOpen ? "left-0" : "-left-full"} z-50  font-nunitoSans bg-bgGrey max-headerSm:block`}
      >
        <div className="h-24 px-6 flex items-center">
          <div className="w-full h-fit flex justify-between items-center">
            <div className="w-12 h-12 rounded-full circleBorder overflow-hidden">
              <Sphere area={"header"} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setSmallMenuOpen(false)}
            >
              CLOSE
            </div>
          </div>
        </div>
        <div className="w-full mobileMenuHeight flex justify-center items-center">
          <div className="flex justify-center items-center relative pb-2">
            <div className="flex flex-col gap-8 items-center">
              <div className="flex flex-col gap-6">
                {mainMenuMO.map((menu) => (
                  <div
                    key={menu.id}
                    className="text-5xl font-bold text-center cursor-pointer"
                    onClick={() => {
                      pathSegments === "" ? null : navigate("/");
                      menuClick(true);
                      window.removeEventListener("scroll", handleScroll);
                      window.scrollTo({
                        top: menu.scrollTo,
                        behavior: "smooth",
                      });
                      setSmallMenuOpen(false);
                      setTimeout(() => {
                        menuClick(false);
                        window.addEventListener("scroll", handleScroll);
                      }, 1000);
                    }}
                  >
                    {menu.name}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 text-xl items-center">
                <span>sheephi0609@gmail.com</span>
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5">
                    <KakaoIcon />
                  </span>
                  <span>senna123</span>
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
                <div
                  className="w-10 h-10 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://heejinn.notion.site/12a3b2fcbef68009a355f73f652e3fa8?pvs=105"
                    )
                  }
                >
                  <CoffeeIcon />
                </div>
              </div>
              <img
                className="absolute top-full"
                src="/img/mobileCoffeeChat.png"
                alt="coffee chat bubble"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
