export default function Gaskets() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Industrial Gaskets</h1>
      <p className="mt-4 text-white/80">Sealing solutions engineered for reliability and compatibility across process conditions.</p>
      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          {gasketCategories.map((c) => (
            <Card key={c.title} className={`p-6 ${c.wide ? 'md:col-span-2' : ''}`}>
              <div className="h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src={images.gaskets[c.imageKey]} alt={c.title} />
              </div>
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="mt-2 text-white/80 text-sm">{c.description}</p>
              <h3 className="mt-3 font-semibold text-sm">Use-cases &amp; Features</h3>
              <ul className={`mt-1 list-disc list-inside text-sm text-white/80 ${c.wide ? 'grid md:grid-cols-2' : ''}`}>
                {c.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Gaskets Brochure</a>
      </section>
    </main>
  )
}
import Card from '../ui/Card.jsx'
import { gasketCategories } from '../data/gaskets.js'