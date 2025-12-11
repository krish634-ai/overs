import LinkButton from '../../ui/LinkButton.jsx'
import Image from '../../ui/Image.jsx'
import { images } from '../../config/images.js'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">Industrial Gaskets, Valves, Lubricants, and Welding Tools</h1>
          <p className="mt-4 text-white/80">Comprehensive solutions for sealing, flow control, and maintenance. From advanced gasket technologies to high-performance valves, specialty lubricants, and welding machines.</p>
          <div className="mt-6 flex gap-4">
            <LinkButton to="/products">Explore Products</LinkButton>
            <LinkButton to="/downloads" variant="secondary">Download Brochures</LinkButton>
          </div>
        </div>
        <div className="rounded-xl bg-slate-900/40 p-6 ring-1 ring-white/10 shadow-soft">
          <div className="h-48 w-full rounded-lg overflow-hidden">
            <Image src={images.hero} alt="Industrial solutions" />
          </div>
          <p className="mt-3 text-xs text-white/70">Industrial solutions for process reliability.</p>
        </div>
      </div>
    </section>
  )
}