# Spec 002: Pantalla de Inicio de Sesión (`/login`)

## Objetivo
Implementar la vista de autenticación (`/login`) para los operadores de las direcciones de la UNELLEZ (DARSE, DITED, DISISERBI, INSITEZ) siguiendo el diseño de Figma y preparándola para conectarse al endpoint de login en PHP.

## Arquitectura de Ruta (App Router)
- Archivo de vista: `src/app/login/page.tsx` (en Next.js App Router, esta ruta crea automáticamente `/login` sin necesidad de archivos de rutas adicionales).
- Componente del formulario: `src/components/auth/LoginForm.tsx` (`'use client'` para manejar el estado de los inputs, validación y envío).

## Requisitos Visuales y Layout (Desktop & Mobile)
- **Estructura General:** Pantalla completa (`min-h-screen`) dividida en 2 columnas en escritorio (`grid-cols-1 lg:grid-cols-12`) sobre fondo blanco puro (`bg-white`).
- **Columna Izquierda — Panel Visual (7 columnas en escritorio `lg:col-span-7`, oculta en móvil):**
  - Contenedor con padding exterior (`p-4 lg:p-6`) para mantener el marco blanco alrededor de la tarjeta.
  - Tarjeta interna con bordes muy redondeados (`rounded-3xl overflow-hidden relative h-full`), imagen de fondo de estudiantes en aula con filtro cálido/naranja institucional (`bg-[#F08324]/45` + oscurecimiento sutil para contraste).
  - En el centro exacto de la imagen: Isotipo y logotipo **"UNELLEZ"** en blanco puro de gran tamaño.
- **Columna Derecha — Formulario de Acceso (5 columnas en escritorio `lg:col-span-5`, 12 cols en móvil):**
  - Contenido centrado vertical y horizontalmente (`flex flex-col justify-center items-center px-6 sm:px-12`).
  - En móvil (`lg:hidden`), mostrar el logo naranja de la UNELLEZ arriba del título para mantener identidad visual.
  - **Título:** `"Iniciar sesión"` en naranja institucional (`text-[#F08324]`), tamaño `text-2xl sm:text-3xl font-semibold`, centrado.
  - **Campo Usuario:**
    - Etiqueta superior: `"Usuario"` (`text-sm font-medium text-gray-700`).
    - Input redondeado tipo píldora (`rounded-full border border-gray-200 shadow-sm px-5 py-3`), placeholder `"ejem: pepitoperez"`.
  - **Campo Contraseña:**
    - Etiqueta superior: `"Contraseña"` (`text-sm font-medium text-gray-700`).
    - Input tipo `password` con el mismo estilo redondeado (`rounded-full`), placeholder `"••••••••••••"` y botón opcional con icono `Eye`/`EyeOff` de `lucide-react` para alternar visibilidad.
  - **Botón Principal:** Botón tipo píldora (`rounded-full bg-[#F08324] hover:bg-[#d9721b] text-white font-medium px-10 py-3 shadow-md`) con el texto `"Acceder"`.
  - **Enlace Inferior:** Texto centrado `"¿Olvidó su contraseña?"` en gris suave (`text-xs text-gray-500 hover:text-[#F08324]`).

## Contrato de Datos y Servicio (Preparación para PHP)
1. En `src/types/cms.ts`, añadir:
   - `CredencialesLogin` (`usuario: string`, `password: string`).
   - `RespuestaAuth` (`ok: boolean`, `token?: string`, `usuario?: { id: number; nombre: string; direccion: string; rol: string }`, `mensaje?: string`).
2. En `src/services/auth.service.ts`, crear `iniciarSesion(credenciales: CredencialesLogin): Promise<RespuestaAuth>`:
   - Simular validación Mock (ej. aceptar cualquier usuario no vacío con contraseña de al menos 6 caracteres, devolviendo un token simulado y redirigiendo a `/` o mostrando alerta de éxito; si falla, mostrar mensaje de error claro en el formulario).
   - Dejar comentado el bloque `fetch('.../api/v1/auth/login', { method: 'POST', ... })` listo para el backend PHP.[cite: 6]