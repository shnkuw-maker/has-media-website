'use client';

import { motion } from 'framer-motion';
import type { Lang } from '@/components/site-content';

export function LanguageToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.28)] bg-white/80 px-2 py-2 text-sm font-medium text-black shadow-[0_10px_40px_rgba(17,17,17,0.08)] backdrop-blur"
      aria-label="Toggle language"
    >
      <motion.span
        layout
        className="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-[#d4af37]"
        animate={{ x: lang === 'ar' ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      />
      <span className={`relative z-10 rounded-full px-3 ${lang === 'ar' ? 'text-white' : 'text-black/75'}`}>AR</span>
      <span className={`relative z-10 rounded-full px-3 ${lang === 'en' ? 'text-white' : 'text-black/75'}`}>EN</span>
    </button>
  );
}
