import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import RelatedNewsSidebar from '@/components/news/RelatedNewsSidebar';
import {
  obtenerEnlacesNavbar,
  obtenerInfoInstitucional,
} from '@/services/cms.service';
import {
  obtenerNoticiaPorSlug,
  obtenerNoticiasRelacionadas,
  obtenerTodasLasNoticias,
} from '@/services/news.service';

interface DetalleNoticiaPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-genera las rutas estáticas conocidas a partir de todos los slugs del servicio
 * (compatible con `cacheComponents: true` en Next.js 16).
 */
export async function generateStaticParams() {
  const noticias = await obtenerTodasLasNoticias();
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }));
}

/**
 * Genera el `<title>` y metadatos dinámicos según la noticia consultada.
 */
export async function generateMetadata({
  params,
}: DetalleNoticiaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await obtenerNoticiaPorSlug(slug);

  if (!noticia) {
    return {
      title: 'Noticia no encontrada | UNELLEZ',
    };
  }

  return {
    title: `${noticia.titulo} | UNELLEZ`,
    description: noticia.resumen,
  };
}

/**
 * Vista de Detalle de Noticia (`/noticias/[slug]`) - Server Component
 *
 * Carga en el servidor la noticia solicitada, las noticias relacionadas y el
 * layout institucional (`Navbar` y `Footer`), sin usar `'use client'`.
 */
export default async function DetalleNoticiaPage({
  params,
}: DetalleNoticiaPageProps) {
  const { slug } = await params;

  const [noticia, relacionadas, enlacesBase, infoInstitucional] =
    await Promise.all([
      obtenerNoticiaPorSlug(slug),
      obtenerNoticiasRelacionadas(slug, 3),
      obtenerEnlacesNavbar(),
      obtenerInfoInstitucional(),
    ]);

  if (!noticia) {
    notFound();
  }

  // Marcamos el enlace "Noticias" como activo en el Navbar para esta vista
  const enlacesNavbar = enlacesBase.map((enlace) => ({
    ...enlace,
    esActivo: enlace.url === '/noticias',
  }));

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 1. Header / Navbar Institucional */}
      <Navbar enlaces={enlacesNavbar} />

      <main className="flex-1 w-full">
        {/* 2. Banner Superior "Noticias Destacadas" */}
        <NewsSectionBanner titulo="Noticias Destacadas" />

        {/* 3. Grid Asimétrico Principal (8 cols artículo + 4 cols sidebar) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Columna Izquierda: Artículo Principal */}
            <article className="lg:col-span-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {noticia.titulo}
              </h1>

              {/* Imagen Principal */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mt-6 bg-gray-100 shadow-xs">
                <Image
                  src={noticia.imagenUrl}
                  alt={noticia.imagenAlt || noticia.titulo}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Pie de Foto */}
              {noticia.pieFoto && (
                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                  {noticia.pieFoto}
                </p>
              )}

              {/* Cuerpo de la Noticia */}
              <div className="space-y-4 mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                {noticia.contenido.map((parrafo, indice) => (
                  <p key={indice}>{parrafo}</p>
                ))}
              </div>
            </article>

            {/* Columna Derecha: Sidebar "Mas noticias" */}
            <RelatedNewsSidebar noticias={relacionadas} />
          </div>
        </div>
      </main>

      {/* 4. Footer Institucional */}
      <Footer info={infoInstitucional} />
    </div>
  );
}
