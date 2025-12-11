import { Link } from 'react-router-dom'

export default function LinkButton({ to, variant = 'primary', children, className = '' }) {
  const base = 'inline-flex items-center rounded-lg px-5 py-2.5 font-medium transition'
  const variants = {
    primary: 'bg-brand hover:bg-brand-dark',
    secondary: 'bg-slate-800 hover:bg-slate-700',
  }
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}