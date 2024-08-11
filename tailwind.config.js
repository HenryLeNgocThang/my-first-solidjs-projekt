/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,scss}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          custom: "#1d1d1b"
        }
      },
      fontFamily: {
        'body': ['Open Sans', 'Arial', 'sans-serif'],
        'head': ['Tinos', 'serif'],
        'handwriting': ['Klee One', 'Nanum Pen', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '820px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1536px'
      }
    },
  },
  plugins: [],
}

