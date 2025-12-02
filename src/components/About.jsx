export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Fondo dividido mitad y mitad */}
      <div className="pointer-events-none absolute inset-0 flex">
        {/* Mitad izquierda */}
        <div className="w-1/2 bg-[#040016]" />
        {/* Mitad derecha */}
        <div className="w-1/2 bg-[#050008]" />

        {/* Glow central */}
        <div className="absolute inset-y-0 left-1/2 w-40 -translate-x-1/2 
        bg-gradient-to-b from-[#ff00ff55] via-[#00ffff55] to-transparent 
        blur-3xl opacity-70" />
      </div>

      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 
      bg-gradient-to-t from-transparent to-black" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 
      bg-gradient-to-b from-transparent to-black" />

      <div className="relative max-w-7xl mx-auto space-y-16">
        <h2 className="text-center text-7xl md:text-9xl tracking-tight jersey-10-regular">
          ¿Qué es{" "}
          <span className="text-neon-cyan drop-shadow-[0_0_18px_rgba(0,255,255,0.8)]">
            ZOON GAME
          </span>
          ?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen Cinemática */}
          <div className="order-2 lg:order-1">
            <div className="relative p-[3px] rounded-3xl 
              bg-gradient-to-br from-[#FF3CAC] via-[#784BA0] to-[#00FFFF]
              shadow-[0_0_35px_rgba(255,0,150,0.7)]"
            >
              <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm">
                <img
                  src="src/assets/vs.png"
                  alt="Concept art - Protagonista vs Espía"
                  className="rounded-3xl w-full h-full object-cover 
                  scale-[1.02] hover:scale-105 transition-transform duration-500"
                />

                {/* Borde interno */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
              </div>

              {/* Sombra flotante */}
              <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 
              w-3/4 h-10 bg-black/80 blur-3xl opacity-70" />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl bg-black/40 backdrop-blur-sm 
              border border-[#00FFFF55] shadow-[0_0_40px_rgba(0,255,255,0.3)]
              p-8 md:p-10 space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-neon-scarlet 
                tracking-[0.18em] uppercase">
                La Misión: Venganza y Código
              </h3>

              <p className="text-lg md:text-xl font-bold text-gray-200 leading-relaxed">
                ZOON GAME te sumerge en una distopía retro-futurista y cyberpunk. Eres un rebelde
                impulsado por la venganza en una cacería contra el espía que controla
                las corporaciones opresoras.
              </p>

              <p className="text-lg md:text-xl font-bold text-gray-200 leading-relaxed 
                border-l-4 border-neon-cyan/80 pl-4">
                Tu única esperanza es un{" "}
                <span className="text-neon-scarlet font-extrabold">hacker genio</span>{" "}
                que te guía para infiltrarte, manipular sistemas y destruir enemigos
                en una ciudad pixelada donde cada decisión importa.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 text-sm md:text-base">
                <span className="px-4 py-2 rounded-full bg-[#ff00ff22] border border-[#ff00ff88]">
                  Beat ‘em up pixelado
                </span>
                <span className="px-4 py-2 rounded-full bg-[#00ffff22] border border-[#00ffff88]">
                  Historia cinemática
                </span>
                <span className="px-4 py-2 rounded-full bg-[#ff9a0022] border border-[#ff9a0088]">
                  Venganza & hacking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
