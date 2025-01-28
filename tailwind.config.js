/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "serif"],
        "zen": ["Zen Antique Soft", "serif"],
        "red":["Red Hat Text","sans-serif"],
      },
      fontSize: {
        "custom-xl": "22px",
        "custom-2xl": "28px",
        "custom-3xl": "32px",
        "custom-5xl": "50px",
        "custom-52xl":"52px",
        "custom-6xl": "66px",
      },
      lineHeight: {
        120: "120%",
        130: "130%",
        133:"133%",
        136: "136%",
        153: "153%",
        160: "160%",
      },
      colors: {
        "off-black": "#010101",
        blue: "#1B4279",
        "off-white": "#F7F9FC",
        "dark-blue": "#13192E",
      },
      backgroundImage: {
        hero: "url(./assets/images/webp/hero-bg.webp)",
        "hero-sm": "url(./assets/images/webp/hero-sm-bg.webp)",
        "pricing":"url(./assets/images/webp/pricing-bg.webp)",
        impact :"url(./assets/images/webp/impact-bg.webp)",
        footer:"url(./assets/images/webp/footer-bg.webp)",
        "foot-line":"linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 57%, rgba(255, 255, 255, 0) 100%)",
      },
      backgroundSize: {
        full: "100% 100%",
        small: "100% 84%",
        "library-small": "100% 93%"
      },
      letterSpacing: {
        "xxs": "-0.16px"
      },
      screens: {
        "custom-3xl": "1350px",
        "custom-lg": "1100px",
        "custom-md":"950px",
      },
      boxShadow:{
        "pricing-box":"0px 5px 55.9px 0px #0000000D",
        "impact-box":"0px 0px 28px 0px #007CF71F",
      },
    },
  },
  plugins: [],
}