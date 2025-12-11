import { Link } from 'react-router-dom'
import Card from '../../ui/Card.jsx'
import GasketIcon from '../../ui/icons/GasketIcon.jsx'
import ValveIcon from '../../ui/icons/ValveIcon.jsx'
import LubricantIcon from '../../ui/icons/LubricantIcon.jsx'
import ToolsIcon from '../../ui/icons/ToolsIcon.jsx'

export default function ProductsGrid() {
  const cards = [
    {
      to: '/gaskets',
      title: 'Industrial Gaskets',
      items: ['Non-asbestos gaskets', 'PTFE gaskets', 'Rubber gaskets', 'Compressed fibre jointing sheets', 'Spiral-wound & metallic gaskets'],
      Icon: GasketIcon,
    },
    {
      to: '/valves',
      title: 'Valves & Strainers',
      items: ['Ball, butterfly, gate, globe, check, safety valves', 'Strainers, sight glasses', 'PP, PTFE-lined, iron, steel, alloy options', 'Pressure classes 150–2500', 'Actuators'],
      Icon: ValveIcon,
    },
    {
      to: '/lubricants',
      title: 'Lubricants',
      items: ['Anti-seize compounds', 'Greases: lithium, complex, polyurea, silicone', 'Food-grade lubricants', 'Specialty: open gear, wire rope, valve lubricants'],
      Icon: LubricantIcon,
    },
    {
      to: '/machines-tools',
      title: 'Machines & Tools',
      items: ['Welding machines (MMA / TIG / MIG)', 'MIG tractors', 'Plasma cutters', 'Spot welding machines'],
      Icon: ToolsIcon,
    },
  ]

  return (
    <section className="mt-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="block">
            <Card className="p-5 hover:bg-slate-800/60 transition">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-800/60 grid place-items-center text-white/80"><c.Icon className="h-5 w-5" /></div>
                <h2 className="text-xl font-semibold">{c.title}</h2>
              </div>
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