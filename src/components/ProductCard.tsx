import { money } from '@/lib/finance';

export type ProductCardData = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  cashback: number;
  tag: string;
  badge?: string;
  description: string;
  image: string;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <a className="card-glass hover-lift reveal-up block overflow-hidden rounded-[1.45rem] shadow-soft" href={`/kaskada-/products/${product.id}/`}>
      <div className="product-visual h-52 bg-white">
        <img alt={product.name} className="image-cover" src={product.image} />
        <span className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-700 backdrop-blur">{product.badge ?? product.tag}</span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">{product.category}</p>
            <h3 className="mt-1.5 text-base font-bold leading-snug">{product.name}</h3>
            <p className="mt-1 text-sm font-medium text-forest">{product.brand}</p>
          </div>
          <span className="rounded-full bg-white px-2.5 py-1.5 text-[11px] font-semibold text-neutral-700">{product.rating}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{product.description}</p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-graphite/8 pt-4">
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-lg font-bold">{money(product.price)}</p>
              {product.oldPrice ? <p className="text-xs font-medium text-neutral-400 line-through">{money(product.oldPrice)}</p> : null}
            </div>
            <p className="text-[11px] font-medium text-neutral-500">Бонус: {money(product.cashback)}</p>
          </div>
          <span className="rounded-full border border-graphite/10 bg-white/78 px-3.5 py-2 text-[12px] font-semibold text-graphite">Подробнее</span>
        </div>
      </div>
    </a>
  );
}
