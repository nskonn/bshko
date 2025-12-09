import React, { useRef } from 'react';
import { BookOpen, Church, ChevronLeft, ChevronRight } from 'lucide-react';

const TeachersSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 350;
      const gap = 24; // gap-6
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const teachers = [
    {
      name: "Денис Самарин",
      role: "Директор школы",
      subjects: "Апологетика, сотериология",
      location: "г. Ейск. Пресвитер.",
      image: "/assets/teacher/1.webp"
    },
    {
      name: "Рыжов Александр",
      role: "Зам. директора",
      subjects: "Экзегетика",
      location: "г. Брест. Учитель.",
      image: "/assets/teacher/2.webp"
    },
    {
      name: "Яковлев Михаил",
      role: "Преподаватель",
      subjects: "Спец. герменевтика",
      location: "г. Пермь. Пресвитер.",
      image: "/assets/teacher/3.png"
    },
    {
      name: "Черненков Михаил",
      role: "Преподаватель",
      subjects: "Гомилетика (тем. проповедь)",
      location: "г. Жлобин. Пресвитер.",
      image: "/assets/teacher/4.png"
    },
    {
      name: "Евгений Чмых",
      role: "Преподаватель",
      subjects: "Гомилетика (разъяснительная проповедь)",
      location: "г. Курганинск. Пресвитер.",
      image: "/assets/teacher/5.png"
    },
    {
      name: "Попов Андрей",
      role: "Преподаватель",
      subjects: "Гомилетика (текстовая проповедь)",
      location: "г. Армавир. Благовестник.",
      image: "/assets/teacher/6.png"
    }
  ];

  // Reusable Card Component
  const TeacherCard = ({ teacher }: { teacher: typeof teachers[0] }) => (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-200 flex flex-col h-full">
      <div className=" overflow-hidden relative bg-slate-200">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 via-[#000]/10 to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-lg py-2 px-3 text-center shadow-lg">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{teacher.role}</p>
            </div>
          </div>
        </div>

      </div>
      <div className="p-6 flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-slate-900 font-heading leading-tight">{teacher.name}</h3>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="relative -top-[6px] mt-1 w-5 h-5 rounded-full bg-slate-50 text-brand  flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <p className="text-base text-slate-700 leading-snug">
              <span className="font-bold block text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Предмет</span>
              {teacher.subjects}
            </p>
          </div>

          <div className="flex gap-3">
            <div className="relative -top-[7px] mt-1 w-5 h-5 rounded-full bg-slate-50 text-brand flex items-center justify-center shrink-0">
              <Church className="w-4 h-4" />
            </div>
            <p className="text-base text-slate-700 leading-snug">
              <span className="font-bold block text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Служение</span>
              {teacher.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50" id="teachers">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 mb-4 font-heading leading-tight">Преподаватели</h2>
            <p className="text-slate-600">
              Опытные служители, готовые делиться знаниями и наставлять студентов.
            </p>
          </div>

          {/* Horizontal Scroll Container Wrapper */}
          <div className="relative group">
            {/* Left Scroll Button */}
            <button 
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-10 bg-white hover:bg-slate-50 text-slate-800 p-3 rounded-full shadow-lg border border-slate-100 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar scroll-smooth"
            >
              {teachers.map((teacher, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)] snap-start"
                >
                  <TeacherCard teacher={teacher} />
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button 
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-10 bg-white hover:bg-slate-50 text-slate-800 p-3 rounded-full shadow-lg border border-slate-100 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TeachersSection;