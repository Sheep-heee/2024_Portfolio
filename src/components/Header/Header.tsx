import { useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Sphere from "../../assets/Sphere";
import { mainMenuPC } from "../../utils/utils";
import { MenuItem } from "../../utils/interface";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean)[0];

  return (
    <div className="w-full flex justify-between items-center font-nunitoSans">
      <div
        className="w-12 h-12 rounded-full circleBorder overflow-hidden cursor-pointer"
        onClick={() => {
          pathSegments === "project"
            ? navigate("/home")
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
      <button className="border border-mainBlack bg-bgGrey rounded-full py-1.5 px-5 transition hover:bg-mainBlack hover:text-bgGrey">
        CONTACT
      </button>
    </div>
  );
};

export default Header;
