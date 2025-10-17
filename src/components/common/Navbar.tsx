import { motion, AnimatePresence, type Variants, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logofestival } from '../../assets';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '../../routes/routes.config';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  useEffect(() => {
    const event = new CustomEvent('mobileMenuToggle', { detail: { isOpen: isMenuOpen } });
    window.dispatchEvent(event);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'eventos', label: 'HOME' },
    { id: 'galeria', label: 'TICKETS' },
    { id: 'registro', label: 'LINEUP' },
    { id: 'contacto', label: 'INFO' },
    { id: 'extras', label: 'GALLERY' },
    { id: 'extras2', label: 'CONTACT' }
  ];

  const menuVariants: Variants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 30, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: 'spring' as const,
        stiffness: 300,
        damping: 24
      }
    })
  };

  const overlayVariants: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-doom-black lg:bg-transparent"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between h-20 lg:h-24 px-0">
          {/* Logo */}
          <motion.div 
            className="flex items-center z-50 pl-6 lg:pl-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <button 
              onClick={handleLogoClick}
              className="cursor-pointer"
            >
              <img 
                src={logofestival} 
                alt="DOOM" 
                className="h-6 lg:h-12 w-auto filter drop-shadow-2xl" 
              />
            </button>
          </motion.div>

          {/* Hamburger Menu - Negro en mobile, Blanco en desktop */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 bg-doom-black lg:bg-white text-white lg:text-black transition-colors duration-300 h-20 lg:h-24 px-6 lg:px-8 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isMenuOpen ? (
              <X size={24} className="lg:w-7 lg:h-7" strokeWidth={2} />
            ) : (
              <Menu size={24} className="lg:w-7 lg:h-7" strokeWidth={2} />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Lateral Minimalista */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-doom-black z-40"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="h-full flex flex-col justify-center px-10 lg:px-12">
              <nav className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => scrollToSection(item.id)}
                    className="group block w-full text-left py-2"
                  >
                    <span className="text-3xl lg:text-4xl font-bold text-white/90 group-hover:text-white transition-all duration-200 tracking-tight uppercase">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Footer minimalista */}
              <motion.div
                className="absolute bottom-10 left-10 lg:left-12 text-white/30 text-xs space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="tracking-wider">DOOM BOGOTÁ 2025</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};