import React from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const HomeFooter = () => {
  const logoUrl = "https://4.downloader.disk.yandex.ru/preview/1b556e7f54ff2af9b88f01ffaba7cc421bc4127b29221b45f84569a89b29468f/inf/5Y5Sv003qEyvONpifXq4bgUkqB4YOMYflqVXSqu0kOfnTg9LwL39r0m_zVEkVb2a87IU5A3fPVlIDYaFMfkakQ%3D%3D?uid=2205582879&filename=Gemini_Generated_Image_si5ptbsi5ptbsi5p%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=2205582879&tknv=v3&size=1114x1352";

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoUrl} alt="БШКО Логотип" className="w-12 h-12 rounded-xl object-cover" />
              <span className="text-xl font-bold text-white font-heading">БШКО</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Проект Дениса Самарина. Мы стремимся дать качественное системное образование каждому, кто хочет служить Богу и людям.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all cursor-pointer text-slate-500">Tg</div>
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all cursor-pointer text-slate-500">Vk</div>
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all cursor-pointer text-slate-500">Yt</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Навигация</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> О школе</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Абитуриенту</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Преподаватели</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Ресурсы</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Книжный клуб</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Клуб проповедников</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Библиотека</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" /> Блог</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Контакты</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="mt-1.5">bshko@denis-samarin.ru</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="mt-1.5">+7 (999) 000-00-00</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1.5 leading-relaxed">Онлайн-обучение<br />Доступно по всему миру</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-600">
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