// src/components/HeroSection.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollDownIcon } from './ScrollDownIcon';

export const HeroSection = () => {
  return (
    // Этот div теперь будет начинаться от самого верха экрана
    <div className="relative flex items-center justify-center min-h-screen text-center px-4">
      <Image
        src="/images/hero-background.png" // Убедитесь, что путь правильный
        alt="Фоновая иллюстрация от Виктории Янчевской"
        fill={true}
        priority={true}
        className="object-cover -z-10 brightness-45"
      />
      
      {/* Никаких дополнительных отступов не нужно */}
      <div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Victoria Yanchevskaya
        </motion.h1>

        <motion.p 
          className="mt-4 text-xl md:text-2xl text-gray-200 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          2D Artist & Illustrator
        </motion.p>
        
        <motion.p 
           className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 drop-shadow-md"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          Создаю выразительных персонажей и визуальные миры для gamedev и полиграфии.
        </motion.p>
      </div>

      <ScrollDownIcon />
    </div>
  );
};