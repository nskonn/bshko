import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HomeNavbarProps {
  onOpenModal: () => void;
  variant?: 'home' | 'inner';
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ onOpenModal, variant = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine styles based on variant, scroll state, AND menu state.
  // The header becomes "solid/light" (white bg, dark text) if:
  // 1. We scrolled down
  // 2. We are on an inner page
  // 3. The mobile menu is OPEN (to match the dropdown background)
  const isInner = variant === 'inner';
  const isSolidHeader = scrolled || isInner || isMenuOpen;
  
  const navLinks = [
    { name: 'Главная', href: '/', type: 'route' },
    { name: 'Абитуриенту', href: '/#admission-info', type: 'anchor' },
    { name: 'Книжный клуб', href: '/#directions', type: 'anchor' },
    { name: 'Контакты', href: '/#contacts', type: 'anchor' },
    { name: 'Блог', href: '/blog', type: 'route' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolidHeader ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link to="/" className={`text-xl font-bold tracking-tight font-heading transition-colors duration-300 ${isSolidHeader ? 'text-slate-900' : 'text-white'}`}>
            БШКО
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
             link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-md font-medium hover:text-amber-500 transition-colors ${isSolidHeader ? 'text-slate-600' : 'text-slate-300'} ${location.pathname === link.href ? 'text-amber-500' : ''}`}
              >
                {link.name}
              </Link>
             ) : (
              <a
                key={link.name}
                href={link.href}
                className={`text-md font-medium hover:text-amber-500 transition-colors ${isSolidHeader ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {link.name}
              </a>
             )
          ))}
          <button
            onClick={onOpenModal}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-md font-semibold transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/40 font-heading transform hover:-translate-y-0.5"
          >
            Подать заявку
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`transition-colors duration-300 ${isSolidHeader ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`transition-colors duration-300 ${isSolidHeader ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
             link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-800 font-medium py-3 border-b border-slate-50 last:border-0 px-2 active:bg-slate-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
             ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-800 font-medium py-3 border-b border-slate-50 last:border-0 px-2 active:bg-slate-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
             )
          ))}
          <button
            onClick={() => { onOpenModal(); setIsMenuOpen(false); }}
            className="bg-amber-500 text-white w-full py-3 rounded-xl font-bold mt-2 font-heading shadow-lg shadow-amber-500/20"
          >
            Подать заявку
          </button>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;