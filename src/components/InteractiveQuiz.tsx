import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, Check, Star, HelpCircle } from 'lucide-react';
import MascotImage from './MascotImage';
import { HOTELS_DATA, QUIZ_QUESTIONS } from '../data/hotelsData';
import { Hotel } from '../types';

interface InteractiveQuizProps {
  onOpenHotelDetail: (hotel: Hotel) => void;
}

export default function InteractiveQuiz({ onOpenHotelDetail }: InteractiveQuizProps) {
  const [step, setStep] = useState<number>(0); // 0: Start, 1: Question 1, 2: Question 2, 3: Loading, 4: Results
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [recommendedHotels, setRecommendedHotels] = useState<{ hotel: Hotel; score: number; reason: string }[]>([]);
  const [loadingText, setLoadingText] = useState('Analisando seu perfil de viagem...');

  // Loading animation quotes from Captain Destino
  useEffect(() => {
    if (step === 3) {
      const texts = [
        'Capitão Destino decolando com o jatinho...',
        'Consultando os ventos das águas termais...',
        'Aferindo a temperatura perfeita das piscinas...',
        'Encontrando as melhores opções para sua família...'
      ];
      let currentIdx = 0;
      setLoadingText(texts[0]);

      const interval = setInterval(() => {
        currentIdx++;
        if (currentIdx < texts.length) {
          setLoadingText(texts[currentIdx]);
        } else {
          clearInterval(interval);
          calculateRecommendations();
          setStep(4);
        }
      }, 700);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleStart = () => {
    setAnswers({});
    setStep(1);
  };

  const handleSelectOption = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (questionId < QUIZ_QUESTIONS.length) {
      setStep((prev) => prev + 1);
    } else {
      setStep(3); // Go to loading screen
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      setStep(0);
    }
  };

  const calculateRecommendations = () => {
    const q1Answer = answers[1]; // companion profile: família, casal, grupo, luxo
    const q2Answer = answers[2]; // primary desire: parque, sossego, economico, premium

    const scorableHotels = HOTELS_DATA.map((hotel) => {
      let score = 50; // Base score
      let matchingReasons: string[] = [];

      // Companion evaluation
      if (hotel.bestFor === q1Answer) {
        score += 30;
        if (q1Answer === 'família') matchingReasons.push('possui recreação infantil de alto nível e estruturas perfeitas e seguras para toda a sua família');
        if (q1Answer === 'casal') matchingReasons.push('entrega clima intimista, silencioso e acolhedor magnífico para casais');
        if (q1Answer === 'grupo') matchingReasons.push('oferece apartamentos imensos ideais para viagens de grupos e famílias extensas');
        if (q1Answer === 'luxo') matchingReasons.push('destaca-se pelo acabamento refinado de suas suítes e sofisticação premium');
      } else {
        // Fallbacks/Adjacencies
        if (q1Answer === 'família' && (hotel.id === 'alta-vista' || hotel.id === 'eco-towers')) {
          score += 15;
          matchingReasons.push('possui excelente infraestrutura recreativa e playground perfeito para as crianças');
        }
      }

      // Desires evaluation
      if (q2Answer === 'parque') {
        if (hotel.features.some(f => f.toLowerCase().includes('parque') || f.toLowerCase().includes('acesso grátis')) || hotel.id === 'thermas-diroma' || hotel.id === 'eco-towers') {
          score += 20;
          matchingReasons.push('oferece acesso espetacular aos maiores parques de diversão termal de Caldas Novas');
        }
      } else if (q2Answer === 'sossego') {
        if (hotel.features.some(f => f.toLowerCase().includes('tranquilo') || f.toLowerCase().includes('privacidade') || f.toLowerCase().includes('ofurô') || f.toLowerCase().includes('spa'))) {
          score += 20;
          matchingReasons.push('apresenta uma atmosfera pacífica e ofurôs relaxantes no corpo d’água para descansar');
        }
      } else if (q2Answer === 'economico') {
        score += 10;
        matchingReasons.push('oferece excelente relação custo-benefício com padrão de conforto inigualável');
      } else if (q2Answer === 'premium') {
        if (hotel.id === 'thermas-diroma' || hotel.id === 'alta-vista') {
          score += 25;
          matchingReasons.push('apresenta serviços de culinária e piscinas diferenciadas de padrão internacional');
        }
      }

      const defaultReason = `apresenta ótimos complexos de águas termais e a garantia de qualidade Viva Destinos!`;
      const finalReason = matchingReasons.length > 0 
        ? `Este hotel é ideal porque ${matchingReasons.join(' e ')}.`
        : `Excelente complexo hoteleiro que ${defaultReason}`;

      return {
        hotel,
        score: Math.min(score, 99), // cap at 99% for visual fun
        reason: finalReason
      };
    });

    // Sort by highest score first, grab top 3
    const sorted = scorableHotels.sort((a, b) => b.score - a.score).slice(0, 3);
    setRecommendedHotels(sorted);
  };

  // Safe icon helper mapping string to UI rendering
  const renderOptionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby': return <span className="text-xl sm:text-2xl">👶</span>;
      case 'Heart': return <span className="text-xl sm:text-2xl">💖</span>;
      case 'Users': return <span className="text-xl sm:text-2xl">👨‍👩‍👧‍👦</span>;
      case 'Crown': return <span className="text-xl sm:text-2xl">👑</span>;
      case 'Waves': return <span className="text-xl sm:text-2xl">🌊</span>;
      case 'Trees': return <span className="text-xl sm:text-2xl font-normal">🌴</span>;
      case 'Coins': return <span className="text-xl sm:text-2xl">💰</span>;
      case 'Sparkles': return <span className="text-xl sm:text-2xl">✨</span>;
      default: return <HelpCircle size={22} />;
    }
  };

  const getCaptainComment = () => {
    if (step === 1) return 'Primeiro, quero saber qual a sua companhia favorita para curtir essa aventura!';
    if (step === 2) return 'E o que vocês mais amam fazer em uma estadia de férias termal?';
    return '';
  };

  return (
    <section id="quiz" className="py-24 bg-gradient-to-b from-white to-claro px-6 md:px-[8%] relative overflow-hidden">
      {/* Decorative stars / geometric nodes */}
      <div className="absolute top-1/4 left-5 w-48 h-48 bg-dourado/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-5 w-72 h-72 bg-azul/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto">
        {/* Title area */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-dourado text-sm font-bold tracking-widest uppercase block">
            Descubra Caldas Novas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul">
            Encontre o Seu Resort <span className="text-dourado">Ideal em segundos!</span>
          </h2>
          <p className="text-gray-550 max-w-lg mx-auto text-sm sm:text-base">
            Responda às perguntas rápidas do <strong className="text-azul font-semibold">Capitão Destino</strong> e receba sugestões perfeitamente adaptadas ao seu gosto e bolso.
          </p>
        </div>

        {/* Main interactive Quiz Container */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden relative min-h-[460px] flex flex-col justify-between">
          
          {/* Progress Indicator */}
          {step > 0 && step < 3 && (
            <div className="w-full h-2 bg-gray-100 flex">
              <div 
                className="h-full bg-gradient-to-r from-azul2 to-dourado transition-all duration-300"
                style={{ width: `${(step / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 0: Welcome Slide */}
            {step === 0 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="relative">
                  <MascotImage size="md" className="drop-shadow-lg" />
                  <span className="absolute -bottom-2 bg-azul text-dourado font-bold px-4 py-1 rounded-full text-xs shadow-md border border-dourado/20">
                    Capitão Destino
                  </span>
                </div>

                <div className="max-w-xl space-y-3">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-azul text-center">
                    "Previsão de diversão e águas termais!"
                  </h3>
                  <p className="text-gray-650 leading-relaxed font-sans font-light">
                    Olá! Sou o guia da Viva Destinos Experience. Preparei um teste interativo muito legal para descobrir qual hotel de Caldas Novas combina melhor com você e sua turma. Vamos voar juntos?
                  </p>
                </div>

                <button
                  onClick={handleStart}
                  className="bg-dourado text-azul hover:bg-azul hover:text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2 group transform hover:scale-102"
                >
                  Iniciar Teste Express
                  <ArrowRight size={20} className="group-hover:translate-x-1.5 duration-300" />
                </button>
              </motion.div>
            )}

            {/* Step 1 & 2: Inside Questions */}
            {(step === 1 || step === 2) && (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 md:p-10 flex flex-col justify-between h-full space-y-6"
              >
                {/* Header question detail with captain speech */}
                <div className="flex items-start gap-4 border-b border-gray-150 pb-5">
                  <div className="relative shrink-0 hidden sm:block">
                    <MascotImage size="sm" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-dourado text-xs font-bold tracking-widest uppercase">
                      Pergunta {step} de {QUIZ_QUESTIONS.length}
                    </span>
                    <h4 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-azul">
                      {QUIZ_QUESTIONS[step - 1].text}
                    </h4>
                    <p className="text-gray-500 text-xs italic">
                      "{getCaptainComment()}"
                    </p>
                  </div>
                </div>

                {/* Question Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {QUIZ_QUESTIONS[step - 1].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelectOption(step, option.value)}
                      className="bg-gray-50 hover:bg-azul/5 hover:border-dourado border-2 border-transparent text-left p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-start gap-4 group hover:shadow-md"
                    >
                      <div className="p-2.5 rounded-xl bg-white border border-gray-200 text-azul group-hover:bg-dourado group-hover:text-azul transition-all">
                        {renderOptionIcon(option.icon)}
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-display font-bold text-sm sm:text-base text-azul group-hover:text-azul2">
                          {option.label}
                        </h5>
                        <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed font-light">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Back controls */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-150">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 text-azul font-bold text-xs sm:text-sm hover:text-dourado cursor-pointer"
                  >
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <span className="text-xs text-gray-400">
                    O Capitão está anotando...
                  </span>
                </div>
              </motion.div>
            )}

            {/* Step 3: Loading calculations animation */}
            {step === 3 && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12 flex flex-col items-center justify-center space-y-6 text-center"
              >
                <div className="relative">
                  {/* Glowing spinner background around Captain */}
                  <div className="absolute inset-0 border-4 border-t-dourado border-r-transparent border-b-azul2 border-l-transparent rounded-full animate-spin w-40 h-40 -m-8" />
                  <MascotImage size="sm" className="relative animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xl text-azul">
                    Processando sua rota perfeita...
                  </h4>
                  <p className="text-dourado font-medium text-xs sm:text-sm flex items-center justify-center gap-2">
                    <RefreshCw size={14} className="animate-spin" /> {loadingText}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 4: Finished Results Slide */}
            {step === 4 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 md:p-10 flex flex-col space-y-8"
              >
                {/* Result header */}
                <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-gray-150 pb-6 text-center sm:text-left">
                  <div className="relative shrink-0">
                    <MascotImage size="sm" />
                    <span className="absolute -top-1 -right-2 bg-green shadow-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 animate-pulse">
                      <Check size={10} /> Solução Pronta
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-2xl text-azul">
                      "Excelente escolha de voo!"
                    </h4>
                    <p className="text-gray-650 font-light text-sm">
                      O Capitão selecionou a dedo as <strong className="text-azul font-semibold">três melhores opções hoteleiras</strong> alinhadas com seu perfil. Dê uma olhada:
                    </p>
                  </div>
                </div>

                {/* Match Cards list */}
                <div className="space-y-4">
                  {recommendedHotels.map(({ hotel, score, reason }, index) => (
                    <div 
                      key={hotel.id}
                      className="bg-gradient-to-r from-gray-50/70 to-white hover:from-azul/[0.02] border border-gray-200/80 hover:border-dourado/40 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all duration-300"
                    >
                      {/* Left: Score Badge & Hotel Image */}
                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0">
                          <img 
                            src={hotel.images[0]} 
                            alt={hotel.name} 
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-gray-200 shadow-inner" 
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute -top-2 -left-2 bg-azul text-dourado font-display font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full border border-dourado/30 shadow flex items-center gap-0.5">
                            <Star size={10} fill="#D9A441" className="text-dourado" /> {score}% Match
                          </span>
                        </div>

                        {/* Middle descriptions */}
                        <div className="space-y-1">
                          <small className="text-dourado font-extrabold tracking-widest text-[10px] sm:text-xs uppercase">
                            {index === 0 ? '🏆 Melhor Recomendação' : `Opção #${index + 1}`} • {hotel.categoryLabel}
                          </small>
                          <h5 className="font-display font-bold text-base sm:text-lg text-azul leading-tight">
                            {hotel.name}
                          </h5>
                          <p className="text-gray-550 leading-relaxed font-sans font-light text-[11px] sm:text-xs max-w-xl">
                            {reason}
                          </p>
                        </div>
                      </div>

                      {/* Right: Quick buttons */}
                      <div className="flex flex-row md:flex-col items-center justify-end gap-2 w-full md:w-auto border-t md:border-t-0 border-gray-150 pt-3 md:pt-0 shrink-0">
                        <button
                          onClick={() => onOpenHotelDetail(hotel)}
                          className="bg-azul hover:bg-azul2 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition-all w-1/2 md:w-36 text-center"
                        >
                          Detalhes e Fotos
                        </button>
                        <a
                          href={`https://wa.me/556421310045?text=Ol%C3%A1%21+Realizei+o+Quiz+da+Viva+Destinos+e+o+Capit%C3%A3o+me+indicou+o+${encodeURIComponent(hotel.name)}+como+match+de+${score}%25.+Gostaria+de+um+or%C3%A7amento+especial%21`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-verde hover:bg-green-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all w-1/2 md:w-36 flex items-center justify-center gap-1 text-center"
                        >
                          Reservar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final step buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-5 border-t border-gray-150 gap-4">
                  <button
                    onClick={handleStart}
                    className="flex items-center gap-1.5 text-azul hover:text-dourado text-sm font-bold cursor-pointer transition-colors"
                  >
                    <RefreshCw size={14} /> Refazer o Quiz
                  </button>

                  <p className="text-xs text-gray-500 font-sans font-light text-center sm:text-right">
                    Quer ver tudo? Confirme o nosso <button onClick={() => {
                      const el = document.getElementById('hoteis');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }} className="text-azul font-bold underline cursor-pointer hover:text-dourado">catálogo completo de hotéis</button> abaixo!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
