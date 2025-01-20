// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure it looks for Tailwind classes in all files within src
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',  // Small devices (phones)
      md: '768px',  // Medium devices (tablets)
      lg: '1024px', // Large devices (desktops)
      xl: '1280px', // Extra large devices
    },
  },
  plugins: [],
}
