import { HiHeart, HiOutlineShoppingBag, HiStar } from 'react-icons/hi2';
import { BuyerBottomNav } from '@/components/BuyerBottomNav';
import { BuyerProductCard } from '@/components/BuyerProductCard';
import { buyerProducts } from '@/lib/buyerData';
import { money } from '@/lib/finance';

export function generateStaticParams() {
  return buyerProducts.map((product) => ({ id: product.id }));
}

export default function BuyerProductPage({ params }: { params: { id: string } }) {
  const product = buyerProducts.find((item) => item.id === params.id) ?? buyerProducts[0];
  const related = buyerProducts.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <main className="min-h-screen pb-24 text-[#2a1b12]">
      <header className="sticky top-0 z-50 border-b border-[#d8c3a8]/70 bg-[#fffaf2]/92 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="/kaskada-/">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2a1b12] text-xs font-black text-[#f4d27b]">К</span>
            <div>
              <p className="text-base font-black leading-none">Каскада Маркет</p>
              <p className="section-label mt-1 text-[10px] font-bold text-[#9c7a55]">карточка товара</p>
            </div>
          </a>
          <a className="premium-button bg-[#c97963] text-white" href="/kaskada-/#cart">В корзину</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="overflow-hidden rounded-[2rem] border border-[#d8c3a8]/70 bg-[#fffaf2] shadow-soft">
          <div className="relative h-[520px] overflow-hidden bg-[#efe0cd]">
            <img alt={product.name} className="h-full w-full object-cover" src={product.image} />
            <div className="absolute left-5 top-5 flex flex-col gap-2">
              <span className="rounded-full bg-[#f4d27b] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#2a1b12]">{product.badge}</span>
              {discount > 0 ? <span className="rounded-full bg-[#c97963] px-4 py-2 text-[11px] font-black text-white">-{discount}%</span> : null}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8c3a8]/70 bg-[#fffaf2] p-6 shadow-soft">
          <p className="section-label text-[11px] font-bold text-[#9c7a55]">{product.category}</p>
          <h1 className="display-font mt-3 text-4xl font-semibold leading-tight md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-base font-bold text-[#4d6b4a]">{product.brand}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#ead6ba] bg-[#fff3df] px-4 py-2 text-sm font-bold text-[#6f553a]"><HiStar className="text-[#c89b4a]" /> {product.rating} рейтинг</div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6f553a]">{product.description}</p>

          <div className="mt-7 flex flex-wrap items-baseline gap-3">
            <p className="text-4xl font-black">{money(product.price)}</p>
            {product.oldPrice ? <p className="text-base font-semibold text-[#b69a7a] line-through">{money(product.oldPrice)}</p> : null}
          </div>
          <p className="mt-2 text-sm font-bold text-[#9c7a55]">Бонус в заказ: {money(product.cashback)}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-[64px_1fr]">
            <button className="flex h-14 items-center justify-center rounded-2xl border border-[#ead6ba] bg-[#fffaf2] text-2xl text-[#2a1b12]" type="button" aria-label="В избранное"><HiHeart /></button>
            <button className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#c97963] px-6 text-base font-black text-white" type="button"><HiOutlineShoppingBag />Добавить в корзину</button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Info title="Возврат" text="условия будут в заказе" />
            <Info title="Доставка" text="до двери или пункта" />
            <Info title="Бренд" text="локальная витрина" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <p className="section-label text-[11px] font-bold text-[#9c7a55]">Похожие товары</p>
        <h2 className="display-font mt-2 text-3xl font-semibold">Можно добавить к заказу</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(related.length ? related : buyerProducts.slice(0, 4)).map((item) => <BuyerProductCard product={item} key={item.id} />)}
        </div>
      </section>

      <BuyerBottomNav />
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <div className="rounded-[1.2rem] border border-[#ead6ba] bg-[#fff3df] p-4"><p className="font-black">{title}</p><p className="mt-1 text-xs leading-5 text-[#6f553a]">{text}</p></div>;
}
