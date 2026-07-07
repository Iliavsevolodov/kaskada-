import { BrandCard } from '@/components/BrandCard';
import { SiteHeader } from '@/components/SiteHeader';
import { brands } from '@/lib/data';

export default function BrandsPage() {
  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="section-label text-xs font-bold text-gold">Бренды</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Витрина локальных производителей</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">У бренда будет страница, рейтинг, город, категория и товары. Это основа будущего кабинета продавца.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => <BrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>
    </main>
  );
}
