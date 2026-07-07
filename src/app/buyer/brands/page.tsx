import { BuyerBrandCard } from '@/components/BuyerBrandCard';
import { BuyerBottomNav } from '@/components/BuyerBottomNav';
import { buyerBrands } from '@/lib/buyerData';

export default function BuyerBrandsPage() {
  return (
    <main className="min-h-screen pb-24 text-graphite">
      <header className="sticky top-0 z-50 border-b border-graphite/10 bg-white/95 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/buyer/">
            <span className="flex h-10 w-10 items-center justify-center bg-graphite text-xs font-black text-gold">K</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="section-label mt-1 text-[10px] font-bold text-neutral-500">бренды</p>
            </div>
          </a>
          <a className="premium-button bg-[#ff4d6d] text-white" href="/kaskada-/buyer/">В магазин</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="section-label text-[11px] font-bold text-neutral-500">Раздел брендов</p>
        <h1 className="display-font mt-2 text-4xl font-semibold">Избранные бренды маркетплейса</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">Покупатель может перейти в отдельную витрину бренда, посмотреть его товары, описание и визуальную подачу.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {buyerBrands.map((brand) => <BuyerBrandCard brand={brand} key={brand.id} />)}
        </div>
      </section>

      <BuyerBottomNav />
    </main>
  );
}
