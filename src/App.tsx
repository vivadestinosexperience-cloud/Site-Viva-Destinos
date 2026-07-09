import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExperiencePillars from './components/ExperiencePillars';
import InteractiveQuiz from './components/InteractiveQuiz';
import MascotSection from './components/MascotSection';
import HotelCatalog from './components/HotelCatalog';
import BookingSimulator from './components/BookingSimulator';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import TrustSection from './components/TrustSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import HotelModal from './components/HotelModal';
import { Hotel } from './types';
import { HOTELS_DATA } from './data/hotelsData';

export default function App() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam'>('todos');

  // Sync selectedHotel change to the URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentHotelId = params.get('hotel');

    if (selectedHotel) {
      if (currentHotelId !== selectedHotel.id) {
        params.set('hotel', selectedHotel.id);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({ hotelId: selectedHotel.id }, '', newUrl);
      }
    } else {
      if (currentHotelId) {
        params.delete('hotel');
        const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
        window.history.pushState({}, '', newUrl);
      }
    }
  }, [selectedHotel]);

  // Handle browser back/forward and initial URL query parameters
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const hotelId = params.get('hotel');
      if (hotelId) {
        const found = HOTELS_DATA.find((h) => h.id === hotelId);
        if (found) {
          setSelectedHotel(found);
          // Auto scroll to catalog so user knows where they are
          setTimeout(() => {
            const element = document.getElementById('hoteis');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 150);
        } else {
          setSelectedHotel(null);
        }
      } else {
        setSelectedHotel(null);
      }
    };

    // Run once on load to verify initial state
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleOpenHotelDetail = (hotel: Hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseHotelDetail = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="min-h-screen bg-claro text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* 1. Hero banner and navigation */}
      <Header />

      {/* 2. Complete Hotel Dual-Chain catalog (Portfolio) */}
      <HotelCatalog 
        onOpenHotelDetail={handleOpenHotelDetail} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 3. Brand Value Badges layout (5 Pillars) */}
      <ExperiencePillars />

      {/* 4. Travel Match Quiz with Capitão Destino */}
      <InteractiveQuiz onOpenHotelDetail={handleOpenHotelDetail} />

      {/* 5. Mascot interactive presentation */}
      <MascotSection />

      {/* 6. Customized price calculator & WhatsApp request generator */}
      <BookingSimulator />

      {/* 7. Social proof TripAdvisor comments */}
      <CustomerReviews />

      {/* Trust section Cadastur */}
      <TrustSection />

      {/* 8. Modern site footer */}
      <Footer />

      {/* 9. Floating Capitão Destino Assistant with notification bubble */}
      <WhatsAppWidget />

      {/* 10. Immersive hotel profile modal overlays */}
      <HotelModal hotel={selectedHotel} onClose={handleCloseHotelDetail} />
    </div>
  );
}
