import React from 'react';
import { CheckCircle, ChevronRight, User, Phone, Mail, Send } from 'lucide-react';

const RegistrationSection = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]" id="registration">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Strict 12-column grid wrapper for the card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 bg-white max-w-6xl mx-auto">

          {/* Left Side: Visual & Info (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900 relative p-10 lg:p-14 flex flex-col justify-between text-white overflow-hidden min-h-[500px]">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Горы" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 border border-brand/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                Набор открыт
              </div>
              <h2 className="text-3xl md:text-[3rem] font-bold font-heading leading-tight mb-2">Регистрация в БШКО</h2>
              <p className="text-slate-300 text-lg font-light">на 2026 год</p>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0">
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Библейская школа — это место, где вы сможете углубить свои знания Писания и найти призвание.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>Онлайн формат</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>Диплом</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 bg-white">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Заполните анкету</h3>
              <p className="text-slate-500 text-base">Пожалуйста, заполните все обязательные поля, отмеченные звездочкой (*)</p>
            </div>

            <form className="space-y-5">
              {/* Role Select */}
              <div>
                <label className="block text-base font-semibold text-slate-700 mb-2">В каком качестве вы будете поступать?</label>
                <div className="relative">
                  <select defaultValue="Студент (Полный курс)" className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all font-medium text-base">
                    <option>Студент (Полный курс)</option>
                    <option>Вольнослушатель</option>
                    <option>Кандидат в Клуб проповедников</option>
                  </select>
                  <ChevronRight className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                </div>
              </div>

              {/* Name Fields */}
              <div className="space-y-4">
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Фамилия *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Имя *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                  </div>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Отчество" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="tel" placeholder="+7 (999) 000-00-00 *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="email" placeholder="Email *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
              </div>

              {/* Preference & Note */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select defaultValue="" className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all font-medium text-base">
                    <option value="" disabled>Канал связи *</option>
                    <option>Telegram</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                    <option>Телефон</option>
                  </select>
                  <ChevronRight className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                </div>
                <input type="text" placeholder="Примечание (по желанию)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
              </div>

              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-500 border border-slate-100 flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">i</div>
                <p>После отправки анкеты вы будете переадресованы на наш Telegram канал. Подпишитесь, чтобы быть в курсе всех событий!</p>
              </div>

              <button className="w-full bg-brand hover:bg-brand-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group font-heading text-lg mt-2">
                <span>Отправить заявку</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-slate-400 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработки персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;