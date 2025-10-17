import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Music, Mail, MapPin } from 'lucide-react';
import { logofestival } from '../../assets';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-doom-black border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-doom-black via-doom-dark to-doom-black opacity-50" />

      <div className="px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl">
            {/* Brand Section */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={logofestival} alt="DOOM" className="h-10 w-auto mb-6" />
              <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
                El epicentro del techno underground en Bogotá. 
                Eventos únicos, sonidos industriales y la escena más auténtica de la capital.
              </p>
              
              {/* Location & Email */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/50">
                  <MapPin size={16} className="text-doom-red" strokeWidth={1.5} />
                  <span className="text-xs tracking-wider uppercase font-medium">Bogotá, Colombia</span>
                </div>
                <a 
                  href="mailto:doombogota@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-doom-red transition-colors group"
                >
                  <Mail size={16} className="text-doom-red" strokeWidth={1.5} />
                  <span className="text-xs">doombogota@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Social & Links Combined */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">
                Síguenos
              </h3>
              
              {/* Social Links Horizontal */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://www.instagram.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Instagram"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-doom-red/20 transition-colors">
                    <Instagram size={18} strokeWidth={1.5} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a
                  href="https://facebook.com/doombogota/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Facebook"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-doom-red/20 transition-colors">
                    <Facebook size={18} strokeWidth={1.5} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@doombogota8006/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="YouTube"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-doom-red/20 transition-colors">
                    <Youtube size={18} strokeWidth={1.5} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a
                  href="https://soundcloud.com/doombogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="SoundCloud"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-doom-red/20 transition-colors">
                    <Music size={18} strokeWidth={1.5} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                </a>
              </div>

              {/* Quick Links Vertical */}
              <ul className="space-y-2">
                {[
                  { label: 'Privacy', href: '#' },
                  { label: 'Terms & Conditions', href: '#' },
                  { label: 'Press Kit', href: '#' }
                ].map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors inline-block font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar - Alineado a la izquierda */}
        <motion.div 
          className="border-t border-white/5 py-6 max-w-7xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-white/30 text-xs tracking-wider">
            © {currentYear} DOOM BOGOTÁ. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};