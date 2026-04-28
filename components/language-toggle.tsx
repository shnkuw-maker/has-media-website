'use client';

export function LanguageToggle({ lang, onToggle }: { lang: string; onToggle: () => void }) {
  return (
    <button onClick={onToggle}>
      {lang === 'ar' ? 'EN' : 'AR'}
    </button>
  );
}
