export default function Features(){
  const items = [
    { title: "Realtime voice", desc: "Low-latency streaming transport for natural back-and-forth." },
    { title: "Live transcripts", desc: "Streaming partials with auto punctuation and speaker labels." },
    { title: "Programmable", desc: "Hook into events to build automations and analytics." },
    { title: "Secure", desc: "Enterprise-ready auth, logging, and data retention controls." },
  ];
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it,i)=> (
            <div key={i} className="rounded-xl bg-slate-900/60 border border-white/10 p-6">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
