export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Fondo dividido arriba / abajo */}
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        {/* Parte superior */}
        <div className="flex-1 bg-[#040016]" />
        {/* Parte inferior */}
        <div className="flex-1 bg-[#050008]" />
        {/* Glow central para evitar línea dura */}
        <div className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 
                        bg-[radial-gradient(circle_at_center,#00ffff77,transparent_70%)]
                        blur-3xl opacity-80" />
        {/* Bordes difuminados arriba y abajo */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-10">
        {/* Etiqueta pequeña encima */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
                        bg-black/40 backdrop-blur-sm border border-[#00FFFF66] 
                        shadow-[0_0_22px_rgba(0,255,255,0.5)] text-xs md:text-sm tracking-[0.25em] uppercase text-neon-scarlet">
          <span className="w-2 h-2 rounded-full bg-neon-scarlet animate-pulse" />
          <span>MODO REBELIÓN LISTO</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight jersey-10-regular">
          ¿Listo para{" "}
          <span className="text-neon-scarlet drop-shadow-[0_0_20px_rgba(255,69,0,0.9)]">
            activar
          </span>{" "}
          la rebelión?
        </h2>

        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-bold leading-relaxed">
          Toma el control de la ciudad pixelada, destruye al espía y lidera a la Resistencia.
          <span className="text-neon-scarlet font-bold"> Tu historia comienza ahora.</span>
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          {/* Botón Principal */}
          <a
  href="#"
  className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl
             bg-gradient-to-r from-[#4A00E0] via-[#8E2DE2] to-[#FF2CDF]
             text-white font-extrabold uppercase tracking-[0.25em] text-sm md:text-base
             shadow-[0_0_25px_rgba(142,45,226,0.7)]
             hover:shadow-[0_0_40px_rgba(255,44,223,0.9)]
             transform hover:scale-[1.05] transition-all duration-300"
>
  <span className="mr-3 text-xl">▶</span>
  <span>Descargar (Acceso Total)</span>
  <span className="absolute inset-0 rounded-2xl border border-white/20 opacity-0
                    group-hover:opacity-100 transition-opacity duration-300" />
</a>


          {/* Botón Secundario */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl
                       bg-black/40 backdrop-blur-sm border-2 border-neon-cyan/80
                       text-white font-bold uppercase tracking-[0.25em] text-sm md:text-base
                       hover:bg-[#00FFFF22] hover:border-neon-cyan
                       transform hover:scale-[1.03] transition-all duration-300"
          >
            Añadir a Wishlist
          </a>
        </div>

        {/* Plataformas / mini texto extra */}
        <div className="pt-6 text-sm md:text-base text-gray-400 flex flex-col gap-2 items-center">
          <p className="uppercase tracking-[0.25em] text-gray-500">
            Próximamente en
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-300">
            <span className="px-4 py-1 rounded-full bg-black/40 border border-white/10">
              PC / Steam
            </span>
            <span className="px-4 py-1 rounded-full bg-black/40 border border-white/10">
              Movil
            </span>
            <span className="px-4 py-1 rounded-full bg-black/40 border border-white/10">
              Modo Arcade Local
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
