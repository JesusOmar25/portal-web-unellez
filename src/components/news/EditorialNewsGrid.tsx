import Image from 'next/image';
import Link from 'next/link';
import type { Noticia } from '@/types/cms';

interface EditorialNewsGridProps {
  noticias: Noticia[];
}

/**
 * Tarjeta Hero Grande (6 columnas en escritorio)
 * Muestra imagen de fondo completa, degradado oscuro inferior, badge naranja
 * de categoría y titular blanco en negrita.
 */
function TarjetaHero({ noticia, prioridad = false }: { noticia: Noticia; prioridad?: boolean }) {
  return (
    <Link
      href={`/noticias/${noticia.slug}`}
      className="relative flex flex-col justify-end h-full min-h-[340px] lg:min-h-[380px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Image
        src={noticia.imagenUrl}
        alt={noticia.imagenAlt || noticia.titulo}
        fill
        priority={prioridad}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 p-6 sm:p-7">
        <span className="inline-block bg-[#F08324] text-white text-xs font-semibold px-3 py-1 rounded-md mb-3 shadow-xs">
          {noticia.categoria}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-orange-200 transition-colors">
          {noticia.titulo}
        </h2>
      </div>
    </Link>
  );
}

/**
 * Tarjeta Compacta sin imagen (pill naranja suave, título y extracto)
 */
function TarjetaCompacta({
  noticia,
  lineasResumen = 'line-clamp-3',
}: {
  noticia: Noticia;
  lineasResumen?: 'line-clamp-2' | 'line-clamp-3';
}) {
  return (
    <article>
      <Link
        href={`/noticias/${noticia.slug}`}
        className="block rounded-xl p-2 -m-2 group cursor-pointer hover:bg-gray-50/80 transition-colors duration-200"
      >
        <span className="inline-block bg-orange-50 text-[#F08324] text-[11px] font-semibold px-2.5 py-0.5 rounded-md mb-2">
          {noticia.categoria}
        </span>
        <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#F08324] transition-colors">
          {noticia.titulo}
        </h3>
        {noticia.resumen && (
          <p className={`text-xs text-slate-500 leading-relaxed mt-1.5 ${lineasResumen}`}>
            {noticia.resumen}
          </p>
        )}
      </Link>
    </article>
  );
}

/**
 * Grid Editorial Asimétrico de Noticias (Server Component)
 *
 * Organiza las 9 noticias en dos bloques asimétricos de 12 columnas fieles a Figma:
 * - Bloque 1 (índices 0..3): Hero izquierda (6 cols) + Vertical con foto (3 cols) + 2 Compactas (3 cols).
 * - Bloque 2 invertido (índices 4..8): Sub-grid 2x2 de 4 Compactas (6 cols) + Hero derecha (6 cols).
 */
export default function EditorialNewsGrid({ noticias }: EditorialNewsGridProps) {
  if (!noticias || noticias.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-slate-500 text-sm">
          No hay noticias publicadas en este momento.
        </p>
      </section>
    );
  }

  const [n0, n1, n2, n3, n4, n5, n6, n7, n8] = noticias;
  const compactasBloque1 = [n2, n3].filter(Boolean);
  const columnaIzqBloque2 = [n4, n6].filter(Boolean);
  const columnaDerBloque2 = [n5, n7].filter(Boolean);

  return (
    <section
      aria-label="Listado editorial de noticias"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
    >
      {/* Bloque 1 — Fila Superior (Primeras 4 noticias: índices 0 a 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Izquierda (6 cols): Noticia 0 Hero grande */}
        {n0 && (
          <article className="lg:col-span-6">
            <TarjetaHero noticia={n0} prioridad />
          </article>
        )}

        {/* Centro (3 cols): Noticia 1 vertical con imagen superior */}
        {n1 && (
          <article className="lg:col-span-3 flex flex-col lg:border-l lg:border-orange-200/70 lg:pl-6">
            <Link
              href={`/noticias/${n1.slug}`}
              className="flex flex-col h-full rounded-2xl p-2 -m-2 group cursor-pointer hover:bg-gray-50/80 transition-colors duration-200"
            >
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-gray-100 shadow-xs">
                <Image
                  src={n1.imagenUrl}
                  alt={n1.imagenAlt || n1.titulo}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#F08324] transition-colors">
                {n1.titulo}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-3 mt-1.5 leading-relaxed">
                {n1.resumen}
              </p>
            </Link>
          </article>
        )}

        {/* Derecha (3 cols): Noticias 2 y 3 apiladas compactas */}
        {compactasBloque1.length > 0 && (
          <div className="lg:col-span-3 flex flex-col justify-between gap-6 lg:border-l lg:border-orange-200/70 lg:pl-6">
            {compactasBloque1.map((noticia) => (
              <TarjetaCompacta
                key={noticia.id}
                noticia={noticia}
                lineasResumen="line-clamp-2"
              />
            ))}
          </div>
        )}
      </div>

      {/* Bloque 2 — Fila Inferior Invertida (Siguientes 5 noticias: índices 4 a 8) */}
      {(columnaIzqBloque2.length > 0 || columnaDerBloque2.length > 0 || n8) && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Izquierda (6 cols): Sub-grid de 2 columnas con 4 tarjetas compactas (Noticias 4, 5, 6 y 7) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between gap-6">
              {columnaIzqBloque2.map((noticia) => (
                <TarjetaCompacta
                  key={noticia.id}
                  noticia={noticia}
                  lineasResumen="line-clamp-3"
                />
              ))}
            </div>

            <div className="flex flex-col justify-between gap-6 sm:border-l sm:border-orange-200/70 sm:pl-6">
              {columnaDerBloque2.map((noticia) => (
                <TarjetaCompacta
                  key={noticia.id}
                  noticia={noticia}
                  lineasResumen="line-clamp-3"
                />
              ))}
            </div>
          </div>

          {/* Derecha (6 cols): Noticia 8 Hero grande */}
          {n8 && (
            <article className="lg:col-span-6 lg:border-l lg:border-orange-200/70 lg:pl-6">
              <TarjetaHero noticia={n8} />
            </article>
          )}
        </div>
      )}
    </section>
  );
}
