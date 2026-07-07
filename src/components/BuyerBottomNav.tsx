import { HiOutlineHeart, HiOutlineHome, HiOutlineShoppingBag, HiOutlineSquares2X2, HiOutlineUser } from 'react-icons/hi2';

export function BuyerBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-graphite/10 bg-white/95 px-3 py-2 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1 text-center text-[10px] font-bold text-neutral-600">
        <a className="rounded-2xl px-2 py-2 text-graphite" href="/kaskada-/buyer/"><HiOutlineHome className="mx-auto mb-1 text-xl" />Главная</a>
        <a className="rounded-2xl px-2 py-2" href="/kaskada-/buyer/#catalog"><HiOutlineSquares2X2 className="mx-auto mb-1 text-xl" />Каталог</a>
        <a className="rounded-2xl px-2 py-2" href="/kaskada-/buyer/#favorites"><HiOutlineHeart className="mx-auto mb-1 text-xl" />Избранное</a>
        <a className="rounded-2xl px-2 py-2" href="/kaskada-/buyer/#cart"><HiOutlineShoppingBag className="mx-auto mb-1 text-xl" />Корзина</a>
        <a className="rounded-2xl px-2 py-2" href="/kaskada-/buyer/#profile"><HiOutlineUser className="mx-auto mb-1 text-xl" />Профиль</a>
      </div>
    </nav>
  );
}
