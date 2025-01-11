// tailwind.config.js
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      slideInFromRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
    },
    animation: {
      slideInFromRight: 'slideInFromRight 1s ease-out',
      slideInFromTop: 'slideInFromTop 1s ease-out',
    },
  },
};
export const plugins = [];
