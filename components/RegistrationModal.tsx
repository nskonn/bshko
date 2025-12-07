import React, { useEffect } from 'react';
import { X, User, Phone, Mail, ChevronRight, Send } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
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

          <form className="space-y-5">
            {/* Course Selection */}
            <div>
              <label className="block text-base font-bold text-slate-700 mb-2">В каком качестве вы будете поступать?</label>
              <div className="relative">
                <select defaultValue="Студент (Полный курс)" className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-base">
                  <option>Студент (Полный курс)</option>
                  <option>Вольнослушатель</option>
                  <option>Кандидат в Клуб проповедников</option>
                </select>
                <ChevronRight className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
              </div>
            </div>

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
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-base">
                  <option value="" disabled>Канал связи *</option>
                  <option>Telegram</option>
                  <option>WhatsApp</option>
                  <option>Email</option>
                  <option>Телефон</option>
                </select>
                <ChevronRight className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
              </div>
              <input type="text" placeholder="Примечание (по желанию)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium text-slate-800 text-base" />
            </div>

            {/* Info Block */}
            <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100 flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">i</div>
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