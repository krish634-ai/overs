import { Link } from 'react-router-dom'
import { FaArrowRight, FaTools, FaOilCan, FaTint } from 'react-icons/fa'
import { GiValve } from 'react-icons/gi'

export default function Categories() {
  const categories = [
    {
      title: 'Gaskets',
      description: 'Premium sealing solutions for industrial applications, ensuring leak-proof performance in extreme conditions.',
      icon: <FaTint className="w-12 h-12 text-primary-500 mb-4" />,
      link: '/gaskets',
      bgGradient: 'from-blue-500 to-cyan-400',
      features: [
        'High-temperature resistant',
        'Chemical resistant',
        'Custom sizes available',
        'Industry certified'
      ]
    },
    {
      title: 'Valves',
      description: 'Precision-engineered valves for optimal flow control in various industrial applications.',
      icon: <GiValve className="w-12 h-12 text-primary-500 mb-4" />,
      link: '/valves',
      bgGradient: 'from-emerald-500 to-teal-400',
      features: [
        'High-pressure rated',
        'Corrosion resistant',
        'Low maintenance',
        'Quick response time'
      ]
    },
    {
      title: 'Lubricants',
      description: 'Specialty lubricants formulated to enhance equipment performance and longevity.',
      icon: <FaOilCan className="w-12 h-12 text-primary-500 mb-4" />,
      link: '/lubricants',
      bgGradient: 'from-amber-500 to-yellow-400',
      features: [
        'High viscosity index',
        'Oxidation resistant',
        'Extreme pressure',
        'Water resistant'
      ]
    },
    {
      title: 'Machines & Tools',
      description: 'Industrial-grade equipment for maintenance, repair, and operations.',
      icon: <FaTools className="w-12 h-12 text-primary-500 mb-4" />,
      link: '/machines-tools',
      bgGradient: 'from-rose-500 to-pink-400',
      features: [
        'Heavy duty',
        'Precision engineered',
        'Durable construction',
        'Warranty backed'
      ]
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-800 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industrial Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality industrial products designed to meet the most demanding requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.bgGradient} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="p-6 text-white">
                <div className="flex flex-col items-center text-center">
                  {category.icon}
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <ul className="text-left w-full space-y-2 mb-6">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={category.link}
                    className="mt-auto inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-medium transition-all duration-300"
                  >
                    Explore {category.title}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}