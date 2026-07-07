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
    <article className="card-glass hover-lift reveal-up rounded-[2rem] p-6 shadow-soft">
      <div className="metal-panel mb-5 flex h-32 items-center justify-center rounded-[1.6rem] text-4xl font-black text-gold">
        <span className="float-soft relative z-10">{brand.name.slice(0, 1)}</span>
        <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-cream">{brand.badge}</span>
      </div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{brand.city} · {brand.category}</p>
      <h3 className="mt-2 text-2xl font-black leading-tight">{brand.name}</h3>
      <p className="mt-3 min-h-[84px] leading-7 text-neutral-600">{brand.description}</p>
      <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
        <div className="stat-tile">
          <p className="font-black">{brand.orders}</p>
          <p className="text-neutral-500">заказов</p>
        </div>
        <div className="stat-tile">
          <p className="font-black">★ {brand.rating}</p>
          <p className="text-neutral-500">рейтинг</p>
        </div>
        <div className="stat-tile">
          <p className="font-black">local</p>
          <p className="text-neutral-500">бренд</p>
        </div>
      </div>
    </article>
  );
}
