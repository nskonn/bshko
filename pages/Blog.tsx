import React, { useState } from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeFooter from '../components/home/HomeFooter';
import RegistrationModal from '../components/RegistrationModal';
import { Search, Calendar, ChevronRight, Tag } from 'lucide-react';

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = ['Все', 'Богословие', 'Книжный обзор', 'Проповедь', 'История', 'Студенческая жизнь'];

  const allPosts = [
    {
      id: 1,
      category: 'Богословие',
      date: '10 Окт, 2023',
      title: 'Значение послания к Римлянам в современном контексте',
      excerpt: 'Глубокий анализ ключевых идей апостола Павла и их применение в жизни современной церкви. Рассматриваем вопросы оправдания верой и жизни по Духу.',
      author: 'Денис Самарин',
      image: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'Книжный обзор',
      date: '25 Сен, 2023',
      title: 'Что читать христианину: Топ-5 книг осени',
      excerpt: 'Подборка литературы, которая поможет вам углубить свою веру и найти ответы на сложные вопросы. От классики до современности.',
      author: 'Михаил Яковлев',
      image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'Проповедь',
      date: '12 Сен, 2023',
      title: 'Искусство маленьких шагов в духовной жизни',
      excerpt: 'Почему радикальные перемены часто терпят крах и как важна постоянность в молитве и чтении Слова. Практические советы.',
      author: 'Александр Рыжов',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      category: 'История',
      date: '05 Сен, 2023',
      title: 'Баптисты на Кавказе: Исторический очерк',
      excerpt: 'Как зарождалось евангельское движение в нашем регионе. Судьбы первых миссионеров и становление церквей.',
      author: 'Редакция БШКО',
      image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'Студенческая жизнь',
      date: '28 Авг, 2023',
      title: 'Как совмещать служение, работу и учебу',
      excerpt: 'Интервью с выпускниками, которые делятся своим опытом тайм-менеджмента и расстановки приоритетов.',
      author: 'Студсовет',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'Богословие',
      date: '15 Авг, 2023',
      title: 'Апологетика в XXI веке: Кому и зачем?',
      excerpt: 'Зачем христианину уметь защищать свою веру и какие аргументы работают в современном секулярном обществе.',
      author: 'Денис Самарин',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredPosts = activeCategory === 'Все' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

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
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading mb-6">Блог и ресурсы</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Архив полезных материалов: проповеди, богословские статьи, обзоры книг и новости нашей школы.
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Filters (3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Search */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Поиск по статьям..." 
                  className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-800"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 font-heading mb-4 text-lg">Категории</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
                        activeCategory === cat 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscribe Widget */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white text-center">
                <h3 className="font-bold font-heading mb-2">Подпишитесь</h3>
                <p className="text-sm text-slate-400 mb-4">Получайте новые статьи на почту</p>
                <input type="email" placeholder="Email" className="w-full bg-slate-800 border-none rounded-lg px-4 py-2.5 text-sm mb-3 focus:ring-2 focus:ring-amber-500" />
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
                  Подписаться
                </button>
              </div>
            </div>

            {/* Main Content (9 cols) */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col h-full">
                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm font-heading flex items-center gap-1.5">
                           <Tag className="w-3 h-3 text-amber-500" />
                           {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-sm text-slate-400 mb-4 font-medium">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>{post.author}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-amber-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-slate-50">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors inline-flex items-center gap-2">
                          Читать далее
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
};

export default Blog;