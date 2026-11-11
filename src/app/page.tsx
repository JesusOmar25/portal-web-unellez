import Navbar from '@/components/layout/Navbar';
import AlertBanner from '@/components/home/AlertBanner';
import CommunityBanner from '@/components/home/CommunityBanner';
import Footer from '@/components/layout/Footer';
import {
  obtenerEnlacesNavbar,
  obtenerAvisoImportante,
  obtenerInfoInstitucional,
} from '@/services/cms.service';

/**
 * Página Principal (Home) - Server Component
 * 
 * En este paso (3, 4 y 5):
 * - Se consumen en paralelo con Promise.all los datos simulados de la API PHP.
 * - Se renderizan AlertBanner, CommunityBanner y Footer como Server Components.
 */
export default async function Home() {
  const [enlacesNavbar, aviso, infoInstitucional] = await Promise.all([
    obtenerEnlacesNavbar(),
    obtenerAvisoImportante(),
    obtenerInfoInstitucional(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Paso 2: Navbar Institucional */}
      <Navbar enlaces={enlacesNavbar} />

      {/* Contenido Principal de la Portada */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          
          {/* Marcador temporal para los Pasos 7 y 8 (Hero Carousel & Vicerrectorados) */}
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/70 p-6 text-center text-gray-500 mb-6">
            <span className="text-[11px] font-bold tracking-wider uppercase text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-full">
              Espacio Reservado: Pasos 7 y 8
            </span>
            <p className="text-sm font-medium text-gray-700 mt-2">
              Aquí se integrarán el HeroCarousel y la Sección de Vicerrectorados
            </p>
          </div>

          {/* Paso 3: Banner de Alerta / Actos de Grado */}
          <AlertBanner aviso={aviso} />

          {/* Marcador temporal para el Paso 6 (Noticias Destacadas) */}
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/70 p-6 text-center text-gray-500 my-6">
            <span className="text-[11px] font-bold tracking-wider uppercase text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-full">
              Espacio Reservado: Paso 6
            </span>
            <p className="text-sm font-medium text-gray-700 mt-2">
              Aquí se integrará la Sección de Noticias Destacadas (Grid Asimétrico de 12 columnas)
            </p>
          </div>

        </div>

        {/* Paso 4: Banner de Comunidad Universitaria */}
        <CommunityBanner />
      </main>

      {/* Paso 5: Footer Institucional */}
      <Footer info={infoInstitucional} />
    </div>
  );
}
