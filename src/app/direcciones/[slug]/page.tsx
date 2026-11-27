import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubportalHeroCarousel from '@/components/subportal/SubportalHeroCarousel';
import SubportalFeaturedCarousel from '@/components/subportal/SubportalFeaturedCarousel';
import SubportalLatestArticles from '@/components/subportal/SubportalLatestArticles';
import {
  obtenerDireccionPorSlug,
  obtenerSlugsDirecciones,
} from '@/services/direcciones.service';

interface SubportalPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-genera las rutas de inicio para DARSE, DITED, DISISERBI e INSITEZ.
 */
export async function generateStaticParams() {
  const slugs = await obtenerSlugsDirecciones();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Genera el `<title>` y descripción dinámicos según la dirección visitada.
 */
export async function generateMetadata({
  params,
}: SubportalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    return {
      title: 'Dirección no encontrada | UNELLEZ',
    };
  }

  return {
    title: `${direccion.siglas} - ${direccion.nombreCompleto} | UNELLEZ`,
    description: `Subportal oficial de ${direccion.nombreCompleto} (${direccion.siglas}) de la UNELLEZ.`,
  };
}

/**
 * Página de Inicio del Subportal de Dirección (`/direcciones/[slug]`)
 *
 * Comparte el mismo contenedor `max-w-6xl mx-auto` entre el carrusel Hero superior
 * y el grid inferior de 12 columnas ("Destacadas" + "Últimos artículos").
 */
export default async function SubportalHomePage({ params }: SubportalPageProps) {
  const { slug } = await params;
  const direccion = await obtenerDireccionPorSlug(slug);

  if (!direccion) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
      {/* 1. Carrusel Hero Superior */}
      <SubportalHeroCarousel
        slides={direccion.slidesHero}
        siglas={direccion.siglas}
      />

      {/* 2. Grid Principal de Contenido (6 cols Destacadas + 6 cols Últimos artículos) */}
      <section
        aria-label={`Novedades de ${direccion.siglas}`}
        className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
      >
        <SubportalFeaturedCarousel destacadas={direccion.destacadas} />
        <SubportalLatestArticles articulos={direccion.ultimosArticulos} />
      </section>
    </div>
  );
}
