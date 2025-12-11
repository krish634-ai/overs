export default function Lubricants() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Lubricants</h1>
      <p className="mt-4 text-white/80">Specialty lubrication solutions for assembly, food-grade compliance, and heavy-duty assets.</p>

      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Anti-Seize Compounds</h2>
            <p className="mt-2 text-sm text-white/80">Assembly aids to prevent galling and ease disassembly under harsh conditions.</p>
          </div>

          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Greases</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-white/80">
              <li>Lithium</li>
              <li>Complex</li>
              <li>Polyurea</li>
              <li>Silicone</li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Food-Grade Lubricants</h2>
            <p className="mt-2 text-sm text-white/80">Formulations designed for food processing compliance and equipment protection.</p>
          </div>

          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Specialty Fluids</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-white/80">
              <li>Open gear lubricants</li>
              <li>Wire rope lubricants</li>
              <li>Valve lubricants</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Lubricants Brochure</a>
      </section>
    </main>
  )
}