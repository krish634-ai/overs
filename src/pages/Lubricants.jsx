export default function Lubricants() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Lubricants</h1>
      <p className="mt-4 text-white/80">Specialty lubrication solutions for assembly, food-grade compliance, and heavy-duty assets.</p>

      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          {lubricantsCategories.map((c) => (
            <Card key={c.title} className="p-6">
              <div className="h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src={images.lubricants[c.imageKey]} alt={c.title} />
              </div>
              <h2 className="text-xl font-semibold">{c.title}</h2>
              {Array.isArray(c.list) && c.list.length > 1 ? (
                <ul className="mt-2 list-disc list-inside text-sm text-white/80">
                  {c.list.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-white/80">{c.list[0]}</p>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Download Lubricants Brochure</a>
      </section>
    </main>
  )
}
import Image from '../ui/Image.jsx'
import { images } from '../config/images.js'
import Card from '../ui/Card.jsx'
import { lubricantsCategories } from '../data/lubricants.js'