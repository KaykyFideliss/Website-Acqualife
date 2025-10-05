import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para mudar o background
  useEffect(() => {
    const handleScroll = () => {
      const scrolly = window.scrollY;
      setScrolled(scrolly > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
      className={`fixed top-0 left-0 w-full h-16 flex justify-center items-center z-40 transition-colors duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md " : "bg-transparent"
      }`}
    >
      {/* Links Desktop */}
      <div className="hidden md:flex justify-between items-center w-full px-8 pt-4">
        {/* Logo na esquerda */}
        <div>
          <Link to="/">
            <img src="/img/logo.png" alt="Foto-logo" className="pt-2 w-20 h-20"/>
          </Link>
        </div>

        {/* Links na direita */}
        <div className="flex gap-8 items-center">
          <Link
            className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando" 
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando"
            to="/sobre"
          >
            Sobre
          </Link>
          <Link
            className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando"
            to="/sistema"
          >
            Sistema
          </Link>
          <Link
            className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando"
            to="/download"
          >
            Download
          </Link>
        </div>
      </div>

      {/* Botão Mobile */}
      <button
        style={{ zIndex: 60 }}
        className="absolute right-4 md:hidden text-[#22333b] text-4xl"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white text-xl z-50"
          >
            <Link 
              to="/" 
              className="hover:text-[#6cc7f5] font-zalando text-[#22333b] text-2xl mb-4"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className="hover:text-[#6cc7f5] font-zalando text-[#22333b] text-2xl mb-4"
              onClick={() => setOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/sistema" 
              className="hover:text-[#6cc7f5] font-zalando text-[#22333b] text-2xl mb-4"
              onClick={() => setOpen(false)}
            >
              Sistema
            </Link>
            <Link 
              to="/download" 
              className="hover:text-[#6cc7f5] font-zalando text-[#22333b] text-2xl"
              onClick={() => setOpen(false)}
            >
              Download
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;