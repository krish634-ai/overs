import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/theme-context';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render the button on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 ${className}`} />
    );
  }
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none transition-colors duration-200 ${
        isDark 
          ? 'text-yellow-300 hover:bg-gray-800' 
          : 'text-gray-700 hover:bg-gray-100'
      } focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
