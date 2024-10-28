import { useState, useEffect } from "react";
import { scrollY } from "../../utils/utils";

const AboutClipImage = ({ scrollY }: scrollY) => {
  const [clipPath, setClipPath] = useState(
    "inset(0% 0% 70% 0% round 0% 50% 50% 0%)"
  );

  const handleScroll = () => {
    if (scrollY >= 440 && scrollY <= 1760) {
      const scrollPercent = ((scrollY - 440) / (1760 - 440)) * 100;

      const topValue = (percent: number): number => {
        switch (true) {
          case 0 <= percent && percent <= 29:
            return percent;
          case percent > 29:
            return 29;
          case percent < 0:
            return 0;
          default:
            return 0;
        }
      };

      const bottomValue = (percent: number): number => {
        switch (true) {
          case percent >= 41:
            return percent;
          case percent < 41:
            return 41;
          default:
            return 0;
        }
      };

      setClipPath(
        `inset(${topValue(scrollPercent)}% 0% ${bottomValue(70 - scrollPercent)}% 0% round 0% 50% 50% 0%)`
      );
    }
  };

  useEffect(() => {
    handleScroll();
  }, [scrollY]);

  return (
    <div
      className="w-full pt-[100%] bg-lightBlueGrey overflow-hidden relative"
      style={{
        transition: "clip-path 0.6s ease",
        clipPath: clipPath,
      }}
    >
      <img
        src="/img/graphic01.png"
        alt="graphic image"
        className="absolute -top-20 left-1/2 -translate-x-2/4"
      />
    </div>
  );
};

export default AboutClipImage;
