import { Compass, Mail, Phone, MapPin, Instagram, Facebook, Award, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020817] text-white pt-20 pb-10 px-6 md:px-[8%] relative overflow-hidden text-sm border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-dourado/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
        
        {/* Leftmost Column - Brand statement */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-[#0B2F5B]">
              <span className="font-display font-bold text-lg text-white">V</span>
              <span className="font-display font-bold text-xl text-dourado shrink-0">D</span>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg leading-none tracking-tight">
                Viva <span className="text-dourado">Destinos</span>
              </h4>
              <span className="text-[9px] tracking-[0.2em] text-white/60 font-medium">
                E X P E R I E N C E
              </span>
            </div>
          </div>
          
          <p className="text-white/70 leading-relaxed font-light text-xs sm:text-sm">
            Nós conduzimos você e sua família às melhores experiências de lazer, conforto e diversão em Caldas Novas com segurança e planejamento exclusivo.
          </p>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-dourado hover:text-azul p-2 rounded-full transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-dourado hover:text-azul p-2 rounded-full transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Second Column - Quick Jumps */}
        <div className="lg:col-span-3 space-y-4">
          <h5 className="font-display font-bold text-sm uppercase tracking-wider text-dourado">
            Menu Navegação
          </h5>
          <ul className="space-y-2.5 text-white/80 font-light text-xs sm:text-sm">
            <li>
              <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dourado hover:underline transition-colors shrink-0 text-left cursor-pointer">
                Início Portal
              </button>
            </li>
            <li>
              <button onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dourado hover:underline transition-colors shrink-0 text-left cursor-pointer">
                Quiz Capitão Destino
              </button>
            </li>
            <li>
              <button onClick={() => document.getElementById('hoteis')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dourado hover:underline transition-colors shrink-0 text-left cursor-pointer">
                Portfólio de Hotéis
              </button>
            </li>
            <li>
              <button onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-dourado hover:underline transition-colors shrink-0 text-left cursor-pointer">
                Fazer Orçamento
              </button>
            </li>
          </ul>
        </div>

        {/* Third Column - Contact Info */}
        <div className="lg:col-span-3 space-y-4">
          <h5 className="font-display font-bold text-sm uppercase tracking-wider text-dourado">
            Canais de Atendimento
          </h5>
          <ul className="space-y-3 text-white/85 font-light text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="text-dourado shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">WhatsApp Comercial:</strong>
                <a href="https://wa.me/556421310045" className="hover:text-dourado transition-colors">
                  (64) 2131-0045
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="text-dourado shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">E-mail de Suporte:</strong>
                <a href="mailto:vivadestinosexperience@gmail.com" className="hover:text-dourado transition-colors">
                  vivadestinosexperience@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Fourth Column - Seals */}
        <div className="lg:col-span-2 space-y-4">
          <h5 className="font-display font-bold text-sm uppercase tracking-wider text-dourado">
            Selo de Ouro
          </h5>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-2.5 shadow-inner">
            <Award size={28} className="text-dourado shrink-0 animate-pulse" />
            <div className="leading-tight">
              <span className="font-semibold text-xs text-white block">Agência Ouro</span>
              <span className="text-[10px] text-white/60">Goiás Turismo</span>
            </div>
          </div>
        </div>

      </div>

      {/* Under footer layout copyrights and top scroll */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-white/50 text-xs gap-4">
        <p className="text-center sm:text-left leading-relaxed">
          &copy; {new Date().getFullYear()} <strong>Viva Destinos Experience</strong>. Todos os direitos reservados. <br />
          Conduzindo você às melhores experiências com carinho e responsabilidade.
        </p>

        <button
          onClick={handleScrollToTop}
          className="bg-white/5 hover:bg-dourado hover:text-azul border border-white/10 text-white p-3 rounded-full shadow cursor-pointer flex items-center gap-1 transition-all group shrink-0"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 duration-200" /> Topo
        </button>
      </div>
    </footer>
  );
}
