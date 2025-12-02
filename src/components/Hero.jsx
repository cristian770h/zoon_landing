import logo from "../assets/logo.png"; // Manteniendo el logo, asumiendo que estará disponible
import personaje2 from "../assets/personaje2.png"; 
import personaje1 from "../assets/personaje1.png"; 
import fondozoon from "../assets/fondozoon.png";

export default function Hero() {
  // URLs de placeholders genéricos para que el componente compile y se visualice.
  // En tu entorno local, estas URL deben ser reemplazadas por tus assets reales.
  

  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16">

  {/* Imagen de fondo */}
  <img
    src={fondozoon}
    alt="Pixel city background"
    className="absolute inset-0 w-full h-full object-cover animate-zoom-slow"
  />

  {/* Capa con blur y oscurecimiento */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

  {/* Gradiente final (opcional, para ocultar el corte entre secciones) */}
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black" />

 
      {/* Contenido centrado */}
      <div className="relative z-10 max-w-5xl px-6 space-y-12">
        
        {/* Nombre del juego - ENORME y GLOWING */}
        <h1 className="text-9xl md:text-9xl  drop-shadow-2xl animate-glow text-[#06d5e6] jersey-10-regular">
          ZOON <span className="text-neon-cyan">GAME</span>
        </h1>
        
        {/* Slogan */}
        <h2 className="text-white text-2xl md:text-4xl font-bold italic tracking-wider animate-fade-in-delay">
          Rompe las cadenas y desata la <span className="text-neon-scarlet font-semibold">Venganza Digital</span>
        </h2>

        {/* Avatares con efectos de Borde Neón */}
        <div className="flex justify-center items-center gap-16 animate-fade-up">
          {/* Rebelde (Fuego/Venganza) */}
          <img
            // Usando la URL de placeholder
            src={personaje2}
            alt="Rebelde Protagonista"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#ea22bb] shadow-[0_0_20px_rgba(255,69,0,0.8)] transform hover:scale-110 hover:rotate-3 transition duration-500"
          />
          {/* Hacker (Hielo/Tecnología) */}
          <img
            // Usando la URL de placeholder
            src={personaje1}
            alt="Hacker Aliado"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.8)] transform hover:scale-110 hover:-rotate-3 transition duration-500"
          />
        </div>
        
        {/* Botones - CTA en escarlata (foco en Jugar/Descargar) */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 animate-fade-up-delay">
          <a
            href="#cta"
            className="px-8 py-4 rounded-xl bg-[#ea22bb] text-white font-extrabold uppercase tracking-widest text-xl shadow-lg shadow-[#FF4500]/50 transform hover:scale-[1.02] transition duration-300 animate-pulse-neon"
          >
            Jugar Ahora
          </a>
          <a
            href="#trailer"
            className="px-8 py-4 rounded-xl border-2 border-neon-cyan text-white font-bold uppercase tracking-widest text-xl hover:bg-[#00FFFF]/20 transition duration-300"
          >
            Ver Tráiler
          </a>
        </div>
      </div>
    </section>
  );
}
