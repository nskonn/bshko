import React from 'react';
import { MonitorPlay, UserCheck, CalendarClock, Library } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Title & Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading leading-tight">
              Школа БШКО
            </h2>

            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-6 leading-relaxed text-lg">
                Онлайн-школа проповедников Кавказского объединения МСЦ ЕХБ — это образовательная платформа для тех, кто стремится глубже познавать Писание и эффективнее служить в церкви.
              </p>
              <p className="mb-8 leading-relaxed">
                Школа была образована в 2018 году. За это время мы прошли путь от локальных семинаров до полноценной системы дистанционного образования, объединяющей студентов из разных стран.
              </p>
              
              <div className="pl-6 border-l-4 border-amber-500 italic text-slate-800 bg-amber-50/30 py-6 pr-6 rounded-r-2xl mb-8 relative">
                 <span className="text-4xl text-amber-200 absolute -top-4 left-2">"</span>
                 <p className="relative z-10 font-medium">
                   Наша миссия — помочь проповедникам освоить необходимые навыки и получить системные знания для того, чтобы верно и дерзновенно проповедовать Слово Божье в современном мире.
                 </p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: <MonitorPlay className="w-6 h-6" />, 
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  title: "Онлайн-обучение", 
                  desc: "Гибкий график занятий. Смотрите лекции в прямом эфире или в записи в удобное время." 
                },
                { 
                  icon: <UserCheck className="w-6 h-6" />, 
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  title: "Опытные наставники", 
                  desc: "Преподаватели — действующие служители с многолетним опытом проповеди и душепопечения." 
                },
                { 
                  icon: <Library className="w-6 h-6" />, 
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Системный подход", 
                  desc: "Программа охватывает все ключевые дисциплины: от герменевтики до церковной истории." 
                },
                { 
                  icon: <CalendarClock className="w-6 h-6" />, 
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                  title: "Удобный график занятий", 
                  desc: "Занятия проходят в вечернее время один раз в неделю, что позволяет совмещать учебу с работой." 
                },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 font-heading">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;