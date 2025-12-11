import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ArrowRight, CheckCircle, Shield, Truck, Users } from 'lucide-react';

// Import local images - images should be in src/assets for Vite
// The actual image will be referenced directly in the img src attribute

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Leading Industrial Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Premium Industrial 
              <span className="text-primary"> Components </span>
              & Solutions
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Your trusted partner for high-quality industrial valves, gaskets, and lubricants. 
              Delivering excellence in engineering solutions since 2010.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="group">
                <Link to="/contact" className="flex items-center">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products" className="flex items-center">
                  Explore Products
                </Link>
              </Button>
            </div>
            
            {/* Features */}
            <div className="mt-12 grid grid-cols-2 gap-4 text-left">
              {[
                { icon: <CheckCircle className="w-5 h-5 text-primary mr-2" />, text: 'Certified Quality' },
                { icon: <Truck className="w-5 h-5 text-primary mr-2" />, text: 'Fast Delivery' },
                { icon: <Shield className="w-5 h-5 text-primary mr-2" />, text: '1 Year Warranty' },
                { icon: <Users className="w-5 h-5 text-primary mr-2" />, text: '24/7 Support' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
              <img 
                src="/src/assets/images/hero/hero-main.jpg" 
                alt="Industrial valves and components"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: '10+', label: 'Years Experience' },
                    { number: '500+', label: 'Clients Served' },
                    { number: '10K+', label: 'Products Delivered' },
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>)
}