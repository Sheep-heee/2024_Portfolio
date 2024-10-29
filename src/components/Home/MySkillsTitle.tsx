import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const MySkillsTitle = () => {
  const [groups, setGroups] = useState([0, 1, 2, 3]);
  const controls = useAnimationControls();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: -1920,
          transition: { duration: 15, repeat: Infinity, ease: "linear" },
        });
        setGroups((prev) => {
          const updatedGroups = [...prev.slice(1), prev[0]];
          controls.set({
            x: 0,
            transition: { duration: 15, repeat: Infinity, ease: "linear" },
          });
          return updatedGroups;
        });
      }
    };
    loopAnimation();
  }, [controls]);

  return (
    <motion.div
      className="flex gap-14 items-center absolute top-0"
      animate={controls}
    >
      {groups.map((group) => (
        <div key={group} className="flex gap-14 items-center">
          <div className="font-nunitoSans font-bold text-title tracking-titleSpacing text-nowrap">
            MY SKILLS
          </div>
          <div className="w-8 h-8 bg-mainBlack rounded-full"></div>
        </div>
      ))}
    </motion.div>
  );
};

export default MySkillsTitle;
