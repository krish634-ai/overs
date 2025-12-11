import { Link } from 'react-router-dom'
import Card from '../../ui/Card.jsx'
import Image from '../../ui/Image.jsx'
import { images } from '../../config/images.js'
import GasketIcon from '../../ui/icons/GasketIcon.jsx'
import ValveIcon from '../../ui/icons/ValveIcon.jsx'
import LubricantIcon from '../../ui/icons/LubricantIcon.jsx'
import ToolsIcon from '../../ui/icons/ToolsIcon.jsx'

export default function Categories() {
  const items = [
    { to: '/gaskets', imgKey: 'gaskets', title: 'Industrial Gaskets', text: 'Non-asbestos, PTFE, rubber, compressed fibre, spiral-wound & metallic.', Icon: GasketIcon },
    { to: '/valves', imgKey: 'valves', title: 'Valves & Strainers', text: 'Ball, butterfly, gate, globe, check, safety valves; strainers, sight glasses.', Icon: ValveIcon },
    { to: '/lubricants', imgKey: 'lubricants', title: 'Lubricants', text: 'Anti-seize, greases, food-grade, specialty fluids for critical assets.', Icon: LubricantIcon },
    { to: '/machines-tools', imgKey: 'tools', title: 'Machines & Tools', text: 'Welding machines, MIG tractors, plasma cutters, spot welding.', Icon: ToolsIcon },
  ]
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold">Product Categories</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="block">
            <Card className="p-5 hover:bg-slate-800/60 transition">
              <div className="h-32 w-full rounded-lg overflow-hidden mb-4">
                <Image src={images.categories[i.imgKey]} alt={i.title} />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-slate-800/60 grid place-items-center text-white/80">
                  <i.Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{i.title}</h3>
              </div>
              <p className="mt-2 text-sm text-white/80">{i.text}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}