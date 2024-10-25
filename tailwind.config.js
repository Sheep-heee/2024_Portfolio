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
      keyframes: {
        sphereX: {
          "0%": { transform: "rotateY(0deg) rotateX(0deg) rotateZ(0deg)" },
          "50%": { transform: "rotateY(0deg) rotateX(180deg) rotateZ(0deg)" },
          "100%": { transform: "rotateY(0deg) rotateX(360deg) rotateZ(0deg)" },
        },
      },
      animation: {
        "rotate-x": "sphereX 5s infinite linear",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        "perspective-1000": {
          perspective: "1000px",
        },
        "preserve-3d": {
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
