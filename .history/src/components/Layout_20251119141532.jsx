import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-blue-950 text-gray-100">
      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/60 backdrop-blur">
        <Nav />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}