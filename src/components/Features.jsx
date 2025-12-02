const items = [
  { icon: "⚔️", title: "Combate de Alta Tensión", desc: "Domina mecánicas de pelea dinámicas con armas modificables y habilidades cibernéticas únicas." },
  { icon: "💻", title: "Hacking y Manipulación", desc: "El hacker te da acceso para manipular el entorno, desactivar defensas y resolver puzles tecnológicos." },
  { icon: "🏙️", title: "Mundo Abierto Pixelado", desc: "Explora una metrópolis sombría, llena de secretos, misiones secundarias y encuentros aleatorios." },
  { icon: "📈", title: "Progresión Personalizada", desc: "Define tu estilo de juego. Mejora tus implantes, armas y habilidades para escalar en los rankings de la Resistencia." },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-32 px-6">

      {/* Fondo dividido Superior / Inferior */}
      <div className="pointer-events-none absolute inset-0">
        {/* Mitad superior */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#040016]" />
        {/* Mitad inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050008]" />

        {/* Glow suave en el centro para eliminar la línea */}
        <div className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 
                        bg-gradient-to-r from-[#ff00ff55] via-[#00ffff55] to-[#ff00ff55] 
                        blur-3xl opacity-70" />

        {/* Degradado en la parte de arriba como en la hero section */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-24 
                        bg-gradient-to-t from-transparent to-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-center text-6xl md:text-7xl font-extrabold mb-20 jersey-10-regular">
          <span className="text-neon-scarlet drop-shadow-[0_0_18px_rgba(255,50,50,0.8)]">
            Sistemas
          </span>{" "}
          del Juego
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((f, i) => (
            <div
              key={i}
              className="
              p-8 rounded-3xl 
              bg-black/40 backdrop-blur-sm
              border border-[#00FFFF]
              shadow-[0_0_20px_rgba(0, 255, 255, 0.7)]
              hover:shadow-[0_0_50px_rgba(255,0,195,0.5)]
              hover:scale-105
              transition-all duration-300
              text-center space-y-4
            "
            >
              <div className="text-6xl mb-4 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                {f.icon}
              </div>

              <h3 className="text-2xl font-bold text-neon-cyan tracking-wide">
                {f.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
