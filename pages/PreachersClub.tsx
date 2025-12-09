import React, { useState, useEffect } from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeFooter from '../components/home/HomeFooter';
import RegistrationModal from '../components/RegistrationModal';
import { MessageCircle, PlayCircle, Users, ArrowRight, Quote, HeartHandshake, BookOpen, Lightbulb } from 'lucide-react';

const PreachersClub = () => {
  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    "«Клуб проповедников», в нашей школе — это большое благословение! Я был очень рад, что мои проповеди, могли рассмотреть братья преподаватели и вместе со студентами нашей школы, дать советы! Люблю конструктивную критику, которая помогает мне духовно расти!",
    "Клуб, где разбирают наши проповеди, для меня очень полезен! Я слушаю и делаю для себя некоторые открытия, особенно для меня важно, чтобы проповедь была правильно разобрана со стороны экзегетики! У меня есть любимые преподаватели, которые мне особенно нравятся, как это делают, это Рыжов, Яковлев, Самарин и Горелочкин, они не просто разбирают, но и предлагают некоторые выходы.",
    "На наших встречах в «Клубе проповедников» достаточно критики, и мне это нравится. Нравится, потому что я понимаю, какая большая ответственность лежит на проповеднике: он передает слова Самого Бога. И иногда сама эта мысль приводит в трепет.",
    "Клуб проповедников помогает совершенствоваться в этом служении, помогает расти. Учителя, с вниманием к деталям, разбирают наши ошибки и показывают, как мы можем их исправить. И всё это проходит в простой, непринужденной атмосфере. Хотя иногда нелегко принимать критику, однако, когда понимаешь, ради какой высокой цели она служит, начинаешь её любить.",
    "Клуб проповедников позволяет мне увидеть свою проповедь со стороны слушателей, понять и исправить её недостатки. Анализ и советы помогли мне подобрать целевые примеры и уточнить применение истины в жизни. Отзывы участников клуба помогли сделать проповедь более Христоцентричной.",
    "Клуб Проповедников помог мне лучше осмысливать мои проповеди. Мы делимся ими онлайн в аудио и текстовом формате, и братья дают нам полезные советы. Каждый из них имеет свой уникальный подход, и их обратная связь помогает мне увидеть, что можно улучшить. Благодаря их поддержке, я стал внимательнее относиться к деталям и серьёзнее готовиться к проповедям.",
    "Очень интересная и полезная рубрика: «клуб проповедников.» Помогает пересмотреть и ещё раз осмыслить мной сказанную проповедь. Важно то, что братья преподаватели подсказывают и корректируют твой взгляд на твою «идеальную» проповедь. Очень хорошо учит смирению и помогает в работе над ошибками."
  ];

  // Infinite Slider Logic
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
       <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-heading { fontFamily: 'Montserrat', sans-serif; }
        .font-sans { fontFamily: 'Inter', sans-serif; }
      `}} />

      <HomeNavbar onOpenModal={() => setShowModal(true)} variant="inner" />
      <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* SECTION 1: Page Header (Grid Pattern) */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern bg-[length:4rem_4rem]"></div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-heading mb-6 leading-tight">Клуб проповедников</h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Сообщество для роста, практики и братской поддержки в служении Слова.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: How it works (Cream BG + Dot Pattern) - Updated Layout */}
      <section className="py-24 bg-[#FDFBF7] relative overflow-hidden border-y border-slate-200">
        <div className="absolute inset-0 pointer-events-none bg-dot-pattern bg-[length:24px_24px] opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             
             {/* Left Column: Text */}
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-8">Как это работает?</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                   <p>
                     В Клубе проповедников преподаватели нашей школы разбирают и комментируют проповеди студентов, которые те заранее прислали для анализа.
                   </p>
                   <p>
                     Мы создаем безопасную среду, где каждый может получить честную обратную связь. Обращается внимание на сильные и слабые стороны проповеди, предлагаются конкретные улучшения.
                   </p>
                   <p>
                     Возможность поделиться своим мнением или задать вопрос есть у всех присутствующих на разборе, что превращает каждую встречу в живой мастер-класс.
                   </p>
                </div>
             </div>

             {/* Right Column: Grid of 4 Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Item 1 */}
                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Конструктивная критика</h3>
                      <div className="w-12 h-12 rounded-xl border border-blue-300 bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                         <MessageCircle className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-base leading-relaxed">Честный разбор ошибок для вашего роста.</p>
                </div>
                
                {/* Item 2 */}
                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Братская поддержка</h3>
                      <div className="w-12 h-12 rounded-xl border border-green-300 bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                         <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-base leading-relaxed">Ободрение и молитва друг за друга.</p>
                </div>

                {/* Item 3 (New) */}
                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Богословский анализ</h3>
                      <div className="w-12 h-12 rounded-xl border border-amber-300 bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                         <BookOpen className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-base leading-relaxed">Проверка точности толкования Писания.</p>
                </div>

                {/* Item 4 (New) */}
                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Практические советы</h3>
                      <div className="w-12 h-12 rounded-xl border border-purple-300 bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                         <Lightbulb className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-base leading-relaxed">Рекомендации от опытных служителей.</p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Resources (White BG) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Archive Card */}
             <div className="bg-slate-900 rounded-[2rem] p-10 text-white relative overflow-hidden group flex flex-col shadow-xl shadow-slate-900/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold font-heading pr-4">Архив записей</h3>
                    <div className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center flex-shrink-0 text-amber-500">
                        <PlayCircle className="w-7 h-7" />
                    </div>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                   Записи встреч Клуба проповедников и Книжного клуба собираются в отдельных плейлистах, их можно позже просмотреть в любое удобное время.
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-bold text-base uppercase tracking-wider">
                   Доступно студентам <ArrowRight className="w-4 h-4" />
                </div>
             </div>

             {/* Alumni Card - bg cream to stand out on white section */}
             <div className="bg-[#FDFBF7] rounded-[2rem] p-10 border border-slate-200 relative overflow-hidden group hover:border-amber-200 transition-colors flex flex-col shadow-lg shadow-slate-100">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold font-heading text-slate-900 pr-4">Встречи выпускников</h3>
                    <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:border-amber-500 transition-colors">
                        <Users className="w-7 h-7" />
                    </div>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                   Мы не забываем и о выпускниках нашей школы. Для них регулярно проводятся онлайн-встречи, где Денис Самарин читает лекцию, а после этого проходит обсуждение и общение.
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base uppercase tracking-wider">
                   Постоянное развитие <ArrowRight className="w-4 h-4" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Testimonials (Updated to Cream BG + Dot Pattern) */}
      <section className="pt-24 pb-12 bg-[#FDFBF7] relative overflow-hidden border-t border-slate-200">
         <div className="absolute inset-0 pointer-events-none bg-dot-pattern bg-[length:24px_24px] opacity-60"></div>
         
         <div className="container mx-auto px-4 md:px-8 relative z-10">
             <h2 className="text-3xl font-bold text-slate-900 font-heading mb-12 text-center">Отзывы участников</h2>
             
             {/* Mobile Infinite Slider */}
             <div className="md:hidden relative group mb-8">
                <div className="overflow-hidden -mx-4 mb-6">
                    <div 
                        className={`flex ${isTransitioning ? 'transition-transform duration-300 ease-out' : ''}`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {extendedTestimonials.map((text, index) => (
                            <div key={index} className="min-w-full px-4">
                                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                                    <Quote className="w-8 h-8 text-amber-200 mb-4 transform -scale-x-100" />
                                    <p className="text-slate-700 leading-relaxed italic text-base">
                                      {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${getVisibleIndex(currentIndex, testimonials.length) === idx ? 'bg-amber-500' : 'bg-slate-300'}`}
                    />
                  ))}
                </div>
             </div>

             {/* Desktop Grid */}
             <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {testimonials.map((text, idx) => (
                   <div key={idx} className="break-inside-avoid bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <Quote className="w-8 h-8 text-amber-200 mb-4 transform -scale-x-100" />
                      <p className="text-slate-700 leading-relaxed italic">
                        {text}
                      </p>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* SECTION 5: CTA Banner (White to contrast with previous cream section) */}
      <section className="pb-24 pt-12 bg-white relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none bg-grid-pattern bg-[length:4rem_4rem] opacity-40"></div>
         
         <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="bg-amber-50 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-sm border border-amber-100">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-6">Готовы начать обучение?</h2>
                 <p className="text-lg text-slate-600 mb-8">
                   Присоединяйтесь к школе, чтобы стать частью сообщества проповедников.
                 </p>
                 <button
                   onClick={() => setShowModal(true)}
                   className="inline-flex items-center gap-3 bg-amber-500 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1"
                 >
                   Подать заявку
                   <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
            </div>
         </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default PreachersClub;