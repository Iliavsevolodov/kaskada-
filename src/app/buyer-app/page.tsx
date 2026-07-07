import { HiOutlineArchiveBox, HiOutlineArrowPath, HiOutlineHeart, HiOutlineTag } from 'react-icons/hi2';
import { MobileShell } from '@/components/MobileShell';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function BuyerAppPage() {
  return (
    <MobileShell title="Покупатель" role="buyer app">
      <div className="rounded-[2rem] bg-graphite p-6 text-cream shadow-soft">
        <p className="text-sm text-cream/60">Бонусы</p>
        <p className="mt-2 text-4xl font-black text-gold">1 240 ₽</p>
        <p className="mt-2 text-sm text-cream/70">доступно для следующих покупок</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <AppTile icon={<HiOutlineArchiveBox />} title="Заказы" text="3 активных" />
        <AppTile icon={<HiOutlineHeart />} title="Бренды" text="8 избранных" />
        <AppTile icon={<HiOutlineTag />} title="Акции" text="12 предложений" />
        <AppTile icon={<HiOutlineArrowPath />} title="Повторить" text="быстрый заказ" />
      </div>
      <h2 className="mt-8 text-2xl font-black">Рекомендовано</h2>
      <div className="mt-4 grid gap-4">
        {products.slice(0, 2).map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </MobileShell>
  );
}

function AppTile({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="card-glass rounded-[1.5rem] p-4 shadow-soft"><p className="text-2xl text-neutral-700">{icon}</p><p className="mt-2 font-black">{title}</p><p className="text-sm text-neutral-500">{text}</p></div>;
}
