/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "secondary-white": "hsla(0, 0%, 100%, .6)",
      black: "#000",
      blue: "#007bff",
      indigo: "#6610f2",
      purple: "#6f42c1",
      pink: "#e83e8c",
      red: "#dc3545",
      orange: "#f90",
      yellow: "#ffc107",
      green: "#28a745",
      teal: "#20c997",
      cyan: "#17a2b8",
      white: "#fff",
      gray: "#6c757d",
      "gray-dark": "#343a40",
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      info: "#17a2b8",
      warning: "#ffc107",
      danger: "#dc3545",
      light: "#f8f9fa",
      dark: "#343a40",
    },
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1800px",
      },
      fontFamily: {
        sans: ['"Littera Text"', "helvetica", "arial", "sans-serif"],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
