import type { SeccionUniversidad } from '@/types/cms';

/**
 * Servicio de Información Institucional "Sobre la Universidad" (`/universidad`)
 *
 * Centraliza los datos de las 5 pestañas institucionales de la UNELLEZ.
 * Cumple con la arquitectura API-First: cuando el backend en PHP esté disponible,
 * solo se debe descomentar el bloque `fetch` hacia `/api/v1/universidad/secciones`.
 */
const SECCIONES_UNIVERSIDAD_MOCK: SeccionUniversidad[] = [
  {
    id: 'historia',
    etiqueta: 'Historia',
    titulo: 'Historia',
    introDestacada:
      '"UNELLEZ" es el acrónimo que se utiliza para referirse a la Universidad Nacional Experimental de los Llanos Occidentales "EZEQUIEL ZAMORA". Es la casa de estudios más grande del Occidente del país, con su sede principal en la ciudad de Barinas.',
    parrafos: [
      'La Universidad Nacional Experimental de los Llanos Occidentales "EZEQUIEL ZAMORA", es una institución de educación universitaria constituida fundamentalmente por una comunidad de intereses espirituales que reúne a profesores y estudiantes en la búsqueda de la verdad y el afianzamiento de los valores trascendentales del ser humano, orientada a la realización de la función rectora de la educación, la cultura y la ciencia, mediante actividades de docencia, investigación y extensión, puestas al servicio de la comunidad y destinadas a promover los recursos humanos que en el campo científico, tecnológico y humanístico, se requieren para el desarrollo integral de la región y del país, enmarcados dentro de un espíritu de democracia, de justicia social y de solidaridad humana y abierto a todas las corrientes del pensamiento universal.',
    ],
    imagenes: [
      {
        url: '/images/historia.png',
        alt: 'Pasillos y aulas históricas de la UNELLEZ en Barinas',
        escalaDeGrises: true,
      },
      {
        url: '/images/historia2.png',
        alt: 'Comunidad universitaria fundacional de la UNELLEZ',
        escalaDeGrises: true,
      },
    ],
  },
  {
    id: 'mision-vision',
    etiqueta: 'Misión y Visión',
    titulo: 'Misión y Visión',
    introDestacada:
      'Formar profesionales integrales, críticos y comprometidos con el desarrollo sustentable de los llanos occidentales y de toda Venezuela.',
    parrafos: [
      'Misión: Desarrollar y ejecutar programas de formación académica en pregrado y postgrado, investigación científica aplicada e interacción socio-comunitaria, fomentando la innovación agroindustrial, tecnológica y humanística al servicio del pueblo llanero.',
      'Visión: Consolidarse como una universidad nacional experimental de referencia por su excelencia académica, pertinencia social, transformación digital y liderazgo en la generación de conocimientos orientados a la soberanía productiva y cultural del país.',
      'Nuestros valores institucionales se sustentan en la inclusión, la ética pública, el respeto a la diversidad, la solidaridad humana y la defensa del patrimonio ambiental de la región llanera.',
    ],
    imagenes: [
      {
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
        alt: 'Estudiantes universitarios compartiendo en campus académico',
      },
      {
        url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
        alt: 'Trabajo colaborativo y excelencia académica en la UNELLEZ',
      },
    ],
  },
  {
    id: 'reglamentos',
    etiqueta: 'Reglamentos',
    titulo: 'Reglamentos',
    introDestacada:
      'El marco normativo de la UNELLEZ regula la vida académica, estudiantil, docente y administrativa bajo principios de transparencia y equidad.',
    parrafos: [
      'El Reglamento General de la UNELLEZ establece la estructura organizativa del Consejo Directivo, el Rectorado, los Vicerrectorados de Área y las Direcciones Institucionales (como DARSE, DITED, DISISERBI e INSITEZ), garantizando el funcionamiento armónico de la institución.',
      'El Reglamento Estudiantil define los derechos y deberes del estudiantado, el régimen de evaluación de los aprendizajes, las modalidades de estudio presencial y a distancia, así como los requisitos para el servicio comunitario y los actos de grado.',
      'Adicionalmente, los reglamentos de investigación, extensión y estudios avanzados norman los trabajos especiales de grado, proyectos científicos y publicaciones arbitradas de la comunidad zamorana.',
    ],
    imagenes: [
      {
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
        alt: 'Archivo bibliográfico y normativa universitaria UNELLEZ',
      },
      {
        url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
        alt: 'Documentación y reglamentos académicos institucionales',
      },
    ],
  },
  {
    id: 'simbolos',
    etiqueta: 'Símbolos Universitarios',
    titulo: 'Símbolos Universitarios',
    introDestacada:
      'Nuestros símbolos representan la identidad, el arraigo en la tierra llanera y la vocación transformadora de la Universidad que Siembra.',
    parrafos: [
      'El Emblema Institucional: Compuesto por líneas paralelas que evocan los surcos arados de la tierra llanera y el horizonte abierto de occidente, en el color naranja característico que simboliza energía, creatividad y juventud universitaria.',
      'El Lema "La Universidad que Siembra": Sintetiza la misión histórica de sembrar conocimientos, ciencia y conciencia ciudadana en cada uno de los estados donde hace vida la UNELLEZ.',
      'El Himno Universitario y la Bandera Institucional acompañan cada acto solemne de grado, jornadas científicas y encuentros deportivos, reafirmando el sentido de pertenencia de estudiantes, egresados, profesores y trabajadores.',
    ],
    imagenes: [
      {
        url: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
        alt: 'Acto solemne universitario con símbolos institucionales',
      },
      {
        url: '/images/community-banner.png',
        alt: 'Estudiantes portando la identidad institucional UNELLEZ',
      },
    ],
  },
  {
    id: 'sedes',
    etiqueta: 'Sedes',
    titulo: 'Sedes',
    introDestacada:
      'La UNELLEZ despliega su oferta académica en cuatro estados de los Llanos Occidentales a través de sus Vicerrectorados de Área y núcleos municipalizados.',
    parrafos: [
      'VPDS — Barinas (Estado Barinas): Vicerrectorado de Planificación y Desarrollo Social, sede rectoral y centro administrativo principal ubicado en la Av. 23 de Enero, Redoma de Ezequiel Zamora.',
      'VPDR — San Fernando de Apure (Estado Apure): Vicerrectorado de Planificación y Desarrollo Regional, enfocado en la formación profesional para el desarrollo pecuario, educativo y social del eje apureño.',
      'VIPI — San Carlos (Estado Cojedes): Vicerrectorado de Infraestructura y Procesos Industriales, referente en ingenierías, procesos industriales y desarrollo tecnológico regional.',
      'VPA — Guanare (Estado Portuguesa): Vicerrectorado de Producción Agrícola, pilar fundamental en ciencias del agro, ingeniería agronómica y producción alimentaria sustentable.',
    ],
    imagenes: [
      {
        url: '/images/hero-aula-unellez.jpg',
        alt: 'Aulas universitarias de la sede Barinas UNELLEZ',
      },
      {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
        alt: 'Campus universitario y áreas académicas regionales',
      },
    ],
  },
];

/**
 * Obtiene las secciones institucionales para `/universidad`.
 * Endpoint futuro en PHP: `GET /api/v1/universidad/secciones`
 */
export async function obtenerSeccionesUniversidad(): Promise<SeccionUniversidad[]> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(`${apiUrl}/api/v1/universidad/secciones`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
  */
  return Promise.resolve(SECCIONES_UNIVERSIDAD_MOCK);
}
