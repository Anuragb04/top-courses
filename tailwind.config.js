/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'bgDark': '#333333',
        'bgDark2': '#333322',
         // Adjust the color code as needed
      },
    },
  },
  plugins: [],
};
