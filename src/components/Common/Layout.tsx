import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RootState } from "../../redux/reducers";
import Overlay from "./Overlay";
import ContactCard from "./ContactCard";
import SmallArrow from "../../assets/icon/ui_icon/SmallArrow";

const Layout = () => {
  const scrollY = useSelector((state: RootState) => state.scrollY.scrollY);
  const [isVisible, setIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
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
        className={`w-full px-8 h-24 fixed transition-all duration-300 ${isVisible ? "top-0 opacity-100" : "-top-24 opacity-0"} z-20 flex items-center justify-center ${scrollY > 1134 && pathname === "/" ? "bg-bgGrey shadow-borderBottom" : scrollY < 1134 && pathname === "/" ? "" : "bg-bgGrey"}`}
      >
        <Header modal={setModalOpen} />
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
    </>
  );
};

export default Layout;
