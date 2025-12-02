/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      // Movemos la definición de 'colors' DENTRO de extend para AÑADIR colores a la paleta por defecto.
      colors: {
        // Aquí puedes definir tu paleta de colores personalizada de cyberpunk
        // Ejemplo de colores personalizados para neones
        'neon-cyan': '#00FFFF',
        'neon-scarlet': '#FF4500',
        'gray-950': '#0D1117',
        // ... otros colores
      },

      // ESTE ES EL CAMBIO CLAVE: Definir 'inter' y 'electrolize'
      fontFamily: {
        // Fuente principal para texto de cuerpo
        inter: ['Inter', 'sans-serif'],
        // Fuente futurista para títulos (Agregamos 'electrolize')
        electrolize: ['Electrolize', 'sans-serif'],
      },
      
      // Ejemplo de animación de glitch o glow (si la estás usando)
      keyframes: {
        'glitch-anim': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        glitch: 'glitch-anim 0.2s infinite',
        'zoom-slow': 'zoom 60s ease-in-out infinite alternate',
        'fade-in-delay': 'fadeIn 2s ease-in-out',
        'fade-up': 'fadeUp 1s ease-out',
        'fade-up-delay': 'fadeUp 1.5s ease-out',
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    // Aquí van tus plugins, si tienes alguno
  ],
}