import { useState, useRef, useEffect } from "react";

const AboutClipImage = () => {
  const imageContainer = useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = useState("inset(0 0 0 0 round 0 50% 50% 0)");

  const handleScroll = () => {
    if (imageContainer.current) {
      const scrollTop = imageContainer.current.scrollTop;
      const maxScroll =
        imageContainer.current.scrollHeight -
        imageContainer.current.clientHeight;
      const scrollPercent = scrollTop / maxScroll;

      const insetValue = scrollPercent * 50;
      setClipPath(
        `inset(${insetValue}% 0 ${50 - insetValue}% 0 round 0 50% 50% 0)`
      );
    }
  };

  useEffect(() => {
    const container = imageContainer.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-full bg-lightBlueGrey overflow-hidden relative"
      ref={imageContainer}
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
