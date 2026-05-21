import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import MascotImage from './MascotImage';

export default function WhatsAppWidget() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show inviting message 2.5 seconds after landing
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end select-none">
      
      {/* Mini notification inviting the guest */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="bg-white text-azul p-4 rounded-2xl shadow-2xl border border-gray-150 mb-3 max-w-[260px] relative pr-9 whatsapp-shadow"
          >
            {/* Close card indicator */}
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2.5 right-2.5 text-gray-450 hover:text-azul cursor-pointer"
            >
              <X size={14} />
            </button>

            {/* Content speech */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-display font-extrabold text-dourado tracking-wider block">
                🦜 Capitão Destino Online:
              </span>
              <p className="text-xs text-gray-650 leading-relaxed font-sans font-light">
                Olá! Quer tirar dúvidas sobre os hotéis? É só me chamar no WhatsApp!
              </p>
            </div>
            {/* Visual small speech arrow pointing down */}
            <div className="absolute -bottom-2 right-6 w-3.5 h-3.5 bg-white border-r border-b border-gray-150 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating circle button trigger */}
      <motion.a
        href="https://wa.me/556421310045?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+falar+com+um+Consultor+Exclusivo+da+Viva+Destinos%21"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-verde hover:bg-green-600 text-white flex items-center justify-center shadow-xl cursor-pointer hover:shadow-green-500/30 transition-shadow relative border-2 border-white/20 overflow-visible group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:hidden" />
        
        {/* Capitão Destino icon inside the floating button */}
        <div className="w-13 h-13 overflow-hidden rounded-full flex items-center justify-center bg-white/5 relative z-10">
          <MascotImage size="sm" />
        </div>

        {/* Floating WhatsApp micro icon overlay */}
        <span className="absolute -top-1 -left-1 bg-white text-verde p-1 rounded-full shadow border border-green-200">
          <MessageCircle size={14} fill="#25D366" className="text-verde" />
        </span>
      </motion.a>

    </div>
  );
}
