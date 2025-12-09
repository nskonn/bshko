import React, { useState, useEffect, useRef } from 'react';
import { Quote, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
      name: "Павел Грищенко",
      role: "Выпускник",
      avatar: "/assets/review/img.png",
      text: "Меня зовут Павел Грищенко, мне 53 года, я член церкви г. Симферополь, Крым.\n" +
          "С момента уверования у меня появилось желание проповедовать в церкви слово Господне. Учился в деле проповеди в основном на чужих примерах. Слушал старших братьев и старался проповедовать так же. Всегда хотел попасть на курсы проповедников, но обстоятельства жизни не позволяли. Да и в церкви по вопросу обучения давали приоритет в основном молодёжи. Узнав от нашего служителя С. Ф. Герасименко о библейских курсах в БШКО с радостью записался на них. И с удовольствием проходил обучение онлайн. В 2024 году окончил курсы и получил диплом об окончании. Чему очень рад и благодарен Господу.\n" +
          "Благодаря занятиям в БШКО научился усидчивости. И с Божьей помощью довёл обучение до конца. А это уже победа.\n" +
          "Благодаря занятиям так же научился в проповеди держать нить рассуждений. Т. е. не распыляться, а держаться выбранной темы. Видно уроки о «Теме проповеди», о «ключевом слове», о «стержневом предложении» сделали своё дело. Поэтому проповеди стали получаться понятными. Такими, в которых есть одна главная мысль. Это принесло пользу не только слушателям, но и мне самому. Так как проповедовать (держа в голове гл. мысль) стало легче и удобнее. Да и в памяти это стало откладываться.\n" +
          "Так же хорошо и приятно было иметь общение с братьями. Побудешь на уроке и на душе хорошо. И когда встретишь кого-то из братьев на конференции или общебратском, то чувствуешь что мы родные.\n" +
          "Благодарю за полезные и добрые курсы БШКО. Слава и благодарение Богу !"
    },
    {
      id: 2,
      name: "Классен Эдуард",
      role: "Выпускник",
      avatar: "/assets/review/img_1.png",
      text: "Определённое время я был занят в церкви различными музыкальными служениями, был помощником регента. Но читая Писание и различную литературу я видел, что приоритетным служением в Церкви должна быть проповедь. И в то же время понимал, что это служение не в особом почëте, и достаточно «хромает».\n" +
          "У меня появилось желание поднять уровень своих проповедей, но к сожалению, не видел возможным очное обучение где-либо.\n" +
          "И вот однажды, Денис Владимирович Самарин объявил на своем канале об открытии онлайн библейской школы. Я сразу понял, вот мой шанс, и решил поступить.\n" +
          "Хотя я прошёл обучение с первым потоком студентов, и не вся система была сразу отлажена, но я благодарен Богу и преподавателям БШКО. Но это было прекрасное время в моей жизни, я смог на многие вещи посмотреть по-другому.\n" +
          "Сегодня мне намного легче в приготовлении проповеди, хотя это остаётся определённым трудом, требующий усилий и усердия.\n" +
          "Более того, обучение в БШКО отразилось не только в подготовке к проповеди, но и повлияло на мою практическую жизнь, т.к. сопровождалось углубленным изучением Писания.\n" +
          "БШКО удобно тем, что не нужно отрываться от работы, служений, семьи на несколько недель в году, а можно посвящать каждую неделю определенное время, и проходить обучение онлайн. Не смотря на разность часовых поясов (+3МСК), я всегда имел возможность прослушать лекции в записи.\n" +
          "Я бы советовал каждому проповеднику пройти школу БШКО, если он хочет быть проповедником Слова Божьего, а не просто каких-то своих представлений и пониманий."
    },
    {
      id: 3,
      name: "Корольков Иван",
      role: "Выпускник",
      avatar: "/assets/review/img_2.png",
      text: "Когда я узнал о том, что образовалась онлайн библейская школа, то долго не раздумывая я отправил заявку на обучение. За время учебы, я получил огромное количество знаний по разным предметам. У меня поменялось в лучшую сторону отношение к проповеди, к церкви и вообще к библейскому образованию. Важно отметить, что для меня является ценным в этой школе то, что преподаватели не просто преподают для галочки, а они живут этой школой. Они сами постоянно развиваются, думают как улучшить качество школы. Постоянно происходят онлайн встречи преподавателей где приглашаются разные богословы которые могут поделиться своим опытом. Если кто желает учиться проповедовать и получить систематические знания в области богословия, то однозначно советую."
    }
  ];

  // Infinite Slider Logic
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // FIX: Используем только Refs для свайпа (без лишних ре-рендеров)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const extendedTestimonials = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(testimonials.length);
      } else if (currentIndex === extendedTestimonials.length - 1) {
        setCurrentIndex(1);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, testimonials.length, extendedTestimonials.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) handleNext();
    else if (distance < -minSwipeDistance) handlePrev();
  };

  // Helper to determine active dot index
  const getVisibleIndex = (index: number, total: number) => {
    if (index === 0) return total - 1;
    if (index === total + 1) return 0;
    return index - 1;
  };

  // Reusable Card
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
      <div className="bg-slate-50 rounded-[2rem] p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0" />
          <div>
            <h4 className="font-bold text-slate-900 font-heading text-lg leading-tight">{testimonial.name}</h4>
            <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mt-1">{testimonial.role}</p>
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
  );

  return (
      <>
        <section className="py-24 bg-white" id="testimonials">
          <div className="container mx-auto px-4 md:px-8">

            <div className="flex flex-col gap-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 mb-4 font-heading leading-tight">Отзывы</h2>
              </div>

              {/* SLIDER VIEW: Visible on Mobile AND Tablet (up to XL) */}
              <div className="block xl:hidden relative group max-w-2xl mx-auto w-full">
                <div className="overflow-hidden rounded-[2.5rem] shadow-xl shadow-slate-100/50">
                  <div
                      className={`flex ${isTransitioning ? 'transition-transform duration-300 ease-out' : ''}`}
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                  >
                    {extendedTestimonials.map((testimonial, index) => (
                        <div key={index} className="min-w-full">
                          <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows (Visible on non-touch mostly, but good UX generally) */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 bg-white text-slate-800 rounded-full shadow-lg hover:bg-amber-50 transition-colors z-10 hidden md:block"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 bg-white text-slate-800 rounded-full shadow-lg hover:bg-amber-50 transition-colors z-10 hidden md:block"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, idx) => (
                      <button
                          key={idx}
                          onClick={() => {
                            if (isTransitioning) return;
                            setIsTransitioning(true);
                            setCurrentIndex(idx + 1);
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${getVisibleIndex(currentIndex, testimonials.length) === idx ? 'bg-amber-500 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                      />
                  ))}
                </div>
              </div>

              {/* DESKTOP GRID VIEW: Only visible on XL (1280px+) where 3 cards fit perfectly */}
              <div className="hidden xl:grid grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Modal */}
        {selectedTestimonial && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedTestimonial(null)}></div>
              <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200 p-8 md:p-12 no-scrollbar">
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
                  <p className="text-slate-600 leading-loose relative z-10 text-lg whitespace-pre-line">
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