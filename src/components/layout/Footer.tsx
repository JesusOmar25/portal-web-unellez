import Link from 'next/link';
import type { InfoInstitucional, RedSocial } from '@/types/cms';

interface FooterProps {
  info: InfoInstitucional;
}

/**
 * Componente auxiliar para renderizar los iconos de redes sociales
 */
function IconoRedSocial({ plataforma }: { plataforma: RedSocial['plataforma'] }) {
  switch (plataforma) {
    case 'twitter':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.028.094-1.267.288-.344.279-.479.794-.479 1.802v1.897h3.913l-.541 3.667h-3.372v7.98h-5.07Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Footer Institucional UNELLEZ
 * 
 * Es un React Server Component estilizado con fondo azul marino institucional (#0F172A).
 * Demuestra:
 * 1. Renderizado de colecciones tipadas (`enlacesRapidos`, `redesSociales`) usando `.map()`.
 * 2. Uso obligatorio del prop `key={enlace.id}` para la reconciliación del DOM virtual en React.
 */
export default function Footer({ info }: FooterProps) {
  return (
    <footer className="w-full bg-[#0F172A] text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-slate-800/80">
          
          {/* Columna 1: Identidad Institucional y Dirección */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              {/* Isotipo gráfico UNELLEZ */}
              <div className="w-8 h-8 text-[#F08324]">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V14H14C11.7909 14 10 15.7909 10 18V20H8V12Z" fill="#F08324" />
                  <path d="M16 20C16 17.7909 17.7909 16 20 16H28C30.2091 16 32 17.7909 32 20V22H22C19.7909 22 18 23.7909 18 26V28H16V20Z" fill="#F08324" fillOpacity="0.85" />
                  <path d="M24 28C24 25.7909 25.7909 24 28 24H32V30C32 32.2091 30.2091 34 28 34H20V32C22.2091 32 24 30.2091 24 28Z" fill="#F08324" fillOpacity="0.7" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {info.siglas}
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {info.direccion}
            </p>

            <div className="space-y-1.5 text-xs text-gray-400 pt-1">
              <p className="flex items-center gap-2">
                <span className="text-[#F08324] font-medium">✉</span>
                <a href={`mailto:${info.correoContacto}`} className="hover:text-white transition-colors">
                  {info.correoContacto}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#F08324] font-medium">🏛</span>
                <span>{info.rif}</span>
              </p>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (iterados con .map) */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5 text-xs">
              {info.enlacesRapidos.map((enlace) => (
                <li key={enlace.id}>
                  <Link
                    href={enlace.url}
                    target={enlace.esExterno ? '_blank' : undefined}
                    rel={enlace.esExterno ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#F08324] transition-colors duration-150 group"
                  >
                    <span className="text-gray-500 group-hover:text-[#F08324] transition-colors">›</span>
                    <span>{enlace.etiqueta}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Síguenos
            </h3>
            <div className="flex items-center gap-3">
              {info.redesSociales.map((red) => (
                <a
                  key={red.plataforma}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#F08324] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label={`Seguir en ${red.plataforma}`}
                >
                  <IconoRedSocial plataforma={red.plataforma} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Barra inferior de derechos reservados */}
        <div className="mt-8 text-center text-[11px] text-gray-400">
          <p>© 2026 UNELLEZ. Todos los Derechos Reservados. Proyecto en desarrollo.</p>
        </div>

      </div>
    </footer>
  );
}
