import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="bg-black/80 backdrop-blur-md border-2 border-[#84cc16] rounded-full w-14 h-14 flex items-center justify-center overflow-hidden shadow-lg shadow-[#84cc16]/30 relative"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 30px rgba(132, 204, 22, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      title={i18n.language === 'es' ? 'Change to English' : 'Cambiar a Español'}
    >
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#84cc16]/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Globe icon con el código de idioma superpuesto */}
        <div className="relative">
          <Globe className="text-[#84cc16]" size={28} strokeWidth={2.5} />
          <motion.span 
            className="absolute inset-0 flex items-center justify-center font-orbitron text-xs font-black text-black bg-[#84cc16] rounded-full w-6 h-6 m-auto"
            key={i18n.language}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 200
            }}
          >
            {i18n.language.toUpperCase()}
          </motion.span>
        </div>
      </div>

      {/* Anillo pulsante */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#84cc16]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};    