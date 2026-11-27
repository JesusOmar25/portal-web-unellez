import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Briefcase, Clock } from 'lucide-react';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import {
  obtenerDireccionPorSlug,
  obtenerSlugsDirecciones,
} from '@/services/direcciones.service';

interface SubportalServiciosPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await obtenerSlugsDirecciones();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SubportalServiciosPageProps): Promise<Metadata> {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    return { title: 'Servicios | UNELLEZ' };
  }

  return {
    title: `Servicios - ${direccion.siglas} | UNELLEZ`,
    description: `Servicios y trámites ofrecidos por ${direccion.nombreCompleto} (${direccion.siglas}).`,
  };
}

/**
 * Vista "Servicios" del Subportal (`/direcciones/[slug]/servicios`) - Server Component
 */
export default async function SubportalServiciosPage({
  params,
}: SubportalServiciosPageProps) {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    notFound();
  }

  return (
    <>
      <NewsSectionBanner
        titulo="Servicios"
        alineacion="centro"
        varianteContenedor="subportal"
      />

      <section
        aria-label={`Servicios de ${direccion.siglas}`}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {direccion.servicios.map((servicio) => (
            <article
              key={servicio.id}
              className="rounded-2xl bg-white shadow-sm hover:shadow-md border border-slate-100 p-6 flex flex-col justify-between transition-shadow duration-200"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#F08324] mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-slate-900 leading-snug">
                  {servicio.titulo}
                </h2>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>

              {servicio.horario && (
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-[#F08324] shrink-0" />
                  <span>{servicio.horario}</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
