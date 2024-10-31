import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollY } from "../../utils/interface";
import Sphere from "../../assets/Sphere";

const SkillsClipImage = ({ scrollY }: ScrollY) => {
  const [clipPath, setClipPath] = useState("inset(5% 0% 0% 0% round 24px)");
  const [translateY, setTranslateY] = useState("translateY(0)");

  const handleScroll = () => {
    if (scrollY >= 1800 && scrollY <= 3290) {
      const scrollPercent = ((scrollY - 1800) / (3290 - 1800)) * 100;

      const topValue = (percent: number): number => {
        switch (true) {
          case 5 <= percent && percent <= 25:
            return percent;
          case percent > 25:
            return 25;
          case percent < 5:
            return 5;
          default:
            return 0;
        }
      };

      setClipPath(`inset(${topValue(scrollPercent)}% 0% 0% 0% round 24px)`);
      setTranslateY(`translateY(${scrollPercent}%)`);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [scrollY]);

  return (
    <>
      <div
        className="w-full h-4/6 overflow-hidden bg-warmGrey relative"
        style={{
          transition: "clip-path 0.6s ease, transform 0.3s",
          clipPath: clipPath,
          transform: translateY,
        }}
      >
        <img
          src="/img/graphic02.png"
          alt="graphic image"
          className="absolute top-52 -right-16 scale-125"
          style={{
            transition: "transform 0.3s",
            transform: "translateY(((scrollY - 1800) / (3290 - 1800)) * 100)",
          }}
        />
      </div>
      <motion.div
        className="w-32 h-32 absolute right-20 rounded-full circleBorder overflow-hidden bg-bgGrey"
        animate={{
          y: [0, -180, -200, -200, 50, 0],
          rotate: [0, 0, 360, 360, 0, 0],
        }}
        transition={{
          times: [0, 2, 2, 1, 5, 10],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <Sphere area={"home2"} />
      </motion.div>
    </>
  );
};

export default SkillsClipImage;
