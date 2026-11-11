# Spec 001: Página Principal (Home) del Portal UNELLEZ

## Objetivo
Construir la vista principal (`/`) del portal institucional UNELLEZ siguiendo el diseño de Figma y dejándola conectada a un servicio Mock que simula la futura API en PHP.

## Requisitos Funcionales y Secciones (De arriba hacia abajo)

1. **Header / Navbar (`src/components/layout/Navbar.tsx`):**
   - Izquierda: Logo UNELLEZ con icono naranja y texto en negrita.
   - Centro: Menú de navegación (`Inicio` activo en naranja, `Universidad`, `Estudios`, `Institutos/Fundaciones`, `Noticias`).
   - Derecha: Botón redondeado naranja (`bg-[#F08324]`) con texto blanco `"Acceder a Sistema"`.

2. **Hero Banner & Accesos Rápidos (`src/components/home/HeroCarousel.tsx`):**
   - Contenedor con bordes redondeados (`rounded-3xl`) e imagen de fondo amplia (estudiantes en aula).
   - Tarjeta blanca superpuesta en la parte inferior central/izquierda con sombra suave (`rounded-2xl`):
     - Lado izquierdo de la tarjeta: `"Título De Evento"` y `"Descripción de evento algo largo..."`.
     - Lado derecho de la tarjeta: 4 botones cuadrados con borde suave, icono naranja arriba y sigla abajo: `DARSE`, `DITED`, `DISISERBI`, `INSITEZ`.
   - Indicadores de carrusel (4 puntos debajo de la tarjeta, el activo en naranja).

3. **Sección Vicerrectorados (`src/components/home/VicerrectoradosSection.tsx`):**
   - Subtítulo pequeño naranja: `"Conoce Nuestros"`.
   - Título grande negro: `"Vicerrectorados"`.
   - Fila de 4 botones tipo píldora con sombra ligera: `VPDS`, `VPDR`, `VIPI`, `VPA`.

4. **Banner de Alerta/Aviso (`src/components/home/AlertBanner.tsx`):**
   - Barra horizontal de ancho completo con fondo naranja degradado y bordes redondeados (`rounded-xl`).
   - Texto centrado en blanco/semi-negrita: `"Se acercan pronto los actos de grados"`.
   - Enlace a la derecha: `"Más información →"`.

5. **Sección Noticias Destacadas (`src/components/home/FeaturedNews.tsx`):**
   - Encabezado con título `"Noticias Destacadas"` en el centro y enlace `"Ver todas →"` en naranja a la derecha.
   - Grid asimétrico de 3 columnas en escritorio (`grid-cols-1 lg:grid-cols-12 gap-6`):
     - **Columna Izquierda (Destacada Principal - 6 cols):** Tarjeta grande con imagen de fondo, overlay oscuro inferior, badge naranja `"Deportes"` y titular blanco encima de la imagen.
     - **Columna Central (Destacada Secundaria - 3 cols):** Imagen superior redondeada, título en negrita debajo y resumen de 3 líneas en gris.
     - **Columna Derecha (Lista Compacta - 3 cols):** 2 noticias apiladas verticalmente sin foto, cada una con su badge de categoría (`"Deportes"`, `"Comunidad"`, fondo naranja suave y texto naranja) y título en negrita.

6. **Banner Comunidad (`src/components/home/CommunityBanner.tsx`):**
   - Sección de ancho completo con imagen de fondo de estudiantes, overlay oscuro y borde naranja superior/inferior.
   - Título blanco centrado: `"Sé parte de nuestra comunidad universitaria y siembra tu futuro."`.
   - Subtítulo blanco descriptivo sobre los llanos venezolanos.
   - Botón blanco centrado con texto naranja: `"Conócenos Más"`.

7. **Footer (`src/components/layout/Footer.tsx`):**
   - Fondo azul muy oscuro (`#0F172A` / `#111827`).
   - 3 columnas:
     - Col 1: Logo UNELLEZ, dirección en Barinas (Av. 23 de Enero, Redoma de Ezequiel Zamora), correo `despachorectoral@unellez.edu.ve` y RIF `G-20007705-0`.
     - Col 2: `"Enlaces Rápidos"` (`Sistema DUX (Estudiantes)`, `Librería Universitaria`, `Biblioteca Digital`, `Campus Virtuales`).
     - Col 3: `"Síguenos"` con botones circulares para redes sociales.
   - Barra inferior de copyright.

## Contrato de Datos (Mock para futura API PHP)
Crear `src/types/cms.ts` y `src/services/cms.service.ts` que devuelva una promesa con los Eventos del Hero, el Aviso de Grado y el arreglo de Noticias (con `id`, `titulo`, `resumen`, `categoria`, `imagenUrl`, `esDestacadaPrincipal`, `fecha`).