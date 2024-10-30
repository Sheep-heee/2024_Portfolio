import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const MySkillsTitle = () => {
  const [groups, setGroups] = useState<number[]>([0, 1, 2, 3]);
  const controls = useAnimationControls();
  const groupsRef = useRef(groups);

  useEffect(() => {
    groupsRef.current = groups;

    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: -1066,
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
  }, [controls]);

  return (
    <motion.div
      className="flex gap-14 items-center absolute top-0"
      animate={controls}
    >
      {groups.map((group) => (
        <div key={group} className="flex gap-14 items-center">
          <div className="font-bold text-title tracking-titleSpacing text-nowrap">
            MY SKILLS
          </div>
          <div className="w-8 h-8 bg-mainBlack rounded-full"></div>
        </div>
      ))}
    </motion.div>
  );
};

export default MySkillsTitle;
