import { Hotel, Review, QuizQuestion } from '../types';

export const HOTELS_DATA: Hotel[] = [
  {
    id: 'lagoa-quente',
    name: 'Lagoa Quente Hotel',
    category: 'lagoa',
    categoryLabel: 'Lagoa Parques e Hotéis',
    tagline: 'Acesso grátis aos parques e diversão completa para toda a família!',
    description: 'Prepare-se para uma experiência inesquecível! No Lagoa Quente Hotel, você e sua família têm acesso ILIMITADO e GRATUITO ao Lagoa Termas Parque, o maior complexo de lazer de Caldas Novas. Tudo para a diversão das crianças e o relaxamento dos pais, sem preocupações! Horário de funcionamento do Lagoa Termas Parque e Lagoa Eco Praia: Terça a sexta 10:00 às 17:00 Sábado e domingo 09:00 às 18:00 Lembrando que para entrada é até as 16:00. Nas segundas - feiras os parques fecham para manutenção. • Parque aquático privativo; • Piscinas hidro-termais; • Piscina adulto e infantil; • Ofurôs termais; • Piscina semi-olímpica; • Brinquedoteca; • Salão de jogos; • Quadra poliesportiva;',
    images: [
      'https://i.postimg.cc/vHRDkH2f/1394704.jpg',
      'https://i.postimg.cc/vHRDkH2W/1394711.jpg',
      'https://i.postimg.cc/hPFh6PZV/1394718.jpg',
      'https://i.postimg.cc/BQWtkQ7K/1394783.jpg',
      'https://i.postimg.cc/tC07wCvd/1394785.jpg',
      'https://i.postimg.cc/dtMDptNm/1394787.jpg',
      'https://i.postimg.cc/WbRtCbYw/1394795.jpg',
      'https://i.postimg.cc/SN0j3N1G/1394839.jpg'
    ],
    features: ['Acesso Grátis aos Parques', 'Piscinas 24h', 'Recreação Infantil', 'Copa do Bebê', 'Sauna Térmica', 'Restaurante Premium'],
    captainRating: 9.8,
    captainTip: 'Este é o meu favorito para quem tem crianças cheias de energia! O acesso direto ao parque poupa tempo e a recreação é nota mil!',
    highlight: 'Acesso Ilimitado ao Lagoa Termas Parque',
    bestFor: 'família',
    hours: {
      checkIn: 'Check-in a partir das 14h00m',
      checkOut: 'Check-out até 11h00m',
      reception: 'Aberto das 0h00m Até às 0h59m (24 horas)',
      breakfast: 'A partir das 7h00m Até às 10h00m'
    },
    generalServices: [
      'Berço disponivel a pedido',
      'Loja de Lembranças',
      'Aceita os principais cartões de crédito',
      'Acessibilidade para Cadeira de Rodas',
      'Serviço de limpeza diário',
      'Sala de Jogos',
      'Recepção 24 horas',
      'Estacionamento com custo',
      'Estacionamento Gratuito',
      'Estacionamento de ônibus',
      'Shopping',
      'Elevador',
      'Internet sem fio',
      'Wifi Gratuito'
    ],
    restaurantsAndBars: [
      'Bar',
      'Restaurante',
      'Restaurante Buffet'
    ],
    wellnessAndSports: [
      'Piscina',
      'Piscina Exterior',
      'Espaço Kids',
      'Mesa de Bilhar',
      'Sauna',
      'Parque Infantil',
      'Academia de ginástica gratuita'
    ],
    eventsAndConferences: [
      'Salas de Conferências',
      'Centro de Convenções',
      'Sala de Reuniões',
      'Auditório'
    ]
  },
  {
    id: 'eco-towers',
    name: 'Lagoa Eco Towers',
    category: 'lagoa',
    categoryLabel: 'Lagoa Parques e Hotéis',
    tagline: 'Modernidade, sustentabilidade e amplos apartamentos estilo resort.',
    description: 'Lagoa Ecotowers: Seu refúgio em Caldas Novas com acesso GRATUITO ao Lagoa Termas Parque. Descubra o conforto de um lar e todas as vantagens de um resort premium. Apartamentos espaçosos, ideais para toda a família. Nossos apartamentos tem 54 m² compostos por 2 quartos, sendo 1 suíte, banheiro social, sala ampla. TVs Smart com sinal HD. Prepare-se para uma experiência inesquecível! No Lagoa Quente Hotel, você e sua família têm acesso ILIMITADO e GRATUITO ao Lagoa Termas Parque, o maior complexo de lazer de Caldas Novas. Tudo para a diversão das crianças e o relaxamento dos pais, sem preocupações! Horário de funcionamento do Lagoa Termas Parque e Lagoa Eco Praia: Terça a sexta 10:00 às 17:00 Sábado e domingo 09:00 às 18:00 Lembrando que para entrada é até as 16:00. Nas segundas - feiras os parques fecham para manutenção. • Parque aquático privativo; • Piscinas hidro-termais; • Piscina adulto e infantil; • Brinquedoteca; • Quadra poliesportiva;',
    images: [
      'https://i.postimg.cc/JnGGVyLm/1162629.jpg',
      'https://i.postimg.cc/d1LLP7YF/1162630.jpg',
      'https://i.postimg.cc/DZHm222H/1162637.jpg',
      'https://i.postimg.cc/rm3z8887/1162639.jpg',
      'https://i.postimg.cc/QtwVXX8L/1168839.jpg',
      'https://i.postimg.cc/W3Ct22Nc/1273829.jpg',
      'https://i.postimg.cc/Kzw4ZZGS/1273831.jpg',
      'https://i.postimg.cc/pT4y22Wt/1273832.jpg',
      'https://i.postimg.cc/pT4y22W2/1273834.jpg',
      'https://i.postimg.cc/Y9ZjpprM/1394494.jpg',
      'https://i.postimg.cc/HxRjppYT/1394590.jpg',
      'https://i.postimg.cc/Ss3jyySs/1394606.jpg',
      'https://i.postimg.cc/76dbxxHb/1394628.jpg',
      'https://i.postimg.cc/Kzw4ZZGR/1394633.jpg',
      'https://i.postimg.cc/ydtWVV1D/1394640.jpg'
    ],
    features: ['Apartamentos de 2 Quartos', 'Cinema Exclusivo', 'Academia de Alta Geração', 'Piscinas de Borda Infinita', 'Playground Ecológico'],
    captainRating: 9.6,
    captainTip: 'Perfeito se você vai viajar em grupo ou com famílias grandes. Os apartamentos são imensos e muito aconchegantes!',
    highlight: 'Estrutura Moderna e Eco-Sustentável',
    bestFor: 'grupo',
    hours: {
      checkIn: 'Check-in a partir das 14h00m',
      checkOut: 'Check-out até 11h00m',
      reception: 'Aberto das 0h00m Até às 0h00m (24 horas)',
      breakfast: 'A partir das 7h00m Até às 10h30m'
    },
    generalServices: [
      'Recepção 24 horas',
      'Estacionamento Gratuito',
      'Internet sem fio',
      'Wifi Gratuito'
    ],
    restaurantsAndBars: [
      'Bar',
      'Restaurante',
      'Bar de Piscina'
    ],
    wellnessAndSports: [
      'Piscina',
      'Piscina Exterior',
      'Espaço Kids'
    ]
  },
  {
    id: 'lagoa-jardins',
    name: 'Lagoa Jardins',
    category: 'lagoa',
    categoryLabel: 'Lagoa Parques e Hotéis',
    tagline: 'O Refúgio perfeito cercado de natureza viva e tranquilidade.',
    description: 'No Lagoa Jardins Condo Hotel, você encontra o espaço e a liberdade de uma casa de férias completa, combinada com a estrutura de lazer de um resort, perfeita para reunir sua família e amigos. Desfrute de amplas áreas verdes, a privacidade que seu grupo merece e toda a diversão das águas termais de Caldas Novas em um só lugar. Prepare-se para uma experiência inesquecível! No Lagoa Quente Hotel, você e sua família têm acesso ILIMITADO e GRATUITO ao Lagoa Termas Parque, o maior complexo de lazer de Caldas Novas. Tudo para a diversão das crianças e o relaxamento dos pais, sem preocupações! Horário de funcionamento do Lagoa Termas Parque e Lagoa Eco Praia: Terça a sexta 10:00 às 17:00 Sábado e domingo 09:00 às 18:00 Lembrando que para entrada é até as 16:00. Nas segundas - feiras os parques fecham para manutenção. • Acesso ILIMITADO e GRATUITO ao Lagoa Termas Parque; • Piscinas termais; • Ofurôs; • Churrasqueira gourmet; • Sala de jogos; • Academia; *Nosso almoço é servido no restaurante Rancho (Parque) e o Jantar no restaurante do hotel Eco Towers.',
    images: [
      'https://i.postimg.cc/kGT1VhHq/1168082.jpg',
      'https://i.postimg.cc/d35H7SfJ/1168103.jpg',
      'https://i.postimg.cc/Rhgs3bYM/1168125.jpg',
      'https://i.postimg.cc/1XvCgYdm/1168130.jpg',
      'https://i.postimg.cc/T1t7yHs1/1168206.jpg',
      'https://i.postimg.cc/PJS3LF7P/1168207.jpg',
      'https://i.postimg.cc/Rhgs3bY3/1168210.jpg',
      'https://i.postimg.cc/XqsHZDPG/1394123.jpg',
      'https://i.postimg.cc/7hKsCQR0/1394126.jpg',
      'https://i.postimg.cc/SRgTXtPc/1394130.jpg',
      'https://i.postimg.cc/mZj66tgV/1394133.jpg',
      'https://i.postimg.cc/fWCggJRB/1394134.jpg',
      'https://i.postimg.cc/T20HHp3s/1394140.jpg',
      'https://i.postimg.cc/ryjYYKw7/1394142.jpg',
      'https://i.postimg.cc/L4D00n8w/1394143.jpg',
      'https://i.postimg.cc/MZ5rrvph/1394146.jpg',
      'https://i.postimg.cc/PfyFFPqk/1394147.jpg',
      'https://i.postimg.cc/PfyFFPqj/1394149.jpg',
      'https://i.postimg.cc/sfm00v2z/1394151.jpg',
      'https://i.postimg.cc/05nHHbNx/1394154.jpg',
      'https://i.postimg.cc/1RBYYfzy/1394155.jpg',
      'https://i.postimg.cc/qBwZZz7k/1394157.jpg'
    ],
    features: ['Ambiente Tranquilo', 'Jardins Tropicais', 'Piscinas Aquecidas', 'Estacionamento Privativo', 'Churrrasqueira Integrada'],
    captainRating: 9.3,
    captainTip: 'Procura sossego e silêncio após um dia agitado de parque aquático? Esse condomínio é um verdadeiro oásis de calmaria.',
    highlight: 'Privacidade e Integração com a Natureza',
    bestFor: 'casal',
    hours: {
      checkIn: 'Check-in a partir das 14h00m',
      checkOut: 'Check-out até 12h00m',
      reception: 'Aberto das 0h00m Até às 0h00m (24 horas)',
      breakfast: 'A partir das 7h00m Até às 10h00m'
    },
    generalServices: [
      'Aceita os principais cartões de crédito',
      'Sala de Jogos',
      'Recepção 24 horas',
      'Internet sem fio',
      'Wifi Gratuito'
    ],
    restaurantsAndBars: [
      'Bar',
      'Bar de Piscina'
    ],
    wellnessAndSports: [
      'Piscina',
      'Piscina Exterior',
      'Jacuzzi',
      'Academia de ginástica gratuita'
    ]
  },
  {
    id: 'thermas-diroma',
    name: 'Thermas diRoma',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Luxo clássico, sofisticação e o parque aquático mais imponente da região.',
    description: 'Seja bem-vindo ao Thermas diRoma Hotel, uma das unidades mais completas do maior grupo hoteleiro do Centro-Oeste! Ao reservar diretamente com o Grupo diRoma Hotéis e Parques, garantindo padrão de qualidade, segurança e suporte completo durante toda a sua estadia.\n\nNosso hotel conta com 15 piscinas termais, toboáguas, ofurôs e saunas naturais, ideais para momentos de lazer com a família e os amigos. Além disso, oferecemos uma programação diária com atividades recreativas para adultos e crianças. Para encerrar o dia com chave de ouro, o Salão Itália proporciona noites animadas com música ao vivo, tornando sua experiência ainda mais especial.\n\nOferecemos também diversas comodidades para o seu conforto como: Restaurante com gastronomia variada, lanchonete, bar molhado, boutique, brinquedoteca, enfermaria, estacionamento, Wi-Fi gratuito, mensageiros, recepção 24h, copa do bebê, toboáguas, academia, quadras esportivas e muito mais. Nossos quartos são bem equipados com TV a cabo, ar condicionado, frigobar, cofre e secador de cabelo.\n\nNo Thermas diRoma, você aproveita muito mais do que uma hospedagem: aqui, você tem acesso a um parque aquático completo, com piscinas de águas termais, ofurôs relaxantes e lazer monitorado para todas as idades.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - proporcionando ainda mais momentos inesquecíveis durante a estadia (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no Thermas diRoma e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/134BdXN1/06f6ce4113cd51016b755cd7b4d76e69.jpg',
      'https://i.postimg.cc/QdVmzCWs/53d17091a135c24eca5b99dfa9d6df79.jpg',
      'https://i.postimg.cc/Gm9Kftsb/730af5fd6968457108a9ae3365313adf-(1).jpg',
      'https://i.postimg.cc/4xnP0yhd/844d373c90c6eeacf822589333248f39.jpg',
      'https://i.postimg.cc/52jgryFJ/8c196274b15b7c32eff917ef14d2b113.jpg',
      'https://i.postimg.cc/P5Ny7J8k/97c92a17c2e6eb364d85b7df052b1505.jpg',
      'https://i.postimg.cc/kgDsHGtB/b89b2ec47366323370c26772fef708a8.jpg',
      'https://i.postimg.cc/kgDsHGtD/b9de35d450f518823c5e38720be87f4d.jpg',
      'https://i.postimg.cc/cL6hzC88/c3cf145b94302558c6be5d5ce4525d4c.jpg',
      'https://i.postimg.cc/JztxF0BZ/ff1757095b32a786defa440914149d2f.jpg'
    ],
    features: ['15 Piscinas Termais', 'Música ao Vivo no Anfiteatro', 'Gastronomia Internacional', 'Recreação Adulto e Infantil', 'Quadras de Tênis e Esportes'],
    captainRating: 9.9,
    captainTip: 'É a escolha mais tradicional e luxuosa de Caldas! Suas piscinas são fantásticas e a culinária é simplesmente espetacular.',
    highlight: 'Infraestrutura de Lazer Padrão 5 Estrelas',
    bestFor: 'luxo',
    strategicLocation: [
      'Em frente ao diRoma Acqua Park',
      '150 m Monumento das Águas',
      '1,2 km do Jardim Japonês',
      '1,8 km do centro de Caldas Novas',
      '2 km do aeroporto da cidade',
      '9,9 km do Parque Estadual da Serra de Caldas'
    ],
    services: [
      'Ar Condicionado',
      'Bares',
      'Boutique',
      'Brinquedoteca',
      'Enfermaria',
      'Estacionamento',
      'Internet Free',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone',
      'Toboáguas'
    ]
  },
  {
    id: 'villas-diroma',
    name: 'Villas diRoma',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'O conforto de se sentir em casa com toques generosos de lazer resort.',
    description: 'O Villas diRoma é o refúgio ideal para quem busca descanso, lazer e comodidade em Caldas Novas. Localizado estrategicamente próximo ao parque aquático diRoma Acqua Park e ao Centro de Eventos e Convenções do Grupo diRoma, o Villas diRoma oferece uma estrutura completíssima e ambientes cuidadosamente pensados para garantir uma excelente hospedagem.\n\nAo reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante uma experiência com padrão de qualidade, atendimento exclusivo e toda a segurança que a sua viagem merece.\n\nO Villas diRoma oferece acomodações confortáveis e funcionais, ideais para famílias, casais ou grupos que querem aproveitar o melhor da cidade com praticidade. Os quartos são equipados com TV, ar-condicionado, frigobar e cofre, proporcionando comodidade e bem-estar em cada detalhe.\n\nA estrutura do hotel conta com piscinas termais adulto e infantil, bar molhado, sauna, restaurante com cardápio variado, academia, brinquedoteca, sala de jogos, copa do bebê, estacionamento privativo, Wi-Fi gratuito, além de amplos espaços para relaxar com a família e os amigos.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - para tornar sua estadia ainda mais especial (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no Villas diRoma e desfrute de uma estadia tranquila, confortável e repleta de diversão no coração de Caldas Novas!',
    images: [
      'https://i.postimg.cc/Pfw4sJyW/1be97ad0495430aadc63a237977b248f.jpg',
      'https://i.postimg.cc/pVFZbrCJ/412d9a4dd976b89b708adbf69aaecf04.jpg',
      'https://i.postimg.cc/d3rm8ND7/4f1a2fc7292a498211e49a05e01da651.jpg',
      'https://i.postimg.cc/HWy2DnzQ/74b96d82280a9b5a385f6c68b6d56ddb.jpg',
      'https://i.postimg.cc/SQMrFRdc/8bc14bf9e801ad22e71e4ebacfc23896.jpg',
      'https://i.postimg.cc/BZKg9bp5/91c43bea130ab590398a1ef8ed085a38.jpg',
      'https://i.postimg.cc/3rvB5N1Z/a2e7ddfc4ba8b0420c6ad07cb392c098.jpg',
      'https://i.postimg.cc/Y2W3K0Rn/b1f61c846ca2bf8e6a58d554609e33e4.jpg',
      'https://i.postimg.cc/3rvB5N1L/dbd52f00be92243d28542c5d3c32ac99.jpg',
      'https://i.postimg.cc/QNTbGCmz/decf547f09563876cbffed5f6a31f3e7.jpg',
      'https://i.postimg.cc/J7kqV0xd/f1ac58109d3c1532dbc8b06fa62f5117.jpg'
    ],
    features: ['Estilo Vilas e Chalés', 'Próximo ao Acqua Park', 'Piscinas Infantis Dedicadas', 'Pet-Friendly sob Consulta', 'Cozinha Parcial nos Quartos'],
    captainRating: 9.4,
    captainTip: 'Sabe aquela sensação boa de casa de campo? O Villas diRoma entrega exatamente isso, com todo o conforto de um resort termal.',
    highlight: 'Aconchego e Chalés Espaçosos',
    bestFor: 'família',
    strategicLocation: [
      '20 m do diRoma Acqua Park',
      '1,7 km do Jardim Japonês',
      '2,1 km do Centro de Caldas Novas',
      '2,9 km do aeroporto da cidade',
      '7,9 km do Parque Estadual Serra de Caldas'
    ],
    services: [
      'Almoço',
      'Ar Condicionado',
      'Brinquedoteca',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone',
      'Toboáguas'
    ]
  },
  {
    id: 'hotel-roma',
    name: 'Hotel Roma',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Praticidade central e acesso privilegiado ao diRoma Acqua Park.',
    description: 'Venha se encantar com o Hotel Roma, situado no coração de Caldas Novas. Carinhosamente conhecido como "Rominha", o hotel combina o charme e a praticidade de um ambiente acolhedor com o relaxamento proporcionado pelas famosas águas termais da região.\n\nAo reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante uma experiência com padrão de qualidade, atendimento exclusivo e suporte completo durante toda a sua estadia.\n\nAqui, cada detalhe foi pensado para garantir o seu bem-estar. O Hotel Roma oferece acomodações confortáveis e funcionais, ideais para famílias, casais e visitantes em busca de descanso e comodidade. Os quartos contam with TV, ar-condicionado, frigobar e cofre, proporcionando praticidade e conforto em todos os momentos.\n\nA estrutura do hotel inclui um parque aquático com piscinas termais adulto e infantil, hidromassagem, sauna e brinquedoteca, além de restaurante com gastronomia regional e variada, copa do bebê, Wi-Fi gratuito, estacionamento e um atendimento acolhedor que faz toda a diferença.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - garantindo ainda mais lazer durante a estadia. Para sua comodidade, o Hotel Roma oferece serviço de transfer gratuito de ida e volta até o diRoma Acqua Park, facilitando o acesso e tornando sua experiência ainda mais prática e confortável. (Benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção.)\n\nHospede-se no Hotel Roma e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/XvpP9xgL/08fc9fd0c803199146c47d80fa79e75a.jpg',
      'https://i.postimg.cc/nLgP27Rc/455be44c9dfb566ac9c167f331c17dd7.png',
      'https://i.postimg.cc/bvWBgbCr/532b4d90677f0d6e62dc9187c17dd2bd.png',
      'https://i.postimg.cc/wB7rDFkV/5cdfaa07c1225574d65d15f7dc883135.png',
      'https://i.postimg.cc/W4hy0S7Y/5fb0384e12351b613b0aa6cb4c254b32.jpg',
      'https://i.postimg.cc/JhGFjKQP/7dbf85e4c2be02eff6168e9da58df2fc.jpg',
      'https://i.postimg.cc/W4CH8r9x/9b4dc1df5b31afeeb1375a7c70b94181.jpg',
      'https://i.postimg.cc/0NFBnmWx/9f640d8af08fd408e3ebae91a3b4a6b2.jpg',
      'https://i.postimg.cc/LXP0bXw6/a54a01639aac8140b20e7a585b3dbdba.jpg',
      'https://i.postimg.cc/RFtbDFyT/bc0402df7642289e960d511fb15d9ae3.jpg',
      'https://i.postimg.cc/V6tHV6pB/bcee21a5c1db7eab6ce1e9881d0f7430.jpg',
      'https://i.postimg.cc/26WXK6MG/bf3c307515ffc539d6c52edba1d5674b.jpg',
      'https://i.postimg.cc/MH8r2wJP/d622511d26c027a8df4133ab5c219fd6.jpg',
      'https://i.postimg.cc/Rhzb5mxy/f9d5904bda6073c90047b876c71518b9.jpg'
    ],
    features: ['Localização Central', 'Atendimento Humanizado Clássico', 'Café da Manhã Regional', 'Acesso Fácil ao Comércio', 'Estampa Tradicional'],
    captainRating: 9.1,
    captainTip: 'Procura um hotel tradicional onde você pode ir a pé aos principais pontos de Caldas e ainda economizar? O Roma é perfeito!',
    highlight: 'Localização Privilegiada e Tradição',
    bestFor: 'economico',
    strategicLocation: [
      '1,9 km Monumento das Águas',
      '2,1 km do diRoma Acqua Park',
      '3,5 km do aeroporto da cidade',
      '3,6 km do Jardim Japonês',
      '5,5 km do Parque Estadual da Serra de Caldas'
    ],
    services: [
      'Ar Condicionado',
      'Bares',
      'Brinquedoteca',
      'Internet Free',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone'
    ]
  },
  {
    id: 'diroma-resort',
    name: 'diRoma Internacional Resort',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'O resort dos sonhos para crianças com infraestrutura colossal.',
    description: 'Seja bem-vindo ao diRoma International Resort, um verdadeiro refúgio de conforto, lazer e tranquilidade em Caldas Novas – a maior estância hidrotermal do mundo! Ao reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante padrão de qualidade, segurança e suporte completo durante toda a sua estadia.\n\nO diRoma International Resort oferece acomodações espaçosas e confortáveis, ideais para famílias, casais e grupos. Nossos quartos são bem equipados com TV, ar-condicionado, geladeira, cofre e secador de cabelo, garantindo praticidade e bem-estar em todos os momentos da sua hospedagem.\n\nA estrutura do resort foi pensada para que você tenha tudo em um só lugar:\nPiscinas termais adulto e infantil, sauna, academia, quadra de esportes, brinquedoteca, copa do bebê, restaurante com gastronomia variada, lanchonete, bar, estacionamento privativo e Wi-Fi gratuito.\n\nTranquilidade é a palavra que melhor define o diRoma International Resort - um condomínio horizontal de lazer, ideal para quem busca descansar, se divertir e aproveitar momentos inesquecíveis com a família e os amigos.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - proporcionando ainda mais momentos incríveis durante a estadia (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no diRoma International Resort e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/2S2dFZjV/266103a6e70bd0e6771b35991bbc22dd.jpg',
      'https://i.postimg.cc/CxmCHqML/45ac8c0ffb9cda70d92c7a8ce64f019e.jpg',
      'https://i.postimg.cc/kgfNFbM4/53afa1f721091cfbb9d00fcd40b71437.jpg',
      'https://i.postimg.cc/8ztdB6kc/72ce5477c2792bec71688c5bae10e59a.jpg',
      'https://i.postimg.cc/K8J7rMcY/80320c94e33ddadee6aca3fa93d59413.jpg',
      'https://i.postimg.cc/t42dtxR1/a5cd6f56e933a25d69f3008f810a9bbd.jpg',
      'https://i.postimg.cc/pLqQYFVm/b01b9e54dc044db7c3e388f52e495ea2.jpg',
      'https://i.postimg.cc/K8J7rMcg/c1686af35a3e7ca515a90f3f39979f3c.png',
      'https://i.postimg.cc/DwBQdXfJ/c9eb8da35bae69febf7ee2f89f25e5e4.jpg',
      'https://i.postimg.cc/fRB7j9W9/ce60471a3b43ba549ef0692a057ce25e.jpg',
      'https://i.postimg.cc/t42dtxRW/e8605eec6ff4733b599207f99207f996dcc.png',
      'https://i.postimg.cc/DwBQdXfs/ea027e9f636328d7aaa405398168f9a7.jpg'
    ],
    features: ['Brinquedos Aquáticos Gigantes', 'Recreadores Animados', 'Quadras de Esporte', 'Quartos Familiares Amplos', 'Restaurantes com Buffet Livre'],
    captainRating: 9.5,
    captainTip: 'Uma opção infalível para as férias escolares! As crianças ficam entretidas com as gincanas dos tios o dia todinho.',
    highlight: 'Recreação Infantil Referência na Cidade',
    bestFor: 'família',
    strategicLocation: [
      '400 m do Jardim Japonês',
      '2,8 km do diRoma Acqua Park',
      '4,1 km do aeroporto da cidade',
      '4,4 km do Centro de Caldas Novas',
      '10,2 km do Parque Estadual Serra de Caldas'
    ],
    services: [
      'Almoço',
      'Ar Condicionado',
      'Brinquedoteca',
      'Internet Free',
      'Massagem',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone',
      'Toboáguas'
    ]
  },
  {
    id: 'imperio-romano',
    name: 'Império Romano',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Uma verdadeira viagem no tempo em uma arquitetura monumental.',
    description: 'Seja bem-vindo ao Império Romano, uma das unidades mais completas do maior grupo hoteleiro do Centro-Oeste!\nAo reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante padrão de qualidade, segurança e suporte completo durante toda a sua estadia.\n\nO Império Romano oferece acomodações espaçosas e confortáveis, perfeitas para famílias, casais e grupos. A estrutura conta com estacionamento privativo, restaurante com gastronomia variada, lanchonete, bar molhado, sauna, academia, sala de jogos, brinquedoteca e copa do bebê. Tudo foi pensado para oferecer conforto, lazer e praticidade em um só lugar.\n\nNo Império Romano, você aproveita muito mais do que uma hospedagem: aqui, você tem acesso a um parque aquático completo, com piscinas de águas termais, ofurôs relaxantes e lazer monitorado para todas as idades.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - proporcionando ainda mais momentos inesquecíveis durante a estadia (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no Império Romano e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/3xJmRxj4/0987ff06930fd6e87ec3af71aac0c321.jpg',
      'https://i.postimg.cc/MpKVTp0Z/0a5a81a143c5be9eb455a4a2898f12b5.jpg',
      'https://i.postimg.cc/K8vBz873/18067a942239d491882507ceebef3e44.jpg',
      'https://i.postimg.cc/htPTjt8c/1f71202343261232bcdbf872c3f8aaef.jpg',
      'https://i.postimg.cc/52NL025f/2c2193b0dbf960ada383bc233e793940.jpg',
      'https://i.postimg.cc/mg2CDg3c/42b7c3d9c1680f1475a6d6dc245d3efc.jpg',
      'https://i.postimg.cc/2ScvBNTz/508216c8f628fced460ef86a5fbd2802.jpg',
      'https://i.postimg.cc/4xNVdxvf/7ae4f4e56ffd742eb0b424cebe5a9ff8.jpg',
      'https://i.postimg.cc/jSgNJYvd/a4f2cbdabf86c443f2348ca30c1bc99c.png',
      'https://i.postimg.cc/VkGMbP46/a5a84f70c68442f2a523509481768f92.png',
      'https://i.postimg.cc/rwnWt2gp/d9f3674d91a77e64585ee8b860ddb240.jpg',
      'https://i.postimg.cc/pLG8nMkr/dbc39f074dad06e291255374c423470c.png',
      'https://i.postimg.cc/L8CfZFvh/ea6d8bb754e2b7e73458a83013ef82ca.jpg',
      'https://i.postimg.cc/Dwjsb358/f04bf8f2452c74b2458d6ae6198ef932.jpg'
    ],
    features: ['Arquitetura Temática Imperial', 'Fontes de Águas Termais', 'Espaço de Hidromassagem', 'Ampla Área Gourmet', 'Atendimento Personalizado VIP'],
    captainRating: 9.4,
    captainTip: 'O visual desse hotel é um espetáculo! Garante fotos lindas e uma atmosfera relaxante digna de imperadores!',
    highlight: 'Ambiente Temático de Alto Padrão',
    bestFor: 'casal',
    strategicLocation: [
      '210 m do Jardim Japonês',
      '950 m do diRoma Acqua Park',
      '2,3 km do aeroporto da cidade',
      '2,6 km do Centro de Caldas Novas',
      '8,5 km do Parque Estadual Serra de Caldas'
    ],
    services: [
      'Ar Condicionado',
      'Brinquedoteca',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone',
      'Toboáguas'
    ]
  },
  {
    id: 'diroma-fiori',
    name: 'diRoma Fiori',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Flores, tranquilidade e piscinas termais relaxantes integradas.',
    description: 'Seja bem-vindo ao diRoma Fiori, um espaço pensado para proporcionar conforto, lazer e momentos inesquecíveis em Caldas Novas, a maior estância hidrotermal do mundo! Ao reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante padrão de qualidade, segurança e suporte completo durante toda a sua estadia.\n\nO diRoma Fiori oferece acomodações espaçosas e confortáveis, perfeitas para famílias, casais e grupos. Nossos quartos são bem equipados com TV, ar-condicionado, frigobar e cofre, garantindo praticidade e bem-estar em todos os momentos da sua hospedagem.\n\nA estrutura conta com piscinas termais adulto e infantil, bar molhado, sauna, academia, sala de jogos, quadra de esportes, brinquedoteca, copa do bebê, restaurante com gastronomia variada, estacionamento privativo, Wi-Fi gratuito e muito mais. Tudo foi pensado para oferecer conforto, lazer e praticidade em um só lugar.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - proporcionando ainda mais momentos incríveis durante a estadia (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no diRoma Fiori e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/8Pczfg6z/0c3120b67eecaa1dd1133da7306374e6.jpg',
      'https://i.postimg.cc/3JNx0Qv2/12f1448dfa5e5ed6d45df96225572f74.png',
      'https://i.postimg.cc/jd1dz3HZ/1753cdb77706492bfe539f5927fca30a.jpg',
      'https://i.postimg.cc/Kvj83hMJ/219d6e3734e0e6b79107e5265bed9771.jpg',
      'https://i.postimg.cc/NfFj2vH6/6d1733818c10d4f6d051f8f8baeaa31d.jpg',
      'https://i.postimg.cc/qMFM8DcV/8387d4abc81361034dee55f67121ed02.png',
      'https://i.postimg.cc/c4z4Qk7x/a1f84937dfa65cbe5142f3a9e1fe26ea.jpg',
      'https://i.postimg.cc/pLnVkQkb/a8d2f18611769d7553c5fecd5f56212d.jpg',
      'https://i.postimg.cc/9QqX1P1W/b675f6a9fd26d542cf0a1220dde5e525.jpg',
      'https://i.postimg.cc/6pG6zVzn/c33aa41d2389943c6422d3e2043aab1c.jpg',
      'https://i.postimg.cc/VNQfhSHF/d021ade478ccf52994a3918d3174057a.jpg',
      'https://i.postimg.cc/HLDYNJPy/d2abdec8b5aafe0dcf685f4d98e7db3e.jpg',
      'https://i.postimg.cc/25RktqX2/d579d9e2227968dea557f5b65f3610b5.jpg'
    ],
    features: ['Jardinagem e Paisagismo Exclusivo', 'Sauna de Vapor d\'água', 'Ambiente de Convivência Romântico', 'Bar de Petiscos com Coquetéis', 'Visual Encantador'],
    captainRating: 9.2,
    captainTip: 'Muito procurado por casais em lua de mel ou aposentados que querem descansar com máximo silêncio e conforto.',
    highlight: 'Paisagismo Florido e Clima Romântico',
    bestFor: 'casal',
    strategicLocation: [
      '600 m do Jardim Japonês',
      '2,5 km do diRoma Acqua Park',
      '3,9 km do aeroporto da cidade',
      '4,2 km do Centro de Caldas Novas',
      '10,1 km do Parque Estadual Serra de Caldas'
    ],
    services: [
      'Ar Condicionado',
      'Brinquedoteca',
      'Massagem',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone',
      'Toboáguas'
    ]
  },
  {
    id: 'diroma-exclusive',
    name: 'diRoma Exclusive',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Design fino, conforto moderno e atendimento altamente personalizado.',
    description: 'Seja bem-vindo ao diRoma Exclusive, uma das unidades mais completas do maior grupo hoteleiro do Centro-Oeste! Ao reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante padrão de qualidade, segurança e suporte completo durante toda a sua estadia.\n\nO diRoma Exclusive oferece acomodações espaçosas e confortáveis, perfeitas para famílias, casais e grupos. Nossos quartos são bem equipados com TV, ar condicionado, frigobar, cofre e secador de cabelo. A estrutura conta com estacionamento privativo, restaurante com gastronomia variada, lanchonete, bar molhado, academia, salão de jogos, brinquedoteca, piscinas termais adulto e infantil, wi-fi gratuito e copa do bebê. Tudo foi pensado para oferecer conforto, lazer e praticidade em um só lugar.\n\nNo diRoma Exclusive, você aproveita muito mais do que uma hospedagem: aqui, você tem acesso a um parque aquático completo, com piscinas de águas termais, ofurôs relaxantes e lazer monitorado para todas as idades. E tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - proporcionando ainda mais momentos inesquecíveis durante a estadia (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no diRoma Exclusive e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/y6wbcFg4/0e49649601e4ea6d417b6444859bdc9c.jpg',
      'https://i.postimg.cc/gk8BDnRQ/156d826e81d3c0088232d37d363c33d5.jpg',
      'https://i.postimg.cc/YqYy3hg5/220cf166b1969b2bd1e2369c60c6b8d9.jpg',
      'https://i.postimg.cc/VLnHRdMZ/64f92556fb51172c4e90fe7ed3206c6c.jpg',
      'https://i.postimg.cc/MKVrDvRF/67f196294ef9501e8a5c5b69f8fff833.jpg',
      'https://i.postimg.cc/3rPcmg4M/6c73c1b65241341cea27081da4c3d5dc.jpg',
      'https://i.postimg.cc/qMyZLzyf/716d31890a4f171cc8226cd5e63fd7bf.jpg',
      'https://i.postimg.cc/RVKbRNfY/72d876423d0dbcb609db93c058017e5d.jpg',
      'https://i.postimg.cc/mZ05CQzW/7c657541998edc3bb42eaedf410e301b.jpg',
      'https://i.postimg.cc/X7dD8pF2/7d6c3c644c53823162ca18cc8505b720.jpg',
      'https://i.postimg.cc/4NVF5mVT/b73978a8b592c078856fe070aa08e363.jpg',
      'https://i.postimg.cc/fTmgKJms/de17782d35f47facd0b1abc3696faf05.jpg'
    ],
    features: ['Apartamentos de Alto Padrão', 'Piscinas Climatizadas com LED', 'Wi-Fi de Alta Velocidade Grátis', 'Room Service Atencioso', 'Estilo Moderno Boutique'],
    captainRating: 9.7,
    captainTip: 'Para quem busca uma viagem de negócios ou uma estadia romântica sofisticada. Conforto excelente e camas de altíssima qualidade!',
    highlight: 'Sofisticação e Design Contemporâneo',
    bestFor: 'luxo',
    strategicLocation: [
      '23 m Monumento das Águas',
      '2 km do Jardim Japonês',
      '2,3 km do centro de Caldas Novas',
      '3,1 km do aeroporto da cidade',
      '9,2 km do Parque Estadual da Serra de Caldas'
    ],
    services: [
      'Almoço',
      'Ar Condicionado',
      'Brinquedoteca',
      'Internet Free',
      'Massagem',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone'
    ]
  },
  {
    id: 'lacqua-diroma',
    name: 'L\'acqua diRoma',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Um condomínio monumental em 5 blocos com o imbatível Jardins Acqua Park!',
    description: 'Viva momentos inesquecíveis no L\'acqua diRoma I, uma das unidades do moderno e aconchegante complexo L\'acqua diRoma, referência em hospedagem, lazer e bem-estar em Caldas Novas, a maior estância hidrotermal do mundo. Ao reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante qualidade, segurança e todo o suporte necessário durante sua estadia.\n\nO grande destaque do complexo é o Jardins Acqua Park, um parque aquático completo com piscinas de ondas, toboáguas, ofurôs, brinquedoteca, bares molhados e muito mais, ideal para todas as idades. O complexo é composto por cinco blocos modernos e aconchegantes - L\'acqua I, II, III, IV e V - todos localizados ao redor desse verdadeiro paraíso de diversão e relaxamento.\n\nO L\'acqua diRoma I oferece acomodações espaçosas e confortáveis, perfeitas para famílias, casais e grupos. Os quartos são bem equipados com TV, ar-condicionado, frigobar, cofre e secador de cabelo, garantindo praticidade e bem-estar durante toda a hospedagem.\n\nA estrutura da unidade conta com estacionamento privativo, restaurante com gastronomia variada, lanchonete, área gourmet, academia, sauna e sala de jogos. Tudo foi cuidadosamente planejado para proporcionar conforto, lazer e praticidade em um só lugar.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - garantindo ainda mais momentos inesquecíveis durante a estadia (benefício não válido no dia do check-out e às quintas-feiras, quando o parque permanece fechado para manutenção).\n\nHospede-se no L\'acqua diRoma I e descubra o equilíbrio perfeito entre lazer, descanso e qualidade em Caldas Novas!',
    images: [
      'https://i.postimg.cc/Sx79DpgX/00d14941dd96fb635076415ae89fb022.jpg',
      'https://i.postimg.cc/FKrL6n6P/02760d6dcff8a399504589c3723237a9.jpg',
      'https://i.postimg.cc/6pLZYNMV/06b32ec9e026ad533c3c1dcb9053b6c0.jpg',
      'https://i.postimg.cc/hGDdY3Yw/07591224886337b2240fbb9ec75fb8d1.jpg',
      'https://i.postimg.cc/jSQfZrMC/0a4ae517c76d188b6bea3f7fd3d7dbff.jpg',
      'https://i.postimg.cc/PqXw7F73/14151e0aab778ffdba00322d580e6ab6.jpg',
      'https://i.postimg.cc/YSrWPyP1/147be0c1e1f4e4f96749412638b2ca70.jpg',
      'https://i.postimg.cc/xdfzZFZZ/2666755b9c14347097f91f37d3a5fd69.jpg',
      'https://i.postimg.cc/YCfFbwdG/2b5bb789c48d5ff5d7490bca1cdf7226.jpg',
      'https://i.postimg.cc/wjcN0dwR/2fd63bd1c0338631a4686bf5ded1f8c3.jpg',
      'https://i.postimg.cc/3w8vqbq0/38f7e6a6807ec6e8302a721ca7851f28.jpg',
      'https://i.postimg.cc/wjcN0dwD/3b682f5ea6df33fa9b0672c93c96d58d.jpg',
      'https://i.postimg.cc/DwdGBKxr/3e449a12ea0800ca47f783d925abae7a.jpg',
      'https://i.postimg.cc/sg9WwRT9/3eb4537e06c9d355c80e1347d8c6bf28.jpg',
      'https://i.postimg.cc/5t4CrkrF/41e52b9025cbb266102820b45d863802.jpg',
      'https://i.postimg.cc/ZqbdQDQd/51fc29debe05931a3b57d074c1c088ea.jpg',
      'https://i.postimg.cc/tgqxcmc3/654b7ac23e1fdf8b97c4e25b25ff7fa1.jpg',
      'https://i.postimg.cc/KYGMWsWQ/687a690fba470c46b753c123b2266d73.jpg',
      'https://i.postimg.cc/QM8Tznzc/80cb699bf7841d1d93880a3b5d48ab0d.jpg',
      'https://i.postimg.cc/g0zZ7B7g/844ee3041d896b082c80d0bde4e8dcb2.jpg',
      'https://i.postimg.cc/tgqxcm1/9e57d5630e17a61f11a9e129a4a61305.jpg',
      'https://i.postimg.cc/cJxnz5zP/a5c8b559f13c7d400fe673afff3dbe60.jpg',
      'https://i.postimg.cc/6QWvP1Pk/a86d44d0dc2760d2829c5a3d1003b4d1.jpg',
      'https://i.postimg.cc/hG2dR1FZ/b60f34cb02cf0566832d6a2368753f66.jpg',
      'https://i.postimg.cc/Lsx1F3dW/b7708b812d02597b58e23d3e7d8ddf4e.jpg',
      'https://i.postimg.cc/mrmHWyx5/c04e5ce000339a60b394eefd05c660da.jpg',
      'https://i.postimg.cc/BvmKfBWy/c5c90f0e9d6738b9c34829d8967a2bd3.jpg',
      'https://i.postimg.cc/pdsFMJN3/ca9a79a948c190ed3e588d06d61f5d33.jpg',
      'https://i.postimg.cc/BvmKfBWd/d421118ff39ce4e493430ff36b59bdb6.jpg',
      'https://i.postimg.cc/6QMvxfJJ/e6c73b3fac88b23094f2ff080b7f239f.jpg',
      'https://i.postimg.cc/W45kcwLP/fd8b2a176f845aa794393b4998749f32.jpg'
    ],
    features: ['Piscina de Ondas Exclusiva', '5 Blocos Integrados', 'Espaço Fitness Moderno', 'Área de Alimentação Colossal', 'Atividades na Água o Dia Todo'],
    captainRating: 9.8,
    captainTip: 'Tem piscina de ondas que as crianças e os jovens piram! É uma verdadeira cidade da diversão unindo conforto para dormir e brincar.',
    highlight: 'Parque de Diversões Jardins Acqua Park Grátis',
    bestFor: 'grupo',
    strategicLocation: [
      '1,0 km do Jardim Japonês',
      '2,1 km do diRoma Acqua Park',
      '3,7 km do Centro de Caldas Novas',
      '3,5 km do aeroporto da cidade',
      '9,5 km do Parque Estadual Serra de Caldas'
    ],
    services: [
      'Almoço',
      'Ar Condicionado',
      'Brinquedoteca',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone',
      'Toboáguas'
    ]
  },
  {
    id: 'piazza-diroma',
    name: 'Piazza diRoma',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'A mais nova e inovadora joia do império diRoma, repleto de requinte.',
    description: 'Seja bem-vindo ao Piazza diRoma, um ambiente acolhedor, completo e ideal para quem busca lazer, conforto e praticidade em Caldas Novas, a maior estância hidrotermal do mundo! Ao reservar diretamente com o Grupo diRoma Hotéis e Parques, você garante padrão de qualidade, segurança e suporte completo durante toda a sua estadia.\n\nO Piazza diRoma oferece acomodações espaçosas e confortáveis, perfeitas para famílias, casais e grupos. Nossos quartos são bem equipados com TV, ar-condicionado, frigobar e cofre, proporcionando praticidade e bem-estar durante toda a hospedagem.\n\nA estrutura do hotel conta com piscinas termais adulto e infantil, bar molhado, sauna, academia, sala de jogos, brinquedoteca, copa do bebê, restaurante com gastronomia variada, estacionamento privativo, Wi-Fi gratuito, quadra de esportes e muito mais. Tudo foi pensado para o seu máximo conforto e diversão em um só lugar.\n\nE tem mais! Cada hóspede ganha também dois acessos gratuitos por dia ao diRoma Acqua Park - o maior e mais divertido da região - garantindo ainda mais momentos especiais durante a estadia (às quintas-feiras o parque permanece fechado para manutenção).\n\nHospede-se no Piazza diRoma e viva a melhor experiência de lazer, conforto e diversão em Caldas Novas!',
    images: [
      'https://i.postimg.cc/9MzLqBG3/08f6170b891ee132e981cf33ee9e4b2b.jpg',
      'https://i.postimg.cc/FR1TJxjX/0c555d4a103a80d610e00731c24a662a1.jpg',
      'https://i.postimg.cc/SsjgzGWp/0fc338953d3618250852d92111d7dcd6.jpg',
      'https://i.postimg.cc/bJdm2RQp/10d9f00217cb6a71ac01ebbdd04cee22.jpg',
      'https://i.postimg.cc/zB3xRknz/190cf78b29cf7667dfae34dc158c30c8.jpg',
      'https://i.postimg.cc/C1dcf4jM/7149a3a91a0a47320f6d2ddd551b6b6b.jpg',
      'https://i.postimg.cc/LXhxZVzR/99a2b05bed2c78b4df72acdebfc3b87a.jpg',
      'https://i.postimg.cc/ydWLSTFH/9e09ebe72b15936beb7af21ed9d161f8.jpg',
      'https://i.postimg.cc/76bKTNgC/a3135b3bb7b253324bbcfa96d7987617.jpg',
      'https://i.postimg.cc/Kz40g5nR/e765e8f48ebbb0ee2e7096824eba2e7f.jpg',
      'https://i.postimg.cc/C1dcf4jd/faea36060a5ca87776b1163de45b0a31.jpg'
    ],
    features: ['Estrutura e Mobiliário Emplacados', 'Bar Molhado de Coquetéis', 'Arquitetura Integrada', 'Lounge VIP no Terraço', 'Garagem Coberta Gratuita'],
    captainRating: 9.7,
    captainTip: 'Instalações novinhas em folha! Perfeito para quem gosta de estrear tudo de bom e curtir aquela sensação premium de sofisticação.',
    highlight: 'Estrutura Tecnológica e Prédio Moderno',
    bestFor: 'luxo',
    strategicLocation: [
      '550 m do diRoma Acqua Park',
      '1,3 km do Jardim Japonês',
      '2,5 km do aeroporto da cidade',
      '2,9 km do Centro de Caldas Novas',
      '8,5 km do Parque Estadual Serra de Caldas'
    ],
    services: [
      'Ar Condicionado',
      'Brinquedoteca',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone'
    ]
  },
  {
    id: 'spazzio-diroma',
    name: 'Spazzio diRoma',
    category: 'diroma',
    categoryLabel: 'Grupo diRoma',
    tagline: 'Praticidade, aconchego e uma das áreas termais mais gostosas do complexo.',
    description: 'Conheça o Spazzio diRoma, último lançamento do diRoma Hotéis e Parques, onde conforto e sofisticação se unem para criar uma experiência única. Localizado próximo a pontos turísticos como o diRoma Acqua Park e o Monumento das Águas, o Spazzio diRoma é a escolha ideal para quem deseja praticidade e lazer em Caldas Novas.\n\nNossas acomodações foram projetadas para garantir o máximo de conforto e são equipadas com ar-condicionado, bancada de trabalho, cofre digital, frigobar, Wi-Fi e televisão a cabo. Há opções perfeitas para casais, famílias e grupos de amigos, com layouts que acomodam até quatro pessoas com toda a conveniência.\n\nA infraestrutura do hotel inclui recepção 24 horas, estacionamento coberto, academia, brinquedoteca, sala de jogos, espaço para eventos corporativos, além de piscinas e um restaurante de alta gastronomia, com buffet variado e atendimento excepcional.\n\nNo Spazzio diRoma, você também encontrará um parque aquático completo com piscinas termais, ofurôs e lazer monitorado para garantir diversão para todas as idades. E, como hóspede, você tem acesso livre ao diRoma Acqua Park, para ainda mais momentos de lazer. Venha desfrutar do melhor em hospedagem no Spazzio diRoma!',
    images: [
      'https://i.postimg.cc/YCk8x71f/0972eeb66c8c0dbf2ff0fb1cbb77e726.jpg',
      'https://i.postimg.cc/Dy1Bs0br/1a844108f406234f8e365b53e6b71317.jpg',
      'https://i.postimg.cc/FHmGxvjV/2609fdf677b21b3f3d238e19c4c85b40.jpg',
      'https://i.postimg.cc/3J2npNDm/63f78dddad5aebe8fcbdc3db69b15bd7.jpg',
      'https://i.postimg.cc/zG5pkNnC/67c11186e40d811cdf1cb6b40b76f70b.jpg',
      'https://i.postimg.cc/gk3NRj6y/7ce57ba2b0483ddfafdfbb13879ae85a.jpg',
      'https://i.postimg.cc/Fs0DczJj/8c01b0869d1a8690cecb70f35351fd0f.jpg',
      'https://i.postimg.cc/bw8LRPQC/be30b8c9787f66f52982bd4e023cd350.jpg',
      'https://i.postimg.cc/kg9wyCxp/c9e7838e1fba3068ec617a88ea61db5f.jpg',
      'https://i.postimg.cc/K8FQ5bn6/f8d88a3ecfad4624e4dcbfb8325938b1.jpg'
    ],
    features: ['Piscinas Termais', 'Próximo ao Acqua Park', 'Apartamentos Funcionais', 'Bar Molhado de Lazer', 'Estacionamento Incluso'],
    captainRating: 9.4,
    captainTip: 'Uma excelente relação custo-benefício! Você fica pertinho do parque aquático principal e tem ótimas piscinas no próprio hotel.',
    highlight: 'Muito Conforto e Excelente Custo-Benefício',
    bestFor: 'família',
    strategicLocation: [
      '350 m Monumento das Águas',
      '1,6 km do Jardim Japonês',
      '2 km do centro de Caldas Novas',
      '2,8 km do aeroporto da cidade',
      '9,3 km do Parque Estadual da Serra de Caldas'
    ],
    services: [
      'Ar Condicionado',
      'Bares',
      'Estacionamento',
      'Internet Free',
      'Mensageiro',
      'Piscinas',
      'Recepção 24h',
      'Restaurante',
      'TV a Cabo',
      'Telefone'
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Ana Júlia de Souza',
    location: 'Uberlândia - MG',
    comment: 'Minha experiência no Lagoa Quente Hotel com a Viva Destinos foi absolutamente impecável! Nossas credenciais para o parque estavam totalmente prontas, e o suporte no WhatsApp nos deu excelentes dicas de restaurantes locais. Nota 10 pro atendimento do Capitão Destino!',
    rating: 5,
    hotelName: 'Lagoa Quente Hotel',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80_1'
  },
  {
    id: 'rev-2',
    name: 'Marcus Vinícius Carvalho',
    location: 'Goiânia - GO',
    comment: 'Incrível! O L\'acqua diRoma superou muito minhas expectativas. A piscina de ondas do Jardins Acqua Park fez meus filhos se divertirem do amanhecer até o entardecer. Reservar pela Viva Destinos foi rápido, honesto e seguro.',
    rating: 5,
    hotelName: 'L\'acqua diRoma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80_2'
  },
  {
    id: 'rev-3',
    name: 'Clara Maria Mendes',
    location: 'Brasília - DF',
    comment: 'Viajei com meu noivo e optamos pelo diRoma Exclusive recomendado pelo quiz interativo. Que dica de ouro do Capitão! O quarto é super silencioso, as camas parecem nuvens e a iluminação azul de LED na piscina à noite é linda. Vamos voltar com certeza.',
    rating: 5,
    hotelName: 'diRoma Exclusive',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80_3'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: 'Com quem você vai curtir essa super aventura em Caldas Novas?',
    options: [
      { label: 'Em Família (com crianças)', value: 'família', description: 'Atividades recreativas, piscinas infantis e brinquedos aquáticos seguros.', icon: 'Baby' },
      { label: 'A dois (Casal ou Lua de Mel)', value: 'casal', description: 'Ambientes silenciosos, águas românticas e máxima privacidade.', icon: 'Heart' },
      { label: 'Em Família / Amigos (Grupos Grandes)', value: 'grupo', description: 'Apartamentos amplos, múltiplos quartos e cozinhas acopladas.', icon: 'Users' },
      { label: 'Férias premium e lazer sofisticado', value: 'luxo', description: 'Gastronomia fantástica, camas incríveis e design refinado.', icon: 'Crown' }
    ]
  },
  {
    id: 2,
    text: 'Qual é a característica ou lazer mais importante para sua estada?',
    options: [
      { label: 'Parques Aquáticos e Toboáguas Inclusos', value: 'parque', description: 'Quero acesso ilimitado a grandes atrações aquáticas sem pagar extra.', icon: 'Waves' },
      { label: 'Tranquilidade e Natureza', value: 'sossego', description: 'Prefiro repousar cercado de muito verde e de piscinas silenciosas.', icon: 'Trees' },
      { label: 'Economia e Praticidade no Centro', value: 'economico', description: 'Preciso de tarifas amigáveis para aproveitar ao máximo passeando a pé.', icon: 'Coins' },
      { label: 'Estrutura Premium e Lazer de Luxo', value: 'premium', description: 'Quero as melhores piscinas, shows ao vivo e restaurantes nota dez.', icon: 'Sparkles' }
    ]
  }
];
