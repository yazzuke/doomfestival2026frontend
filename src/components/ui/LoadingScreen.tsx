import { motion } from 'framer-motion';
import { logoblanco } from '../../assets';

interface LoadingScreenProps {
  isVisible: boolean;
}

export const LoadingScreen = ({ isVisible }: LoadingScreenProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-doom-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.img 
          src={logoblanco} 
          alt="DOOM" 
          className="h-24 w-auto mx-auto mb-8 filter drop-shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.div
          className="flex items-center justify-center space-x-2 text-doom-red"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-2 h-2 bg-doom-red rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-doom-red rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-doom-red rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>
        
        <motion.p 
          className="text-white/70 mt-4 text-sm font-light tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          CARGANDO...
        </motion.p>
      </div>
    </motion.div>
  );
};