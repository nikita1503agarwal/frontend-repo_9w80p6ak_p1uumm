import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(124,58,237,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(251,191,36,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_20%_30%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_20%)]" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)", backgroundSize: '48px 48px' }} />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
            <span className="text-white/70 text-sm">© {new Date().getFullYear()} Aura Creative — AI Marketing Agency</span>
          </div>
          <div className="text-white/50 text-sm">Privacy • Terms • Careers</div>
        </div>
      </footer>
    </div>
  )
}

export default App
