import Navbar from '@/components/layout/Navbar';
import HeroCarousel from '@/components/home/HeroCarousel';
import VicerrectoradosSection from '@/components/home/VicerrectoradosSection';
import AlertBanner from '@/components/home/AlertBanner';
import FeaturedNews from '@/components/home/FeaturedNews';
import CommunityBanner from '@/components/home/CommunityBanner';
import Footer from '@/components/layout/Footer';
import { obtenerDatosHome } from '@/services/cms.service';

/**
 * Página Principal (Home) - Server Component
 *
 * Consume todos los datos de la portada desde `obtenerDatosHome()` en el servidor
 * y distribuye cada sección a su componente modular correspondiente.
 */
export default async function Home() {
  const {
    enlacesNavbar,
    eventosHero,
    direcciones,
    vicerrectorados,
    avisoActivo,
    noticiasDestacadas,
    infoInstitucional,
  } = await obtenerDatosHome();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 1. Header / Navbar Institucional */}
      <Navbar enlaces={enlacesNavbar} />

      {/* Contenido Principal de la Portada */}
      <main className="flex-1 w-full">
        {/* 2. Hero Banner & Accesos Rápidos (DARSE, DITED, DISISERBI, INSITEZ) */}
        <HeroCarousel eventos={eventosHero} direcciones={direcciones} />

        {/* 3. Sección Vicerrectorados */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VicerrectoradosSection vicerrectorados={vicerrectorados} />
        </div>

        {/* 4. Banner de Alerta / Actos de Grado */}
        <AlertBanner aviso={avisoActivo} />

        {/* 5. Sección Noticias Destacadas (Grid Asimétrico 12 cols) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedNews noticias={noticiasDestacadas} />
        </div>

        {/* 6. Banner de Comunidad Universitaria */}
        <CommunityBanner />
      </main>

      {/* 7. Footer Institucional */}
      <Footer info={infoInstitucional} />
    </div>
  );
}
