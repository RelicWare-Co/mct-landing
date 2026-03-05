import { Calculator, Landmark, Globe, Code2, Briefcase, Layers, Hexagon, CircleDot, Box } from 'lucide-react';
import type { NavItem, Service, TeamMember, AboutFeature, Partner, ContactInfo, FooterSection } from '../types';

export const navItems: NavItem[] = [
  { label: 'Inicio', sectionId: 'inicio' },
  { label: 'Servicios', sectionId: 'servicios' },
  { label: 'Nosotros', sectionId: 'nosotros' },
  { label: 'Equipo', sectionId: 'equipo' },
];

export const services: Service[] = [
  {
    id: 'accounting',
    icon: Calculator,
    title: 'Asesoría Contable',
    description: 'Mantén tus finanzas bajo control. Registros precisos, estados financieros claros y cumplimiento normativo estricto para decisiones informadas.'
  },
  {
    id: 'tax',
    icon: Landmark,
    title: 'Gestión Tributaria',
    description: 'Optimización inteligente de tu carga fiscal en el marco legal. Declaraciones, planificación estratégica y representación corporativa.'
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Presencia digital premium. Interfaces modernas, optimizadas y responsivas que comunican el verdadero valor de tu marca al mundo.'
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Software Personalizado',
    description: 'Automatización y eficiencia. Sistemas escalables y seguros para facturación, inventarios o gestión interna adaptados a tu operativa.'
  }
];

export const partners: Partner[] = [
  { id: 'corpsys', name: 'CorpSys', icon: Briefcase },
  { id: 'nexotech', name: 'NexoTech', icon: Layers },
  { id: 'vertice', name: 'Grupo Vértice', icon: Hexagon },
  { id: 'omniretail', name: 'OmniRetail', icon: CircleDot },
  { id: 'logistica', name: 'Logística Sur', icon: Box }
];

export const aboutFeatures: AboutFeature[] = [
  {
    id: 'personalized',
    title: 'Atención Personalizada',
    description: 'Un equipo dedicado que entiende tu industria a fondo.'
  },
  {
    id: '360vision',
    title: 'Visión 360°',
    description: 'Finanzas sanas y tecnología de punta convergen en un solo proveedor.'
  },
  {
    id: 'innovation',
    title: 'Innovación Continua',
    description: 'Herramientas prácticas que aseguran la competitividad de tu empresa.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'maria',
    initials: 'MP',
    name: 'María Pérez',
    role: 'Socia Directora & Auditora',
    description: 'Especialista en planificación tributaria corporativa con más de 15 años de experiencia.'
  },
  {
    id: 'carlos',
    initials: 'CG',
    name: 'Carlos Gómez',
    role: 'CTO & Tech Lead',
    description: 'Arquitecto de software enfocado en soluciones escalables y transformación digital.'
  },
  {
    id: 'laura',
    initials: 'LR',
    name: 'Laura Rojas',
    role: 'Diseñadora UI/UX',
    description: 'Diseñadora apasionada por crear experiencias de usuario intuitivas y memorables.'
  },
  {
    id: 'javier',
    initials: 'JS',
    name: 'Javier Soto',
    role: 'Consultor Financiero',
    description: 'Experto en análisis de riesgo, presupuestos y control de gestión para pymes.'
  }
];

export const contactInfo: ContactInfo[] = [
  {
    type: 'location',
    label: 'Ubicación',
    value: 'Centro de Negocios MCT, Ciudad Principal'
  },
  {
    type: 'email',
    label: 'Correo Electrónico',
    value: 'contacto@asesoriasmct.com'
  },
  {
    type: 'phone',
    label: 'Teléfono / WhatsApp',
    value: '+56 9 1234 5678'
  }
];

export const footerSections: FooterSection[] = [
  {
    title: 'Navegación',
    links: [
      { label: 'Inicio', sectionId: 'inicio' },
      { label: 'Servicios', sectionId: 'servicios' },
      { label: 'Nosotros', sectionId: 'nosotros' }
    ]
  },
  {
    title: 'Servicios Core',
    links: [
      { label: 'Gestión Contable', sectionId: 'servicios' },
      { label: 'Asesoría Tributaria', sectionId: 'servicios' },
      { label: 'Desarrollo Web UI/UX', sectionId: 'servicios' },
      { label: 'Sistemas a Medida', sectionId: 'servicios' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Políticas de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' }
    ]
  }
];

export const heroContent = {
  badge: 'Asesoría Integral & Tecnología',
  title: 'Impulsamos el crecimiento de tu empresa con estrategia y precisión',
  description: 'En Asesorías Integrales MCT combinamos experiencia contable, solidez tributaria y desarrollo tecnológico avanzado para transformar tu negocio.',
  primaryCta: 'Agenda una Asesoría',
  secondaryCta: 'Explorar Servicios'
};

export const aboutContent = {
  title: 'Tu Aliado Estratégico Integral',
  description: 'Comprendemos la complejidad de operar en el mercado actual. Nuestro enfoque interdisciplinario fusiona la rigurosidad financiera con el dinamismo tecnológico, entregando resultados excepcionales sin fricción.',
  missionTitle: 'Nuestra Misión',
  missionText: '"Dotar a los líderes empresariales de las capacidades financieras, tributarias y digitales imprescindibles para forjar negocios rentables, escalables y líderes en su sector."'
};

export const servicesContent = {
  title: 'Soluciones de Alto Impacto',
  description: 'Diseñamos estrategias financieras y herramientas digitales a la medida de los desafíos modernos de tu negocio.'
};

export const teamContent = {
  badge: 'Nuestro Equipo',
  title: 'Profesionales a tu servicio',
  description: 'Conoce a los expertos detrás de nuestras soluciones contables y tecnológicas.'
};

export const contactContent = {
  badge: 'Contacto',
  title: 'Iniciemos la transformación',
  description: '¿Preparado para escalar tu operativa y ordenar tus finanzas? Completa el formulario y un especialista corporativo se pondrá en contacto contigo a la brevedad.',
  formTitle: 'Solicitar Propuesta'
};

export const footerContent = {
  description: 'Excelencia operativa mediante inteligencia contable e innovación en el desarrollo de software.',
  copyright: `© ${new Date().getFullYear()} Asesorías Integrales MCT. Todos los derechos reservados.`
};
