'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { SlideSubportal } from '@/types/cms';

interface SubportalHeroCarouselProps {
  slides: SlideSubportal[];
  siglas: string;
}

/**
 * Carrusel Hero Superior del Subportal (Client Component)
 *
 * Usa `'use client'` y `useState` para cambiar el slide activo al hacer clic
 * en los puntos de paginación inferiores.
 */
export default function SubportalHeroCarousel({
  slides,
  siglas,
}: SubportalHeroCarouselProps) {
  const [indiceActual, setIndiceActual] = useState(0);

  if (!slides || slides.length === 0) {
    return null;
  }

  const slideActivo = slides[indiceActual] ?? slides[0];

  return (
    <section
      aria-label={`Galería destacada de ${siglas}`}
      className="w-full pt-6"
    >
      <div className="relative w-full aspect-[16/7] min-h-[260px] sm:min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-slate-900">
        {/* Imagen de fondo del slide actual */}
        <Image
          src={slideActivo.imagenUrl}
          alt={slideActivo.alt || slideActivo.titulo}
          fill
          priority
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover object-center transition-all duration-500 pointer-events-none"
        />

        {/* Filtro cálido institucional + degradado inferior para los puntos */}
        <div
          className="absolute inset-0 bg-[#F08324]/35 mix-blend-multiply pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Puntos indicadores interactivos */}
        {slides.length > 1 && (
          <div
            role="tablist"
            aria-label={`Seleccionar imagen de ${siglas}`}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2"
          >
            {slides.map((slide, idx) => {
              const esActual = idx === indiceActual;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={esActual}
                  aria-label={`Ver slide ${idx + 1}: ${slide.titulo}`}
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
    </section>
  );
}
