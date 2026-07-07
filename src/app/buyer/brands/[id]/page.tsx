import { BuyerBottomNav } from '@/components/BuyerBottomNav';
import { BuyerProductCard } from '@/components/BuyerProductCard';
import { buyerBrands, buyerProducts } from '@/lib/buyerData';

export function generateStaticParams() {
  return buyerBrands.map((brand) => ({ id: brand.id }));
}

export default function BuyerBrandDetailPage({ params }: { params: { id: string } }) {
  const brand = buyerBrands.find((item) => item.id === params.id) ?? buyerBrands[0];
  const brandProducts = buyerProducts.filter((item) => item.brand.toLowerCase().includes(brand.name.split(' ')[0].toLowerCase()) || item.brand === brand.name).slice(0, 8);
  const relatedProducts = brandProducts.length ? brandProducts : buyerProducts.slice(0, 8);

  return (
    <main className="min-h-screen pb-24 text-graphite">
      <header className="sticky top-0 z-50 border-b border-graphite/10 bg-white/95 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/buyer/brands/">
            <span className="flex h-10 w-10 items-center justify-center bg-graphite text-xs font-black text-gold">K</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="section-label mt-1 text-[10px] font-bold text-neutral-500">витрина бренда</p>
            </div>
          </a>
          <a className="premium-button bg-[#ff4d6d] text-white" href="/kaskada-/buyer/brands/">Все бренды</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="overflow-hidden border border-graphite/10 bg-white shadow-soft">
          <div className="relative h-[340px] overflow-hidden">
            <img alt={brand.name} className="h-full w-full object-cover" src={brand.cover} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-4">
                <img alt={brand.name} className="h-20 w-20 border-4 border-white object-cover" src={brand.logo} />
                <div className="text-white">
                  <p className="section-label text-[10px] font-bold text-[#f6d44d]">{brand.category}</p>
                  <h1 className="display-font mt-2 text-4xl font-semibold">{brand.name}</h1>
                  <p className="mt-2 text-sm text-white/78">{brand.tagline}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 border border-white/25 bg-white/12 p-3 text-center text-white backdrop-blur-sm">
                <div><p className="text-xl font-black">{brand.rating}</p><p className="text-xs text-white/70">рейтинг</p></div>
                <div><p className="text-xl font-black">{brand.products}</p><p className="text-xs text-white/70">товаров</p></div>
                <div><p className="text-xl font-black">{brand.followers}</p><p className="text-xs text-white/70">подписчики</p></div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="max-w-3xl text-sm leading-7 text-neutral-600">{brand.description}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <p className="section-label text-[11px] font-bold text-neutral-500">Товары бренда</p>
        <h2 className="display-font mt-2 text-3xl font-semibold">Подборка {brand.name}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => <BuyerProductCard product={product} key={product.id} />)}
        </div>
      </section>

      <BuyerBottomNav />
    </main>
  );
}
