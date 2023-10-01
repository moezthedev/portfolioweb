/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#091B37",
        "secondary":"#0C2549",
        "tertiary":"#040614",
        "background":"#394245",
        "agreen":"#71bc68",
        "ablue":"#B9D7EA",
        "back":"#212529",
        "ablack":"#282A35",
        "new":"#00C8FF",
        "sblack":"#1B1919"
      },
    },
  },
  plugins: [],
}

