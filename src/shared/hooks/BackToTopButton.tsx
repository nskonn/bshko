import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Логика отслеживания скролла
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Плавный скролл наверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            aria-label="Вернуться наверх"
            className={`fixed bottom-8 right-8 bg-[#fd9a00] hover:bg-[#e08900] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default BackToTopButton;