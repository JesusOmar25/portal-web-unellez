import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import {
  obtenerDireccionPorSlug,
  obtenerSlugsDirecciones,
} from '@/services/direcciones.service';

interface SubportalContactosPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await obtenerSlugsDirecciones();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SubportalContactosPageProps): Promise<Metadata> {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    return { title: 'Contactos | UNELLEZ' };
  }

  return {
    title: `Contactos - ${direccion.siglas} | UNELLEZ`,
    description: `Oficinas y teléfonos de atención de ${direccion.nombreCompleto} (${direccion.siglas}).`,
  };
}

/**
 * Vista "Contactos" del Subportal (`/direcciones/[slug]/contactos`) - Server Component
 */
export default async function SubportalContactosPage({
  params,
}: SubportalContactosPageProps) {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    notFound();
  }

  return (
    <>
      <NewsSectionBanner
        titulo="Contactos"
        alineacion="centro"
        varianteContenedor="subportal"
      />

      <section
        aria-label={`Oficinas de ${direccion.siglas}`}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center my-8 tracking-tight">
          Oficinas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {direccion.oficinas.map((oficina) => (
            <article
              key={oficina.id}
              className="rounded-2xl bg-white shadow-md shadow-slate-200/60 border border-slate-100 p-6 text-sm text-slate-600 leading-relaxed"
            >
              <p>
                <strong className="font-bold text-slate-900">
                  {oficina.nombre}
                </strong>{' '}
                {oficina.ubicacion}
              </p>
              <p className="mt-2 text-slate-700 font-medium">
                Telf.: {oficina.telefono}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
