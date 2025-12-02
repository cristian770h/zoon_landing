import { Github, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 px-6 ">
      {/* Fondo dividido arriba/abajo con glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#040014]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#080018]" />

        {/* Glow central */}
        <div className="absolute inset-0 bg-gradient-to-b 
                        from-[#ff00ff33] via-[#00ffff22] to-transparent 
                        blur-3xl opacity-70" />
      </div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 
      bg-gradient-to-t from-transparent to-black" />

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center space-y-12">

        {/* Logo */}
        <h4 className="text-5xl md:text-6xl font-extrabold jersey-10-regular 
                       text-neon-cyan drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]
                       tracking-widest">
          ZOON GAME
        </h4>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-10">
          {["Inicio", "Historia", "Características", "Tráiler", "Descarga"].map(
            (item) => (
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .replace("á", "a")
                  .replace("í", "i")
                  .replace("ó", "o")}`}
                className="relative text-gray-300 uppercase text-sm tracking-widest 
                           hover:text-neon-scarlet transition-all duration-300 
                           after:absolute after:left-1/2 after:-bottom-1 
                           after:h-[2px] after:w-0 after:bg-neon-cyan 
                           after:transition-all after:duration-300 
                           hover:after:w-full hover:after:left-0"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Redes Sociales */}
        <div className="flex items-center gap-8">
          {[Github, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-3 rounded-xl border border-neon-cyan/40 
                         hover:border-neon-scarlet hover:bg-neon-cyan/10 
                         transition-all duration-300 
                         shadow-[0_0_15px_rgba(0,255,255,0.4)]
                         hover:shadow-[0_0_25px_rgba(255,0,120,0.7)]"
            >
              <Icon size={26} className="text-gray-300 hover:text-white" />
            </a>
          ))}
        </div>

        {/* Rights */}
        <p className="text-gray-500 text-sm text-center leading-relaxed max-w-lg">
          &copy; {new Date().getFullYear()} Zoon Game Studios.  
          <span className="block text-xs text-gray-600 mt-1 opacity-90">
            "Venganza Digital" es una marca registrada.
          </span>
        </p>
      </div>

      {/* Línea inferior neon */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r 
                      from-neon-cyan via-fuchsia-500 to-neon-scarlet opacity-60" />
    </footer>
  );
}
