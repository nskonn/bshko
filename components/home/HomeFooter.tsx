import React from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-bold text-white font-heading">БШКО</span>
            </div>
            <p className="text-base leading-relaxed mb-8 text-slate-400">
              Мы стремимся дать качественное системное образование каждому, кто хочет служить Богу и людям.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Навигация</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/#about" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> О школе</Link></li>
              <li><Link to="/applicants" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Абитуриенту</Link></li>
              <li><Link to="/#teachers" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Преподаватели</Link></li>
              <li><Link to="/#faq" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Вопросы и ответы</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Ресурсы</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/book-club" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Книжный клуб</Link></li>
              <li><Link to="/preachers-club" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Клуб проповедников</Link></li>
              <li><Link to="/blog" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Блог</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Контакты</h4>
            <ul className="space-y-5 text-base">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="mt-1.5">bshko@denis-samarin.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-16 pt-8 text-base text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-600">
          <p>&copy; 2024 БШКО. Все права защищены.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;