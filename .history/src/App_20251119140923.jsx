import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Gaskets from './pages/Gaskets.jsx'
import Valves from './pages/Valves.jsx'
import Lubricants from './pages/Lubricants.jsx'
import MachinesTools from './pages/MachinesTools.jsx'
import Contact from './pages/Contact.jsx'
import Downloads from './pages/Downloads.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gaskets" element={<Gaskets />} />
        <Route path="/valves" element={<Valves />} />
        <Route path="/lubricants" element={<Lubricants />} />
        <Route path="/machines-tools" element={<MachinesTools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </Layout>
  )
}