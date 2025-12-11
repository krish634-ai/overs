export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-800/60">
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm text-white/70">
        <div>
          <div className="font-semibold">Naveen Overseas</div>
          <p className="mt-2">Industrial gaskets, valves &amp; strainers, lubricants, machines &amp; tools.</p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/products" className="hover:text-white/90">Products Overview</a></li>
            <li><a href="/downloads" className="hover:text-white/90">Downloads</a></li>
            <li><a href="/contact" className="hover:text-white/90">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-1">
            <li>Email: </li>
            <li>Phone: </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 pb-6 text-xs text-white/60">&copy; Naveen Overseas</div>
    </footer>
  )
}