import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollY } from "../../utils/interface";
import Sphere from "../../assets/Sphere";

const SkillsClipImage = ({ scrollY }: ScrollY) => {
  const [clipPath, setClipPath] = useState("inset(5% 0% 0% 0% round 24px)");
  const [translateY, setTranslateY] = useState("translateY(0)");
  const [sphereTranslateY, setSphereTranslateY] = useState("translateY(0)");

  const handleScroll = () => {
    if (scrollY >= 1800 && scrollY <= 3273) {
      const scrollPercent = ((scrollY - 1800) / (3273 - 1800)) * 100;

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
      setTranslateY(
        scrollPercent <= 50
          ? `translateY(${scrollPercent}%)`
          : "translateY(50%)"
      );
      setSphereTranslateY(
        scrollPercent * 5 <= 274
          ? `translateY(${scrollPercent * 5}%)`
          : "translateY(274%)"
      );
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
        />
      </div>
      <div
        className="w-32 h-32 absolute right-20"
        style={{
          transition: "transform 0.6s",
          transform: sphereTranslateY,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full circleBorder overflow-hidden bg-bgGrey"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sphere area={"home2"} />
        </motion.div>
      </div>
    </>
  );
};

export default SkillsClipImage;
