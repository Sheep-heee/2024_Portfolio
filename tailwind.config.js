import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGrey: "#F7F7F8",
        lightGrey: "#eaeaea",
        lightBlueGrey: "#EBEAEE",
        grey: "#d9d9d9",
        warmGrey: "#DFE1D3",
        darkGrey: "#777777",
        mainBlack: "#333333",
        blue: `#5D61D3`,
      },
      screens: {
        headerSm: "675px",
        homeSm: "856px",
        homeMd: "1221px",
        homeLg: "1669px",
        aboutXsm: "438px",
        aboutSm: "1390px",
        aboutMd: "1595px",
        aboutLg: "1613px",
        aboutXlg: "1725px",
        skillMd: "1360px",
        skillLg: "1600px",
        skillLm: "1698px",
        skillXlg: "1798px",
        projectXsm: "588px",
        projectSm: "752px",
        projectMd: "1200px",
        projectLg: "1620px",
        projectXlg: "1902px",
        experienceImgHidden: "1160px",
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
      lineHeight: {
        veryTight: "1.1",
        7.5: "30px",
      },
      borderWidth: {
        3: "3px",
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
      width: {
        108: "27rem",
        128: "32rem",
        129: "32.25rem",
        145: "36.25rem",
        160: "40rem",
        165: "41.25rem",
        187.5: "46.875rem",
        200: "50rem",
        284: "71rem",
        308: "77rem",
        352: "88rem",
        380: "95rem",
        400: "100rem",
      },
      height: {
        0.75: "0.2rem",
        76: "19rem",
        88: "22rem",
        110: "27.5rem",
        120: "30rem",
        168: "42rem",
        200: "50rem",
        229.75: "57.4375rem",
        235: "59rem",
        308: "77rem",
        336: "84rem",
        400: "100rem",
        "11/12": "91.666667%",
      },
      inset: {
        5.5: "1.375rem",
        8.5: "2.15rem",
        38: "9.5rem",
        88: "22rem",
        120: "30rem",
        125: "31rem",
        141: "35.25rem",
        144: "36rem",
        149: "37rem",
      },
      spacing: {
        0.5: "0.125rem",
        3.5: "0.875rem",
        34: "8.5rem",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
      },
      rotate: {
        135: "135deg",
      },
      scale: {
        200: "2",
      },
      boxShadow: {
        borderBottom: "0 1px 0 rgb(51, 51, 51)",
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
          top: "368px",
          right: "0",
        },
        ".mainArrow1669": {
          width: "calc(100% - 522px)",
          height: "48px",
          position: "absolute",
          top: "308px",
          right: "0",
        },
        ".mainArrow1221": {
          width: "calc(100% - 370px)",
          height: "36px",
          position: "absolute",
          top: "248px",
          right: "0",
        },
        ".skillArrow": {
          width: "calc(100% - 670px)",
          height: "2.25rem",
          position: "absolute",
          top: "484px",
          right: "0",
        },
        ".skillArrow1600": {
          width: "calc(100% - 570px)",
          height: "2.25rem",
          position: "absolute",
          top: "425px",
          right: "0",
        },
        ".experienceTitle": {
          width: "fit-content",
          fontSize: "1.75rem",
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: "800",
          padding: "0.375rem 1.75rem",
          borderRadius: "2rem",
          border: "1px solid #333333",
          textTransform: "uppercase",
        },
        ".mobileMenuHeight": {
          height: "calc(100% - 137px)",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-2000": {
          perspective: "2000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".card_front": {
          transform: "translateZ(1px)",
        },
        ".card_back": {
          transform: "rotateY(180deg) translateZ(-1px)",
        },
        ".circle": {
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        },
        ".circleBorder": {
          border: "1px solid #333333",
        },
        ".circleBorderFooter": {
          border: "1px solid #ffffff",
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
        ".rotate3d-y-180": {
          transform: "rotate3d(0, 1, 0, 180deg)",
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
