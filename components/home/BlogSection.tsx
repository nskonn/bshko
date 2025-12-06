import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">Материалы и статьи</h2>
            <p className="text-slate-500 text-lg">Полезное чтение для духовного назидания. Мы публикуем конспекты, обзоры и проповеди.</p>
          </div>
          <a href="#" className="hidden md:flex items-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-amber-500 hover:text-amber-600 transition-all group">
            Все материалы <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              category: 'Богословие',
              date: '10 Окт, 2023',
              title: 'Значение послания к Римлянам в современном контексте',
              excerpt: 'Глубокий анализ ключевых идей апостола Павла и их применение в жизни современной церкви...'
            },
            {
              category: 'Книжный обзор',
              date: '25 Сен, 2023',
              title: 'Что читать христианину: Топ-5 книг осени',
              excerpt: 'Подборка литературы, которая поможет вам углубить свою веру и найти ответы на сложные вопросы.'
            },
            {
              category: 'Проповедь',
              date: '12 Сен, 2023',
              title: 'Искусство маленьких шагов в духовной жизни',
              excerpt: 'Почему радикальные перемены часто терпят крах и как важна постоянность в молитве.'
            }
          ].map((post, idx) => (
            <article key={idx} className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative shadow-sm">
                {/* Placeholder for dynamic blog images */}
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm font-heading">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-3 font-medium">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-amber-600 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-amber-600 font-bold border border-amber-600 rounded-xl px-8 py-4 w-full">
            Все материалы
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;