import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from '../ui/Toaster';
import { theme } from '../../theme';

const Layout = ({ children, title = 'Naveen Overseas', description = 'Premium industrial valves, gaskets, and components for demanding applications' }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Head>
        <title>{title} | Naveen Overseas</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naveenoverseas.com/" />
        <meta property="og:title" content={`${title} | Naveen Overseas`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://naveenoverseas.com/" />
        <meta property="twitter:title" content={`${title} | Naveen Overseas`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/images/og-image.jpg" />
      </Head>

      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --color-primary: ${theme.colors.primary.DEFAULT};
          --color-primary-foreground: ${theme.colors.primary.foreground};
          --color-secondary: ${theme.colors.secondary.DEFAULT};
          --color-secondary-foreground: ${theme.colors.secondary.foreground};
          --color-accent: ${theme.colors.accent.DEFAULT};
          --color-accent-foreground: ${theme.colors.accent.foreground};
          --color-background: ${theme.colors.background.DEFAULT};
          --color-background-dark: ${theme.colors.background.dark};
          --color-text-primary: ${theme.colors.text.primary};
          --color-text-secondary: ${theme.colors.text.secondary};
          --color-text-muted: ${theme.colors.text.muted};
          --color-text-inverted: ${theme.colors.text.inverted};
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: ${theme.typography.fontFamily.sans.join(', ')};
          color: var(--color-text-primary);
          background-color: var(--color-background);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${theme.typography.fontFamily.heading.join(', ')};
          font-weight: 700;
          line-height: ${theme.typography.lineHeight.tight};
          color: var(--color-text-primary);
        }

        a {
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${theme.colors.secondary[100]};
        }

        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.primary[500]};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.primary[600]};
        }

        /* Selection */
        ::selection {
          background: ${theme.colors.primary[500]};
          color: white;
        }

        /* Focus styles */
        *:focus-visible {
          outline: 2px solid ${theme.colors.primary[500]};
          outline-offset: 2px;
          border-radius: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
