import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, align = 'start' }: { eyebrow: string; title: string; align?: 'start' | 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <div className="mb-4 text-sm font-semibold text-[#b9943a]">{eyebrow}</div>
      <h2 className="title-accent text-3xl font-bold leading-[1.6] md:text-5xl">{title}</h2>
    </motion.div>
  );
}
