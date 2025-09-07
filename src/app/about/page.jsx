'use client';
import {useState} from 'react';
import Image from 'next/image'; 
import { FaInstagram } from 'react-icons/fa';
import Masonry from 'react-masonry-css';
import '@/components/Masonry.css';  
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Компонент для секций с анимацией, чтобы не повторять код
const Section = ({ children, className = '' }) => (
  <motion.section 
    className={`py-16 border-b border-gray-800 ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {children}
  </motion.section>
);

export default function AboutPage() {
    const [hobbyLightboxOpen, setHobbyLightboxOpen] = useState(false);
    const [hobbyActiveIndex, setHobbyActiveIndex] = useState(0);
  return (
    // Темный фон и светлый текст для всей страницы
    <div className="bg-[#111111] text-gray-200 pt-24 sm:pt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* === 1. ИНТРО-БЛОК: Теперь без фото, фокус на тексте === */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* НОВЫЙ, БОЛЕЕ ПРОСТОЙ ЗАГОЛОВОК */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Создаю визуальные истории.
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Креативная и ориентированная на детали 2D-художница и дизайнер. Обладаю глубокими знаниями в области композиции, цветоведения и традиционных художественных техник, которые применяю для создания целостных и привлекательных визуальных миров.
          </p>
        </motion.div>

        {/* === 2. ОПЫТ РАБОТЫ: Более детальный список === */}
        <Section>
          <h2 className="text-4xl font-bold text-white mb-8">Чем я занимаюсь</h2>
          <div className="space-y-6">
            <p className="text-xl font-semibold text-white">Художник-фрилансер / Графический дизайнер</p>
            <p className="text-gray-400 -mt-4 mb-4">Март 2018 – Настоящее время</p>
            <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
              <li>
                <span className="font-semibold text-gray-100">Gamedev:</span> Разработка стилизованных иллюстраций и элементов UI для мобильной игры в стиле "fantasy".
              </li>
              <li>
                <span className="font-semibold text-gray-100">Иллюстрация для печати:</span> Создание серии иллюстраций для печатных изданий.
              </li>
               <li>
                <span className="font-semibold text-gray-100">Полиграфия:</span> Полное сопровождение до печати (буклеты, визитки, плакаты) для клиентов из сферы event-индустрии.
              </li>
              <li>
                <span className="font-semibold text-gray-100">Мерч и одежда:</span> Создание принтов по техническому заданию заказчика.
              </li>
              <li>
                <span className="font-semibold text-gray-100">Стикеры:</span> Разработка стикерпаков для приложений по индивидуальным запросам.
              </li>
            </ul>
          </div>
        </Section>
        
        {/* === 3. НАВЫКИ: Остаются такими же, так как это удачный формат === */}
        <Section>
          <h2 className="text-4xl font-bold text-white mb-10">Арсенал навыков</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white border-b-2 border-[#E2725B] pb-2 mb-4 inline-block">Специализация</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Цифровая иллюстрация</li>
                <li>Концепт-арт</li>
                <li>Дизайн персонажей</li>
                <li>Брендинг</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white border-b-2 border-[#E2725B] pb-2 mb-4 inline-block">Инструменты</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
                <li>CorelDRAW</li>
              </ul>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-white border-b-2 border-[#E2725B] pb-2 mb-4 inline-block">База</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Композиция</li>
                <li>Цветоведение</li>
                <li>Рисунок от руки</li>
                <li>История искусств</li>
              </ul>
            </div>
          </div>
        </Section>
        <Section>
           <h2 className="text-4xl font-bold text-white mb-8">Образование</h2>
           <div>
             <h3 className="text-2xl font-semibold text-white">Гродненский государственный университет им. Я. Купалы</h3>
             <p className="text-gray-400 mt-1">Дизайн (костюма и тканей), Высшее. 2015</p>
           </div>
        </Section>
        <Section className="border-b-0 pb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Делаю фигурки</h2>
            <p className="text-lg text-gray-400 max-w-3xl mb-12">
              В свободное время я люблю работать с материалами, создавая фигурки из полимерной глины.
            </p>
          {(() => {
            const hobbyImages = [
              { id: 'h1', src: '/images/hobby/cat-card.jpg', width: 800, height: 1000 },
              { id: 'h2', src: '/images/hobby/cat-card1.jpg', width: 800, height: 900 },
              { id: 'h3', src: '/images/hobby/cats.jpg', width: 800, height: 1100 },
              { id: 'h4', src: '/images/hobby/cats1.jpg', width: 800, height: 1100 },
              { id: 'h5', src: '/images/hobby/doll.jpg', width: 800, height: 1100 },
              { id: 'h6', src: '/images/hobby/doll1.jpg', width: 800, height: 1100 },
              { id: 'h7', src: '/images/hobby/cat-red.jpg', width: 800, height: 1100 },
            ];

    const breakpointColumnsObj = { default: 3, 768: 2 };

    // --- ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ЛАЙТБОКСА ---
    const openHobbyLightbox = (index) => {
      setHobbyActiveIndex(index);
      setHobbyLightboxOpen(true);
    };

    return (
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {hobbyImages.map((image, index) => ( // <-- Добавляем 'index'
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              // 👇 ДОБАВЛЯЕМ ОБРАБОТЧИК КЛИКА И КУРСОР 👇
              className="cursor-pointer"
              onClick={() => openHobbyLightbox(index)} 
            >
              <Image
                src={image.src}
                alt="Фигурка из полимерной глины"
                width={image.width}
                height={image.height}
                className="rounded-lg object-cover w-full h-auto pointer-events-none" // pointer-events-none чтобы клик проходил на родительский div
              />
            </motion.div>
          ))}
        </Masonry>
        
        {/* === КОМПОНЕНТ LIGHTBOX ДЛЯ ХОББИ === */}
        <Lightbox
          open={hobbyLightboxOpen}
          close={() => setHobbyLightboxOpen(false)}
          slides={hobbyImages.map(img => ({ src: img.src }))}
          index={hobbyActiveIndex}
        />
      </>
    );
  })()}
</Section>

      </div>
    </div>
  );
}