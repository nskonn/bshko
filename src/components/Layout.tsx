import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О школе', path: '/about' },
    { name: 'Абитуриенту', path: '/applicants' },
    { name: 'Преподаватели', path: '/teachers' },
    { name: 'Книжный клуб', path: '/book-club' },
    { name: 'Блог', path: '/blog' },
  ];

  // Header style based on route and scroll state
  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isHome && !scrolled 
      ? 'bg-transparent text-white border-b border-white/10' 
      : 'bg-slate-900 text-white shadow-lg border-b border-slate-800'
  }`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden">

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

    </div>
  );
};

export default Layout;