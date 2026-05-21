import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Star, Sparkles, Filter, Sliders, Eye } from 'lucide-react';
import { HOTELS_DATA } from '../data/hotelsData';
import { Hotel } from '../types';

interface HotelCatalogProps {
  onOpenHotelDetail: (hotel: Hotel) => void;
}

export default function HotelCatalog({ onOpenHotelDetail }: HotelCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'todos' | 'lagoa' | 'diroma'>('todos');
  const [selectedFeature, setSelectedFeature] = useState<string>('todos');

  // Key feature tags for rapid filtration
  const quickFilters = useMemo(() => [
    { label: 'Todos os Lazer', value: 'todos' },
    { label: 'Parque Grátis', value: 'Acesso Grátis' },
    { label: 'Piscinas 24h', value: 'Piscinas 24h' },
    { label: 'Recreação', value: 'Recreação' },
    { label: 'Casal', value: 'casal' },
    { label: 'Grupo/Família', value: 'família' }
  ], []);

  // Filter algorithmic logic
  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      // 1. Category check
      const matchesTab = activeTab === 'todos' || hotel.category === activeTab;
      
      // 2. Search check
      const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            hotel.tagline.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            hotel.description.toLowerCase().includes(searchTerm.toLowerCase());

      // 3. Quick properties check
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

      return matchesTab && matchesSearch && matchesFeature;
    });
  }, [searchTerm, activeTab, selectedFeature]);

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
        <div className="bg-white p-5 rounded-3xl shadow-lg border border-gray-100 space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* 1. Categorized Tabs */}
            <div className="flex bg-gray-50 p-1.5 rounded-2xl w-full md:w-auto overflow-x-auto shrink-0 select-none">
              <button
                onClick={() => { setActiveTab('todos'); setSelectedFeature('todos'); }}
                className={`px-5 py-3 rounded-xl font-display font-bold text-xs sm:text-sm cursor-pointer transition-all shrink-0 ${activeTab === 'todos' ? 'bg-azul text-dourado shadow-md' : 'text-gray-500 hover:text-azul'}`}
              >
                Todos ({HOTELS_DATA.length})
              </button>
              <button
                onClick={() => { setActiveTab('lagoa'); }}
                className={`px-5 py-3 rounded-xl font-display font-bold text-xs sm:text-sm cursor-pointer transition-all shrink-0 ${activeTab === 'lagoa' ? 'bg-azul text-dourado shadow-md' : 'text-gray-500 hover:text-azul'}`}
              >
                Lagoa Parques ({HOTELS_DATA.filter(h => h.category === 'lagoa').length})
              </button>
              <button
                onClick={() => { setActiveTab('diroma'); }}
                className={`px-5 py-3 rounded-xl font-display font-bold text-xs sm:text-sm cursor-pointer transition-all shrink-0 ${activeTab === 'diroma' ? 'bg-azul text-dourado shadow-md' : 'text-gray-500 hover:text-azul'}`}
              >
                Rede diRoma ({HOTELS_DATA.filter(h => h.category === 'diroma').length})
              </button>
            </div>

            {/* 2. Text Search */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Buscar pelo nome ou lazer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-dourado text-azul font-medium rounded-2xl py-3 px-5 pl-12 h-12 text-sm focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-3.5 text-gray-450" size={18} />
            </div>
          </div>

          {/* 3. Easy Attribute Filter Pills */}
          <div className="border-t border-gray-100 pt-4 flex items-center gap-3 overflow-x-auto scrollbar-none pb-1">
            <span className="text-gray-600 text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5">
              <Filter size={14} className="text-dourado" /> Filtrar:
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

        {/* Dynamic active indicators */}
        <div className="flex items-center justify-between text-xs sm:text-sm px-2 text-gray-500 select-none">
          <span>
            Mostrando <strong className="text-azul font-semibold">{filteredHotels.length}</strong> de {HOTELS_DATA.length} hotéis cadastrados
          </span>
          {searchTerm || selectedFeature !== 'todos' ? (
            <button
              onClick={() => { setSearchTerm(''); setSelectedFeature('todos'); setActiveTab('todos'); }}
              className="text-dourado font-bold hover:underline cursor-pointer"
            >
              Excluir Filtros
            </button>
          ) : null}
        </div>

        {/* Grid Catalog Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredHotels.map((hotel) => (
              <motion.div
                layout
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                id={`hotel-card-${hotel.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 cursor-pointer flex flex-col justify-between group transition-shadow duration-350"
                onClick={() => onOpenHotelDetail(hotel)}
              >
                {/* Hotel Cover Image */}
                <div className="relative h-60 overflow-hidden bg-gray-200">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 bg-azul/90 text-dourado border border-dourado/30 backdrop-blur-md text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full shadow">
                    {hotel.categoryLabel}
                  </span>

                  {/* Highlight overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/55 text-white/95 text-[11px] sm:text-xs tracking-medium px-4 py-2 rounded-xl backdrop-blur-xs font-light">
                    ⭐ {hotel.highlight}
                  </div>
                </div>

                {/* Hotel Descriptions Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
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
                    className="w-full bg-dourado hover:bg-azul hover:text-white text-azul font-bold py-3 px-4 rounded-full flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all duration-200"
                  >
                    <Eye size={15} /> Ver Fotos e Detalhes
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty search fallback */}
          {filteredHotels.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-12 text-center rounded-3xl shadow-md border border-gray-100 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl text-gray-300">🔍</span>
              <h4 className="font-display font-bold text-xl text-azul">Nenhum hotel condiz com os filtros selecionados!</h4>
              <p className="text-gray-550 text-sm max-w-sm">
                O Capitão Destino sugere redefinir a busca por texto ou mudar os filtros de lazer clicando abaixo.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedFeature('todos'); setActiveTab('todos'); }}
                className="bg-dourado text-azul hover:bg-azul hover:text-white font-bold px-6 py-2.5 rounded-full text-xs shadow cursor-pointer transition-all"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
