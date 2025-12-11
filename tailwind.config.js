const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode (optional)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Base colors - Modern light theme
        border: 'hsl(214, 20%, 90%)',
        input: 'hsl(0, 0%, 100%)',
        ring: 'hsl(215, 100%, 60%)',
        background: 'hsl(0, 0%, 98%)',
        foreground: 'hsl(220, 25%, 15%)',
        
        // Primary - Deep Ocean Blue
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a2ff',
          500: '#0d8af2',
          600: '#0069d1',
          700: '#0153a8',
          800: '#064785',
          900: '#0b3d6e',
          DEFAULT: '#0069d1',
          foreground: '#ffffff',
        },
        
        // Surface - Clean White
        surface: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
          DEFAULT: '#ffffff',
          foreground: '#1e293b',
        },
        
        // Secondary - Slate Gray
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#475569',
          foreground: '#ffffff',
        },
        
        // Accent - Teal
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          DEFAULT: '#0d9488',
          foreground: '#ffffff',
        },
        
        // Success - Emerald
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: '#10b981',
          foreground: '#ffffff',
        },
        
        // Warning - Amber
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#f59e0b',
          foreground: '#000000',
        },
        
        // Destructive - Rose
        destructive: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          DEFAULT: '#f43f5e',
          foreground: '#ffffff',
        },
        
        // Muted colors
        muted: {
          DEFAULT: 'hsl(210, 20%, 95%)',
          foreground: 'hsl(215, 20%, 40%)',
        },
        
        // Card colors
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(220, 25%, 15%)',
        },
        
        // Brand colors
        brand: {
          DEFAULT: '#0069d1',
          foreground: '#ffffff',
          dark: '#064785',
          light: '#36a2ff',
          gradient: 'linear-gradient(135deg, #0069d1 0%, #0b3d6e 100%)',
        },
      },
      // Typography
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        industrial: ['Rajdhani', 'sans-serif'],
      },
      
      // Font sizes with better scaling
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
        '8xl': '6rem',       // 96px
      },
      
      // Line heights
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      
      // Letter spacing
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      // Shadows and depth
      boxShadow: {
        // Soft shadows for depth
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '2xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        
        // Custom shadows
        'glow': '0 0 15px -3px rgba(14, 165, 233, 0.5)',
        'glow-lg': '0 0 30px -5px rgba(14, 165, 233, 0.6)',
        'glow-accent': '0 0 15px -3px rgba(249, 115, 22, 0.5)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'button': '0 4px 14px 0 rgba(14, 165, 233, 0.39)',
        'button-hover': '0 6px 20px rgba(14, 165, 233, 0.5)',
        'button-accent': '0 4px 14px 0 rgba(249, 115, 22, 0.39)',
        'button-accent-hover': '0 6px 20px rgba(249, 115, 22, 0.5)',
        'soft': '0 10px 30px -10px rgba(15, 23, 42, 0.2)',
        'sharp': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      
      // Border radius
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      
      // Spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Transition property
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
      },
      
      // Z-index
      zIndex: {
        '1': '1',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      
      // Animation
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
    },
  },
  // Plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class', // Use class-based form styling
    }),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Text stroke utilities
        '.text-stroke': {
          '-webkit-text-stroke': '1px currentColor',
          'text-stroke': '1px currentColor',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px currentColor',
          'text-stroke': '2px currentColor',
        },
        // Gradient text
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
        // Better backdrop blur
        '.backdrop-blur-soft': {
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
        },
        // Gradient backgrounds
        '.bg-gradient-primary': {
          background: `linear-gradient(135deg, ${theme('colors.primary.500')} 0%, ${theme('colors.primary.700')} 100%)`,
        },
        '.bg-gradient-accent': {
          background: `linear-gradient(135deg, ${theme('colors.accent.500')} 0%, ${theme('colors.accent.700')} 100%)`,
        },
        // Custom scrollbar
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': `${theme('colors.primary.500')} ${theme('colors.gray.100')}`,
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: theme('colors.gray.100'),
          borderRadius: theme('borderRadius.full'),
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.primary.500'),
          borderRadius: theme('borderRadius.full'),
          border: `2px solid ${theme('colors.gray.100')}`,
        },
        // Custom selection
        '.selection-primary': {
          '::selection': {
            backgroundColor: theme('colors.primary.500'),
            color: theme('colors.white'),
          },
          '::-moz-selection': {
            backgroundColor: theme('colors.primary.500'),
            color: theme('colors.white'),
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'dark']);
    },
  ],
}