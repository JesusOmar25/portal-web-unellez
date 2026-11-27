import Image from 'next/image';

interface NewsSectionBannerProps {
  titulo?: string;
}

/**
 * Banner Superior de Sección de Noticias (Server Component)
 *
 * Presenta la imagen institucional del aula universitaria con filtro cálido
 * oscuro/ámbar y el título centrado en blanco negrita, siguiendo el diseño de Figma.
 */
export default function NewsSectionBanner({
  titulo = 'Noticias Destacadas',
}: NewsSectionBannerProps) {
  return (
    <section
      aria-label={titulo}
      className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 pt-3"
    >
      <div className="relative h-36 sm:h-44 lg:h-52 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs flex items-end justify-center pb-6 sm:pb-8">
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

        {/* Título centrado en blanco y negrita */}
        <p className="relative z-10 text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white text-center tracking-tight drop-shadow-xs px-4">
          {titulo}
        </p>
      </div>
    </section>
  );
}
