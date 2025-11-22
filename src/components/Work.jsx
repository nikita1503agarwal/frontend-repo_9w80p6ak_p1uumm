export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Recent results</h2>
            <p className="text-white/60 mt-3">Selected case studies</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10 transition">Work with us</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { kpi: '+312% ROAS', brand: 'DTC Apparel', note: 'Meta + TikTok' },
            { kpi: '−48% CPA', brand: 'Fintech App', note: 'Search + UAC' },
            { kpi: '3.1x CTR', brand: 'CPG Launch', note: 'YouTube + Display' },
          ].map((c) => (
            <div key={c.kpi} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-amber-400/10" />
              <div className="text-3xl font-semibold text-white">{c.kpi}</div>
              <div className="mt-2 text-white/80">{c.brand}</div>
              <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10" />
              <div className="mt-3 text-xs text-white/60">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
