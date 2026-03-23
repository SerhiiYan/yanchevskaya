// src/components/ProjectCard.jsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ProjectCard = ({ src }) => {
  return (
    <div className="block overflow-hidden rounded-lg cursor-pointer"> 
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt="Иллюстрация из портфолио Виктории Янчевской"

          width={600} 
          height={600}
          className="w-full h-auto object-cover" 
        />
      </motion.div>
    </div>
  );
}