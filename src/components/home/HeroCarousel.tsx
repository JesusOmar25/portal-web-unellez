'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Monitor, BookOpen, Building2 } from 'lucide-react';
import type { DireccionInstitucional, EventoHero } from '@/types/cms';

interface HeroCarouselProps {
  eventos: EventoHero[];
  direcciones: DireccionInstitucional[];
}

/**
 * Mapeo dinámico de iconos de `lucide-react` según el identificador de la API PHP.
 */
function IconoDireccion({ icono }: { icono: DireccionInstitucional['icono'] }) {
  const claseIcono = 'w-5 h-5 text-[#F08324] transition-transform duration-200 group-hover:scale-110';

  switch (icono) {
    case 'graduation-cap':
      return <GraduationCap className={claseIcono} strokeWidth={1.8} />;
    case 'monitor':
      return <Monitor className={claseIcono} strokeWidth={1.8} />;
    case 'book-open':
      return <BookOpen className={claseIcono} strokeWidth={1.8} />;
    case 'building-2':
      return <Building2 className={claseIcono} strokeWidth={1.8} />;
    default:
      return <Building2 className={claseIcono} strokeWidth={1.8} />;
  }
}

/**
 * Hero Banner & Accesos Rápidos (Client Component)
 *
 * Usa `'use client'` y `useState` para controlar el índice del evento visible
 * cuando el usuario interactúa con los indicadores inferiores (puntos del carrusel).
 */
export default function HeroCarousel({ eventos, direcciones }: HeroCarouselProps) {
  const [indiceActual, setIndiceActual] = useState(0);

  if (!eventos || eventos.length === 0) {
    return null;
  }

  const eventoActivo = eventos[indiceActual] ?? eventos[0];

  return (
    <section
      aria-label="Eventos destacados y accesos rápidos"
      className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 pt-3 pb-2"
    >
      <div className="relative rounded-3xl overflow-hidden min-h-[430px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-end p-4 sm:p-8 lg:p-10 shadow-sm">
        {/* Imagen de fondo del evento actual */}
        <Image
          src={eventoActivo.imagenUrl}
          alt={eventoActivo.imagenAlt || eventoActivo.titulo}
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center transition-all duration-500"
        />

        {/* Degradado sutil inferior para que destaquen los indicadores sin alterar el tono de la foto */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Contenido inferior: tarjeta flotante + puntos indicadores */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-4">
          {/* Tarjeta blanca superpuesta */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Lado izquierdo: Título y descripción del evento */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {eventoActivo.urlDetalle ? (
                  <Link
                    href={eventoActivo.urlDetalle}
                    className="hover:text-[#F08324] transition-colors"
                  >
                    {eventoActivo.titulo}
                  </Link>
                ) : (
                  eventoActivo.titulo
                )}
              </h1>
              <p className="mt-1.5 text-sm sm:text-base text-slate-600 line-clamp-2 leading-relaxed">
                {eventoActivo.descripcion}
              </p>
            </div>

            {/* Lado derecho: 4 botones cuadrados de direcciones */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full md:w-auto shrink-0">
              {direcciones.map((dir) => (
                <Link
                  key={dir.id}
                  href={dir.urlDestino}
                  title={dir.nombreCompleto}
                  className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 min-w-[76px] rounded-xl border border-orange-100 bg-white hover:bg-orange-50/70 hover:border-[#F08324]/40 shadow-xs hover:shadow-sm transition-all duration-150 group"
                >
                  <IconoDireccion icono={dir.icono} />
                  <span className="text-[11px] font-bold tracking-wide text-slate-800 group-hover:text-[#F08324] transition-colors">
                    {dir.siglas}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Indicadores de carrusel (4 puntos) */}
          {eventos.length > 1 && (
            <div
              role="tablist"
              aria-label="Seleccionar evento del carrusel"
              className="flex items-center justify-center gap-2 pt-1"
            >
              {eventos.map((evento, idx) => {
                const esActual = idx === indiceActual;
                return (
                  <button
                    key={evento.id}
                    type="button"
                    role="tab"
                    aria-selected={esActual}
                    aria-label={`Ver evento ${idx + 1}: ${evento.titulo}`}
                    onClick={() => setIndiceActual(idx)}
                    className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                      esActual
                        ? 'w-2.5 bg-[#F08324] shadow-xs scale-110'
                        : 'w-2.5 bg-white/60 hover:bg-white'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

