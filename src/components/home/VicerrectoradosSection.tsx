'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Vicerrectorado } from '@/types/cms';

interface VicerrectoradosSectionProps {
  vicerrectorados: Vicerrectorado[];
}

/**
 * Sección Vicerrectorados (Client Component)
 *
 * Lleva `'use client'` en la primera línea porque necesita interactividad
 * en el navegador: recordar qué botón seleccionó el usuario (`useState`)
 * y actualizar la tarjeta informativa al instante sin recargar la página.
 */
export default function VicerrectoradosSection({
  vicerrectorados,
}: VicerrectoradosSectionProps) {
  // Inicializamos el estado en 'VIPI' tal como aparece resaltado en Figma
  const [activo, setActivo] = useState<Vicerrectorado['siglas']>('VIPI');

  if (!vicerrectorados || vicerrectorados.length === 0) {
    return null;
  }

  const vicerrectoradoSeleccionado =
    vicerrectorados.find((v) => v.siglas === activo) ?? vicerrectorados[0];

  return (
    <section aria-label="Vicerrectorados UNELLEZ" className="w-full py-10 text-center">
      {/* Encabezado */}
      <p className="text-xs sm:text-sm font-semibold text-[#F08324] tracking-wide">
        Conoce Nuestros
      </p>
      <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Vicerrectorados
      </h2>

      {/* Fila de 4 botones tipo píldora */}
      <div
        role="tablist"
        aria-label="Seleccionar vicerrectorado"
        className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
      >
        {vicerrectorados.map((v) => {
          const esActivo = v.siglas === activo;

          return (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={esActivo}
              onClick={() => setActivo(v.siglas)}
              className={`min-w-[110px] sm:min-w-[140px] px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${esActivo
                ? 'bg-gradient-to-b from-white via-indigo-50/60 to-indigo-100/90 border-indigo-200 text-slate-900 shadow-[0_6px_18px_rgba(99,102,241,0.22)] -translate-y-0.5'
                : 'bg-white border-gray-100 text-slate-700 shadow-xs hover:shadow-md hover:border-orange-200 hover:text-[#F08324]'
                }`}
            >
              {v.siglas}
            </button>
          );
        })}
      </div>

      {/* Tarjeta discreta con el detalle del Vicerrectorado seleccionado */}
      {/* {vicerrectoradoSeleccionado && (
        <div
          role="tabpanel"
          className="mt-6 max-w-2xl mx-auto rounded-2xl border border-gray-100 bg-gray-50/70 px-6 py-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all"
        >
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="inline-block px-2 py-0.5 text-[11px] font-bold text-[#F08324] bg-orange-100/80 rounded-md">
                {vicerrectoradoSeleccionado.siglas}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {vicerrectoradoSeleccionado.sede}
              </span>
            </div>
            <h3 className="mt-1.5 text-sm sm:text-base font-bold text-slate-900">
              {vicerrectoradoSeleccionado.nombre}
            </h3>
          </div>

          <Link
            href={vicerrectoradoSeleccionado.urlPortal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#F08324] hover:bg-[#d87118] rounded-full shadow-xs transition-colors whitespace-nowrap group"
          >
            <span>Ir al portal</span>
            <span
              className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      )} */}
    </section>
  );
}

