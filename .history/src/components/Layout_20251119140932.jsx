import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 text-gray-100">
      <header className="border-b border-slate-800/60">
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}