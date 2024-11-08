import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import ContactCard from "../Common/ContactCard";

const FlipSlide = () => {
  const [groups, setGroups] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);
  const [filpOpen, setFilpOpen] = useState(false);
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

  return (
    <div
      className={`w-full h-full relative transition-transform duration-500 ${filpOpen ? "rotate-y-180" : "rotate-y-0"} relative preserve-3d`}
      onClick={() => setFilpOpen((prev) => !prev)}
    >
      <div className="w-11/12 h-11/12 absolute backface-hidden">
        <ContactCard />
      </div>
      <div className="w-11/12 h-11/12 rounded-3xl p-4 border-3 border-grey bg-lightGrey cursor-pointer absolute backface-hidden">
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
    </div>
  );
};

export default FlipSlide;
