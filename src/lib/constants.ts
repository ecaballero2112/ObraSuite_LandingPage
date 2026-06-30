import { Module, Benefit, ValueProp, Phase } from './types'

export const SITE = {
  name: 'ObraSuite',
  tagline: 'Plataforma integral de gestión para empresas constructoras',
  url: 'https://obrasuite.cl',
  description: 'Controla la obra completa. En una sola plataforma.',
} as const

export const COLORS = {
  charcoal: '#3A3E40',
  deepGreen: '#20720C',
  primaryGreen: '#4C9206',
  midGreen: '#6BAA1B',
  lightGreen: '#A5D65A',
} as const

export const modules: Module[] = [
  {
    id: 'obracost',
    name: 'ObraCost',
    tagline: 'Presupuesto base y APU',
    description: 'Estudios, itemizados, análisis de precios unitarios y presupuesto base. Controla cada peso desde la estimación inicial.',
    logoPath: '/assets/logos/obracost.svg',
    phase: 1,
  },
  {
    id: 'obraplan',
    name: 'ObraPlan',
    tagline: 'Planificación y Last Planner',
    description: 'Programa maestro, planificación trisemanal, Last Planner System y gestión de restricciones.',
    logoPath: '/assets/logos/obraplan.svg',
    phase: 1,
  },
  {
    id: 'obracontrol',
    name: 'ObraControl',
    tagline: 'Avance físico y producción',
    description: 'Avance físico, HH, producción diaria y reportes. Conecta el terreno con la oficina técnica.',
    logoPath: '/assets/logos/obracontrol.svg',
    phase: 1,
  },
  {
    id: 'obravalue',
    name: 'ObraValue',
    tagline: 'Valor ganado y margen',
    description: 'Avance económico, estados de pago, margen proyectado y valor ganado. Visibilidad financiera total.',
    logoPath: '/assets/logos/obravalue.svg',
    phase: 1,
  },
  {
    id: 'obrasupply',
    name: 'ObraSupply',
    tagline: 'Compras y trazabilidad',
    description: 'Solicitudes, cotizaciones, órdenes de compra y trazabilidad completa de adquisiciones.',
    logoPath: '/assets/logos/obrasupply.svg',
    phase: 1,
  },
  {
    id: 'obralens',
    name: 'ObraLens',
    tagline: 'Inventario y consumo',
    description: 'Recepción, inventario, vales de salida y consumo de materiales. Tu bodega siempre controlada.',
    logoPath: '/assets/logos/obralens.svg',
    phase: 1,
  },
  {
    id: 'obraqa',
    name: 'ObraQA/QC',
    tagline: 'Calidad y aseguramiento',
    description: 'Protocolos, inspecciones, ensayos, NCR y dossier de calidad para entregas sin observaciones.',
    logoPath: '/assets/logos/obraqa.svg',
    phase: 2,
  },
  {
    id: 'obradocs',
    name: 'ObraDocs',
    tagline: 'Documentos y planos',
    description: 'Planos, RFIs, submittals, transmittals y control de versiones. Tu repositorio documental centralizado.',
    logoPath: '/assets/logos/obradocs.svg',
    phase: 2,
  },
  {
    id: 'obracontract',
    name: 'ObraContract',
    tagline: 'Contratos y subcontratos',
    description: 'Contratos, adicionales, subcontratos, claims y garantías. Gestión contractual sin filturas.',
    logoPath: '/assets/logos/obracontract.svg',
    phase: 2,
  },
  {
    id: 'obrasafe',
    name: 'ObraSafe',
    tagline: 'Seguridad y prevención',
    description: 'AST, permisos, charlas, hallazgos e incidentes. Tu programa de seguridad digitalizado.',
    logoPath: '/assets/logos/obrasafe.svg',
    phase: 3,
  },
  {
    id: 'obramequip',
    name: 'ObraEquip',
    tagline: 'Equipos y mantenciones',
    description: 'Equipos, horómetros, combustible y mantenciones. Maximiza la disponibilidad de tu flota.',
    logoPath: '/assets/logos/obramequip.svg',
    phase: 3,
  },
  {
    id: 'obraboard',
    name: 'ObraBoard',
    tagline: 'Dashboard ejecutivo',
    description: 'Indicadores consolidados, alertas tempranas y reportes gerenciales con IA predictiva.',
    logoPath: '/assets/logos/obraboard.svg',
    phase: 3,
  },
]

export const values: ValueProp[] = [
  {
    id: 'margin',
    title: 'Control temprano de margen',
    description: 'Detecta desviaciones antes de que afecten tu resultado. Conecta presupuesto, costos reales y valor ganado en tiempo real.',
    icon: 'trending-up',
  },
  {
    id: 'planning',
    title: 'Planificación conectada con restricciones',
    description: 'Last Planner System digital con restricciones visibles y asignaciones trazables. Lo que se planifica se ejecuta.',
    icon: 'calendar',
  },
  {
    id: 'supply',
    title: 'Trazabilidad de compras, recepción y consumo',
    description: 'Desde la solicitud hasta el consumo en obra. Trazabilidad completa de cada material y cada peso gastado.',
    icon: 'package',
  },
  {
    id: 'progress',
    title: 'Avance físico con HH, equipos y evidencias',
    description: 'Registra avance con productividad de mano de obra, rendimiento de equipos y evidencia fotográfica georreferenciada.',
    icon: 'bar-chart',
  },
  {
    id: 'integrated',
    title: 'Calidad, seguridad, documentos y contratos integrados',
    description: 'Todo en una plataforma. Protocolos, AST, planos, RFIs, contratos y subcontratos sin sistemas paralelos.',
    icon: 'layers',
  },
  {
    id: 'executive',
    title: 'Indicadores consolidados para gerencia',
    description: 'Dashboard ejecutivo con margen, avance, PPC, alertas y proyecciones. Decisiones basadas en datos, no en corazonadas.',
    icon: 'dashboard',
  },
]

export const benefits: Benefit[] = [
  {
    id: 'operation',
    title: 'Orden diario y coordinación entre áreas',
    description: 'Centraliza la comunicación entre oficina técnica, bodega, compras y terreno. Cada área registra y cada líder decide con información actualizada al minuto.',
    imagePath: '/assets/benefits/benefit-operation.webp',
    videoPath: '/assets/video/benefit-operation.mp4',
    alt: 'Vista aérea de una obra en ejecución que representa coordinación operacional y control de frentes.',
    reversed: false,
  },
  {
    id: 'economy',
    title: 'Margen visible antes de que sea tarde',
    description: 'Conecta costos reales con presupuesto base. Recibe alertas cuando un concepto se desvía y corrige a tiempo. No más sorpresas en el cierre del proyecto.',
    imagePath: '/assets/benefits/benefit-economy.webp',
    videoPath: '/assets/video/benefit-economy.mp4',
    alt: 'Análisis de indicadores y documentos para controlar costos y margen del proyecto.',
    reversed: true,
  },
  {
    id: 'planning',
    title: 'Compromisos, restricciones y PPC',
    description: 'Digitaliza tu planificación semanal. Mide PPC, identifica restricciones recurrentes y mejora la confiabilidad de tu programación ciclo a ciclo.',
    imagePath: '/assets/benefits/benefit-planning.webp',
    videoPath: '/assets/video/benefit-planning.mp4',
    alt: 'Planificación de obra sobre planos y registro de compromisos de ejecución.',
    reversed: false,
  },
  {
    id: 'management',
    title: 'Visión consolidada de toda la cartera',
    description: 'Un solo tablero para todos tus proyectos. Compara avance, margen, seguridad y productividad entre obras. Gerencia sin Excel ni llamadas de emergencia.',
    imagePath: '/assets/benefits/benefit-management.webp',
    videoPath: '/assets/video/benefit-management.mp4',
    alt: 'Dashboard ejecutivo con indicadores para la toma de decisiones gerenciales.',
    reversed: true,
  },
]

export const phases: Phase[] = [
  {
    id: 1,
    title: 'Fase 1: Núcleo operacional',
    description: 'Conecta primero los procesos críticos: presupuesto, planificación, compras, bodega, avance y control de costos.',
    modules: ['ObraCost', 'ObraPlan', 'ObraControl', 'ObraSupply', 'ObraLens', 'ObraValue'],
  },
  {
    id: 2,
    title: 'Fase 2: Aseguramiento y documentos',
    description: 'Integra calidad, documentación técnica y gestión contractual. Formaliza procesos que hoy dependen de correos y carpetas compartidas.',
    modules: ['ObraQA/QC', 'ObraDocs', 'ObraContract'],
  },
  {
    id: 3,
    title: 'Fase 3: Seguridad, equipos e inteligencia',
    description: 'Escala con seguridad digitalizada, gestión de flota y dashboard con IA predictiva para anticipar riesgos y oportunidades.',
    modules: ['ObraSafe', 'ObraEquip', 'ObraBoard'],
  },
]

export const HERO_CONTENT = {
  eyebrow: 'Plataforma integral de gestión para empresas constructoras',
  phrases: [
    'Controla cada obra desde el presupuesto hasta el cierre, en una sola plataforma.',
    'Convierte datos dispersos en decisiones rápidas, trazabilidad total y mayor rentabilidad.',
    'Planifica mejor, reduce pérdidas y protege el margen de cada proyecto.',
    'La gestión integral que conecta terreno, oficina técnica, abastecimiento y gerencia.',
    'Menos improvisación. Más control. Obras más rentables.',
  ],
  subtitle: 'Conecta presupuesto, planificación, compras, bodega, avance físico, costos, calidad, seguridad, contratos y reportabilidad en un solo ecosistema.',
  ctaPrimary: 'Solicitar demostración',
  ctaSecondary: 'Explorar los 12 módulos',
  stats: '12 módulos · 1 base de datos · Visión 360°',
} as const

export const PROBLEM_CONTENT = {
  title: '¿Suena familiar?',
  items: [
    { icon: 'file-spreadsheet', text: 'Presupuesto en Excel que nadie actualiza' },
    { icon: 'calendar-clock', text: 'Programa de obra separado del presupuesto' },
    { icon: 'message', text: 'Compras por correo o WhatsApp sin trazabilidad' },
    { icon: 'clipboard', text: 'Bodega en planillas que no reflejan el consumo real' },
    { icon: 'clock', text: 'Avances que llegan tarde y mal medidos' },
    { icon: 'link-off', text: 'Costos desconectados de la ejecución' },
    { icon: 'file', text: 'Documentos dispersos entre correos, carpetas y PDFs' },
    { icon: 'eye-off', text: 'Gerencia sin visibilidad diaria de lo que ocurre en cada obra' },
  ],
} as const

export const FINAL_CTA = {
  title: 'Conecta tu operación antes de que la fragmentación siga costando margen.',
  description: 'Agenda una demostración personalizada y descubre cómo ObraSuite puede centralizar tu operación en semanas, no en meses.',
  cta: 'Solicitar demostración',
  footnote: 'Desarrollado por NexusOne SpA.',
} as const

export const OBRALIFT_CONTENT = {
  eyebrow: 'Plataforma SaaS complementaria',
  title: 'ObraLift',
  subtitle: 'Diseño 3D de maniobras, selección de grúas y marketplace de proveedores.',
  description:
    'ObraLift es la plataforma SaaS especializada en planes de izaje que se integra con ObraSuite para extender el control a las operaciones críticas de levantamiento de cargas. Diseña maniobras en 3D, selecciona grúas compatibles, cotiza con proveedores y cierra el servicio con trazabilidad total — todo desde un mismo ecosistema.',
  features: [
    {
      title: 'Diseñador 3D de Maniobras',
      description:
        'Construye visualmente cada izaje: grúa, carga, obstáculos y aparejos. ObraLift calcula radio, altura, pluma, ángulo, utilización e interferencias en tiempo real.',
      icon: 'cube',
    },
    {
      title: 'Marketplace de Grúas',
      description:
        'Conecta con proveedores verificados. La plataforma cruza requerimientos técnicos con disponibilidad real de equipos, envía solicitudes de cotización y genera comparativos técnico-comerciales.',
      icon: 'truck',
    },
    {
      title: 'Cierre y Trazabilidad',
      description:
        'Cada maniobra deja trazabilidad técnica, documental y comercial. Desde el diseño 3D hasta la adjudicación, comisión y plan de izaje final. Integrable con ObraSuite.',
      icon: 'check-circle',
    },
  ],
  cta: 'Conocer ObraLift',
  ctaFootnote: 'Próximamente · Plataforma en desarrollo',
} as const

export const NAV_LINKS = [
  { label: 'Módulos', href: '#modulos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Implementación', href: '#implementacion' },
] as const
