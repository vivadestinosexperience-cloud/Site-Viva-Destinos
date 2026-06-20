import { useState } from 'react';
import Header from './components/Header';
import DestinationsShowcase from './components/DestinationsShowcase';
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

export default function App() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam'>('todos');

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

      {/* Modern Destinations Showcase */}
      <DestinationsShowcase setActiveTab={setActiveTab} />

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
