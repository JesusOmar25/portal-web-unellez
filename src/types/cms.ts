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
  imagenFondoUrl?: string;
  activo: boolean;
}

/**
 * Categorías permitidas para noticias del CMS
 */
export type CategoriaNoticia =
  | 'Deportes'
  | 'Tecnología'
  | 'Comunidad'
  | 'Universidad'
  | 'Académico'
  | 'Investigación'
  | 'Cultura';

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
  pieFoto?: string; // Pie de foto debajo de la imagen principal en la vista de detalle
  contenido: string[]; // Párrafos del cuerpo completo de la noticia
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

/**
 * Credenciales enviadas por el operador desde el formulario de login
 * Endpoint futuro en PHP: `POST /api/v1/auth/login`
 */
export interface CredencialesLogin {
  usuario: string;
  password: string;
}

/**
 * Datos básicos del operador autenticado en el CMS
 */
export interface UsuarioAutenticado {
  id: number;
  nombre: string;
  direccion: string;
  rol: string;
}

/**
 * Respuesta estándar del endpoint de autenticación en PHP
 */
export interface RespuestaAuth {
  ok: boolean;
  token?: string;
  usuario?: UsuarioAutenticado;
  mensaje?: string;
}

/**
 * Imagen asociada a una sección institucional de "Sobre la Universidad"
 */
export interface ImagenSeccionUniversidad {
  url: string;
  alt: string;
  escalaDeGrises?: boolean;
}

/**
 * Representa cada pestaña de la vista institucional `/universidad`
 * Tabla sugerida en PHP: `cms_universidad_secciones`
 */
export interface SeccionUniversidad {
  id: string;
  etiqueta: string;
  titulo: string;
  introDestacada?: string;
  parrafos: string[];
  imagenes: ImagenSeccionUniversidad[];
}

/**
 * Slide para carruseles de subportales de direcciones (Hero y Destacadas)
 */
export interface SlideSubportal {
  id: string;
  titulo: string;
  imagenUrl: string;
  alt: string;
}

/**
 * Artículo breve listado en la columna "Últimos artículos" de un subportal
 */
export interface ArticuloSubportal {
  id: string;
  slug: string;
  titulo: string;
  resumen?: string;
  imagenUrl?: string;
}

/**
 * Miembro directivo o de equipo en la sección "Nosotros" del subportal
 */
export interface MiembroEquipo {
  id: string;
  nombre: string;
  cargo: string;
  fotoUrl?: string;
}

/**
 * Grupo de autoridades o gerencias (ej. Fundadores, Equipo de trabajo, Gerentes)
 */
export interface GrupoEquipo {
  titulo: string;
  miembros: MiembroEquipo[];
}

/**
 * Contenido unificado de las 5 pestañas de `/direcciones/[slug]/nosotros`
 */
export interface NosotrosSubportal {
  quienesSomos: {
    tituloBloque: string;
    parrafos: string[];
    gruposEquipo: GrupoEquipo[];
  };
  historia: {
    tituloBloque: string;
    parrafos: string[];
  };
  misionVision: {
    mision: string;
    vision: string;
  };
  reglamentos: {
    parrafos: string[];
    documentos?: { id: string; titulo: string; url: string }[];
  };
  estructuraOrganizacional: {
    descripcion: string;
    unidades: string[];
  };
}

/**
 * Servicio prestado por una dirección en `/direcciones/[slug]/servicios`
 */
export interface ServicioSubportal {
  id: string;
  titulo: string;
  descripcion: string;
  horario?: string;
}

/**
 * Oficina de atención en `/direcciones/[slug]/contactos`
 */
export interface OficinaContacto {
  id: string;
  nombre: string;
  ubicacion: string;
  telefono: string;
}

/**
 * Archivo o planilla descargable en `/direcciones/[slug]/descargas`
 */
export interface ArchivoDescarga {
  id: string;
  titulo: string;
  url: string;
  formato?: string;
}

/**
 * Configuración y contenido completo de un subportal de dirección
 * Endpoint futuro en PHP: `GET /api/v1/direcciones/{slug}`
 */
export interface DireccionSubportal {
  slug: 'darse' | 'dited' | 'disiserbi' | 'insitez';
  siglas: 'DARSE' | 'DITED' | 'DISISERBI' | 'INSITEZ';
  nombreCompleto: string;
  slidesHero: SlideSubportal[];
  destacadas: SlideSubportal[];
  ultimosArticulos: ArticuloSubportal[];
  nosotros: NosotrosSubportal;
  servicios: ServicioSubportal[];
  oficinas: OficinaContacto[];
  descargas: ArchivoDescarga[];
}

