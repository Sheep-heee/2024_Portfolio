import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGrey: "#F7F7F8",
        lightGrey: "#eaeaea",
        grey: "#d9d9d9",
        darkGrey: "#777777",
        mainBlack: "#333333",
        blue: `#5D61D3`,
      },
      fontSize: {
        title: "12rem",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
        pretendard: "Pretendard",
      },
      letterSpacing: {
        titleSpacing: "-0.03em",
      },
      keyframes: {
        sphereRotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        sphereRotateHome1: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(180deg) rotateY(180deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg)" },
        },
        sphereRotateHome2: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(-180deg) rotateY(180deg)" },
          "100%": { transform: "rotateX(-360deg) rotateY(360deg)" },
        },
        sphereRotateHome3: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(180deg) rotateY(-180deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(-360deg)" },
        },
        sphereBounceHome3: {
          "0%": { transform: "translateX(0) translateY(-30%)" },
          "50%": { transform: "translateX(5%) translateY(0)" },
          "100%": { transform: "translateX(0) translateY(-30%)" },
        },
      },
      animation: {
        sphereY: "sphereRotateY 10s infinite linear",
        sphereHome1: "sphereRotateHome1 20s infinite linear",
        sphereHome2: "sphereRotateHome2 15s infinite linear",
        sphereHome3: "sphereRotateHome3 40s infinite linear",
        sphereBounce3: "sphereBounceHome3 5s infinite ease-out",
      },
      height: {
        0.75: "0.2rem",
        168: "42rem",
      },
      inset: {
        8.5: "2.125re,",
        125: "31rem",
        negative20: "-5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".mainArrow": {
          width: "calc(100% - 752px)",
          height: "4.5rem",
          position: "absolute",
          top: "272px",
          right: "0",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".circle": {
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#F7F7F8",
        },
        ".circleBorder": {
          border: "1px solid #333333",
        },
        ".rotate3d-x-0": {
          transform: "rotate3d(1, 0, 0, 0deg)",
        },
        ".rotate3d-x-25": {
          transform: "rotate3d(1, 0, 0, 25deg)",
        },
        ".rotate3d-x-50": {
          transform: "rotate3d(1, 0, 0, 50deg)",
        },
        ".rotate3d-x-75": {
          transform: "rotate3d(1, 0, 0, 75deg)",
        },
        ".rotate3d-x-100": {
          transform: "rotate3d(1, 0, 0, 100deg)",
        },
        ".rotate3d-x-125": {
          transform: "rotate3d(1, 0, 0, 125deg)",
        },
        ".rotate3d-x-150": {
          transform: "rotate3d(1, 0, 0, 150deg)",
        },
        ".rotate3d-y-0": {
          transform: "rotate3d(0, 1, 0, 0deg)",
        },
        ".rotate3d-y-25": {
          transform: "rotate3d(0, 1, 0, 25deg)",
        },
        ".rotate3d-y-50": {
          transform: "rotate3d(0, 1, 0, 50deg)",
        },
        ".rotate3d-y-75": {
          transform: "rotate3d(0, 1, 0, 75deg)",
        },
        ".rotate3d-y-100": {
          transform: "rotate3d(0, 1, 0, 100deg)",
        },
        ".rotate3d-y-125": {
          transform: "rotate3d(0, 1, 0, 125deg)",
        },
        ".rotate3d-y-150": {
          transform: "rotate3d(0, 1, 0, 150deg)",
        },
        ".rotate3d-z-0": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 0deg)",
        },
        ".rotate3d-z-25": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 1, 0, 25deg)",
        },
        ".rotate3d-z-50": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 1, 0, 50deg)",
        },
        ".rotate3d-z-75": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 1, 0, 75deg)",
        },
        ".rotate3d-z-100": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 1, 0, 100deg)",
        },
        ".rotate3d-z-125": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 1, 0, 125deg)",
        },
        ".rotate3d-z-150": {
          transform: "rotate3d(0, 1, 0, 90deg) rotate3d(1, 1, 0, 150deg)",
        },
      });
    }),
  ],
};
