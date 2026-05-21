import { useState } from 'react';
import Header from './components/Header';
import ExperiencePillars from './components/ExperiencePillars';
import InteractiveQuiz from './components/InteractiveQuiz';
import MascotSection from './components/MascotSection';
import HotelCatalog from './components/HotelCatalog';
import BookingSimulator from './components/BookingSimulator';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import HotelModal from './components/HotelModal';
import { Hotel } from './types';

export default function App() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

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

      {/* 2. Brand Value Badges layout (5 Pillars) */}
      <ExperiencePillars />

      {/* 3. Travel Match Quiz with Capitão Destino */}
      <InteractiveQuiz onOpenHotelDetail={handleOpenHotelDetail} />

      {/* 4. Mascot interactive presentation */}
      <MascotSection />

      {/* 5. Complete Hotel Dual-Chain catalog */}
      <HotelCatalog onOpenHotelDetail={handleOpenHotelDetail} />

      {/* 6. Customized price calculator & WhatsApp request generator */}
      <BookingSimulator />

      {/* 7. Social proof TripAdvisor comments */}
      <CustomerReviews />

      {/* 8. Modern site footer */}
      <Footer />

      {/* 9. Floating Capitão Destino Assistant with notification bubble */}
      <WhatsAppWidget />

      {/* 10. Immersive hotel profile modal overlays */}
      <HotelModal hotel={selectedHotel} onClose={handleCloseHotelDetail} />
    </div>
  );
}
