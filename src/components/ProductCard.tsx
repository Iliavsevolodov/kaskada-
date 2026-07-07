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
    <a className="card-glass hover-lift reveal-up block rounded-[2rem] p-5 shadow-soft" href={`/kaskada-/products/${product.id}/`}>
      <div className="product-visual glow-ring mb-5 flex h-48 items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-white via-sand to-cream text-6xl">
        <span className="float-soft relative z-10">{product.accent}</span>
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-gold">{product.tag}</span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{product.category}</p>
          <h3 className="mt-2 text-xl font-black leading-tight">{product.name}</h3>
          <p className="mt-1 text-sm font-bold text-forest">{product.brand}</p>
        </div>
        <span className="rounded-full bg-forest px-3 py-2 text-xs font-bold text-cream">★ {product.rating}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{product.description}</p>
      <div className="mt-5 flex items-end justify-between gap-3 border-t border-graphite/10 pt-4">
        <div>
          <p className="text-2xl font-black">{money(product.price)}</p>
          <p className="text-xs font-bold text-neutral-500">Бонус в оборот: {money(product.cashback)}</p>
        </div>
        <span className="rounded-full bg-graphite px-4 py-3 text-sm font-black text-cream">Открыть</span>
      </div>
    </a>
  );
}
