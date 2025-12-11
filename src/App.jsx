import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gaskets from './pages/Gaskets';
import Valves from './pages/Valves';
import Lubricants from './pages/Lubricants';
import MachinesTools from './pages/MachinesTools';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        {/* Products and Sub-pages */}
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="valves" element={<Valves />} />
          <Route path="gaskets" element={<Gaskets />} />
          <Route path="lubricants" element={<Lubricants />} />
          <Route path="machines-tools" element={<MachinesTools />} />
        </Route>
        
        {/* Other Pages */}
        <Route path="contact" element={<Contact />} />
        <Route path="downloads" element={<Downloads />} />
        
        {/* Redirect old routes to new structure */}
        <Route path="valves" element={<Navigate to="/products/valves" replace />} />
        <Route path="gaskets" element={<Navigate to="/products/gaskets" replace />} />
        <Route path="lubricants" element={<Navigate to="/products/lubricants" replace />} />
        <Route path="machines-tools" element={<Navigate to="/products/machines-tools" replace />} />
      </Route>
    </Routes>
  );
}