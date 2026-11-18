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

                  <path d="M34.1281 36.1169L34.1185 25.6112C34.1185 25.6112 34.226 24.4758 32.8044 24.4758H2.42749V23.1504H35.2701C35.2701 23.1504 37.7143 23.2308 37.7143 26.2519V34.1995L34.1304 36.1145L34.1281 36.1169Z" fill="#EA580C" />
                  <path d="M21.1901 42.9998L21.1686 32.8327C21.1686 32.8327 21.3144 31.3075 19.7064 31.3075H15.7379L15.7307 30.0576L21.6656 30.0649C21.6656 30.0649 24.5351 30.0284 24.5351 32.8668V41.2139L21.1901 42.9998Z" fill="#EA580C" />
                  <path d="M25.2975 40.8148V30.0654C25.2975 30.0654 25.3214 28.874 24.1817 28.8764C23.1209 28.8764 11.2439 28.8764 11.2439 28.8764V27.9043H26.5733C26.5733 27.9043 26.5733 27.9043 26.5757 27.9043C26.6402 27.9092 28.6759 28.0943 28.6759 30.3407V38.9777L25.2975 40.8172V40.8148Z" fill="#EA580C" />
                  <path d="M21.1543 0L21.1782 10.2475C21.1782 10.2475 21.0946 11.6752 22.4875 11.6752C24.0907 11.6752 26.5923 11.6728 26.5923 11.6728V12.8837L20.0625 12.8934C20.0625 12.8934 17.7903 13.0981 17.7903 10.2402C17.7903 7.38229 17.7951 1.74933 17.7951 1.74933L21.152 0H21.1543Z" fill="#EA580C" />
                  <path d="M16.7152 2.33154V12.579C16.7152 12.579 16.6507 14.0872 18.175 14.0872H30.9718V15.2079L15.8073 15.2201C15.8073 15.2201 13.5208 15.376 13.5208 12.5108C13.5208 10.1865 13.5208 4.00291 13.5208 4.00291L16.7176 2.3291L16.7152 2.33154Z" fill="#EA580C" />
                  <path d="M12.3619 4.58544V15.0936C12.3619 15.0936 12.3093 16.3606 14.0606 16.3606C15.812 16.3606 35.2652 16.3679 35.2652 16.3679V17.5447H11.4587C11.4587 17.5447 8.97632 17.6299 8.97632 14.6502C8.97632 13.0958 8.98587 6.35183 8.98587 6.35183L12.3595 4.58301L12.3619 4.58544Z" fill="#EA580C" />
                  <path d="M8.06364 6.84131L8.0732 16.8062C8.0732 16.8062 8.09709 18.4897 10.2379 18.4897C12.0513 18.4897 39.7212 18.4751 39.7212 18.4751V19.8468L7.09838 19.8492C7.09838 19.8492 4.49171 19.7225 4.48455 16.3896C4.47977 13.8947 4.48455 8.70272 4.48455 8.70272L8.06125 6.84375L8.06364 6.84131Z" fill="#EA580C" />
                  <path d="M3.38079 9.16113V19.5329C3.38079 19.5329 3.35928 20.7292 5.18945 20.7316C7.19403 20.7316 39.2721 20.717 39.2721 20.717C39.2721 20.717 42.2013 20.9704 42.2013 23.6553V31.6783L39.0236 33.3546V23.38C39.0236 23.38 39.0403 22.0546 37.6904 22.0546C36.7084 22.0546 2.78825 22.0643 2.78825 22.0643C2.78825 22.0643 0 22.0814 0 19.9666V10.9324L3.38318 9.16357L3.38079 9.16113Z" fill="#EA580C" />
                  <path d="M29.8297 38.4V28.0599C29.8297 28.0599 29.8775 26.7979 28.1262 26.7979C26.3748 26.7979 6.91919 26.7906 6.91919 26.7906V25.6235L30.8643 25.6187C30.8643 25.6187 33.2081 25.6723 33.2081 28.3231C33.2081 29.8677 33.2081 36.5946 33.2081 36.5946L29.8297 38.3976V38.4Z" fill="#EA580C" />

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
                <span className="text-[#F08324] font-medium"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7266 3.47266C13.8359 3.39062 14 3.47266 14 3.60938V9.1875C14 9.92578 13.3984 10.5 12.6875 10.5H1.3125C0.574219 10.5 0 9.92578 0 9.1875V3.60938C0 3.47266 0.136719 3.39062 0.246094 3.47266C0.875 3.96484 1.66797 4.56641 4.45703 6.58984C5.03125 7 6.01562 7.90234 7 7.90234C7.95703 7.90234 8.96875 7 9.51562 6.58984C12.3047 4.56641 13.0977 3.96484 13.7266 3.47266ZM7 7C6.34375 7.02734 5.44141 6.20703 4.97656 5.87891C1.33984 3.25391 1.06641 3.00781 0.246094 2.35156C0.0820312 2.24219 0 2.05078 0 1.83203V1.3125C0 0.601562 0.574219 0 1.3125 0H12.6875C13.3984 0 14 0.601562 14 1.3125V1.83203C14 2.05078 13.8906 2.24219 13.7266 2.35156C12.9062 3.00781 12.6328 3.25391 8.99609 5.87891C8.53125 6.20703 7.62891 7.02734 7 7Z" fill="#EA580C" />
                </svg>
                </span>
                <a href={`mailto:${info.correoContacto}`} className="hover:text-white transition-colors">
                  {info.correoContacto}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#F08324] font-medium"><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4375 0C15.1484 0 15.75 0.601562 15.75 1.3125V1.75H0V1.3125C0 0.601562 0.574219 0 1.3125 0H14.4375ZM0 10.9375V2.625H15.75V10.9375C15.75 11.6758 15.1484 12.25 14.4375 12.25H1.3125C0.574219 12.25 0 11.6758 0 10.9375ZM9.625 4.59375V5.03125C9.625 5.16797 9.70703 5.25 9.84375 5.25H13.7812C13.8906 5.25 14 5.16797 14 5.03125V4.59375C14 4.48438 13.8906 4.375 13.7812 4.375H9.84375C9.70703 4.375 9.625 4.48438 9.625 4.59375ZM9.625 6.34375V6.78125C9.625 6.91797 9.70703 7 9.84375 7H13.7812C13.8906 7 14 6.91797 14 6.78125V6.34375C14 6.23438 13.8906 6.125 13.7812 6.125H9.84375C9.70703 6.125 9.625 6.23438 9.625 6.34375ZM9.625 8.09375V8.53125C9.625 8.66797 9.70703 8.75 9.84375 8.75H13.7812C13.8906 8.75 14 8.66797 14 8.53125V8.09375C14 7.98438 13.8906 7.875 13.7812 7.875H9.84375C9.70703 7.875 9.625 7.98438 9.625 8.09375ZM4.8125 4.375C3.82812 4.375 3.0625 5.16797 3.0625 6.125C3.0625 7.10938 3.82812 7.875 4.8125 7.875C5.76953 7.875 6.5625 7.10938 6.5625 6.125C6.5625 5.16797 5.76953 4.375 4.8125 4.375ZM1.83203 9.98047C1.72266 10.2266 1.96875 10.5 2.24219 10.5H7.35547C7.62891 10.5 7.875 10.2539 7.76562 9.98047C7.54688 9.26953 6.89062 8.75 6.125 8.75H5.87891C5.55078 8.91406 5.19531 8.96875 4.8125 8.96875C4.40234 8.96875 4.04688 8.91406 3.71875 8.75H3.5C2.70703 8.75 2.05078 9.26953 1.83203 9.98047Z" fill="#EA580C" />
                </svg>
                </span>
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
