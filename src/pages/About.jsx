export default function About() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">About Naveen Overseas</h1>
      <p className="mt-4 text-white/80">A focused provider of industrial gaskets, valves &amp; strainers, lubricants, and welding machines &amp; tools. Our portfolio aligns with the needs of process reliability, safety, and maintenance efficiency.</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Company Overview</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Integrated Offerings</h3>
            <p className="mt-2 text-sm text-white/80">Sealing solutions, flow control, specialty lubricants, and machines &amp; tools for fabrication and repair.</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Use-Case Alignment</h3>
            <p className="mt-2 text-sm text-white/80">Products selected around application use-cases and features to support uptime and compliance.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Strengths</h2>
        <ul className="mt-4 grid md:grid-cols-3 gap-6">
          <li className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Material Coverage</h3>
            <p className="mt-2 text-sm text-white/80">From non-asbestos and PTFE to rubber and metallic solutions.</p>
          </li>
          <li className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Pressure Classes</h3>
            <p className="mt-2 text-sm text-white/80">Valves across classes 150–2500 with multiple body materials.</p>
          </li>
          <li className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Maintenance Support</h3>
            <p className="mt-2 text-sm text-white/80">Anti-seize, greases including food-grade, and specialty fluids for critical assets.</p>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Expertise</h2>
        <p className="mt-3 text-white/80">Application-focused guidance across sealing, flow control, and lubrication, with welding machines &amp; tools to support fabrication, repair, and field operations.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Industries Served</h2>
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-white/80">
          <li className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">Process industries</li>
          <li className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">Power &amp; energy</li>
          <li className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">Manufacturing &amp; maintenance</li>
          <li className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">Food processing</li>
          <li className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">Pharmaceuticals</li>
          <li className="rounded-lg bg-slate-800/40 border border-slate-700/60 p-3">Marine &amp; offshore</li>
        </ul>
      </section>

      <section className="mt-12 text-center">
        <a href="/products" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Explore Products</a>
      </section>
    </main>
  )
}