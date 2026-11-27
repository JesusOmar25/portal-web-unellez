# Spec 007: Secciones Internas del Subportal de Direcciones (Nosotros, Servicios, Contactos y Descargas)

## 1. Objetivo
Implementar las 4 rutas hijas dentro del Nested Layout `/direcciones/[slug]/layout.tsx` para eliminar los errores 404 del `SubportalNavbar`:
1. `/direcciones/[slug]/nosotros` (unificando las 5 pestañas institucionales)
2. `/direcciones/[slug]/servicios`
3. `/direcciones/[slug]/contactos`
4. `/direcciones/[slug]/descargas`

## 2. Arquitectura y Reglas Técnicas
- **Heredan el Layout:** Ninguna de estas páginas debe renderizar `SubportalNavbar` ni `Footer` (ya los provee `src/app/direcciones/[slug]/layout.tsx`).
- **Next.js 16 (`cacheComponents: true`):** Las 4 páginas serán Server Components `async` y deberán exportar `generateStaticParams()` (usando `obtenerSlugsDirecciones()`) y `generateMetadata()`.
- **Banner Reutilizable:** Reutilizar `NewsSectionBanner` (con `alineacion="centro"`) para los banners **"Nosotros"**, **"Servicios"**, **"Contactos"** y **"Descargas"**, manteniendo el ancho contenedor `max-w-6xl mx-auto` del subportal.
- **Gestor de paquetes:** Estrictamente `pnpm`.
- **API-First:** Extender `DireccionSubportal` en `src/types/cms.ts` y `src/services/direcciones.service.ts` con datos mock realistas para las 4 direcciones (`darse`, `dited`, `disiserbi`, `insitez`).

## 3. Contratos de Datos (`src/types/cms.ts`)
Agregar los siguientes tipos en español y anexarlos a `DireccionSubportal`:
- `MiembroEquipo`: `{ id: string; nombre: string; cargo: string; fotoUrl?: string }`
- `GrupoEquipo`: `{ titulo: string; miembros: MiembroEquipo[] }` (ej. `"Fundadores"`, `"Equipo de trabajo"`, `"Gerentes Sede Central"`)
- `NosotrosSubportal`:
  - `quienesSomos`: `{ tituloBloque: string; parrafos: string[]; gruposEquipo: GrupoEquipo[] }`
  - `historia`: `{ tituloBloque: string; parrafos: string[] }` (aquí va la Reseña Histórica)
  - `misionVision`: `{ mision: string; vision: string }`
  - `reglamentos`: `{ parrafos: string[]; documentos?: { id: string; titulo: string; url: string }[] }`
  - `estructuraOrganizacional`: `{ descripcion: string; unidades: string[] }`
- `ServicioSubportal`: `{ id: string; titulo: string; descripcion: string; horario?: string }`
- `OficinaContacto`: `{ id: string; nombre: string; ubicacion: string; telefono: string }`
- `ArchivoDescarga`: `{ id: string; titulo: string; url: string; formato?: string }`

Extender `DireccionSubportal` con:
- `nosotros: NosotrosSubportal`
- `servicios: ServicioSubportal[]`
- `oficinas: OficinaContacto[]`
- `descargas: ArchivoDescarga[]`

## 4. Especificación Visual por Ruta

### A. `/direcciones/[slug]/nosotros` (`SubportalAboutTabs.tsx` — Client Component `'use client'`)
- **Banner:** `"Nosotros"` centrado.
- **Layout:** Título de la pestaña activa centrado arriba (`text-2xl sm:text-3xl font-bold text-slate-900 text-center my-8`), seguido de grid de 12 columnas (`grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start`):
  - **Izquierda (`lg:col-span-3` — Menú de 5 Pestañas Unificadas):**
    1. `Quiénes Somos` (activa por defecto)
    2. `Historia` (Reseña Histórica)
    3. `Misión y Visión`
    4. `Reglamentos`
    5. `Estructura Organizacional`
    - Botones tipo tarjeta blanca redondeada con sombra suave (`rounded-xl bg-white shadow-sm border border-slate-100`), texto naranja `#F08324` cuando está activa y deslizable horizontal en móvil.
  - **Derecha (`lg:col-span-9` — Contenido Dinámico según pestaña):**
    - **Quiénes Somos:** Subtítulo en naranja (`text-[#F08324] font-bold uppercase text-sm tracking-wide`, ej. siglas `INSITEZ` / `DARSE`), párrafos descriptivos, y los bloques de personas (`Fundadores`, `Equipo de trabajo`, `Gerentes Sede Central`) con avatares circulares (`w-20 h-20 rounded-full object-cover`), nombre en naranja `#F08324` en negrita y cargo debajo en gris oscuro.
    - **Historia:** Subtítulo naranja `"RESEÑA HISTÓRICA"` y párrafos históricos de la dirección.
    - **Misión y Visión:** Bloques centrados (fiel a la segunda captura) con subtítulos en naranja `"MISIÓN"` y `"VISIÓN"` en mayúsculas y sus párrafos correspondientes.
    - **Reglamentos:** Párrafos normativos y lista opcional de enlaces a reglamentos.
    - **Estructura Organizacional:** Descripción y tarjetas/listado limpio de las unidades administrativas de la dirección.

### B. `/direcciones/[slug]/servicios`
- **Banner:** `"Servicios"` centrado.
- **Contenido:** Grid responsive (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10`) de tarjetas blancas redondeadas (`rounded-2xl bg-white shadow-sm border border-slate-100 p-6`) coherentes con el sistema de diseño, mostrando título en negrita, descripción y horario de atención opcional con ícono sutil en naranja (`lucide-react`).

### C. `/direcciones/[slug]/contactos`
- **Banner:** `"Contactos"` centrado.
- **Título de sección:** `<h2>` centrado `"Oficinas"` (`text-2xl sm:text-3xl font-bold text-slate-900 text-center my-8`).
- **Grid de Oficinas:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12` fiel a Figma:
  - Tarjetas blancas redondeadas (`rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 p-6 text-sm text-slate-600 leading-relaxed`).
  - Nombre de la oficina en negrita (`font-bold text-slate-900`, ej. **Oficina 1**) seguido de la ubicación y el teléfono (`Telf.: ...`).

### D. `/direcciones/[slug]/descargas`
- **Banner:** `"Descargas"` centrado.
- **Grid de Descargas:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10` fiel a Figma:
  - Tarjetas/botones descargables (`<a>` con `download` o `target="_blank"`) con fondo blanco, bordes redondeados (`rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 px-5 py-4 flex items-center gap-4 hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer`).
  - Ícono `Download` de `lucide-react` en tono naranja `#F08324` a la izquierda y título del documento en negrita (`text-sm font-bold text-slate-900`).

## 5. Criterios de Aceptación
- [ ] Ningún enlace del `SubportalNavbar` (`Inicio`, `Nosotros`, `Servicios`, `Contactos`, `Descargas`) devuelve 404 en ninguna de las 4 direcciones (`darse`, `dited`, `disiserbi`, `insitez`).
- [ ] En `/direcciones/[slug]/nosotros` funcionan las 5 pestañas unificadas (con la Reseña Histórica dentro de `Historia` y los perfiles con foto circular dentro de `Quiénes Somos`).
- [ ] `Contactos` muestra el título `"Oficinas"` y el grid de 4 tarjetas; `Descargas` muestra las tarjetas con el ícono de descarga naranja.
- [ ] `pnpm tsc --noEmit`, `pnpm lint` y `pnpm build` finalizan sin errores.