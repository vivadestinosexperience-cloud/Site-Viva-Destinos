import { useState } from 'react';

interface MascotImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function MascotImage({ className = '', size = 'md' }: MascotImageProps) {
  const [hasError, setHasError] = useState(false);

  const getDimensions = () => {
    switch (size) {
      case 'sm': return 'w-14 h-14';
      case 'md': return 'w-48 h-48';
      case 'lg': return 'w-80 h-80 md:w-96 md:h-96';
      case 'xl': return 'w-96 h-96 md:w-[440px] md:h-[440px]';
    }
  };

  if (hasError) {
    // Elegant custom SVG representation of Captain Destino
    // Features a friendly toucan wearing a navy blue captain's hat, gold accents, and smiling!
    return (
      <svg
        className={`select-none ${getDimensions()} ${className}`}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Capitão Destino"
      >
        {/* Soft shadow background */}
        <ellipse cx="250" cy="460" rx="140" ry="25" fill="#000000" fillOpacity="0.15" />

        {/* Navy/Blue Suit Back Collar/Epaulets */}
        <path d="M150,380 Q250,390 350,380 L370,470 Q250,490 130,470 Z" fill="#061A35" />
        
        {/* Gold Epaulets */}
        <path d="M130,370 L170,390 L160,420 L120,400 Z" fill="#D9A441" />
        <circle cx="145" cy="405" r="5" fill="#FFF" />
        <path d="M370,370 L330,390 L340,420 L380,400 Z" fill="#D9A441" />
        <circle cx="355" cy="405" r="5" fill="#FFF" />

        {/* White Shirt & Black Tie */}
        <path d="M220,385 L280,385 L250,440 Z" fill="#FFFFFF" />
        <path d="M242,400 L258,400 L262,450 L250,470 L238,450 Z" fill="#0B2F5B" />
        
        {/* Toucan Main Body/Head */}
        <circle cx="250" cy="250" r="140" fill="#0C1F3B" />
        
        {/* Toucan White Bib/Belly */}
        <path d="M130,280 C130,360 170,390 250,390 C330,390 370,360 370,280 C360,200 340,200 250,200 C160,200 140,200 130,280 Z" fill="#F6F8FB" />

        {/* Big Friendly Eyes */}
        {/* Left eye background */}
        <circle cx="190" cy="180" r="38" fill="#FFFFFF" stroke="#061A35" strokeWidth="3" />
        <circle cx="190" cy="180" r="28" fill="#4299E1" />
        <circle cx="194" cy="176" r="16" fill="#1A202C" />
        <circle cx="188" cy="170" r="6" fill="#FFFFFF" />
        {/* Right eye background */}
        <circle cx="310" cy="180" r="38" fill="#FFFFFF" stroke="#061A35" strokeWidth="3" />
        <circle cx="310" cy="180" r="28" fill="#4299E1" />
        <circle cx="306" cy="176" r="16" fill="#1A202C" />
        <circle cx="302" cy="170" r="6" fill="#FFFFFF" />

        {/* Rosy Cheeks */}
        <circle cx="145" cy="245" r="12" fill="#FE8A8A" fillOpacity="0.6" />
        <circle cx="355" cy="245" r="12" fill="#FE8A8A" fillOpacity="0.6" />

        {/* Massive Colorful Toucan Beak */}
        {/* Back Beak Base Connection */}
        <path d="M180,210 Q250,215 320,210 Q340,280 250,340 Q160,280 180,210 Z" fill="#FFA500" />
        {/* Top/Front Beak (Golden Yellow) */}
        <path d="M175,215 C175,215 250,160 325,215 C340,260 310,290 250,290 C190,290 160,260 175,215 Z" fill="#FFD700" />
        {/* Reddish/Orange Beak Middle Accent */}
        <path d="M210,225 C210,225 250,185 290,225 C295,250 210,250 210,225 Z" fill="#FF4500" />
        {/* Dark Beak Tip */}
        <path d="M230,200 Q250,185 270,200 L260,230 Q250,235 240,230 Z" fill="#1A202C" />
        {/* Smiling Mouth line below/inside beak */}
        <path d="M200,280 Q250,335 300,280" stroke="#E53E3E" strokeWidth="6" strokeLinecap="round" />
        <path d="M215,290 Q250,325 285,290" fill="#E53E3E" />

        {/* Captain's Hat (with elegant detail) */}
        {/* Dark Navy Cap Peak */}
        <path d="M120,135 C150,60 350,60 380,135 Z" fill="#0C1F3B" />
        <path d="M130,130 C160,80 340,80 370,130 Z" fill="#FFFFFF" />
        
        {/* Gold Cap Band */}
        <path d="M110,135 Q250,150 390,135 L395,148 Q250,165 105,148 Z" fill="#D9A441" />
        
        {/* Black Visor Brim */}
        <path d="M125,148 Q250,195 375,148 Q390,175 350,180 Q250,190 150,180 Q110,175 125,148 Z" fill="#111827" />
        {/* Visor shine */}
        <path d="M140,155 Q250,185 360,155 Q335,165 250,170 Q165,165 140,155 Z" fill="#FFF" fillOpacity="0.25" />

        {/* Anchor/Pilot Logo Badge in Center of the Hat */}
        <circle cx="250" cy="115" r="22" fill="#D9A441" />
        <circle cx="250" cy="115" r="18" fill="#061A35" />
        {/* Wings / Flight path in Badge */}
        <path d="M238,115 L262,115 M250,105 L250,123 M242,110 L258,120 M242,120 L258,110" stroke="#D9A441" strokeWidth="2" strokeLinecap="round" />
        <circle cx="250" cy="115" r="4" fill="#D9A441" />
        
        {/* Compass stars around Captain */}
        <path d="M90,200 L95,210 L105,215 L95,220 L90,230 L85,220 L75,215 L85,210 Z" fill="#D9A441" className="animate-pulse" />
        <path d="M410,240 L413,246 L420,250 L413,254 L410,260 L407,254 L400,250 L407,246 Z" fill="#D9A441" className="animate-pulse" />

        {/* Hand with Thumbs Up! */}
        <g transform="translate(100, 310)">
          {/* Blue sleeve */}
          <path d="M-40,60 C-40,60 -10,35 15,40 C10,65 -15,85 -40,80 Z" fill="#061A35" stroke="#D9A441" strokeWidth="2" />
          {/* Gold wrist stripes */}
          <path d="M-10,41 Q2,47 11,41" stroke="#D9A441" strokeWidth="4" />
          <path d="M-14,46 Q-2,52 7,46" stroke="#D9A441" strokeWidth="4" />
          {/* Toucan Feather Hand */}
          <circle cx="25" cy="35" r="20" fill="#0C1F3B" />
          {/* Thumb pointing up */}
          <path d="M20,25 C15,5 30,0 35,10 C40,20 30,35 25,35 Z" fill="#0C1F3B" />
          {/* Folded fingers */}
          <rect x="25" y="30" width="18" height="10" rx="5" fill="#1A202C" />
          <rect x="23" y="38" width="18" height="10" rx="5" fill="#1A202C" />
          <rect x="20" y="46" width="18" height="10" rx="5" fill="#1A202C" />
        </g>
      </svg>
    );
  }

  // If there's no error, render the actual image
  return (
    <img
      src="/capitao-destino.png"
      alt="Capitão Destino"
      className={`${getDimensions()} object-contain select-none transition-transform duration-500 hover:scale-105 duration-300 ${className}`}
      onError={() => {
        console.warn('Mascot image failed, loading custom high-fidelity SVG fallback.');
        setHasError(true);
      }}
      referrerPolicy="no-referrer"
    />
  );
}
