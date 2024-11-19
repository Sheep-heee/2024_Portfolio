import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const MySkillsTitle = () => {
  const [groups, setGroups] = useState<number[]>([0, 1, 2, 3]);
  const controls = useAnimationControls();
  const groupsRef = useRef(groups);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    groupsRef.current = groups;

    const itemWidth = itemRef.current !== null && itemRef.current.clientWidth;

    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: -itemWidth,
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
    <motion.div className="flex items-center absolute top-0" animate={controls}>
      {groups.map((group) => (
        <div
          ref={itemRef}
          key={group}
          className="flex gap-14 pr-14 items-center max-homeSm:gap-8 max-homeSm:pr-8"
        >
          <div className="font-bold text-title tracking-titleSpacing text-nowrap max-homeSm:text-9xl">
            MY SKILLS
          </div>
          <div className="w-8 h-8 bg-mainBlack rounded-full max-homeSm:w-4 max-homeSm:h-4"></div>
        </div>
      ))}
    </motion.div>
  );
};

export default MySkillsTitle;
