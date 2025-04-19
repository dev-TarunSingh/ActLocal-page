module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#EF7A2A",
        secondary: "#FDBB6C",
        accent: "#8b5cf6",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom right, #EF7A2A, #FDBB6C)",
      },
      animation: {
        "scroll-x": "scrollX 40s linear infinite",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
