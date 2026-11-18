# MEMORY.md - Memoria del Proyecto UNELLEZ

> Instrucción para el agente: Mantén este archivo en máximo 50 líneas. Actualízalo al terminar cada tarea y borra lo obsoleto.

## Estado Actual
- Proyecto en Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS y `pnpm`.
- Arquitectura desacoplada (API-First) lista para conectar con backend en PHP.
- **Spec 001 (Home Page) COMPLETADA (Pasos 1 al 8):**
  - `src/types/cms.ts` y `src/services/cms.service.ts`: Contratos y mocks del CMS.
  - `src/components/layout/Navbar.tsx` y `Footer.tsx`: Layout institucional.
  - `src/components/home/HeroCarousel.tsx`: Carrusel interactivo + accesos rápidos (`DARSE`, `DITED`, `DISISERBI`, `INSITEZ`).
  - `src/components/home/VicerrectoradosSection.tsx`: Píldoras interactivas (`VPDS`, `VPDR`, `VIPI`, `VPA`).
  - `src/components/home/AlertBanner.tsx`: Cintillo de actos de grado con imagen de fondo local (`/images/alert-banner-bg.png`).
  - `src/components/home/FeaturedNews.tsx`: Grid asimétrico de 12 columnas.
  - `src/components/home/CommunityBanner.tsx`: Banner de comunidad unido al Footer.

## Decisiones Técnicas Tomadas
- Paleta institucional: Naranja `#F08324`, Azul oscuro `#0F172A`, Fondo blanco `#FFFFFF`.
- `HeroCarousel` y `AlertBanner` usan contenedor ancho (`max-w-[1440px]`) para igualar los márgenes laterales de Figma.
- `src/app/page.tsx` consolida la carga inicial mediante `obtenerDatosHome()`.

## Próximos Pasos
- Definir la siguiente Spec (ej. vistas internas de `/noticias`, `/noticias/[slug]` o integración real con endpoints PHP).
