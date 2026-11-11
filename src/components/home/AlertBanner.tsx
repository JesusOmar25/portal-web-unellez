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

  return (
    <section aria-label="Aviso institucional importante" className="w-full my-6">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#df6812] via-[#F08324] to-[#f59e0b] shadow-md px-6 py-3.5 transition-all">
        {/* Patrón de brillo de fondo sutil */}
        <div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          {/* Mensaje central */}
          <div className="flex items-center gap-2 text-center sm:text-left flex-1 justify-center sm:justify-center">
            <span className="font-semibold text-sm sm:text-base tracking-wide drop-shadow-xs">
              {aviso.mensaje}
            </span>
          </div>

          {/* Enlace de acción rápida a la derecha */}
          <Link
            href={aviso.urlDestino}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full transition-all duration-150 backdrop-blur-xs whitespace-nowrap group cursor-pointer"
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
    </section>
  );
}

