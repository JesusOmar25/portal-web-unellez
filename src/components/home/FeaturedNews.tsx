import Image from 'next/image';
import Link from 'next/link';
import type { Noticia } from '@/types/cms';

interface FeaturedNewsProps {
  noticias: Noticia[];
}

/**
 * Sección de Noticias Destacadas
 *
 * Es un React Server Component puro: no requiere `'use client'` porque
 * solo muestra información obtenida del servidor y enlaces de navegación (`<Link>`).
 * Utiliza un Grid asimétrico de 12 columnas (6 + 3 + 3) en escritorio.
 */
export default function FeaturedNews({ noticias }: FeaturedNewsProps) {
  if (!noticias || noticias.length === 0) {
    return null;
  }

  // Separamos las noticias según su jerarquía visual
  const principal = noticias.find((n) => n.esDestacadaPrincipal) ?? noticias[0];
  const secundaria = noticias.find(
    (n) => n.esDestacadaSecundaria && n.id !== principal.id
  );
  const compactas = noticias
    .filter((n) => n.id !== principal.id && n.id !== secundaria?.id)
    .slice(0, 2);

  return (
    <section aria-label="Noticias Destacadas" className="w-full py-10">
      {/* Encabezado: título centrado y enlace "Ver todas →" a la derecha */}
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 mb-8">
        <div className="hidden sm:block" aria-hidden="true" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center tracking-tight">
          Noticias Destacadas
        </h2>
        <div className="flex justify-center sm:justify-end">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F08324] hover:text-[#d87118] transition-colors group"
          >
            <span>Ver todas</span>
            <span
              className="inline-block transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Grid Asimétrico de 12 columnas en escritorio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Columna Izquierda (6 cols): Noticia Destacada Principal */}
        <article className="lg:col-span-6">
          <Link
            href={`/noticias/${principal.slug}`}
            className="relative flex flex-col justify-end h-full min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={principal.imagenUrl}
              alt={principal.imagenAlt || principal.titulo}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Degradado oscuro inferior para contraste del texto */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 p-6 sm:p-7">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#F08324] rounded-md mb-3 shadow-xs">
                {principal.categoria}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-orange-200 transition-colors">
                {principal.titulo}
              </h3>
            </div>
          </Link>
        </article>

        {/* Columna Central (3 cols): Noticia Secundaria con imagen superior */}
        {secundaria && (
          <article className="lg:col-span-3 flex flex-col">
            <Link
              href={`/noticias/${secundaria.slug}`}
              className="flex flex-col h-full group"
            >
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-gray-100 shadow-xs">
                <Image
                  src={secundaria.imagenUrl}
                  alt={secundaria.imagenAlt || secundaria.titulo}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#F08324] transition-colors">
                {secundaria.titulo}
              </h3>
              <p className="mt-2.5 text-xs text-slate-500 leading-relaxed line-clamp-3">
                {secundaria.resumen}
              </p>
            </Link>
          </article>
        )}

        {/* Columna Derecha (3 cols): 2 Noticias Compactas sin imagen */}
        <div className="lg:col-span-3 flex flex-col justify-between divide-y divide-gray-200 lg:border-l lg:border-gray-100 lg:pl-6">
          {compactas.map((noticia, idx) => (
            <article
              key={noticia.id}
              className={idx === 0 ? 'pb-5' : 'pt-5'}
            >
              <Link
                href={`/noticias/${noticia.slug}`}
                className="block group"
              >
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold text-[#F08324] bg-orange-50 rounded-md mb-2">
                  {noticia.categoria}
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#F08324] transition-colors">
                  {noticia.titulo}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {noticia.resumen}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

