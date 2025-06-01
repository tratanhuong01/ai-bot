// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "fade-in-0": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out-0": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "zoom-in-95": {
          from: { transform: "scale(0.95)" },
          to: { transform: "scale(1)" },
        },
        "zoom-out-95": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0.95)" },
        },
        "slide-in-from-left-1/2": {
          from: { transform: "translateX(-75%)" },
          to: { transform: "translateX(-50%)" },
        },
        "slide-in-from-top-[48%]": {
          from: { transform: "translateY(-60%)" },
          to: { transform: "translateY(-48%)" },
        },
        // Tương tự với các keyframes khác bạn dùng
      },
      animation: {
        "fade-in-0": "fade-in-0 200ms ease-out",
        "fade-out-0": "fade-out-0 200ms ease-in",
        "zoom-in-95": "zoom-in-95 200ms ease-out",
        "zoom-out-95": "zoom-out-95 200ms ease-in",
        "slide-in-from-left-1/2": "slide-in-from-left-1/2 200ms ease-out",
        "slide-in-from-top-[48%]": "slide-in-from-top-[48%] 200ms ease-out",
      },
    },
  },
  plugins: [],
};
