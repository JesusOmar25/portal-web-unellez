import Image from 'next/image';
import Link from 'next/link';
import type { Noticia } from '@/types/cms';

interface RelatedNewsSidebarProps {
  noticias: Noticia[];
}

/**
 * Columna Lateral "Mas noticias" (Server Component)
 *
 * Muestra noticias relacionadas excluyendo la actual:
 * - Primera tarjeta: miniatura rectangular (`aspect-[16/10]`), título y extracto.
 * - Tarjetas siguientes: pill de categoría en naranja suave, título y extracto opcional.
 * Cada tarjeta completa navega hacia `/noticias/[slug]`.
 */
export default function RelatedNewsSidebar({ noticias }: RelatedNewsSidebarProps) {
  if (!noticias || noticias.length === 0) {
    return null;
  }

  return (
    <aside
      aria-label="Mas noticias"
      className="lg:col-span-4 lg:border-l lg:border-orange-100/90 lg:pl-8 xl:pl-10"
    >
      <h2 className="text-lg font-bold text-slate-900 mb-5">Mas noticias</h2>

      <div className="space-y-6">
        {noticias.map((item, idx) => {
          const esPrimera = idx === 0;

          return (
            <article key={item.id}>
              <Link
                href={`/noticias/${item.slug}`}
                className="block group cursor-pointer rounded-xl p-2 -m-2 hover:bg-gray-50/80 transition-colors duration-200"
              >
                {esPrimera ? (
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-gray-100 shadow-xs">
                    <Image
                      src={item.imagenUrl}
                      alt={item.imagenAlt || item.titulo}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <span className="inline-block bg-orange-50 text-orange-500 text-[11px] font-semibold px-2.5 py-0.5 rounded-md mb-2">
                    {item.categoria}
                  </span>
                )}

                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                  {item.titulo}
                </h3>

                {item.resumen && (
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {item.resumen}
                  </p>
                )}
              </Link>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
