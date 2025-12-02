import menu from "../../public/icons/menu.jpeg";
import mapa1 from "../../public/icons/mapa1.jpeg";
import mapa2 from "../../public/icons/mapa2.jpeg";
import iniciojuego from "../../public/icons/iniciojuego.jpeg";

const images = [menu, mapa1, mapa2, iniciojuego];

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Fondo superior e inferior */}
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-[#040016]" />
        <div className="h-1/2 bg-[#050008]" />
        <div className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 
                        bg-gradient-to-r from-[#ff00ff44] via-[#00ffff44] to-transparent 
                        blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-7xl md:text-9xl tracking-tight mb-20 jersey-10-regular">
          <span className="text-neon-cyan drop-shadow-[0_0_22px_rgba(0,255,255,0.9)]">
            Capturas
          </span>{" "}
          del Juego
        </h2>

        {/* Grid de Screenshots */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-2xl 
                         bg-black/30 backdrop-blur-sm border border-white/10
                         hover:border-neon-cyan/70 transition-all duration-500
                         hover:shadow-[0_0_45px_rgba(0,255,255,0.6)]
                         hover:-translate-y-2"
            >
              {/* Marco neon animado */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 
                              group-hover:opacity-80 transition-all duration-700 
                              bg-gradient-to-br from-[#FF3CAC] via-[#784BA0] to-[#00FFFF]" />

              {/* Imagen */}
              <img
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="relative z-10 w-full h-full object-cover rounded-3xl
                           scale-[1.02] group-hover:scale-[1.08] transition-transform duration-[900ms]"
              />

              {/* Glow inferior */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-10 
                              bg-black/70 blur-2xl opacity-60 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
