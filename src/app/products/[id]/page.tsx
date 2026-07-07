import { ProductCard } from '@/components/ProductCard';
import { SiteHeader } from '@/components/SiteHeader';
import { products } from '@/lib/data';
import { calculateOrderEconomy, money } from '@/lib/finance';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id) ?? products[0];
  const economy = calculateOrderEconomy(product.price);
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen text-graphite">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="card-glass reveal-up overflow-hidden rounded-[1.8rem] shadow-soft">
          <div className="product-visual h-[520px] bg-white">
            <img alt={product.name} className="image-cover" src={product.image} />
            <span className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-700">{product.badge ?? product.tag}</span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-5 text-sm">
            <div className="stat-tile"><p className="font-bold">{product.rating}</p><p className="text-neutral-500">рейтинг</p></div>
            <div className="stat-tile"><p className="font-bold">{product.category}</p><p className="text-neutral-500">категория</p></div>
            <div className="stat-tile"><p className="font-bold">{product.tag}</p><p className="text-neutral-500">подборка</p></div>
          </div>
        </div>

        <div className="reveal-up">
          <p className="section-label text-xs font-bold text-neutral-500">Карточка товара</p>
          <h1 className="display-font mt-3 text-5xl font-semibold leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-3 text-lg font-semibold text-forest">{product.brand}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">{product.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="card-glass rounded-[1.4rem] p-5 shadow-soft"><p className="text-sm font-bold text-neutral-500">Цена</p><p className="mt-2 text-2xl font-bold">{money(product.price)}</p></div>
            <div className="card-glass rounded-[1.4rem] p-5 shadow-soft"><p className="text-sm font-bold text-neutral-500">Бонус</p><p className="mt-2 text-2xl font-bold">{money(product.cashback)}</p></div>
            <div className="card-glass rounded-[1.4rem] p-5 shadow-soft"><p className="text-sm font-bold text-neutral-500">Продавцу</p><p className="mt-2 text-2xl font-bold">{money(economy.sellerPayout)}</p></div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="premium-button bg-graphite text-cream" type="button">Добавить в корзину</button>
            <button className="premium-button border border-graphite/10 bg-white text-graphite" type="button">Рекомендовать</button>
            <a className="premium-button border border-graphite/10 bg-white text-graphite" href="/kaskada-/catalog/">Назад в каталог</a>
          </div>

          <div className="mt-8 rounded-[1.6rem] bg-graphite p-6 text-cream">
            <p className="section-label text-xs font-bold text-gold">Экономика заказа</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-xl font-bold">{money(economy.referralFund)}</p><p className="text-sm text-cream/60">реферальный фонд</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-xl font-bold">{money(economy.platformFund)}</p><p className="text-sm text-cream/60">фонд платформы</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><p className="text-xl font-bold">20%</p><p className="text-sm text-cream/60">комиссия</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="section-label text-xs font-bold text-neutral-500">Похожие товары</p>
        <h2 className="display-font mt-3 text-4xl font-semibold">Можно добавить в подборку</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {related.map((item) => <ProductCard product={item} key={item.id} />)}
        </div>
      </section>
    </main>
  );
}
