import React from 'react';
import { MonitorPlay, UserCheck, CalendarClock, Library } from 'lucide-react';

const AboutSection = () => {
  const features = [
    { 
      icon: <MonitorPlay />, 
      title: "Онлайн-обучение", 
      desc: "Смотрите лекции в прямом эфире или в записи в удобное время."
    },
    { 
      icon: <UserCheck />, 
      title: "Опытные наставники", 
      desc: "Преподаватели — действующие служители с многолетним опытом."
    },
    { 
      icon: <Library />, 
      title: "Системный подход", 
      desc: "Программа охватывает все ключевые дисциплины и богословие."
    },
    { 
      icon: <CalendarClock />, 
      title: "Удобный график", 
      desc: "Занятия проходят в вечернее время один раз в неделю."
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern bg-[length:4rem_4rem]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header - Above content columns */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 font-heading leading-tight">
            Школа БШКО
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Narrative (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed">
              <p className="mb-6">
                Онлайн-школа проповедников Кавказского объединения МСЦ ЕХБ — это образовательная платформа для тех, кто стремится глубже познавать Писание.
              </p>
              <p>
                Школа была образована в 2018 году. За это время мы прошли путь от локальных семинаров до полноценной системы дистанционного образования.
              </p>
            </div>
            
            {/* Mission Block */}
            <div className="mt-auto pt-8 border-t border-slate-100">
               <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide mb-3">Наша миссия</h4>
               <p className="text-slate-800 italic font-medium text-lg leading-relaxed border-l-2 border-brand pl-4">
                 "Помочь проповедникам освоить необходимые навыки для того, чтобы верно и дерзновенно проповедовать Слово Божье."
               </p>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Column: Features Grid (Spans 6 cols) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4 gap-4">
                       <h3 className="text-xl font-bold text-slate-900 font-heading leading-tight pt-1">{feature.title}</h3>
                       <div className="text-brand group-hover:text-brand-600 transition-colors flex-shrink-0 transform group-hover:scale-110 duration-300">
                         {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-8 h-8 stroke-[1.5]" })}
                       </div>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed">
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