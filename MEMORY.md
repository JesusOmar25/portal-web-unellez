# MEMORY.md - Memoria del Proyecto UNELLEZ

> Instrucción para el agente: Mantén este archivo en máximo 50 líneas. Actualízalo al terminar cada tarea y borra lo obsoleto.

## Estado Actual
- Proyecto en Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS y `pnpm`.
- Arquitectura desacoplada (API-First) lista para conectar con backend en PHP.
- **Spec 001 (Home Page) COMPLETADA Y VERIFICADA (Pasos 1 al 8):**
  - `src/types/cms.ts` y `src/services/cms.service.ts`: Contratos y mocks del CMS.
  - `src/components/layout/Navbar.tsx` (Client Component con menú móvil hamburguesa `useState` y botón `"Acceder a Sistema"` apuntando a `/login`) y `Footer.tsx`: Layout institucional.
  - `src/components/home/HeroCarousel.tsx`: Carrusel interactivo + accesos rápidos (`DARSE`, `DITED`, `DISISERBI`, `INSITEZ`).
  - `src/components/home/VicerrectoradosSection.tsx`: Píldoras interactivas (`VPDS`, `VPDR`, `VIPI`, `VPA`).
  - `src/components/home/AlertBanner.tsx`: Cintillo de actos de grado con imagen de fondo local (`/images/alert-banner-bg.png`).
  - `src/components/home/FeaturedNews.tsx`: Grid asimétrico de 12 columnas.
  - `src/components/home/CommunityBanner.tsx`: Banner de comunidad unido al Footer.
  - Verificación local aprobada: `pnpm lint` (0 errores, 2 warnings menores en `VicerrectoradosSection.tsx`) y `pnpm build` (Next.js 16.4.6 + TypeScript OK).
- **Spec 002 (Pantalla de Login `/login`) COMPLETADA:**
  - `src/types/cms.ts`: Interfaces `CredencialesLogin`, `UsuarioAutenticado` y `RespuestaAuth`.
  - `src/services/auth.service.ts`: `iniciarSesion()` con validación Mock y bloque `fetch` comentado para PHP (`/api/v1/auth/login`).
  - `src/components/auth/LoginForm.tsx` y `src/app/login/page.tsx`: Vista dividida 7/5 cols con identidad visual UNELLEZ y formulario controlado.

## Decisiones Técnicas Tomadas
- Paleta institucional: Naranja `#F08324`, Azul oscuro `#0F172A`, Fondo blanco `#FFFFFF`.
- `HeroCarousel` y `AlertBanner` usan contenedor ancho (`max-w-[1440px]`) para igualar los márgenes laterales de Figma.
- `src/app/page.tsx` consolida la carga inicial mediante `obtenerDatosHome()`.
- Desarrollo en red LAN: `next.config.ts` configurado con `allowedDevOrigins` (`192.168.9.108` y subredes locales) y `package.json` con `dev` en `-H 0.0.0.0` para hidratar Client Components desde móviles/tablets.

## Próximos Pasos
- Recibir e implementar la **Spec 003** (ej. vistas internas de `/noticias`, `/noticias/[slug]`, panel CMS o conexión real con endpoints PHP).
