import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const AboutClipImage = () => {
  const scrollY = useSelector((state: RootState) => state.scrollY.scrollY);

  const [clipPath, setClipPath] = useState(
    "inset(0% 0% 70% 0% round 24px 24px 24px 24px)"
  );

  const handleScroll = () => {
    if (scrollY <= 300) {
      const scrollPercent = (scrollY / 300) * 100;

      const topValue = (percent: number): number => {
        switch (true) {
          case 0 <= percent && percent <= 30:
            return percent;
          case percent > 30:
            return 30;
          case percent < 0:
            return 0;
          default:
            return 0;
        }
      };

      const bottomValue = (percent: number): number => {
        switch (true) {
          case percent <= 100:
            return percent;
          case percent > 100:
            return 100;
          default:
            return 0;
        }
      };

      setClipPath(
        `inset(${topValue(scrollPercent)}% 0% ${bottomValue(30 - scrollPercent)}% 0% round 24px 24px 24px 24px)`
      );
    }
  };

  useEffect(() => {
    handleScroll();
  }, [scrollY]);

  return (
    <div
      className="w-full h-full bg-lightBlueGrey overflow-hidden relative rounded-3xl"
      style={{
        transition: "clip-path 0.6s ease",
        clipPath: clipPath,
      }}
    >
      <img
        src="/img/graphic01.png"
        alt="graphic image"
        className="absolute -top-10 left-1/2 -translate-x-2/4 max-[540px]:scale-200"
      />
    </div>
  );
};

export default AboutClipImage;
