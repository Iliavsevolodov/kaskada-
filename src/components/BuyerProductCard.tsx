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

  return (
    <article className="group overflow-hidden border border-graphite/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <a className="block" href={`/kaskada-/products/${product.id}/`}>
        <div className="relative h-52 overflow-hidden bg-neutral-100">
          <img alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={product.image} />
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            <span className="bg-[#f6d44d] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-graphite">{product.badge}</span>
            {discount > 0 ? <span className="bg-[#ff4d6d] px-3 py-1.5 text-[10px] font-black text-white">-{discount}%</span> : null}
          </div>
        </div>
      </a>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-500">{product.category}</p>
            <a className="mt-1.5 block line-clamp-2 min-h-[44px] text-[15px] font-bold leading-snug" href={`/kaskada-/products/${product.id}/`}>{product.name}</a>
            <p className="mt-1 truncate text-sm font-medium text-forest">{product.brand}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 border border-graphite/8 bg-neutral-50 px-2.5 py-1.5 text-[11px] font-bold text-neutral-700"><HiStar className="text-gold" />{product.rating}</span>
        </div>
        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="text-lg font-black">{money(product.price)}</p>
              {product.oldPrice ? <p className="text-xs font-semibold text-neutral-400 line-through">{money(product.oldPrice)}</p> : null}
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-neutral-500">Бонус: {money(product.cashback)}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-[44px_1fr] gap-2">
          <button className="flex h-11 items-center justify-center border border-graphite/10 bg-white text-lg text-graphite transition hover:bg-neutral-50" type="button" aria-label="В избранное"><HiHeart /></button>
          <button className="inline-flex h-11 items-center justify-center gap-2 bg-[#ff4d6d] px-4 text-sm font-black text-white transition hover:opacity-90" type="button"><HiOutlineShoppingBag />В корзину</button>
        </div>
      </div>
    </article>
  );
}
