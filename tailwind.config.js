/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6a00", // Twój pomarańczowy
        dark: "#0f0f0f",
      },
      // --- TUTAJ DODAJEMY ANIMACJE ---
      animation: {
        'spin-slow': 'spin 15s linear infinite', // Bardzo wolne kręcenie
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite', // Pulsowanie poświaty
        'float': 'float 6s ease-in-out infinite', // Delikatne unoszenie logo
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};