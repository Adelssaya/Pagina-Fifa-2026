
import ContactForm from "./ui/contact-form";
import Link from "next/link";
export default function Page(){

  
  return (
    <>
      <section className="container py-10 text-center text-white">
        <h1 className="text-4xl font-extrabold drop-shadow md:text-6xl">FIFA 2026</h1>
        <h2 className="mt-1 text-xl font-extrabold text-[#FFE066] md:text-2xl">Tienda Oficial</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 md:text-base">
          Descubre la colección más vibrante y emocionante del Mundial FIFA 2026. Productos oficiales con los colores más dinámicos para celebrar el evento deportivo más grande del mundo.
        </p>
        <ContactForm />
      </section>
      <section className="container -mt-4 grid max-w-4xl grid-cols-3 gap-4 text-center text-white">
        <div><p className="text-2xl font-extrabold">50+</p><p className="text-xs opacity-90">Países Destinatarios</p></div>
        <div><p className="text-2xl font-extrabold">1000+</p><p className="text-xs opacity-90">Productos Oficiales</p></div>
        <div><p className="text-2xl font-extrabold">24/7</p><p className="text-xs opacity-90">Atención al Cliente</p></div>
      </section>
    </>
  );
}
