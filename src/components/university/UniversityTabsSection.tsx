'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { SeccionUniversidad } from '@/types/cms';

interface UniversityTabsSectionProps {
  secciones: SeccionUniversidad[];
}

/**
 * Sección Interactiva "Sobre la Universidad" (Client Component)
 *
 * Lleva `'use client'` porque gestiona la pestaña activa en el navegador mediante
 * `useState('historia')`, permitiendo alternar entre Historia, Misión y Visión,
 * Reglamentos, Símbolos Universitarios y Sedes sin recargar la página.
 */
export default function UniversityTabsSection({
  secciones,
}: UniversityTabsSectionProps) {
  const [seccionActivaId, setSeccionActivaId] = useState<string>('historia');

  if (!secciones || secciones.length === 0) {
    return null;
  }

  const seccionActual =
    secciones.find((s) => s.id === seccionActivaId) ?? secciones[0];

  return (
    <section
      aria-label="Información institucional de la UNELLEZ"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* 1. Columna Izquierda (3 cols): Menú lateral de pestañas */}
        <div
          role="tablist"
          aria-label="Secciones de la Universidad"
          className="lg:col-span-3 min-w-0 w-full max-w-full flex overflow-x-auto gap-2.5 pb-2 lg:pb-0 lg:flex-col lg:overflow-visible"
        >
          {secciones.map((seccion) => {
            const esActiva = seccion.id === seccionActual.id;

            return (
              <button
                key={seccion.id}
                type="button"
                role="tab"
                id={`tab-${seccion.id}`}
                aria-selected={esActiva}
                aria-controls={`panel-${seccion.id}`}
                onClick={() => setSeccionActivaId(seccion.id)}
                className={`shrink-0 lg:w-full rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 cursor-pointer border ${esActiva
                  ? 'bg-gradient-to-b from-white to-orange-50/80 text-[#F08324] font-semibold border-orange-200/70 shadow-md'
                  : 'bg-white text-slate-700 font-medium border-slate-100 shadow-sm hover:text-[#F08324] hover:border-orange-100 hover:shadow-md'
                  }`}
              >
                {seccion.etiqueta}
              </button>
            );
          })}
        </div>

        {/* 2. Columna Central (6 cols): Contenido Editorial */}
        <div
          role="tabpanel"
          id={`panel-${seccionActual.id}`}
          aria-labelledby={`tab-${seccionActual.id}`}
          className="lg:col-span-6 min-w-0 w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            {seccionActual.titulo}
          </h2>

          {seccionActual.introDestacada && (
            <p className="font-bold text-slate-900 text-sm sm:text-base leading-relaxed mb-5">
              {seccionActual.introDestacada}
            </p>
          )}

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left">
              {seccionActual.parrafos.map((parrafo, indice) => (
                <p key={indice}>{parrafo}</p>
              ))}
            </div>
          </div>

          {/* 3. Columna Derecha (3 cols): Galería Vertical de 2 imágenes */}
            <div className="lg:col-span-3 min-w-0 w-full flex flex-col gap-6">
              {seccionActual.imagenes.map((imagen, indice) => (
                <div
                  key={`${seccionActual.id}-img-${indice}`}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
                >
                  <Image
                    src={imagen.url}
                    alt={imagen.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className={`object-cover object-center transition-all duration-300 ${imagen.escalaDeGrises ? 'grayscale contrast-105' : ''
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        );
}
