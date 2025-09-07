// src/components/FeaturedProjects.jsx
'use client'; // Добавляем 'use client', так как библиотека работает на клиенте

import Link from 'next/link';
import Masonry from 'react-masonry-css'; // 1. Импортируем Masonry
import { portfolioImages } from '@/data/projectsData'; 
import { ProjectCard } from './ProjectCard';
import './Masonry.css'; // 2. Импортируем файл со стилями для сетки (создадим его на след. шаге)

export const FeaturedProjects = () => {
  const featured = portfolioImages.slice(0, 6);

  // 3. Настройки для Masonry: сколько колонок показывать на разных экранах
  const breakpointColumnsObj = {
    default: 3, // 3 колонки по умолчанию
    1024: 2,   // 2 колонки на экранах до 1024px
    640: 1     // 1 колонка на мобильных экранах до 640px
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Галерея
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {featured.map((image) => (
            // Теперь карточки будут сами распределяться по колонкам
            <div key={image.id} className="mb-8"> {/* Добавляем отступ снизу */}
              <ProjectCard src={image.src} />
            </div>
          ))}
        </Masonry>

        <div className="text-center mt-16">
          <Link 
            href="/portfolio"
            className="inline-block bg-[#E2725B] text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Смотреть все портфолио
          </Link>
        </div>
      </div>
    </section>
  );
};