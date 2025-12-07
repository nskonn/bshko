import React, { useState, useEffect } from 'react';
import { Quote, ArrowRight, X } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTestimonial]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Алексей Петров",
      role: "Студент 2-го курса",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Обучение в БШКО стало для меня настоящим открытием. Глубина преподавания, системный подход к изучению Писания и возможность общаться с опытными служителями — все это бесценно. Особенно запомнились лекции по герменевтике, которые полностью изменили мой подход к разбору библейских текстов. Теперь я вижу структуру и смысл там, где раньше просто читал слова. Очень благодарен преподавателям за их труд и терпение."
    },
    {
      id: 2,
      name: "Мария Иванова",
      role: "Выпускница",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Я долго сомневалась, стоит ли поступать, так как боялась не справиться с нагрузкой. Но формат обучения оказался очень удобным. Возможность слушать лекции в записи спасала, когда не получалось присутствовать онлайн. Материал подается доступно, но при этом очень глубоко. Школа дала мне твердое основание в вере и помогла разобраться во многих сложных богословских вопросах."
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      role: "Служитель",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Для меня, как для действующего проповедника, БШКО стала местом повышения квалификации. Курс гомилетики помог структурировать мои проповеди, сделать их более ясными и назидательными. Общение с другими братьями в рамках Клуба проповедников — это отдельная благодать. Мы учимся друг у друга, поддерживаем и вдохновляем. Рекомендую эту школу всем, кто хочет серьезно служить Богу."
    }
  ];

  return (
    <>
      <section className="py-24 bg-white" id="testimonials">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12 text-center">
              <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 mb-4 font-heading leading-tight">Отзывы</h2>
            </div>

            <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-slate-50 rounded-[2rem] p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <h4 className="font-bold text-slate-900 font-heading text-lg">{testimonial.name}</h4>
                      <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative flex-grow">
                    <Quote className="w-8 h-8 text-amber-200 absolute -top-2 -left-2 transform -scale-x-100 opacity-50" />
                    <p className="text-slate-600 leading-relaxed text-base relative z-10 pt-4 line-clamp-4">
                      {testimonial.text}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="mt-6 text-base font-bold text-slate-900 hover:text-amber-600 transition-colors inline-flex items-center gap-1 group self-start"
                  >
                    Читать полностью
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedTestimonial(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200 p-8 md:p-12">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center text-center mb-8">
              <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} className="w-20 h-20 rounded-full object-cover border-4 border-slate-50 shadow-lg mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 font-heading">{selectedTestimonial.name}</h3>
              <p className="text-amber-600 font-bold uppercase tracking-wider text-sm">{selectedTestimonial.role}</p>
            </div>
            <div className="relative">
              <Quote className="w-10 h-10 text-amber-100 absolute -top-4 -left-4 transform -scale-x-100" />
              <p className="text-slate-600 leading-loose relative z-10 text-lg">
                {selectedTestimonial.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;