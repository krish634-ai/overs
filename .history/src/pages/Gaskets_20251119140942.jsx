export default function Gaskets() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Industrial Gaskets</h1>
      <p className="mt-4 text-white/80">Sealing solutions engineered for reliability and compatibility across process conditions.</p>
      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h2 className="text-xl font-semibold">Non-Asbestos Gaskets</h2>
            <p className="mt-2 text-white/80 text-sm">Asbestos-free formulations designed for sealing integrity and safety compliance.</p>
            <h3 className="mt-3 font-semibold text-sm">Use-cases &amp; Features</h3>
            <ul className="mt-1 list-disc list-inside text-sm text-white/80">
              <li>General industrial sealing</li>
              <li>Compliance-focused applications</li>
              <li>Balanced mechanical properties</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h2 className="text-xl font-semibold">PTFE Gaskets</h2>
            <p className="mt-2 text-white/80 text-sm">PTFE-based solutions for chemical resistance and low friction sealing.</p>
            <h3 className="mt-3 font-semibold text-sm">Use-cases &amp; Features</h3>
            <ul className="mt-1 list-disc list-inside text-sm text-white/80">
              <li>Chemical processing lines</li>
              <li>Corrosive media handling</li>
              <li>Low cold-flow options</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h2 className="text-xl font-semibold">Rubber Gaskets</h2>
            <p className="mt-2 text-white/80 text-sm">Elastomeric sealing for flexibility and vibration damping.</p>
            <h3 className="mt-3 font-semibold text-sm">Use-cases &amp; Features</h3>
            <ul className="mt-1 list-disc list-inside text-sm text-white/80">
              <li>Low to medium pressure systems</li>
              <li>Water &amp; utility services</li>
              <li>Conformability and resilience</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h2 className="text-xl font-semibold">Compressed Fibre Jointing Sheets</h2>
            <p className="mt-2 text-white/80 text-sm">Composite fibre sheets tailored for joint integrity and controlled compressibility.</p>
            <h3 className="mt-3 font-semibold text-sm">Use-cases &amp; Features</h3>
            <ul className="mt-1 list-disc list-inside text-sm text-white/80">
              <li>Flanged joints and pipework</li>
              <li>Broad media compatibility</li>
              <li>Stable sealing under bolt load</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">Spiral-Wound &amp; Metallic Gaskets</h2>
            <p className="mt-2 text-white/80 text-sm">Metallic and spiral-wound constructions for elevated pressures and temperatures.</p>
            <h3 className="mt-3 font-semibold text-sm">Use-cases &amp; Features</h3>
            <ul className="mt-1 list-disc list-inside text-sm text-white/80 grid md:grid-cols-2">
              <li>High-pressure pipelines</li>
              <li>Thermal cycling environments</li>
              <li>Robust mechanical strength</li>
              <li>Configuration options for media</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Gaskets Brochure</a>
      </section>
    </main>
  )
}