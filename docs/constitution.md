# Constitución del Proyecto: Portal & CMS UNELLEZ

1. **Desacoplamiento Total (API-First):** El frontend en Next.js no conoce la lógica de base de datos. Todo dato dinámico se solicita a través de funciones asíncronas en `src/services/`. Cuando el backend en PHP esté listo, solo cambiaremos la URL del `fetch()` en el servicio sin tocar ningún componente visual de React.
2. **Fidelidad Visual y Responsividad:** Todo componente debe respetar el diseño de Figma en escritorio y adaptarse limpiamente a móviles (Mobile-First).
3. **Tipado Estricto:** Ningún dato que represente una entidad del CMS (Noticia, Evento, Banner, Dirección, Vicerrectorado) puede usar el tipo `any`. Todo debe tener su `interface` en `src/types/cms.ts`.
4. **Criterio sobre Generación Masiva:** No generes toda la página en un solo archivo gigante (`page.tsx`). Divide cada sección en su propio componente modular dentro de `src/components/`.
5. **Accesibilidad e Imágenes:** Usa siempre el componente `<Image />` de `next/image` o etiquetas optimizadas con atributos `alt` descriptivos para las noticias universitarias.