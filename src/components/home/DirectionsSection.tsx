import React from 'react';
import { GraduationCap, Mic2, BookOpen, Check, ArrowRight } from 'lucide-react';

const DirectionsSection = () => {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden" id="directions">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 pointer-events-none bg-dot-pattern bg-[length:24px_24px] opacity-60"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-y-16">
          
          {/* Header */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 mb-6 font-heading leading-tight">Виды деятельности</h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              Мы создали различные виды деятельности для духовного роста, где каждый найдет формат, соответствующий его призванию и уровню подготовки.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Библейская школа',
                subtitle: 'Фундаментальное образование',
                desc: 'Основной курс для тех, кто хочет получить системные знания Библии. Включает богословие, историю и герменевтику.',
                icon: <GraduationCap className="w-8 h-8" />,
                features: ['Срок обучения: 2 года', 'Диплом по окончании', 'Личный куратор', 'Доступ к библиотеке'],
              },
              {
                title: 'Клуб проповедников',
                subtitle: 'Практика и менторство',
                desc: 'Закрытое сообщество для действующих служителей. Разбор проповедей, работа над ошибками и обмен опытом.',
                icon: <Mic2 className="w-8 h-8" />,
                features: ['Еженедельные встречи', 'Практика гомилетики', 'Разбор текстов', 'Мастер-классы'],
              },
              {
                title: 'Книжный клуб',
                subtitle: 'Интеллектуальный досуг',
                desc: 'Совместное чтение классической и современной христианской литературы. Глубокие обсуждения и новые смыслы.',
                icon: <BookOpen className="w-8 h-8" />,
                features: ['1 книга в месяц', 'Модерируемые встречи', 'Гостевые лекторы', 'Подборка литературы'],
              },
            ].map((card, idx) => (
              <div key={idx} className={`bg-white rounded-[2rem] p-8 border border-slate-100 border-t-4 border-t-brand shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full relative overflow-hidden`}>

                {/* Header Row: Text on Left, Icon on Right */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="flex-1 pr-2">
                    <h3 className={`text-2xl font-bold mb-1 font-heading text-slate-900 leading-tight`}>{card.title}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{card.subtitle}</p>
                  </div>
                  
                  <div className={`w-16 h-16 rounded-full bg-transparent border-2 border-brand text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm`}>
                    {card.icon}
                  </div>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed text-base flex-grow">
                  {card.desc}
                </p>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <ul className="space-y-3">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-base text-slate-700">
                        <Check className={`w-4 h-4 mr-3 flex-shrink-0 text-brand`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;