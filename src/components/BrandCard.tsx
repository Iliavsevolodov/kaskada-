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
    <article className="card-glass rounded-[1.8rem] p-6 shadow-soft">
      <div className="mb-5 flex h-28 items-center justify-center rounded-[1.4rem] bg-graphite text-3xl font-black text-gold">{brand.name.slice(0, 1)}</div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{brand.city} · {brand.category}</p>
      <h3 className="mt-2 text-2xl font-black">{brand.name}</h3>
      <p className="mt-3 leading-7 text-neutral-600">{brand.description}</p>
      <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-2xl bg-white/70 p-3">
          <p className="font-black">{brand.orders}</p>
          <p className="text-neutral-500">заказов</p>
        </div>
        <div className="rounded-2xl bg-white/70 p-3">
          <p className="font-black">★ {brand.rating}</p>
          <p className="text-neutral-500">рейтинг</p>
        </div>
        <div className="rounded-2xl bg-white/70 p-3">
          <p className="font-black">{brand.badge}</p>
          <p className="text-neutral-500">тип</p>
        </div>
      </div>
    </article>
  );
}
