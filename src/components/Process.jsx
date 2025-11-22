export default function Process() {
  const steps = [
    { n: '01', t: 'Discover', d: 'We map goals, audiences, and constraints. Your team meets our strategists and creatives.' },
    { n: '02', t: 'Ideate', d: 'AI-assisted brainstorming generates dozens of angles, hooks, and scripts aligned to your brand.' },
    { n: '03', t: 'Produce', d: 'We craft variations at scale, then refine the winners with human judgement and brand review.' },
    { n: '04', t: 'Optimize', d: 'Continuous testing improves performance week over week. We scale what works.' },
  ]

  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How we work</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-white/60 text-xs">{s.n}</div>
              <div className="mt-2 text-white font-semibold">{s.t}</div>
              <div className="mt-2 text-white/70 text-sm">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
