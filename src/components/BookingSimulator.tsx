import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Calculator, MessageSquare, Compass, Gift, Ticket } from 'lucide-react';
import { HOTELS_DATA } from '../data/hotelsData';

export default function BookingSimulator() {
  const [selectedHotelId, setSelectedHotelId] = useState(HOTELS_DATA[0].id);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState('');

  const selectedHotel = HOTELS_DATA.find(h => h.id === selectedHotelId) || HOTELS_DATA[0];

  // Dynamic estimate categories
  const getTravelStyle = () => {
    if (adults === 2 && children === 0) {
      return { 
        name: 'Escapada Romântica', 
        desc: 'Ideal para namorados e casais em busca de aconchego, jantares estrelados e relaxamento terrenal.',
        bonus: 'Espumante de boas-vindas sob consulta!'
      };
    }
    if (children > 0) {
      return { 
        name: 'Aventura em Família', 
        desc: 'A energia está lá no alto! Toboáguas, parques aquáticos dedicados e recreação ativa o dia todinho.',
        bonus: 'Acesso grátis para crianças menores de 5 anos no parque!'
      };
    }
    return { 
      name: 'Férias de Lazer Coletivo', 
      desc: 'Apartamentos amplos, jogos de tabuleiro coletivos, piscinas de borda infinita e muita conexão.',
      bonus: 'Tarifas agrupadas no melhor custo-benefício!'
    };
  };

  const travelStyle = getTravelStyle();

  // Pre-fill WhatsApp URL link generator formatted elegantly
  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format dates to brazillian standard if filled
    const formatDate = (dateStr: string) => {
      if (!dateStr) return 'A definir';
      const [year, month, day] = dateStr.split('-');
      return `${day}/${month}/${year}`;
    };

    const formattedIn = formatDate(checkIn);
    const formattedOut = formatDate(checkOut);

    const message = `✨ *SOLICITAÇÃO DE ORÇAMENTO - VIVA DESTINOS EXPERIENCE* ✨
-----------------------------------------------
🦜 *Consultor do Capitão Destino, eu escolhi:*
🏨 *Hotel:* ${selectedHotel.name}
📍 *Rede:* ${selectedHotel.categoryLabel}

👥 *Detalhes dos Hóspedes:*
• Adultos: ${adults}
• Crianças: ${children}

📆 *Período Desejado:*
• Check-in: ${formattedIn}
• Check-out: ${formattedOut}

✈️ *Estilo Identificado:* ${travelStyle.name}
${specialNeeds ? `\n💬 *Observações Especiais:* ${specialNeeds}` : ''}
-----------------------------------------------
🏝️ _Conduzindo você às melhores experiências!_`;

    const whatsappUrl = `https://wa.me/556421310045?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="orcamento" className="py-24 bg-gradient-to-b from-[#061A35] via-[#0B2F5B] to-azul px-6 md:px-[8%] relative text-white">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-dourado/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-azul2/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Storyteller explaining form value */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <span className="text-dourado text-sm font-bold tracking-widest uppercase flex items-center gap-1.5">
            <Calculator size={16} /> Planejador Integrado
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Monte Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado to-yellow-250 font-extrabold">Pacote Personalizado</span>
          </h2>
          <div className="w-16 h-1 bg-dourado rounded-full" />
          <p className="text-gray-150 leading-relaxed font-sans font-light text-base sm:text-lg">
            Selecione o hotel que você mais gostou no nosso portfólio, digite suas datas e a quantidade de hóspedes.
          </p>
          <p className="text-sm text-white/80 font-light italic leading-relaxed">
            O nosso simulador estrutura as informações num formato impecável e já envia direto para nosso sistema no WhatsApp. Evite cadastros cansativos e longos formulários!
          </p>

          {/* Dynamic travel style recommendation card */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl relative overflow-hidden backdrop-blur-md">
            <span className="absolute -top-1 right-2 text-dourado/40 font-display font-medium text-xs uppercase tracking-wide">
              Estilo Estima
            </span>
            <div className="space-y-2">
              <span className="text-dourado font-display font-bold text-xs flex items-center gap-1.5 uppercase tracking-wider">
                <Compass size={13} className="animate-pulse" /> {travelStyle.name}
              </span>
              <p className="text-white text-sm font-semibold">{travelStyle.desc}</p>
              <div className="flex items-center gap-1.5 pt-2 text-xs text-dourado border-t border-white/5 font-medium">
                <Gift size={13} /> {travelStyle.bonus}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form column - Simulation */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 bg-white text-azul p-6 sm:p-10 rounded-3xl shadow-2xl relative"
        >
          <form onSubmit={handleGenerateQuote} className="space-y-5">
            
            {/* 1. Selected Hotel Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                🏨 Selecione o Hotel Desejado:
              </label>
              <select
                value={selectedHotelId}
                onChange={(e) => setSelectedHotelId(e.target.value)}
                className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors"
                required
              >
                {HOTELS_DATA.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>
                    {hotel.name} ({hotel.categoryLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Dates selections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                  <Calendar size={14} className="text-dourado" /> Data de Check-in:
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                  <Calendar size={14} className="text-dourado" /> Data de Check-out:
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors"
                  required
                />
              </div>
            </div>

            {/* 3. Guest count numeric adjustments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                  <Users size={14} className="text-dourado" /> Adultos (18+ anos):
                </label>
                <div className="flex items-center justify-between bg-gray-50 border border-gray-250 p-1.5 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                    className="w-11 h-11 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-lg select-none cursor-pointer border border-gray-200"
                  >
                    -
                  </button>
                  <span className="font-display font-semibold text-base sm:text-lg">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(prev => Math.min(10, prev + 1))}
                    className="w-11 h-11 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-lg select-none cursor-pointer border border-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                  <Users size={14} className="text-dourado" /> Crianças (0-17 anos):
                </label>
                <div className="flex items-center justify-between bg-gray-50 border border-gray-250 p-1.5 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                    className="w-11 h-11 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-lg select-none cursor-pointer border border-gray-200"
                  >
                    -
                  </button>
                  <span className="font-display font-semibold text-base sm:text-lg">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(prev => Math.min(10, prev + 1))}
                    className="w-11 h-11 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-lg select-none cursor-pointer border border-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Special considerations text */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul">
                💬 Algum pedido especial? (Ex: aniversário, berço, pet):
              </label>
              <textarea
                placeholder="Escreva aqui se tiver alguma observação crucial para o planejamento da viagem..."
                value={specialNeeds}
                onChange={(e) => setSpecialNeeds(e.target.value)}
                rows={3}
                className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors resize-none"
              />
            </div>

            {/* Dynamic benefits alerts depending on choices */}
            {selectedHotel.category === 'lagoa' && (
              <div className="bg-azul/5 border border-azul/15 rounded-xl p-3.5 text-xs text-azul flex items-center gap-2 font-medium">
                <Ticket size={16} className="text-dourado shrink-0 animate-pulse" />
                <span>Excelente escolha! Esta reserva garante <strong>acessos gratuitos e ilimitados aos Parques Lagoa!</strong></span>
              </div>
            )}

            {/* Form submit trigger */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-verde hover:bg-green-600 text-white hover:shadow-xl font-bold text-base sm:text-lg py-4 rounded-full flex items-center justify-center gap-2 shadow cursor-pointer transition-all duration-200"
              >
                <MessageSquare size={20} fill="#FFF" className="text-verde" />
                Gerar Orçamento no WhatsApp
              </button>
              <p className="text-[11px] text-gray-450 text-center mt-2 font-light">
                *O link abrirá em nova aba diretamente no app ou web WhatsApp pré-preenchido.
              </p>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
