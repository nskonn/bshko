import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollText, ClipboardCheck, Laptop, ArrowRight, Check } from 'lucide-react';

const AdmissionInfoSection = () => {
  const cards = [
    {
      title: "Поступление",
      subtitle: "Требования",
      icon: <ClipboardCheck className="w-6 h-6 text-brand/50" />,
      desc: "Простые и понятные условия для всех желающих получить духовное образование.",
      listItems: [
        "Членство в церкви ЕХБ",
        "Рекомендация от пресвитера",
        "Заполнение анкеты абитуриента",
        "Базовые навыки работы с ПК",
        "Взнос: 8400 ₽/год (скидки служителям)"
      ]
    },
    {
      title: "Программа",
      subtitle: "Ключевые предметы",
      icon: <ScrollText className="w-6 h-6 text-brand/50" />,
      desc: "Глубокое погружение в богословские дисциплины для формирования целостного христианского мировоззрения.",
      listItems: [
        "Библиология: история и сущность Библии",
        "Герменевтика: искусство толкования",
        "Гомилетика: построение проповеди",
        "Экзегетика: практика изучения книг",
        "Догматика: основы вероучения"
      ]
    },
    {
      title: "Процесс",
      subtitle: "Формат занятий",
      icon: <Laptop className="w-6 h-6 text-brand/50" />,
      desc: "Гибкий график обучения, позволяющий совмещать учебу с работой и служением.",
      listItems: [
        "Срок обучения: 2 или 3 года",
        "Онлайн-лекции: Вторник 20:30",
        "Доступ к записям в любое время",
        "Нагрузка: 6-7 часов в неделю",
        "Обратная связь с кураторами"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="admission-info">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern bg-[length:4rem_4rem]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-y-16">
          
          {/* Header */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 mb-6 font-heading leading-tight">Информация для поступающих</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Мы подготовили подробную информацию о процессе обучения, чтобы вы могли принять взвешенное решение и подготовиться к поступлению.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="col-span-12 grid grid-cols-1 xl:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className={`bg-white rounded-[2rem] p-8 border border-brand/50 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50  transition-all duration-300 group flex flex-col h-full relative`}>
                
                {/* Header: Text Left, Icon Right */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-1 font-heading leading-tight">{card.title}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{card.subtitle}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-full border border-brand/50  bg-slate-50 text-slate-600 flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm`}>
                    {card.icon}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                   {card.desc}
                </p>

                <div className={`bg-slate-50/50 rounded-xl p-5 border border-slate-100 mt-auto transition-colors`}>
                   <ul className="space-y-3">
                    {card.listItems.map((item, i) => (
                      <li key={i} className="flex items-start text-base font-medium text-slate-700">
                        <Check className={`w-4 h-4 mr-3 flex-shrink-0 mt-1 text-brand`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="col-span-12 text-center">
            <Link to="/applicants" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/30 group font-heading text-lg">
              <span>Подробнее</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionInfoSection;