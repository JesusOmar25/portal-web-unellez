'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';

interface SubportalNavbarProps {
  slug: string;
  siglas: string;
}

/**
 * Navbar Exclusivo de Subportales de Direcciones (Client Component)
 *
 * Usa `'use client'` porque emplea `usePathname()` para detectar qué sección
 * del subportal está activa y `useState` para el menú móvil y el buscador rápido.
 * El logo UNELLEZ regresa al portal principal (`/`).
 */
export default function SubportalNavbar({ slug, siglas }: SubportalNavbarProps) {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);
  const [termino, setTermino] = useState('');

  const basePath = `/direcciones/${slug}`;
  const enlaces = [
    { etiqueta: 'Inicio', href: basePath },
    { etiqueta: 'Nosotros', href: `${basePath}/nosotros` },
    { etiqueta: 'Servicios', href: `${basePath}/servicios` },
    { etiqueta: 'Contactos', href: `${basePath}/contactos` },
    { etiqueta: 'Descargas', href: `${basePath}/descargas` },
  ];

  function esRutaActiva(href: string) {
    if (href === basePath) {
      return pathname === basePath || pathname === `${basePath}/`;
    }
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* 1. Logo UNELLEZ (regresa al portal principal `/`) */}
          <Link
            href="/"
            onClick={() => setMenuAbierto(false)}
            className="flex items-center gap-2.5 shrink-0 group focus:outline-hidden"
            aria-label="Volver al portal principal UNELLEZ"
          >
            <div className="w-10 h-10 flex items-center justify-center text-[#F08324] transition-transform duration-200 group-hover:scale-105">
              <svg
                width="44"
                height="44"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M22.5963 0L22.6218 10.946C22.6218 10.946 22.5325 12.471 24.0204 12.471C25.7328 12.471 28.4049 12.4684 28.4049 12.4684V13.7619L21.43 13.7723C21.43 13.7723 19.0029 13.9909 19.0029 10.9382C19.0029 7.88549 19.008 1.86858 19.008 1.86858L22.5937 0H22.5963Z" fill="#F08324" />
                <path d="M17.8546 2.4904V13.4364C17.8546 13.4364 17.7856 15.0473 19.4139 15.0473H33.083V16.2445L16.8848 16.2575C16.8848 16.2575 14.4424 16.424 14.4424 13.3635C14.4424 10.8808 14.4424 4.27569 14.4424 4.27569L17.8571 2.48779L17.8546 2.4904Z" fill="#F08324" />
                <path d="M13.2045 4.89762V16.1221C13.2045 16.1221 13.1483 17.4754 15.019 17.4754C16.8897 17.4754 37.669 17.4832 37.669 17.4832V18.7402H12.2398C12.2398 18.7402 9.58813 18.8313 9.58813 15.6484C9.58813 13.9881 9.59834 6.78441 9.59834 6.78441L13.2019 4.89502L13.2045 4.89762Z" fill="#F08324" />
                <path d="M8.61366 7.30762L8.62387 17.9517C8.62387 17.9517 8.64939 19.75 10.9361 19.75C12.8731 19.75 42.4291 19.7344 42.4291 19.7344V21.1996L7.58261 21.2022C7.58261 21.2022 4.79825 21.0669 4.7906 17.5067C4.78549 14.8418 4.7906 9.29591 4.7906 9.29591L8.61111 7.31022L8.61366 7.30762Z" fill="#F08324" />
                <path d="M3.61123 9.78516V20.8639C3.61123 20.8639 3.58827 22.1417 5.54318 22.1443C7.6844 22.1443 41.949 22.1287 41.949 22.1287C41.949 22.1287 45.0779 22.3993 45.0779 25.2673V33.8372L41.6836 35.6277V24.9732C41.6836 24.9732 41.7015 23.5574 40.2595 23.5574C39.2106 23.5574 2.97831 23.5678 2.97831 23.5678C2.97831 23.5678 0 23.5861 0 21.3271V11.6772L3.61379 9.78776L3.61123 9.78516Z" fill="#F08324" />
                <path d="M36.4542 38.5789L36.444 27.357C36.444 27.357 36.5588 26.1443 35.0403 26.1443H2.59277V24.7285H37.6741C37.6741 24.7285 40.2849 24.8144 40.2849 28.0415V36.5307L36.4567 38.5763L36.4542 38.5789Z" fill="#F08324" />
                <path d="M22.6345 45.9313L22.6116 35.0711C22.6116 35.0711 22.7673 33.442 21.0497 33.442H16.8106L16.803 32.1069L23.1424 32.1147C23.1424 32.1147 26.2075 32.0757 26.2075 35.1076V44.0237L22.6345 45.9313Z" fill="#F08324" />
                <path d="M27.0218 43.5967V32.1145C27.0218 32.1145 27.0473 30.8419 25.8299 30.8445C24.6968 30.8445 12.0103 30.8445 12.0103 30.8445V29.8062H28.3846C28.3846 29.8062 28.3846 29.8062 28.3871 29.8062C28.456 29.8114 30.6304 30.0091 30.6304 32.4086V41.6344L27.0218 43.5993V43.5967Z" fill="#F08324" />
                <path d="M31.8633 41.0178V29.9729C31.8633 29.9729 31.9143 28.6248 30.0436 28.6248C28.1729 28.6248 7.39111 28.617 7.39111 28.617V27.3704L32.9684 27.3652C32.9684 27.3652 35.472 27.4225 35.472 30.254C35.472 31.9039 35.472 39.0894 35.472 39.0894L31.8633 41.0152V41.0178Z" fill="#F08324" />
              </svg>
            </div>
            <span className="font-['Inter'] text-2xl font-black tracking-tight text-[#F08324]">
              UNELLEZ
            </span>
          </Link>

          {/* 2. Navegación Central del Subportal + Lupa (Desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
            <nav
              className="flex items-center gap-6 lg:gap-7"
              aria-label={`Navegación del subportal ${siglas}`}
            >
              {enlaces.map((enlace) => {
                const activo = esRutaActiva(enlace.href);
                return (
                  <Link
                    key={enlace.href}
                    href={enlace.href}
                    className={`text-sm transition-colors duration-150 relative py-1 ${activo
                        ? 'text-[#F08324] font-semibold'
                        : 'text-gray-700 font-medium hover:text-[#F08324]'
                      }`}
                  >
                    {enlace.etiqueta}
                    {activo && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F08324] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Botón de búsqueda interactivo */}
            <button
              type="button"
              onClick={() => setBusquedaAbierta((prev) => !prev)}
              className="p-2 rounded-full text-slate-700 hover:text-[#F08324] hover:bg-orange-50 transition-colors cursor-pointer"
              aria-label={`Buscar en ${siglas}`}
              aria-expanded={busquedaAbierta}
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* 3. Franja decorativa derecha con degradado cálido/durazno (Desktop) */}
          <div
            className="hidden lg:flex items-center justify-end h-11 w-56 xl:w-72 rounded-xl bg-gradient-to-r from-orange-50/20 via-orange-100/60 to-orange-200/75 px-4 shrink-0"
            aria-hidden="true"
          >
            <span className="text-[11px] font-bold tracking-wider text-[#F08324]/80 uppercase">
              {siglas}
            </span>
          </div>

          {/* 4. Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setMenuAbierto((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-[#F08324] hover:bg-orange-50 transition-colors cursor-pointer"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Barra de búsqueda rápida desplegable (Desktop) */}
        {busquedaAbierta && (
          <div className="hidden md:flex items-center justify-end pb-4">
            <div className="relative w-full max-w-sm">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={termino}
                onChange={(e) => setTermino(e.target.value)}
                placeholder={`Buscar trámites o artículos en ${siglas}...`}
                className="w-full rounded-full border border-orange-200 bg-white pl-10 pr-4 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#F08324]/30"
              />
            </div>
          </div>
        )}
      </div>

      {/* 5. Menú desplegable móvil */}
      {menuAbierto && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav
            className="px-4 py-4 flex flex-col gap-1"
            aria-label={`Navegación móvil ${siglas}`}
          >
            <div className="px-3 pb-2 mb-1 border-b border-orange-100 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-[#F08324] uppercase">
                Subportal {siglas}
              </span>
              <Link
                href="/"
                onClick={() => setMenuAbierto(false)}
                className="text-xs text-slate-500 hover:text-[#F08324]"
              >
                Volver a UNELLEZ
              </Link>
            </div>

            {enlaces.map((enlace) => {
              const activo = esRutaActiva(enlace.href);
              return (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  onClick={() => setMenuAbierto(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activo
                      ? 'text-[#F08324] bg-orange-50 font-semibold'
                      : 'text-gray-700 hover:text-[#F08324] hover:bg-gray-50'
                    }`}
                >
                  {enlace.etiqueta}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
