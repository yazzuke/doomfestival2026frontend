import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 bg-black/80 backdrop-blur-md border-2 border-[#84cc16] rounded-full w-16 h-16 flex flex-col items-center justify-center overflow-hidden shadow-lg shadow-[#84cc16]/30"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 30px rgba(132, 204, 22, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
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
      <div className="relative z-10 flex flex-col items-center">
        {/* Bandera */}
        <span className="text-2xl mb-0.5">
          {i18n.language === 'es' ? '🇪🇸' : '🇺🇸'}
        </span>
        
        {/* Código de idioma - Muestra ambos idiomas */}
        <motion.span 
          className="font-orbitron text-[10px] font-bold text-[#84cc16]"
          key={i18n.language}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          ES / EN
        </motion.span>
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