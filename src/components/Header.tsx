import { motion } from 'motion/react';
import MascotImage from './MascotImage';
import { Compass, Sparkles, MessageSquare, Ticket } from 'lucide-react';

export default function Header() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[92vh] flex flex-col justify-between bg-gradient-to-br from-azul via-[#082245] to-azul2 text-white overflow-hidden pb-12">
      {/* Decorative vector background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-dourado/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-azul2/50 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Sparkles in the sky */}
      <div className="absolute top-1/4 left-10 text-dourado/20 animate-bounce pointer-events-none">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-dourado/15 animate-pulse pointer-events-none hidden md:block">
        <Compass size={36} />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full px-6 md:px-[8%] py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 backdrop-blur-sm z-25">
        {/* Customized CSS Logo resembling the user's uploaded banner */}
        <div 
          onClick={() => handleScrollToSection('inicio')} 
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B2F5B] to-azul border border-dourado/30 overflow-visible">
            {/* Elegant V & D Initials */}
            <span className="font-display font-bold text-2xl tracking-tighter text-white mr-1 group-hover:scale-105 transition-transform">
              V
            </span>
            <span className="font-display font-bold text-3xl tracking-tighter text-dourado group-hover:scale-110 transition-transform">
              D
            </span>
            {/* Dotted flight trail */}
            <svg className="absolute -inset-2 w-18 h-18 overflow-visible pointer-events-none" viewBox="0 0 100 100">
              <path 
                d="M 10,75 C 10,50 30,20 85,25" 
                fill="none" 
                stroke="#D9A441" 
                strokeWidth="1.5" 
                strokeDasharray="4,4" 
              />
              <path 
                d="M 83,23 L 90,26 L 85,31 Z" 
                fill="#D9A441" 
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-xl md:text-2xl leading-none tracking-tight">
              Viva <span className="text-dourado">Destinos</span>
            </h1>
            <span className="text-[10px] md:text-xs tracking-[0.22em] text-white/80 font-medium">
              E X P E R I E N C E
            </span>
          </div>
        </div>

        {/* Action Menu */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
          <button 
            onClick={() => handleScrollToSection('quiz')} 
            className="hover:text-dourado font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles size={16} /> Quiz Inteligente
          </button>
          <button 
            onClick={() => handleScrollToSection('hoteis')} 
            className="hover:text-dourado font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Ticket size={16} /> Portfólio Hotéis
          </button>
          <button 
            onClick={() => handleScrollToSection('orcamento')} 
            className="hover:text-dourado font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <MessageSquare size={16} /> Fazer Orçamento
          </button>
        </div>
      </nav>

      {/* Main Hero Container */}
      <div id="inicio" className="max-w-[1400px] w-full mx-auto px-6 md:px-[8%] py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left text column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8"
        >
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-dourado border border-dourado/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase self-start shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="animate-spin" /> Seu destino está em boas mãos!
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-white">
            Viva Caldas Novas com <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado via-[#F5D084] to-dourado">
              diversão, conforto
            </span> <br /> e experiências únicas.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-light font-sans max-w-xl">
            Hotéis selecionados, parques aquáticos inclusos, lazer estruturado para toda a família e descanso inesquecível.
            Fale com um Consultor Exclusivo de Viagens e mude para sempre o seu jeito de viajar.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button 
              onClick={() => handleScrollToSection('quiz')} 
              className="bg-dourado text-azul hover:bg-white border-2 border-dourado font-bold px-8 py-4 rounded-full text-lg shadow-xl cursor-pointer hover:shadow-dourado/25 transition-all text-center flex items-center justify-center gap-2 group transform duration-300"
            >
              <Sparkles size={20} className="group-hover:rotate-12 duration-300" />
              Descobrir Hotel Ideal
            </button>
            <a 
              href="https://wa.me/556421310045?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+Consultor+Exclusivo+da+Viva+Destinos+Experience."
              target="_blank"
              rel="noreferrer"
              className="bg-transparent text-white hover:text-azul hover:bg-white border-2 border-white/40 hover:border-white font-semibold px-8 py-4 rounded-full text-lg text-center cursor-pointer transition-all duration-300 flex items-center justify-center gap-2"
            >
              Falar com Consultor
            </a>
          </div>

          {/* Social Proof Badges preview */}
          <div className="flex items-center gap-5 pt-6 text-white/60 text-xs tracking-wider border-t border-white/5">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-azul object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-azul object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-azul object-cover" />
            </div>
            <span>+15.000 clientes felizes em Caldas Novas</span>
          </div>
        </motion.div>

        {/* Right mascot column with wave animations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Decorative glowing backdrops behind mascot */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-dourado/20 to-azul2/40 blur-3xl -z-1" />
          
          <div className="relative animate-float flex flex-col items-center">
            <MascotImage size="xl" />
            
            {/* Mascot message bubble */}
            <div className="absolute top-2 -right-4 bg-white/10 hover:bg-white/15 px-4 py-2 text-xs md:text-sm text-white font-medium rounded-2xl rounded-bl-none border border-white/15 backdrop-blur-md shadow-2xl scale-95 origin-bottom-left max-w-44 select-none">
              <span className="text-dourado font-bold">Capitão Destino:</span>
              <p className="mt-0.5 text-[11px] leading-tight text-white/90">E aí! Prontos para as melhores termas?</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Curved Divider at the bottom */}
      <div className="w-full relative h-12 bg-white/5 border-t border-white/5 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-claro transform translate-y-10 rounded-[100%] scale-x-110" />
      </div>
    </header>
  );
}
