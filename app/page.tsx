'use client';

import { HasLogo } from '../components/has-logo';
import { LanguageToggle } from '../components/language-toggle';
import { SectionHeading } from '../components/section-heading';
import { siteContent, type Lang } from '../site-content';

const links = ['home', 'about', 'services', 'portfolio', 'contact'];
const whatsappUrl = 'https://wa.me/96555859392';
const emailUrl = 'mailto:info@hasmedia-kw.com';
const instagramUrl = 'https://www.instagram.com/has_media.kw';

function ServiceCard({ title, text, index }: { title: string; text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: 'easeOut' }}
      className="profile-card rounded-[24px] p-6 md:p-7"
    >
      <div className="mb-4 text-sm font-semibold text-[#b9943a]">0{index + 1}</div>
      <h3 className="title-accent text-2xl font-bold leading-[1.5]">{title}</h3>
      <p className="mt-3 text-base leading-8 text-[#6f6358]">{text}</p>
    </motion.div>
  );
}

function ProfilePanel({
  title,
  category,
  text,
  index,
}: {
  title: string;
  category: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: 'easeOut' }}
      className="profile-card overflow-hidden rounded-[28px]"
    >
      <div className="bg-[linear-gradient(180deg,#faf6ee,#f3ebde)] p-6 md:p-8">
        <div className="mb-8 text-xs uppercase tracking-[0.25em] text-[#b9943a]">{category}</div>

        <div className="mx-auto flex min-h-[18rem] max-w-[26rem] flex-col items-center justify-center rounded-[28px] border border-[rgba(185,148,58,0.14)] bg-white text-center shadow-[0_18px_45px_rgba(92,73,53,0.06)]">
          <HasLogo size="md" centered />
          <div className="mt-6 h-px w-24 bg-[rgba(185,148,58,0.3)]" />
          <div className="mt-6 px-6 text-2xl font-bold leading-[1.5] text-[#cf6f54]">{title}</div>
        </div>
      </div>

      <div className="bg-white px-6 py-5 md:px-8 md:py-6">
        <p className="text-base leading-8 text-[#6f6358]">{text}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = useMemo(() => siteContent[lang], [lang]);

  return (
    <main dir={t.dir} className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <section id="home" className="leaf-bg relative overflow-hidden pb-16 pt-4 md:pb-24 md:pt-6">
        <div className="section-shell relative z-10">
          <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel soft-line sticky top-3 z-30 mb-8 flex items-center justify-between gap-4 rounded-[22px] border px-4 py-4 md:top-4 md:mb-12 md:px-7"
          >
            <HasLogo size="sm" />

            <nav className="hidden items-center gap-7 text-sm text-[#6f6358] lg:flex">
              {t.nav.map((item, index) => (
                <a key={item} href={`#${links[index]}`} className="transition hover:text-[#cf6f54]">
                  {item}
                </a>
              ))}
            </nav>

            <LanguageToggle lang={lang} onToggle={() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))} />
          </motion.header>

          <div className="profile-card rounded-[34px] px-6 py-12 text-center md:px-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl"
            >
              <HasLogo size="lg" centered />

              <div className="mx-auto mt-8 h-px w-24 bg-[rgba(185,148,58,0.28)]" />

              <div className="mt-8 text-sm uppercase tracking-[0.26em] text-[#b9943a]">{t.heroBadge}</div>

              <h1 className="title-accent mx-auto mt-6 max-w-4xl text-3xl font-bold leading-[1.7] md:text-5xl">
                {t.coverTitle}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#7b6e62] md:text-lg">
                {t.coverSubtitle}
              </p>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#6f6358] md:text-lg">
                {t.heroText}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="rounded-full border border-[rgba(185,148,58,0.24)] bg-white px-6 py-3 text-sm font-semibold text-[#6f6358] transition hover:text-[#cf6f54]"
                >
                  {t.ctaSecondary}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[linear-gradient(135deg,#d9c27f,#b9943a,#94752b)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(185,148,58,0.22)]"
                >
                  {t.ctaPrimary}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="leaf-bg py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="profile-card rounded-[28px] p-7 md:p-10">
            <SectionHeading eyebrow={t.aboutEyebrow} title={t.aboutTitle} />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="mt-6 text-base leading-9 text-[#6f6358]"
            >
              {t.aboutText}
            </motion.p>
          </div>

          <div className="profile-card flex min-h-[22rem] items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#faf6ee,#f4ece0)] p-8 text-center md:p-10">
            <div>
              <HasLogo size="md" centered />
              <div className="mx-auto mt-8 h-px w-20 bg-[rgba(185,148,58,0.3)]" />
              <div className="title-accent mt-8 text-2xl font-bold leading-[1.7] md:text-3xl">{t.heroTitle}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="leaf-bg py-16 md:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow={t.servicesEyebrow} title={t.servicesTitle} align="center" />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.services.map((service, index) => (
              <ServiceCard key={service.title} title={service.title} text={service.text} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="leaf-bg py-16 md:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow={t.portfolioEyebrow} title={t.portfolioTitle} />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.portfolio.map((item, index) => (
              <ProfilePanel key={item.title} title={item.title} category={item.category} text={item.text} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow={t.clientsEyebrow} title={t.clientsTitle} align="center" />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {t.clients.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="profile-card rounded-[20px] px-4 py-5 text-center text-sm font-semibold text-[#7a6d61]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="leaf-bg pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="profile-card rounded-[32px] px-6 py-8 md:px-10 md:py-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="mb-4 text-sm font-semibold text-[#b9943a]">{t.contactEyebrow}</div>

                <h2 className="title-accent text-3xl font-bold leading-[1.6] md:text-5xl">{t.contactTitle}</h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f6358]">{t.contactText}</p>
              </div>

              <div className="grid gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[linear-gradient(135deg,#d9c27f,#b9943a,#94752b)] px-6 py-4 text-center text-sm font-semibold text-white"
                >
                  {t.contactPrimary}
                </a>

                <a
                  href={emailUrl}
                  className="rounded-full border border-[rgba(185,148,58,0.2)] bg-white px-6 py-4 text-center text-sm font-semibold text-[#6f6358]"
                >
                  {t.contactSecondary}
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[rgba(185,148,58,0.2)] bg-white px-6 py-4 text-center text-sm font-semibold text-[#6f6358]"
                >
                  {t.contactThird}
                </a>
              </div>
            </div>
          </motion.div>

          <footer className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-[rgba(185,148,58,0.16)] pt-6 text-center text-sm text-[#7d6f63]">
            <HasLogo size="sm" centered />
            <span>{t.footer}</span>
            <span>{t.location}</span>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-[#cf6f54]">
              @has_media.kw
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
