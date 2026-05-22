import { ShieldCheck, Award, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="certificados" className="bg-[#02050c] text-white py-16 px-6 md:px-[8%] relative overflow-hidden border-t border-b border-white/5">
      {/* Ambient glowing accents in the background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#0b2f5b]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-[250px] h-[250px] bg-dourado/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Custom Visual Shield Badge (No official Gov Images, Pure CSS) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-[280px]">
              {/* Animated outer border glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-dourado/40 to-azul2/40 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              {/* The Badge Card */}
              <div className="relative bg-azul text-white p-7 rounded-2xl border-2 border-dourado/50 flex flex-col items-center text-center shadow-xl">
                
                {/* Stamp header */}
                <div className="w-16 h-16 rounded-full bg-azul2/80 border border-dourado flex items-center justify-center mb-4 relative shadow-inner">
                  <ShieldCheck className="text-dourado w-9 h-9" />
                  {/* Decorative dots in circle */}
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-dourado/35 pointer-events-none animate-spin-slow" />
                </div>

                {/* Stamp Text */}
                <div className="space-y-2 mt-1">
                  <span className="text-dourado font-display font-bold text-xs uppercase tracking-[0.2em] block">
                    Cadastro Oficial
                  </span>
                  
                  <div className="my-2 py-1.5 px-3 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-display font-extrabold text-base text-white tracking-wider">
                      CADASTUR
                    </h4>
                  </div>
                  
                  <p className="text-[10px] uppercase font-mono font-medium text-white/75 tracking-wider leading-relaxed">
                    Ministério do Turismo
                  </p>
                  
                  <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-1.5 text-[9px] text-[#A3B3C8] font-mono">
                    <CheckCircle2 size={10} className="text-emerald-400" />
                    <span>Situação: Regular</span>
                  </div>
                </div>

                {/* Mini fine print security design lines */}
                <div className="w-full mt-4 flex items-center justify-between gap-1 select-none">
                  <span className="h-[1px] bg-white/10 flex-1"></span>
                  <span className="text-[7px] text-white/30 uppercase tracking-widest font-mono shrink-0">Security Check</span>
                  <span className="h-[1px] bg-white/10 flex-1"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Text and Copy Content */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b2f5b] rounded-full border border-dourado/30 text-xs text-dourado font-medium select-none">
              <Award size={14} />
              <span>Selo de Conformidade Regulatória</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              Agência cadastrada no <span className="text-transparent bg-clip-text bg-gradient-to-r from-dourado via-[#f5d59a] to-dourado">Cadastur</span>
            </h3>

            <p className="text-gray-305 leading-relaxed text-sm sm:text-base font-light text-white/80 max-w-2xl">
              A Viva Destinos Experience é uma agência de viagens cadastrada no Cadastur, sistema oficial do Ministério do Turismo para prestadores de serviços turísticos. Viaje com mais segurança, transparência e confiança.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* WhatsApp Call to Action Button */}
              <a
                href="https://wa.me/556421310045?text=Olá! Gostaria de falar com a agência credenciada para saber mais sobre pacotes de turismo."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-dourado via-amber-500 to-dourado hover:brightness-110 active:scale-[0.99] text-azul font-display font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-dourado/20 transition-all flex items-center justify-center gap-2 duration-300"
              >
                <MessageCircle size={18} className="fill-current" />
                Falar com a agência
              </a>

              {/* Verified badge text link */}
              <div className="text-xs text-white/50 font-mono flex items-center gap-1">
                <span>Cadastro N°</span>
                <span className="font-semibold text-white/80 select-all underline decoration-dourado/50">66.875.157/0001-79</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
