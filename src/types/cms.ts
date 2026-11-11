/**
 * Interfaces TypeScript para el Portal Institucional & CMS UNELLEZ
 * 
 * Diseñadas para reflejar las entidades y respuestas JSON de la futura API REST en PHP.
 * Cumplen con la Constitución del proyecto: tipado estricto y desacoplamiento total.
 */

/**
 * Representa un enlace de los menús (Navbar, Footer)
 * Tabla sugerida en PHP: `cms_enlaces_menu`
 */
export interface EnlaceNavegacion {
  id: number;
  etiqueta: string;
  url: string;
  esActivo?: boolean;
  esExterno?: boolean;
}

/**
 * Representa una Dirección institucional (DARSE, DITED, DISISERBI, INSITEZ)
 * Tabla sugerida en PHP: `cms_direcciones`
 */
export interface DireccionInstitucional {
  id: number;
  siglas: 'DARSE' | 'DITED' | 'DISISERBI' | 'INSITEZ' | string;
  nombreCompleto: string;
  icono: 'graduation-cap' | 'monitor' | 'book-open' | 'building-2';
  urlDestino: string;
}

/**
 * Representa un evento o slide del Hero Banner principal
 * Tabla sugerida en PHP: `cms_eventos_hero`
 */
export interface EventoHero {
  id: number;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  imagenAlt: string;
  urlDetalle?: string;
  activo: boolean;
  orden: number;
}

/**
 * Representa un Vicerrectorado (VPDS, VPDR, VIPI, VPA)
 * Tabla sugerida en PHP: `cms_vicerrectorados`
 */
export interface Vicerrectorado {
  id: number;
  siglas: 'VPDS' | 'VPDR' | 'VIPI' | 'VPA';
  nombre: string;
  sede: string;
  descripcionBreve?: string;
  urlPortal: string;
  destacadoPorDefecto?: boolean;
}

/**
 * Representa el cintillo o banner de alerta importante (ej. Actos de Grado)
 * Tabla sugerida en PHP: `cms_avisos_importantes`
 */
export interface AvisoImportante {
  id: number;
  mensaje: string;
  textoEnlace: string;
  urlDestino: string;
  activo: boolean;
}

/**
 * Categorías permitidas para noticias del CMS
 */
export type CategoriaNoticia = 'Deportes' | 'Comunidad' | 'Académico' | 'Investigación' | 'Cultura';

/**
 * Representa una noticia universitaria
 * Tabla sugerida en PHP: `cms_noticias`
 */
export interface Noticia {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  categoria: CategoriaNoticia;
  imagenUrl: string;
  imagenAlt: string;
  esDestacadaPrincipal: boolean; // Columna izquierda grande (6 columnas en grid)
  esDestacadaSecundaria?: boolean; // Columna central con foto (3 columnas en grid)
  fechaPublicacion: string; // Formato ISO 8601: "YYYY-MM-DD"
}

/**
 * Enlace a red social oficial
 */
export interface RedSocial {
  plataforma: 'twitter' | 'facebook' | 'instagram' | 'youtube';
  url: string;
}

/**
 * Información institucional y datos de contacto (utilizados en Footer)
 * Tabla sugerida en PHP: `cms_configuracion_institucional`
 */
export interface InfoInstitucional {
  nombreInstitucion: string;
  siglas: string;
  direccion: string;
  correoContacto: string;
  rif: string;
  enlacesRapidos: EnlaceNavegacion[];
  redesSociales: RedSocial[];
}

/**
 * Payload consolidado para la vista principal
 * Endpoint sugerido en PHP: `GET /api/v1/home`
 */
export interface DatosPaginaInicio {
  enlacesNavbar: EnlaceNavegacion[];
  eventosHero: EventoHero[];
  direcciones: DireccionInstitucional[];
  vicerrectorados: Vicerrectorado[];
  avisoActivo: AvisoImportante | null;
  noticiasDestacadas: Noticia[];
  infoInstitucional: InfoInstitucional;
}

