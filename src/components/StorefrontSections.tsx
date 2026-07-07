import { HiArrowRight, HiOutlineSparkles, HiOutlineTag, HiOutlineSquares2X2 } from 'react-icons/hi2';
import { categories, heroSlides, products, thematicFeeds } from '@/lib/data';
import { ProductCard } from './ProductCard';

export function StorefrontSections() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="hero-slider">
          {heroSlides.map((slide) => (
            <a className="relative block h-[360px] overflow-hidden rounded-[1.7rem] bg-graphite text-cream" href={slide.href} key={slide.title}>
              <img alt={slide.title} className="image-cover opacity-70" src={slide.image} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8">
                <p className="section-label text-[11px] font-bold text-gold">Kaskada editorial</p>
                <h2 className="display-font mt-3 text-4xl font-semibold leading-tight md:text-5xl">{slide.title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-cream/78">{slide.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-graphite">Открыть <HiArrowRight /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="market-rail">
          {categories.map((category) => (
            <a className="inline-flex items-center justify-between rounded-[1.25rem] border border-graphite/8 bg-white/84 px-5 py-4 text-sm font-bold text-graphite" href="/kaskada-/catalog/" key={category}>
              <span>{category}</span>
              <HiOutlineSquares2X2 className="text-neutral-400" />
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8" id="new">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Новые поступления</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Новинки платформы</h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-bold" href="/kaskada-/catalog/">Все новинки <HiArrowRight /></a>
        </div>
        <div className="market-rail">
          {products.map((product) => <ProductCard product={product} key={`new-${product.id}`} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8" id="sale">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-label text-[11px] font-bold text-neutral-500">Выгода недели</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Акции и скидки</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-graphite px-4 py-2 text-sm font-bold text-cream"><HiOutlineTag /> до 25%</span>
        </div>
        <div className="market-rail">
          {products.filter((product) => product.oldPrice).map((product) => <ProductCard product={product} key={`sale-${product.id}`} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <EditorialCard title="Beauty edit" text="Уход, аромат, текстуры и красивые ежедневные ритуалы." image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80" />
          <EditorialCard title="Home reset" text="Средства, порядок, уют и повторные покупки для дома." image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80" />
          <EditorialCard title="Gift season" text="Готовые наборы и локальные бренды для подарков." image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1000&q=80" />
        </div>
      </section>

      {thematicFeeds.map((feed) => (
        <section className="mx-auto max-w-7xl px-6 py-8" id={feed.id} key={feed.id}>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="section-label text-[11px] font-bold text-neutral-500">Подборка</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">{feed.title}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{feed.subtitle}</p>
            </div>
            <HiOutlineSparkles className="text-xl text-gold" />
          </div>
          <div className="market-rail">
            {products.filter((product) => product.tag === feed.filter || feed.filter === 'sale' && product.oldPrice).map((product) => <ProductCard product={product} key={`${feed.id}-${product.id}`} />)}
          </div>
        </section>
      ))}
    </>
  );
}

function EditorialCard({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <article className="relative h-72 overflow-hidden rounded-[1.5rem] bg-graphite text-cream">
      <img alt={title} className="image-cover opacity-72" src={image} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="display-font text-3xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-cream/76">{text}</p>
      </div>
    </article>
  );
}
