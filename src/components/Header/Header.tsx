import { Link } from "react-router-dom";
import Sphere from "../../assets/Sphere";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center font-nunitoSans">
      <Sphere />
      <nav>
        <ul className="flex gap-7">
          <li>
            <Link to="#">ABOUT ME</Link>
          </li>
          <li>
            <Link to="#">SKILLS</Link>
          </li>
          <li>
            <Link to="#">PROJECTS</Link>
          </li>
          <li>
            <Link to="#">EXPERIENCES</Link>
          </li>
        </ul>
      </nav>
      <button className="border border-mainBlack rounded-full py-1.5 px-5 transition hover:bg-mainBlack hover:text-white">
        CONTACT
      </button>
    </div>
  );
};

export default Header;
