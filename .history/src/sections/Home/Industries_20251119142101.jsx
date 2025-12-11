import { industries } from '../../data/industries.js'
import Card from '../../ui/Card.jsx'

export default function Industries() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold">Industries Served</h2>
      <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-white/80">
        {industries.map((i) => (
          <li key={i} className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">{i}</li>
        ))}
      </ul>
    </section>
  )
}