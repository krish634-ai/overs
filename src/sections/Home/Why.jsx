import { FaShieldAlt, FaShippingFast, FaHeadset, FaAward, FaTools, FaBuilding, FaIndustry, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure top-notch products that meet international standards and specifications.',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    hoverBg: 'bg-blue-600',
    delay: 0.1
  },
  {
    icon: <FaTools className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />,
    title: 'Expert Engineering',
    description: 'Our team of experienced engineers provides technical expertise and customized solutions for complex industrial challenges.',
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
    hoverBg: 'bg-emerald-600',
    delay: 0.2
  },
  {
    icon: <FaShippingFast className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />,
    title: 'Global Logistics',
    description: 'Efficient supply chain management ensures reliable and timely delivery to any location worldwide.',
    bg: 'bg-amber-50 dark:bg-amber-900/30',
    hoverBg: 'bg-amber-600',
    delay: 0.3
  },
  {
    icon: <FaBuilding className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />,
    title: 'Established Reputation',
    description: 'Trusted by leading industries with a proven track record of excellence and reliability.',
    bg: 'bg-rose-50 dark:bg-rose-900/30',
    hoverBg: 'bg-rose-600',
    delay: 0.4
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and customer service for all your industrial needs.',
    bg: 'bg-purple-50 dark:bg-purple-900/30',
    hoverBg: 'bg-purple-600',
    delay: 0.5
  },
  {
    icon: <FaIndustry className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />,
    title: 'Industry Solutions',
    description: 'Tailored solutions for various industries including oil & gas, power, and manufacturing.',
    bg: 'bg-cyan-50 dark:bg-cyan-900/30',
    hoverBg: 'bg-cyan-600',
    delay: 0.6
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

export default function Why() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-800 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Excellence in Industrial Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are committed to delivering superior quality products and exceptional service to meet the evolving needs of industries worldwide.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group relative p-6 rounded-xl ${feature.bg} hover:${feature.hoverBg} transition-all duration-300 overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 group-hover:bg-opacity-20 group-hover:backdrop-blur-sm mb-6 transition-all duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors">
                  {feature.description}
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  )
}