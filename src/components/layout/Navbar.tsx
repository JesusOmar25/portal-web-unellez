import Link from 'next/link';
import type { EnlaceNavegacion } from '@/types/cms';

interface NavbarProps {
  enlaces: EnlaceNavegacion[];
}

/**
 * Navbar Institucional UNELLEZ
 * 
 * Es un React Server Component (RSC): se ejecuta y renderiza en el servidor.
 * No incluye 'use client' porque no requiere estado en el navegador (como useState o eventos de click complejos).
 * Los datos de los enlaces se reciben a través de `props` tipadas desde `src/types/cms.ts`.
 */
export default function Navbar({ enlaces }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 1. Logotipo UNELLEZ */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-hidden"
            aria-label="Ir a página de inicio UNELLEZ"
          >
            {/* Isotipo gráfico institucional en SVG */}
            <div className="w-10 h-10 flex items-center justify-center text-[#F08324] transition-transform duration-200 group-hover:scale-105">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5963 0L22.6218 10.946C22.6218 10.946 22.5325 12.471 24.0204 12.471C25.7328 12.471 28.4049 12.4684 28.4049 12.4684V13.7619L21.43 13.7723C21.43 13.7723 19.0029 13.9909 19.0029 10.9382C19.0029 7.88549 19.008 1.86858 19.008 1.86858L22.5937 0H22.5963Z" fill="url(#paint0_linear_231_1805)" />
                <path d="M17.8546 2.4904V13.4364C17.8546 13.4364 17.7856 15.0473 19.4139 15.0473H33.083V16.2445L16.8848 16.2575C16.8848 16.2575 14.4424 16.424 14.4424 13.3635C14.4424 10.8808 14.4424 4.27569 14.4424 4.27569L17.8571 2.48779L17.8546 2.4904Z" fill="url(#paint1_linear_231_1805)" />
                <path d="M13.2045 4.89762V16.1221C13.2045 16.1221 13.1483 17.4754 15.019 17.4754C16.8897 17.4754 37.669 17.4832 37.669 17.4832V18.7402H12.2398C12.2398 18.7402 9.58813 18.8313 9.58813 15.6484C9.58813 13.9881 9.59834 6.78441 9.59834 6.78441L13.2019 4.89502L13.2045 4.89762Z" fill="url(#paint2_linear_231_1805)" />
                <path d="M8.61366 7.30762L8.62387 17.9517C8.62387 17.9517 8.64939 19.75 10.9361 19.75C12.8731 19.75 42.4291 19.7344 42.4291 19.7344V21.1996L7.58261 21.2022C7.58261 21.2022 4.79825 21.0669 4.7906 17.5067C4.78549 14.8418 4.7906 9.29591 4.7906 9.29591L8.61111 7.31022L8.61366 7.30762Z" fill="url(#paint3_linear_231_1805)" />
                <path d="M3.61123 9.78516V20.8639C3.61123 20.8639 3.58827 22.1417 5.54318 22.1443C7.6844 22.1443 41.949 22.1287 41.949 22.1287C41.949 22.1287 45.0779 22.3993 45.0779 25.2673V33.8372L41.6836 35.6277V24.9732C41.6836 24.9732 41.7015 23.5574 40.2595 23.5574C39.2106 23.5574 2.97831 23.5678 2.97831 23.5678C2.97831 23.5678 0 23.5861 0 21.3271V11.6772L3.61379 9.78776L3.61123 9.78516Z" fill="url(#paint4_linear_231_1805)" />
                <path d="M36.4542 38.5789L36.444 27.357C36.444 27.357 36.5588 26.1443 35.0403 26.1443H2.59277V24.7285H37.6741C37.6741 24.7285 40.2849 24.8144 40.2849 28.0415V36.5307L36.4567 38.5763L36.4542 38.5789Z" fill="url(#paint5_linear_231_1805)" />
                <path d="M22.6345 45.9313L22.6116 35.0711C22.6116 35.0711 22.7673 33.442 21.0497 33.442H16.8106L16.803 32.1069L23.1424 32.1147C23.1424 32.1147 26.2075 32.0757 26.2075 35.1076V44.0237L22.6345 45.9313Z" fill="url(#paint6_linear_231_1805)" />
                <path d="M27.0218 43.5967V32.1145C27.0218 32.1145 27.0473 30.8419 25.8299 30.8445C24.6968 30.8445 12.0103 30.8445 12.0103 30.8445V29.8062H28.3846C28.3846 29.8062 28.3846 29.8062 28.3871 29.8062C28.456 29.8114 30.6304 30.0091 30.6304 32.4086V41.6344L27.0218 43.5993V43.5967Z" fill="url(#paint7_linear_231_1805)" />
                <path d="M31.8633 41.0178V29.9729C31.8633 29.9729 31.9143 28.6248 30.0436 28.6248C28.1729 28.6248 7.39111 28.617 7.39111 28.617V27.3704L32.9684 27.3652C32.9684 27.3652 35.472 27.4225 35.472 30.254C35.472 31.9039 35.472 39.0894 35.472 39.0894L31.8633 41.0152V41.0178Z" fill="url(#paint8_linear_231_1805)" />
                <defs>
                  <linearGradient id="paint0_linear_231_1805" x1="-58.1831" y1="110.152" x2="53.941" y2="-24.5963" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_231_1805" x1="-56.9758" y1="111.157" x2="55.1482" y2="-23.5919" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_231_1805" x1="-55.848" y1="112.093" x2="56.2735" y2="-22.6525" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_231_1805" x1="-54.6684" y1="113.075" x2="57.453" y2="-21.6739" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_231_1805" x1="-51.7083" y1="115.539" x2="60.4157" y2="-19.2067" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_231_1805" x1="-48.5847" y1="118.136" x2="63.5368" y2="-16.6095" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_231_1805" x1="-44.9734" y1="121.143" x2="67.1481" y2="-13.6059" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_231_1805" x1="-46.211" y1="120.112" x2="65.913" y2="-14.634" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_231_1805" x1="-47.3389" y1="119.175" x2="64.7852" y2="-15.5733" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EF7619" />
                    <stop offset="1" stopColor="#EF9919" />
                  </linearGradient>
                </defs>
              </svg>

            </div>

            {/* Texto de Marca UNELLEZ */}
            <span className="text-2xl font-black tracking-tight text-[#F08324]">
              UNELLEZ
            </span>
          </Link>

          {/* 2. Menú de Navegación Central (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navegación principal">
            {enlaces.map((enlace) => {
              // Comprobamos si el enlace está marcado como activo para aplicar color naranja institucional
              const esActivo = enlace.esActivo || enlace.url === '/';

              return (
                <Link
                  key={enlace.id}
                  href={enlace.url}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 ${esActivo
                    ? 'text-[#F08324] font-semibold'
                    : 'text-gray-700 hover:text-[#F08324]'
                    }`}
                >
                  {enlace.etiqueta}
                  {/* Pequeña línea indicadora sutil para el enlace activo */}
                  {esActivo && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F08324] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Botón de Acción a la Derecha */}
          <div className="flex items-center gap-3">
            <Link
              href="https://dux.unellez.edu.ve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#F08324] hover:bg-[#d87118] active:bg-[#c26111] rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Acceder a Sistema
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

