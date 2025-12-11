export default function Contact() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-white/80">Reach out for product information, application guidance, and brochures.</p>

      <section className="mt-8 grid md:grid-cols-2 gap-8">
        <form className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Send a Message</h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-white/80">Name</label>
              <input type="text" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Phone</label>
              <input type="tel" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Company</label>
              <input type="text" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700/60 px-3 py-2"></textarea>
            </div>
            <button type="submit" className="mt-2 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Submit</button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Company Details</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><span className="font-semibold">Email:</span> </li>
              <li><span className="font-semibold">Phone:</span> </li>
              <li><span className="font-semibold">Address:</span> </li>
            </ul>
          </div>
          <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Location</h2>
            <div aria-label="Google Maps Placeholder" className="mt-3 h-48 w-full rounded-lg bg-slate-700/60"></div>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <div className="rounded-2xl bg-blue-600/20 border border-blue-500/40 p-8">
          <h2 className="text-2xl font-semibold">Need product guidance or brochures?</h2>
          <p className="mt-2 text-white/80">Our team can help you select the right sealing, flow control, or lubrication solution.</p>
          <div className="mt-5 flex justify-center gap-4">
            <a href="/downloads" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-500">Downloads</a>
            <a href="/products" className="inline-flex items-center rounded-lg bg-slate-800 px-5 py-2.5 font-medium hover:bg-slate-700">Products</a>
          </div>
        </div>
      </section>
    </main>
  )
}