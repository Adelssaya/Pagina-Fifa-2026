
"use client";
import { useState } from "react";

type CardProps = {
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating?: number;
  image: string;
};

function money(n: number) {
  return n.toLocaleString("es-MX", { style: "currency", currency: "USD" });
}

export default function ProductCard2026({
  title, price, oldPrice, discount, rating = 4.8, image,
}: CardProps) {
  const [fav, setFav] = useState(false);

  return (
    <article className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
      {/* Sección superior con fondo blanco */}
      <div className="relative rounded-t-xl bg-white p-2">
        {discount && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white shadow">
            {discount}
          </span>
        )}
        <button
          onClick={() => setFav((v) => !v)}
          aria-label="wishlist"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-gray-100 text-red-500 shadow hover:bg-gray-200"
        >
          {fav ? "♥" : "♡"}
        </button>

        {/* Imagen dentro del bloque blanco */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Contenido inferior */}
      <div className="border-t border-gray-100 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">{title}</h3>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-lg font-bold text-gray-900">{money(price)}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">{money(oldPrice)}</span>
          )}
        </div>
        <button className="mt-3 inline-flex h-9 w-full items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white transition hover:bg-emerald-600">
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
}
