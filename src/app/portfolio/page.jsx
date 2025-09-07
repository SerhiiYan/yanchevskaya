// src/app/portfolio/page.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { portfolioImages, categories } from '@/data/projectsData';
import { ProjectCard } from '@/components/ProjectCard';

// 👇 ВОТ САМАЯ ВАЖНАЯ СТРОКА! УБЕДИТЕСЬ, ЧТО ОНА ЕСТЬ И ПУТЬ ПРАВИЛЬНЫЙ 👇
import '@/components/Masonry.css'; 

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Все', "Персонажи", "Иллюстрация", "Gamedev", "Стикеры",);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // --- ЛОГИКА ФИЛЬТРАЦИИ (Она у вас уже есть и работает правильно!) ---
  const filteredImages = activeCategory === 'Все'
    ? portfolioImages
    : portfolioImages.filter((image) => image.category === activeCategory);

  const openLightbox = (imageSrc) => {
    // Находим индекс картинки в отфильтрованном массиве
    const imageIndex = filteredImages.findIndex(img => img.src === imageSrc);
    setActiveIndex(imageIndex);
    setLightboxOpen(true);
  };

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    768: 2,
    500: 1
  };

  return (
    <div className="pt-24 sm:pt-32">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#41403E] mb-12"
        >
          Галерея работ
        </motion.h1>

        {/* ПАНЕЛЬ ФИЛЬТРОВ */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeCategory === category ? 'bg-[#E2725B] text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ГАЛЕРЕЯ MASONRY */}
        <AnimatePresence> {/* Обертка для анимации */}
          <motion.div layout> {/* layout-анимация для контейнера */}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout // <-- Эта магия заставляет карточки плавно двигаться!
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    // 👇 УБРАЛ mb-8 ОТСЮДА, ТАК КАК ОНО ЗАДАЕТСЯ В CSS
                    onClick={() => openLightbox(image.src)}
                  >
                    <ProjectCard src={image.src} />
                  </motion.div>
                ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={filteredImages.map(img => ({ src: img.src }))}
        index={activeIndex}
      />
    </div>
  );
}