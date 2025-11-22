import { Rocket, Sparkles, BarChart3, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Performance Ads',
    desc: 'AI-generated concepts and human-refined creatives for Meta, TikTok, YouTube, and Display.',
  },
  {
    icon: Sparkles,
    title: 'Content Engine',
    desc: 'Always-on content production tuned to your brand voice with LLMs and style guides.',
  },
  {
    icon: BarChart3,
    title: 'Optimization Lab',
    desc: 'Automated A/B testing and multi-variant analysis to scale winners and retire losers fast.',
  },
  {
    icon: Wand2,
    title: 'Brand AI',
    desc: 'Custom brand-trained models to ideate, storyboard, and script content at speed.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="text-white/60 mt-3">Full-funnel creative powered by AI</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <s.icon className="text-white/90" />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
