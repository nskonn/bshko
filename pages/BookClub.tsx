import React, { useState } from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeFooter from '../components/home/HomeFooter';
import RegistrationModal from '../components/RegistrationModal';
import { BookOpen, Users, Mic2, ArrowRight, Quote, Coffee, Library, Sparkles } from 'lucide-react';

const BookClub = () => {
  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    "Благодаря книжному клубу получил возможность познакомиться с множеством полезных книг, о которых ранее не знал. Некоторые из них уже прочитал с большим интересом и нашёл вдохновляющие идеи, которые стараюсь развивать в себе.",
    "Наш книжный клуб стал для меня настоящей находкой. Я люблю читать, но у меня всегда были проблемы с выбором хороших книг. Однако в книжном клубе я познакомился со многими новыми авторами, интересными книгами и идеями, которые трансформируют мою жизнь, помогают мне лучше познавать Бога и жизнь в целом. Мне нравятся рецензии наших гостей, преподавателей и однокурсников, потому что каждый делится тем, что уже повлияло на него, тем, что прошло через определённый фильтр личного восприятия.",
    "Мне нравится находиться в окружении умных, думающих людей, которые стремятся развиваться и помогают в этом другим, и я нашёл их в БШКО. Спасибо.",
    "Привет. Я весьма рад что могу быть участником книжного клуба, потому что тяжело сегодня найти хорошую христианскую и глубокую книгу. Братья упрощают работу по поиску, давая хорошие рекомендации и небольшие презентации книги! Всегда очень с нетерпением жду очередного созвона, и выписываю книги, которые будут обязательно мною прочитаны. Особенно ценно что репертуар книг всегда очень разнообразный, а подача материала часто бывает со слайд презентацией.",
    "Всем привет, меня зовут Руслан и я ужасно ненавидел читать... Так было, пока я не повстречал на своём пути проповедника, который читает книги и это рассказывает потрясающе. Я поступил в библейскую школу, и в дополнении через время начал действовать клуб по чтению книг. На данный момент у меня есть около 90 книг домашней библиотеке, которые я хочу прочитать. Я очень полюбил читать всей душой, ценю нашу школу библейскую и читательский клуб.",
    "Благодарю братьев, которые проводят Книжный клуб! Для меня самая основная польза от Книжного клуба это выбор книг для чтения. До Книжного клуба я читал время от времени 1−2 книги в год. Пример читающих братьев по количеству и темам прочитанных книг меня вдохновил. Появилась регулярность в чтении: в среднем 2 книги в месяц. Ещё очень важным результатом считаю для себя то, что слушая обзоры братьев, я и сам учусь на что при чтении обращать свое внимание.",
    "Чтение мне даётся нелегко, поэтому совершенно не хочется тратить время и силы на сомнительную литературу. Книжный клуб очень помогает в том, чтобы определиться, нужна ли мне та или иная книга. А также благодаря отзывам братьев по прочитанным книгам, я узнаю даже о тех писательских трудах, к которым никогда бы не притронулся. В числе таковых Ицхак Адизес «Идеальный руководитель» или Эрих Фромм «Искусство быть».",
    "Для меня книжный клуб — один из лучших видов для подбора книг по чтению. Братья кто проводит, порой так расскажут и преподнесут, что прямо очень тянет самому «вкусить» и погрузиться в какую либо рекомендованную книгу. Так что, если вы ищете грамотный подбор литературы, интересной и разносторонней, которая бы благотворно влияла на нашу душу, то вам сюда!",
    "Книжный клуб очень хорошо дополняет обучение, вносит разнообразие. Он не только помогает пополнять домашнюю библиотеку качественной литературой, но и помогает приобретать ключи для эффективного прочтения сложных книг. В братских рассуждениях дополняются то, что я сам не увидел при прочтении в одиночку. Также важно, что оговаривается конфессиональный взгляд автора книги и возможные разногласия."
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
       <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-heading { fontFamily: 'Montserrat', sans-serif; }
        .font-sans { fontFamily: 'Inter', sans-serif; }
      `}} />

      <HomeNavbar onOpenModal={() => setShowModal(true)} variant="inner" />
      <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* SECTION 1: Page Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern bg-[length:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-heading mb-6 leading-tight">Книжный клуб</h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Интеллектуальный досуг, глубокие обсуждения и обмен мыслями о важной литературе.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: About (Cream BG) */}
      <section className="py-24 bg-[#FDFBF7] relative overflow-hidden border-y border-slate-200">
        <div className="absolute inset-0 pointer-events-none bg-dot-pattern bg-[length:24px_24px] opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             {/* Left Column: Text */}
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-6">Как это работает?</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                   <p>
                     В Книжном клубе докладчики из числа студентов, выпускников и преподавателей рассказывают о книгах, которые показались им важными и полезными.
                   </p>
                   <p>
                     Обычно за одну встречу рассматривается одна книга, иногда несколько книг одного автора. Формат позволяет не просто узнать о содержании, но и понять контекст, историю написания и ключевые идеи.
                   </p>
                   <p>
                     Иногда в Книжном клубе делают доклады приглашенные гости. После доклада всегда идет живое обсуждение, где каждый может высказаться.
                   </p>
                </div>
             </div>

             {/* Right Column: Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Доклады и презентации</h3>
                      <div className="w-12 h-12 rounded-xl border border-amber-300 bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                         <Mic2 className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed">Спикеры готовят глубокий анализ книги, часто с визуальной презентацией.</p>
                </div>

                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full mt-0 sm:mt-8">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Обсуждение</h3>
                      <div className="w-12 h-12 rounded-xl border border-blue-300 bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                         <Users className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed">После доклада мы обсуждаем прочитанное, делимся мнениями и инсайтами.</p>
                </div>

                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Подбор литературы</h3>
                      <div className="w-12 h-12 rounded-xl border border-green-300 bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                         <Library className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed">Помогаем ориентироваться в мире христианской и классической литературы.</p>
                </div>

                <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full mt-0 sm:mt-8">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg font-heading leading-tight pr-4">Атмосфера</h3>
                      <div className="w-12 h-12 rounded-xl border border-purple-300 bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                         <Coffee className="w-6 h-6 stroke-[1.5]" />
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed">Сообщество думающих людей, стремящихся к развитию и познанию.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Testimonials */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-4 md:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 font-heading mb-4">Отзывы участников</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">Что говорят студенты о влиянии Книжного клуба на их жизнь и служение.</p>
             </div>
             
             <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {testimonials.map((text, idx) => (
                   <div key={idx} className="break-inside-avoid bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all relative group">
                      <Quote className="w-8 h-8 text-amber-200 mb-4 transform -scale-x-100 group-hover:text-amber-300 transition-colors" />
                      <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                        {text}
                      </p>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="pb-24 pt-12 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-slate-200">
               <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[100px] opacity-10"></div>
               
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">Присоединяйтесь к нам</h2>
                 <p className="text-lg text-slate-400 mb-8">
                   Книжный клуб доступен для всех студентов и выпускников нашей школы. Подайте заявку на обучение, чтобы стать частью сообщества.
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

export default BookClub;