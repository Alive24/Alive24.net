/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'blockquote:after': {
              'content': ""
            },
            'blockquote:before': {
              "content": ""
            },
            '.blockquote': {
              "quotes": "none"
            },
            'code': {
              "color": "#b4d6fa !important",
              "background-color": "#25313f",
              "border-radius": "0.375rem !important"
          }
        },
      },
    },
  },
},
  daisyui: {
  themes: [
    {
      'alive': {
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
      'alive-dark': {
        "primary": "#2C3E50",
        "secondary": "#eef2f5",
        "accent": "#f97316",
        "neutral": "#9ca3af",
        "base-100": "#000000",
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
