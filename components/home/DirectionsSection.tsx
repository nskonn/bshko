import React from 'react';
import { GraduationCap, Mic2, BookOpen, Check, ArrowRight } from 'lucide-react';

const DirectionsSection = () => {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden" id="directions">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Виды деятельности</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Мы создали различные виды деятельности для духовного роста, где каждый найдет формат, соответствующий его призванию и уровню подготовки.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Библейская школа',
              subtitle: 'Фундаментальное образование',
              desc: 'Основной курс для тех, кто хочет получить системные знания Библии. Включает богословие, историю и герменевтику.',
              icon: <GraduationCap className="w-6 h-6" />,
              iconBg: 'bg-transparent border-2 border-blue-600 text-blue-600',
              accentBorder: 'border-t-blue-500',
              titleColor: 'text-blue-700',
              checkColor: 'text-blue-600',
              features: ['Срок обучения: 2 года', 'Диплом по окончании', 'Личный куратор', 'Доступ к библиотеке'],
            },
            {
              title: 'Клуб проповедников',
              subtitle: 'Практика и менторство',
              desc: 'Закрытое сообщество для действующих служителей. Разбор проповедей, работа над ошибками и обмен опытом.',
              icon: <Mic2 className="w-6 h-6" />,
              iconBg: 'bg-transparent border-2 border-emerald-600 text-emerald-600',
              accentBorder: 'border-t-emerald-500',
              titleColor: 'text-emerald-700',
              checkColor: 'text-emerald-600',
              features: ['Еженедельные встречи', 'Практика гомилетики', 'Разбор текстов', 'Мастер-классы'],
            },
            {
              title: 'Книжный клуб',
              subtitle: 'Интеллектуальный досуг',
              desc: 'Совместное чтение классической и современной христианской литературы. Глубокие обсуждения и новые смыслы.',
              icon: <BookOpen className="w-6 h-6" />,
              iconBg: 'bg-transparent border-2 border-amber-500 text-amber-500',
              accentBorder: 'border-t-amber-500',
              titleColor: 'text-amber-700',
              checkColor: 'text-amber-600',
              features: ['1 книга в месяц', 'Модерируемые встречи', 'Гостевые лекторы', 'Подборка литературы'],
            },
          ].map((card, idx) => (
            <div key={idx} className={`bg-white rounded-[2rem] p-8 border border-slate-100 border-t-4 ${card.accentBorder} shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full relative overflow-hidden`}>

              {/* Header Row: Icon ONLY */}
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {card.icon}
                </div>
              </div>

              <div className="mb-4">
                <h3 className={`text-2xl font-extrabold mb-2 font-heading transition-colors ${card.titleColor}`}>{card.title}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{card.subtitle}</p>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow">
                {card.desc}
              </p>

              <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                <ul className="space-y-3">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <Check className={`w-4 h-4 mr-3 flex-shrink-0 ${card.checkColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;