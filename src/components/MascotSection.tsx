import { motion } from 'motion/react';
import MascotImage from './MascotImage';
import { Compass, Sparkles, Waves, ShieldAlert, Check } from 'lucide-react';

export default function MascotSection() {
  const captainSecrets = [
    { title: 'Estilo de Viagem Seguro', desc: 'No meu voo, ninguém fica perdido! Auxiliamos em toda a documentação das reservas e vouchers.' },
    { title: 'Melhores Dicas Locais', desc: 'Sei exatamente onde tem os melhores cafés regionais, restaurantes e quando cada atração está mais vazia.' },
    { title: 'Suporte Terremoto 24h', desc: 'Ficou sem toalha? Teve dúvida? Nosso time de assistentes responde na hora no WhatsApp.' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-azul2 to-azul text-white px-6 md:px-[8%] overflow-hidden">
      {/* Decorative compass glow and plane traces */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-dourado/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Mascot Image with animated compasses */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Circular radar glow */}
          <div className="absolute w-72 h-72 rounded-full border border-dourado/10 animate-ping pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-dourado/5 pointer-events-none hidden sm:block" />
          
          <div className="relative animate-float">
            <MascotImage size="lg" className="drop-shadow-2xl" />
          </div>
        </motion.div>

        {/* Right: Interactive mascot storytelling */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-3">
            <span className="text-dourado text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <Compass size={16} className="animate-spin text-dourado" /> O Líder de Opinião
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-white leading-tight">
              Conheça o Lendário <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado via-yellow-200 to-dourado">
                Capitão Destino
              </span>
            </h2>
            <div className="w-16 h-1 bg-dourado rounded-full" />
          </div>

          <p className="text-gray-150 leading-relaxed font-sans font-light text-base sm:text-lg">
            O Capitão Destino é o embaixador e guia supremo de viagens da <strong className="text-dourado font-medium">Viva Destinos Experience</strong>. Sob a sua direção, o nosso time se tornou referência de cuidado, planejamento personalizado e suporte total para que a sua viagem aconteça perfeitamente do início ao fim.
          </p>

          <blockquote className="border-l-4 border-dourado pl-4 py-2 italic text-sm text-white/90 bg-white/5 rounded-r-xl">
            "Minha maior missão é fazer seu sorriso durar o ano todo. Seu descanso, sua risada e os momentos com sua família são bens sagrados que eu protejo voando alto!"
            <cite className="block text-xs text-dourado font-bold tracking-widest uppercase mt-2 not-italic">
              — Capitão Destino
            </cite>
          </blockquote>

          {/* Captain secrets Bullet grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            {captainSecrets.map((secret) => (
              <div key={secret.title} className="space-y-2 bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors duration-200">
                <span className="text-dourado font-display font-bold text-xs flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles size={12} /> {secret.title}
                </span>
                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                  {secret.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a 
              href="https://wa.me/556421310045?text=Ol%C3%A1+Capit%C3%A3o%21+Quero+planejar+minha+viagem+com+o+seu+suporte+exclusivo%21" 
              target="_blank"
              rel="noreferrer"
              className="bg-dourado text-azul hover:bg-white border-2 border-dourado font-bold px-8 py-4 rounded-full text-base sm:text-lg shadow-xl hover:shadow-dourado/20 transition-all cursor-pointer text-center"
            >
              Falar com o Líder no WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
