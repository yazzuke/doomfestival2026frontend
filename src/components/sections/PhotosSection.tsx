import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play, Camera } from "lucide-react";
import {
  doomparty,
  doomparty2,
  doomparty3,
  doomparty4,
  domfestival,
  domfestival1,
  domfestival2,
  domfestival3,
  domfestival4,
} from "../../assets";

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: "doom2025" | "doom2024";
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    src: doomparty,
    thumbnail: doomparty,
    title: "Doom Festival 2024",
    description: "Una noche épica con Djs Internacionales",
    category: "doom2024",
  },
  {
    id: "2",
    type: "photo",
    src: doomparty2,
    thumbnail: doomparty2,
    title: "Doom Festival 2024",
    description: "Una noche épica con Djs Internacionales",
    category: "doom2024",
  },
  {
    id: "3",
    type: "photo",
    src: doomparty3,
    thumbnail: doomparty3,
      title: "Doom Festival 2024",
    description: "Una noche épica con Djs Internacionales",
    category: "doom2024",
  },
  {
    id: "4",
    type: "photo",
    src: doomparty4,
    thumbnail: doomparty4,
    title: "Doom Festival 2024",
    description: "Una noche épica con Djs Internacionales",
    category: "doom2024",
  },
  {
    id: "5",
    type: "photo",
    src: domfestival,
    thumbnail: domfestival,
    title: "Doom Festival 2025",
    description: "La comunidad techno de Bogotá",
    category: "doom2025",
  },
  {
    id: "6",
    type: "photo",
    src: domfestival1,
    thumbnail: domfestival1,
    title: "Doom Festival 2025",
    description: "La atmósfera única de DOOM",
    category: "doom2025",
  },
  {
    id: "7",
    type: "photo",
    src: domfestival2,
    thumbnail: domfestival2,
      title: "Doom Festival 2025",
    description: "La atmósfera única de DOOM",
    category: "doom2025",
  },
  {
    id: "8",
    type: "photo",
    src: domfestival3,
    thumbnail: domfestival3,
    title: "Doom Festival 2025",
    description: "La atmósfera única de DOOM",
    category: "doom2025",
  },
  {
    id: "9",
    type: "photo",
    src: domfestival4,
    thumbnail: domfestival4,
    title: "Doom Festival 2025",
    description: "La atmósfera única de DOOM",
    category: "doom2025",
  },
];

const categories = [
  { id: "all", name: "TODOS", icon: Camera },
  { id: "doom2025", name: "DOOM FESTIVAL 2025", icon: Camera },
  { id: "doom2024", name: "DOOM FESTIVAL 2024", icon: Camera },
];

export const PhotosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="galeria" className="relative py-20 bg-black overflow-hidden">
      {/* Fondo con grid futurista */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzIsIDIwNCwgMjIsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20" />

    

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Título con efecto glitch */}
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider relative"
            animate={{
              textShadow: [
                "0 0 10px rgba(132, 204, 22, 0.5)",
                "0 0 20px rgba(132, 204, 22, 0.8)",
                "0 0 10px rgba(132, 204, 22, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-orbitron relative inline-block">
              GALERÍA
              <motion.span
                className="absolute inset-0 text-[#84cc16] opacity-70 blur-sm"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  x: [-2, 2, -2],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
             
              </motion.span>
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-[#84cc16] to-transparent mx-auto mb-6"
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

  
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-rajdhani flex items-center gap-2 px-6 py-3 font-bold text-sm tracking-wider transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black border-2 border-[#84cc16]"
                    : "bg-black/60 backdrop-blur-sm border-2 border-gray-700 text-white hover:border-[#84cc16] hover:text-[#84cc16]"
                }`}
              >
                <Icon size={16} />
                {category.name}
                {selectedCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden aspect-square bg-black/60 backdrop-blur-sm border-2 border-gray-700 hover:border-[#84cc16] transition-all duration-300"
              onClick={() => openModal(item)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 30px rgba(132, 204, 22, 0.4)",
              }}
              layout
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
              />

              {/* Overlay con efecto de escaneo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#84cc16]/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black/80" />

              {/* Efectos de brillo en esquinas */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-[#84cc16]/30 blur-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-16 h-16 bg-[#84cc16]/30 blur-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <motion.h3
                    className="font-rajdhani font-bold text-lg mb-2 tracking-wide group-hover:text-[#84cc16] transition-colors"
                    whileHover={{
                      textShadow: "0 0 20px rgba(132, 204, 22, 0.8)",
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="font-rajdhani text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Type indicator con estilo neón */}
              <div className="absolute top-4 right-4 bg-black/80 p-2 rounded-full border border-[#84cc16]/30 group-hover:border-[#84cc16] group-hover:bg-[#84cc16]/20 transition-all duration-300">
                {item.type === "video" ? (
                  <Play
                    size={16}
                    className="text-white group-hover:text-[#84cc16] transition-colors"
                  />
                ) : (
                  <Camera
                    size={16}
                    className="text-white group-hover:text-[#84cc16] transition-colors"
                  />
                )}
              </div>

              {/* Hover Border Effect con glow verde */}
              <motion.div
                className="absolute inset-0 border-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(132, 204, 22, 0.3)",
                    "0 0 20px rgba(132, 204, 22, 0.6)",
                    "0 0 10px rgba(132, 204, 22, 0.3)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Líneas decorativas en las esquinas */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[#84cc16]/80 text-sm mb-6 tracking-widest"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ¿LISTO PARA VIVIR LA EXPERIENCIA?
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(132, 204, 22, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-black font-bold tracking-widest transition-all duration-300 border-2 border-[#84cc16] overflow-hidden group"
          >
            <span className="relative z-10">ÚNETE AL PRÓXIMO EVENTO</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal con estética neo-rave */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-black/80 backdrop-blur-sm border-2 border-[#84cc16]/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button con estilo neón */}
            <motion.button
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 text-white border border-[#84cc16]/30 hover:bg-[#84cc16]/20 hover:border-[#84cc16] hover:text-[#84cc16] transition-all duration-300"
            >
              <X size={20} />
            </motion.button>

            {/* Modal content */}
            <div className="aspect-video relative overflow-hidden">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              {/* Efecto de glow en la imagen */}
              <div className="absolute inset-0 border-2 border-[#84cc16]/20" />
            </div>

            {/* Modal info */}
            <div className="p-6 border-t-2 border-[#84cc16]/30 bg-black/60">
              <motion.h3
                className="text-white font-bold text-xl mb-2 tracking-wide"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(132, 204, 22, 0.5)",
                    "0 0 10px rgba(132, 204, 22, 0.8)",
                    "0 0 5px rgba(132, 204, 22, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {selectedItem.title}
              </motion.h3>
              <p className="text-[#84cc16]/80 text-sm">
                {selectedItem.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
