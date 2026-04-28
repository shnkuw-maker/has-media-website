'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { HasLogo } from '../components/has-logo';
import { LanguageToggle } from '../components/language-toggle';
import { SectionHeading } from '../components/section-heading';
import { siteContent, type Lang } from '../site-content';

const links = ['home', 'about', 'services', 'portfolio', 'contact'];
const whatsappUrl = 'https://wa.me/96555859392';
const emailUrl = 'mailto:info@hasmedia-kw.com';
const instagramUrl = 'https://www.instagram.com/has_media.kw';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = useMemo(() => siteContent[lang], [lang]);

  return (
    <main dir={t.dir}>
      <h1>{t.coverTitle}</h1>

      <HasLogo />
      <LanguageToggle
        lang={lang}
        onToggle={() => setLang(lang === 'ar' ? 'en' : 'ar')}
      />

      <SectionHeading title="Test Section" />
    </main>
  );
}
