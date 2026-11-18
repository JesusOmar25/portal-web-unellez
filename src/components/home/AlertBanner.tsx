import Image from 'next/image';
import Link from 'next/link';
import type { AvisoImportante } from '@/types/cms';

interface AlertBannerProps {
  aviso: AvisoImportante | null;
}

/**
 * Banner de Alerta / Aviso Institucional (Ej. Actos de Grado)
 * 
 * Es un React Server Component puro.
 * Demuestra:
 * 1. Uso de Props tipadas para recibir información desde el Server Component padre (page.tsx).
 * 2. Renderizado Condicional: si la API no devuelve aviso o está inactivo, retorna `null`
 *    y React no renderiza nada en el DOM (equivalente a un `if (!$aviso) return;` en PHP).
 */
export default function AlertBanner({ aviso }: AlertBannerProps) {
  // Si no hay aviso o no está activo, no pintamos nada en pantalla
  if (!aviso || !aviso.activo) {
    return null;
  }

  const imagenFondo = aviso.imagenFondoUrl || '/images/alert-banner-bg.png';

  return (
        <section
          aria-label="Aviso institucional importante"
          className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 my-4"
        >
          <div className="relative overflow-hidden rounded-xl bg-[#F08324] shadow-md px-6 sm:px-10 py-3.5 transition-all">
            {/* Imagen de fondo institucional de actos de grado */}
            <Image
              src={imagenFondo}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center pointer-events-none"
              aria-hidden="true"
            />

              <div className="relative z-10 flex flex-col sm:grid sm:grid-cols-3 items-center gap-2 text-white">
                <div className="hidden sm:block" aria-hidden="true" />

                {/* Mensaje centrado */}
                <p className="font-semibold text-sm sm:text-base tracking-wide text-center drop-shadow-xs">
                  {aviso.mensaje}
                </p>

                {/* Enlace de acción rápida a la derecha */}
                <div className="flex justify-center sm:justify-end">
                  <Link
                    href={aviso.urlDestino}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/95 hover:text-white transition-all duration-150 whitespace-nowrap group cursor-pointer"
                  >
                    <span>{aviso.textoEnlace}</span>
                      <span
                className="inline-block transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
        </section>
        );
}
