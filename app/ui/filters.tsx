"use client";
import { useState } from "react";

export function Filters() {
  const [price, setPrice] = useState(100);
  const chips = ["Uniforme", "Termos", "Balón"];

  return (
    <div className="rounded-lgx border border-ink/10 bg-white p-4 shadow">
      <p className="mb-2 text-sm font-medium text-ink">Palabras clave</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1 rounded-full bg-wineContrast text-white px-2 py-1 text-xs"
          >
            {c}
            <button className="text-white/80 hover:text-white">×</button>
          </span>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <fieldset>
          <legend className="font-medium text-ink">Uniforme</legend>
          <p className="text-xs text-ink/70">De tus equipos favoritos</p>
        </fieldset>

        <fieldset>
          <legend className="font-medium text-ink">Termos</legend>
          <p className="text-xs text-ink/70">
            Temas personalizados de tus equipos favoritos
          </p>
        </fieldset>

        <fieldset>
          <legend className="font-medium text-ink">Balón</legend>
          <p className="text-xs text-ink/70">Balones de alta calidad</p>
        </fieldset>

        <div className="pt-2">
          <div className="mb-1 flex items-center justify-between text-xs text-ink/60">
            <span>Rango de precio</span>
            <span>$0–100</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-orangeContrast"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 text-xs">
          <div>
            <p className="mb-1 font-medium text-ink">Color</p>
            <label className="flex items-center gap-2"><input type="radio" name="color" /> Verde</label>
            <label className="flex items-center gap-2"><input type="radio" name="color" /> Rojo</label>
            <label className="flex items-center gap-2"><input type="radio" name="color" /> Azul</label>
          </div>
          <div>
            <p className="mb-1 font-medium text-ink">Tamaño</p>
            <label className="flex items-center gap-2"><input type="checkbox" /> Chica (S)</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Mediana (M)</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Grande (G)</label>
          </div>
        </div>
      </div>
    </div>
  );
}
