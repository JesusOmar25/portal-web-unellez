import type { Noticia } from '@/types/cms';

/**
 * Servicio de Noticias del Portal & CMS UNELLEZ
 *
 * Centraliza los mocks de noticias para el Home (Spec 001), la vista de detalle
 * (`/noticias/[slug]`, Spec 003) y el listado editorial (`/noticias`, Spec 004).
 * Cuando el backend en PHP esté disponible, solo se debe reemplazar el retorno
 * mock por las llamadas `fetch` comentadas.
 */
const NOTICIAS_MOCK: Noticia[] = [
  {
    id: 1,
    slug: 'talento-deportivo-comunidad-universitaria-impulso-cancha',
    titulo:
      'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
    resumen:
      'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026 con destacada participación.',
    categoria: 'Deportes',
    imagenUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Atletas universitarios en pista de atletismo durante jornada clasificatoria',
    pieFoto: 'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026.',
    contenido: [
      'Con gran entusiasmo y espíritu deportivo, la Universidad Nacional Experimental de los Llanos Occidentales "Ezequiel Zamora" (UNELLEZ) llevó a cabo una jornada preparatoria en sus instalaciones deportivas, reuniendo a delegaciones de estudiantes, docentes y personal administrativo de los cuatro vicerrectorados.',
      'La actividad forma parte del cronograma de preparación rumbo a los Juegos Universitarios Venezolanos de Educación Universitaria (JUVINEU 2026), permitiendo evaluar el rendimiento técnico en atletismo, voleibol, baloncesto y fútbol sala bajo la coordinación de la Dirección de Deportes.',
      'Durante el encuentro, entrenadores y coordinadores deportivos destacaron la disciplina y el compromiso de los atletas zamoranos, quienes entrenan de manera constante para dejar en alto el nombre de la universidad que siembra en las próximas competencias nacionales.',
      'Las autoridades rectorales ratificaron su respaldo a la masificación deportiva como pilar fundamental de la formación integral, anunciando nuevas jornadas de dotación de implementos y rehabilitación de espacios recreativos en las sedes de Barinas, Apure, Cojedes y Portuguesa.',
    ],
    esDestacadaPrincipal: true,
    fechaPublicacion: '2026-11-10',
  },
  {
    id: 2,
    slug: 'modernizacion-aulas-virtuales-dited-semestre-2026',
    titulo:
      'DITED impulsa la modernización de las aulas virtuales y plataformas digitales en la UNELLEZ',
    resumen:
      'La Dirección de Innovación y Tecnologías de Educación a Distancia actualiza su infraestructura para mejorar la conectividad estudiantil.',
    categoria: 'Tecnología',
    imagenUrl:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Estudiantes universitarios trabajando con herramientas tecnológicas en campus',
    pieFoto:
      'Equipos técnicos de DITED presentaron las mejoras de rendimiento en los campus virtuales.',
    contenido: [
      'La Dirección de Innovación y Tecnologías de Educación a Distancia (DITED) anunció el despliegue de una nueva arquitectura tecnológica orientada a optimizar la disponibilidad y velocidad de los campus virtuales institucionales en todos los vicerrectorados.',
      'El proyecto contempla la actualización de servidores, la integración de herramientas interactivas de evaluación en línea y la capacitación continua de los profesores en estrategias pedagógicas digitales adaptadas a la modalidad bimodal.',
      'Más de veinticinco mil estudiantes de pregrado y postgrado se beneficiarán directamente con una interfaz más rápida, accesible desde dispositivos móviles y compatible con conexiones de bajo ancho de banda en zonas rurales de los llanos occidentales.',
      'Como parte del plan de transformación digital, el equipo de desarrollo también avanza en la renovación del portal web oficial y su gestor de contenidos desacoplado, facilitando la publicación oportuna de información académica por parte de cada dirección.',
    ],
    esDestacadaPrincipal: false,
    esDestacadaSecundaria: true,
    fechaPublicacion: '2026-11-09',
  },
  {
    id: 3,
    slug: 'seleccion-voleibol-unellez-clasifica-fase-nacional',
    titulo:
      'Selección de voleibol zamorana asegura su pase a la fase nacional universitaria',
    resumen:
      'El conjunto representativo del VPDS y VPA sumó victorias decisivas en el torneo clasificatorio regional.',
    categoria: 'Deportes',
    imagenUrl:
      'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Competencia deportiva universitaria en cancha cubierta',
    pieFoto:
      'Atletas de la selección universitaria celebran el cierre del clasificatorio regional.',
    contenido: [
      'La selección masculina y femenina de voleibol de la UNELLEZ conquistó su boleto a la etapa nacional tras cerrar invicta la serie clasificatoria disputada en el gimnasio cubierto de la sede Barinas.',
      'El cuerpo técnico resaltó la cohesión del equipo, integrado por estudiantes de distintas carreras de ingeniería, educación y ciencias del agro, quienes combinan su rendimiento académico con sesiones diarias de entrenamiento.',
      'La Dirección de Deportes informó que en las próximas semanas se realizarán encuentros amistosos de fogueo con universidades hermanas de la región centro-occidental.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-08',
  },
  {
    id: 4,
    slug: 'jornada-integracion-comunitaria-extension-universitaria',
    titulo:
      'Comunidad zamorana participa en jornada de extensión e integración socio-productiva',
    resumen:
      'Docentes y estudiantes de ingeniería y ciencias sociales desarrollan proyectos comunitarios en sectores aledaños a la sede Barinas.',
    categoria: 'Comunidad',
    imagenUrl:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Estudiantes de la UNELLEZ en jornada académica y comunitaria',
    pieFoto:
      'Voluntariado estudiantil y docentes compartieron saberes técnicos con consejos comunales locales.',
    contenido: [
      'En el marco del programa de vinculación socio-comunitaria, estudiantes y profesores del Vicerrectorado de Planificación y Desarrollo Social (VPDS) ejecutaron una jornada integral de acompañamiento técnico en comunidades productivas del estado Barinas.',
      'Durante el despliegue se impartieron talleres sobre agricultura sostenible, gestión administrativa comunitaria y alfabetización tecnológica, fortaleciendo los lazos históricos entre la universidad y el pueblo llanero.',
      'Los participantes resaltaron la importancia de llevar el conocimiento generado en las aulas y laboratorios directamente al territorio, promoviendo soluciones concretas a las necesidades productivas y educativas de la región.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-07',
  },
  {
    id: 5,
    slug: 'torneo-inter-vicerrectorados-atletismo-cojedes-2026',
    titulo:
      'VIPI San Carlos recibe el torneo inter-vicerrectorados de atletismo y relevos',
    resumen:
      'Delegaciones de Barinas, Apure, Portuguesa y Cojedes midieron fuerzas en pruebas de pista y campo.',
    categoria: 'Deportes',
    imagenUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Competidores en pista durante jornada deportiva inter-vicerrectorados',
    pieFoto:
      'Pruebas de velocidad y relevos marcaron la jornada deportiva en el estado Cojedes.',
    contenido: [
      'El Vicerrectorado de Infraestructura y Procesos Industriales (VIPI), con sede en San Carlos, sirvió de escenario para el encuentro inter-vicerrectorados de atletismo universitario con más de doscientos competidores inscritos.',
      'Las pruebas de 100 metros planos, relevos 4x400 y salto largo dejaron nuevas marcas personales para los atletas zamoranos, quienes agradecieron el respaldo logístico de las coordinaciones estudiantiles.',
      'El evento concluyó con la entrega de reconocimientos a las delegaciones participantes y la conformación de la preselección institucional que representará a la UNELLEZ en el calendario nacional.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-06',
  },
  {
    id: 6,
    slug: 'encuentro-investigacion-agroindustrial-llanos-occidentales',
    titulo:
      'Investigadores de la UNELLEZ presentan avances en innovación agroindustrial y semillas',
    resumen:
      'Grupos de investigación del VPA y VIPI socializan resultados científicos aplicados a la producción agrícola sustentable.',
    categoria: 'Tecnología',
    imagenUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Laboratorio científico universitario con investigadores',
    pieFoto:
      'Investigadores zamoranos expusieron resultados de laboratorio en el encuentro anual de ciencia.',
    contenido: [
      'Con la participación de investigadores de Guanare, San Carlos, Barinas y San Fernando de Apure, se celebró el Encuentro Regional de Innovación Agroindustrial organizado por los centros de investigación de la UNELLEZ.',
      'Las ponencias abordaron el mejoramiento genético de cultivos adaptados al clima de los llanos, el aprovechamiento de subproductos agrícolas y el uso de sensores de bajo costo para el monitoreo de suelos.',
      'Las conclusiones del evento serán publicadas en la revista científica institucional y servirán de base para nuevos convenios de cooperación con productores locales y centros tecnológicos nacionales.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-05',
  },
  {
    id: 7,
    slug: 'darse-habilita-cronograma-actos-grado-semestre-2026',
    titulo:
      'DARSE publica cronograma oficial de verificación académica para actos de grado 2026',
    resumen:
      'Los graduandos de pregrado y postgrado podrán consignar recaudos digitales mediante el sistema institucional.',
    categoria: 'Universidad',
    imagenUrl:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Ceremonia académica de graduandos universitarios',
    pieFoto:
      'La Dirección de Admisión, Registro, Seguimiento y Egreso agiliza el proceso de auditoría académica.',
    contenido: [
      'La Dirección de Admisión, Registro, Seguimiento y Egreso (DARSE) informó a la comunidad estudiantil la apertura del calendario oficial de consignación de documentos y auditoría de expedientes correspondiente a los próximos actos de grado solemnes.',
      'A través de la plataforma DUX y las oficinas de registro de cada vicerrectorado, los aspirantes podrán verificar el estatus de sus unidades crédito aprobadas, servicio comunitario y solvencias administrativas.',
      'Las autoridades académicas exhortaron a los estudiantes a cumplir puntualmente con las fechas establecidas por sede para garantizar la emisión oportuna de títulos y certificaciones universitarias.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-04',
  },
  {
    id: 8,
    slug: 'disiserbi-amplia-catalogo-biblioteca-digital-abierta',
    titulo:
      'DISISERBI incorpora más de mil títulos de acceso abierto a la biblioteca digital zamorana',
    resumen:
      'Estudiantes y profesores cuentan con nuevos repositorios de tesis, libros técnicos y revistas arbitradas.',
    categoria: 'Comunidad',
    imagenUrl:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Biblioteca universitaria con estanterías de libros académicos',
    pieFoto:
      'El Sistema de los Servicios Bibliotecarios refuerza el acceso gratuito a bibliografía especializada.',
    contenido: [
      'La Dirección del Sistema de los Servicios Bibliotecarios (DISISERBI) puso a disposición de toda la comunidad universitaria una actualización del repositorio digital con más de mil nuevos libros electrónicos, trabajos de grado y artículos arbitrados.',
      'El catálogo abarca áreas prioritarias como agronomía, medicina veterinaria, ingeniería informática, derecho, educación y ciencias económicas, facilitando la consulta remota desde cualquier dispositivo.',
      'Adicionalmente, el personal bibliotecario ofrecerá talleres de búsqueda académica y gestión de referencias para estudiantes que inician su trabajo especial de grado.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-03',
  },
  {
    id: 9,
    slug: 'rehabilitacion-complejo-deportivo-sede-barinas-juvina',
    titulo:
      'Avanza rehabilitación integral del complejo deportivo y pista de atletismo en sede Barinas',
    resumen:
      'Cuadrillas técnicas y voluntarios universitarios optimizan áreas de entrenamiento para atletas de alto rendimiento.',
    categoria: 'Deportes',
    imagenUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    imagenAlt: 'Pista de atletismo rehabilitada para entrenamientos universitarios',
    pieFoto:
      'Las mejoras de iluminación y demarcación benefician a clubes deportivos y cátedras de educación física.',
    contenido: [
      'Con el objetivo de brindar espacios dignos y seguros para el desarrollo físico de la juventud universitaria, la UNELLEZ ejecuta un plan de rehabilitación integral en la pista de atletismo y canchas múltiples de la sede Barinas.',
      'Los trabajos incluyen la renovación del sistema de iluminación LED, demarcación reglamentaria de carriles, mantenimiento de gradas y adecuación de vestuarios para delegaciones visitantes.',
      'Esta intervención beneficiará directamente a los estudiantes de la licenciatura en Educación Física, Deporte y Recreación, así como a los atletas que integran las selecciones institucionales rumbo a los compromisos nacionales.',
    ],
    esDestacadaPrincipal: false,
    fechaPublicacion: '2026-11-02',
  },
];

/**
 * Obtiene las 4 noticias destacadas para la página principal (Home - Spec 001).
 * Endpoint futuro en PHP: `GET /api/v1/noticias?destacadas=1&limite=4`
 */
export async function obtenerNoticiasDestacadas(): Promise<Noticia[]> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(`${apiUrl}/api/v1/noticias?destacadas=1&limite=4`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return res.json();
  */
  return Promise.resolve(NOTICIAS_MOCK.slice(0, 4));
}

/**
 * Obtiene el listado completo de noticias para la vista editorial (`/noticias` - Spec 004).
 * Endpoint futuro en PHP: `GET /api/v1/noticias`
 */
export async function obtenerTodasLasNoticias(): Promise<Noticia[]> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(`${apiUrl}/api/v1/noticias`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return res.json();
  */
  return Promise.resolve(NOTICIAS_MOCK);
}

/**
 * Busca una noticia exacta por su `slug` para la vista de detalle `/noticias/[slug]`.
 * Retorna `null` si no existe coincidencia.
 * Endpoint futuro en PHP: `GET /api/v1/noticias/{slug}`
 */
export async function obtenerNoticiaPorSlug(slug: string): Promise<Noticia | null> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(`${apiUrl}/api/v1/noticias/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Error al consultar la noticia');
  return res.json();
  */
  const noticia = NOTICIAS_MOCK.find((item) => item.slug === slug) ?? null;
  return Promise.resolve(noticia);
}

/**
 * Retorna noticias relacionadas excluyendo el artículo actual para la barra lateral "Mas noticias".
 * Endpoint futuro en PHP: `GET /api/v1/noticias?excluir={slugActual}&limite={limite}`
 */
export async function obtenerNoticiasRelacionadas(
  slugActual: string,
  limite = 3
): Promise<Noticia[]> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(
    `${apiUrl}/api/v1/noticias?excluir=${encodeURIComponent(slugActual)}&limite=${limite}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  return res.json();
  */
  const relacionadas = NOTICIAS_MOCK.filter((item) => item.slug !== slugActual).slice(0, limite);
  return Promise.resolve(relacionadas);
}
