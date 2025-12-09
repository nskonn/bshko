import React, { useState, useEffect } from 'react';
import { BookOpen, Church } from 'lucide-react';

const TeachersSection = () => {
  const teachers = [
    {
      name: "Денис Самарин",
      age: "46 лет",
      role: "Директор школы",
      subjects: "Преподаватель апологетики и сотериологии",
      location: "Пресвитер церкви города Ейск",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Рыжов Александр",
      age: "44 года",
      role: "Зам. директора",
      subjects: "Преподаватель экзегетики",
      location: "Учитель в церкви г. Брест, Беларусь",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Яковлев Михаил",
      age: "50 лет",
      role: "Преподаватель",
      subjects: "Специальная герменевтика",
      location: "Пресвитер в городе Пермь",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Черненков Михаил",
      age: "59 лет",
      role: "Преподаватель",
      subjects: "Гомилетика (тематическая проповедь)",
      location: "Пресвитер в г. Жлобин (Беларусь)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Infinite Slider Logic
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Create extended array for infinite loop: [Last, ...Original, First]
  const extendedTeachers = [teachers[teachers.length - 1], ...teachers, teachers[0]];

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
      // Reset position without transition for infinite loop illusion
      if (currentIndex === 0) {
        setCurrentIndex(teachers.length);
      } else if (currentIndex === extendedTeachers.length - 1) {
        setCurrentIndex(1);
      }
    }, 300); // Duration matches CSS transition

    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, teachers.length, extendedTeachers.length]);

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
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Helper to determine active dot index (0 to length-1)
  const getVisibleIndex = (index: number, total: number) => {
    if (index === 0) return total - 1;
    if (index === total + 1) return 0;
    return index - 1;
  };

  // Reusable Card Component
  const TeacherCard = ({ teacher }: { teacher: typeof teachers[0] }) => (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-200 flex flex-col h-full h-full">
      <div className="aspect-[4/5] overflow-hidden relative bg-slate-200">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-base font-medium">{teacher.role}</p>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-slate-900 font-heading leading-tight">{teacher.name}</h3>
          <span className="text-xs text-slate-400 font-medium shrink-0 ml-2">{teacher.age}</span>
        </div>

        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-slate-50 text-slate-500 group-hover:text-brand flex items-center justify-center shrink-0 transition-colors">
              <BookOpen className="w-3 h-3" />
            </div>
            <p className="text-base text-slate-700 leading-snug">
              <span className="font-bold block text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Предмет</span>
              {teacher.subjects}
            </p>
          </div>

          <div className="flex gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-slate-50 text-slate-500 group-hover:text-brand flex items-center justify-center shrink-0 transition-colors">
              <Church className="w-3 h-3" />
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
        
        <div className="grid grid-cols-12 gap-y-12 md:gap-y-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-3xl md:text-[3rem] font-bold text-slate-900 mb-4 font-heading leading-tight">Преподаватели</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Опытные служители и богословы, готовые делиться знаниями и наставлять студентов.
            </p>
          </div>

          {/* Mobile Infinite Slider */}
          <div className="col-span-12 md:hidden relative group">
            <div className="overflow-hidden -mx-4 mb-6">
               <div 
                 className={`flex ${isTransitioning ? 'transition-transform duration-300 ease-out' : ''}`}
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
               >
                  {extendedTeachers.map((teacher, index) => (
                    <div key={index} className="min-w-full px-4">
                      <TeacherCard teacher={teacher} />
                    </div>
                  ))}
               </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              {teachers.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${getVisibleIndex(currentIndex, teachers.length) === idx ? 'bg-brand' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:col-span-12 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teachers.map((teacher, index) => (
               <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;