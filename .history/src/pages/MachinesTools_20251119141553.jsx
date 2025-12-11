export default function MachinesTools() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Machines &amp; Tools</h1>
      <p className="mt-4 text-white/80">Fabrication and repair equipment to support field and shop operations.</p>

      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Welding Machines (MMA / TIG / MIG)</h2>
            <p className="mt-2 text-sm text-white/80">Core welding processes for versatile fabrication needs.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">MIG Tractors</h2>
            <p className="mt-2 text-sm text-white/80">Automated MIG travel for consistent bead profile on long seams.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Plasma Cutters</h2>
            <p className="mt-2 text-sm text-white/80">High-speed cutting for conductive metals and precision profiles.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Spot Welding Machines</h2>
            <p className="mt-2 text-sm text-white/80">Resistance welding for sheet metal joining and repetitive assemblies.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Machines &amp; Tools Brochure</a>
      </section>
    </main>
  )
}