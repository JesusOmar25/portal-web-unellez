import type {
  EnlaceNavegacion,
  DireccionInstitucional,
  EventoHero,
  Vicerrectorado,
  AvisoImportante,
  Noticia,
  InfoInstitucional,
  DatosPaginaInicio,
} from '@/types/cms';

/**
 * Servicio Mock para el CMS UNELLEZ
 * 
 * En el futuro, cada una de estas funciones hará un `fetch('https://api.unellez.edu.ve/api/v1/...')`
 * consumiendo los controladores de tu backend en PHP (Laravel / Symfony / PHP Nativo).
 * 
 * Cumple con el principio de Desacoplamiento Total: los componentes de React consumen
 * exclusivamente estas promesas sin conocer el origen de los datos.
 */

const ENLACES_NAVBAR_MOCK: EnlaceNavegacion[] = [
  { id: 1, etiqueta: 'Inicio', url: '/', esActivo: true },
  { id: 2, etiqueta: 'Universidad', url: '/universidad' },
  { id: 3, etiqueta: 'Estudios', url: '/estudios' },
  { id: 4, etiqueta: 'Institutos/Fundaciones', url: '/institutos-fundaciones' },
  { id: 5, etiqueta: 'Noticias', url: '/noticias' },
];

const DIRECCIONES_MOCK: DireccionInstitucional[] = [
  {
    id: 1,
    siglas: 'DARSE',
    nombreCompleto: 'Dirección de Admisión, Registro, Seguimiento y Egreso',
    icono: 'graduation-cap',
    urlDestino: '/direcciones/darse',
  },
  {
    id: 2,
    siglas: 'DITED',
    nombreCompleto: 'Dirección de Innovación y Tecnologías de Educación a Distancia',
    icono: 'monitor',
    urlDestino: '/direcciones/dited',
  },
  {
    id: 3,
    siglas: 'DISISERBI',
    nombreCompleto: 'Dirección del Sistema de los Servicios Bibliotecarios',
    icono: 'book-open',
    urlDestino: '/direcciones/disiserbi',
  },
  {
    id: 4,
    siglas: 'INSITEZ',
    nombreCompleto: 'Instituto Superior de Innovación Tecnológica Ezequiel Zamora',
    icono: 'building-2',
    urlDestino: '/direcciones/insitez',
  },
];

const EVENTOS_HERO_MOCK: EventoHero[] = [
  {
    id: 1,
    titulo: 'Titulo De Evento',
    descripcion: 'Descripción de evento algo largo...',
    imagenUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    imagenAlt: 'Estudiantes en aula universitaria UNELLEZ',
    urlDetalle: '/eventos/1',
    activo: true,
    orden: 1,
  },
  {
    id: 2,
    titulo: 'Jornadas de Investigación Científica 2026',
    descripcion: 'Presentación de avances científicos y desarrollo para los llanos occidentales.',
    imagenUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80',
    imagenAlt: 'Conferencia académica UNELLEZ',
    urlDetalle: '/eventos/2',
    activo: true,
    orden: 2,
  },
  {
    id: 3,
    titulo: 'Censo de Admisión e Inscripción Semestre 2026-I',
    descripcion: 'Proceso formal de admisión a través de DARSE para nuevos ingresos.',
    imagenUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    imagenAlt: 'Campus universitario',
    urlDetalle: '/eventos/3',
    activo: true,
    orden: 3,
  },
  {
    id: 4,
    titulo: 'Encuentro Deportivo Inter-Vicerrectorados',
    descripcion: 'Competencias en Barinas, Apure, Cojedes y Portuguesa de cara a los JUVINEU.',
    imagenUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80',
    imagenAlt: 'Deportistas universitarios',
    urlDetalle: '/eventos/4',
    activo: true,
    orden: 4,
  },
];

const VICERRECTORADOS_MOCK: Vicerrectorado[] = [
  {
    id: 1,
    siglas: 'VPDS',
    nombre: 'Vicerrectorado de Planificación y Desarrollo Social',
    sede: 'Barinas, Estado Barinas',
    urlPortal: '/vicerrectorados/vpds',
  },
  {
    id: 2,
    siglas: 'VPDR',
    nombre: 'Vicerrectorado de Planificación y Desarrollo Regional',
    sede: 'San Fernando de Apure, Estado Apure',
    urlPortal: '/vicerrectorados/vpdr',
  },
  {
    id: 3,
    siglas: 'VIPI',
    nombre: 'Vicerrectorado de Infraestructura y Procesos Industriales',
    sede: 'San Carlos, Estado Cojedes',
    urlPortal: '/vicerrectorados/vipi',
    destacadoPorDefecto: true, // Según diseño Figma aparece activo/resaltado
  },
  {
    id: 4,
    siglas: 'VPA',
    nombre: 'Vicerrectorado de Producción Agrícola',
    sede: 'Guanare, Estado Portuguesa',
    urlPortal: '/vicerrectorados/vpa',
  },
];

const AVISO_GRADO_MOCK: AvisoImportante = {
  id: 1,
  mensaje: 'Se acercan pronto los actos de grados',
  textoEnlace: 'Más información',
  urlDestino: '/avisos/actos-de-grado',
  activo: true,
};

const NOTICIAS_MOCK: Noticia[] = [
  {
    id: 1,
    slug: 'talento-deportivo-comunidad-universitaria-impulso-cancha',
    titulo: 'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
    resumen: 'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026 con destacada participación.',
    categoria: 'Deportes',
    imagenUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    imagenAlt: 'Atletas en pista de atletismo',
    esDestacadaPrincipal: true,
    fechaPublicacion: '2026-11-10',
  },
  {
    id: 2,
    slug: 'talento-deportivo-comunidad-universitaria-secundaria',
    titulo: 'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
    resumen: 'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026.',
    categoria: 'Deportes',
    imagenUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    imagenAlt: 'Relevo de atletismo en pista',
    esDestacadaPrincipal: false,
    esDestacadaSecundaria: true,
    fechaPublicacion: '2026-11-09',
  },
  {
    id: 3,
    slug: 'talento-deportivo-comunidad-universitaria-columna-3',
    titulo: 'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
    resumen: 'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026.',
    categoria: 'Deportes',
    imagenUrl: '',
    imagenAlt: '',
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-08',
  },
  {
    id: 4,
    slug: 'talento-comunidad-universitaria-columna-3-b',
    titulo: 'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
    resumen: 'Jornadas de integración comunitaria entre personal docente y comunidad estudiantil.',
    categoria: 'Comunidad',
    imagenUrl: '',
    imagenAlt: '',
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-07',
  },
];

const INFO_INSTITUCIONAL_MOCK: InfoInstitucional = {
  nombreInstitucion: 'Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora',
  siglas: 'UNELLEZ',
  direccion: 'Av. 23 de Enero, Redoma de Ezequiel Zamora. Sede UNELLEZ - Barinas - Estado Barinas.',
  correoContacto: 'despachorectoral@unellez.edu.ve',
  rif: 'RIF: G-20007705-0',
  enlacesRapidos: [
    { id: 1, etiqueta: 'Sistema DUX (Estudiantes)', url: 'https://dux.unellez.edu.ve', esExterno: true },
    { id: 2, etiqueta: 'Librería Universitaria', url: '/libreria' },
    { id: 3, etiqueta: 'Campus Virtuales', url: 'https://campusvirtual.unellez.edu.ve', esExterno: true },
  ],
  redesSociales: [
    { plataforma: 'twitter', url: 'https://twitter.com/UNELLEZ_Oficial' },
    { plataforma: 'facebook', url: 'https://facebook.com/UNELLEZOficial' },
    { plataforma: 'instagram', url: 'https://instagram.com/unellez_oficial' },
  ],
};

// -------------------------------------------------------------
// Funciones Asíncronas (Equivalente al Repository / Consumer HTTP)
// -------------------------------------------------------------

export async function obtenerEnlacesNavbar(): Promise<EnlaceNavegacion[]> {
  // Simula latencia de red de ~50ms
  return Promise.resolve(ENLACES_NAVBAR_MOCK);
}

export async function obtenerEventosHero(): Promise<EventoHero[]> {
  return Promise.resolve(EVENTOS_HERO_MOCK);
}

export async function obtenerDireccionesAccesoRapido(): Promise<DireccionInstitucional[]> {
  return Promise.resolve(DIRECCIONES_MOCK);
}

export async function obtenerVicerrectorados(): Promise<Vicerrectorado[]> {
  return Promise.resolve(VICERRECTORADOS_MOCK);
}

export async function obtenerAvisoImportante(): Promise<AvisoImportante | null> {
  return Promise.resolve(AVISO_GRADO_MOCK);
}

export async function obtenerNoticiasDestacadas(): Promise<Noticia[]> {
  return Promise.resolve(NOTICIAS_MOCK);
}

export async function obtenerInfoInstitucional(): Promise<InfoInstitucional> {
  return Promise.resolve(INFO_INSTITUCIONAL_MOCK);
}

/**
 * Función consolidada para cargar toda la información de la Home en paralelo.
 * En PHP equivaldría a llamar a:
 * `$datos = $homeController->index();`
 */
export async function obtenerDatosHome(): Promise<DatosPaginaInicio> {
  const [
    enlacesNavbar,
    eventosHero,
    direcciones,
    vicerrectorados,
    avisoActivo,
    noticiasDestacadas,
    infoInstitucional,
  ] = await Promise.all([
    obtenerEnlacesNavbar(),
    obtenerEventosHero(),
    obtenerDireccionesAccesoRapido(),
    obtenerVicerrectorados(),
    obtenerAvisoImportante(),
    obtenerNoticiasDestacadas(),
    obtenerInfoInstitucional(),
  ]);

  return {
    enlacesNavbar,
    eventosHero,
    direcciones,
    vicerrectorados,
    avisoActivo,
    noticiasDestacadas,
    infoInstitucional,
  };
}

