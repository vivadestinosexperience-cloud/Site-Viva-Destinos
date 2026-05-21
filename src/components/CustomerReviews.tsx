import { motion } from 'motion/react';
import { Star, Quote, MapPin } from 'lucide-react';
import { REVIEWS_DATA } from '../data/hotelsData';

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-claro px-6 md:px-[8%] relative overflow-hidden">
      {/* Decorative quotes background nodes */}
      <div className="absolute top-10 left-10 text-azul/5 pointer-events-none select-none">
        <Quote size={220} />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title elements */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-dourado text-sm font-bold tracking-widest uppercase block">
            Voz dos Hóspedes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul leading-tight">
            Quem viaja com a gente <span className="text-dourado">comenta e recomenda!</span>
          </h2>
          <div className="w-16 h-1 bg-dourado mx-auto rounded-full" />
          <p className="text-gray-650 max-w-lg mx-auto text-sm sm:text-base font-light">
            Confira as avaliações de famílias e casais reais de todo o Brasil que planejaram as férias perfeitas em Caldas Novas com a nossa assessoria.
          </p>
        </div>

        {/* Triple Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              id={`review-card-${rev.id}`}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 flex flex-col justify-between items-start space-y-6 transition-all duration-300"
            >
              {/* Star rating and quotes indicator */}
              <div className="flex justify-between items-center w-full pb-3 border-b border-gray-100">
                <div className="flex text-dourado gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#D9A441" className="text-dourado" />
                  ))}
                </div>
                <Quote size={20} className="text-dourado/40" />
              </div>

              {/* Core rich client feedback comment */}
              <p className="text-gray-650 leading-relaxed font-sans font-light text-xs sm:text-sm italic flex-grow">
                "{rev.comment}"
              </p>

              {/* Verified Hotel label tag */}
              <div className="bg-azul/5 text-azul text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start">
                Reserva: <span className="text-dourado font-extrabold">{rev.hotelName}</span>
              </div>

              {/* Client detailed descriptors */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 w-full">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-dourado/20"
                />
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-sm text-azul leading-none">
                    {rev.name}
                  </h4>
                  <span className="text-gray-400 font-sans text-xs flex items-center gap-1 font-light">
                    <MapPin size={12} className="text-dourado shrink-0" /> {rev.location}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
