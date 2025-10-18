import { motion } from "framer-motion";
import { doom2, doom2mobile } from "../assets";
import { logofestival } from "../assets/index";
import { PreRegisterSection } from "../components/sections/PreRegisterSection";
import { LineUpEventSection } from "../components/sections/LineUpDjSection";
import { PriceEventSection } from "../components/sections/PriceEventSection";
import { PhotosSection } from "../components/sections/PhotosSection";
import { useState, useEffect, useRef } from "react";
import { getDJs } from "../services/djService";
import type { DJ } from "../services/djService";
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  const [doomLineup, setDoomLineup] = useState<DJ[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-04-04T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Detectar si es mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        console.log('Video playing');
      } catch (error) {
        console.log('Error playing video:', error);
        setTimeout(() => {
          video.play().catch(e => console.log('Retry failed:', e));
        }, 1000);
      }
    };

    const handleLoadedData = () => {
      console.log('Video loaded');
      playVideo();
    };

    const handleEnded = () => {
      console.log('Video ended, restarting');
      video.currentTime = 0;
      playVideo();
    };

    const handleStalled = () => {
      console.log('Video stalled, reloading');
      video.load();
      playVideo();
    };

    const handleSuspend = () => {
      console.log('Video suspended');
      playVideo();
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('suspend', handleSuspend);

    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('suspend', handleSuspend);
    };
  }, [isMobile]);

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
          src={isMobile ? doom2mobile : doom2}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center w-full"
          >
            {/* Logo Grande - MÁS GRANDE y mejor proporcionado */}
            <motion.img
              src={logofestival}
              alt={t('hero.title')}
              className="w-full max-w-[500px] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Fecha y Ubicación - Más pequeña */}
            <h2 className="font-orbitron text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 md:mb-8">
              {t('hero.date')}
            </h2>

            {/* Contador Regresivo - MÁS PEQUEÑO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6 sm:mb-8 md:mb-10 px-2"
            >
              <div className="flex justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-6 mb-4">
                {/* Días */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(132, 204, 22, 0.4)",
                        "0 0 40px rgba(132, 204, 22, 0.7)",
                        "0 0 20px rgba(132, 204, 22, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-black/70 border-[3px] border-[#84cc16] rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-5 lg:p-6 min-w-[65px] sm:min-w-[90px] md:min-w-[110px] lg:min-w-[120px] backdrop-blur-sm"
                  >
                    <span className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#84cc16] block leading-none">
                      {timeLeft.days}
                    </span>
                  </motion.div>
                  <span className="font-rajdhani text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1.5 sm:mt-2 tracking-wider sm:tracking-widest uppercase">
                    {t('hero.countdown.days')}
                  </span>
                </div>

                {/* Horas */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(132, 204, 22, 0.4)",
                        "0 0 40px rgba(132, 204, 22, 0.7)",
                        "0 0 20px rgba(132, 204, 22, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    className="bg-black/70 border-[3px] border-[#84cc16] rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-5 lg:p-6 min-w-[65px] sm:min-w-[90px] md:min-w-[110px] lg:min-w-[120px] backdrop-blur-sm"
                  >
                    <span className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#84cc16] block leading-none">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                  </motion.div>
                  <span className="font-rajdhani text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1.5 sm:mt-2 tracking-wider sm:tracking-widest uppercase">
                    {t('hero.countdown.hours')}
                  </span>
                </div>

                {/* Minutos */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(132, 204, 22, 0.4)",
                        "0 0 40px rgba(132, 204, 22, 0.7)",
                        "0 0 20px rgba(132, 204, 22, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    className="bg-black/70 border-[3px] border-[#84cc16] rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-5 lg:p-6 min-w-[65px] sm:min-w-[90px] md:min-w-[110px] lg:min-w-[120px] backdrop-blur-sm"
                  >
                    <span className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#84cc16] block leading-none">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </motion.div>
                  <span className="font-rajdhani text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1.5 sm:mt-2 tracking-wider sm:tracking-widest uppercase">
                    {t('hero.countdown.minutes')}
                  </span>
                </div>

                {/* Segundos */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(132, 204, 22, 0.4)",
                        "0 0 40px rgba(132, 204, 22, 0.7)",
                        "0 0 20px rgba(132, 204, 22, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="bg-black/70 border-[3px] border-[#84cc16] rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-5 lg:p-6 min-w-[65px] sm:min-w-[90px] md:min-w-[110px] lg:min-w-[120px] backdrop-blur-sm"
                  >
                    <span className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#84cc16] block leading-none">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </motion.div>
                  <span className="font-rajdhani text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-1.5 sm:mt-2 tracking-wider sm:tracking-widest uppercase">
                    {t('hero.countdown.seconds')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Botón de compra */}
            <motion.button
              onClick={scrollToRegister}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(132, 204, 22, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black font-bold py-3 px-6 sm:py-4 sm:px-12 md:py-5 md:px-14 text-sm sm:text-base md:text-lg tracking-wider transition-all duration-300 border-[3px] border-[#84cc16] overflow-hidden group w-[90%] sm:w-auto max-w-xl mx-auto rounded-lg"
            >
              <span className="font-rajdhani relative z-10 uppercase">{t('hero.buyButton')}</span>
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
          <p className="text-[#84cc16] text-xl ml-4">{t('loading')}</p>
        </div>
      ) : doomLineup.length > 0 ? (
        <LineUpEventSection
          artists={doomLineup}
        />
      ) : (
        <div className="flex justify-center items-center py-20 bg-black">
          <p className="text-[#84cc16] text-xl">{t('noDjs')}</p>
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