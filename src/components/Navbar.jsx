import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_rgba(167,139,250,0.6)]" />
              <span className="text-white text-lg font-semibold tracking-tight">Aura Creative</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollTo('services')} className="text-white/80 hover:text-white transition">Services</button>
              <button onClick={() => scrollTo('work')} className="text-white/80 hover:text-white transition">Work</button>
              <button onClick={() => scrollTo('process')} className="text-white/80 hover:text-white transition">Process</button>
              <button onClick={() => scrollTo('contact')} className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:shadow-lg transition">Start a Project</button>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              <Menu size={24} />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              <button onClick={() => scrollTo('services')} className="block w-full text-left text-white/80 hover:text-white">Services</button>
              <button onClick={() => scrollTo('work')} className="block w-full text-left text-white/80 hover:text-white">Work</button>
              <button onClick={() => scrollTo('process')} className="block w-full text-left text-white/80 hover:text-white">Process</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left text-slate-900 bg-white rounded-full px-4 py-2 font-medium">Start a Project</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
