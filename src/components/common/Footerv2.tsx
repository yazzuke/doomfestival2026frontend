import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Music } from 'lucide-react';
import { logofestival } from '../../assets';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-2 border-[#84cc16]/30 overflow-hidden">
      {/* Fondo con grid futurista */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzIsIDIwNCwgMjIsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20" />
      
      {/* Partículas flotantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#84cc16] rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * 300,
            opacity: 0.3
          }}
          animate={{
            y: [null, Math.random() * -50, Math.random() * 50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Línea brillante superior */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left - Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <motion.img 
                src={logofestival} 
                alt="DOOM Festival Logo"
                className="w-64 mb-6"
                animate={{
                  filter: [
                    'drop-shadow(0 0 5px rgba(132, 204, 22, 0.3))',
                    'drop-shadow(0 0 15px rgba(132, 204, 22, 0.6))',
                    'drop-shadow(0 0 5px rgba(132, 204, 22, 0.3))'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
     
            </motion.div>

            {/* Center - DOOM FESTIVAL Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <motion.h3 
                className="text-white font-black text-lg mb-6 tracking-widest"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(132, 204, 22, 0.5)',
                    '0 0 10px rgba(132, 204, 22, 0.8)',
                    '0 0 5px rgba(132, 204, 22, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                DOOM FESTIVAL
              </motion.h3>
              
              {/* Línea decorativa */}
              <motion.div 
                className="w-16 h-px bg-gradient-to-r from-[#84cc16] to-transparent mb-6"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Instagram size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://facebook.com/doombogota/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Facebook size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@doombogota8006/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Youtube size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://soundcloud.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="SoundCloud"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Music size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - DOOM BOGOTÁ Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <motion.h3 
                className="text-white font-black text-lg mb-6 tracking-widest"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(132, 204, 22, 0.5)',
                    '0 0 10px rgba(132, 204, 22, 0.8)',
                    '0 0 5px rgba(132, 204, 22, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                DOOM BOGOTÁ
              </motion.h3>
              
              {/* Línea decorativa */}
              <motion.div 
                className="w-16 h-px bg-gradient-to-r from-[#84cc16] to-transparent mb-6"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Instagram size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://facebook.com/doombogota/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Facebook size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@doombogota8006/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Youtube size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://soundcloud.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="SoundCloud"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                    <Music size={20} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Bottom Copyright Bar */}
        <motion.div 
          className="border-t border-[#84cc16]/20 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-white/40 text-xs tracking-wider"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              © {currentYear} DOOM BOGOTÁ. All rights reserved.
            </motion.p>
            
            <motion.p 
              className="text-white/30 text-xs tracking-widest uppercase"
              whileHover={{ 
                color: 'rgba(132, 204, 22, 0.8)',
                textShadow: '0 0 10px rgba(132, 204, 22, 0.6)'
              }}
            >
              Website by{' '}
              <a 
                href="#" 
                className="text-[#84cc16]/80 hover:text-[#84cc16] transition-colors font-bold"
              >
                MIRAI DEV
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Efecto de brillo inferior */}
      <motion.div 
        className="absolute bottom-0 left-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
        style={{ translateX: '-50%' }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  );
};