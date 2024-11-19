import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RootState } from "../../redux/reducers";
import Overlay from "./Overlay";
import ContactCard from "./ContactCard";
import { mainMenuMO } from "../../utils/utils";
import SmallArrow from "../../assets/icon/ui_icon/SmallArrow";
import KakaoIcon from "../../assets/icon/ui_icon/KakaoIcon";
import CoffeeIcon from "../../assets/icon/ui_icon/CoffeeIcon";
import { GitHubIcon, NotionIcon } from "../../assets/icon/dev_icon/ToolsIcon";
import Sphere from "../../assets/Sphere";

const Layout = () => {
  const scrollY = useSelector((state: RootState) => state.scrollY.scrollY);
  const [isVisible, setIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (scrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = scrollY;
  }, [scrollY]);

  return (
    <>
      <header
        className={`w-full px-8 h-24 fixed transition-all duration-300 ${isVisible ? "top-0 opacity-100" : "-top-24 opacity-0"} z-20 flex items-center justify-center ${scrollY > 1134 && pathname === "/" ? "bg-bgGrey shadow-borderBottom" : scrollY < 1134 && pathname === "/" ? "" : "bg-bgGrey"} max-homeMd:bg-bgGrey max-homeMd:shadow-borderBottom`}
      >
        <Header modal={setModalOpen} mobileMenu={setSmallMenuOpen} />
      </header>
      <main className="z-10 h-auto">
        <Outlet />
      </main>
      <footer className="z-0">
        <Footer />
      </footer>
      {modalOpen && (
        <div
          className={`w-full h-full fixed top-0 left-0 z-30 transition-opacity duration-300 ${modalOpen ? "opacity-100" : "opacity-0"}`}
        >
          <Overlay modal={setModalOpen} />
          <div className="w-11/12 h-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ContactCard />
            <div className="w-full h-fit p-10 absolute top-0">
              <div className="w-full h-10 flex justify-end items-center">
                <div
                  className="w-10 h-full relative flex items-center justify-center cursor-pointer"
                  onClick={() => setModalOpen(false)}
                >
                  <span className="w-full h-0.5 bg-mainBlack rotate-45 absolute"></span>
                  <span className="w-full h-0.5 bg-mainBlack -rotate-45 absolute"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="w-14 h-14 fixed right-10 bottom-10 rounded-full bg-mainBlack flex justify-center items-center border-2 border-bgGrey cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="w-4 h-4 pt-0.5">
          <SmallArrow />
        </div>
      </div>
      <div
        className={`hidden w-full h-screen fixed top-0 transition-all duration-300 ${smallMenuOpen ? "left-0" : "-left-full"} z-50  font-nunitoSans bg-bgGrey max-[675px]:block`}
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

export default Layout;
