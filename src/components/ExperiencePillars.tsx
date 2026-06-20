import { motion } from 'motion/react';
import { UserCheck, Sliders, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

export default function ExperiencePillars() {
  const pillars = [
    {
      title: 'Atendimento Humanizado',
      description: 'Consultores reais e especialistas dedicados a ouvir você e entender suas expectativas para criar a viagem dos sonhos.',
      icon: UserCheck,
      color: 'from-azul to-azul2',
      accent: 'text-dourado',
    },
    {
      title: 'Planejamento Personalizado',
      description: 'Cada detalhe da sua hospedagem e dos acessos aos parques é moldado sob medida para o tamanho da sua família.',
      icon: Sliders,
      color: 'from-[#0a2343] to-azul',
      accent: 'text-dourado',
    },
    {
      title: 'Segurança em cada etapa',
      description: 'Garantia de reservas 100% autênticas, check-ins ágeis sem dor de cabeça e suporte rápido para qualquer imprevisto.',
      icon: ShieldCheck,
      color: 'from-azul to-[#082245]',
      accent: 'text-dourado',
    },
    {
      title: 'Experiência do início ao fim',
      description: 'Do primeiro contato no WhatsApp até o retorno para casa, oferecemos monitoramento e mimos exclusivos.',
      icon: HeartHandshake,
      color: 'from-[#0b2f5b] to-azul',
      accent: 'text-dourado',
    },
    {
      title: 'Os melhores destinos para você',
      description: 'Selecionamos as melhores redes hoteleiras em Caldas Novas, Olímpia, Rio Quente e Costa do Sauípe para garantir alto padrão.',
      icon: Compass,
      color: 'from-azul to-[#091e38]',
      accent: 'text-dourado',
    },
  ];

  return (
    <section className="relative py-24 bg-claro px-6 md:px-[8%] overflow-hidden">
      {/* Decorative gradient layout background */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-dourado/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-[200px] h-[200px] bg-azul/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto">
        {/* Modern section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-dourado text-sm font-bold tracking-widest uppercase block">
            Diferencial Viva Destinos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-azul leading-tight">
            Escolha viver histórias incomparáveis, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-azul via-[#144885] to-azul animate-pulse">
              nós cuidamos do resto!
            </span>
          </h2>
          <div className="w-16 h-1 bg-dourado mx-auto rounded-full" />
          <p className="text-gray-650 leading-relaxed font-light text-sm sm:text-base">
            O valor da sua viagem está na qualidade das memórias. Conheça as cinco promessas fundamentais que tornam a sua viagem inesquecível.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                id={`pillar-card-${idx}`}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border-b-4 border-dourado flex flex-col justify-between items-start transition-shadow duration-300"
              >
                <div className="space-y-4 w-full">
                  {/* Icon Badge Holder */}
                  <div className={`p-3 rounded-xl bg-azul/5 ${pillar.accent} inline-flex items-center justify-center`}>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg text-azul leading-snug">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-650 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Visual item index identifier */}
                <div className="mt-6 w-full flex justify-end font-display font-bold text-gray-200 text-sm">
                  0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
