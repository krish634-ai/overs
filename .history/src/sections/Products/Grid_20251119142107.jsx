import { Link } from 'react-router-dom'
import Card from '../../ui/Card.jsx'

export default function ProductsGrid() {
  const cards = [
    {
      to: '/gaskets',
      title: 'Industrial Gaskets',
      items: ['Non-asbestos gaskets', 'PTFE gaskets', 'Rubber gaskets', 'Compressed fibre jointing sheets', 'Spiral-wound & metallic gaskets'],
    },
    {
      to: '/valves',
      title: 'Valves & Strainers',
      items: ['Ball, butterfly, gate, globe, check, safety valves', 'Strainers, sight glasses', 'PP, PTFE-lined, iron, steel, alloy options', 'Pressure classes 150–2500', 'Actuators'],
    },
    {
      to: '/lubricants',
      title: 'Lubricants',
      items: ['Anti-seize compounds', 'Greases: lithium, complex, polyurea, silicone', 'Food-grade lubricants', 'Specialty: open gear, wire rope, valve lubricants'],
    },
    {
      to: '/machines-tools',
      title: 'Machines & Tools',
      items: ['Welding machines (MMA / TIG / MIG)', 'MIG tractors', 'Plasma cutters', 'Spot welding machines'],
    },
  ]

  return (
    <section className="mt-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="block">
            <Card className="p-5 hover:bg-slate-800/60 transition">
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}