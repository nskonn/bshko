import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HomeNavbarProps {
  onOpenModal: () => void;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О школе', href: '#about' },
    { name: 'Абитуриенту', href: '#admission' },
    { name: 'Преподаватели', href: '#teachers' },
    { name: 'Книжный клуб', href: '#books' },
    { name: 'Блог', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const logoUrl = "https://4.downloader.disk.yandex.ru/preview/1b556e7f54ff2af9b88f01ffaba7cc421bc4127b29221b45f84569a89b29468f/inf/5Y5Sv003qEyvONpifXq4bgUkqB4YOMYflqVXSqu0kOfnTg9LwL39r0m_zVEkVb2a87IU5A3fPVlIDYaFMfkakQ%3D%3D?uid=2205582879&filename=Gemini_Generated_Image_si5ptbsi5ptbsi5p%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=2205582879&tknv=v3&size=1114x1352";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="БШКО Логотип" className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-amber-500/20" />
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} font-heading`}>
            БШКО
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-md font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}
            >
              {link.name}
            </a>
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
          {isMenuOpen ? <X className="text-slate-800" /> : <Menu className={scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 font-medium py-3 border-b border-slate-50 last:border-0 px-2 active:bg-slate-50 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
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