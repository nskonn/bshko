import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <header className="relative bg-[#0B1120] overflow-hidden flex flex-col justify-center min-h-[600px] md:h-[88vh] md:max-h-[1000px] pt-32 pb-24 md:py-0">
      {/* Background Pattern/Image Placeholder */}
      <div className="absolute inset-0">
        <img src="https://downloader.disk.yandex.ru/preview/4616954c4aec0040e151ed9430a3fb5f66c618c57e526a36a21eb32f885fd717/6934ba1c/p8mH28KEgAbkSWArGLTuM5cHhDHjEqhGdtJ0cEDCTZdyA58lAoZJGG2VM1pCgOQFp4FMG2UxKVsWkXH4-N3A8w%3D%3D?uid=0&filename=Oxford_lib.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1129x1352" alt="Библиотека" className="w-full h-full object-cover" />
      </div>
      
      {/* Gradient Overlays */}
      {/* Left to Right gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/95 via-[#0B1120]/70 to-transparent"></div>
      {/* Bottom fade for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl pb-8 md:pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
            Идет набор на 2026 год
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Библейская школа</span> Кавказского объединения
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl">
            Углубленное изучение Писания, подготовка проповедников и формирование целостного христианского мировоззрения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenModal}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group font-heading shadow-xl shadow-amber-500/20"
            >
              Начать обучение
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all font-heading">
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;