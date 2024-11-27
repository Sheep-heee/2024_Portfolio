import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/reducers";
import { FilpActionType, updateFilp } from "../../redux/actions/cardOpenAction";
import ContactCard from "../Common/ContactCard";

const FlipSlide = () => {
  const filpOpen = useSelector((state: RootState) => state.filpOpen.filpOpen);
  const dispatch: Dispatch<FilpActionType> = useDispatch();
  const [groups, setGroups] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);
  const [isProcessing, setIsProcessing] = useState(false);
  const controls = useAnimationControls();
  const groupsRef = useRef(groups);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          console.log(!filpOpen && !isProcessing);
          if (entry.intersectionRatio <= 0.5 && filpOpen && !isProcessing) {
            setIsProcessing(true);
            dispatch(updateFilp(false));
            setTimeout(() => setIsProcessing(false), 300);
          }
        } else if (!filpOpen && !isProcessing) {
          setIsProcessing(true);
          setTimeout(() => setIsProcessing(false), 300);
        }
      },
      { threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5] }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [filpOpen]);

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
      ref={cardRef}
      className={`w-11/12 h-full relative transition-transform duration-500 ${filpOpen ? "rotate-y-180" : "rotate-y-0"} preserve-3d relative`}
    >
      <div
        className="w-full h-full rounded-3xl p-4 border-3 border-grey bg-lightGrey cursor-pointer absolute backface-hidden"
        onClick={() => dispatch(updateFilp(true))}
      >
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
          <div className="w-48 h-12 absolute bg-lightGrey left-1/2 -translate-x-1/2 max-projectXsm:w-20"></div>
          <img
            className="object-cover absolute left-1/2 -translate-x-1/2 max-skillMd:w-full max-skillMd:h-full"
            src="/img/pattern_blue_second.png"
            alt="contact pattern blue"
          />
        </div>
      </div>
      <div
        className="w-full h-full absolute rotate-y-180 backface-hidden"
        onClick={() => dispatch(updateFilp(false))}
      >
        <ContactCard />
      </div>
    </div>
  );
};

export default FlipSlide;
