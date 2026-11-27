# Spec 003: Vista de Detalle de Noticia y Navegación desde Noticias Destacadas

## 1. Objetivo
Implementar la página dinámica de detalle de noticia (`/noticias/[slug]`) fiel al diseño de Figma y conectar todas las tarjetas de la sección **Noticias Destacadas** del Home (`/`) para que sean completamente clicables y redirijan al artículo correspondiente.

## 2. Arquitectura y Reglas Técnicas
- **Framework:** Next.js App Router (`src/app/noticias/[slug]/page.tsx`) como **Server Component** (`async`).
- **Gestor de paquetes:** `pnpm` únicamente.
- **API-First:** Prohibido hardcodear textos o noticias en los componentes UI. Toda la data debe provenir de `src/types/cms.ts` y `src/services/news.service.ts`.
- **Layout Global:** Debe heredar el `Navbar` superior y el `Footer` institucional existentes.

## 3. Contratos de Datos (`src/types/cms.ts`)
Asegurar que la interfaz `NewsItem` (o equivalente existente) contemple:
- `id: string`
- `slug: string`
- `title: string`
- `excerpt: string`
- `category: string` (ej. `"Deportes"`, `"Tecnología"`, `"Comunidad"`)
- `imageUrl: string`
- `imageCaption?: string` (pie de foto debajo de la imagen principal)
- `content: string[]` (párrafos del cuerpo de la noticia)
- `publishedAt: string`
- `featured?: boolean`

## 4. Capa de Servicios (`src/services/news.service.ts`)
Actualizar/crear los métodos asíncronos mock (simulando latencia de red con `Promise`):
1. `getNewsBySlug(slug: string): Promise<NewsItem | null>`: Retorna la noticia exacta que coincida con el `slug` o `null` si no existe.
2. `getRelatedNews(currentSlug: string, limit?: number): Promise<NewsItem[]>`: Retorna otras noticias (excluyendo la actual) para poblar la barra lateral `"Mas noticias"`.
3. Verificar que los mocks contengan al menos 4 noticias completas con `content` multi-párrafo e `imageCaption` para probar tanto el Home como el Detalle.

## 5. Especificación Visual y de Componentes (`src/app/noticias/[slug]/page.tsx`)

### A. Banner Superior de Sección
- Contenedor redondeado (`rounded-2xl` / `rounded-3xl`) alineado al ancho del contenedor principal, debajo del `Navbar`.
- Imagen de fondo institucional (aula universitaria con filtro/overlay cálido oscuro/ámbar).
- Título centrado en blanco y negrita: **"Noticias Destacadas"**.

### B. Grid Principal Asimétrico (2 Columnas en Desktop, 1 en Mobile)
- Contenedor principal con `grid-cols-1 lg:grid-cols-12` y espaciado amplio (`gap-10 lg:gap-12`).

#### Columna Izquierda (`lg:col-span-8` — Artículo Principal)
1. **Título (`<h1>`):** Tipografía grande, negrita (`text-2xl sm:text-3xl font-bold text-slate-900 leading-tight`), ej. *"Talento deportivo de la comunidad universitaria es impulsado con jornada en cancha"*.
2. **Imagen Principal:** Imagen destacada a ancho completo de su columna, bordes suavemente redondeados (`rounded-xl object-cover w-full aspect-[16/10]`).
3. **Pie de Foto (`imageCaption`):** Texto descriptivo corto debajo de la imagen en gris medio (`text-xs sm:text-sm text-slate-500 mt-3`).
4. **Cuerpo de la Noticia (`content`):** Renderizado iterando el arreglo de párrafos (`space-y-4 mt-6 text-slate-600 text-sm sm:text-base leading-relaxed`).

#### Columna Derecha (`lg:col-span-4` — Sidebar `"Mas noticias"`)
1. **Encabezado:** Título **"Mas noticias"** (`text-lg font-bold text-slate-900 mb-5`).
2. **Lista de Noticias Relacionadas (`space-y-6`):**
   - **Primera tarjeta (Destacada lateral):** Incluye imagen miniatura rectangular (`rounded-lg w-full aspect-[16/10] object-cover mb-3`), título en negrita (`text-sm font-bold text-slate-900`) y extracto corto (`text-xs text-slate-500 line-clamp-2 mt-1`).
   - **Tarjetas siguientes (Compactas):** Etiqueta/pill de categoría en tono naranja suave (`bg-orange-50 text-orange-500 text-[11px] font-semibold px-2.5 py-0.5 rounded-md inline-block mb-2`, ej. `"Tecnología"`, `"Comunidad"`), título en negrita (`text-sm font-bold text-slate-900`) y extracto opcional (`text-xs text-slate-500 line-clamp-2 mt-1`).
   - **Interactividad:** Cada tarjeta lateral completa debe estar envuelta en `<Link href={/noticias/${item.slug}}>` con efecto hover sutil en el título (`group-hover:text-orange-600 transition-colors`).

## 6. Actualización en Home (`Spec 001` — `FeaturedNews`)
- En el componente de **Noticias Destacadas** de la página principal (`/`), envolver **toda la superficie de cada tarjeta** (tanto la tarjeta grande izquierda con la imagen del atleta, como la tarjeta central y las tarjetas laterales) en un componente `<Link href={/noticias/${item.slug}}>`.
- Añadir `cursor-pointer` y transiciones suaves (`hover:shadow-md` o escala sutil en imagen) para indicar interactividad en cualquier punto del cuadro.

## 7. Manejo de Errores y Metadata
- Si `getNewsBySlug(slug)` devuelve `null`, invocar `notFound()` de `next/navigation`.
- Implementar `generateMetadata` dinámico para actualizar el `<title>` de la pestaña del navegador con el título de la noticia (`${news.title} | UNELLEZ`).

## 8. Criterios de Aceptación
- [ ] Al hacer clic en cualquier parte de las tarjetas de Noticias Destacadas en `/`, navega a `/noticias/[slug]`.
- [ ] La vista de detalle muestra el banner "Noticias Destacadas", el título, la imagen, el pie de foto, los párrafos y la columna lateral "Mas noticias".
- [ ] Hacer clic en una noticia de "Mas noticias" actualiza la vista al nuevo artículo.
- [ ] No existen errores de TypeScript (`pnpm tsc --noEmit`) ni de build (`pnpm build`).