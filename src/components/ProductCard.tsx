import { money } from '@/lib/finance';

export type ProductCardData = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  cashback: number;
  tag: string;
  description: string;
  accent: string;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <article className="card-glass rounded-[1.8rem] p-5 shadow-soft">
      <div className="mb-5 flex h-44 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-white to-sand text-6xl">{product.accent}</div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{product.category}</p>
      <h3 className="mt-2 text-xl font-black">{product.name}</h3>
      <p className="mt-1 text-sm font-bold text-forest">{product.brand}</p>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{product.description}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-2xl font-black">{money(product.price)}</p>
          <p className="text-xs font-bold text-neutral-500">Бонус в оборот: {money(product.cashback)}</p>
        </div>
        <span className="rounded-full bg-forest px-3 py-2 text-xs font-bold text-cream">★ {product.rating}</span>
      </div>
    </article>
  );
}
