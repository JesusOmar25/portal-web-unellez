import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsSectionBanner from '@/components/news/NewsSectionBanner';
import UniversityTabsSection from '@/components/university/UniversityTabsSection';
import {
  obtenerEnlacesNavbar,
  obtenerInfoInstitucional,
} from '@/services/cms.service';
import { obtenerSeccionesUniversidad } from '@/services/universidad.service';

export const metadata: Metadata = {
  title: 'Sobre la Universidad | Portal UNELLEZ',
  description:
    'Historia, misión, visión, reglamentos, símbolos universitarios y sedes de la Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora.',
};

/**
 * Página Institucional "Sobre la Universidad" (`/universidad`) - Server Component
 *
 * Carga en paralelo las 5 secciones institucionales y los datos del layout
 * (`Navbar` y `Footer`), delegando la interactividad de pestañas al Client Component
 * `<UniversityTabsSection />`.
 */
export default async function UniversidadPage() {
  const [secciones, enlacesBase, infoInstitucional] = await Promise.all([
    obtenerSeccionesUniversidad(),
    obtenerEnlacesNavbar(),
    obtenerInfoInstitucional(),
  ]);

  // Marcamos el enlace "Universidad" como activo en el Navbar
  const enlacesNavbar = enlacesBase.map((enlace) => ({
    ...enlace,
    esActivo: enlace.url === '/universidad',
  }));

  return (
      <div className="min-h-screen flex flex-col bg-white text-slate-800 overflow-x-hidden">
        {/* 1. Header / Navbar Institucional */}
        <Navbar enlaces={enlacesNavbar} />

        <main className="flex-1 w-full">
          {/* 2. Banner Superior "Sobre la Universidad" alineado abajo a la izquierda */}
          <NewsSectionBanner
            titulo="Sobre la Universidad"
            alineacion="izquierda"
          />

          {/* 3. Sección Interactiva con 5 Pestañas (Historia, Misión y Visión, etc.) */}
          <UniversityTabsSection secciones={secciones} />
        </main>

        {/* 4. Footer Institucional */}
        <Footer info={infoInstitucional} />
      </div>
      );
}
