import { motion } from "framer-motion";
import Sphere from "../assets/Sphere";

const Home = () => {
  return (
    <>
      <section className="relative pt-24 z-10">
        <div className="mainArrow">
          <div className="w-full h-full relative flex items-center">
            <span className="absolute top-8.5 w-4 h-0.75 rounded-sm bg-mainBlack -rotate-45 origin-left"></span>
            <span className="w-full h-0.75 bg-mainBlack rounded-sm"></span>
            <span className="absolute bottom-8.5 w-4 h-0.75 rounded-sm bg-mainBlack rotate-45 origin-left"></span>
          </div>
        </div>
        <motion.div
          className="w-96 h-96 absolute top-38 right-negative20 rounded-full circleBorder overflow-hidden"
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Sphere area={"home1"} />
        </motion.div>
        <motion.div
          className="w-80 h-80 absolute top-149 right-96 rounded-full circleBorder overflow-hidden"
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Sphere area={"home2"} />
        </motion.div>
        <motion.div
          className="w-44 h-44 absolute top-120 right-40"
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-full h-full rounded-full circleBorder overflow-hidden animate-sphereBounce3 hover:scale-110">
            <Sphere area={"home3"} />
          </div>
        </motion.div>
        <div className="px-24 h-168 flex flex-col justify-between mb-12">
          <div className="font-nunitoSans flex flex-col">
            <div className="text-title font-bold leading-none tracking-titleSpacing flex items-center gap-5 mt-20">
              <h1>PORTFOLIO</h1>
              <svg
                width="205"
                height="154"
                viewBox="0 0 205 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_148)">
                  <path
                    d="M63.9177 125.716L58.3313 131.292C58.004 131.642 57.6084 131.922 57.1687 132.114C56.729 132.306 56.2545 132.406 55.7746 132.408C55.2946 132.406 54.8202 132.306 54.3805 132.114C53.9408 131.922 53.5451 131.642 53.2178 131.292L1.15048 79.3282C0.798917 79.0022 0.518495 78.6073 0.326738 78.1683C0.134981 77.7293 0.0360107 77.2555 0.0360107 76.7766C0.0360107 76.2976 0.134981 75.8239 0.326738 75.3848C0.518495 74.9458 0.798917 74.5509 1.15048 74.225L53.1731 22.2424C53.5003 21.892 53.896 21.6122 54.3357 21.4202C54.7754 21.2282 55.2499 21.1281 55.7298 21.1261C56.2098 21.1281 56.6842 21.2282 57.1239 21.4202C57.5636 21.6122 57.9593 21.892 58.2865 22.2424L63.8729 27.8176C64.2245 28.1436 64.5049 28.5385 64.6967 28.9775C64.8884 29.4165 64.9874 29.8903 64.9874 30.3693C64.9874 30.8482 64.8884 31.322 64.6967 31.761C64.5049 32.2 64.2245 32.5949 63.8729 32.9209L19.9615 76.7447L63.8729 120.568C64.5569 121.206 64.9851 122.112 64.9851 123.12V123.19C64.9862 123.663 64.8917 124.131 64.7072 124.566C64.5226 125.001 64.2519 125.395 63.9113 125.723L63.9177 125.716ZM129.938 6.74138L88.2639 150.69C87.9995 151.607 87.3842 152.384 86.5509 152.853L86.5318 152.859C86.1404 153.099 85.7 153.248 85.2431 153.296C84.7862 153.343 84.3245 153.288 83.892 153.133L83.9111 153.14L76.9825 151.245C76.0633 150.981 75.2851 150.367 74.8156 149.536L74.8093 149.516C74.5672 149.104 74.4173 148.644 74.3699 148.169C74.3224 147.693 74.3786 147.213 74.5344 146.761L74.528 146.786L116.202 2.83743C116.467 1.92015 117.082 1.14344 117.915 0.674942L117.935 0.668563C118.326 0.428531 118.766 0.27927 119.223 0.231795C119.68 0.18432 120.142 0.239842 120.574 0.394266L120.555 0.387887L127.484 2.28245C128.423 2.55675 129.19 3.17552 129.651 3.99203L129.657 4.01117C129.899 4.42362 130.049 4.8834 130.096 5.35904C130.144 5.83467 130.088 6.31492 129.932 6.7669L129.938 6.74138ZM203.341 79.3282L151.274 131.285C150.947 131.639 150.549 131.922 150.107 132.115C149.665 132.308 149.187 132.408 148.705 132.408C148.222 132.408 147.744 132.308 147.302 132.115C146.86 131.922 146.462 131.639 146.135 131.285L140.549 125.71C140.194 125.383 139.911 124.987 139.717 124.545C139.523 124.104 139.423 123.627 139.423 123.146C139.423 122.664 139.523 122.187 139.717 121.746C139.911 121.305 140.194 120.908 140.549 120.581L184.46 76.7574L140.549 32.9336C140.194 32.6069 139.911 32.2103 139.717 31.769C139.523 31.3276 139.423 30.8511 139.423 30.3693C139.423 29.8874 139.523 29.4109 139.717 28.9695C139.911 28.5282 140.194 28.1316 140.549 27.8049L146.135 22.2296C146.462 21.8755 146.86 21.593 147.302 21.3997C147.744 21.2064 148.222 21.1066 148.705 21.1066C149.187 21.1066 149.665 21.2064 150.107 21.3997C150.549 21.593 150.947 21.8755 151.274 22.2296L203.341 74.1931C203.696 74.5198 203.979 74.9163 204.173 75.3577C204.367 75.799 204.467 76.2756 204.467 76.7574C204.467 77.2392 204.367 77.7158 204.173 78.1572C203.979 78.5985 203.696 78.9951 203.341 79.3218V79.3282Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_148">
                    <rect
                      width="204.537"
                      height="153.096"
                      fill="white"
                      transform="translate(0 0.215576)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex gap-2">
              <div className="text-7xl font-light tracking-titleSpacing">
                Crafting Experiences
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-nunitoSans text-xl font-light leading-none tracking-titleSpacing">
              Frontend Developer
            </div>
            <div className="text-3xl tracking-titleSpacing">
              <span className="font-pretendard font-bold">양희진</span>
              <span className="font-nunitoSans">&nbsp;YANG HEEJIN</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-400 h-235">
          <div className="w-full h-120 bg-lightBlueGrey overflow-hidden rounded-r-full relative">
            <img
              src="/img/graphic01.png"
              alt="graphic image"
              className="absolute top-1/4 left-1/2 -translate-x-2/4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
