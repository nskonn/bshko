import React from 'react';
import { Mail } from 'lucide-react';

const ContactsSection = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]" id="contacts">
      <div className="container mx-auto px-4 md:px-8">

        <div className="max-w-3xl mx-auto">

          {/* Form Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 mb-10">
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-8 text-center">Напишите нам</h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Имя</label>
                  <input type="text" placeholder="Иван" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Фамилия</label>
                  <input type="text" placeholder="Иванов" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                <input type="email" placeholder="example@mail.ru" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Сообщение</label>
                <textarea placeholder="Ваш вопрос..." rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40">
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Email Block - Compact & After Form */}
          <div className="flex justify-center">
            <a href="mailto:bshko@denis-samarin.ru" className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-all group border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-slate-600 group-hover:text-amber-600 transition-colors">Свяжитесь с нами: bshko@denis-samarin.ru</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactsSection;