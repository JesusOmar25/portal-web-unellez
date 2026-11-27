'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { SlideSubportal } from '@/types/cms';

interface SubportalFeaturedCarouselProps {
  destacadas: SlideSubportal[];
}

/**
 * Columna Izquierda "Destacadas" del Subportal (Client Component)
 *
 * Muestra la etiqueta naranja "Destacadas" y una tarjeta carrusel grande con
 * imagen completa, degradado oscuro inferior, titular blanco en negrita y
 * puntos de paginación interactivos (`useState`).
 */
export default function SubportalFeaturedCarousel({
  destacadas,
}: SubportalFeaturedCarouselProps) {
  const [indiceActual, setIndiceActual] = useState(0);

  if (!destacadas || destacadas.length === 0) {
    return null;
  }

  const itemActivo = destacadas[indiceActual] ?? destacadas[0];

  return (
    <div className="lg:col-span-6 flex flex-col">
      <div className="mb-4">
        <span className="inline-block bg-[#F08324] text-white text-xs font-semibold px-3.5 py-1 rounded-md shadow-xs">
          Destacadas
        </span>
      </div>

      <div className="relative flex-1 min-h-[320px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-sm bg-slate-900 flex flex-col justify-end">
        <Image
          src={itemActivo.imagenUrl}
          alt={itemActivo.alt || itemActivo.titulo}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-500 pointer-events-none"
        />

        {/* Degradado oscuro inferior para contraste del titular */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 p-6 sm:p-7 flex flex-col items-center text-center gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {itemActivo.titulo}
          </h2>

          {destacadas.length > 1 && (
            <div
              role="tablist"
              aria-label="Seleccionar noticia destacada"
              className="flex items-center justify-center gap-2"
            >
              {destacadas.map((item, idx) => {
                const esActual = idx === indiceActual;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={esActual}
                    aria-label={`Ver destacada ${idx + 1}: ${item.titulo}`}
                    onClick={() => setIndiceActual(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-200 cursor-pointer ${esActual
                        ? 'bg-[#F08324] scale-110 shadow-xs'
                        : 'bg-white/70 hover:bg-white'
                      }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
