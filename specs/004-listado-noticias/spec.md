# Spec 004: Vista Principal de Noticias (`/noticias`)

## 1. Objetivo
Implementar la página índice de noticias en `/noticias` fiel al diseño de Figma, eliminando el error 404 al pulsar **Noticias** en el `Navbar` o **Ver todas** en la sección `FeaturedNews` del Home (`/`), y conectando las 9 tarjetas del grid editorial hacia sus respectivas vistas de detalle (`/noticias/[slug]`).

## 2. Arquitectura y Reglas Técnicas
- **Ruta:** `src/app/noticias/page.tsx` implementada como **Server Component** (`async`).
- **Gestor de paquetes:** Estrictamente `pnpm`.
- **Reutilización:** Reutilizar `Navbar`, `Footer` y `NewsSectionBanner` (`src/components/news/NewsSectionBanner.tsx`).
- **API-First:** Consumir los datos desde `src/services/news.service.ts` sin hardcodear noticias en la UI.

## 3. Actualización de Tipos y Servicios
1. **`src/types/cms.ts`:**
   - Verificar que `CategoriaNoticia` incluya `'Deportes' | 'Tecnología' | 'Comunidad' | 'Universidad'`.
2. **`src/services/news.service.ts`:**
   - Ampliar el arreglo mock a **9 noticias completas** (cada una con `id` y `slug` únicos, `titulo`, `extracto`, `categoria`, `imagenUrl` válida, `pieFoto` y `contenido: string[]`), de modo que al hacer clic en cualquiera de las 9 tarjetas navegue a una vista `/noticias/[slug]` válida.
   - Exportar la función `obtenerTodasLasNoticias(): Promise<Noticia[]>`.

## 4. Especificación Visual (`src/app/noticias/page.tsx`)
- **Navbar:** Montado arriba con el ítem **Noticias** marcado como activo (`href="/noticias"`).
- **Banner Superior:** `<NewsSectionBanner title="Noticias Destacadas" />` debajo del Navbar.
- **Contenedor Editorial (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10`):**

  ### Bloque 1 — Fila Superior (Primeras 4 noticias: índices `0` a `3`)
  Grid de 12 columnas (`grid-cols-1 lg:grid-cols-12 gap-6`):
  - **Izquierda (`lg:col-span-6` — Noticia 0):** Tarjeta Hero grande (`rounded-2xl overflow-hidden relative min-h-[340px] lg:min-h-[380px]`) con imagen de fondo completa, overlay degradado oscuro en la parte inferior, badge naranja (`bg-[#F08324] text-white text-xs font-semibold px-3 py-1 rounded-md`) con la categoría y título blanco en negrita (`text-xl sm:text-2xl font-bold text-white`).
  - **Centro (`lg:col-span-3` — Noticia 1):** Tarjeta vertical con imagen superior (`aspect-[16/10] w-full object-cover rounded-xl mb-3`), título en negrita (`text-sm font-bold text-slate-900`) y extracto (`text-xs text-slate-500 line-clamp-3 mt-1.5`).
  - **Derecha (`lg:col-span-3` — Noticias 2 y 3):** Columna apilada (`flex flex-col justify-between gap-6`) con 2 tarjetas compactas sin imagen: pill de categoría en naranja suave (`bg-orange-50 text-[#F08324] text-[11px] font-semibold px-2.5 py-0.5 rounded-md inline-block mb-2`), título en negrita (`text-sm font-bold text-slate-900`) y extracto opcional (`text-xs text-slate-500 line-clamp-2 mt-1`).

  ### Bloque 2 — Fila Inferior Invertida (Siguientes 5 noticias: índices `4` a `8`)
  Grid de 12 columnas (`grid-cols-1 lg:grid-cols-12 gap-6`):
  - **Izquierda (`lg:col-span-6` — Noticias 4, 5, 6 y 7):** Sub-grid de 2 columnas (`grid-cols-1 sm:grid-cols-2 gap-6`) con 4 tarjetas compactas sin imagen (pill naranja suave de categoría, título en negrita y extracto corto `line-clamp-3`).
  - **Derecha (`lg:col-span-6` — Noticia 8):** Tarjeta Hero grande (`rounded-2xl overflow-hidden relative min-h-[340px] lg:min-h-[380px]`) con imagen de fondo completa, overlay degradado oscuro inferior, badge naranja de categoría y título blanco en negrita.

- **Interactividad y Navegación:**
  - Las 9 tarjetas completas deben estar envueltas en `<Link href={/noticias/${noticia.slug}}>` con `cursor-pointer` y transiciones suaves (`group`, hover sutil en imagen y título).
- **Footer:** Montado al final de la página.

## 5. Verificación de Enlaces Existentes
- Confirmar que en `Navbar` el enlace de **Noticias** apunte exactamente a `/noticias`.
- Confirmar que en `FeaturedNews.tsx` (Home) el enlace **Ver todas** apunte exactamente a `/noticias`.

## 6. Criterios de Aceptación
- [ ] Hacer clic en **Noticias** en el menú superior abre `/noticias` sin error 404.
- [ ] Hacer clic en **Ver todas** en el Home abre `/noticias` sin error 404.
- [ ] Se visualizan los dos bloques asimétricos (4 tarjetas arriba + 5 tarjetas abajo) fieles a Figma.
- [ ] Hacer clic en cualquiera de las 9 tarjetas navega correctamente a `/noticias/[slug]`.
- [ ] `pnpm tsc --noEmit`, `pnpm lint` y `pnpm build` finalizan sin errores.