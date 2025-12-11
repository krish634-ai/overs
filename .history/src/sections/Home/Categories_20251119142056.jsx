import { Link } from 'react-router-dom'
import Card from '../../ui/Card.jsx'

export default function Categories() {
  const items = [
    { to: '/gaskets', title: 'Industrial Gaskets', text: 'Non-asbestos, PTFE, rubber, compressed fibre, spiral-wound & metallic.' },
    { to: '/valves', title: 'Valves & Strainers', text: 'Ball, butterfly, gate, globe, check, safety valves; strainers, sight glasses.' },
    { to: '/lubricants', title: 'Lubricants', text: 'Anti-seize, greases, food-grade, specialty fluids for critical assets.' },
    { to: '/machines-tools', title: 'Machines & Tools', text: 'Welding machines, MIG tractors, plasma cutters, spot welding.' },
  ]
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold">Product Categories</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="block">
            <Card className="p-5 hover:bg-slate-800/60 transition">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-white/80">{i.text}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}