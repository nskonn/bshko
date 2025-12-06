import React from 'react';
import { Calendar, GraduationCap, BookOpen } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="relative z-20 -mt-20 md:-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-100">
          {[
            { number: '10+', label: 'Лет опыта обучения', icon: <Calendar className="w-6 h-6 text-amber-600" /> },
            { number: '500+', label: 'Выпускников', icon: <GraduationCap className="w-6 h-6 text-amber-600" /> },
            { number: '24/7', label: 'Доступ к материалам', icon: <BookOpen className="w-6 h-6 text-amber-600" /> },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6 pt-8 md:pt-0 pl-0 md:pl-12 first:pl-0">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110 duration-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">{stat.number}</div>
                <div className="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;