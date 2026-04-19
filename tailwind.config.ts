import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#bef264', // Lime
          dark: '#84cc16',
          light: '#d9f99d',
        },
        background: '#0a0a0a',
        surface: '#121212',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(190, 242, 100, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(190, 242, 100, 0.6)' },
        },
      },
      backgroundImage: {
        'grain': "url('/noise.png')",
        'gradient-pro': 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
