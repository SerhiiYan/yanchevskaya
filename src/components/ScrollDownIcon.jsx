// src/components/ScrollDownIcon.jsx
'use client';

import { motion } from 'framer-motion';

export const ScrollDownIcon = () => {
  return (
    // Этот div позиционирует иконку внизу по центру Hero-секции
    <motion.div
      // Начальное состояние: невидима
      initial={{ opacity: 0 }}
      // Анимация появления: становится видимой через 1.5 секунды после загрузки
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      {/* 
        Этот div отвечает за саму "прыгающую" анимацию.
        Мы анимируем свойство 'y' (вертикальное положение).
        [0, 10, 0] означает:
        1. Начать с y=0
        2. Опуститься до y=10px
        3. Вернуться на y=0
      */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity, // Бесконечно повторять анимацию
          ease: 'easeInOut',
        }}
      >
        {/* Это сама стрелочка (шеврон), нарисованная с помощью SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          // "currentColor" заставляет SVG наследовать цвет текста от родителя.
          // Мы задаем text-white, и иконка становится белой.
          stroke="currentColor"
          className="w-8 h-8 text-white drop-shadow-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};