import LinkButton from '../../ui/LinkButton.jsx'

export default function CTA() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="rounded-2xl bg-blue-600/20 border border-blue-500/40 p-8 text-center">
        <h2 className="text-2xl font-semibold">Need reliable sealing, flow control, or maintenance solutions?</h2>
        <p className="mt-2 text-white/80">Explore brochures or contact us for application guidance.</p>
        <div className="mt-5 flex justify-center gap-4">
          <LinkButton to="/downloads">Download Brochures</LinkButton>
          <LinkButton to="/contact" variant="secondary">Contact Us</LinkButton>
        </div>
      </div>
    </section>
  )
}