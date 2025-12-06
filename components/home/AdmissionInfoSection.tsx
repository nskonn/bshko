import React from 'react';
import { ScrollText, ClipboardCheck, Laptop, ArrowRight } from 'lucide-react';

const AdmissionInfoSection = () => {
  return (
    <section className="py-24 bg-white" id="admission-info">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-3 block">Абитуриенту</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-heading">Информация для поступающих</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Мы подготовили краткую информацию о процессе обучения и поступления, чтобы вы могли принять взвешенное решение.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Block 1: Programs */}
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <ScrollText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Ключевые предметы</h3>
            <ul className="space-y-3">
              {[
                "Библиология: история и сущность Библии",
                "Герменевтика: искусство толкования",
                "Гомилетика: построение проповеди",
                "Экзегетика: практика изучения книг",
                "Догматика: основы учения"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2: Admission */}
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Условия поступления</h3>
            <ul className="space-y-3">
              {[
                "Для братьев, членов церкви",
                "Навыки ПК: Zoom, Word",
                "Анкета + Эссе (для студентов)",
                "Стоимость: 8400 ₽/год",
                "Скидка 50% для служителей"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3: Process */}
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">Формат занятий</h3>
            <ul className="space-y-3">
              {[
                "Срок обучения: 3 года",
                "Студенты: Онлайн (ВТ 20:30), Диплом",
                "Слушатели: Записи, Тесты, Сертификат",
                "Нагрузка: 6-7 часов в неделю",
                "Обратная связь с преподавателями"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="text-center">
          <a href="#admission" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors border-b-2 border-amber-100 hover:border-amber-600 pb-1">
            Узнать подробнее об обучении
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfoSection;