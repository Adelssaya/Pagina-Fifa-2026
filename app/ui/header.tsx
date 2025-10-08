'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-[#0F91A9] text-white">
      <div className="container flex h-12 items-center gap-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-white text-[#0F91A9] text-xs font-bold">
            F26
          </span>
          <span className="hidden sm:block">FIFA Store 2026</span>
        </Link>

        {/* Nav desktop */}
        <nav className="ml-auto hidden items-center gap-4 text-sm md:flex">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/productos" className="hover:underline">Productos</Link>
          <Link href="#equipos" className="hover:underline">Equipos</Link>
          <Link href="#ofertas" className="hover:underline">Ofertas</Link>
        </nav>

        {/* Buscador desktop */}
        <div className="ml-3 hidden items-center gap-2 md:flex">
          <input
            placeholder="Buscar productos..."
            className="w-56 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-sm placeholder-white/80 outline-none"
          />
        </div>

        {/* Carrito siempre visible */}
        <div className="ml-2">
          <Button size="sm" variant="secondary" className="border-none bg-[#FFB703] text-[#0F91A9]">
            <span className="mr-1">🛒</span> Carrito (0)
          </Button>
        </div>

        {/* Hamburguesa móvil */}
        <button
          type="button"
          className="ml-1 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menú
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div id="mobile-menu" className="md:hidden">
          <div className="space-y-3 border-t border-white/15 px-4 py-4">
            {/* Buscador móvil */}
            <input
              type="search"
              placeholder="Buscar productos..."
              className="w-full rounded-md px-3 py-2 text-sm text-black outline-none"
            />

            {/* Links */}
            <div className="grid gap-2 text-sm">
              <Link href="/" onClick={() => setOpen(false)} className="rounded-md bg-white/10 px-3 py-2">Inicio</Link>
              <Link href="/productos" onClick={() => setOpen(false)} className="rounded-md bg-white/10 px-3 py-2">Productos</Link>
              <Link href="#equipos" onClick={() => setOpen(false)} className="rounded-md bg-white/10 px-3 py-2">Equipos</Link>
              <Link href="#ofertas" onClick={() => setOpen(false)} className="rounded-md bg-white/10 px-3 py-2">Ofertas</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
