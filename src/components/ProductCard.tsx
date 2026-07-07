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
    <a className="card-glass hover-lift reveal-up block rounded-[1.5rem] p-4 shadow-soft" href={`/kaskada-/products/${product.id}/`}>
      <div className="product-visual glow-ring mb-4 flex h-40 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-white via-sand to-cream text-5xl">
        <span className="float-soft relative z-10">{product.accent}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white/84 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-600">{product.tag}</span>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">{product.category}</p>
          <h3 className="mt-1.5 text-lg font-bold leading-snug">{product.name}</h3>
          <p className="mt-1 text-sm font-medium text-forest">{product.brand}</p>
        </div>
        <span className="rounded-full bg-forest px-2.5 py-1.5 text-[11px] font-semibold text-cream">★ {product.rating}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{product.description}</p>
      <div className="mt-4 flex items-end justify-between gap-3 border-t border-graphite/8 pt-4">
        <div>
          <p className="text-xl font-bold">{money(product.price)}</p>
          <p className="text-[11px] font-medium text-neutral-500">Бонус в оборот: {money(product.cashback)}</p>
        </div>
        <span className="rounded-full border border-graphite/10 bg-white/78 px-3.5 py-2 text-[12px] font-semibold text-graphite">Подробнее</span>
      </div>
    </a>
  );
}
