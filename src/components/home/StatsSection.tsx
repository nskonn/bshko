import React from 'react';
import { Calendar, GraduationCap, BookOpen } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="relative z-20 -mt-20 md:-mt-20 hidden md:block">
      <div className="absolute left-0 right-0 -translate-y-1/2 container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-100">
          {[
            { number: '8+', label: 'Лет опыта обучения', icon: <Calendar className="w-5 h-5 text-brand" /> },
            { number: '500+', label: 'Выпускников', icon: <GraduationCap className="w-5 h-5 text-brand" /> },
            { number: '24/7', label: 'Доступ к материалам', icon: <BookOpen className="w-5 h-5 text-brand" /> },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 pt-6 md:pt-0 pl-0 md:pl-8 first:pl-0">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110 duration-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 font-heading tracking-tight">{stat.number}</div>
                <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;