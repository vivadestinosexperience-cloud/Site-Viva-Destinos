import { motion } from 'motion/react';
import { MapPin, Compass, Waves, Trees, Palmtree, ArrowRight } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  state: string;
  headline: string;
  description: string;
  image: string;
  icon: any;
  highlightBadge: string;
  hotelsCount: number;
  slug: 'todos' | 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam';
  features: string[];
}

interface DestinationsShowcaseProps {
  setActiveTab: (tab: 'todos' | 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam') => void;
}

export default function DestinationsShowcase({ setActiveTab }: DestinationsShowcaseProps) {
  const destinations: Destination[] = [
    {
      id: 'caldas',
      name: 'Caldas Novas',
      state: 'GO',
      headline: 'A Maior Estância Hidrotermal do Mundo',
      description: 'O verdadeiro paraíso das águas quentes nacionais. Um destino vibrante focado em famílias, com dezenas de piscinas termais 24h, parques aquáticos infantis monumentais e uma gastronomia regional acolhedora.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=650&q=80',
      icon: Waves,
      highlightBadge: 'Águas Termais 24h',
      hotelsCount: 10,
      slug: 'todos', // points back to general Caldas hotels
      features: ['Parques Inclusos', 'Piscinas de Ondas', 'Ideal para Família'],
    },
    {
      id: 'olimpia',
      name: 'Olímpia',
      state: 'SP',
      headline: 'A Capital Nacional do Folclore e Águas Quentes',
      description: 'O principal polo turístico de águas quentes do estado de São Paulo. Lar de resorts super modernos e do famoso Parque Aquático Hot Beach, com praias artificiais de areia branca e infraestrutura premium impecável.',
      image: 'https://images.unsplash.com/photo-1582650625119-3a11f841630b?auto=format&fit=crop&w=650&q=80',
      icon: Compass,
      highlightBadge: 'Hot Beach Incluso',
      hotelsCount: 2,
      slug: 'olimpia',
      features: ['Areia Branca', 'Resorts Gigantes', 'Monitoria Infantil'],
    },
    {
      id: 'rioquente',
      name: 'Rio Quente',
      state: 'GO',
      headline: 'Natureza Exuberante & Águas Correntes Termais',
      description: 'Um refúgio ecológico sem paralelos encravado aos pés da Serra de Caldas. Possui rios naturais inteiramente de águas quentes e cristalinas com correntes relaxantes, além da famosa rede de lazer do Rio Quente Resorts.',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=650&q=80',
      icon: Trees,
      highlightBadge: 'Rios de Águas Quentes',
      hotelsCount: 2,
      slug: 'rio-quente',
      features: ['Natureza Preservada', 'Hidromassagem Natural', 'Acesso Parque das Fontes'],
    },
    {
      id: 'sauipe',
      name: 'Costa do Sauípe',
      state: 'BA',
      headline: 'O Paraíso All-Inclusive no Litoral Baiano',
      description: 'O destino ideal para um descanso inesquecível de classe mundial no nordeste brasileiro. Combina dunas exuberantes, coqueirais infinitos, alta culinária inclusa e infraestrutura estonteante com brisa do mar.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=650&q=80',
      icon: Palmtree,
      highlightBadge: 'All-Inclusive Premium',
      hotelsCount: 1,
      slug: 'sauipe',
      features: ['Pé na Areia', 'Open Bar & Food', 'Vila de Entretenimento'],
    },
  ];

  const handleDestinationClick = (slug: typeof destinations[0]['slug']) => {
    setActiveTab(slug);
    const element = document.getElementById('hoteis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="destinos" className="py-24 bg-white px-6 md:px-[8%] relative overflow-hidden">
      {/* Dynamic graphic backgrounds */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-dourado/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-azul/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title area */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-dourado text-sm font-bold tracking-widest uppercase block animate-pulse">
            Sua Próxima Viagem Começa Aqui
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul leading-tight">
            Explore os <span className="text-dourado">Destinos de Prestígio</span> da Viva Destinos
          </h2>
          <div className="w-16 h-1 bg-dourado mx-auto rounded-full" />
          <p className="text-gray-650 leading-relaxed font-light text-sm sm:text-base">
            Seja na calmaria terapêutica das águas termais, no agito ensolarado dos parques de Olímpia ou no cenário paradisíaco da Bahia, garantimos a melhor assessoria e conforto.
          </p>
        </div>

        {/* Bento Grid layout of Destinations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((dest, idx) => {
            const IconComponent = dest.icon;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative h-[420px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-end p-6 md:p-8 hover:shadow-2xl transition-all duration-500"
              >
                {/* Background image & gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 block group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Master luxurious gradient from transparent to deep blue overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05152b] via-[#05152b]/60 to-black/20 group-hover:opacity-95 transition-opacity" />
                </div>

                {/* Top decorative badges */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="bg-dourado text-azul text-xs font-bold px-3 py-1 rounded-full shadow-md leading-none flex items-center gap-1">
                    <IconComponent size={12} />
                    {dest.highlightBadge}
                  </span>
                  <span className="bg-white/15 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {dest.hotelsCount} {dest.hotelsCount === 1 ? 'Empreendimento' : 'Empreendimentos'}
                  </span>
                </div>

                {/* Content info wrapper */}
                <div className="relative z-10 space-y-3 text-white">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-none">
                      {dest.name}
                    </h3>
                    <span className="text-dourado font-mono font-medium text-sm">
                      — {dest.state}
                    </span>
                  </div>

                  <p className="text-dourado/90 font-display text-sm font-semibold tracking-wide uppercase">
                    {dest.headline}
                  </p>

                  <p className="text-white/80 font-sans text-xs md:text-sm font-light leading-relaxed max-w-xl group-hover:text-white transition-colors duration-300">
                    {dest.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 pb-1">
                    {dest.features.map((feat) => (
                      <span key={feat} className="text-[10px] md:text-xs text-white/70 bg-white/5 border border-white/15 px-2.5 py-0.5 rounded-md leading-relaxed font-sans">
                        • {feat}
                      </span>
                    ))}
                  </div>

                  {/* Interactivity triggers */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => handleDestinationClick(dest.slug)}
                      className="inline-flex items-center gap-2 text-dourado hover:text-white font-bold text-sm md:text-base cursor-pointer tracking-wider transition-colors duration-300 group/btn"
                    >
                      Explorar Hotéis Selecionados
                      <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-white/30 text-xs font-mono uppercase tracking-widest hidden sm:inline select-none">
                      Viva Destinos
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
