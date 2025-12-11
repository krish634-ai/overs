export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl bg-slate-900/40 ring-1 ring-white/10 shadow-soft ${className}`}>
      {children}
    </div>
  )
}