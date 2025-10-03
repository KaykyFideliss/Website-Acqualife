import { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para mudar o background
  useEffect(() => {
    const handleScroll = () => {
      const scrolly = window.scrollY;
      setScrolled(scrolly > 200);
      setIsVisible(scrolly > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 64;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  viewport={{ amount: 0.5 }}
  className={`fixed top-0 left-0 w-full h-16 flex justify-center items-center z-40 transition-colors duration-500 ${
    scrolled ? "bg-white/95 backdrop-blur-md " : "bg-transparent" //shadow-lg
  }`}
>
      {/* Links Desktop */}
<div className="hidden md:flex justify-between items-center w-full px-8 pt-4">
  {/* Logo na esquerda */}
  <div>
    <a href="/"><img src="/img/logo.png" alt="Foto-logo" className="pt-2 w-20 h-20"/></a>
  </div>

  {/* Links na direita */}
  <div className="flex gap-8 items-center">
    <a
      className=" text-sm tracking-wider transition-colors text-[#22333b]  hover:text-[#6cc7f5] font-zalando" 
      href="/"
  
    >
      Home
    </a>
    <a
      className="text-sm tracking-wider transition-colors  text-[#22333b] hover:text-[#6cc7f5] font-zalando"
      href="./Page-Download"
    >
      Download
    </a>
    <a
      className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando"
      href="#project"
      onClick={(e) => { e.preventDefault(); scrollToSection("project"); }}
    >
      Projetos e certificados
    </a>
    <a
      className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando"
      href="#Services"
      onClick={(e) => { e.preventDefault(); scrollToSection("Services"); }}
    >
      Serviço Contratáveis
    </a>
    <a
      className="text-sm tracking-wider transition-colors text-[#22333b] hover:text-[#6cc7f5] font-zalando"
      href="#stacks"
      onClick={(e) => { e.preventDefault(); scrollToSection("stacks"); }}
    >
      Minhas stacks
    </a>
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
    {["home", "about", "project", "Services", "stacks"].map((section, index) => (
        <motion.a
          key={section}
          href={`#${section}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="hover:text-[#ffffff] font-zalando text-[#22333b] text-2xl"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section);
            setOpen(false);
          }}
        >
             {section === "home"
      ? "Home"
      : section === "about"
      ? "Sobre"
      : section === "project"
      ? "Projetos e certificados"
      : section === "Services"
      ? "Serviços Contratáveis"
      : "Stacks"}
  </motion.a>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </motion.header>
  );
};


export default Navbar
