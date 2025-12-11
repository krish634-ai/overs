import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Industrial Gaskets, Valves, Lubricants, and Welding Tools</h1>
            <p className="mt-4 text-white/80">Comprehensive solutions for sealing, flow control, and maintenance. From advanced gasket technologies to high-performance valves, specialty lubricants, and welding machines.</p>
            <div className="mt-6 flex gap-4">
              <Link to="/products" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Explore Products</Link>
              <Link to="/downloads" className="inline-flex items-center rounded-lg bg-slate-800 px-5 py-2.5 font-medium hover:bg-slate-700">Download Brochures</Link>
            </div>
          </div>
          <div className="rounded-xl bg-slate-800/40 p-6 border border-slate-700/60">
            <div data-image="hero-industrial.jpg" className="h-48 w-full rounded-lg bg-slate-700/60"></div>
            <p className="mt-3 text-xs text-white/60">Industrial solutions for process reliability.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold">Product Categories</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/gaskets" className="block rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:bg-slate-800/60">
            <h3 className="text-lg font-semibold">Industrial Gaskets</h3>
            <p className="mt-2 text-sm text-white/80">Non-asbestos, PTFE, rubber, compressed fibre, spiral-wound &amp; metallic.</p>
          </Link>
          <Link to="/valves" className="block rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:bg-slate-800/60">
            <h3 className="text-lg font-semibold">Valves &amp; Strainers</h3>
            <p className="mt-2 text-sm text-white/80">Ball, butterfly, gate, globe, check, safety valves; strainers, sight glasses.</p>
          </Link>
          <Link to="/lubricants" className="block rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:bg-slate-800/60">
            <h3 className="text-lg font-semibold">Lubricants</h3>
            <p className="mt-2 text-sm text-white/80">Anti-seize, greases, food-grade, specialty fluids for critical assets.</p>
          </Link>
          <Link to="/machines-tools" className="block rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:bg-slate-800/60">
            <h3 className="text-lg font-semibold">Machines &amp; Tools</h3>
            <p className="mt-2 text-sm text-white/80">Welding machines, MIG tractors, plasma cutters, spot welding.</p>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold">Why Choose Us</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Comprehensive Portfolio</h3>
            <p className="mt-2 text-sm text-white/80">End-to-end coverage across sealing, flow control, lubrication, and fabrication tools.</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Application Expertise</h3>
            <p className="mt-2 text-sm text-white/80">Use-case driven selection and features for process reliability.</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
            <h3 className="font-semibold">Material Options</h3>
            <p className="mt-2 text-sm text-white/80">PP, PTFE-lined, iron, steel, and alloy options to match conditions.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
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

      <section className="container mx-auto px-6 py-12">
        <div className="rounded-2xl bg-blue-600/20 border border-blue-500/40 p-8 text-center">
          <h2 className="text-2xl font-semibold">Need reliable sealing, flow control, or maintenance solutions?</h2>
          <p className="mt-2 text-white/80">Explore brochures or contact us for application guidance.</p>
          <div className="mt-5 flex justify-center gap-4">
            <Link to="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Brochures</Link>
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-slate-800 px-5 py-2.5 font-medium hover:bg-slate-700">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}