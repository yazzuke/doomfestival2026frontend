import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Music } from 'lucide-react';
import { logofestival } from '../../assets';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-2 border-[#84cc16]/30 overflow-hidden">
      {/* Fondo simple */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black opacity-90" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center lg:items-start">
            
            {/* Left - Logo - Centrado en mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <img 
                src={logofestival} 
                alt="DOOM Festival Logo"
                className="w-64 md:w-80 mb-6"
              />
            </motion.div>

            {/* Center - DOOM FESTIVAL Social - Centrado en mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <h3 className="font-orbitron text-white font-black text-base md:text-lg mb-6 tracking-widest text-center lg:text-left">
                DOOM FESTIVAL
              </h3>
              
              {/* Línea decorativa */}
              <div className="w-16 h-px bg-[#84cc16] mb-6" />

              <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://www.instagram.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Instagram size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Facebook size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Youtube size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Music size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - DOOM BOGOTÁ Social - Centrado en mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <h3 className="font-orbitron text-white font-black text-base md:text-lg mb-6 tracking-widest text-center lg:text-left">
                DOOM BOGOTÁ
              </h3>
              
              {/* Línea decorativa */}
              <div className="w-16 h-px bg-[#84cc16] mb-6" />

              <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://www.instagram.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Instagram size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Facebook size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Youtube size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#84cc16]/30 flex items-center justify-center group-hover:bg-[#84cc16]/20 group-hover:border-[#84cc16] transition-all duration-300">
                    <Music size={18} strokeWidth={1.5} className="text-white/80 group-hover:text-[#84cc16] transition-colors md:w-5 md:h-5" />
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
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-4">
            <p className="font-rajdhani text-white/40 text-xs tracking-wider text-center">
              © {currentYear} DOOM BOGOTÁ. All rights reserved.
            </p>
            
            <p className="font-rajdhani text-white/30 text-xs tracking-widest uppercase text-center">
              Website by{' '}
              <a 
                href="#" 
                className="text-[#84cc16]/80 hover:text-[#84cc16] transition-colors font-bold"
              >
                MIRAI DEV
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};