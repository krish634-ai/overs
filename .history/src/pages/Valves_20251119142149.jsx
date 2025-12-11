import Card from '../ui/Card.jsx'
import { valveTypes, strainersSight, materials, pressureClassesText } from '../data/valves.js'

export default function Valves() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Valves &amp; Strainers</h1>
      <p className="mt-4 text-white/80">Flow control solutions across pressure classes 150–2500, with body materials and lining options tailored to service conditions.</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Valve Types</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {valveTypes.map((v) => (
            <Card key={v.title} className="p-5">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-white/80">{v.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Strainers &amp; Sight Glasses</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {strainersSight.map((s) => (
            <Card key={s.title} className="p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Materials &amp; Pressure Classes</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold">Body &amp; Lining Options</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-white/80">
              {materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Pressure Classes</h3>
            <p className="mt-2 text-sm text-white/80">{pressureClassesText}</p>
          </Card>
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