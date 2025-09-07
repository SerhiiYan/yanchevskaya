// src/components/Header.jsx

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Обо мне', href: '/about' },
  { name: 'Контакт', href: '/contact' },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // 👇 ГЛАВНЫЕ ИЗМЕНЕНИЯ ЗДЕСЬ
      className="
        fixed top-0 left-0 w-full z-50 
        bg-black/30 backdrop-blur-sm 
        px-4 sm:px-8 md:px-12 lg:px-16
      "
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
          VY
          <span className="block text-xs font-normal text-gray-300 tracking-wider">
            2D Artist & Illustrator
          </span>
        </Link>

        {/* Навигация */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.li key={link.name} whileHover={{ scale: 1.1 }}>
              <Link
                href={link.href}
                className="text-lg text-gray-200 hover:text-white transition-colors duration-300 drop-shadow-md"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        
        {/* Мобильное меню (пока заглушка) */}
        <div className="md:hidden">
            <button className="text-3xl text-white">☰</button>
        </div>
      </nav>
    </motion.header>
  );
};