export type Lang = 'ar' | 'en';

export const siteContent = {
  ar: {
    dir: 'rtl' as const,
    nav: ['الرئيسية', 'من نحن', 'الخدمات', 'الأعمال', 'التواصل'],
    brandTag: 'شركة إعلانات وتسويق متكاملة',
    heroBadge: 'HAS MEDIA · شركة دعاية وإعلان · الكويت',
    heroTitle: 'نصنع حضوراً إعلانياً احترافياً يعكس هوية أعمالكم بأعلى مستوى من الجودة والتنظيم.',
    heroText:
      'تقدم HAS MEDIA حلولاً متكاملة في الدعاية والإعلان والتصميم والتخطيط الإعلامي، مع تنفيذ احترافي يواكب احتياجات الشركات والمؤسسات في الكويت.',
    ctaPrimary: 'واتساب',
    ctaSecondary: 'الخدمات',
    coverTitle: 'شركة هاس ميديا للدعاية والإعلان',
    coverSubtitle: 'حلول إعلانية متكاملة بهوية مؤسسية رسمية',
    aboutEyebrow: 'من نحن',
    aboutTitle: 'شركة متخصصة في تقديم خدمات الدعاية والإعلان بتخطيط منظم وتنفيذ احترافي.',
    aboutText:
      'نعمل في HAS MEDIA على تقديم باقة متكاملة من الخدمات الإعلانية والإبداعية التي تساعد الشركات على بناء حضور واضح واحترافي في السوق. نركز على جودة التنفيذ، وضوح الرسالة، والالتزام بالهوية المؤسسية في جميع مراحل العمل.',
    servicesEyebrow: 'الخدمات',
    servicesTitle: 'خدماتنا',
    services: [
      {
        title: 'التصميم',
        text: 'تصميم المواد الإعلانية والهوية البصرية والمطبوعات بأسلوب مهني يعكس صورة الجهة بشكل واضح ومنظم.',
      },
      {
        title: 'إعلانات الصحف',
        text: 'إعداد وتصميم وتنفيذ الإعلانات الصحفية بمقاسات وصيغ مناسبة لوسائل النشر المختلفة.',
      },
      {
        title: 'إدارة المواقع ومنصات التواصل',
        text: 'إدارة المحتوى الرقمي والحسابات والمنصات الاجتماعية بما يضمن حضوراً مستمراً ومنظماً للعلامة التجارية.',
      },
      {
        title: 'التصوير الاحترافي بجودة عالية',
        text: 'تنفيذ جلسات تصوير احترافية للمنتجات والخدمات والفعاليات باستخدام معايير جودة عالية.',
      },
      {
        title: 'تنظيم الفعاليات',
        text: 'تخطيط وتنظيم الفعاليات والمؤتمرات والأنشطة التسويقية مع متابعة كافة التفاصيل التشغيلية.',
      },
      {
        title: 'الإعلانات الخارجية',
        text: 'تصميم وتجهيز وتنفيذ الإعلانات الخارجية بما يشمل اللوحات والواجهات والمواد الدعائية الميدانية.',
      },
      {
        title: 'الطباعة التجارية',
        text: 'تنفيذ المطبوعات التجارية بمستوى جودة مرتفع يشمل البروشورات والملفات التعريفية والمواد التسويقية.',
      },
      {
        title: 'الخطة الإعلامية',
        text: 'إعداد خطط إعلامية مدروسة تساعد الجهات على تنظيم حضورها الإعلاني وتوزيع رسائلها بشكل فعال.',
      },
    ],
    portfolioEyebrow: 'أعمالنا',
    portfolioTitle: 'نماذج عرض بأسلوب ملف تعريفي رسمي',
    portfolio: [
      {
        title: 'عرض خدمات إعلانية',
        category: 'Company Profile',
        text: 'صفحة عرض منظمة للخدمات والهوية المؤسسية والمجالات التشغيلية للشركة.',
      },
      {
        title: 'تصميم إعلان مطبوع',
        category: 'Print Advertising',
        text: 'نموذج لتصميم إعلان رسمي يعكس وضوح الرسالة وجودة الترتيب البصري.',
      },
      {
        title: 'خطة إعلامية متكاملة',
        category: 'Media Planning',
        text: 'عرض بصري منظم لتوزيع القنوات الإعلانية والخطوات التنفيذية والرسائل الأساسية.',
      },
    ],
    clientsEyebrow: 'مجالات العمل',
    clientsTitle: 'خدمات مناسبة للشركات والمؤسسات والأنشطة التجارية التي تحتاج إلى حضور إعلاني منظم.',
    clients: ['شركات', 'مؤسسات', 'مطاعم', 'متاجر', 'فعاليات', 'جهات خدمية'],
    contactEyebrow: 'التواصل',
    contactTitle: 'للاستفسار عن الخدمات أو طلب عرض تعاون',
    contactText: 'يمكنكم التواصل مباشرة مع HAS MEDIA عبر واتساب أو البريد الإلكتروني أو إنستغرام.',
    contactPrimary: 'واتساب',
    contactSecondary: 'البريد الإلكتروني',
    contactThird: 'إنستغرام',
    location: 'الكويت',
    footer: 'HAS MEDIA — شركة دعاية وإعلان في الكويت.',
  },
  en: {
    dir: 'ltr' as const,
    nav: ['Home', 'About', 'Services', 'Work', 'Contact'],
    brandTag: 'Integrated Advertising & Marketing Company',
    heroBadge: 'HAS MEDIA · Advertising Company · Kuwait',
    heroTitle: 'We create professional advertising presence that reflects your business identity with quality and structure.',
    heroText:
      'HAS MEDIA provides integrated solutions in advertising, design, media planning, and marketing execution for companies and institutions in Kuwait.',
    ctaPrimary: 'WhatsApp',
    ctaSecondary: 'Services',
    coverTitle: 'HAS MEDIA Advertising Company',
    coverSubtitle: 'Integrated advertising solutions with an official corporate identity',
    aboutEyebrow: 'About',
    aboutTitle: 'A specialized company delivering advertising services with structured planning and professional execution.',
    aboutText:
      'At HAS MEDIA, we provide a complete set of advertising and creative services that help companies build a clear and professional market presence. We focus on execution quality, message clarity, and consistent corporate identity across all touchpoints.',
    servicesEyebrow: 'Services',
    servicesTitle: 'Our Services',
    services: [
      {
        title: 'Design',
        text: 'Professional design for advertising materials, visual identity, and printed assets with clear corporate presentation.',
      },
      {
        title: 'Newspaper Advertising',
        text: 'Preparation, design, and execution of newspaper advertisements in suitable sizes and publishing formats.',
      },
      {
        title: 'Website & Social Media Management',
        text: 'Management of digital content, websites, and social media platforms to ensure organized brand presence.',
      },
      {
        title: 'High-Quality Professional Photography',
        text: 'Professional photography for products, services, and events using high-quality production standards.',
      },
      {
        title: 'Event Organization',
        text: 'Planning and organizing events, conferences, and promotional activities with full operational follow-up.',
      },
      {
        title: 'Outdoor Advertising',
        text: 'Design and execution of outdoor advertising including signage, facades, and field promotional materials.',
      },
      {
        title: 'Commercial Printing',
        text: 'High-quality commercial printing including brochures, company profiles, and promotional materials.',
      },
      {
        title: 'Media Plan',
        text: 'Carefully prepared media plans that organize advertising presence and distribute key messages effectively.',
      },
    ],
    portfolioEyebrow: 'Work',
    portfolioTitle: 'Selected presentation samples in an official company profile style',
    portfolio: [
      {
        title: 'Advertising Services Presentation',
        category: 'Company Profile',
        text: 'A structured presentation page for services, corporate identity, and business areas.',
      },
      {
        title: 'Printed Advertisement Design',
        category: 'Print Advertising',
        text: 'A sample printed ad design reflecting message clarity and visual organization.',
      },
      {
        title: 'Integrated Media Plan',
        category: 'Media Planning',
        text: 'An organized visual presentation of channels, execution steps, and key messages.',
      },
    ],
    clientsEyebrow: 'Sectors',
    clientsTitle: 'Suitable for companies, institutions, and commercial activities seeking organized advertising presence.',
    clients: ['Companies', 'Institutions', 'Restaurants', 'Retail', 'Events', 'Services'],
    contactEyebrow: 'Contact',
    contactTitle: 'For service inquiries or cooperation requests',
    contactText: 'You can contact HAS MEDIA directly via WhatsApp, email, or Instagram.',
    contactPrimary: 'WhatsApp',
    contactSecondary: 'Email',
    contactThird: 'Instagram',
    location: 'Kuwait',
    footer: 'HAS MEDIA — Advertising company in Kuwait.',
  },
};
