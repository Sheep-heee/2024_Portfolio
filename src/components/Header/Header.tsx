import { HashLink } from "react-router-hash-link";
import Sphere from "../../assets/Sphere";
import { mainMenuPC, MenuItem } from "../../utils/utils";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center font-nunitoSans">
      <Sphere />
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
      <button className="border border-mainBlack rounded-full py-1.5 px-5 transition hover:bg-mainBlack hover:text-white">
        CONTACT
      </button>
    </div>
  );
};

export default Header;
