import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface PriceOption {
  type: "NORMAL" | "VIP" | "BACKSTAGE";
  price: string;
}

interface PriceEventSectionProps {
  prices: PriceOption[];
  isSoldOut?: boolean;
}

export const PriceEventSection = ({ prices, isSoldOut = false }: PriceEventSectionProps) => {
  const { t } = useTranslation();

  const defaultPrices: PriceOption[] = [
    {
      type: "NORMAL",
      price: "$50.000",
    },
    {
      type: "VIP",
      price: "$80.000",
    },
    {
      type: "BACKSTAGE",
      price: "$150.000",
    },
  ];

  const displayPrices = prices.length > 0 ? prices : defaultPrices;

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
              {t('prices.title')}
              <motion.span 
                className="absolute inset-0 text-[#84cc16] opacity-70 blur-sm"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  x: [-2, 2, -2],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                {t('prices.title')}
              </motion.span>
            </span>
          </motion.h2>
        </motion.div>

        {isSoldOut ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-red-900/40 border-2 border-red-500 px-12 py-6 backdrop-blur-sm">
              <p className="font-orbitron text-5xl md:text-6xl font-black text-red-500 animate-pulse">
                {t('prices.soldOut')}
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayPrices.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  y: -15,
                  boxShadow: '0 0 40px rgba(132, 204, 22, 0.6)'
                }}
                className="font-rajdhani group relative bg-black/80 backdrop-blur-sm border-2 border-gray-700 hover:border-[#84cc16] p-8 transition-all duration-500 overflow-hidden"
              >
                {/* Efecto cromado en las esquinas */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#84cc16]/40 via-white/20 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#84cc16]/40 via-white/20 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Efecto de escaneo */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#84cc16]/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Tipo de ticket con efecto neón */}
                <div className="text-center mb-8 relative z-10">
                  <motion.h3 
                    className="font-orbitron text-2xl font-black text-[#84cc16] tracking-widest group-hover:text-white transition-colors duration-300"
                    animate={{
                      textShadow: [
                        '0 0 5px rgba(132, 204, 22, 0.5)',
                        '0 0 15px rgba(132, 204, 22, 0.8)',
                        '0 0 5px rgba(132, 204, 22, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t(`tickets.${option.type.toLowerCase()}`)}
                  </motion.h3>
                  {/* Línea decorativa bajo el título */}
                  <motion.div 
                    className="w-16 h-px bg-gradient-to-r from-transparent via-[#84cc16] to-transparent mx-auto mt-3"
                    animate={{
                      scaleX: [0.5, 1, 0.5],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Precio con efecto cromado */}
                <div className="text-center relative z-10">
                  <motion.div 
                    className="font-orbitron text-6xl md:text-7xl font-black bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-[#84cc16] group-hover:via-white group-hover:to-[#84cc16] transition-all duration-500 mb-3"
                    whileHover={{
                      textShadow: '0 0 30px rgba(132, 204, 22, 0.8)'
                    }}
                  >
                    {option.price}
                  </motion.div>
                  <p className="font-rajdhani text-[#84cc16]/80 text-lg font-bold tracking-widest">{t('prices.currency')}</p>
                </div>

                {/* Bordes brillantes en hover */}
                <motion.div 
                  className="absolute inset-0 border-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(132, 204, 22, 0.3)',
                      '0 0 25px rgba(132, 204, 22, 0.6)',
                      '0 0 10px rgba(132, 204, 22, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Líneas decorativas en las esquinas */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hexágonos decorativos */}
                <div className="absolute top-4 right-4 w-6 h-6 border border-[#84cc16]/50 rotate-45 opacity-60 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border border-[#84cc16]/50 rotate-12 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};