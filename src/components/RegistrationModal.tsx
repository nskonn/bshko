import React, { useState, useEffect, useRef } from 'react';
import { X, User, Phone, Mail, ChevronDown, Send } from 'lucide-react';

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
      {label && <label className="block text-base font-bold text-slate-700 mb-2">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 border rounded-xl px-5 py-4 flex items-center justify-between transition-all font-medium text-base outline-none text-left ${
          isOpen ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-slate-300'
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
                  ? 'bg-blue-50 text-blue-600'
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

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}} />

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading mb-3">Заполните анкету</h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Пожалуйста, заполните все обязательные поля, отмеченные звездочкой (*)
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Course Selection */}
            <CustomSelect 
                label="В каком качестве вы будете поступать?" 
                options={roleOptions} 
                value={role} 
                onChange={setRole} 
            />

            {/* Name Fields */}
            <div className="space-y-4">
              <div className="relative group">
                <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                <input type="text" placeholder="Фамилия *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                  <input type="text" placeholder="Имя *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
                <div className="relative group">
                  <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                  <input type="text" placeholder="Отчество" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                <input type="tel" placeholder="+7 (999) 000-00-00 *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
              </div>
              <div className="relative group">
                <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
                <input type="email" placeholder="Email *" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
              </div>
            </div>

            {/* Connection Channel & Note */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomSelect 
                    options={channelOptions} 
                    value={channel} 
                    onChange={setChannel} 
                    placeholder="Канал связи *"
                />
              <input type="text" placeholder="Примечание (по желанию)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
            </div>

            {/* Info Block */}
            <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100 flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-base">i</div>
              <p className="text-base text-slate-600 leading-relaxed">
                После отправки анкеты вы будете переадресованы на наш Telegram канал. Подпишитесь, чтобы быть в курсе всех событий!
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl transition-all flex items-center justify-center gap-3 group font-heading text-lg mt-4">
              <span>Отправить заявку</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-slate-400 text-center mt-6 leading-tight max-w-sm mx-auto">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработки персональных данных.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;