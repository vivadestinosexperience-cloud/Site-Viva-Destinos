import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Calculator, MessageSquare, Compass, Gift, Ticket, Loader2 } from 'lucide-react';
import { HOTELS_DATA } from '../data/hotelsData';
import { supabase } from '../lib/supabaseClient';
import { LeadReserva } from '../types';

export default function BookingSimulator() {
  const [selectedHotelId, setSelectedHotelId] = useState(HOTELS_DATA[0].id);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [specialNeeds, setSpecialNeeds] = useState('');

  // Lead target fields
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [childAges, setChildAges] = useState<string[]>([]);

  // Action flow states
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

  const handleUpdateChildren = (updater: (prev: number) => number) => {
    setChildren(prev => {
      const next = updater(prev);
      setChildAges(prevAges => {
        const nextAges = [...prevAges];
        if (next > nextAges.length) {
          while (nextAges.length < next) {
            nextAges.push('');
          }
        } else {
          nextAges.splice(next);
        }
        return nextAges;
      });
      return next;
    });
  };

  // Pre-fill WhatsApp URL link generator formatted elegantly
  const handleGenerateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Prevent duplicate clicks

    // Fields validation
    if (!clientName.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }
    if (!clientPhone.trim()) {
      setErrorMessage('Por favor, informe seu número de WhatsApp.');
      return;
    }
    if (!checkIn) {
      setErrorMessage('Por favor, escolha uma data de check-in.');
      return;
    }
    if (!checkOut) {
      setErrorMessage('Por favor, escolha uma data de check-out.');
      return;
    }
    
    // Check if check-out is after check-in
    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMessage('A data de check-out deve ser posterior à data de check-in.');
      return;
    }

    // Check children ages if specified
    if (children > 0) {
      const emptyAgeIdx = childAges.findIndex(age => !age.trim());
      if (emptyAgeIdx !== -1) {
        setErrorMessage(`Por favor, preencha a idade de todas as crianças (Criança ${emptyAgeIdx + 1}).`);
        return;
      }
    }

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Format dates to brazilian standard if filled
    const formatDate = (dateStr: string) => {
      if (!dateStr) return 'A definir';
      const [year, month, day] = dateStr.split('-');
      return `${day}/${month}/${year}`;
    };

    const formattedIn = formatDate(checkIn);
    const formattedOut = formatDate(checkOut);
    const idadesStr = children > 0 ? childAges.join(', ') : 'Nenhuma';

    const message = `✨ *SOLICITAÇÃO DE ORÇAMENTO - VIVA DESTINOS EXPERIENCE* ✨
-----------------------------------------------
👤 *Cliente:* ${clientName.trim()}
📞 *WhatsApp:* ${clientPhone.trim()}
${clientEmail.trim() ? `📧 *E-mail:* ${clientEmail.trim()}\n` : ''}🏨 *Hotel Escolhido:* ${selectedHotel.name}
📍 *Rede:* ${selectedHotel.categoryLabel}

👥 *Detalhes dos Hóspedes:*
• Adultos: ${adults}
• Crianças: ${children}${children > 0 ? ` (Idades: ${idadesStr})` : ''}

📆 *Período Desejado:*
• Check-in: ${formattedIn}
• Check-out: ${formattedOut}

✈️ *Estilo Identificado:* ${travelStyle.name}
${specialNeeds.trim() ? `\n💬 *Observações Especiais:* ${specialNeeds.trim()}` : ''}
-----------------------------------------------
🏝️ _Cliente veio pelo site da Viva Destinos Experience!_`;

    const leadPayload: LeadReserva = {
      nome: clientName.trim(),
      telefone: clientPhone.trim(),
      email: clientEmail.trim() || null,
      hotel: selectedHotel.name,
      checkin: checkIn,
      checkout: checkOut,
      adultos: adults,
      criancas: children,
      idades_criancas: children > 0 ? idadesStr : null,
      observacoes: specialNeeds.trim() || null,
      origem: 'site',
      status: 'novo'
    };

    const whatsappUrl = `https://wa.me/556421310045?text=${encodeURIComponent(message)}`;

    try {
      const { error } = await supabase
        .from('leads_reservas')
        .insert([leadPayload]);

      if (error) {
        throw error;
      }

      setSuccessMessage('Orçamento registrado com sucesso! Redirecionando para o WhatsApp...');
      
      // Open WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsLoading(false);
      }, 1000);

    } catch (err: any) {
      console.error('Erro ao salvar lead no Supabase:', err);
      // Friendly message on DB failure
      setErrorMessage('Não conseguimos registrar sua solicitação agora, mas você ainda pode chamar nossa equipe no WhatsApp.');
      
      // Still open WhatsApp as fallback even if Supabase configuration or saving failed
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsLoading(false);
      }, 2500);
    }
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
            Selecione o hotel que você mais gostou no nosso portfólio, informe seus dados e o período desejado da viagem.
          </p>
          <p className="text-sm text-white/80 font-light italic leading-relaxed">
            O nosso simulador estruturará suas informações no formato ideal e salvará o seu pedido na nossa mesa de atendimento, redirecionando você em seguida para falar diretamente com nosso especialista.
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
            
            {/* 0. Cliente Basic Info Fields */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                  👤 Seu Nome Completo:
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Nome completo"
                  className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                    📞 WhatsApp / Telefone:
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="(00) 99999-9999"
                    className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul flex items-center gap-1.5">
                    📧 E-mail (Opcional):
                  </label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 1. Selected Hotel Dropdown */}
            <div className="space-y-1.5 pt-2 border-t border-gray-100">
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
                  className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors animate-none"
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
                  className="w-full bg-gray-50 border border-gray-250 focus:border-dourado focus:outline-none rounded-2xl p-4 text-sm font-medium transition-colors animate-none"
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
                    onClick={() => handleUpdateChildren(prev => Math.max(0, prev - 1))}
                    className="w-11 h-11 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-lg select-none cursor-pointer border border-gray-200"
                  >
                    -
                  </button>
                  <span className="font-display font-semibold text-base sm:text-lg">{children}</span>
                  <button
                    type="button"
                    onClick={() => handleUpdateChildren(prev => Math.min(10, prev + 1))}
                    className="w-11 h-11 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-lg select-none cursor-pointer border border-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Child Ages Selection list */}
            <AnimatePresence>
              {children > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2.5 p-4 bg-azul/5 rounded-2xl border border-azul/10 overflow-hidden"
                >
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-azul block">
                    👶 Idades das Crianças:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {childAges.map((age, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500">Criança {idx + 1}:</span>
                        <input
                          type="text"
                          placeholder="Ex: 5 anos"
                          value={age}
                          onChange={(e) => {
                            const updated = [...childAges];
                            updated[idx] = e.target.value;
                            setChildAges(updated);
                          }}
                          className="w-full bg-white border border-gray-255 focus:border-dourado focus:outline-none rounded-xl p-2.5 text-xs font-semibold transition-colors"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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

            {selectedHotel.category === 'viver-caldas' && (
              <div className="bg-azul/5 border border-azul/15 rounded-xl p-3.5 text-xs text-azul flex items-center gap-2 font-medium">
                <Gift size={16} className="text-dourado shrink-0 animate-pulse" />
                <span>Fantástico! Esta reserva garante acesso total à luxuosa infraestrutura de piscinas, ofurôs, cineminha e demais comodidades do <strong>{selectedHotel.name}!</strong></span>
              </div>
            )}

            {/* Response Alerts */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-650 text-xs sm:text-sm px-4 py-3.5 rounded-2xl font-medium leading-relaxed">
                ⚠️ {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-755 text-xs sm:text-sm px-4 py-3.5 rounded-2xl font-medium leading-relaxed">
                ✅ {successMessage}
              </div>
            )}

            {/* Form submit trigger */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white font-bold text-base sm:text-lg py-4 rounded-full flex items-center justify-center gap-2 shadow transition-all duration-200 ${
                  isLoading
                    ? 'bg-verde/60 cursor-not-allowed'
                    : 'bg-verde hover:bg-green-600 hover:shadow-xl cursor-pointer'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin text-white" />
                    Processando...
                  </>
                ) : (
                  <>
                    <MessageSquare size={20} fill="#FFF" className="text-verde" />
                    Gerar Orçamento no WhatsApp
                  </>
                )}
              </button>
              <p className="text-[11px] text-gray-450 text-center mt-2 font-light text-azul/60">
                *O link de contato continuará disponível para atendimento mesmo se houver erro ao salvar.
              </p>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
