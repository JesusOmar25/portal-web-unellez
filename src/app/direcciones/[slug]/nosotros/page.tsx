import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import SubportalAboutTabs from '@/components/subportal/SubportalAboutTabs';
import {
  obtenerDireccionPorSlug,
  obtenerSlugsDirecciones,
} from '@/services/direcciones.service';

interface SubportalNosotrosPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await obtenerSlugsDirecciones();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SubportalNosotrosPageProps): Promise<Metadata> {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    return { title: 'Nosotros | UNELLEZ' };
  }

  return {
    title: `Nosotros - ${direccion.siglas} | UNELLEZ`,
    description: `Conoce la misión, visión, historia y equipo de ${direccion.nombreCompleto} (${direccion.siglas}).`,
  };
}

/**
 * Vista "Nosotros" del Subportal (`/direcciones/[slug]/nosotros`) - Server Component
 * Hereda automáticamente `SubportalNavbar` y `Footer` desde `layout.tsx`.
 */
export default async function SubportalNosotrosPage({
  params,
}: SubportalNosotrosPageProps) {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    notFound();
  }

  return (
    <>
      <NewsSectionBanner
        titulo="Nosotros"
        alineacion="centro"
        varianteContenedor="subportal"
      />
      <SubportalAboutTabs nosotros={direccion.nosotros} />
    </>
  );
}
