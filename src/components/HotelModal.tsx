import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Star, Compass, CheckCircle2, ShieldAlert, MessageCircle, Info, MapPin, Clock } from 'lucide-react';
import MascotImage from './MascotImage';
import { Hotel } from '../types';

interface HotelModalProps {
  hotel: Hotel | null;
  onClose: () => void;
}

export default function HotelModal({ hotel, onClose }: HotelModalProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showZoomHint, setShowZoomHint] = useState(true);

  // Drag / swipe states for main gallery
  const [mainDragStartX, setMainDragStartX] = useState<number | null>(null);
  const [mainDragCurrentX, setMainDragCurrentX] = useState<number | null>(null);
  const [isMainSwiping, setIsMainSwiping] = useState(false);
  const isMainMoving = useRef(false);

  // Drag / swipe states for lightbox
  const [lightDragStartX, setLightDragStartX] = useState<number | null>(null);
  const [lightDragCurrentX, setLightDragCurrentX] = useState<number | null>(null);
  const [isLightSwiping, setIsLightSwiping] = useState(false);
  const isLightMoving = useRef(false);

  const handleMainDragStart = (clientX: number) => {
    setMainDragStartX(clientX);
    setMainDragCurrentX(clientX);
    setIsMainSwiping(true);
    isMainMoving.current = false;
  };

  const handleMainDragMove = (clientX: number) => {
    if (!isMainSwiping || mainDragStartX === null) return;
    setMainDragCurrentX(clientX);
    if (Math.abs(clientX - mainDragStartX) > 10) {
      isMainMoving.current = true;
    }
  };

  const handleMainDragEnd = (e?: React.MouseEvent | React.TouchEvent) => {
    if (!isMainSwiping || mainDragStartX === null || mainDragCurrentX === null) return;

    const diff = mainDragStartX - mainDragCurrentX;
    const threshold = 55; // pixels to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged Left -> Next image
        setActiveImgIndex((prev) => (prev + 1) % hotel.images.length);
      } else {
        // Dragged Right -> Previous image
        setActiveImgIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
      }
      setShowZoomHint(false);
    } else {
      // If we clicked (very small drag) on desktop, launch zoomed photo
      if (!isMainMoving.current && e && window.innerWidth >= 1024) {
        handleOpenLightbox();
      }
    }

    setMainDragStartX(null);
    setMainDragCurrentX(null);
    setIsMainSwiping(false);
  };

  const handleLightDragStart = (clientX: number) => {
    setLightDragStartX(clientX);
    setLightDragCurrentX(clientX);
    setIsLightSwiping(true);
    isLightMoving.current = false;
  };

  const handleLightDragMove = (clientX: number) => {
    if (!isLightSwiping || lightDragStartX === null) return;
    setLightDragCurrentX(clientX);
    if (Math.abs(clientX - lightDragStartX) > 10) {
      isLightMoving.current = true;
    }
  };

  const handleLightDragEnd = () => {
    if (!isLightSwiping || lightDragStartX === null || lightDragCurrentX === null) return;

    const diff = lightDragStartX - lightDragCurrentX;
    const threshold = 55; // pixels to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged Left -> Next image in Lightbox
        setActiveImgIndex((prev) => (prev + 1) % hotel.images.length);
      } else {
        // Dragged Right -> Previous image in Lightbox
        setActiveImgIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
      }
    }

    setLightDragStartX(null);
    setLightDragCurrentX(null);
    setIsLightSwiping(false);
  };

  // Lock body scroll and preload images when modal is active
  useEffect(() => {
    if (hotel) {
      document.body.style.overflow = 'hidden';
      setActiveImgIndex(0); // Reset index
      setIsLightboxOpen(false); // Reset lightbox
      
      // Only keep the big centered helper prompt on desktop screens
      if (window.innerWidth < 1024) {
        setShowZoomHint(false);
      } else {
        setShowZoomHint(true);
      }

      // Preload all images for this hotel to make transitions instant
      hotel.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hotel]);

  if (!hotel) return null;

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % hotel.images.length);
    setShowZoomHint(false);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
    setShowZoomHint(false);
  };

  const handleOpenLightbox = () => {
    setIsLightboxOpen(true);
    setShowZoomHint(false);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Desktop user uses mouse/cursor, clicking the photo directly to zoom is wonderful.
    // Mobile user swiping to scroll pages or swipe photos can accidentally trigger lightbox if total image is clickable.
    // Therefore, prevent image clicks on mobile and let them use the dedicated buttons.
    if (window.innerWidth >= 1024) {
      handleOpenLightbox();
    }
  };

  // Pre-fill WhatsApp URL link generator
  const getWhatsAppLink = () => {
    const text = `Olá! Gostaria de planejar minha viagem e fazer uma cotação especial para o hotel *${hotel.name}* (da rede ${hotel.categoryLabel}) com a Viva Destinos Experience. Aguardo contato de um consultor!`;
    return `https://wa.me/556421310045?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 md:p-8 z-[99999] overflow-y-auto backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-auto flex flex-col pointer-events-auto border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar: contains the highly visible Zoom badge and the Close trigger side-by-side (No conflict, no overlap) */}
          <div className="bg-azul p-3 sm:p-4 flex items-center justify-between border-b border-white/10 shrink-0 z-35 relative">
            {/* Left/Center Alert Banner */}
            <div 
              onClick={handleOpenLightbox}
              className="flex-1 flex items-center justify-center gap-2 sm:gap-2.5 cursor-pointer select-none bg-gradient-to-r from-dourado via-yellow-500 to-dourado text-azul px-3 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-display font-black text-[9px] sm:text-xs uppercase tracking-wider hover:brightness-105 active:scale-[0.99] transition-all shadow-md animate-pulse-subtle shrink"
              title="Clique para abrir galeria em HD"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azul opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-azul"></span>
              </span>
              <span className="text-center font-extrabold tracking-widest leading-none sm:leading-tight">
                🔎 CLIQUE NAS FOTOS PARA AMPLIAR EM HD! 📸
              </span>
            </div>

            {/* Right Close Button */}
            <button
              onClick={onClose}
              className="ml-2.5 sm:ml-4 bg-white/10 hover:bg-white/20 text-white p-2.5 sm:p-3 rounded-2xl transition-all cursor-pointer border border-white/10 shrink-0 active:scale-95 flex items-center justify-center shadow-lg"
              title="Fechar Detalhes"
            >
              <X size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>

          {/* Core content scrollbar wrapped grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[78vh] sm:max-h-[82vh] lg:max-h-[80vh] overflow-y-auto lg:overflow-hidden">
            
            {/* Left: Interactive Image Slider Column (7 Rows large on LG) */}
            <div 
              className={`lg:col-span-7 bg-gray-900 relative h-64 sm:h-96 lg:h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] overflow-hidden select-none transition-colors ${
                isMainSwiping ? 'cursor-grabbing bg-gray-950' : 'cursor-grab lg:cursor-zoom-in'
              }`}
              onTouchStart={(e) => handleMainDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleMainDragMove(e.touches[0].clientX)}
              onTouchEnd={() => handleMainDragEnd()}
              onMouseDown={(e) => {
                // Ignore clicks originating from interactable overlay buttons inside container
                const target = e.target as HTMLElement;
                if (target.closest('button') || target.closest('a')) return;
                if (e.button !== 0) return;
                handleMainDragStart(e.clientX);
              }}
              onMouseMove={(e) => handleMainDragMove(e.clientX)}
              onMouseUp={(e) => handleMainDragEnd(e)}
              onMouseLeave={() => {
                if (isMainSwiping) handleMainDragEnd();
              }}
            >
              <div className="absolute inset-0 select-none">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={activeImgIndex}
                    src={hotel.images[activeImgIndex]}
                    alt={`${hotel.name} - Imagem ${activeImgIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
              
              {/* Persistent helper badge in the top-left corner */}
              <button
                onClick={(e) => { e.stopPropagation(); handleOpenLightbox(); }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute top-4 left-4 bg-dourado hover:bg-azul text-azul hover:text-white px-3.5 py-2 rounded-2xl z-20 transition-all duration-300 cursor-pointer border border-dourado/45 text-[10px] sm:text-xs flex items-center gap-1.5 font-extrabold uppercase tracking-widest shadow-xl active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azul hover:bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-azul hover:bg-white"></span>
                </span>
                <span>🔎 Ampliar Foto</span>
              </button>

              {/* Pulsing centered zoom helper */}
              <AnimatePresence>
                {showZoomHint && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center p-4 bg-black/45 z-20 cursor-zoom-in"
                    onClick={(e) => { e.stopPropagation(); handleOpenLightbox(); }}
                  >
                    <motion.div
                      animate={{
                        scale: [0.96, 1.04, 0.96],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="bg-azul border-2 border-dourado text-white p-6 rounded-3xl flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md text-center max-w-[90%] sm:max-w-xs relative cursor-default"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                    >
                      {/* Self-dismiss cross icon */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowZoomHint(false);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="absolute top-2.5 right-2.5 text-white/50 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors cursor-pointer border border-white/5"
                        title="Ocultar aviso"
                      >
                        <X size={14} />
                      </button>

                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-dourado text-azul shrink-0 shadow-lg">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dourado/60 opacity-100"></span>
                        <span className="relative text-xl font-bold">🔎</span>
                      </div>
                      
                      <h4 className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-dourado mt-4 leading-tight">
                        Clique Para Ampliar
                      </h4>
                      
                      <p className="text-[11px] sm:text-xs text-white/90 font-light mt-2 leading-relaxed">
                        Toque no meio da foto para abrir a galeria em <strong className="text-dourado font-extrabold animate-pulse">Alta Definição (HD)</strong>.
                      </p>

                      <button
                        onClick={(e) => { e.stopPropagation(); handleOpenLightbox(); }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="mt-4 px-4 py-2 bg-dourado hover:bg-yellow-600 text-azul font-black rounded-full text-[10px] uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                      >
                        Visualizar em HD
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Slider Arrows controls */}
              <button
                onClick={handlePrevImage}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full z-30 transition-all cursor-pointer border border-white/5 active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNextImage}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white p-2 sm:p-3 rounded-full z-30 transition-all cursor-pointer border border-white/5 active:scale-95"
              >
                <ChevronRight size={18} />
              </button>

              {/* Slider Dots indications */}
              <div 
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full z-30"
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                {hotel.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setActiveImgIndex(idx); }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${activeImgIndex === idx ? 'bg-dourado scale-125' : 'bg-white/60'}`}
                  />
                ))}
              </div>

              {/* Dynamic Overlay Image description tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-azul/90 text-dourado border border-dourado/20 backdrop-blur-md px-4 py-2 text-[11px] sm:text-xs rounded-xl flex items-center justify-between shadow">
                <span>⭐ {hotel.highlight}</span>
                <span className="text-white/60 font-mono">{(activeImgIndex + 1)} / {hotel.images.length}</span>
              </div>
            </div>

            {/* Right: Hotel features & reviews details column (5 Rows out of 12) */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 overflow-visible lg:overflow-y-auto lg:max-h-[80vh] bg-gradient-to-b from-white to-claro">
              <div className="space-y-4">
                {/* Category small Label heading */}
                <div className="flex items-center gap-2">
                  <span className="bg-azul/10 text-azul font-display font-extrabold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {hotel.categoryLabel}
                  </span>
                </div>

                {/* Hotel Heading */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-azul leading-tight">
                    {hotel.name}
                  </h3>
                  <p className="text-dourado font-medium italic text-xs sm:text-sm">
                    "{hotel.tagline}"
                  </p>
                </div>

                <div className="w-full h-px bg-gray-150" />

                {/* Primary Narrative Description */}
                <p className="text-gray-650 leading-relaxed font-sans font-light text-xs sm:text-sm text-justify">
                  {hotel.description}
                </p>

                {/* Spec List checkmarks */}
                <div className="space-y-2.5">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                    <Info size={14} className="text-dourado" /> Ficha Técnica & Lazer:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {hotel.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-xs text-gray-700">
                        <CheckCircle2 size={13} className="text-green-550 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Localização Estratégica */}
                {hotel.strategicLocation && hotel.strategicLocation.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin size={14} className="text-dourado" /> Localização Estratégica:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50/80 p-3.5 rounded-2xl border border-gray-200/60 shadow-sm">
                      {hotel.strategicLocation.map((loc, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <span className="text-dourado font-bold leading-none mt-0.5">•</span>
                          <span className="font-sans font-light">{loc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Horários de Funcionamento */}
                {hotel.hours && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <Clock size={14} className="text-dourado" /> Horários e Prazos:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-azul/5 p-3.5 rounded-2xl border border-azul/10 text-xs text-azul leading-normal">
                      {hotel.hours.checkIn && (
                        <div className="p-1 px-2 rounded-lg bg-white/40">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-azul/60 block">Check-in</span>
                          <strong>{hotel.hours.checkIn}</strong>
                        </div>
                      )}
                      {hotel.hours.checkOut && (
                        <div className="p-1 px-2 rounded-lg bg-white/40">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-azul/60 block">Check-out</span>
                          <strong>{hotel.hours.checkOut}</strong>
                        </div>
                      )}
                      {hotel.hours.reception && (
                        <div className="col-span-1 sm:col-span-2 p-1 px-2 rounded-lg bg-white/40">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-azul/60 block">Recepção</span>
                          <strong>{hotel.hours.reception}</strong>
                        </div>
                      )}
                      {hotel.hours.breakfast && (
                        <div className="col-span-1 sm:col-span-2 p-1 px-2 rounded-lg bg-white/40">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-azul/60 block">Café da Manhã</span>
                          <strong>{hotel.hours.breakfast}</strong>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Serviços Gerais */}
                {hotel.generalServices && hotel.generalServices.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <Compass size={14} className="text-dourado" /> Serviços Gerais:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.generalServices.map((svc, idx) => (
                        <span key={idx} className="bg-azul/[0.03] hover:bg-azul/[0.06] transition-colors text-azul/95 border border-azul/10 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Restaurantes e Bares */}
                {hotel.restaurantsAndBars && hotel.restaurantsAndBars.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <Compass size={14} className="text-amber-500" /> Restaurantes e Bares:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.restaurantsAndBars.map((svc, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-800 border border-amber-200/50 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bem-estar e Esportes */}
                {hotel.wellnessAndSports && hotel.wellnessAndSports.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <Compass size={14} className="text-emerald-500" /> Bem-estar e Esportes:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.wellnessAndSports.map((svc, idx) => (
                        <span key={idx} className="bg-emerald-50 text-emerald-800 border border-emerald-200/50 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Eventos e Conferências */}
                {hotel.eventsAndConferences && hotel.eventsAndConferences.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <Compass size={14} className="text-purple-500" /> Eventos e Conferências:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.eventsAndConferences.map((svc, idx) => (
                        <span key={idx} className="bg-purple-50 text-purple-800 border border-purple-200/50 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Serviços do diRoma clássicos */}
                {hotel.services && hotel.services.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-azul uppercase tracking-wider flex items-center gap-1.5">
                      <Compass size={14} className="text-dourado" /> Serviços & Conveniências:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.services.map((svc, idx) => (
                        <span key={idx} className="bg-azul/[0.04] text-azul border border-azul/10 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Exclusive "Review do Capitão" Certificate section */}
              <div className="bg-gradient-to-r from-[#FFFBF0] to-[#FFF6E3] border border-dourado/30 rounded-2xl p-4.5 space-y-2 relative overflow-hidden shadow-inner">
                {/* Embedded compass glow background */}
                <div className="absolute -bottom-8 -right-8 text-dourado/10 pointer-events-none rotate-12">
                  <Compass size={110} />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-full overflow-hidden bg-azul/5 flex items-center justify-center border border-dourado/20 shrink-0">
                    <MascotImage size="sm" />
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="font-display font-bold text-[11px] sm:text-xs text-azul uppercase tracking-widest leading-none">
                      Resenha do Capitão Destino
                    </h5>
                    <div className="flex items-center text-xs text-dourado font-bold">
                      Super Recomendado! ⭐
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed italic relative z-10 font-sans font-light">
                  "{hotel.captainTip}"
                </p>
              </div>

              {/* Direct converter Trigger Button */}
              <div className="space-y-4 pt-3 border-t border-gray-150">
                <div className="bg-azul/5 p-3 rounded-2xl flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-dourado shrink-0" />
                  <div className="text-xs text-azul leading-normal">
                    Assessoria <strong>105% Gratuita</strong>! Sem taxas extras de reserva na Viva Destinos.
                  </div>
                </div>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-verde hover:bg-green-600 text-white font-bold text-center hover:shadow-lg w-full py-4 rounded-full flex items-center justify-center gap-2 shadow cursor-pointer text-base sm:text-lg transition-all"
                >
                  <MessageCircle size={20} fill="#FFF" className="text-verde" />
                  Falar com Consultor no WhatsApp
                </a>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Immersive lightbox view */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                // If a drag took place, don't close
                if (isLightMoving.current) return;
                setIsLightboxOpen(false);
              }}
              className={`fixed inset-0 bg-black/95 z-[100000] flex items-center justify-center p-4 md:p-8 backdrop-blur-lg select-none transition-colors ${
                isLightSwiping ? 'cursor-grabbing bg-black' : 'cursor-grab md:cursor-zoom-out'
              }`}
              onTouchStart={(e) => handleLightDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleLightDragMove(e.touches[0].clientX)}
              onTouchEnd={() => handleLightDragEnd()}
              onMouseDown={(e) => {
                // Ignore clicks originating from interactive navigation structures
                const target = e.target as HTMLElement;
                if (target.closest('button')) return;
                if (e.button !== 0) return;
                handleLightDragStart(e.clientX);
              }}
              onMouseMove={(e) => handleLightDragMove(e.clientX)}
              onMouseUp={() => handleLightDragEnd()}
              onMouseLeave={() => { if (isLightSwiping) handleLightDragEnd(); }}
            >
              {/* Close button */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-[100001] transition-colors cursor-pointer border border-white/20"
              >
                <X size={24} />
              </button>

              {/* Slider control left */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevImage(e); }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3.5 sm:p-4 rounded-full z-[100001] transition-all cursor-pointer border border-white/20 active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slider control right */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNextImage(e); }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3.5 sm:p-4 rounded-full z-[100001] transition-all cursor-pointer border border-white/20 active:scale-95"
              >
                <ChevronRight size={24} />
              </button>

              <div className="relative flex items-center justify-center w-full h-full max-w-full max-h-[85vh] md:max-h-[90vh]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={activeImgIndex}
                    initial={{ scale: 0.97, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.97, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    src={hotel.images[activeImgIndex]}
                    alt={`${hotel.name} - Imagem ${activeImgIndex + 1}`}
                    className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-2xl shadow-2xl select-none pointer-events-none absolute"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Bottom info tag inside lightbox */}
              <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white border border-white/10 backdrop-blur-md px-6 py-2.5 text-xs sm:text-sm rounded-full flex items-center gap-4 shadow-xl select-none z-[100001]"
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <span className="font-bold">{hotel.name}</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span className="text-white/80 font-mono">{(activeImgIndex + 1)} / {hotel.images.length}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
