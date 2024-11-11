import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/reducers";
import { FilpActionType, updateFilp } from "../../redux/actions/cardOpenAction";
import ContactCard from "../Common/ContactCard";

const FlipSlide = () => {
  const scrollY = useSelector((state: RootState) => state.scrollY.scrollY);
  const filpOpen = useSelector((state: RootState) => state.filpOpen.filpOpen);
  const dispatch: Dispatch<FilpActionType> = useDispatch();
  const [groups, setGroups] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);
  const controls = useAnimationControls();
  const groupsRef = useRef(groups);

  useEffect(() => {
    groupsRef.current = groups;

    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: -252,
          transition: { duration: 6, ease: "linear" },
        });

        setGroups(() => {
          const updatedItems = [
            ...groupsRef.current.slice(1),
            groupsRef.current[0],
          ];
          groupsRef.current = updatedItems;
          controls.set({ x: 0 });
          return updatedItems;
        });
      }
    };
    loopAnimation();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY < 6399 && filpOpen === true) {
        dispatch(updateFilp(false));
      }
    };
    handleScroll();
  }, [scrollY]);

  return (
    <div
      className={`w-11/12 h-11/12 relative transition-transform duration-500 ${filpOpen ? "rotate-y-180" : "rotate-y-0"} relative preserve-3d`}
    >
      <div
        className="w-full h-full rounded-3xl p-4 border-3 border-grey bg-lightGrey cursor-pointer absolute backface-hidden"
        onClick={() => dispatch(updateFilp(true))}
      >
        <div className="w-full h-full rounded-2xl flex items-center border-3 border-blue overflow-hidden relative">
          <div className="w-fit h-fit flex font-nunitoSans relative">
            <motion.div className="flex items-center gap-12" animate={controls}>
              {groups.map((group) => (
                <div key={group} className="flex items-center gap-12">
                  <span className="font-bold text-blue text-5xl">CLICK!</span>
                  <span className="w-1.5 h-1.5 bg-blue rounded-full"></span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="w-48 h-12 absolute bg-lightGrey left-1/2 -translate-x-1/2"></div>
          <img
            className="object-cover absolute left-1/2 -translate-x-1/2"
            src="/img/pattern_blue_second.png"
            alt="contact pattern blue"
          />
        </div>
      </div>
      <div className="w-full h-full absolute rotate-y-180 backface-hidden">
        <ContactCard />
      </div>
    </div>
  );
};

export default FlipSlide;
