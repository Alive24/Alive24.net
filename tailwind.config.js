/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2C3E50",
          "secondary": "#eef2f5",
          "accent": "#f97316",
          "neutral": "#9ca3af",
          "base-100": "#FFFFFF",
          "info": "#93E6FB",
          "success": "#d9f99d",
          "warning": "#fde68a",
          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
