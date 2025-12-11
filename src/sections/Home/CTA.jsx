import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCalendarAlt, FaHeadset } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMGMwIDIuMjA5IDEuNzkxIDQgNCA0czQtMS43OTEgNC00LTEuNzkxLTQtNC00LTQgMS43OTEtNCA0eiIvPjwvZz48L2c+PC9zdmc+')]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-200 bg-white/10 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our team of experts is ready to provide you with the best industrial solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaPhoneAlt className="w-6 h-6" />,
              title: 'Call Us',
              text: '+91 98765 43210',
              subtext: 'Mon - Sat, 9:00 AM - 6:00 PM',
              link: 'tel:+919876543210',
              button: (
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              )
            },
            {
              icon: <FaEnvelope className="w-6 h-6" />,
              title: 'Email Us',
              text: 'info@naveenoverseas.com',
              subtext: 'We typically respond within 24 hours',
              link: 'mailto:info@naveenoverseas.com',
              button: (
                <a 
                  href="mailto:info@naveenoverseas.com" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              )
            },
            {
              icon: <FaMapMarkerAlt className="w-6 h-6" />,
              title: 'Visit Us',
              text: '123 Industrial Area, Andheri East',
              subtext: 'Mumbai, Maharashtra 400069, India',
              link: 'https://maps.google.com',
              button: (
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-400/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                <div className="text-primary-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary-100 font-medium">{item.text}</p>
              <p className="text-primary-200 text-sm mt-1 mb-4">{item.subtext}</p>
              {item.button}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/20 mb-6">
              <FaHeadset className="w-8 h-8 text-primary-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg text-primary-100 mb-6">
              Our customer support team is available 24/7 to answer your questions and provide technical assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210" 
                className="px-6 py-3 bg-white text-primary-700 hover:bg-gray-100 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <FaPhoneAlt className="w-4 h-4 mr-2" />
                Call Now: +91 98765 43210
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}