import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              AI-Powered Creative Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Ads and content engineered by AI, crafted by humans
            </h1>
            <p className="text-white/70 text-lg">
              We partner with forward-thinking brands to concept, generate, and optimize
              high-performing campaigns across every channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:shadow-lg transition">
                Start a project
              </a>
              <a href="#work" className="inline-flex justify-center items-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition">
                See our work
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-white/70 text-sm">
                <div className="font-semibold text-white/90">+312%</div>
                ROAS improvement
              </div>
              <div className="text-white/70 text-sm">
                <div className="font-semibold text-white/90">48h</div>
                Creative turnaround
              </div>
              <div className="text-white/70 text-sm">
                <div className="font-semibold text-white/90">A/B</div>
                Auto-variant testing
              </div>
            </div>
          </div>
          <div className="h-[420px] md:h-[560px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur relative">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-amber-400/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
