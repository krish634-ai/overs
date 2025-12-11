import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navPrimary, productsDropdown } from '../config/navLinks.js'
import GasketIcon from '../ui/icons/GasketIcon.jsx'
import ValveIcon from '../ui/icons/ValveIcon.jsx'
import LubricantIcon from '../ui/icons/LubricantIcon.jsx'
import ToolsIcon from '../ui/icons/ToolsIcon.jsx'

export default function Nav() {
  const [openProducts, setOpenProducts] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/80'}`

  const productIcons = {
    '/products': ToolsIcon,
    '/gaskets': GasketIcon,
    '/valves': ValveIcon,
    '/lubricants': LubricantIcon,
    '/machines-tools': ToolsIcon,
  }

  return (
    <div className="container mx-auto px-6">
      <div className="flex h-16 items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold tracking-wide">Naveen Overseas</NavLink>
        <div className="hidden md:flex items-center gap-8">
          {navPrimary.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
          <div className="relative">
            <button className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2" onClick={() => setOpenProducts(v => !v)}>
              Products
              <span className={`transition-transform ${openProducts ? 'rotate-180' : 'rotate-0'}`}>▾</span>
            </button>
            {openProducts && (
              <div className="absolute left-0 mt-3 w-[560px] rounded-xl bg-slate-900/90 backdrop-blur ring-1 ring-white/10 shadow-soft p-6 grid grid-cols-2 gap-4">
                {productsDropdown.map((p, idx) => {
                  const Icon = productIcons[p.to]
                  return (
                    <Link key={p.to} to={p.to} className={`${idx === 0 ? 'col-span-2' : ''} rounded-lg bg-slate-800/40 ring-1 ring-white/10 px-4 py-3 hover:bg-slate-800/60 flex items-center gap-3`}>
                      <div className="h-8 w-8 rounded-md bg-slate-900/60 grid place-items-center text-white/80">{Icon ? <Icon /> : null}</div>
                      <span>{p.label}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
          <NavLink to="/downloads" className={linkClass}>Downloads</NavLink>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/contact" className="inline-flex items-center rounded-lg bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark">Contact</NavLink>
        </div>
        <button className="md:hidden inline-flex items-center rounded-lg bg-slate-800 px-3 py-2" onClick={() => setMobileOpen(true)}>Menu</button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur">
          <div className="absolute inset-x-0 top-0 bg-slate-900/90 p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-lg font-semibold">Naveen Overseas</Link>
              <button className="inline-flex items-center rounded-lg bg-slate-800 px-3 py-2" onClick={() => setMobileOpen(false)}>Close</button>
            </div>
            <div className="mt-6 grid gap-3 text-sm">
              {navPrimary.map((l) => (
                <NavLink key={l.to} to={l.to} className="rounded-lg bg-slate-800/40 px-4 py-3" onClick={() => setMobileOpen(false)}>{l.label}</NavLink>
              ))}
              {productsDropdown.map((p) => {
                const Icon = productIcons[p.to]
                return (
                  <NavLink key={p.to} to={p.to} className="rounded-lg bg-slate-800/40 px-4 py-3 flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                    <div className="h-8 w-8 rounded-md bg-slate-900/60 grid place-items-center text-white/80">{Icon ? <Icon /> : null}</div>
                    <span>{p.label}</span>
                  </NavLink>
                )
              })}
              <NavLink to="/contact" className="rounded-lg bg-brand px-4 py-3 text-center" onClick={() => setMobileOpen(false)}>Contact</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}