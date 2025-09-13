"use client";
import { useMemo, useState } from "react";
import { Product } from "./types";
import { Button } from "./button";

const PRODUCTS: Product[] = [
  { id: "1", title: "Playera de la selección Mexicana", price: 1500, badge: "Nuevo" },
  { id: "2", title: "Playera de Emirates (Roja)", price: 1200 },
  { id: "3", title: "Balón de la Champions", price: 800 },
  { id: "4", title: "Termo de las Chivas (rojo)", price: 200 },
  { id: "5", title: "Termo de FC Barcelona", price: 250 },
  { id: "6", title: "Balón del Mundial 2025", price: 900 },
];

function money(n: number) {
  return n.toLocaleString("es-MX", { style: "currency", currency: "USD" });
}

export function ProductsGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return PRODUCTS;
    return PRODUCTS.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((p) => (
        <article
          key={p.id}
          className="rounded-lgx border border-yellowBase bg-white p-3 shadow"
        >
          <div className="aspect-square w-full rounded-md bg-ink/5" />
          <h3 className="mt-2 text-sm text-ink">{p.title}</h3>
          <p className="text-sm font-semibold text-ink">{money(p.price)}</p>
          <div className="mt-2">
            <Button variant="secondary" size="sm">Agregar</Button>
          </div>
        </article>
      ))}
    </div>
  );
}
