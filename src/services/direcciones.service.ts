import type { DireccionSubportal } from '@/types/cms';

/**
 * Servicio de Subportales de Direcciones UNELLEZ (`/direcciones/[slug]/*`)
 *
 * Centraliza el contenido diferenciado de DARSE, DITED, DISISERBI e INSITEZ
 * (Portada, Nosotros, Servicios, Contactos y Descargas).
 * Cumple con la arquitectura API-First: cuando el backend en PHP esté listo,
 * solo se debe descomentar el bloque `fetch` hacia `/api/v1/direcciones/{slug}`.
 */
const DIRECCIONES_SUBPORTAL_MOCK: DireccionSubportal[] = [
  {
    slug: 'darse',
    siglas: 'DARSE',
    nombreCompleto: 'Dirección de Admisión, Registro, Seguimiento y Egreso',
    slidesHero: [
      {
        id: 'darse-hero-1',
        titulo: 'Jornadas de inscripción y registro académico 2026',
        imagenUrl: '/images/hero-aula-unellez.jpg',
        alt: 'Estudiantes en aula durante proceso académico DARSE',
      },
      {
        id: 'darse-hero-2',
        titulo: 'Verificación de expedientes para actos de grado solemnes',
        imagenUrl:
          'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80',
        alt: 'Graduandos universitarios UNELLEZ',
      },
      {
        id: 'darse-hero-3',
        titulo: 'Atención estudiantil integrada a través del Sistema DUX',
        imagenUrl:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80',
        alt: 'Campus universitario y registro estudiantil',
      },
      {
        id: 'darse-hero-4',
        titulo: 'Seguimiento y acompañamiento a nuevos ingresos zamoranos',
        imagenUrl:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80',
        alt: 'Estudiantes de nuevo ingreso en jornada informativa',
      },
    ],
    destacadas: [
      {
        id: 'darse-dest-1',
        titulo: 'Cronograma oficial de carga de notas y actas 2026-I',
        imagenUrl:
          'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Cronograma de actas académicas DARSE',
      },
      {
        id: 'darse-dest-2',
        titulo: 'Solicitud digital de constancias de estudio y notas certificadas',
        imagenUrl:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80',
        alt: 'Trámites académicos digitales DARSE',
      },
      {
        id: 'darse-dest-3',
        titulo: 'Censo de admisión para los cuatro vicerrectorados',
        imagenUrl:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
        alt: 'Admisión universitaria UNELLEZ',
      },
      {
        id: 'darse-dest-4',
        titulo: 'Jornada de auditoría de expedientes de grado',
        imagenUrl: '/images/hero-aula-unellez.jpg',
        alt: 'Auditoría académica estudiantil',
      },
    ],
    ultimosArticulos: [
      {
        id: 'darse-art-1',
        slug: 'darse-habilita-cronograma-actos-grado-semestre-2026',
        titulo:
          'DARSE publica cronograma oficial de verificación académica para actos de grado 2026',
        resumen:
          'Los graduandos de pregrado y postgrado podrán consignar recaudos digitales mediante el sistema institucional.',
        imagenUrl:
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'darse-art-2',
        slug: 'talento-deportivo-comunidad-universitaria-impulso-cancha',
        titulo:
          'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
        resumen:
          'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026.',
      },
      {
        id: 'darse-art-3',
        slug: 'modernizacion-aulas-virtuales-dited-semestre-2026',
        titulo:
          'Actualización del módulo de inscripción en línea para estudiantes regulares',
      },
      {
        id: 'darse-art-4',
        slug: 'jornada-integracion-comunitaria-extension-universitaria',
        titulo:
          'Lineamientos para equivalencias y traslados entre vicerrectorados UNELLEZ',
      },
    ],
    nosotros: {
      quienesSomos: {
        tituloBloque: 'DARSE',
        parrafos: [
          'La Dirección de Admisión, Registro, Seguimiento y Egreso (DARSE) es la dependencia responsable de planificar, ejecutar y resguardar los procesos de ingreso, control de estudios, historial académico y graduación de los estudiantes de pregrado y postgrado de la UNELLEZ.',
          'Trabaja de forma articulada con las coordinaciones de registro en los cuatro vicerrectorados para garantizar la veracidad documental, la atención oportuna y la transparencia de los trámites académicos.',
        ],
        gruposEquipo: [
          {
            titulo: 'Dirección General',
            miembros: [
              { id: 'darse-m1', nombre: 'Prof. Carlos Mendoza', cargo: 'Director General de DARSE' },
              { id: 'darse-m2', nombre: 'Lcda. María Elena Rivas', cargo: 'Coordinadora de Registro Académico' },
            ],
          },
          {
            titulo: 'Coordinaciones de Área',
            miembros: [
              { id: 'darse-m3', nombre: 'Ing. Luis Alejandro Torres', cargo: 'Coordinador de Sistemas y DUX' },
              { id: 'darse-m4', nombre: 'Lcda. Carmen Paredes', cargo: 'Coordinadora de Egreso y Grados' },
            ],
          },
        ],
      },
      historia: {
        tituloBloque: 'RESEÑA HISTÓRICA',
        parrafos: [
          'Desde la fundación de la UNELLEZ en los llanos occidentales, la gestión de control de estudios evolucionó desde los archivos manuales centralizados hasta convertirse en una dirección moderna con cobertura en Barinas, Apure, Cojedes y Portuguesa.',
          'Con la consolidación de la Dirección de Admisión, Registro, Seguimiento y Egreso (DARSE), se integraron los procesos de censo, inscripción, carga de calificaciones y emisión de títulos bajo plataformas digitales institucionales como DUX.',
        ],
      },
      misionVision: {
        mision:
          'Administrar con rigor técnico, transparencia y calidad de servicio los procesos de admisión, registro académico, seguimiento estudiantil y egreso de la comunidad universitaria zamorana.',
        vision:
          'Consolidarse como un sistema de registro y control de estudios completamente digital, ágil y confiable al servicio de estudiantes, docentes y egresados en todos los vicerrectorados.',
      },
      reglamentos: {
        parrafos: [
          'Las operaciones de DARSE se rigen por el Reglamento General de la UNELLEZ, el Reglamento Estudiantil de Evaluación y las normativas vigentes del Consejo Directivo sobre ingresos, equivalencias y actos de grado.',
        ],
        documentos: [
          { id: 'darse-reg-1', titulo: 'Normativa de Ingreso y Equivalencias', url: '#normativa-ingreso' },
          { id: 'darse-reg-2', titulo: 'Reglamento de Actos de Grado', url: '#reglamento-grado' },
        ],
      },
      estructuraOrganizacional: {
        descripcion:
          'DARSE organiza sus funciones en unidades especializadas para atender cada etapa de la trayectoria estudiantil:',
        unidades: [
          'Coordinación de Admisión y Nuevo Ingreso',
          'Coordinación de Registro y Control de Estudios',
          'Coordinación de Seguimiento y Rendimiento Estudiantil',
          'Coordinación de Auditoría Académica y Egreso',
          'Unidad de Archivo Histórico y Certificaciones',
        ],
      },
    },
    servicios: [
      {
        id: 'darse-s1',
        titulo: 'Constancias de Estudio y Notas',
        descripcion: 'Emisión y validación digital de constancias de inscripción, buena conducta y récords académicos.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 3:00 p.m.',
      },
      {
        id: 'darse-s2',
        titulo: 'Admisión y Nuevo Ingreso',
        descripcion: 'Orientación y registro de aspirantes asignados por OPSU, convenios institucionales y censos internos.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 2:30 p.m.',
      },
      {
        id: 'darse-s3',
        titulo: 'Auditoría de Expedientes de Grado',
        descripcion: 'Revisión integral de unidades crédito, servicio comunitario y recaudos para actos solemnes y por secretaría.',
        horario: 'Lunes a Jueves, 8:30 a.m. - 3:00 p.m.',
      },
      {
        id: 'darse-s4',
        titulo: 'Equivalencias y Traslados',
        descripcion: 'Recepción y tramitación de cambios de carrera, traslados entre vicerrectorados y reingresos.',
        horario: 'Martes y Jueves, 8:30 a.m. - 2:00 p.m.',
      },
    ],
    oficinas: [
      { id: 'darse-o1', nombre: 'Oficina 1', ubicacion: 'Sede Central VPDS, Edificio Administrativo Barinas II', telefono: '0273-533-1201' },
      { id: 'darse-o2', nombre: 'Oficina 2', ubicacion: 'Taquilla de Certificaciones y Grados, Hall del Rectorado', telefono: '0273-533-1202' },
      { id: 'darse-o3', nombre: 'Oficina 3', ubicacion: 'Unidad de Registro Estudiantil, Sede VPDR Apure', telefono: '0247-341-2040' },
      { id: 'darse-o4', nombre: 'Oficina 4', ubicacion: 'Coordinación de Enlace Académico, Sedes VIPI y VPA', telefono: '0257-251-1890' },
    ],
    descargas: [
      { id: 'darse-d1', titulo: 'Planilla de Solicitud de Grado', url: '#planilla-grado', formato: 'PDF' },
      { id: 'darse-d2', titulo: 'Formato de Cambio de Carrera', url: '#cambio-carrera', formato: 'PDF' },
      { id: 'darse-d3', titulo: 'Requisitos de Nuevo Ingreso', url: '#requisitos-ingreso', formato: 'PDF' },
      { id: 'darse-d4', titulo: 'Guía del Sistema DUX', url: '#guia-dux', formato: 'PDF' },
    ],
  },
  {
    slug: 'dited',
    siglas: 'DITED',
    nombreCompleto: 'Dirección de Innovación y Tecnologías de Educación a Distancia',
    slidesHero: [
      {
        id: 'dited-hero-1',
        titulo: 'Modernización de campus virtuales y aulas bimodales',
        imagenUrl: '/images/hero-aula-unellez.jpg',
        alt: 'Estudiantes en aula conectada a plataformas DITED',
      },
      {
        id: 'dited-hero-2',
        titulo: 'Formación docente en entornos virtuales de aprendizaje',
        imagenUrl:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80',
        alt: 'Taller de innovación tecnológica DITED',
      },
      {
        id: 'dited-hero-3',
        titulo: 'Soporte técnico permanente para profesores y estudiantes',
        imagenUrl:
          'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Laboratorio de desarrollo tecnológico universitario',
      },
      {
        id: 'dited-hero-4',
        titulo: 'Nuevo ecosistema digital desacoplado de la UNELLEZ',
        imagenUrl:
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80',
        alt: 'Infraestructura universitaria digital',
      },
    ],
    destacadas: [
      {
        id: 'dited-dest-1',
        titulo: 'Mantenimiento programado de servidores de Campus Virtual',
        imagenUrl:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
        alt: 'Mantenimiento de plataformas DITED',
      },
      {
        id: 'dited-dest-2',
        titulo: 'Apertura de diplomado en diseño instruccional para docentes',
        imagenUrl:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
        alt: 'Diplomado en educación a distancia',
      },
      {
        id: 'dited-dest-3',
        titulo: 'Guía rápida para acceso a aulas virtuales desde dispositivos móviles',
        imagenUrl:
          'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Acceso móvil a campus virtual',
      },
      {
        id: 'dited-dest-4',
        titulo: 'Jornada de actualización de credenciales institucionales',
        imagenUrl: '/images/hero-aula-unellez.jpg',
        alt: 'Credenciales tecnológicas UNELLEZ',
      },
    ],
    ultimosArticulos: [
      {
        id: 'dited-art-1',
        slug: 'modernizacion-aulas-virtuales-dited-semestre-2026',
        titulo:
          'DITED impulsa la modernización de las aulas virtuales y plataformas digitales en la UNELLEZ',
        resumen:
          'Actualización de infraestructura y servidores para mejorar la conectividad estudiantil en los cuatro vicerrectorados.',
        imagenUrl:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'dited-art-2',
        slug: 'encuentro-investigacion-agroindustrial-llanos-occidentales',
        titulo:
          'Nuevas herramientas de evaluación interactiva disponibles en el Campus Virtual',
        resumen:
          'Profesores pueden integrar cuestionarios adaptativos y rúbricas automatizadas.',
      },
      {
        id: 'dited-art-3',
        slug: 'disiserbi-amplia-catalogo-biblioteca-digital-abierta',
        titulo:
          'Integración de recursos educativos abiertos con bibliotecas digitales',
      },
      {
        id: 'dited-art-4',
        slug: 'darse-habilita-cronograma-actos-grado-semestre-2026',
        titulo:
          'Ciclo de webinars sobre inteligencia artificial aplicada a la docencia',
      },
    ],
    nosotros: {
      quienesSomos: {
        tituloBloque: 'DITED',
        parrafos: [
          'La Dirección de Innovación y Tecnologías de Educación a Distancia (DITED) lidera la transformación digital académica de la UNELLEZ, gestionando los campus virtuales, la formación tecnopedagógica y el desarrollo de soluciones educativas innovadoras.',
          'Acompaña a docentes y estudiantes en la adopción de metodologías bimodales y a distancia que amplían el alcance universitario en toda la región llanera.',
        ],
        gruposEquipo: [
          {
            titulo: 'Equipo Directivo',
            miembros: [
              { id: 'dited-m1', nombre: 'Ing. Jesús Ramírez', cargo: 'Director de Innovación y Tecnologías' },
              { id: 'dited-m2', nombre: 'MSc. Gabriela Montilla', cargo: 'Coordinadora de Diseño Instruccional' },
            ],
          },
          {
            titulo: 'Coordinaciones Técnicas',
            miembros: [
              { id: 'dited-m3', nombre: 'Ing. Rafael Peña', cargo: 'Coordinador de Plataforma y Servidores' },
              { id: 'dited-m4', nombre: 'Lcdo. Daniel Colmenares', cargo: 'Coordinador de Soporte y Enlace' },
            ],
          },
        ],
      },
      historia: {
        tituloBloque: 'RESEÑA HISTÓRICA',
        parrafos: [
          'DITED surge como respuesta estratégica de la UNELLEZ para incorporar las tecnologías de la información y la comunicación a la enseñanza universitaria, consolidando sus primeros campus Moodle y programas de capacitación docente.',
          'Actualmente impulsa una nueva etapa de modernización arquitectónica orientada a servicios web desacoplados, accesibilidad móvil y continuidad académica en los cuatro vicerrectorados.',
        ],
      },
      misionVision: {
        mision:
          'Promover y gestionar soluciones tecnológicas y pedagógicas de vanguardia que fortalezcan la educación a distancia y bimodal en toda la comunidad universitaria.',
        vision:
          'Ser referente nacional en innovación educativa digital, garantizando entornos virtuales seguros, inclusivos y de alto rendimiento para la UNELLEZ.',
      },
      reglamentos: {
        parrafos: [
          'El funcionamiento de los entornos virtuales y programas a distancia se sustenta en la Normativa de Educación Multimodal de la UNELLEZ y las políticas nacionales de software libre y estándares abiertos.',
        ],
        documentos: [
          { id: 'dited-reg-1', titulo: 'Lineamientos de Educación Multimodal', url: '#lineamientos-multimodal' },
          { id: 'dited-reg-2', titulo: 'Política de Uso del Campus Virtual', url: '#politica-campus' },
        ],
      },
      estructuraOrganizacional: {
        descripcion:
          'DITED integra áreas pedagógicas y de ingeniería para cubrir el ciclo completo de la educación digital:',
        unidades: [
          'Coordinación de Enlace y Tecnología',
          'Coordinación de Atención y Soporte Técnico',
          'Unidad de Diseño Instruccional y Contenidos Digitales',
          'Unidad de Administración de Campus Virtuales',
        ],
      },
    },
    servicios: [
      {
        id: 'dited-s1',
        titulo: 'Creación de Aulas Virtuales',
        descripcion: 'Apertura, estructuración y respaldo de cursos virtuales para subproyectos de pregrado y postgrado.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 3:30 p.m.',
      },
      {
        id: 'dited-s2',
        titulo: 'Soporte Técnico a Usuarios',
        descripcion: 'Recuperación de accesos, matriculación asistida y resolución de incidencias en el Campus Virtual.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 4:00 p.m.',
      },
      {
        id: 'dited-s3',
        titulo: 'Asesoría Tecnopedagógica',
        descripcion: 'Talleres y acompañamiento a docentes en diseño instruccional, recursos multimedia y evaluación en línea.',
        horario: 'Martes y Jueves, 9:00 a.m. - 3:00 p.m.',
      },
    ],
    oficinas: [
      { id: 'dited-o1', nombre: 'Oficina 1', ubicacion: 'central, ubicada al lado de Arse', telefono: '90230 (310) 391-2245' },
      { id: 'dited-o2', nombre: 'Oficina 2', ubicacion: 'Pao, ubicada en plaza Simón Bolívar, o hall de rectorado', telefono: '90230 (310) 391-2245' },
      { id: 'dited-o3', nombre: 'Oficina 3', ubicacion: 'laboratorios, ubicada en Barinas 1 adscrita a la Coordinación de enlace y tecnología.', telefono: '90230 (310) 391-2245' },
      { id: 'dited-o4', nombre: 'Oficina 4', ubicacion: 'Cabaña 8, ubicada en Barinas al lado de la aldea sabática adscrita a la Coordinación de Atención y soporte tecnología.', telefono: '90230 (310) 391-2245' },
    ],
    descargas: [
      { id: 'dited-d1', titulo: 'Manual del Estudiante Virtual', url: '#manual-estudiante', formato: 'PDF' },
      { id: 'dited-d2', titulo: 'Guía Docente de Aulas Bimodales', url: '#guia-docente', formato: 'PDF' },
      { id: 'dited-d3', titulo: 'Plantilla de Plan de Evaluación', url: '#plan-evaluacion', formato: 'DOCX' },
      { id: 'dited-d4', titulo: 'Solicitud de Apertura de Aula', url: '#solicitud-aula', formato: 'PDF' },
    ],
  },
  {
    slug: 'disiserbi',
    siglas: 'DISISERBI',
    nombreCompleto: 'Dirección del Sistema de los Servicios Bibliotecarios',
    slidesHero: [
      {
        id: 'disiserbi-hero-1',
        titulo: 'Red de bibliotecas y repositorios digitales zamoranos',
        imagenUrl: '/images/hero-aula-unellez.jpg',
        alt: 'Estudiantes consultando material académico DISISERBI',
      },
      {
        id: 'disiserbi-hero-2',
        titulo: 'Más de mil nuevos títulos técnicos de acceso abierto',
        imagenUrl:
          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80',
        alt: 'Estanterías de biblioteca universitaria UNELLEZ',
      },
      {
        id: 'disiserbi-hero-3',
        titulo: 'Asesoría en normas de citación y trabajos especiales de grado',
        imagenUrl:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
        alt: 'Revisión bibliográfica universitaria',
      },
      {
        id: 'disiserbi-hero-4',
        titulo: 'Salas de lectura renovadas en Barinas, Apure, Cojedes y Portuguesa',
        imagenUrl:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80',
        alt: 'Salas de lectura universitarias',
      },
    ],
    destacadas: [
      {
        id: 'disiserbi-dest-1',
        titulo: 'Horario extendido en salas de lectura por cierre de semestre',
        imagenUrl:
          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
        alt: 'Biblioteca universitaria en horario extendido',
      },
      {
        id: 'disiserbi-dest-2',
        titulo: 'Entrega digital de solvencia bibliotecaria para graduandos',
        imagenUrl:
          'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Solvencia bibliotecaria DISISERBI',
      },
      {
        id: 'disiserbi-dest-3',
        titulo: 'Campaña institucional de donación de textos científicos',
        imagenUrl:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80',
        alt: 'Donación de libros universitarios',
      },
      {
        id: 'disiserbi-dest-4',
        titulo: 'Acceso remoto a revistas arbitradas de ciencias del agro',
        imagenUrl:
          'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Revistas científicas arbitradas',
      },
    ],
    ultimosArticulos: [
      {
        id: 'disiserbi-art-1',
        slug: 'disiserbi-amplia-catalogo-biblioteca-digital-abierta',
        titulo:
          'DISISERBI incorpora más de mil títulos de acceso abierto a la biblioteca digital zamorana',
        resumen:
          'Estudiantes y profesores cuentan con nuevos repositorios de tesis, libros técnicos y revistas arbitradas.',
        imagenUrl:
          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'disiserbi-art-2',
        slug: 'darse-habilita-cronograma-actos-grado-semestre-2026',
        titulo:
          'Talleres presenciales y virtuales sobre búsqueda en bases de datos científicas',
        resumen:
          'Dirigidos a tesistas de pregrado y participantes de estudios avanzados.',
      },
      {
        id: 'disiserbi-art-3',
        slug: 'encuentro-investigacion-agroindustrial-llanos-occidentales',
        titulo:
          'Repositorio institucional alcanza cifra récord de descargas académicas',
      },
      {
        id: 'disiserbi-art-4',
        slug: 'jornada-integracion-comunitaria-extension-universitaria',
        titulo:
          'Actualización del protocolo de depósito legal de trabajos de grado',
      },
    ],
    nosotros: {
      quienesSomos: {
        tituloBloque: 'DISISERBI',
        parrafos: [
          'La Dirección del Sistema de los Servicios Bibliotecarios (DISISERBI) administra la red de bibliotecas físicas y repositorios digitales de la UNELLEZ, garantizando el acceso libre y organizado al conocimiento científico, técnico y humanístico.',
          'Brinda soporte documental a la docencia, investigación y extensión universitaria en todas las sedes y núcleos académicos.',
        ],
        gruposEquipo: [
          {
            titulo: 'Coordinación General',
            miembros: [
              { id: 'dis-m1', nombre: 'Lcda. Rosaura Villamizar', cargo: 'Directora de DISISERBI' },
              { id: 'dis-m2', nombre: 'Lcdo. Héctor Contreras', cargo: 'Coordinador de Biblioteca Digital' },
            ],
          },
        ],
      },
      historia: {
        tituloBloque: 'RESEÑA HISTÓRICA',
        parrafos: [
          'La red bibliotecaria zamorana nació junto con los primeros programas académicos de la universidad, integrando bibliotecas especializadas en agronomía, ingeniería, educación y ciencias sociales.',
          'Con la creación del repositorio digital institucional, DISISERBI ha preservado miles de trabajos especiales de grado, tesis doctorales y revistas científicas accesibles desde cualquier punto del país.',
        ],
      },
      misionVision: {
        mision:
          'Resguardar, organizar y democratizar el acceso a los recursos bibliográficos físicos y digitales que respaldan la formación e investigación en la UNELLEZ.',
        vision:
          'Consolidar una red de bibliotecas inteligentes y repositorios abiertos interconectados con centros académicos nacionales e internacionales.',
      },
      reglamentos: {
        parrafos: [
          'El préstamo en sala, préstamo circulante y depósito digital de trabajos de grado se rigen por el Reglamento Interno del Sistema de Servicios Bibliotecarios de la UNELLEZ.',
        ],
        documentos: [
          { id: 'dis-reg-1', titulo: 'Reglamento de Préstamo y Salas', url: '#reglamento-salas' },
          { id: 'dis-reg-2', titulo: 'Normas de Depósito de Tesis', url: '#deposito-tesis' },
        ],
      },
      estructuraOrganizacional: {
        descripcion:
          'DISISERBI coordina su red bibliotecaria mediante cuatro áreas operativas:',
        unidades: [
          'Unidad de Procesos Técnicos y Catalogación',
          'Unidad de Biblioteca Digital y Repositorio',
          'Salas de Lectura y Referencia Académica',
          'Unidad de Solvencias y Atención al Usuario',
        ],
      },
    },
    servicios: [
      {
        id: 'dis-s1',
        titulo: 'Préstamo en Sala y Circulante',
        descripcion: 'Consulta de textos especializados, libros de referencia y hemeroteca para estudiantes y docentes.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 5:00 p.m.',
      },
      {
        id: 'dis-s2',
        titulo: 'Solvencia Bibliotecaria Digital',
        descripcion: 'Emisión de solvencia requerida para actos de grado, retiros y trámites administrativos.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 3:00 p.m.',
      },
      {
        id: 'dis-s3',
        titulo: 'Asesoría de Búsqueda Científica',
        descripcion: 'Orientación personalizada en repositorios académicos, gestores de citas y fuentes arbitradas.',
        horario: 'Lunes a Jueves, 9:00 a.m. - 3:00 p.m.',
      },
    ],
    oficinas: [
      { id: 'dis-o1', nombre: 'Oficina 1', ubicacion: 'Biblioteca Central Rómulo Gallegos, Barinas II', telefono: '0273-533-1410' },
      { id: 'dis-o2', nombre: 'Oficina 2', ubicacion: 'Sala de Repositorio Digital, Planta Alta VPDS', telefono: '0273-533-1411' },
      { id: 'dis-o3', nombre: 'Oficina 3', ubicacion: 'Biblioteca Sede VPA Guanare, Estado Portuguesa', telefono: '0257-251-2214' },
      { id: 'dis-o4', nombre: 'Oficina 4', ubicacion: 'Biblioteca Sede VIPI San Carlos y VPDR Apure', telefono: '0258-433-1905' },
    ],
    descargas: [
      { id: 'dis-d1', titulo: 'Planilla de Solvencia Bibliotecaria', url: '#solvencia-disiserbi', formato: 'PDF' },
      { id: 'dis-d2', titulo: 'Formato de Depósito Digital de Tesis', url: '#deposito-digital', formato: 'PDF' },
      { id: 'dis-d3', titulo: 'Guía de Normas de Citación', url: '#normas-citacion', formato: 'PDF' },
      { id: 'dis-d4', titulo: 'Catálogo de Revistas Abiertas', url: '#catalogo-revistas', formato: 'PDF' },
    ],
  },
  {
    slug: 'insitez',
    siglas: 'INSITEZ',
    nombreCompleto: 'Instituto de Salud Integral de los Trabajadores Ezequiel Zamora',
    slidesHero: [
      {
        id: 'insitez-hero-1',
        titulo: 'Atención médica integral para trabajadores y familiares UNELLEZ',
        imagenUrl: '/images/hero-aula-unellez.jpg',
        alt: 'Jornada informativa de salud universitaria INSITEZ',
      },
      {
        id: 'insitez-hero-2',
        titulo: 'Servicios médicos asistenciales en los cuatro vicerrectorados',
        imagenUrl:
          'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Laboratorio clínico y atención médica INSITEZ',
      },
      {
        id: 'insitez-hero-3',
        titulo: 'Programa de suministro directo de medicamentos y atención primaria',
        imagenUrl:
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80',
        alt: 'Infraestructura de salud universitaria',
      },
      {
        id: 'insitez-hero-4',
        titulo: 'Jornadas preventivas para la comunidad universitaria zamorana',
        imagenUrl:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80',
        alt: 'Comunidad universitaria en jornada preventiva',
      },
    ],
    destacadas: [
      {
        id: 'insitez-dest-1',
        titulo: 'Suspensión temporal de la atención médica',
        imagenUrl:
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
        alt: 'Comunicado destacado de atención médica INSITEZ',
      },
      {
        id: 'insitez-dest-2',
        titulo: 'Actualización de carga familiar y afiliación de titulares 2026',
        imagenUrl:
          'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Afiliación y actualización de datos INSITEZ',
      },
      {
        id: 'insitez-dest-3',
        titulo: 'Jornada de medicina preventiva y laboratorio clínico en VPDS',
        imagenUrl:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
        alt: 'Jornada preventiva de salud',
      },
      {
        id: 'insitez-dest-4',
        titulo: 'Ampliación de convenios con clínicas y laboratorios aliados',
        imagenUrl:
          'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
        alt: 'Convenios de salud INSITEZ',
      },
    ],
    ultimosArticulos: [
      {
        id: 'insitez-art-1',
        slug: 'talento-deportivo-comunidad-universitaria-impulso-cancha',
        titulo:
          'Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha',
        resumen:
          'Estudiantes y trabajadores compartieron en cancha de cara a los JUVINEU 2026.',
        imagenUrl:
          'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'insitez-art-2',
        slug: 'encuentro-investigacion-agroindustrial-llanos-occidentales',
        titulo:
          'Programa de suministro directo de medicamentos refuerza cobertura en el VPDS',
        resumen:
          'Atención prioritaria para personal activo, jubilado, pensionado y beneficiarios.',
      },
      {
        id: 'insitez-art-3',
        slug: 'jornada-integracion-comunitaria-extension-universitaria',
        titulo:
          'INSITEZ articula nuevas jornadas de salud preventiva con los gremios universitarios',
      },
      {
        id: 'insitez-art-4',
        slug: 'disiserbi-amplia-catalogo-biblioteca-digital-abierta',
        titulo:
          'Guía actualizada para trámites de reembolsos y cartas avales HCM',
      },
    ],
    nosotros: {
      quienesSomos: {
        tituloBloque: 'INSITEZ',
        parrafos: [
          'El Instituto de Salud Integral de los Trabajadores "Ezequiel Zamora" (INSITEZ) coordina y dispensa los servicios de atención médica dirigidos a titulares y beneficiarios de la UNELLEZ (personal administrativo, obrero y docente, activo, jubilado, pensionado y su grupo familiar) en los cuatro vicerrectorados.',
          'Adscrito al Vicerrectorado de Servicios Administrativos, gestiona de manera directa recursos y personal de salud propio, así como los convenios administrativos con clínicas, laboratorios y especialistas aliados para ofrecer una asistencia médica oportuna.',
        ],
        gruposEquipo: [
          {
            titulo: 'Fundadores',
            miembros: [
              { id: 'ins-f1', nombre: 'Dr. Alberto Quintero', cargo: 'Fundador de la Dirección' },
              { id: 'ins-f2', nombre: 'Prof. Raúl Vega', cargo: 'Co-Fundador de la Dirección' },
            ],
          },
          {
            titulo: 'Equipo de trabajo',
            miembros: [
              { id: 'ins-e1', nombre: 'Dr. Pedro Gallardo', cargo: 'Presidente Fundación' },
              { id: 'ins-e2', nombre: 'Dr. José Huizza', cargo: 'Gerente General' },
            ],
          },
          {
            titulo: 'Gerentes Sede Central',
            miembros: [
              { id: 'ins-g1', nombre: 'Lcda. Yonetzy Matamoros', cargo: 'Gerente División Gestión Médica' },
              { id: 'ins-g2', nombre: 'Lcdo. José Peña', cargo: 'Gerente de División Administrativa' },
            ],
          },
        ],
      },
      historia: {
        tituloBloque: 'RESEÑA HISTÓRICA',
        parrafos: [
          'La prestación del servicio médico asistencial en la UNELLEZ comenzó en 1977 con el propósito de resguardar el derecho a la salud de la comunidad universitaria. Un año más tarde se consolidó la propuesta de gestión autónoma bajo el Sistema de Protección Médico Asistencial (SIPROMA).',
          'A lo largo de las décadas, el sistema articuló esfuerzos con los distintos gremios universitarios para ofrecer tanto atención primaria directa con personal propio en los cuatro vicerrectorados como administración de coberturas de hospitalización, cirugía y maternidad (HCM).',
          'En 2017 la reestructuración institucional amplió el alcance hacia programas de suministro directo de medicamentos y atención continua en VPDS y VPDR. Finalmente, en julio de 2020 el Consejo Directivo aprobó la creación formal del Instituto de Salud Integral de los Trabajadores Ezequiel Zamora (INSITEZ).',
        ],
      },
      misionVision: {
        mision:
          'Brindar atención de salud integral y oportuna al personal administrativo, obrero, docente y estudiantil de la UNELLEZ mediante la articulación eficiente de procesos administrativos y servicios médico asistenciales seguros para todos sus beneficiarios.',
        vision:
          'Consolidarse como un sistema universitario referente en gestión de salud integral y protección médico asistencial, ampliando sus unidades operativas en todos los vicerrectorados hasta alcanzar la máxima cobertura asistencial.',
      },
      reglamentos: {
        parrafos: [
          'INSITEZ opera bajo los estatutos aprobados por el Consejo Directivo de la UNELLEZ, las actas convenio suscritas con los gremios universitarios y el plan de salud vigente para titulares y beneficiarios.',
        ],
        documentos: [
          { id: 'ins-reg-1', titulo: 'Estatutos de Creación INSITEZ', url: '#estatutos-insitez' },
          { id: 'ins-reg-2', titulo: 'Normativa de Reembolsos y Cartas Avales', url: '#normativa-hcm' },
        ],
      },
      estructuraOrganizacional: {
        descripcion:
          'La estructura operativa de INSITEZ integra áreas gerenciales, médicas y administrativas en la sede central y los vicerrectorados:',
        unidades: [
          'Presidencia y Gerencia General',
          'División de Gestión Médica y Atención Primaria',
          'División Administrativa y Control de Recursos',
          'Coordinación de Farmacia y Suministro de Medicamentos',
          'Unidades de Atención en VPDS, VPDR, VIPI y VPA',
        ],
      },
    },
    servicios: [
      {
        id: 'ins-s1',
        titulo: 'Consulta Médica Integral',
        descripcion: 'Atención primaria y seguimiento clínico para trabajadores titulares, jubilados y carga familiar.',
        horario: 'Lunes a Viernes, 7:30 a.m. - 3:30 p.m.',
      },
      {
        id: 'ins-s2',
        titulo: 'Suministro Directo de Medicamentos',
        descripcion: 'Entrega programada de tratamientos médicos mediante el programa institucional de farmacia.',
        horario: 'Lunes a Viernes, 8:00 a.m. - 2:30 p.m.',
      },
      {
        id: 'ins-s3',
        titulo: 'Gestión de Cartas Avales y HCM',
        descripcion: 'Tramitación de órdenes médicas, estudios de laboratorio, convenios clínicos y reembolsos.',
        horario: 'Lunes a Jueves, 8:00 a.m. - 3:00 p.m.',
      },
    ],
    oficinas: [
      { id: 'ins-o1', nombre: 'Oficina 1', ubicacion: 'Sede Central INSITEZ, Barinas II al lado de ARSE', telefono: '0273-533-2245' },
      { id: 'ins-o2', nombre: 'Oficina 2', ubicacion: 'Taquilla de Gestión Médica, Hall del Rectorado', telefono: '0273-533-2246' },
      { id: 'ins-o3', nombre: 'Oficina 3', ubicacion: 'Unidad de Farmacia y Medicamentos, VPDS Barinas', telefono: '0273-533-2247' },
      { id: 'ins-o4', nombre: 'Oficina 4', ubicacion: 'Enlace Asistencial VPDR, VIPI y VPA', telefono: '0273-533-2248' },
    ],
    descargas: [
      { id: 'ins-d1', titulo: 'Planilla de Afiliación de Beneficiarios', url: '#afiliacion-insitez', formato: 'PDF' },
      { id: 'ins-d2', titulo: 'Solicitud de Carta Aval HCM', url: '#carta-aval', formato: 'PDF' },
      { id: 'ins-d3', titulo: 'Formato de Reembolso Médico', url: '#reembolso-medico', formato: 'PDF' },
      { id: 'ins-d4', titulo: 'Directorio de Clínicas Aliadas', url: '#clinicas-aliadas', formato: 'PDF' },
    ],
  },
];

/**
 * Retorna los slugs válidos de las direcciones para `generateStaticParams`.
 * Endpoint futuro en PHP: `GET /api/v1/direcciones/slugs`
 */
export async function obtenerSlugsDirecciones(): Promise<string[]> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(`${apiUrl}/api/v1/direcciones/slugs`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
  */
  return Promise.resolve(DIRECCIONES_SUBPORTAL_MOCK.map((d) => d.slug));
}

/**
 * Obtiene la configuración y contenido completo de un subportal por su `slug`.
 * Retorna `null` si el `slug` no corresponde a ninguna dirección registrada.
 * Endpoint futuro en PHP: `GET /api/v1/direcciones/{slug}`
 */
export async function obtenerDireccionPorSlug(
  slug: string
): Promise<DireccionSubportal | null> {
  /*
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.unellez.edu.ve';
  const res = await fetch(`${apiUrl}/api/v1/direcciones/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Error al consultar la dirección');
  return res.json();
  */
  const normalizado = slug.toLowerCase();
  const direccion =
    DIRECCIONES_SUBPORTAL_MOCK.find((item) => item.slug === normalizado) ?? null;
  return Promise.resolve(direccion);
}
