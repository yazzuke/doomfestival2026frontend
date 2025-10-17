import { motion } from "framer-motion";

import type { DJ } from "../../services/djService";

interface LineUpEventSectionProps {
  artists: DJ[];
  description?: string;
}

export const LineUpEventSection = ({ artists, description }: LineUpEventSectionProps) => {


  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Fondo con grid futurista */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzIsIDIwNCwgMjIsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20" />
  
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Título con efecto glitch */}
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider relative"
            animate={{
              textShadow: [
                '0 0 10px rgba(132, 204, 22, 0.5)',
                '0 0 20px rgba(132, 204, 22, 0.8)',
                '0 0 10px rgba(132, 204, 22, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-orbitron relative inline-block">
              LINE-UP
              <motion.span 
                className="absolute inset-0 text-[#84cc16] opacity-70 blur-sm"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  x: [-2, 2, -2],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
              </motion.span>
            </span>
          </motion.h2>
          
          {description && (
            <motion.p 
              className="text-[#84cc16] text-lg max-w-2xl mx-auto tracking-wide"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 0 30px rgba(132, 204, 22, 0.4)'
              }}
              className="group cursor-pointer relative overflow-hidden bg-black/60 backdrop-blur-sm border-2 border-gray-700 hover:border-[#84cc16] transition-all duration-300"
            >
              {/* Artist Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={artist.image_url}
                  alt={artist.artist_name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay con efecto de escaneo */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#84cc16]/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    y: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Degradado oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                
                {/* Efecto de brillo en esquinas */}
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 bg-[#84cc16]/30 blur-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-16 h-16 bg-[#84cc16]/30 blur-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Artist Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3 
                    className="font-rajdhani text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-[#84cc16] transition-colors tracking-wider"
                    whileHover={{
                      textShadow: '0 0 20px rgba(132, 204, 22, 0.8)'
                    }}
                  >
                    {artist.artist_name}
                  </motion.h3>
                </div>
              </div>

              {/* Hover Border Effect con glow verde */}
              <motion.div 
                className="absolute inset-0 border-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(132, 204, 22, 0.3)',
                    '0 0 20px rgba(132, 204, 22, 0.6)',
                    '0 0 10px rgba(132, 204, 22, 0.3)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Líneas decorativas en las esquinas */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};