import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Products Overview</h1>
      <p className="mt-4 text-white/80">A comprehensive portfolio designed around industrial use-cases and features. Explore core categories below.</p>
      <section className="mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/gaskets" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 hover:bg-slate-800/60 transition shadow-soft">
            <h2 className="text-xl font-semibold">Industrial Gaskets</h2>
            <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
              <li>Non-asbestos gaskets</li>
              <li>PTFE gaskets</li>
              <li>Rubber gaskets</li>
              <li>Compressed fibre jointing sheets</li>
              <li>Spiral-wound &amp; metallic gaskets</li>
            </ul>
          </Link>
          <Link to="/valves" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 hover:bg-slate-800/60 transition shadow-soft">
            <h2 className="text-xl font-semibold">Valves &amp; Strainers</h2>
            <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
              <li>Ball, butterfly, gate, globe, check, safety valves</li>
              <li>Strainers, sight glasses</li>
              <li>PP, PTFE-lined, iron, steel, alloy options</li>
              <li>Pressure classes 150–2500</li>
              <li>Actuators</li>
            </ul>
          </Link>
          <Link to="/lubricants" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 hover:bg-slate-800/60 transition shadow-soft">
            <h2 className="text-xl font-semibold">Lubricants</h2>
            <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
              <li>Anti-seize compounds</li>
              <li>Greases: lithium, complex, polyurea, silicone</li>
              <li>Food-grade lubricants</li>
              <li>Specialty: open gear, wire rope, valve lubricants</li>
            </ul>
          </Link>
          <Link to="/machines-tools" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 hover:bg-slate-800/60 transition shadow-soft">
            <h2 className="text-xl font-semibold">Machines &amp; Tools</h2>
            <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
              <li>Welding machines (MMA / TIG / MIG)</li>
              <li>MIG tractors</li>
              <li>Plasma cutters</li>
              <li>Spot welding machines</li>
            </ul>
          </Link>
        </div>
      </section>
      <section className="mt-12 text-center">
        <Link to="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Brochures</Link>
      </section>
    </main>
  )
}