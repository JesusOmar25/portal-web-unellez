import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import {
  obtenerDireccionPorSlug,
  obtenerSlugsDirecciones,
} from '@/services/direcciones.service';

interface SubportalDescargasPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await obtenerSlugsDirecciones();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SubportalDescargasPageProps): Promise<Metadata> {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    return { title: 'Descargas | UNELLEZ' };
  }

  return {
    title: `Descargas - ${direccion.siglas} | UNELLEZ`,
    description: `Formatos, planillas y documentos descargables de ${direccion.nombreCompleto} (${direccion.siglas}).`,
  };
}

/**
 * Vista "Descargas" del Subportal (`/direcciones/[slug]/descargas`) - Server Component
 */
export default async function SubportalDescargasPage({
  params,
}: SubportalDescargasPageProps) {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    notFound();
  }

  return (
    <>
      <NewsSectionBanner
        titulo="Descargas"
        alineacion="centro"
        varianteContenedor="subportal"
      />

      <section
        aria-label={`Documentos descargables de ${direccion.siglas}`}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {direccion.descargas.map((archivo) => (
            <a
              key={archivo.id}
              href={archivo.url}
              //download
              className="rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 px-5 py-4 flex items-center gap-4 hover:border-orange-200 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <Download className="w-5 h-5 text-[#F08324] shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" />
              <div className="min-w-0">
                <span className="block text-sm font-bold text-slate-900 group-hover:text-[#F08324] transition-colors leading-snug">
                  {archivo.titulo}
                </span>
                {archivo.formato && (
                  <span className="block text-[11px] font-medium text-slate-400 uppercase mt-0.5">
                    {archivo.formato}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
