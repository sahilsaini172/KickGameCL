import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between z-50 w-full p-4 bg-surface text-black fixed top-0">
      <div className="flex items-center gap-4">
        <Menu />
        <Search />
      </div>
      <div className="flex items-start justify-center">
        <p className="text-2xl tracking-widest font-semibold">KICK GAME</p>
        <span className="text-xs font-light">®</span>
      </div>
      <div className="flex items-center gap-4">
        <UserRound />
        <ShoppingCart />
      </div>
    </div>
  );
}
