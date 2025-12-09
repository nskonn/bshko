import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <header className="relative bg-[#0B1120] overflow-hidden flex flex-col justify-center min-h-screen md:min-h-[850px] md:h-[99vh] md:max-h-[1200px] pt-32 pb-24 md:py-0">
      {/* Background Pattern/Image Placeholder */}
      <div className="absolute inset-0">
        <img
            className="w-full h-full object-cover"
            src="/assets/img/zero-bg.png" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[#000]/80 md:bg-transparent md:bg-gradient-to-r md:from-[#000]/95 md:via-[#000]/75 md:to-transparent"></div>      <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex items-center">
        {/* 12-Column Grid Wrapper */}
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-brand-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
              Идет набор на 2026 год
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-500">Библейская школа</span> Кавказского объединения
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-16 md:mb-10 font-light leading-relaxed max-w-2xl">
              Углубленное изучение Писания, подготовка проповедников и формирование целостного христианского мировоззрения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="bg-brand hover:bg-brand-600 text-white px-8 py-4 mt-4 md:mt-0 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group font-heading shadow-xl shadow-brand/20 border border-transparent"
              >
                Начать обучение
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/applicants" 
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all font-heading flex items-center justify-center text-center"
              >
                Абитуриенту
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;