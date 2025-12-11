export default function ValveIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="5" y="10" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 10V6M12 18v-4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 6h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}