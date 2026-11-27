# Spec 006: Arquitectura Multi-Portal de Direcciones e Inicio (`/direcciones/[slug]`)

## 1. Objetivo
Implementar la arquitectura base de subportales dinámicos para las direcciones de la UNELLEZ (`DARSE`, `DITED`, `DISISERBI`, `INSITEZ`) bajo `/direcciones/[slug]`, incluyendo su propio `layout.tsx` con `SubportalNavbar` y `Footer`, la vista principal (**Inicio**) fiel al diseño de Figma, y conectar los 4 accesos rápidos del `HeroCarousel` en el Home (`/`).

## 2. Arquitectura y Reglas Técnicas
- **Rutas:**
  - `src/app/direcciones/[slug]/layout.tsx` (Server Component `async` con `SubportalNavbar` + `{children}` + `Footer`).
  - `src/app/direcciones/[slug]/page.tsx` (Server Component `async` para el Inicio del subportal, con `generateStaticParams`, `generateMetadata` y `notFound()`).
- **Gestor de paquetes:** Estrictamente `pnpm`.
- **API-First:** Toda la configuración y contenido de cada dirección debe vivir en `src/types/cms.ts` y `src/services/direcciones.service.ts`, lista para conectar a endpoints PHP (`/api/v1/direcciones/{slug}`).

## 3. Contratos de Datos (`src/types/cms.ts`)
Agregar interfaces en español:
- `SlideSubportal`: `{ id: string; titulo: string; imagenUrl: string; alt: string }`
- `ArticuloSubportal`: `{ id: string; slug: string; titulo: string; resumen?: string; imagenUrl?: string }`
- `DireccionSubportal`:
  - `slug: string` (`'darse' | 'dited' | 'disiserbi' | 'insitez'`)
  - `siglas: string` (`'DARSE'`, `'DITED'`, `'DISISERBI'`, `'INSITEZ'`)
  - `nombreCompleto: string`
  - `slidesHero: SlideSubportal[]` (carrusel superior principal)
  - `destacadas: SlideSubportal[]` (carrusel izquierdo "Destacadas", ej. *"Suspensión temporal de la atención médica"*)
  - `ultimosArticulos: ArticuloSubportal[]` (mínimo 4 artículos para la columna derecha "Últimos artículos")

## 4. Capa de Servicios (`src/services/direcciones.service.ts`)
- Definir mocks realistas y diferenciados para las 4 direcciones (`darse`, `dited`, `disiserbi`, `insitez`) usando imágenes válidas locales/permitidas.
- Exportar funciones asíncronas (con los bloques `fetch` hacia PHP comentados):
  - `obtenerSlugsDirecciones(): Promise<string[]>` (para `generateStaticParams`).
  - `obtenerDireccionPorSlug(slug: string): Promise<DireccionSubportal | null>`.

## 5. Especificación Visual y de Componentes

### A. `SubportalNavbar.tsx` (`'use client'`)
- Barra superior blanca de ancho completo alineada al contenedor principal:
  - **Izquierda:** Logo oficial de **UNELLEZ** enlazado al portal principal (`/`) para regresar fácilmente al Home institucional.
  - **Centro:** Enlaces internos del subportal construidos dinámicamente con `/direcciones/${slug}`:
    - `Inicio` (`/direcciones/${slug}`)
    - `Nosotros` (`/direcciones/${slug}/nosotros`)
    - `Servicios` (`/direcciones/${slug}/servicios`)
    - `Contactos` (`/direcciones/${slug}/contactos`)
    - `Descargas` (`/direcciones/${slug}/descargas`)
    - Ícono de lupa (`Search` de `lucide-react`) a la derecha de `Descargas` con botón interactivo sutil.
  - **Derecha:** Franja/barra decorativa con degradado suave cálido/durazno (`from-orange-50/20 via-orange-100/60 to-orange-200/70 rounded-xl`) fiel al diseño de Figma (sin el botón "Acceder a Sistema").
  - **Estado Activo:** Usar `usePathname()` para resaltar en naranja `#F08324` el enlace activo (`Inicio` en `/direcciones/[slug]`).
  - Incluir menú hamburguesa responsive para móvil.

### B. `SubportalHeroCarousel.tsx` (`'use client'`)
- Contenedor ancho redondeado (`rounded-2xl` / `rounded-3xl overflow-hidden relative aspect-[16/7] min-h-[260px] sm:min-h-[340px]`).
- Imagen de fondo institucional con overlay cálido suave y puntos de paginación interactivos (`• • • •`) centrados en la parte inferior.

### C. Grid Principal de Contenido (`src/app/direcciones/[slug]/page.tsx`)
Contenedor `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10`:
Grid de 12 columnas (`grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10`):

1. **Columna Izquierda (`lg:col-span-6` — `SubportalFeaturedCarousel.tsx`, `'use client'`):**
   - Etiqueta/pill naranja arriba a la izquierda: **"Destacadas"** (`bg-[#F08324] text-white text-xs font-semibold px-3.5 py-1 rounded-md inline-block mb-4`).
   - Tarjeta carrusel grande (`rounded-2xl overflow-hidden relative min-h-[320px] sm:min-h-[360px]`) con imagen de fondo completa, degradado oscuro inferior, título blanco en negrita centrado/izquierda (ej. *"Suspensión temporal de la atención médica"*) y puntos de paginación interactivos (`• • • •`) en la parte inferior.

2. **Columna Derecha (`lg:col-span-6` — `SubportalLatestArticles.tsx`, Server Component):**
   - Separador vertical sutil a la izquierda en escritorio (`lg:border-l lg:border-orange-100 lg:pl-8`).
   - Etiqueta/pill naranja arriba a la izquierda: **"Últimos artículos"** (`bg-[#F08324] text-white text-xs font-semibold px-3.5 py-1 rounded-md inline-block mb-4`).
   - Sub-grid de 2 columnas (`grid-cols-1 sm:grid-cols-2 gap-6`):
     - **Izquierda (Artículo 0):** Tarjeta vertical con imagen superior (`aspect-[16/10] w-full object-cover rounded-xl mb-3`), título en negrita (`text-sm font-bold text-slate-900`) y extracto (`text-xs text-slate-500 line-clamp-3 mt-1.5`).
     - **Derecha (Artículos 1, 2 y 3):** Lista vertical apilada (`space-y-5`) con 3 artículos compactos (título en negrita `text-sm font-bold text-slate-900`, extracto corto opcional en `text-xs text-slate-500`).

## 6. Conexión desde el Home (`Spec 001`)
- Verificar y actualizar los 4 botones del `HeroCarousel` en `/` (`DARSE`, `DITED`, `DISISERBI`, `INSITEZ`) para que sus enlaces apunten exactamente a `/direcciones/darse`, `/direcciones/dited`, `/direcciones/disiserbi` y `/direcciones/insitez`.

## 7. Criterios de Aceptación
- [ ] Hacer clic en cualquiera de los 4 botones del HeroCarousel en `/` navega a `/direcciones/[slug]` sin error 404.
- [ ] El `SubportalNavbar` muestra el logo UNELLEZ (que vuelve a `/`), los 5 enlaces del subportal (`Inicio` activo en naranja), el ícono de búsqueda y el acento degradado derecho.
- [ ] Ambos carruseles (`SubportalHeroCarousel` y `SubportalFeaturedCarousel`) permiten cambiar de slide haciendo clic en sus puntos indicadores.
- [ ] La columna "Últimos artículos" muestra la tarjeta vertical con imagen + los 3 artículos apilados fieles a Figma.
- [ ] `pnpm tsc --noEmit`, `pnpm lint` y `pnpm build` finalizan sin errores.