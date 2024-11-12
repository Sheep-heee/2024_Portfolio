import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const ContactSlide = () => {
  const scrollY = useSelector((state: RootState) => state.scrollY.scrollY);
  const filpOpen = useSelector((state: RootState) => state.filpOpen.filpOpen);

  const [width, setWidth] = useState(31.11);
  const [height, setHeight] = useState(100);

  const handleScroll = () => {
    if (scrollY <= 5580) return;
    if (scrollY >= 6399) return;

    const ratio = (scrollY - 5580) / (6399 - 5580);
    setWidth(31.11 - ratio * (31.11 - 91.666667));
    setHeight(100 - ratio * (100 - 219.38));
  };

  useEffect(() => {
    handleScroll();
  }, [scrollY]);

  return (
    <div className="w-full h-full flex gap-10 items-center justify-center px-5">
      <div className="grow h-96 overflow-hidden rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src="/img/contact1.png"
          alt="contact img1"
        />
      </div>
      <div className="grow w-165 h-96 overflow-hidden rounded-3xl relative">
        {scrollY > 5580 ? (
          <div className="w-full h-full"></div>
        ) : (
          <div className="w-full h-full rounded-3xl p-4 border-3 border-grey bg-lightGrey">
            <div className="w-full h-full rounded-2xl border border-blue overflow-hidden relative">
              <img
                className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/img/pattern_blue_first.png"
                alt="contact pattern blue"
              />
            </div>
          </div>
        )}
      </div>
      {scrollY > 5580 ? (
        <div
          className={`rounded-3xl p-4 border-3 border-grey bg-lightGrey absolute ${scrollY >= 6596 ? "opacity-0" : "opacity-100"} `}
          style={{ width: `${width}%`, height: `${height}%` }}
        >
          <div className="w-full h-full rounded-2xl border border-blue overflow-hidden relative">
            <img
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/img/pattern_blue_first.png"
              alt="contact pattern blue"
            />
          </div>
        </div>
      ) : null}

      <div className="grow h-96 overflow-hidden rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src="/img/contact3.png"
          alt="contact img3"
        />
      </div>
    </div>
  );
};

export default ContactSlide;
