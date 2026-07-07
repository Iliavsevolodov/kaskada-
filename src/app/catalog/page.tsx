import { ProductCard } from '@/components/ProductCard';
import { SiteHeader } from '@/components/SiteHeader';
import { categories, products } from '@/lib/data';

export default function CatalogPage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="section-label text-xs font-bold text-gold">Каталог</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Товары локальных брендов</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">Витрина MVP показывает категории, карточки товаров, цену и рейтинг. Позже здесь появятся фильтры, корзина, оплата и реальные остатки.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold" key={category}>{category}</span>)}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </main>
  );
}
