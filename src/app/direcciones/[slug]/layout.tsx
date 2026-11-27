import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import SubportalNavbar from '@/components/subportal/SubportalNavbar';
import Footer from '@/components/layout/Footer';
import { obtenerInfoInstitucional } from '@/services/cms.service';
import {
  obtenerDireccionPorSlug,
  obtenerSlugsDirecciones,
} from '@/services/direcciones.service';

interface SubportalLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

/**
 * Pre-genera los layouts estáticos para las 4 direcciones institucionales
 * (compatible con `cacheComponents: true` en Next.js 16).
 */
export async function generateStaticParams() {
  const slugs = await obtenerSlugsDirecciones();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Layout Compartido para Subportales de Direcciones (`/direcciones/[slug]/*`)
 *
 * Envuelve todas las sub-rutas (Inicio, Nosotros, Servicios, Contactos, Descargas)
 * con el `SubportalNavbar` propio de la dirección y el `Footer` institucional.
 */
export default async function SubportalLayout({
  children,
  params,
}: SubportalLayoutProps) {
  const { slug } = await params;

  const [direccion, infoInstitucional] = await Promise.all([
    obtenerDireccionPorSlug(slug),
    obtenerInfoInstitucional(),
  ]);

  if (!direccion) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Suspense fallback={<div className="h-20 w-full bg-white border-b border-gray-100" />}>
        <SubportalNavbar slug={direccion.slug} siglas={direccion.siglas} />
      </Suspense>

      <main className="flex-1 w-full">{children}</main>

      <Footer info={infoInstitucional} />
    </div>
  );
}
