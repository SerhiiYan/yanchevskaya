// src/app/page.jsx

import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";

export default function HomePage() {
  return (
    // Мы убираем <main>, так как он нам больше не нужен на этом уровне
    <>
      {/* Hero-секция будет жить своей жизнью на всю ширину */}
      <HeroSection />

      {/* 
        А вот для остального контента, как галерея, мы создадим
        контейнер с нашими привычными отступами.
      */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <FeaturedProjects />
      </div>
    </>
  );
}