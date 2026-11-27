import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import EditorialNewsGrid from '@/components/news/EditorialNewsGrid';
import {
  obtenerEnlacesNavbar,
  obtenerInfoInstitucional,
} from '@/services/cms.service';
import { obtenerTodasLasNoticias } from '@/services/news.service';

export const metadata: Metadata = {
  title: 'Noticias | Portal UNELLEZ',
  description:
    'Últimas noticias, logros deportivos, avances tecnológicos y actualidad universitaria de la UNELLEZ.',
};

/**
 * Página Principal de Noticias (`/noticias`) - Server Component
 *
 * Carga en paralelo todas las noticias del servicio junto con el layout institucional
 * (`Navbar` y `Footer`), reutilizando `NewsSectionBanner` y `EditorialNewsGrid`.
 */
export default async function NoticiasPage() {
  const [noticias, enlacesBase, infoInstitucional] = await Promise.all([
    obtenerTodasLasNoticias(),
    obtenerEnlacesNavbar(),
    obtenerInfoInstitucional(),
  ]);

  // Marcamos el enlace "Noticias" como activo en el Navbar
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

        {/* 3. Grid Editorial Asimétrico de 9 Noticias */}
        <EditorialNewsGrid noticias={noticias} />
      </main>

      {/* 4. Footer Institucional */}
      <Footer info={infoInstitucional} />
    </div>
  );
}
