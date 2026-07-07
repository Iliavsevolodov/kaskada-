import { HiHeart, HiOutlineShoppingBag, HiStar } from 'react-icons/hi2';
import { money } from '@/lib/finance';

export type BuyerProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  cashback: number;
  tag: string;
  badge: string;
  description: string;
  image: string;
};

export function BuyerProductCard({ product }: { product: BuyerProduct }) {
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const href = `/kaskada-/buyer/products/${product.id}/`;

  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-[#d8c3a8]/70 bg-[#fffaf2] shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <a className="block" href={href}>
        <div className="relative h-52 overflow-hidden bg-[#efe0cd]">
          <img alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={product.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b12]/20 to-transparent" />
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            <span className="rounded-full bg-[#f4d27b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#2a1b12] shadow-sm">{product.badge}</span>
            {discount > 0 ? <span className="rounded-full bg-[#c97963] px-3 py-1.5 text-[10px] font-black text-white shadow-sm">-{discount}%</span> : null}
          </div>
        </div>
      </a>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold uppercase tracking-[0.14em] text-[#9c7a55]">{product.category}</p>
            <a className="mt-1.5 block line-clamp-2 min-h-[44px] text-[15px] font-bold leading-snug text-[#2a1b12]" href={href}>{product.name}</a>
            <p className="mt-1 truncate text-sm font-medium text-[#4d6b4a]">{product.brand}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#ead6ba] bg-[#fff6e8] px-2.5 py-1.5 text-[11px] font-bold text-[#6f553a]"><HiStar className="text-[#c89b4a]" />{product.rating}</span>
        </div>
        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="text-lg font-black text-[#2a1b12]">{money(product.price)}</p>
              {product.oldPrice ? <p className="text-xs font-semibold text-[#b69a7a] line-through">{money(product.oldPrice)}</p> : null}
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-[#8f765a]">Бонус: {money(product.cashback)}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-[44px_1fr] gap-2">
          <button className="flex h-11 items-center justify-center rounded-2xl border border-[#ead6ba] bg-[#fffaf2] text-lg text-[#2a1b12] transition hover:bg-[#fff3df]" type="button" aria-label="В избранное"><HiHeart /></button>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#c97963] px-4 text-sm font-black text-white transition hover:bg-[#b96753]" type="button"><HiOutlineShoppingBag />В корзину</button>
        </div>
      </div>
    </article>
  );
}
