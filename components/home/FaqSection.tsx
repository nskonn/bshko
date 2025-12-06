import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Сколько времени в неделю нужно уделять учебе?",
      answer: "По нашему опыту, средняя нагрузка на студента составляет около 6–7 часов в неделю. Это включает в себя прослушивание лекций (примерно 3 часа) и выполнение домашних заданий (около 4 часов). График гибкий, вы можете распределять время самостоятельно."
    },
    {
      question: "Что делать, если я не могу присутствовать на онлайн-уроке?",
      answer: "Ничего страшного. Все занятия записываются и доступны в личном кабинете студента. Вы сможете просмотреть урок в любое удобное для вас время. Однако мы рекомендуем присутствовать онлайн для живого общения с преподавателем."
    },
    {
      question: "Какой документ выдается после окончания обучения?",
      answer: "Студенты полного курса, успешно сдавшие экзамены и защитившие дипломную работу, получают Диплом об окончании Библейской школы. Слушатели, сдавшие тестовые работы, получают Сертификат с перечнем прослушанных курсов."
    },
    {
      question: "Могу ли я поступить, если я из другого региона?",
      answer: "Да, конечно. Школа создана на базе Кавказского объединения, но мы открыты для братьев из любых регионов. Главное условие — рекомендация от руководства вашей поместной церкви."
    },
    {
      question: "Возможна ли оплата обучения частями?",
      answer: "Базовая стоимость обучения составляет 8400 рублей в год. Мы приветствуем единовременную оплату перед началом учебного года, но в индивидуальных случаях готовы рассмотреть возможность рассрочки. Для рукоположенных служителей действует скидка 50%."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-3 block">Вопросы и ответы</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">Часто задаваемые вопросы</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'shadow-lg bg-white ring-1 ring-amber-100' : 'bg-slate-50 hover:bg-white hover:shadow-md'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openFaqIndex === index ? 'text-amber-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                  <Plus className="w-7 h-7 text-amber-500" />
                </div>
              </button>

              <div
                className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;