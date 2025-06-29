import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  const sections = ['#hero', '#about', '#skills', '#experiences', '#projects', '#contact'];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const sec of sections) {
        const el = document.querySelector(sec);
        if (el && el.getBoundingClientRect().top < 150) {
          setActive(sec);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur border-b border-gray-300 dark:border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((href) => (
            <a
              key={href}
              href={href}
              className={`font-medium transition-all ${
                active === href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              {href.replace('#', '').toUpperCase()}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={toggle} className="text-gray-700 dark:text-gray-300">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-gray-700 dark:text-gray-300">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900 shadow-md space-y-2">
          {sections.map((href) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block font-medium py-2 transition ${
                active === href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              {href.replace('#', '').toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
