import Image from 'next/image';
import Link from 'next/link';
import type { ArticuloSubportal } from '@/types/cms';

interface SubportalLatestArticlesProps {
  articulos: ArticuloSubportal[];
}

/**
 * Columna Derecha "Últimos artículos" del Subportal (Server Component)
 *
 * Presenta un separador vertical sutil en escritorio, el pill naranja
 * "Últimos artículos" y un sub-grid de 2 columnas:
 * - Izquierda: Artículo 0 con imagen superior (`aspect-[16/10]`), título y resumen.
 * - Derecha: Artículos 1, 2 y 3 apilados verticalmente.
 */
export default function SubportalLatestArticles({
  articulos,
}: SubportalLatestArticlesProps) {
  if (!articulos || articulos.length === 0) {
    return null;
  }

  const [principal, ...secundarios] = articulos;
  const listaApilada = secundarios.slice(0, 3);

  return (
    <div className="lg:col-span-6 lg:border-l lg:border-orange-200/70 lg:pl-8 flex flex-col">
      <div className="mb-4">
        <span className="inline-block bg-[#F08324] text-white text-xs font-semibold px-3.5 py-1 rounded-md shadow-xs">
          Últimos artículos
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
        {/* Subcolumna izquierda: Artículo principal con imagen */}
        {principal && (
          <article className="flex flex-col">
            <Link
              href={`/noticias/${principal.slug}`}
              className="flex flex-col h-full rounded-xl p-2 -m-2 group cursor-pointer hover:bg-gray-50/80 transition-colors duration-200"
            >
              {principal.imagenUrl && (
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-gray-100 shadow-xs">
                  <Image
                    src={principal.imagenUrl}
                    alt={principal.titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#F08324] transition-colors">
                {principal.titulo}
              </h3>

              {principal.resumen && (
                <p className="text-xs text-slate-500 line-clamp-3 mt-1.5 leading-relaxed">
                  {principal.resumen}
                </p>
              )}
            </Link>
          </article>
        )}

        {/* Subcolumna derecha: 3 artículos apilados */}
        <div className="flex flex-col justify-between gap-5">
          {listaApilada.map((articulo) => (
            <article key={articulo.id}>
              <Link
                href={`/noticias/${articulo.slug}`}
                className="block rounded-xl p-2 -m-2 group cursor-pointer hover:bg-gray-50/80 transition-colors duration-200"
              >
                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#F08324] transition-colors">
                  {articulo.titulo}
                </h3>

                {articulo.resumen && (
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {articulo.resumen}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
