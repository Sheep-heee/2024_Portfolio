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
}

const Header = ({ modal }: ModalOpenSet) => {
  const dispatch: Dispatch<ScrollYActionType> = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean)[0];
  const filpOpen = useSelector((state: RootState) => state.filpOpen.filpOpen);

  const handleScroll = () => {
    dispatch(updateScrollY(window.scrollY));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full h-fit flex justify-between items-center font-nunitoSans`}
      >
        <div
          className="w-12 h-12 rounded-full circleBorder overflow-hidden cursor-pointer"
          onClick={() => {
            pathSegments === "project"
              ? navigate("/")
              : window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Sphere area={"header"} />
        </div>
        <nav>
          <ul className="flex gap-7">
            {mainMenuPC.map((item: MenuItem) => {
              return (
                <li key={item.id} className="group">
                  <HashLink smooth to={item.hashLink}>
                    {item.name}
                  </HashLink>
                  <div className="w-0 h-px bg-mainBlack transition-all group-hover:w-full"></div>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className={`border border-mainBlack bg-bgGrey rounded-full py-1.5 px-5 transition hover:bg-mainBlack hover:text-bgGrey ${filpOpen ? "invisible" : "visible"}`}
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
