'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi'; // Иконка для почты
import { FaTelegramPlane } from 'react-icons/fa'; // Иконка для Telegram
import Link from 'next/link';

export default function ContactPage() {
  // Состояние для отслеживания, скопирована ли почта
  const [copied, setCopied] = useState(false);

  const email = 'vikiem25@gmail.com';
  const telegram = 'https://t.me/Shonymoon';

  // Функция для копирования почты в буфер обмена
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // Через 2 секунды возвращаем надпись обратно
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    // Используем тот же темный фон, что и на странице "Обо мне"
    <div className="bg-[#111111] text-gray-200 min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Свяжитесь со мной
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Открыта для новых проектов и интересных предложений.
        </p>

        {/* Контейнер для двух кнопок */}
        <div className="space-y-6">
          
          {/* Кнопка "Email" */}
          <button
            onClick={handleCopyEmail}
            className="
              group w-full flex items-center justify-center gap-4 
              border border-gray-700 rounded-lg p-5
              bg-gray-900/50 hover:bg-gray-800
              transition-all duration-300"
          >
            <FiMail className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            <span className={`text-xl font-semibold ${copied ? 'text-green-400' : 'text-gray-200'}`}>
              {copied ? 'Скопировано!' : email}
            </span>
          </button>

          {/* Кнопка "Telegram" */}
          <Link
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group w-full flex items-center justify-center gap-4 
              border border-gray-700 rounded-lg p-5
              bg-gray-900/50 hover:bg-gray-800
              transition-all duration-300"
          >
            <FaTelegramPlane className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-xl font-semibold text-gray-200">
              Написать в Telegram
            </span>
          </Link>

        </div>
      </motion.div>
    </div>
  );
}