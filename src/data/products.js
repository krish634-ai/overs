// Product categories and sample data
export const productCategories = [
  {
    id: 'valves',
    name: 'Valves',
    description: 'High-quality industrial valves for various applications',
    image: 'https://images.unsplash.com/photo-1580504884189-7b9e7b1e8b6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      { 
        id: 'ball-valve', 
        name: 'Stainless Steel Ball Valve', 
        description: 'High-pressure ball valve for industrial applications',
        image: 'https://images.unsplash.com/photo-1580504884189-7b9e7b1e8b6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['1/2" to 4" sizes', 'Stainless Steel 316', 'WOG 1000', 'Temperature: -20°C to 150°C']
      },
      { 
        id: 'gate-valve', 
        name: 'Industrial Gate Valve', 
        description: 'Heavy-duty gate valve for water and gas applications',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['2" to 12" sizes', 'Cast Iron/Ductile Iron', 'PN16/PN25', 'Temperature: -10°C to 120°C']
      },
      { 
        id: 'butterfly-valve', 
        name: 'Wafer Butterfly Valve', 
        description: 'Compact and lightweight butterfly valve for flow control',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['2" to 48" sizes', 'SS304/SS316', 'PN10/PN16', 'Temperature: -10°C to 120°C']
      },
      { 
        id: 'check-valve', 
        name: 'Swing Check Valve', 
        description: 'Prevents backflow in pipeline systems',
        image: 'https://images.unsplash.com/photo-1566933293066-fe9b0fce3d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['1/2" to 24" sizes', 'Carbon Steel/Stainless Steel', '150# to 2500#', 'API 6D/API 6A']
      }
    ]
  },
  {
    id: 'gaskets',
    name: 'Gaskets',
    description: 'Durable gaskets for industrial sealing solutions',
    image: 'https://images.unsplash.com/photo-1583508915901-b91dae89ce0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      { 
        id: 'rubber-gasket', 
        name: 'EPDM Rubber Gasket', 
        description: 'Ethylene Propylene Diene Monomer gasket for water and steam',
        image: 'https://images.unsplash.com/photo-1583508915901-b91dae89ce0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Thickness: 1.5mm to 6mm', 'Temperature: -40°C to 150°C', 'Pressure: Up to 16 bar', 'Standards: DIN, ANSI, BS, IS']
      },
      { 
        id: 'spiral-wound', 
        name: 'Spiral Wound Gasket', 
        description: 'Stainless steel spiral wound gasket with graphite filler',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Sizes: 15mm to 1500mm', 'Materials: SS304/316 with Graphite', 'Pressure: Up to 300 bar', 'Standards: ASME B16.20, EN 1514']
      },
      { 
        id: 'ptfe-gasket', 
        name: 'PTFE Gasket', 
        description: 'Chemical resistant PTFE gasket for corrosive applications',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Thickness: 0.5mm to 6mm', 'Temperature: -200°C to 260°C', 'Chemically inert', 'FDA approved']
      }
    ]
  },
  {
    id: 'lubricants',
    name: 'Lubricants',
    description: 'High-performance lubricants for industrial machinery',
    image: 'https://images.unsplash.com/photo-1601001815894-4cd2c80f5568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      { 
        id: 'gear-oil', 
        name: 'EP Gear Oil', 
        description: 'Extreme pressure gear oil for industrial gearboxes',
        image: 'https://images.unsplash.com/photo-1601001815894-4cd2c80f5568?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Viscosity: ISO VG 68 to 680', 'Extreme Pressure (EP) additives', 'Oxidation stability', 'Anti-wear protection']
      },
      { 
        id: 'hydraulic-oil', 
        name: 'Anti-Wear Hydraulic Oil', 
        description: 'Premium hydraulic oil with anti-wear additives',
        image: 'https://images.unsplash.com/photo-1576075796039-f2ab03b9cb50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Viscosity: ISO VG 32 to 100', 'Anti-wear (AW) protection', 'Anti-foaming', 'Rust and corrosion inhibitors']
      },
      { 
        id: 'compressor-oil', 
        name: 'Synthetic Compressor Oil', 
        description: 'High-performance oil for air compressors',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1f3426fa05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['PAO synthetic base oil', 'Oxidation stability', 'Reduces carbon deposits', 'Extended drain intervals']
      }
    ]
  },
  {
    id: 'machines-tools',
    name: 'Machines & Tools',
    description: 'Industrial machines and tools for various applications',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      { 
        id: 'pump', 
        name: 'Centrifugal Pump', 
        description: 'Heavy-duty centrifugal pump for water and chemicals',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Flow rate: Up to 1000 m³/h', 'Head: Up to 100m', 'Materials: CI/SS/PP', 'Motor: IE3/IE4 efficiency']
      },
      { 
        id: 'compressor', 
        name: 'Screw Air Compressor', 
        description: 'Energy efficient industrial air compressor',
        image: 'https://images.unsplash.com/photo-1581093057305-25f8bd03085b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Capacity: 5.5kW to 250kW', 'Pressure: 7 to 15 bar', 'Oil-injected & oil-free options', 'Variable speed drive available']
      },
      { 
        id: 'welding-machine', 
        name: 'MIG Welding Machine', 
        description: 'Industrial MIG welding machine with digital controls',
        image: 'https://images.unsplash.com/photo-1581093057305-25f8bd03085b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: ['Input: 415V 3-phase', 'Output: 200-400A', 'Duty cycle: 60% @ 40°C', 'IGBT inverter technology']
      }
    ]
  }
];

// Navigation links
export const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Products', 
    path: '/products',
    submenu: [
      { name: 'Valves', path: '/products/valves' },
      { name: 'Gaskets', path: '/products/gaskets' },
      { name: 'Lubricants', path: '/products/lubricants' },
      { name: 'Machines & Tools', path: '/products/machines-tools' },
    ]
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Downloads', path: '/downloads' },
];
