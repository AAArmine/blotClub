// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        "header-transparent": "#9E0000",
        "custom-yellow": "#FBDF4C",
        "custom-dark-yellow": "#FFA403",
        "light-green": "#00B206",
        banner: 'url("@assets/images/banner.png")',
      },
      colors: {
        "dark-text": "#363636",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom, var(--bg-custom-yellow), var(--bg-custom-dark-yellow))",
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
