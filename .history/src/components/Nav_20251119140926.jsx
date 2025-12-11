import { NavLink } from 'react-router-dom'

export default function Nav() {
  const linkClass = ({ isActive }) =>
    `hover:text-white/90 ${isActive ? 'text-white' : 'text-white/80'}`

  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <NavLink to="/" className="text-xl font-semibold tracking-wide">Naveen Overseas</NavLink>
      <ul className="hidden md:flex items-center gap-6 text-sm">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/products" className={linkClass}>Products</NavLink></li>
        <li><NavLink to="/gaskets" className={linkClass}>Gaskets</NavLink></li>
        <li><NavLink to="/valves" className={linkClass}>Valves</NavLink></li>
        <li><NavLink to="/lubricants" className={linkClass}>Lubricants</NavLink></li>
        <li><NavLink to="/machines-tools" className={linkClass}>Machines &amp; Tools</NavLink></li>
        <li><NavLink to="/downloads" className={linkClass}>Downloads</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
      </ul>
      <NavLink to="/contact" className="md:hidden inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500">Contact</NavLink>
    </nav>
  )
}