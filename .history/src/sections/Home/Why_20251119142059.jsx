import Card from '../../ui/Card.jsx'

export default function Why() {
  const items = [
    { title: 'Comprehensive Portfolio', text: 'End-to-end coverage across sealing, flow control, lubrication, and fabrication tools.' },
    { title: 'Application Expertise', text: 'Use-case driven selection and features for process reliability.' },
    { title: 'Material Options', text: 'PP, PTFE-lined, iron, steel, and alloy options to match conditions.' },
  ]
  return (
    <section className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold">Why Choose Us</h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <Card key={i.title} className="p-5">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-white/80">{i.text}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}