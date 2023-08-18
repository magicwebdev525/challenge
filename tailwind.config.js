/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "745px",
        latops: "1024px",
        desktop: "1440px",
        sm: "375px",
        md: "745px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
