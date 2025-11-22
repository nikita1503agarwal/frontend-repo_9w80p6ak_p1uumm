import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-2xl font-semibold text-white">Tell us about your project</h3>
          <p className="text-white/70 mt-2">We’ll get back within 24 hours.</p>
          {!sent ? (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input required placeholder="Name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <input required type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <input placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <textarea required placeholder="What are you building?" rows={4} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <button className="inline-flex justify-center items-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:shadow-lg transition">Request proposal</button>
            </form>
          ) : (
            <div className="mt-6 text-white/90">Thanks! We’ll be in touch shortly.</div>
          )}
        </div>
      </div>
    </section>
  )
}
