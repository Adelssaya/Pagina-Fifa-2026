
export default function Footer(){
  return (
    <footer className="mt-14 w-full bg-[#0F91A9] text-white/90">
      <div className="container grid grid-cols-1 gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-white text-[#0F91A9] text-xs font-bold">F26</span>
            <span>FIFA Store 2026</span>
          </div>
          <p className="mt-3 text-sm opacity-90">La tienda oficial del Mundial FIFA 2026. Productos auténticos y envíos a todo el mundo.</p>
        </div>
        <Section title="Enlaces Rápidos" items={["Sobre Nosotros", "Socios Participantes", "Calendario de Partidos", "Noticias"]} />
        <Section title="Atención al Cliente" items={["Centro de Ayuda", "Políticas de Envío", "Devoluciones", "Términos y Condiciones"]} />
        <Section title="Contacto" items={["support@fifa2026store.com", "+1 (555) 123-4567", "FIFA HQ, Zurich"]} />
      </div>
    </footer>
  );
}
function Section({title, items}:{title:string; items:string[]}){
  return (<div><h4 className="mb-2 font-semibold">{title}</h4><ul className="space-y-1 text-sm opacity-90">{items.map(i => <li key={i}>{i}</li>)}</ul></div>);
}
