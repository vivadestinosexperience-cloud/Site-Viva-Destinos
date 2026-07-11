import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Star, Sparkles, Filter, Sliders, Eye } from 'lucide-react';
import { HOTELS_DATA } from '../data/hotelsData';
import { Hotel } from '../types';

interface HotelCatalogProps {
  onOpenHotelDetail: (hotel: Hotel) => void;
  activeTab: 'todos' | 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam' | 'beach-park' | 'amarante';
  setActiveTab: (tab: 'todos' | 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam' | 'beach-park' | 'amarante') => void;
}

// Map hotel category to City & State location
export const getHotelLocation = (hotel: { category: string; id: string }) => {
  switch (hotel.category) {
    case 'lagoa':
    case 'diroma':
    case 'viver-caldas':
    case 'ctc':
    case 'wam':
      return { city: 'Caldas Novas', state: 'GO' };
    case 'rio-quente':
      return { city: 'Rio Quente', state: 'GO' };
    case 'olimpia':
      return { city: 'Olímpia', state: 'SP' };
    case 'sauipe':
      return { city: 'Costa do Sauípe', state: 'BA' };
    case 'beach-park':
      return { city: 'Aquiraz', state: 'CE' };
    case 'amarante':
      if (hotel.id.includes('maceio')) {
        return { city: 'Maceió', state: 'AL' };
      }
      if (hotel.id.includes('japaratinga')) {
        return { city: 'Japaratinga', state: 'AL' };
      }
      if (hotel.id.includes('maragogi')) {
        return { city: 'Maragogi', state: 'AL' };
      }
      return { city: 'Maceió', state: 'AL' };
    default:
      return { city: 'Caldas Novas', state: 'GO' };
  }
};

// Map category to main city helper for compatibility checks
const getCategoryDestination = (category: string) => {
  switch (category) {
    case 'lagoa':
    case 'diroma':
    case 'viver-caldas':
    case 'ctc':
    case 'wam':
      return 'Caldas Novas';
    case 'rio-quente':
      return 'Rio Quente';
    case 'olimpia':
      return 'Olímpia';
    case 'sauipe':
      return 'Costa do Sauípe';
    case 'beach-park':
      return 'Aquiraz';
    case 'amarante':
      return 'Maceió';
    default:
      return 'Caldas Novas';
  }
};

interface HotelCardProps {
  key?: string;
  hotel: Hotel;
  onOpenHotelDetail: (hotel: Hotel) => void;
}

function HotelCard({ hotel, onOpenHotelDetail }: HotelCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const loc = getHotelLocation(hotel);

  // Auto cycle images when hovered
  useEffect(() => {
    if (!isHovered || hotel.images.length <= 1) {
      setCurrentImgIndex(0); // Reset when not hovered
      return;
    }

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % Math.min(hotel.images.length, 3)); // Cycle through first 3 images on hover
    }, 2000); // Friendly 2-second interval

    return () => clearInterval(interval);
  }, [isHovered, hotel.images.length]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      id={`hotel-card-${hotel.id}`}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 cursor-pointer flex flex-col justify-between group transition-shadow duration-300"
      onClick={() => onOpenHotelDetail(hotel)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hotel Cover Image */}
      <div className="relative h-60 overflow-hidden bg-gray-200">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImgIndex}
            src={hotel.images[currentImgIndex]}
            alt={hotel.name}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 1, scale: isHovered ? 1.08 : 1.02 }}
            exit={{ opacity: 0.5 }}
            transition={{ 
              opacity: { duration: 0.5, ease: 'easeInOut' },
              scale: { duration: 3.5, ease: 'linear' }
            }}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Category overlay label */}
        <span className="absolute top-4 left-4 bg-azul/90 text-dourado border border-dourado/30 backdrop-blur-md text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full shadow z-10">
          {hotel.categoryLabel}
        </span>

        {/* Highlight overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/55 text-white/95 text-[11px] sm:text-xs tracking-medium px-4 py-2 rounded-xl backdrop-blur-xs font-light z-10">
          ⭐ {hotel.highlight}
        </div>

        {/* Small slide progress indicators on hover */}
        {isHovered && hotel.images.length > 1 && (
          <div className="absolute top-4 right-4 flex gap-1 bg-black/40 px-2 py-1.5 rounded-full backdrop-blur-md z-10 animate-fade-in">
            {Array.from({ length: Math.min(hotel.images.length, 3) }).map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImgIndex === i ? 'bg-dourado scale-110' : 'bg-white/50'}`} 
              />
            ))}
          </div>
        )}
      </div>

      {/* Hotel Descriptions Content */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Visual location indicator */}
          <div className="flex items-center gap-1 text-gray-400 text-[11px] font-semibold tracking-wider uppercase select-none">
            <MapPin size={11} className="text-dourado shrink-0" />
            <span>{loc.city} - {loc.state}</span>
          </div>
          
          <h3 className="font-display font-bold text-xl md:text-2xl text-azul group-hover:text-dourado transition-colors leading-tight">
            {hotel.name}
          </h3>
          <p className="text-gray-550 leading-relaxed font-sans font-light text-xs sm:text-sm line-clamp-3">
            {hotel.tagline}
          </p>
        </div>

        {/* Micro features grid */}
        <div className="flex flex-wrap gap-1.5 pt-2 select-none">
          {hotel.features.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="bg-gray-150/70 text-gray-650 text-[10px] font-semibold px-2.5 py-1 rounded"
            >
              {feat}
            </span>
          ))}
          {hotel.features.length > 3 && (
            <span className="bg-azul/5 text-azul text-[10px] font-extrabold px-2 py-1 rounded">
              +{hotel.features.length - 3} mais
            </span>
          )}
        </div>
      </div>

      {/* Trigger Buttons Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenHotelDetail(hotel);
          }}
          className="w-full bg-dourado hover:bg-azul hover:text-white text-azul font-bold py-3.5 px-4 rounded-full flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all duration-200 font-display uppercase tracking-wider text-xs"
        >
          <Eye size={15} /> Ver Fotos e Detalhes
        </button>
      </div>
    </motion.div>
  );
}

export default function HotelCatalog({ onOpenHotelDetail, activeTab, setActiveTab }: HotelCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeature, setSelectedFeature] = useState<string>('todos');
  const [selectedDestination, setSelectedDestination] = useState<string>('todos');

  // Key feature tags for rapid filtration
  const quickFilters = useMemo(() => [
    { label: 'Todos os Lazer', value: 'todos' },
    { label: 'Parque Grátis', value: 'Acesso Grátis' },
    { label: 'Piscinas 24h', value: 'Piscinas 24h' },
    { label: 'Recreação', value: 'Recreação' },
    { label: 'Casal', value: 'casal' },
    { label: 'Grupo/Família', value: 'família' }
  ], []);

  // List of distinct destinations
  const destinations = useMemo(() => [
    { label: 'Todos os Destinos', value: 'todos' },
    { label: 'Caldas Novas - GO', value: 'Caldas Novas' },
    { label: 'Rio Quente - GO', value: 'Rio Quente' },
    { label: 'Olímpia - SP', value: 'Olímpia' },
    { label: 'Aquiraz - CE', value: 'Aquiraz' },
    { label: 'Costa do Sauípe - BA', value: 'Costa do Sauípe' },
    { label: 'Maceió - AL', value: 'Maceió' },
    { label: 'Japaratinga - AL', value: 'Japaratinga' },
    { label: 'Maragogi - AL', value: 'Maragogi' }
  ], []);

  // Filter algorithmic logic
  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      // 1. Destination check
      let matchesDestination = true;
      if (selectedDestination !== 'todos') {
        const loc = getHotelLocation(hotel);
        matchesDestination = loc.city === selectedDestination;
      }

      // 2. Category check
      const matchesTab = activeTab === 'todos' || hotel.category === activeTab;
      
      // 3. Search check
      const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            hotel.tagline.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            hotel.description.toLowerCase().includes(searchTerm.toLowerCase());

      // 4. Quick properties check
      let matchesFeature = true;
      if (selectedFeature !== 'todos') {
        const query = selectedFeature.toLowerCase();
        
        // Check either in direct properties or target tags
        const inFeatures = hotel.features.some(f => f.toLowerCase().includes(query));
        const tagsMatch = hotel.bestFor === query || hotel.id.includes(query);
        
        // Ad-hoc calculations
        const freeParquesMatch = query === 'acesso grátis' && (
          hotel.features.some(f => f.toLowerCase().includes('parque')) || 
          hotel.id === 'lagoa-quente' || 
          hotel.id === 'lacqua-diroma'
        );

        matchesFeature = inFeatures || tagsMatch || freeParquesMatch;
      }

      return matchesDestination && matchesTab && matchesSearch && matchesFeature;
    });
  }, [searchTerm, activeTab, selectedFeature, selectedDestination]);

  // Group filtered hotels by City and State for separation
  const groupedHotels = useMemo(() => {
    const groups: { [key: string]: { city: string; state: string; hotels: Hotel[] } } = {};
    
    filteredHotels.forEach((hotel) => {
      const { city, state } = getHotelLocation(hotel);
      const key = `${city} - ${state}`;
      
      if (!groups[key]) {
        groups[key] = { city, state, hotels: [] };
      }
      groups[key].hotels.push(hotel);
    });
    
    return groups;
  }, [filteredHotels]);

  // Reset helper
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedFeature('todos');
    setSelectedDestination('todos');
    setActiveTab('todos');
  };

  return (
    <section id="hoteis" className="py-24 bg-claro px-6 md:px-[8%] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title area */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-dourado text-sm font-bold tracking-widest uppercase block">
            Portfólio de Elite
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul leading-tight">
            Nossos Hotéis e <span className="text-dourado">Empreendimentos Selecionados</span>
          </h2>
          <div className="w-16 h-1 bg-dourado mx-auto rounded-full" />
          <p className="text-gray-650 max-w-lg mx-auto text-sm sm:text-base font-light">
            Clique em qualquer hotel para explorar a galeria completa de fotos, ficha técnica e dicas secretas exclusivas do Capitão Destino.
          </p>
        </div>

        {/* Dashboard filter center */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-6">
          
          {/* A. Destination Selector (Cidade & Estado) */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-azul flex items-center gap-1.5 px-1">
              <MapPin size={14} className="text-dourado" /> 1. Escolha o Destino (Cidade & Estado)
            </span>
            <div className="flex bg-gray-50 p-1.5 pb-3 rounded-2xl overflow-x-auto gap-1 select-none custom-scrollbar-x">
              {destinations.map((dest) => {
                const count = dest.value === 'todos' 
                  ? HOTELS_DATA.length 
                  : HOTELS_DATA.filter(h => getHotelLocation(h).city === dest.value).length;
                
                return (
                  <button
                    key={dest.value}
                    onClick={() => {
                      setSelectedDestination(dest.value);
                      // Reset network tab if it's incompatible with the newly selected destination
                      if (dest.value !== 'todos' && activeTab !== 'todos') {
                        if (activeTab === 'amarante') {
                          if (dest.value !== 'Maceió' && dest.value !== 'Japaratinga' && dest.value !== 'Maragogi') {
                            setActiveTab('todos');
                          }
                        } else {
                          const categoryDest = getCategoryDestination(activeTab);
                          if (categoryDest !== dest.value) {
                            setActiveTab('todos');
                          }
                        }
                      }
                    }}
                    className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm cursor-pointer transition-all shrink-0 whitespace-nowrap ${selectedDestination === dest.value ? 'bg-azul text-dourado shadow-md' : 'text-gray-500 hover:text-azul hover:bg-gray-100'}`}
                  >
                    {dest.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* B. Brand/Network Selector */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-azul flex items-center gap-1.5 px-1">
              <Sparkles size={14} className="text-dourado" /> 2. Escolha por Rede ou Parque
            </span>
            <div className="flex bg-gray-50 p-1.5 pb-3 rounded-2xl overflow-x-auto gap-1 select-none custom-scrollbar-x">
              <button
                onClick={() => { setActiveTab('todos'); }}
                className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm cursor-pointer transition-all shrink-0 whitespace-nowrap ${activeTab === 'todos' ? 'bg-azul text-dourado shadow-md' : 'text-gray-500 hover:text-azul hover:bg-gray-100'}`}
              >
                Todas as Redes ({HOTELS_DATA.filter(h => selectedDestination === 'todos' || getHotelLocation(h).city === selectedDestination).length})
              </button>
              
              {[
                { id: 'lagoa', label: 'Lagoa Parques', cities: ['Caldas Novas'] },
                { id: 'diroma', label: 'Rede diRoma', cities: ['Caldas Novas'] },
                { id: 'viver-caldas', label: 'Viver Caldas', cities: ['Caldas Novas'] },
                { id: 'ctc', label: 'Rede CTC', cities: ['Caldas Novas'] },
                { id: 'wam', label: 'WAM Experience', cities: ['Caldas Novas'] },
                { id: 'olimpia', label: 'Hot Beach Olímpia', cities: ['Olímpia'] },
                { id: 'sauipe', label: 'Costa do Sauípe', cities: ['Costa do Sauípe'] },
                { id: 'rio-quente', label: 'Rio Quente Resorts', cities: ['Rio Quente'] },
                { id: 'beach-park', label: 'Rede Beach Park', cities: ['Aquiraz'] },
                { id: 'amarante', label: 'Resorts Amarante', cities: ['Maceió', 'Japaratinga', 'Maragogi'] }
              ]
                .filter(net => selectedDestination === 'todos' || net.cities.includes(selectedDestination))
                .map((net) => {
                  const count = HOTELS_DATA.filter(h => h.category === net.id).length;
                  return (
                    <button
                      key={net.id}
                      onClick={() => { setActiveTab(net.id as any); }}
                      className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm cursor-pointer transition-all shrink-0 whitespace-nowrap ${activeTab === net.id ? 'bg-azul text-dourado shadow-md' : 'text-gray-500 hover:text-azul'}`}
                    >
                      {net.label} ({count})
                    </button>
                  );
                })
              }
            </div>
          </div>

          {/* C. Search & Attribute Quick Filters */}
          <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-gray-100 items-center justify-between">
            {/* 1. Text Search */}
            <div className="relative w-full lg:max-w-md">
              <input
                type="text"
                placeholder="Buscar pelo nome ou lazer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-dourado text-azul font-medium rounded-2xl py-3 px-5 pl-12 h-12 text-sm focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-3.5 text-gray-450" size={18} />
            </div>

            {/* 2. Quick Attribute Filter Pills */}
            <div className="flex items-center gap-3 overflow-x-auto w-full lg:w-auto pb-3 lg:pb-1 custom-scrollbar-x">
              <span className="text-gray-650 text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                <Filter size={14} className="text-dourado" /> Filtrar Lazer:
              </span>
              <div className="flex gap-2 min-w-max">
                {quickFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFeature(filter.value)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${selectedFeature === filter.value ? 'bg-dourado text-azul font-bold shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-500'}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic active indicators */}
        <div className="flex items-center justify-between text-xs sm:text-sm px-2 text-gray-500 select-none">
          <span>
            Mostrando <strong className="text-azul font-semibold">{filteredHotels.length}</strong> de {HOTELS_DATA.length} hotéis cadastrados
          </span>
          {searchTerm || selectedFeature !== 'todos' || selectedDestination !== 'todos' || activeTab !== 'todos' ? (
            <button
              onClick={handleResetFilters}
              className="text-dourado font-bold hover:underline cursor-pointer"
            >
              Limpar Todos os Filtros
            </button>
          ) : null}
        </div>

        {/* Grouped Catalog List */}
        <div className="space-y-16">
          {Object.keys(groupedHotels).map((groupKey) => {
            const group = groupedHotels[groupKey];
            return (
              <div key={groupKey} className="space-y-6">
                
                {/* Separator / Header for City and State */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <div className="bg-azul text-dourado p-2.5 rounded-xl shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-azul flex items-center gap-1.5">
                      {group.city} <span className="text-dourado font-light">|</span> <span className="text-gray-500 font-medium text-sm sm:text-base">{group.state}</span>
                    </h3>
                    <p className="text-[11px] text-gray-450 font-light mt-0.5">
                      {group.hotels.length} {group.hotels.length === 1 ? 'empreendimento disponível' : 'empreendimentos disponíveis'}
                    </p>
                  </div>
                </div>

                {/* Grid of cards under this location */}
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {group.hotels.map((hotel) => (
                      <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        onOpenHotelDetail={onOpenHotelDetail}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
            </div>
          )})}

          {/* Empty search fallback */}
          {filteredHotels.length === 0 && (
            <div className="bg-white p-12 text-center rounded-3xl shadow-md border border-gray-100 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl text-gray-300">🔍</span>
              <h4 className="font-display font-bold text-xl text-azul">Nenhum hotel condiz com os filtros selecionados!</h4>
              <p className="text-gray-550 text-sm max-w-sm">
                O Capitão Destino sugere redefinir a busca por texto, mudar o destino ou limpar os filtros clicando abaixo.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-dourado text-azul hover:bg-azul hover:text-white font-bold px-6 py-2.5 rounded-full text-xs shadow cursor-pointer transition-all"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
