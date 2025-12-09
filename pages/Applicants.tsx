import React, { useState } from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeFooter from '../components/home/HomeFooter';
import RegistrationModal from '../components/RegistrationModal';
import { ClipboardCheck, BookOpen, GraduationCap, Clock, CheckCircle, ArrowRight, Monitor, Users, FileText, Wallet } from 'lucide-react';

const Applicants = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800">
       <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-heading { fontFamily: 'Montserrat', sans-serif; }
        .font-sans { fontFamily: 'Inter', sans-serif; }
      `}} />

      <HomeNavbar onOpenModal={() => setShowModal(true)} variant="inner" />
      <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern bg-[length:4rem_4rem]"></div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-heading mb-6 leading-tight">Поступающим</h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Подробная информация о программах, формате обучения и условиях поступления в Библейскую школу.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-dot-pattern bg-[length:24px_24px] opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          {/* 1. Subjects Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 font-heading mb-4">Программа обучения</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">
                 Обучение сосредоточено на глубоком изучении ключевых богословских дисциплин.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
               {[
                 { title: 'Библиология', desc: 'Происхождение, сущность и история формирования Библии.' },
                 { title: 'Герменевтика', desc: 'Искусство толкования, теория интерпретации и правильного понимания текстов.' },
                 { title: 'Гомилетика', desc: 'Изучение построения текстовой, разъяснительной и тематической проповеди.' },
                 { title: 'Экзегетика', desc: 'Практическое применение герменевтических принципов при изучении книг разных жанров.' },
                 { title: 'Догматика', desc: 'Систематизированное изложение основных разделов библейского учения.' },
               ].map((subject, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{subject.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{subject.desc}</p>
                 </div>
               ))}
               
               {/* Special Courses Card */}
               <div className="bg-slate-900 p-8 rounded-2xl text-white flex flex-col justify-center">
                  <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                    <span className="text-amber-500 text-2xl">★</span> Спецкурсы
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm">Дополнительные предметы для желающих:</p>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>Отдельные разделы догматики</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>Для руководителей малых групп</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>Для ведущих разборы Писания</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 2. Formats Section */}
          <div className="mb-24">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 font-heading mb-4">Как проходят занятия</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">
                 Обучение длится 3 года. Мы предлагаем две формы обучения, чтобы каждый мог выбрать подходящий ритм.
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Student */}
               <div className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden flex flex-col">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Студент</h3>
                      <p className="text-slate-500 font-medium">Полное погружение и диплом</p>
                    </div>
                    <div className="w-16 h-16 bg-transparent border-2 border-amber-500 text-amber-500 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                 </div>
                 
                 <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex gap-3">
                       <Monitor className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                       <div>
                         <p className="font-bold text-slate-800">Онлайн-занятия (Live)</p>
                         <p className="text-sm text-slate-600">Каждый вторник 20:30 - 23:30. Живое общение с преподавателем.</p>
                       </div>
                    </div>
                    <div className="flex gap-3">
                       <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                       <div>
                         <p className="font-bold text-slate-800">Нагрузка ~6-7 часов/нед.</p>
                         <p className="text-sm text-slate-600">Лекции (3ч) + Домашняя работа (4ч).</p>
                       </div>
                    </div>
                    <div className="flex gap-3">
                       <FileText className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                       <div>
                         <p className="font-bold text-slate-800">Курсовые и Диплом</p>
                         <p className="text-sm text-slate-600">Написание проектов и защита дипломной работы.</p>
                       </div>
                    </div>
                 </div>
                 <button onClick={() => setShowModal(true)} className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">Подать заявку</button>
               </div>

               {/* Listener */}
               <div className="bg-white rounded-[2rem] p-10 border border-slate-200 hover:shadow-xl transition-all flex flex-col">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Вольнослушатель</h3>
                      <p className="text-slate-500 font-medium">Свободный график</p>
                    </div>
                    <div className="w-16 h-16 bg-transparent border-2 border-amber-500 text-amber-500 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                      <Users className="w-8 h-8" />
                    </div>
                 </div>
                 
                 <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex gap-3">
                       <Monitor className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                       <div>
                         <p className="font-bold text-slate-800">Только в записи</p>
                         <p className="text-sm text-slate-600">Без присутствия на онлайн-уроках. Свободное время просмотра.</p>
                       </div>
                    </div>
                    <div className="flex gap-3">
                       <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                       <div>
                         <p className="font-bold text-slate-800">Облегченная программа</p>
                         <p className="text-sm text-slate-600">Без домашних заданий и курсовых.</p>
                       </div>
                    </div>
                    <div className="flex gap-3">
                       <FileText className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                       <div>
                         <p className="font-bold text-slate-800">Тесты и Сертификат</p>
                         <p className="text-sm text-slate-600">Сдача тестов в конце курса. Сертификат слушателя.</p>
                       </div>
                    </div>
                 </div>
                 <button onClick={() => setShowModal(true)} className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">Подать заявку</button>
               </div>
             </div>
          </div>

          {/* 3. Requirements & Admission Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 font-heading mb-12 text-center">Условия поступления</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               {/* General Requirements */}
               <div className="lg:col-span-12 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-12">
                     <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold font-heading mb-6">Базовые требования</h3>
                        <ul className="space-y-4">
                           <li className="flex gap-3">
                              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                              <span className="text-slate-700">Братья из Кавказского объединения (или других регионов с одобрения руководства церкви).</span>
                           </li>
                           <li className="flex gap-3">
                              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                              <span className="text-slate-700">Членство в церкви и отсутствие церковных взысканий.</span>
                           </li>
                           <li className="flex gap-3">
                              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                              <span className="text-slate-700">Навыки работы с ПК (Zoom, текстовые редакторы).</span>
                           </li>
                        </ul>
                     </div>
                     <div className="md:w-1/2 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h3 className="text-xl font-bold font-heading mb-4">Как поступить?</h3>
                        
                        <div className="mb-6">
                           <span className="font-bold text-slate-900 block mb-1">Для Слушателя:</span>
                           <p className="text-sm text-slate-600">Достаточно просто заполнить анкету на сайте.</p>
                        </div>

                        <div>
                           <span className="font-bold text-slate-900 block mb-1">Для Студента:</span>
                           <p className="text-sm text-slate-600 mb-3">Заполнить анкету + Написать эссе по книге из списка.</p>
                           <div className="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-200 italic">
                             В эссе нужно отразить: впечатление о книге, извлеченные уроки, пользу и аргументированное несогласие (если есть).
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* 4. Cost Section */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden mb-24">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

             <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                <div className="lg:w-1/2">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900">
                        <Wallet className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold font-heading">Стоимость</h2>
                   </div>
                   <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     Мы стараемся сделать обучение доступным. Действует предварительная оплата за год (не возвращается при прекращении обучения).
                   </p>
                   <div className="inline-flex bg-slate-800 rounded-xl p-4 border border-slate-700">
                      <span className="text-amber-500 font-bold mr-2">Скидка 50%</span>
                      <span className="text-slate-300">для миссионеров и рукоположенных служителей</span>
                   </div>
                </div>
                
                <div className="lg:w-auto text-center lg:text-right">
                   <div className="text-[3.5rem] md:text-[5rem] font-bold font-heading leading-none text-white mb-2">
                     12 000 ₽
                   </div>
                   <p className="text-xl text-slate-400 font-medium">в год</p>
                </div>
             </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-slate-900 font-heading mb-6">Готовы начать обучение?</h2>
             <button
               onClick={() => setShowModal(true)}
               className="inline-flex items-center gap-3 bg-amber-500 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-1"
             >
               Подать заявку
               <ArrowRight className="w-5 h-5" />
             </button>
          </div>

        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Applicants;