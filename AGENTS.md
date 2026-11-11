# AGENTS.md - Portal Institucional & CMS UNELLEZ

Portal web oficial y frontend CMS de la Universidad Nacional Experimental de los Llanos Occidentales "Ezequiel Zamora" (UNELLEZ).

## Stack Tecnológico
- **Framework:** Next.js 15+ (App Router) con React 19 y TypeScript.
- **Estilos:** Tailwind CSS (Mobile-First, diseño institucional limpio).
- **Iconos:** `lucide-react`.
- **Gestor de paquetes:** `pnpm` (ESTRICTAMENTE).
- **Backend futuro:** API REST en PHP (arquitectura desacoplada / Headless CMS).

## Estructura del Proyecto
- `src/app/` -> Rutas y vistas principales (Server Components por defecto).
- `src/components/layout/` -> `Navbar.tsx`, `Footer.tsx`.
- `src/components/home/` -> Componentes específicos de la página de inicio.
- `src/components/ui/` -> Botones, badges, tarjetas reutilizables.
- `src/services/` -> Capa de conexión a datos (Mocks ahora, `fetch` a API PHP después).
- `src/types/` -> Interfaces TypeScript que reflejan las tablas del futuro CMS en PHP.
- `docs/` -> Constitución del proyecto.
- `specs/` -> Especificaciones funcionales (SDD).

## Comandos Permitidos
- Instalar paquetes: `pnpm add <paquete>`
- Servidor de desarrollo: `pnpm dev`
- Compilación de prueba: `pnpm build`

## Reglas y Convenciones
- **Idioma:** Todo el código, comentarios, interfaces y respuestas deben estar en español.
- **Explicación Didáctica:** El desarrollador principal es Ingeniero con experiencia en PHP/Backend pero nuevo en React/Next.js. Explica brevemente qué hace cada componente o Hook (`useState`, `useEffect`, Server vs Client Component) cuando lo crees.
- **Server Components Primero:** Usa React Server Components por defecto. Solo añade `'use client'` en la primera línea si el componente requiere interactividad en el navegador (ej. carrusel o pestañas de vicerrectorados).
- **Preparación para API PHP:** NUNCA escribas textos o noticias "quemadas" (hardcoded) directamente dentro del HTML/JSX. Todo dato dinámico (eventos, noticias, enlaces de direcciones) debe venir de `src/services/` tipado con `src/types/`.

## Límites y Prohibiciones (Guardarraíles)
- **PROHIBIDO** usar `npm` o `yarn`. Usa única y exclusivamente `pnpm`.
- **PROHIBIDO** instalar librerías pesadas de UI (Material UI, Bootstrap) sin permiso. Usa Tailwind CSS puro.
- **SIEMPRE** lee `MEMORY.md` y `docs/constitution.md` al iniciar una tarea.
- **SIEMPRE** actualiza `MEMORY.md` al finalizar cada tarea.