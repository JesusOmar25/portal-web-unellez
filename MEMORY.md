# MEMORY.md - Memoria del Proyecto UNELLEZ

> Instrucción para el agente: Mantén este archivo en máximo 50 líneas. Actualízalo al terminar cada tarea y borra lo obsoleto.

## Estado Actual
- Proyecto en Next.js 15+ (App Router), TypeScript, Tailwind CSS y `pnpm`.
- Arquitectura desacoplada (API-First) para conectar con backend en PHP.
- **Pasos 1 al 5 completados:**
  - `src/types/cms.ts`: Interfaces de entidades y payloads del CMS.
  - `src/services/cms.service.ts`: Repositorio asíncrono con Mocks.
  - `src/components/layout/Navbar.tsx`: Menú institucional.
  - `src/components/home/AlertBanner.tsx`: Cintillo naranja degradado de actos de grado.
  - `src/components/home/CommunityBanner.tsx`: Banner de comunidad con overlay y bordes naranjas.
  - `src/components/layout/Footer.tsx`: Pie de página azul marino (`#0F172A`) con 3 columnas.

## Decisiones Técnicas Tomadas
- Paleta institucional: Naranja `#F08324`, Azul oscuro `#0F172A`, Fondo blanco `#FFFFFF`.
- `AlertBanner` implementa renderizado condicional si la API devuelve `null`.
- Todos los componentes hasta ahora son React Server Components (RSC) ultraligeros.

## Próximos Pasos (Spec 001 - Home Page)
- Paso 6: Crear `src/components/home/FeaturedNews.tsx` (Grid asimétrico de 12 cols).
- Paso 7: Crear `src/components/home/VicerrectoradosSection.tsx` (Client Component con `useState`).
- Paso 8: Crear `src/components/home/HeroCarousel.tsx` (Carrusel y accesos rápidos).
