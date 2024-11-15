import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Sphere from "../../assets/Sphere";
import { mainMenuPC } from "../../utils/utils";
import { MenuItem } from "../../utils/interface";
import {
  ScrollYActionType,
  updateScrollY,
} from "../../redux/actions/scrollValueAction";
import { RootState } from "../../redux/reducers";

interface ModalOpenSet {
  modal: (value: boolean) => void;
  mobileMenu: (value: boolean) => void;
}

const Header = ({ modal, mobileMenu }: ModalOpenSet) => {
  const dispatch: Dispatch<ScrollYActionType> = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean)[0];
  const filpOpen = useSelector((state: RootState) => state.filpOpen.filpOpen);

  const handleScroll = () => {
    dispatch(updateScrollY(window.scrollY));
  };

  const windowWidth = () => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", windowWidth);
  }, []);

  return (
    <>
      <div
        className={`w-full h-fit flex justify-between items-center font-nunitoSans`}
      >
        <div
          className="hidden max-[675px]:block max-[675px]:cursor-pointer max-[675px]:relative"
          onClick={() => mobileMenu(true)}
        >
          MENU
        </div>
        <div
          className="w-12 h-12 rounded-full circleBorder overflow-hidden cursor-pointer max-[675px]:absolute max-[675px]:left-1/2 max-[675px]:-translate-x-1/2"
          onClick={() => {
            pathSegments === "project"
              ? navigate("/")
              : window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Sphere area={"header"} />
        </div>
        <nav className="max-[675px]:hidden">
          <ul className="flex gap-7">
            {mainMenuPC.map((item: MenuItem) => {
              return (
                <li key={item.id} className="group">
                  <HashLink smooth to={item.hashLink as string}>
                    {item.name}
                  </HashLink>
                  <div className="w-0 h-px bg-mainBlack transition-all group-hover:w-full"></div>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className={`border border-mainBlack bg-bgGrey rounded-full py-1.5 px-5 transition hover:bg-mainBlack hover:text-bgGrey ${filpOpen ? "invisible" : "visible"} max-[675px]:p-0 max-[675px]:border-none max-[675px]:hover:bg-bgGrey max-[675px]:hover:text-mainBlack`}
          onClick={() => {
            modal(true);
          }}
        >
          CONTACT
        </button>
      </div>
    </>
  );
};

export default Header;
