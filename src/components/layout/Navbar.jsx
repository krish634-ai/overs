import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { ThemeToggle } from '../ui/theme-toggle';
import { useTheme } from '../../context/theme-context';
import { navLinks } from '../../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, isDark } = useTheme();
  const submenuRef = useRef(null);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);
  
  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation for menu items
  const handleNavigation = (e, link, hasSubmenu = false) => {
    e.preventDefault();
    if (hasSubmenu) {
      setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
    } else {
      setIsOpen(false);
      navigate(link.path);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md border-b border-border/50' 
          : 'bg-background/80 backdrop-blur-sm border-b border-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                  Naveen Overseas
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 ml-6">
              <ul className="flex space-x-1">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative">
                    {link.submenu ? (
                      <div className="relative" ref={submenuRef}>
                        <div className="flex items-center">
                          <Link
                            to={link.path}
                            onClick={(e) => handleNavigation(e, link, true)}
                            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                              location.pathname.startsWith(link.path) 
                                ? 'text-primary' 
                                : 'text-foreground/80 hover:text-primary hover:bg-surface/50'
                            }`}
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
                            }}
                            className="p-1 focus:outline-none"
                            aria-label="Toggle submenu"
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${
                              activeSubmenu === link.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>
                        {activeSubmenu === link.name && (
                          <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                            <div className="py-1">
                              {link.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-foreground/80 hover:bg-surface/80 hover:text-primary transition-colors"
                                  onClick={() => setActiveSubmenu(null)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          location.pathname === link.path
                            ? 'text-primary dark:text-primary-300'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300'
                        }`}
                        onClick={(e) => handleNavigation(e, link)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

          </div>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-800">
              <Button
                fullWidth
                className="mb-2"
                as={Link}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Button>
              <Button
                variant="outline"
                fullWidth
                as={Link}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
