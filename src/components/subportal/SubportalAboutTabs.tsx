'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Building2, FileText } from 'lucide-react';
import type { MiembroEquipo, NosotrosSubportal } from '@/types/cms';

interface SubportalAboutTabsProps {
  nosotros: NosotrosSubportal;
}

type PestanaId =
  | 'quienes-somos'
  | 'historia'
  | 'mision-vision'
  | 'reglamentos'
  | 'estructura';

const PESTANAS: { id: PestanaId; etiqueta: string; tituloSeccion: string }[] = [
  { id: 'quienes-somos', etiqueta: 'Quiénes Somos', tituloSeccion: '¿Quiénes Somos?' },
  { id: 'historia', etiqueta: 'Historia', tituloSeccion: 'Historia' },
  { id: 'mision-vision', etiqueta: 'Misión y Visión', tituloSeccion: 'Misión y Visión' },
  { id: 'reglamentos', etiqueta: 'Reglamentos', tituloSeccion: 'Reglamentos' },
  {
    id: 'estructura',
    etiqueta: 'Estructura Organizacional',
    tituloSeccion: 'Estructura Organizacional',
  },
];

function obtenerIniciales(nombre: string): string {
  const palabras = nombre
    .replace(/^(Dr\.|Dra\.|Prof\.|Lcdo\.|Lcda\.|Ing\.|MSc\.)\s*/i, '')
    .trim()
    .split(/\s+/);
  return palabras
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

function esFotoPermitida(url?: string): boolean {
  if (!url) return false;
  if (url.startsWith('/')) return true;
  try {
    const parsed = new URL(url);
    return parsed.hostname === 'images.unsplash.com';
  } catch {
    return false;
  }
}

function AvatarMiembro({ miembro }: { miembro: MiembroEquipo }) {
  if (miembro.fotoUrl && esFotoPermitida(miembro.fotoUrl)) {
    return (
      <div className="relative w-20 h-20 rounded-full overflow-hidden bg-orange-50 border-2 border-orange-100 shadow-xs shrink-0">
        <Image
          src={miembro.fotoUrl}
          alt={miembro.nombre}
          fill
          sizes="80px"
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className="w-20 h-20 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#F08324] font-bold text-lg shadow-xs shrink-0"
      aria-hidden="true"
    >
      {obtenerIniciales(miembro.nombre)}
    </div>
  );
}

/**
 * Sección Interactiva "Nosotros" del Subportal (Client Component)
 *
 * Unifica las 5 pestañas institucionales (Quiénes Somos, Historia, Misión y Visión,
 * Reglamentos y Estructura Organizacional) con `useState` para cambiar el contenido
 * instantáneamente sin recargar la página.
 */
export default function SubportalAboutTabs({ nosotros }: SubportalAboutTabsProps) {
  const [pestanaActiva, setPestanaActiva] = useState<PestanaId>('quienes-somos');

  const metaPestana =
    PESTANAS.find((p) => p.id === pestanaActiva) ?? PESTANAS[0];

  return (
    <section
      aria-label="Información institucional de la dirección"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 overflow-x-hidden"
    >
      {/* Título centrado de la pestaña activa */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mt-6 mb-5 sm:mt-8 sm:mb-8 tracking-tight">
          {metaPestana.tituloSeccion}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Columna Izquierda (3 cols): Menú lateral de 5 pestañas unificadas */}
          <div
            role="tablist"
            aria-label="Secciones de Nosotros"
            className="lg:col-span-3 min-w-0 w-full max-w-full flex overflow-x-auto gap-2.5 pb-2 lg:pb-0 lg:flex-col lg:overflow-visible"
          >
            {PESTANAS.map((tab) => {
              const esActiva = tab.id === pestanaActiva;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-nosotros-${tab.id}`}
                  aria-selected={esActiva}
                  aria-controls={`panel-nosotros-${tab.id}`}
                  onClick={() => setPestanaActiva(tab.id)}
                  className={`shrink-0 lg:w-full rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 cursor-pointer border ${esActiva
                    ? 'bg-gradient-to-b from-white to-orange-50/80 text-[#F08324] font-semibold border-orange-200/70 shadow-md'
                    : 'bg-white text-slate-700 font-medium border-slate-100 shadow-sm hover:text-[#F08324] hover:border-orange-100 hover:shadow-md'
                    }`}
                >
                  {tab.etiqueta}
                </button>
              );
            })}
          </div>

          {/* Columna Derecha (9 cols): Contenido dinámico según la pestaña */}
          <div
            role="tabpanel"
            id={`panel-nosotros-${pestanaActiva}`}
            aria-labelledby={`tab-nosotros-${pestanaActiva}`}
            className="lg:col-span-9 min-w-0 w-full"
          >
            {pestanaActiva === 'quienes-somos' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#F08324] font-bold uppercase text-sm sm:text-base tracking-wide mb-3">
                    {nosotros.quienesSomos.tituloBloque}
                  </h3>
                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {nosotros.quienesSomos.parrafos.map((parrafo, idx) => (
                      <p key={idx}>{parrafo}</p>
                    ))}
                  </div>
                </div>

                {/* Grupos de equipo con avatares circulares */}
                <div className="space-y-8 pt-2">
                  {nosotros.quienesSomos.gruposEquipo.map((grupo) => (
                    <div key={grupo.titulo}>
                      <h4 className="text-[#F08324] font-bold text-sm sm:text-base mb-4">
                        {grupo.titulo}
                      </h4>
                      <div className="flex flex-wrap gap-8">
                        {grupo.miembros.map((miembro) => (
                          <div
                            key={miembro.id}
                            className="flex flex-col items-start w-44"
                          >
                            <AvatarMiembro miembro={miembro} />
                            <p className="mt-3 text-xs sm:text-sm font-bold text-[#F08324] leading-snug">
                              {miembro.nombre}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-600 leading-snug">
                              {miembro.cargo}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pestanaActiva === 'historia' && (
              <div>
                <h3 className="text-[#F08324] font-bold uppercase text-sm sm:text-base tracking-wide mb-4">
                  {nosotros.historia.tituloBloque}
                </h3>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {nosotros.historia.parrafos.map((parrafo, idx) => (
                    <p key={idx}>{parrafo}</p>
                  ))}
                </div>
              </div>
            )}

            {pestanaActiva === 'mision-vision' && (
              <div className="space-y-10 max-w-3xl mx-auto">
                <div>
                  <h3 className="text-[#F08324] font-bold uppercase text-base sm:text-lg tracking-wide text-center mb-3">
                    MISIÓN
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                    {nosotros.misionVision.mision}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#F08324] font-bold uppercase text-base sm:text-lg tracking-wide text-center mb-3">
                    VISIÓN
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                    {nosotros.misionVision.vision}
                  </p>
                </div>
              </div>
            )}

            {pestanaActiva === 'reglamentos' && (
              <div className="space-y-6">
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {nosotros.reglamentos.parrafos.map((parrafo, idx) => (
                    <p key={idx}>{parrafo}</p>
                  ))}
                </div>

                {nosotros.reglamentos.documentos &&
                  nosotros.reglamentos.documentos.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {nosotros.reglamentos.documentos.map((doc) => (
                        <a
                          key={doc.id}
                          href={doc.url}
                          className="flex items-center gap-3 rounded-xl bg-white border border-slate-100 shadow-sm px-4 py-3.5 text-sm font-semibold text-slate-800 hover:border-orange-200 hover:text-[#F08324] transition-all"
                        >
                          <FileText className="w-5 h-5 text-[#F08324] shrink-0" />
                          <span>{doc.titulo}</span>
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            )}

            {pestanaActiva === 'estructura' && (
              <div className="space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {nosotros.estructuraOrganizacional.descripcion}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nosotros.estructuraOrganizacional.unidades.map((unidad) => (
                    <div
                      key={unidad}
                      className="flex items-center gap-3 rounded-xl bg-white border border-slate-100 shadow-sm px-4 py-4"
                    >
                      <Building2 className="w-5 h-5 text-[#F08324] shrink-0" />
                      <span className="text-sm font-medium text-slate-800">
                        {unidad}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
    </section>
  );
}
