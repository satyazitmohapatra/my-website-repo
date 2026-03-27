/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#f8f8fa',
          DEFAULT: '#ffffff',
          dark: '#0a0a0f',
          card: '#111118',
        },
        accent: {
          violet: '#7c3aed',
          blue: '#2563eb',
          cyan: '#06b6d4',
          pink: '#ec4899',
          orange: '#f97316',
          green: '#22c55e',
          red: '#ef4444',
          yellow: '#eab308',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-up': 'floatUp 12s linear infinite',
        'float-down': 'floatDown 10s linear infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        floatDown: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(-360deg)', opacity: '0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -30px) rotate(5deg)' },
          '50%': { transform: 'translate(-15px, 20px) rotate(-3deg)' },
          '75%': { transform: 'translate(25px, 15px) rotate(4deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
