import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { DJ } from "../../services/djService";

interface AllDjsModalProps {
  isOpen: boolean;
  onClose: () => void;
  artists: DJ[];
}

export const AllDjsModal = ({ isOpen, onClose, artists }: AllDjsModalProps) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/98 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Partículas de fondo animadas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#84cc16] rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [null, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-7xl max-h-[95vh] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-[#84cc16] shadow-2xl shadow-[#84cc16]/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grid de fondo animado */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzIsIDIwNCwgMjIsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20" />
            
            {/* Líneas decorativas animadas en los bordes */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            {/* Header */}
            <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-xl border-b-2 border-[#84cc16] p-4 md:p-6">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1"
                >
                  <motion.h2 
                    className="text-2xl md:text-5xl font-black text-white tracking-wider font-orbitron"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(132, 204, 22, 0.5)',
                        '0 0 20px rgba(132, 204, 22, 0.8)',
                        '0 0 10px rgba(132, 204, 22, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t('lineup.allDjs')}
                  </motion.h2>
                  <motion.p 
                    className="text-[#84cc16] text-sm md:text-base mt-2 font-rajdhani tracking-wide"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t('lineup.totalArtists', { count: artists.length })}
                  </motion.p>
                </motion.div>
                
                <motion.button
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 md:p-3 rounded-full bg-[#84cc16] text-black hover:bg-white transition-all duration-300 shadow-lg shadow-[#84cc16]/50"
                >
                  <X size={24} className="font-bold" />
                </motion.button>
              </div>
            </div>

            {/* Content con scroll personalizado */}
            <div className="overflow-y-auto max-h-[calc(95vh-120px)] md:max-h-[calc(95vh-140px)] p-3 md:p-8 custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {artists.map((artist, index) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.03,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -12,
                      scale: 1.02,
                      boxShadow: '0 10px 40px rgba(132, 204, 22, 0.5)'
                    }}
                    className="group cursor-pointer relative overflow-hidden bg-black/80 backdrop-blur-sm border-2 border-gray-700 hover:border-[#84cc16] transition-all duration-500"
                  >
                    {/* Efecto de luz superior */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#84cc16]/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />

                    {/* Artist Image */}
                    <div className="relative h-48 md:h-72 overflow-hidden">
                      <motion.img
                        src={artist.image_url}
                        alt={artist.artist_name}
                        className="w-full h-full object-cover"
                        whileHover={{ 
                          scale: 1.15,
                          filter: "brightness(1.2) saturate(1.2)"
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Overlay con efecto de escaneo */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#84cc16]/30 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          y: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 0.5
                        }}
                      />
                      
                      {/* Degradado oscuro inferior */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Efectos de brillo en esquinas */}
                      <motion.div 
                        className="absolute top-0 right-0 w-20 h-20 bg-[#84cc16]/30 blur-3xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 w-20 h-20 bg-[#84cc16]/30 blur-3xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.4, delay: 0.1 }}
                      />

                      {/* Artist Name con efecto glitch */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 z-10">
                        <motion.h3 
                          className="font-rajdhani text-base md:text-2xl font-black text-white group-hover:text-[#84cc16] transition-colors tracking-wider relative"
                          whileHover={{
                            textShadow: '0 0 20px rgba(132, 204, 22, 1)'
                          }}
                        >
                          {artist.artist_name}
                          <motion.span
                            className="absolute inset-0 text-[#84cc16] opacity-0 group-hover:opacity-30 blur-sm"
                            animate={{
                              x: [-1, 1, -1],
                            }}
                            transition={{
                              duration: 0.2,
                              repeat: Infinity,
                            }}
                          >
                            {artist.artist_name}
                          </motion.span>
                        </motion.h3>
                      </div>
                    </div>

                    {/* Indicador de índice */}
                    <motion.div
                      className="absolute top-2 left-2 w-8 h-8 md:w-10 md:h-10 bg-[#84cc16]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-black font-black text-xs md:text-sm font-orbitron">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>

                    {/* Corner decorations animadas */}
                    <motion.div 
                      className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-[#84cc16] opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-[#84cc16] opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-[#84cc16] opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-[#84cc16] opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    {/* Borde pulsante */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-[#84cc16] opacity-0 group-hover:opacity-100 pointer-events-none"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(132, 204, 22, 0.3)',
                          '0 0 25px rgba(132, 204, 22, 0.7)',
                          '0 0 10px rgba(132, 204, 22, 0.3)'
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Footer con contador */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t-2 border-[#84cc16]/30 text-center"
              >
                <p className="text-[#84cc16] font-rajdhani text-lg md:text-xl tracking-wider">
                  {t('lineup.featuring')} <span className="font-black text-white text-2xl md:text-3xl">{artists.length}</span> {t('lineup.worldClass')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};