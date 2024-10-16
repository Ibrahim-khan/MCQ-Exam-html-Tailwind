/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*', // Adjust the paths based on your project structure
    './index.html',  // Include all files that use Tailwind classes
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px"
      },

      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
      },
    },
  },
  plugins: [],
}