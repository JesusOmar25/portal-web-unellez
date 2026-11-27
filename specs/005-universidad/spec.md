# Spec 005: Página Institucional "Sobre la Universidad" (`/universidad`)

## 1. Objetivo
Implementar la página institucional de la UNELLEZ en `/universidad` fiel al diseño de Figma, eliminando el error 404 al pulsar **Universidad** en el `Navbar` y ofreciendo navegación interactiva por pestañas entre **Historia**, **Misión y Visión**, **Reglamentos**, **Símbolos Universitarios** y **Sedes**.

## 2. Arquitectura y Reglas Técnicas
- **Ruta:** `src/app/universidad/page.tsx` como **Server Component** (`async`) con carga en paralelo (`Promise.all`).
- **Interactividad:** Componente modular `src/components/university/UniversityTabsSection.tsx` marcado con `'use client'` que recibe los datos por Props y gestiona la pestaña activa con `useState`.
- **Gestor de paquetes:** Estrictamente `pnpm`.
- **API-First:** Toda la información de las 5 secciones debe vivir en `src/types/cms.ts` y `src/services/universidad.service.ts` (lista para conectar a la futura API REST en PHP).

## 3. Contratos de Datos (`src/types/cms.ts`)
Agregar los siguientes tipos en español:
- `ImagenSeccionUniversidad`: `{ url: string; alt: string }`
- `SeccionUniversidad`:
  - `id: string` (ej. `'historia'`, `'mision-vision'`, `'reglamentos'`, `'simbolos'`, `'sedes'`)
  - `etiqueta: string` (texto del botón lateral, ej. `'Historia'`, `'Misión y Visión'`)
  - `titulo: string` (título principal de la sección)
  - `introDestacada?: string` (párrafo introductorio en negrita)
  - `parrafos: string[]` (párrafos del cuerpo de texto)
  - `imagenes: ImagenSeccionUniversidad[]` (2 imágenes asociadas a la sección)

## 4. Capa de Servicios (`src/services/universidad.service.ts`)
- Exportar `obtenerSeccionesUniversidad(): Promise<SeccionUniversidad[]>` con datos mock realistas de la UNELLEZ para las 5 secciones:
  1. **Historia** (usando el texto institucional real de la captura: acrónimo UNELLEZ, casa de estudios más grande del Occidente con sede en Barinas, y párrafo fundacional).
  2. **Misión y Visión**
  3. **Reglamentos**
  4. **Símbolos Universitarios**
  5. **Sedes** (Barinas, Apure, Cojedes, Portuguesa)
- Dejar comentado el bloque `fetch` hacia el futuro endpoint PHP (`GET /api/v1/universidad/secciones`).

## 5. Especificación Visual (`src/app/universidad/page.tsx`)

### A. Navbar y Banner Superior
- **Navbar:** Montado arriba con el enlace **Universidad** marcado como activo (`/universidad`).
- **Banner Superior:** Contenedor redondeado (`rounded-2xl` / `rounded-3xl`) con la imagen institucional del aula y overlay cálido oscuro/ámbar. Título en blanco y negrita **"Sobre la Universidad"** posicionado en la parte inferior izquierda (evaluar extender `NewsSectionBanner` con una prop de alineación o generalizarlo como banner reutilizable).

### B. Contenido Principal — Grid Asimétrico de 3 Columnas (`UniversityTabsSection.tsx`)
Contenedor `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`:
- Layout Desktop: `grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start`.

1. **Columna Izquierda (`lg:col-span-3` — Menú de Pestañas):**
   - En Desktop: Lista vertical de 5 botones tipo tarjeta (`rounded-xl bg-white shadow-sm border border-slate-100 px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer`).
   - En Mobile: Carrusel horizontal deslizable (`flex overflow-x-auto gap-2 pb-2 lg:flex-col`) para no empujar el texto demasiado hacia abajo.
   - **Estado Activo:** Texto en naranja institucional (`text-[#F08324] font-semibold`) con realce sutil (`border-orange-200/70 shadow-md` o fondo blanco destacado).
   - **Estado Inactivo:** Texto oscuro (`text-slate-700 hover:text-[#F08324] hover:border-orange-100`).

2. **Columna Central (`lg:col-span-6` — Contenido Editorial):**
   - **Título (`<h2>`):** Grande y negrita (`text-2xl sm:text-3xl font-bold text-slate-900 mb-6`).
   - **Intro Destacada (`introDestacada`):** Si existe, renderizar en negrita (`font-bold text-slate-900 text-sm sm:text-base leading-relaxed mb-5`).
   - **Cuerpo (`parrafos`):** Lista de párrafos (`space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left`).

3. **Columna Derecha (`lg:col-span-3` — Galería Vertical):**
   - 2 imágenes apiladas verticalmente (`flex flex-col gap-6`), bordes bien redondeados (`rounded-2xl overflow-hidden aspect-[4/3] w-full object-cover shadow-sm`).
   - Para la sección **Historia**, aplicar estilo fotográfico histórico (filtro `grayscale` si se reutilizan imágenes locales existentes mientras se cargan las fotos históricas definitivas en `public/images/`).

### C. Footer
- Montado al final de la vista con la información institucional.

## 6. Verificación de Enlaces
- Verificar que el botón **Universidad** en `Navbar` / `cms.service.ts` apunte exactamente a `/universidad`.

## 7. Criterios de Aceptación
- [ ] Pulsar **Universidad** en el menú superior abre `/universidad` sin error 404 y resalta el ítem como activo.
- [ ] Al cargar la página, **Historia** aparece seleccionada por defecto con el texto y las 2 imágenes laterales.
- [ ] Al hacer clic en cada una de las 5 pestañas laterales, el título, los párrafos y las imágenes cambian instantáneamente sin recargar la página.
- [ ] El diseño es responsive en móvil y escritorio.
- [ ] `pnpm tsc --noEmit`, `pnpm lint` y `pnpm build` finalizan sin errores.