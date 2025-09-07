import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Victoria Yanchevskaya | 2D Artist & Illustrator',
  description: 'Портфолио 2D художника и иллюстратора Виктории Янчевской.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#FDFDFA] text-[#41403E]`}>
        <Header />
        {/* 👇 УБИРАЕМ КЛАССЫ ОТСТУПОВ ОТСЮДА */}
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}