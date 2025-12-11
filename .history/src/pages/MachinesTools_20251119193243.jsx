export default function MachinesTools() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Machines &amp; Tools</h1>
      <p className="mt-4 text-white/80">Fabrication and repair equipment to support field and shop operations.</p>

      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          {machines.map((m) => (
            <Card key={m.title} className="p-6">
              <div className="h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src={images.machines[m.imageKey]} alt={m.title} />
              </div>
              <h2 className="text-xl font-semibold">{m.title}</h2>
              <p className="mt-2 text-sm text-white/80">{m.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Machines &amp; Tools Brochure</a>
      </section>
    </main>
  )
}
import Card from '../ui/Card.jsx'
import { machines } from '../data/machines.js'