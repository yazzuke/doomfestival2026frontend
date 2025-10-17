/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta techno oscura
        doom: {
          black: '#0a0a0a',
          dark: '#141414',
          darker: '#1a1a1a',
          red: '#00ff41', // Verde neón techno
          green: '#00ff41', // Verde neón alternativo
          purple: '#8b00ff',
          cyan: '#00ffff',
          white: '#ffffff',
          gray: '#888888',
          // Colores del festival DOOM
          'doom-green': '#9ec54b',
          'doom-green-light': '#c8dd7c',
          'doom-green-dark': '#7fa83d',
        }
      },
      fontFamily: {
        'techno': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        // Fuentes estilo STEEL WORLD / Cyberpunk
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'michroma': ['Michroma', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'gradient-doom': 'linear-gradient(135deg, #00ff41 0%, #8b00ff 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(0, 255, 65, 0.5)', // Verde
        'glow-green': '0 0 30px rgba(0, 255, 65, 0.5)', // Verde
        'glow-purple': '0 0 30px rgba(139, 0, 255, 0.5)',
        'glow-cyan': '0 0 30px rgba(0, 255, 255, 0.3)',
        'glow-doom': '0 0 30px rgba(158, 197, 75, 0.5)', // Verde DOOM
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}