
"use client";
import { FormEvent } from "react";
import { Button } from "./button";
import { Input, Textarea } from "./input";
export default function ContactForm(){
  function handleSubmit(e: FormEvent<HTMLFormElement>){ e.preventDefault(); }
  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 w-full max-w-xl rounded-xl border border-black/5 bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-center text-sm font-semibold text-[#5E5E5E]">Contáctanos para Ofertas Exclusivas</h3>
      <label className="block text-xs">Nombre Completo</label>
      <Input className="mb-3" placeholder="Escribe tu nombre" />
      <label className="block text-xs">Correo Electrónico</label>
      <Input className="mb-3" type="email" placeholder="tucorreo@email.com" />
      <label className="block text-xs">Mensaje</label>
      <Textarea className="mb-4" rows={3} placeholder="Cuéntanos qué productos te interesan..." />
      <Button className="w-full bg-[#E76F51] hover:opacity-90">Enviar Mensaje</Button>
    </form>
  );
}
