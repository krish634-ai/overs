import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Valves', to: '/products/valves' },
        { name: 'Gaskets', to: '/products/gaskets' },
        { name: 'Lubricants', to: '/products/lubricants' },
        { name: 'Fasteners', to: '/products/fasteners' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: '/about' },
        { name: 'Our Team', to: '/about#team' },
        { name: 'Careers', to: '/careers' },
        { name: 'Blog', to: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', to: '/contact' },
        { name: 'FAQs', to: '/faq' },
        { name: 'Shipping Policy', to: '/shipping' },
        { name: 'Returns & Refunds', to: '/returns' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />,
      text: '123 Industrial Area, Phase 2, Mumbai, Maharashtra 400001',
    },
    {
      icon: <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />,
      text: '+91 98765 43210',
    },
    {
      icon: <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />,
      text: 'info@naveenoverseas.com',
    },
    {
      icon: <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />,
      text: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      href: 'https://facebook.com',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://twitter.com',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                Naveen Overseas
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for high-quality industrial valves, gaskets, lubricants, and fasteners. 
              Delivering excellence in industrial solutions since 2005.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-0.5">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Naveen Overseas. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
