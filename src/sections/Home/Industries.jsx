import { FaOilWell, FaBolt, FaFlask, FaWater, FaPills, FaIndustry, FaShip, FaBuilding } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Oil & Gas',
    icon: <FaOilWell className="w-8 h-8" />,
    description: 'Upstream, midstream, and downstream solutions',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-900/30'
  },
  {
    name: 'Power Generation',
    icon: <FaBolt className="w-8 h-8" />,
    description: 'Thermal, nuclear, and renewable energy',
    color: 'from-yellow-500 to-yellow-600',
    bg: 'bg-yellow-50 dark:bg-yellow-900/30'
  },
  {
    name: 'Chemical',
    icon: <FaFlask className="w-8 h-8" />,
    description: 'Specialty and bulk chemical processing',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-900/30'
  },
  {
    name: 'Water Treatment',
    icon: <FaWater className="w-8 h-8" />,
    description: 'Clean water and wastewater solutions',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-900/30'
  },
  {
    name: 'Pharmaceutical',
    icon: <FaPills className="w-8 h-8" />,
    description: 'GMP compliant processing',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/30'
  },
  {
    name: 'Manufacturing',
    icon: <FaIndustry className="w-8 h-8" />,
    description: 'Industrial manufacturing solutions',
    color: 'from-gray-500 to-gray-600',
    bg: 'bg-gray-50 dark:bg-gray-800/30'
  },
  {
    name: 'Marine',
    icon: <FaShip className="w-8 h-8" />,
    description: 'Marine and offshore applications',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/30'
  },
  {
    name: 'Commercial',
    icon: <FaBuilding className="w-8 h-8" />,
    description: 'Commercial building services',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-900/30'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Industries() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-800 rounded-full mb-4">
            Our Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industrial sectors with unmatched expertise and reliability.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group relative overflow-hidden rounded-xl p-6 ${industry.bg} hover:shadow-xl transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 bg-gradient-to-br ${industry.color} text-white`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Don't see your industry listed? We likely have solutions for you too.
          </p>
          <button className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg shadow hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  )
}