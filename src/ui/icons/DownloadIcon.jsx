export default function DownloadIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 3v10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="18" width="14" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}