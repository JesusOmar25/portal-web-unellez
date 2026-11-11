import Image from 'next/image';
import Link from 'next/link';

interface CommunityBannerProps {
  titulo?: string;
  subtitulo?: string;
  textoBoton?: string;
  enlaceBoton?: string;
  imagenFondoUrl?: string;
}

/**
 * Banner de Comunidad Universitaria UNELLEZ
 * 
 * Es un React Server Component estilizado con Tailwind CSS.
 * Demuestra:
 * 1. Uso de props opcionales con valores predeterminados (como parámetros por defecto en PHP).
 * 2. Posicionamiento relativo/absoluto en capas (z-index) para superponer overlays oscuros sobre imágenes.
 * 3. Uso del componente `<Image />` de Next.js optimizado con la propiedad `fill`.
 */
export default function CommunityBanner({
  titulo = 'Sé parte de nuestra comunidad universitaria y siembra tu futuro.',
  subtitulo = 'Únete a la UNELLEZ y fórmate con excelencia académica en la universidad que transforma el desarrollo de nuestros llanos venezolanos.',
  textoBoton = 'Conócenos Más',
  enlaceBoton = '/universidad',
  imagenFondoUrl = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
}: CommunityBannerProps) {
  return (
    <section className="relative w-full overflow-hidden border-y-2 border-[#F08324] my-12">
      {/* 1. Imagen de fondo optimizada con Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagenFondoUrl}
          alt="Comunidad universitaria UNELLEZ"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-90"
          priority={false}
        />
        {/* 2. Capa oscura de superposición (Overlay) para asegurar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
      </div>

      {/* 3. Contenido en primer plano */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-24 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto drop-shadow-md">
          {titulo}
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
          {subtitulo}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href={enlaceBoton}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[#F08324] bg-white rounded-lg shadow-lg hover:bg-orange-50 hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {textoBoton}
          </Link>
        </div>
      </div>
    </section>
  );
}

