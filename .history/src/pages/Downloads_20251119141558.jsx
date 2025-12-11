export default function Downloads() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Downloads</h1>
      <p className="mt-4 text-white/80">Access brochures for detailed product information and application guidance.</p>
      <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/downloads/industrial-gaskets.pdf" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 hover:bg-slate-800/60 transition shadow-soft">
          <h2 className="text-xl font-semibold">Industrial Gaskets</h2>
          <p className="mt-2 text-sm text-white/80">Non-asbestos, PTFE, rubber, compressed fibre, spiral-wound &amp; metallic.</p>
          <span className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium">Download PDF</span>
        </a>
        <a href="/downloads/valves-strainers.pdf" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 hover:bg-slate-800/60 transition shadow-soft">
          <h2 className="text-xl font-semibold">Valves &amp; Strainers</h2>
          <p className="mt-2 text-sm text-white/80">Valve types, strainers, sight glasses, materials, classes 150–2500, actuators.</p>
          <span className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium">Download PDF</span>
        </a>
        <a href="/downloads/lubricants.pdf" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 hover:bg-slate-800/60 transition shadow-soft">
          <h2 className="text-xl font-semibold">Lubricants</h2>
          <p className="mt-2 text-sm text-white/80">Anti-seize, greases, food-grade, specialty fluids.</p>
          <span className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium">Download PDF</span>
        </a>
        <a href="/downloads/machines-tools.pdf" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 hover:bg-slate-800/60 transition shadow-soft">
          <h2 className="text-xl font-semibold">Machines &amp; Tools</h2>
          <p className="mt-2 text-sm text-white/80">Welding machines, MIG tractors, plasma cutters, spot welding.</p>
          <span className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium">Download PDF</span>
        </a>
        <a href="/downloads/company-overview.pdf" className="block rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 hover:bg-slate-800/60 transition shadow-soft">
          <h2 className="text-xl font-semibold">Company Overview</h2>
          <p className="mt-2 text-sm text-white/80">Overview, strengths, expertise, industries served, contact information.</p>
          <span className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium">Download PDF</span>
        </a>
      </section>
      <section className="mt-12 text-center">
        <a href="/contact" className="inline-flex items-center rounded-lg bg-slate-800 px-5 py-2.5 font-medium hover:bg-slate-700">Contact Us</a>
      </section>
    </main>
  )
}