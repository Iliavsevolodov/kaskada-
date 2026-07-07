export type BrandCardData = {
  id: string;
  name: string;
  city: string;
  category: string;
  orders: number;
  rating: number;
  description: string;
  badge: string;
};

export function BrandCard({ brand }: { brand: BrandCardData }) {
  return (
    <article className="card-glass hover-lift reveal-up rounded-[1.5rem] p-5 shadow-soft">
      <div className="metal-panel mb-4 flex h-28 items-center justify-center rounded-[1.2rem] text-3xl font-bold text-gold">
        <span className="float-soft relative z-10">{brand.name.slice(0, 1)}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cream">{brand.badge}</span>
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">{brand.city} · {brand.category}</p>
      <h3 className="mt-1.5 text-lg font-bold leading-snug">{brand.name}</h3>
      <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-600">{brand.description}</p>
      <div className="mt-4 grid grid-cols-3 gap-2.5 text-sm">
        <div className="stat-tile">
          <p className="text-sm font-bold">{brand.orders}</p>
          <p className="text-[11px] text-neutral-500">заказов</p>
        </div>
        <div className="stat-tile">
          <p className="text-sm font-bold">★ {brand.rating}</p>
          <p className="text-[11px] text-neutral-500">рейтинг</p>
        </div>
        <div className="stat-tile">
          <p className="text-sm font-bold">local</p>
          <p className="text-[11px] text-neutral-500">бренд</p>
        </div>
      </div>
    </article>
  );
}
