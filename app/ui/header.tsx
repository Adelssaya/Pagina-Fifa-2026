
import Link from "next/link";
import { Button } from "./button";
export default function Header(){
  return (
    <header className="w-full bg-[#0F91A9] text-white sticky top-0 z-30">
      <div className="container flex h-12 items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-white text-[#0F91A9] text-xs font-bold">F26</span>
          <span className="hidden sm:block">FIFA Store 2026</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/productos" className="hover:underline">Productos</Link>
          <Link href="#" className="hover:underline">Equipos</Link>
          <Link href="#" className="hover:underline">Ofertas</Link>
        </nav>
        <div className="ml-3 hidden md:flex items-center gap-2">
          <input placeholder="Buscar productos..." className="w-56 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-sm placeholder-white/80 outline-none" />
        </div>
        <div className="ml-2">
          <Button size="sm" variant="secondary" className="bg-[#FFB703] text-[#0F91A9] border-none"><span className="mr-1">🛒</span> Carrito (0)</Button>
        </div>
      </div>
    </header>
  );
}
