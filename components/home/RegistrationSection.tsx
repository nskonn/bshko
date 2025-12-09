import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, User, Phone, Mail, ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full" ref={containerRef}>
      {label && <label className="block text-base font-semibold text-slate-700 mb-2">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 border rounded-xl px-5 py-3.5 flex items-center justify-between transition-all font-medium text-base outline-none ${
          isOpen ? 'border-brand ring-2 ring-brand/20' : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <span className={selectedOption ? 'text-slate-800' : 'text-slate-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-2xl z-50 overflow-hidden max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-5 py-3 text-base font-medium transition-colors ${
                option.value === value
                  ? 'bg-brand/5 text-brand'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const RegistrationSection = () => {
  const [role, setRole] = useState("Студент (Полный курс)");
  const [channel, setChannel] = useState("");

  const roleOptions = [
    { label: "Студент (Полный курс)", value: "Студент (Полный курс)" },
    { label: "Вольнослушатель", value: "Вольнослушатель" },
    { label: "Кандидат в Клуб проповедников", value: "Кандидат в Клуб проповедников" }
  ];

  const channelOptions = [
    { label: "Telegram", value: "Telegram" },
    { label: "WhatsApp", value: "WhatsApp" },
    { label: "Email", value: "Email" },
    { label: "Телефон", value: "Телефон" }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7]" id="registration">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Strict 12-column grid wrapper for the card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl shadow-slate-200/60 border border-slate-100 bg-white max-w-6xl mx-auto rounded-[2rem] relative">

          {/* Left Side: Visual & Info (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900 relative p-10 lg:p-14 flex flex-col justify-between text-white overflow-hidden min-h-[500px] rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Горы" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 border border-brand/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                Набор открыт
              </div>
              <h2 className="text-3xl md:text-[3rem] font-bold font-heading leading-tight mb-2">Регистрация в БШКО</h2>
              <p className="text-slate-300 text-lg font-light">на 2026 год</p>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0">
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Библейская школа — это место, где вы сможете углубить свои знания Писания и найти призвание.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>Онлайн формат</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>Диплом</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 bg-white rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2">Заполните анкету</h3>
              <p className="text-slate-500 text-base">Пожалуйста, заполните все обязательные поля, отмеченные звездочкой (*)</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Role Select */}
              <CustomSelect 
                label="В каком качестве вы будете поступать?" 
                options={roleOptions} 
                value={role} 
                onChange={setRole} 
              />

              {/* Name Fields */}
              <div className="space-y-4">
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Фамилия *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Имя *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                  </div>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder="Отчество" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="tel" placeholder="+7 (999) 000-00-00 *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="email" placeholder="Email *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
              </div>

              {/* Preference & Note */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomSelect 
                    options={channelOptions} 
                    value={channel} 
                    onChange={setChannel} 
                    placeholder="Канал связи *"
                />
                <input type="text" placeholder="Примечание (по желанию)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
              </div>

              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-500 border border-slate-100 flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">i</div>
                <p>После отправки анкеты вы будете переадресованы на наш Telegram канал. Подпишитесь, чтобы быть в курсе всех событий!</p>
              </div>

              <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl transition-all flex items-center justify-center gap-2 group font-heading text-lg mt-2">
                <span>Отправить заявку</span>
              </button>

              <p className="text-xs text-slate-400 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработки персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;