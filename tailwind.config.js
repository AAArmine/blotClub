// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        "header-transparent": "#9E0000",
        "custom-yellow": "#FBDF4C",
        "custom-dark-yellow": "#FFA403",
        "light-green": "#00B206",
      },
      colors: {
        "dark-text": "#363636",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom, var(--bg-custom-yellow), var(--bg-custom-dark-yellow))",
        "gradient-slider": "linear-gradient(to bottom, #FDEFA3, #FFD07D)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoThin: ["RobotoThin", "sans-serif"],
        mardoto: ["Mardoto", "sans-serif"],
      },
      fontWeight: {
        extrabold: "800",
      },
    },
  },
  variants: {},
  plugins: [],
};
