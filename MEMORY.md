# MEMORY.md - Memoria del Proyecto UNELLEZ

> Instrucción para el agente: Mantén este archivo en máximo 50 líneas. Actualízalo al terminar cada tarea y borra lo obsoleto.

## Estado Actual
- Proyecto en Next.js 16 (App Router, `cacheComponents: true`), React 19, TypeScript, Tailwind CSS y `pnpm`.
- Arquitectura desacoplada (API-First) lista para conectar con backend REST en PHP.
- **Spec 001 (Home `/`):** `Navbar` (móvil `useState` + `/login`), `Footer`, `HeroCarousel` (accesos `DARSE`, `DITED`, `DISISERBI`, `INSITEZ`), `VicerrectoradosSection`, `AlertBanner`, `FeaturedNews` y `CommunityBanner`.
- **Spec 002 (Login `/login`):** `auth.service.ts`, `LoginForm.tsx` y vista dividida 7/5 cols.
- **Spec 003 (Detalle `/noticias/[slug]`):** `NewsSectionBanner.tsx`, `RelatedNewsSidebar.tsx` y vista dinámica con `generateStaticParams`, `generateMetadata` y `notFound()`.
- **Spec 004 (Listado `/noticias`):** `news.service.ts` con 9 noticias mock (`obtenerTodasLasNoticias`), `EditorialNewsGrid.tsx` (2 bloques asimétricos).
- **Spec 005 (Universidad `/universidad`):** `universidad.service.ts`, `UniversityTabsSection.tsx` (5 pestañas) y `NewsSectionBanner` con `alineacion`.
- **Spec 006 (Subportales `/direcciones/[slug]`):** `direcciones.service.ts`, `SubportalNavbar`, `SubportalHeroCarousel`, `SubportalFeaturedCarousel`, `SubportalLatestArticles` y `layout.tsx` con `<Suspense>`.
- **Spec 007 (Secciones Subportal):** `SubportalAboutTabs.tsx` (5 pestañas unificadas + avatares con fallback de iniciales), `NewsSectionBanner` con `varianteContenedor="subportal"`, y rutas hijas `nosotros`, `servicios`, `contactos` y `descargas` para las 4 direcciones.

## Decisiones Técnicas Tomadas
- Paleta institucional: Naranja `#F08324`, Azul oscuro `#0F172A`, Fondo blanco `#FFFFFF`.
- Portal principal usa banner ancho (`max-w-[1440px]`); subportales de direcciones comparten contenedor `max-w-6xl mx-auto`.
- Desarrollo en red LAN: `next.config.ts` con `allowedDevOrigins` (`192.168.9.108` y subredes locales) y `dev` con `-H 0.0.0.0`.
- Todas las rutas dinámicas exportan `generateStaticParams()` para compatibilidad con `cacheComponents: true`.
- Responsive móvil: `NewsSectionBanner` usa `min-h-[140px] sm:min-h-[200px] lg:min-h-[240px]`; pestañas en `UniversityTabsSection` y `SubportalAboutTabs` usan `min-w-0` + `overflow-x-auto` para evitar desbordamiento en Grid.

## Próximos Pasos
- Recibir e implementar la **Spec 008** (ej. `/estudios`, `/institutos-fundaciones`, panel CMS o conexión real con endpoints PHP).
