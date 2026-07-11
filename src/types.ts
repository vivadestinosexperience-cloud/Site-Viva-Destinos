export interface Hotel {
  id: string;
  name: string;
  category: 'lagoa' | 'diroma' | 'viver-caldas' | 'olimpia' | 'sauipe' | 'rio-quente' | 'ctc' | 'wam' | 'beach-park' | 'amarante';
  categoryLabel: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  captainRating: number;
  captainTip: string;
  highlight: string;
  bestFor: string;
  
  // Detalhes extras fiéis ao cadastro fornecido pelo usuário
  strategicLocation?: string[];
  services?: string[];
  hours?: {
    checkIn?: string;
    checkOut?: string;
    reception?: string;
    breakfast?: string;
  };
  generalServices?: string[];
  restaurantsAndBars?: string[];
  wellnessAndSports?: string[];
  eventsAndConferences?: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  hotelName: string;
  avatar: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    description: string;
    icon: string;
  }[];
}

export interface LeadReserva {
  nome: string;
  telefone: string;
  email?: string | null;
  hotel: string;
  checkin: string;
  checkout: string;
  adultos: number;
  criancas: number;
  idades_criancas?: string | null;
  observacoes?: string | null;
  origem: string;
  status: string;
}

