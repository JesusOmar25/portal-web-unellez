import Image from 'next/image';

interface NewsSectionBannerProps {
  titulo?: string;
  alineacion?: 'centro' | 'izquierda';
  varianteContenedor?: 'amplio' | 'subportal';
}

/**
 * Banner Superior Institucional de Sección (Server Component)
 *
 * Presenta la imagen institucional del aula universitaria con filtro cálido
 * oscuro/ámbar y el título en blanco negrita. Soporta alineación centrada
 * (por defecto) o inferior izquierda (`/universidad`), y ancho `amplio`
 * (`max-w-[1440px]`) o `subportal` (`max-w-6xl`) para vistas de direcciones.
 */
export default function NewsSectionBanner({
  titulo = 'Noticias Destacadas',
  alineacion = 'centro',
  varianteContenedor = 'amplio',
}: NewsSectionBannerProps) {
  const esIzquierda = alineacion === 'izquierda';
  const claseContenedor =
    varianteContenedor === 'subportal'
      ? 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'
      : 'w-full max-w-[1440px] mx-auto px-3 sm:px-5 pt-3';

  return (
    <section aria-label={titulo} className={claseContenedor}>
      <div
          className={`relative min-h-[140px] sm:min-h-[200px] lg:min-h-[240px] w-full rounded-2xl overflow-hidden shadow-xs flex items-end px-6 py-8 sm:py-10 ${esIzquierda
          ? 'justify-start sm:px-12 lg:px-20'
          : 'justify-center'
          }`}
      >
        {/* Imagen institucional de fondo */}
        <Image
          src="/images/hero-aula-unellez.jpg"
          alt="Estudiantes en aula universitaria UNELLEZ"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center pointer-events-none"
        />

        {/* Filtro cálido ámbar/naranja + oscurecimiento inferior para contraste */}
        <div
          className="absolute inset-0 bg-[#F08324]/35 mix-blend-multiply pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-[#F08324]/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Título en blanco y negrita */}
        <h1
          className={`relative z-10 text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight drop-shadow-xs ${esIzquierda ? 'text-left' : 'text-center'
            }`}
        >
          {titulo}
        </h1>
      </div>
    </section>
  );
}
