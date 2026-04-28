export default function Home() {
  const services = [
    ['01', '✎', 'التصميم', 'تصاميم إبداعية احترافية تعبر عن هوية علامتك.'],
    ['02', '▤', 'إعلانات الصحف', 'إعلانات صحفية مؤثرة تصل لجمهورك المستهدف.'],
    ['03', '☷', 'إدارة المواقع ومنصات التواصل', 'إدارة محتوى احترافية وتفاعل يعزز حضورك الرقمي.'],
    ['04', '📷', 'التصوير الاحترافي بجودة عالية', 'تصوير احترافي يعكس جودة علامتك التجارية.'],
    ['05', '☆', 'تنظيم الفعاليات', 'تنظيم فعاليات مبتكرة بأعلى معايير الجودة.'],
    ['06', '▭', 'الإعلانات الخارجية', 'حلول دعائية خارجية بانتشار واسع وفعالية عالية.'],
    ['07', '▣', 'الطباعة التجارية', 'طباعة عالية الجودة لمختلف المطبوعات التجارية.'],
    ['08', '◔', 'الخطة الإعلامية', 'تخطيط إعلامي استراتيجي لتحقيق أهدافك التسويقية.'],
  ];

  return (
    <main dir="rtl" style={styles.page}>
      <header style={styles.nav}>
        <div style={styles.lang}><span>EN</span><b>AR</b></div>
        <div style={styles.logoSmall}>HAS<br /><small>MEDIA ADS COMPANY</small></div>
        <div style={styles.menu}>☰</div>
      </header>

      <section style={styles.hero}>
        <div style={styles.logoBig}>HAS<br /><small>MEDIA ADS COMPANY</small></div>
        <div style={styles.lineText}>شركة هاس ميديا للدعاية والإعلان</div>
        <h1 style={styles.title}>شركة هاس ميديا<br />للدعاية والإعلان</h1>
        <h2 style={styles.subtitle}>حلول إعلانية متكاملة بهوية مؤسسية رسمية</h2>
        <p style={styles.text}>
          تقدم HAS MEDIA حلولاً متكاملة في الدعاية والإعلان والتصميم والتخطيط الإعلامي،
          مع تنفيذ احترافي يواكب احتياجات الشركات والمؤسسات في الكويت.
        </p>
      </section>

      <section style={styles.services}>
        <p style={styles.eyebrow}>خدماتنا</p>
        <h2 style={styles.sectionTitle}>خدمات تسويقية متكاملة</h2>
        <p style={styles.sectionSub}>لرفع الانتشار وتعزيز النمو داخل الكويت وخارجها</p>

        <div style={styles.grid}>
          {services.map(([num, icon, title, text]) => (
            <div key={num} style={styles.card}>
              <div style={styles.num}>{num}</div>
              <div style={styles.icon}>{icon}</div>
              <h3 style={styles.cardTitle}>{title}</h3>
              <p style={styles.cardText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.contact}>
        <h2 style={styles.contactTitle}>تواصل معنا</h2>
        <div style={styles.contactLine}></div>

        <div style={styles.contactGrid}>
          <a style={styles.contactItem} href="https://wa.me/96555859392">واتساب<br /><span>+965 5585 9392</span></a>
          <a style={styles.contactItem} href="mailto:info@hasmedia-kw.com">البريد الإلكتروني<br /><span>info@hasmedia-kw.com</span></a>
          <a style={styles.contactItem} href="https://www.instagram.com/has_media.kw">إنستغرام<br /><span>has_media.kw</span></a>
          <a style={styles.contactItem} href="tel:+96555859392">الهاتف<br /><span>+965 5585 9392</span></a>
        </div>

        <div style={styles.footerLogo}>HAS</div>
        <p style={styles.footer}>شركة هاس ميديا للدعاية والإعلان في الكويت.<br />© 2025 HAS MEDIA جميع الحقوق محفوظة.</p>
      </section>
    </main>
  );
}

const styles: any = {
  page: {
    minHeight: '100vh',
    background: '#f7f1e7',
    color: '#6b6258',
    padding: '18px',
    fontFamily: 'Arial, sans-serif',
  },
  nav: {
    height: 86,
    borderRadius: 24,
    background: 'rgba(255,255,255,.82)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    boxShadow: '0 12px 35px rgba(120,90,45,.08)',
    marginBottom: 22,
  },
  lang: {
    direction: 'ltr',
    display: 'flex',
    gap: 8,
    background: '#fff',
    borderRadius: 999,
    padding: 6,
    border: '1px solid #eadfca',
  },
  logoSmall: { color: '#c99a24', fontWeight: 900, textAlign: 'center', lineHeight: 1 },
  menu: { color: '#c99a24', fontSize: 22 },
  logoBig: { color: '#c99a24', fontWeight: 900, fontSize: 78, textAlign: 'center', lineHeight: .8 },
  hero: {
    borderRadius: 30,
    background: 'rgba(255,255,255,.74)',
    padding: '48px 24px',
    textAlign: 'center',
    boxShadow: '0 18px 45px rgba(120,90,45,.08)',
    border: '1px solid #eee0c9',
  },
  lineText: { color: '#c29b3b', marginTop: 28 },
  title: { color: '#cf6f54', fontSize: 34, lineHeight: 1.7, margin: '22px 0 10px', fontWeight: 800 },
  subtitle: { fontSize: 18, color: '#77706a', fontWeight: 600 },
  text: { maxWidth: 560, margin: '22px auto 0', lineHeight: 2, fontSize: 16 },
  services: { textAlign: 'center', padding: '34px 0' },
  eyebrow: { color: '#c99a24', fontWeight: 700 },
  sectionTitle: { color: '#cf6f54', fontSize: 30, margin: 0 },
  sectionSub: { marginTop: 8 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 28 },
  card: {
    background: 'rgba(255,255,255,.82)',
    borderRadius: 20,
    padding: 18,
    minHeight: 165,
    border: '1px solid #eee0c9',
    boxShadow: '0 12px 26px rgba(120,90,45,.06)',
  },
  num: { color: '#c99a24', fontWeight: 800 },
  icon: { color: '#c99a24', fontSize: 28, margin: '12px 0' },
  cardTitle: { color: '#cf6f54', fontSize: 16, margin: 0 },
  cardText: { fontSize: 13, lineHeight: 1.8 },
  contact: {
    borderRadius: 28,
    background: 'rgba(255,255,255,.78)',
    padding: 28,
    textAlign: 'center',
    border: '1px solid #eee0c9',
  },
  contactTitle: { color: '#cf6f54', fontSize: 30, margin: 0 },
  contactLine: { width: 70, height: 2, background: '#c99a24', margin: '14px auto 26px' },
  contactGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 },
  contactItem: { color: '#6b6258', textDecoration: 'none', fontWeight: 700 },
  footerLogo: { color: '#c99a24', fontWeight: 900, fontSize: 30, marginTop: 30 },
  footer: { fontSize: 13, lineHeight: 1.8 },
};
