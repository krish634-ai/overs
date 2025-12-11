export default function Valves() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Valves &amp; Strainers</h1>
      <p className="mt-4 text-white/80">Flow control solutions across pressure classes 150–2500, with body materials and lining options tailored to service conditions.</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Valve Types</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 shadow-soft">
            <h3 className="font-semibold">Ball Valves</h3>
            <p className="mt-2 text-sm text-white/80">On/off service, tight shutoff, broad material options.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 shadow-soft">
            <h3 className="font-semibold">Butterfly Valves</h3>
            <p className="mt-2 text-sm text-white/80">Compact throttling and isolation in large diameters.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 shadow-soft">
            <h3 className="font-semibold">Gate Valves</h3>
            <p className="mt-2 text-sm text-white/80">Low pressure drop isolation for straight-through flow.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 shadow-soft">
            <h3 className="font-semibold">Globe Valves</h3>
            <p className="mt-2 text-sm text-white/80">Accurate throttling and control duties.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 shadow-soft">
            <h3 className="font-semibold">Check Valves</h3>
            <p className="mt-2 text-sm text-white/80">Prevent backflow and protect equipment.</p>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-5 shadow-soft">
            <h3 className="font-semibold">Safety Valves</h3>
            <p className="mt-2 text-sm text-white/80">Overpressure protection with set pressure control.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Strainers &amp; Sight Glasses</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h3 className="font-semibold">Strainers</h3>
            <p className="mt-2 text-sm text-white/80">Inline particulate removal to protect downstream equipment.</p>
          </div>
        <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h3 className="font-semibold">Sight Glasses</h3>
            <p className="mt-2 text-sm text-white/80">Visual flow inspection for process monitoring.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Materials &amp; Pressure Classes</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h3 className="font-semibold">Body &amp; Lining Options</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-white/80">
              <li>PP</li>
              <li>PTFE-lined</li>
              <li>Iron</li>
              <li>Steel</li>
              <li>Alloy options</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h3 className="font-semibold">Pressure Classes</h3>
            <p className="mt-2 text-sm text-white/80">Available across ASME classes 150–2500 to match service conditions.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Actuators</h2>
        <p className="mt-3 text-white/80">Actuation options for automated control and isolation across selected valve types.</p>
      </section>

      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Valves Brochure</a>
      </section>
    </main>
  )
}