export default function Trailer() {
  return (
    <section
      id="trailer"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Fondo con división superior/inferior y glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base oscura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050018] via-black to-[#020008]" />

        {/* Glow superior magenta */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#ff00ff33] via-transparent to-transparent" />

        {/* Glow inferior cyan */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00ffff33] via-transparent to-transparent" />

         <div className="pointer-events-none absolute top-0 left-0 w-full h-24 
      bg-gradient-to-t from-transparent to-black" />
      
       <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 
      bg-gradient-to-b from-transparent to-black" />

        {/* Halo central detrás del tráiler */}
        <div className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 
                        bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.45),transparent_60%)]
                        blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-5xl md:text-6xl jersey-10-regular tracking-tight">
          Mira la{" "}
          <span className="text-neon-scarlet drop-shadow-[0_0_18px_rgba(255,56,96,0.9)]">
            Acción
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl">
          Un vistazo al caos neon de{" "}
          <span className="text-neon-cyan font-semibold">ZOON GAME</span>:
          golpes, hacking y una ciudad pixelada a punto de colapsar.
        </p>

        {/* Contenedor principal tipo consola holográfica */}
        <div className="relative mt-6">
          {/* Marco exterior con gradiente */}
          <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#00FFFF] shadow-[0_0_40px_rgba(0,255,255,0.45)]">
            <div className="relative rounded-3xl overflow-hidden bg-black/60 backdrop-blur-sm border border-white/10">
              
              {/* Barra superior tipo HUD */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff4b81]" />
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ffb347]" />
                  <span className="inline-block w-2 h-2 rounded-full bg-[#3cffd0]" />
                  <span className="ml-3 uppercase tracking-[0.25em] text-[0.65rem] md:text-[0.7rem] text-gray-400">
                    ZOON GAME // TRAILER OFICIAL
                  </span>
                </div>
                <span className="hidden md:inline-block text-[0.7rem] text-neon-cyan/80">
                  REC • 60 FPS
                </span>
              </div>

              {/* Video */}
              <div className="relative aspect-video">
                <img
                  className="w-full h-full object-cover"
                  src="public/icons/controles.png"
                  alt="Trailer Zoon Game - Venganza Digital"
                />
              </div>

              {/* Línea inferior con info */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-white/10 bg-black/40 text-[0.7rem] md:text-xs text-gray-300">
                <span className="uppercase tracking-[0.3em] text-neon-cyan/80">
                  VERSIÓN PRE-ALPHA
                </span>
                <span className="text-gray-400">
                  Capturado en motor • Escenas de gameplay reales
                </span>
              </div>
            </div>

            {/* Sombra flotante */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/80 blur-3xl opacity-70" />
          </div>
        </div>

        {/* Pills extras debajo del tráiler */}
        <div className="flex flex-wrap justify-center gap-3 pt-4 text-xs md:text-sm">
          <span className="px-4 py-2 rounded-full bg-[#ff00ff22] border border-[#ff00ff88]">
            Cinemática + Gameplay
          </span>
          <span className="px-4 py-2 rounded-full bg-[#00ffff22] border border-[#00ffff88]">
            Neon Beat ‘em up
          </span>
          <span className="px-4 py-2 rounded-full bg-[#ff9a0022] border border-[#ff9a0088]">
            Ciudad retro-futurista
          </span>
        </div>
      </div>
    </section>
  );
}
