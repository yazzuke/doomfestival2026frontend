import { motion } from "framer-motion";
import { doom2 } from "../assets";
import { logofestival } from "../assets/index";
import { PreRegisterSection } from "../components/sections/PreRegisterSection";
import { LineUpEventSection } from "../components/sections/LineUpDjSection";
import { PriceEventSection } from "../components/sections/PriceEventSection";
import { PhotosSection } from "../components/sections/PhotosSection";
import { useState, useEffect, useRef } from "react";
import { getDJs } from "../services/djService";
import type { DJ } from "../services/djService";

export const Home = () => {
  const [doomLineup, setDoomLineup] = useState<DJ[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchDJs = async () => {
      try {
        const djs = await getDJs();
        setDoomLineup(djs.sort((a, b) => a.order_position - b.order_position));
      } catch (error) {
        console.error('Error loading DJs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDJs();
  }, []);

  useEffect(() => {
    // Forzar reproducción del video en iOS
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Error al reproducir video:', error);
        }
      }
    };

    playVideo();

    // Intentar reproducir cuando la página sea visible
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current) {
        videoRef.current.play().catch(e => console.log('Video play error:', e));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const scrollToRegister = () => {
    document.getElementById("pre-register")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const doomPrices = [
    { type: "NORMAL" as const, price: "$50.000" },
    { type: "VIP" as const, price: "$80.000" },
    { type: "BACKSTAGE" as const, price: "$150.000" },
  ];

  return (
    <>
      {/* Hero Section con video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
        >
          <source src={doom2} type="video/mp4" />
        </video>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Logo Grande */}
            <motion.img
              src={logofestival}
              alt="DOOM Festival 2026"
              className="w-full max-w-4xl mx-auto mb-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Fecha y Ubicación en una sola línea */}
            <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[0.5em] uppercase mb-12">
              ABRIL 04 BOGOTÁ
            </h2>

            {/* Botón de compra con estilo neo-rave */}
            <motion.button
              onClick={scrollToRegister}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(132, 204, 22, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black font-bold py-4 px-12 text-lg tracking-wider transition-all duration-300 border-2 border-[#84cc16] overflow-hidden group"
            >
              <span className="font-rajdhani relative z-10">COMPRA TUS ENTRADAS AQUÍ</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sección de Pre-Registro */}
      <PreRegisterSection />
      
      {/* Sección de Line-Up con DJs de la API */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20 bg-black">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#84cc16] border-t-transparent rounded-full"
          />
          <p className="text-[#84cc16] text-xl ml-4">Cargando DJs...</p>
        </div>
      ) : doomLineup.length > 0 ? (
        <LineUpEventSection
          artists={doomLineup}
        />
      ) : (
        <div className="flex justify-center items-center py-20 bg-black">
          <p className="text-[#84cc16] text-xl">No hay DJs disponibles</p>
        </div>
      )}

      {/* Sección de Precios */}
      <PriceEventSection 
        prices={doomPrices}
        isSoldOut={false}
      />

      {/* Sección de Fotos */}
      <PhotosSection />
    </>
  );
};