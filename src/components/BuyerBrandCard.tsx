import { HiArrowRight, HiStar } from 'react-icons/hi2';

export type BuyerBrand = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  cover: string;
  logo: string;
  rating: number;
  products: number;
  followers: string;
};

export function BuyerBrandCard({ brand }: { brand: BuyerBrand }) {
  return (
    <article className="overflow-hidden border border-graphite/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <a className="block" href={`/kaskada-/buyer/brands/${brand.id}/`}>
        <div className="relative h-44 overflow-hidden bg-neutral-100">
          <img alt={brand.name} className="h-full w-full object-cover" src={brand.cover} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <img alt={brand.name} className="h-14 w-14 border-2 border-white object-cover" src={brand.logo} />
            <div className="text-white">
              <p className="text-sm font-black">{brand.name}</p>
              <p className="text-xs font-semibold text-white/75">{brand.category}</p>
            </div>
          </div>
        </div>
      </a>
      <div className="p-4">
        <p className="text-sm font-black">{brand.tagline}</p>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{brand.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-graphite/8 pt-4 text-[12px] font-bold text-neutral-500">
          <span className="inline-flex items-center gap-1"><HiStar className="text-gold" /> {brand.rating}</span>
          <span>{brand.products} товаров</span>
          <span>{brand.followers}</span>
        </div>
        <a className="mt-4 inline-flex items-center gap-2 text-sm font-black text-graphite" href={`/kaskada-/buyer/brands/${brand.id}/`}>Открыть бренд <HiArrowRight /></a>
      </div>
    </article>
  );
}
