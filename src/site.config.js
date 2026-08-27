/**
 * =================================================================
 * CONFIGURAÇÃO CENTRAL DO CLIENTE
 * Edite este arquivo para personalizar 80% do site em 5 minutos!
 * =================================================================
 */
export const siteConfig = {
  business: {
    name: 'Juliano Souza',
    tagline: 'Design de Interiores & Móveis Planejados de Alto Padrão',
    description: 'Transformamos espaços residenciais e comerciais em ambientes sofisticados, funcionais e sob medida em Manaus.',
    city: 'Manaus, AM',
    whatsapp: '5592981038799',
    whatsappDefaultMessage: 'Olá! Vim pelo seu site e gostaria de solicitar um orçamento para o meu projeto.',
    instagram: 'https://instagram.com',
    email: 'contato@cliente.com.br',
  },

  theme: {
    heroVariant: 'split', // 'split' ou 'centered'
    primaryColor: '#C68A2B',
    primaryDarkColor: '#A5701E',
  },

  hero: {
    badge: 'Projetos Exclusivos em Manaus',
    title: 'Móveis planejados que unem sofisticação, conforto e precisão.',
    subtitle: 'Do projeto 3D à montagem final com acabamento fino e pontualidade na entrega.',
    primaryButtonText: 'Solicitar Orçamento no WhatsApp',
    secondaryButtonText: 'Ver Projetos Realizados',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },

  services: [
    {
      title: 'Cozinhas Planejadas',
      description: 'Otimização inteligente de espaço, ferragens de alta durabilidade e acabamentos resistentes à umidade.',
      icon: 'LayoutGrid',
    },
    {
      title: 'Dormitórios & Closets',
      description: 'Closets funcionais com iluminação embutida, divisões sob medida e portas com amortecimento suave.',
      icon: 'BedDouble',
    },
    {
      title: 'Salas & Home Theaters',
      description: 'Painéis ripados, nichos iluminados e integração perfeita com tecnologia e cabeamento oculto.',
      icon: 'Tv',
    },
    {
      title: 'Espaços Corporativos',
      description: 'Recepções elegantes, salas de reunião e estações de trabalho projetadas para causar impacto.',
      icon: 'Building2',
    },
  ],

  portfolio: [
    {
      title: 'Apartamento Ponta Negra',
      category: 'Residencial Completo',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'Cozinha integrada, painel ripado em freijó e suíte master com closet espelhado.',
    },
    {
      title: 'Cozinha Gourmet Adrianópolis',
      category: 'Cozinha & Gourmet',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      description: 'Acabamento em laca fosca, bancada em quartzo e ferragens Blum com amortecimento.',
    },
    {
      title: 'Living & Home Theater Vieiralves',
      category: 'Salas & Living',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      description: 'Painel acústico em madeira nobre e iluminação linear LED dimerizável.',
    },
    {
      title: 'Escritório Executivo Djalma Batista',
      category: 'Corporativo',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      description: 'Mesa diretora sob medida, painéis de privacidade e armazenamento camuflado.',
    },
  ],

  differentials: [
    { number: '01', title: 'Projeto 3D Realista', desc: 'Visualize exatamente como ficará o ambiente antes da fabricação.' },
    { number: '02', title: 'Materiais Premium', desc: 'MDF 100%, ferragens com amortecimento e bordas com acabamento selado.' },
    { number: '03', title: 'Entrega Pontual', desc: 'Cronograma claro e compromisso absoluto com o prazo combinado.' },
  ],

  testimonials: [
    {
      name: 'Dra. Camila Ribeiro',
      role: 'Cliente Residencial — Ponta Negra',
      text: 'O nível de detalhe e acabamento superou todas as expectativas. A cozinha ficou perfeita e a equipe foi extremamente limpa e pontual.',
    },
    {
      name: 'Eduardo Silveira',
      role: 'Arquiteto Parceiro',
      text: 'Trabalhar com essa equipe dá tranquilidade. Os móveis chegam milimetricamente de acordo com o projeto executivo.',
    },
  ],
}
