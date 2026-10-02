import type { L } from './site';

/* Every sentence on the page, in both languages. Facts here come from
   Canberk's own LinkedIn profile and GitHub history; nothing is estimated. */

export const META = {
  title: {
    en: 'Canberk Yıldız · Full-stack developer',
    tr: 'Canberk Yıldız · Full-stack geliştirici',
  },
  description: {
    en: 'Full-stack developer in İstanbul with a mechanical engineering degree. Nineteen live projects in Next.js, React, TypeScript and Node.js.',
    tr: 'İstanbul’da yaşayan, makine mühendisliği mezunu full-stack geliştirici. Next.js, React, TypeScript ve Node.js ile yayında on dokuz proje.',
  },
} satisfies Record<string, L>;

export const NAV = {
  work: { en: 'Work', tr: 'İşler' },
  parts: { en: 'All projects', tr: 'Tüm projeler' },
  path: { en: 'Background', tr: 'Geçmiş' },
  contact: { en: 'Contact', tr: 'İletişim' },
  skip: { en: 'Skip to content', tr: 'İçeriğe geç' },
  theme: { en: 'Switch colour theme', tr: 'Renk temasını değiştir' },
  language: { en: 'Language', tr: 'Dil' },
  home: { en: 'Canberk Yıldız, top of page', tr: 'Canberk Yıldız, sayfa başı' },
} satisfies Record<string, L>;

export const HERO = {
  h1: {
    en: 'Software built by a mechanical engineer.',
    tr: 'Bir makine mühendisinin elinden çıkan yazılım.',
  },
  intro: {
    en: 'I’m Canberk Yıldız, a full-stack developer in İstanbul. I trained as a mechanical engineer, worked on gas turbines and production lines, then spent years selling technical systems across borders. Now I design and build web products end to end: interface, API, database, deploy.',
    tr: 'Ben Canberk Yıldız, İstanbul’da yaşayan bir full-stack geliştiriciyim. Makine mühendisliği okudum, gaz türbinlerinde ve üretim hatlarında çalıştım, sonra yıllarca teknik sistemleri yurt dışına sattım. Şimdi web ürünlerini uçtan uca tasarlayıp geliştiriyorum: arayüz, API, veritabanı, yayın.',
  },
  work: { en: 'See the work', tr: 'İşleri gör' },
  mail: { en: 'Send an email', tr: 'E-posta gönder' },
  blockCaption: { en: 'Title block', tr: 'Antet' },
} satisfies Record<string, L>;

export const TITLE_BLOCK: { label: L; value: L }[] = [
  { label: { en: 'Name', tr: 'Ad' }, value: { en: 'Canberk Yıldız', tr: 'Canberk Yıldız' } },
  { label: { en: 'Role', tr: 'Görev' }, value: { en: 'Full-stack developer', tr: 'Full-stack geliştirici' } },
  { label: { en: 'Based in', tr: 'Konum' }, value: { en: 'İstanbul, Türkiye', tr: 'İstanbul, Türkiye' } },
  {
    label: { en: 'Works with', tr: 'Araçlar' },
    value: {
      en: 'TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL',
      tr: 'TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL',
    },
  },
  {
    label: { en: 'Training', tr: 'Eğitim' },
    value: {
      en: 'B.Eng. Mechanical Engineering, Odesa Polytechnic, 2013. Full-stack web development, GoIT, 2026.',
      tr: 'Makine Mühendisliği lisansı, Odesa Politeknik, 2013. Full-stack web geliştirme, GoIT, 2026.',
    },
  },
  {
    label: { en: 'Languages', tr: 'Diller' },
    value: {
      en: 'Turkish, English, Russian. Basic German and Italian.',
      tr: 'Türkçe, İngilizce, Rusça. Temel Almanca ve İtalyanca.',
    },
  },
  { label: { en: 'Status', tr: 'Durum' }, value: { en: 'Open to developer roles', tr: 'Yazılım rollerine açık' } },
  { label: { en: 'Revised', tr: 'Revizyon' }, value: { en: 'October 2026', tr: 'Ekim 2026' } },
];

export const WORK = {
  h2: { en: 'Selected work', tr: 'Seçili işler' },
  sub: {
    en: 'Six of nineteen. Each sheet shows the site at desktop width and on a phone, captured from the live address.',
    tr: 'On dokuz projeden altısı. Her paftada sitenin masaüstü ve telefon görünümü var; görüntüler yayındaki adresten alındı.',
  },
  sheet: { en: 'Sheet', tr: 'Pafta' },
  of: { en: 'of', tr: '/' },
  type: { en: 'Type', tr: 'Tür' },
  stack: { en: 'Stack', tr: 'Araçlar' },
  started: { en: 'Started', tr: 'Başlangıç' },
  revision: { en: 'Revision', tr: 'Revizyon' },
  firstIssue: { en: 'Rev A: first issue.', tr: 'Rev A: ilk sürüm.' },
  open: { en: 'Open site', tr: 'Siteyi aç' },
  source: { en: 'Source', tr: 'Kaynak kod' },
  desktopAlt: { en: 'desktop view', tr: 'masaüstü görünümü' },
  phoneAlt: { en: 'phone view', tr: 'telefon görünümü' },
} satisfies Record<string, L>;

export const PARTS = {
  h2: { en: 'Parts list', tr: 'Parça listesi' },
  sub: {
    en: 'All nineteen projects. Every one is deployed, and each link opens the running site.',
    tr: 'On dokuz projenin tamamı. Hepsi yayında; bağlantılar çalışan siteyi açıyor.',
  },
  no: { en: 'No.', tr: 'No' },
  project: { en: 'Project', tr: 'Proje' },
  stack: { en: 'Stack', tr: 'Araçlar' },
  started: { en: 'Started', tr: 'Başlangıç' },
  rev: { en: 'Rev', tr: 'Rev' },
  links: { en: 'Links', tr: 'Bağlantılar' },
  live: { en: 'Site', tr: 'Site' },
  code: { en: 'Code', tr: 'Kod' },
  legend: {
    en: 'Started is the month of the first commit. Rev B means the project was later rebuilt from scratch.',
    tr: 'Başlangıç, ilk commit’in ayıdır. Rev B, projenin sonradan sıfırdan yeniden kurulduğunu gösterir.',
  },
  preview: { en: 'Preview', tr: 'Önizleme' },
} satisfies Record<string, L>;

export const PATH = {
  h2: { en: 'Revision history', tr: 'Revizyon geçmişi' },
  intro: {
    en: 'I studied mechanical engineering in Odesa and worked in power generation and manufacturing in Russia and Ukraine. In İstanbul I moved into technical sales, where the job was to stand between a client and an engineering team and make each understand the other. In 2025 I started building the software myself.',
    tr: 'Odesa’da makine mühendisliği okudum, Rusya ve Ukrayna’da enerji üretimi ve imalat alanlarında çalıştım. İstanbul’da teknik satışa geçtim; işim müşteri ile mühendislik ekibinin arasında durup ikisinin birbirini anlamasını sağlamaktı. 2025’te yazılımı kendim yazmaya başladım.',
  },
  date: { en: 'Date', tr: 'Tarih' },
  change: { en: 'Change', tr: 'Değişiklik' },
  before: { en: 'Engineering and sales', tr: 'Mühendislik ve satış' },
  software: { en: 'Software', tr: 'Yazılım' },
} satisfies Record<string, L>;

export interface PathRow {
  date: L;
  text: L;
}

export const PATH_BEFORE: PathRow[] = [
  {
    date: { en: '2009 to 2013', tr: '2009–2013' },
    text: {
      en: 'B.Eng. Mechanical Engineering, Design and Management. Odesa Polytechnic National University.',
      tr: 'Makine Mühendisliği lisansı, Tasarım ve Yönetim. Odesa Politeknik Ulusal Üniversitesi.',
    },
  },
  {
    date: { en: '2013 to 2014', tr: '2013–2014' },
    text: {
      en: 'Power plant operations engineer on gas turbine systems. Energoproekt, Krasnoyarsk.',
      tr: 'Gaz türbini sistemlerinde santral işletme mühendisi. Energoproekt, Krasnoyarsk.',
    },
  },
  {
    date: { en: '2015 to 2018', tr: '2015–2018' },
    text: {
      en: 'Production engineer. New products and equipment at OAO Radikal in Kyiv, then process improvement at Antorus in Kherson.',
      tr: 'Üretim mühendisi. Kiev’de OAO Radikal’de yeni ürün ve ekipman devreye alma, ardından Herson’da Antorus’ta süreç iyileştirme.',
    },
  },
  {
    date: { en: '2019', tr: '2019' },
    text: {
      en: 'Certified in non-destructive testing and welding inspection. Düzce University.',
      tr: 'Tahribatsız muayene ve kaynak muayenesi sertifikası. Düzce Üniversitesi.',
    },
  },
  {
    date: { en: '2019 to 2023', tr: '2019–2023' },
    text: {
      en: 'Business development and sales for payment and POS systems. Nayax, İstanbul. The link between clients and the technical team.',
      tr: 'Ödeme ve POS sistemlerinde iş geliştirme ve satış. Nayax, İstanbul. Müşteri ile teknik ekip arasındaki bağlantı.',
    },
  },
  {
    date: { en: '2023 to 2025', tr: '2023–2025' },
    text: {
      en: 'Operations and project lead. Prodea, İstanbul. Client delivery tracked by KPIs and milestones.',
      tr: 'Operasyon ve proje lideri. Prodea, İstanbul. Müşteri teslimatlarının KPI ve kilometre taşlarıyla takibi.',
    },
  },
  {
    date: { en: '2025 to now', tr: '2025–bugün' },
    text: {
      en: 'International project sales for fire safety systems. Intertek Fire, İstanbul.',
      tr: 'Yangın güvenliği sistemlerinde uluslararası proje satışı. Intertek Fire, İstanbul.',
    },
  },
];

export const PATH_SOFTWARE: PathRow[] = [
  {
    date: { en: '2025-03', tr: '2025-03' },
    text: {
      en: 'Started the full-stack web development programme at GoIT.',
      tr: 'GoIT’te full-stack web geliştirme programına başladım.',
    },
  },
  {
    date: { en: '2025-09', tr: '2025-09' },
    text: {
      en: 'First team project: Focus Frame, in HTML and CSS. Led the design.',
      tr: 'İlk ekip projesi: HTML ve CSS ile Focus Frame. Tasarımı ben yürüttüm.',
    },
  },
  {
    date: { en: '2025-11', tr: '2025-11' },
    text: {
      en: 'Cinemania, a team JavaScript project on a live film API.',
      tr: 'Cinemania: canlı bir film API’si üzerinde ekipçe yazılan JavaScript projesi.',
    },
  },
  {
    date: { en: '2026-01', tr: '2026-01' },
    text: {
      en: 'Finished GoIT with a grade of 90 out of 100. First React projects.',
      tr: 'GoIT’i 100 üzerinden 90 ile bitirdim. İlk React projeleri.',
    },
  },
  {
    date: { en: '2026-03', tr: '2026-03' },
    text: {
      en: 'First full-stack apps on Node.js, Express and MongoDB: PetLove and E-Pharmacy.',
      tr: 'Node.js, Express ve MongoDB ile ilk tam yığın uygulamalar: PetLove ve E-Pharmacy.',
    },
  },
  {
    date: { en: '2026-05', tr: '2026-05' },
    text: {
      en: 'Spectra CRM, first version. First 3D work in Three.js.',
      tr: 'Spectra CRM’in ilk sürümü. Three.js ile ilk 3B çalışma.',
    },
  },
  {
    date: { en: '2026-07', tr: '2026-07' },
    text: {
      en: 'Moved to Next.js 16. Rebuilt four early projects from scratch: Aperture, Verdant, Filmhub and Overland.',
      tr: 'Next.js 16’ya geçtim. Dört eski projeyi sıfırdan yeniden kurdum: Aperture, Verdant, Filmhub ve Overland.',
    },
  },
  {
    date: { en: '2026-08', tr: '2026-08' },
    text: {
      en: 'Started Rainbow Design, a site builder for small businesses.',
      tr: 'Küçük işletmeler için site kurucu Rainbow Design’a başladım.',
    },
  },
  {
    date: { en: '2026-09', tr: '2026-09' },
    text: {
      en: 'Spectra CRM rebuilt as Rev B.',
      tr: 'Spectra CRM, Rev B olarak yeniden kuruldu.',
    },
  },
  {
    date: { en: '2026-10', tr: '2026-10' },
    text: {
      en: 'Rainbow Design running on its own domain, rainbowdesign.com.tr.',
      tr: 'Rainbow Design kendi alan adında çalışıyor: rainbowdesign.com.tr.',
    },
  },
];

export const CHECKS = {
  h2: { en: 'Inspection checklist', tr: 'Muayene listesi' },
  intro: {
    en: 'In weld inspection a part is not accepted because it looks right. These are the checks I run on a site before I call it finished. This page passes all five.',
    tr: 'Kaynak muayenesinde bir parça, iyi göründüğü için kabul edilmez. Bir siteye bitti demeden önce yaptığım kontroller bunlar. Bu sayfa beşinden de geçiyor.',
  },
  check: { en: 'Check', tr: 'Kontrol' },
  method: { en: 'Method', tr: 'Yöntem' },
  accept: { en: 'Accepted when', tr: 'Kabul ölçütü' },
} satisfies Record<string, L>;

export const CHECK_ROWS: { check: L; method: L; accept: L }[] = [
  {
    check: { en: 'Narrow screen', tr: 'Dar ekran' },
    method: { en: 'Load every page at 320 px wide.', tr: 'Her sayfayı 320 px genişlikte aç.' },
    accept: { en: 'Nothing scrolls sideways, nothing is clipped.', tr: 'Yana kayma yok, kesilen içerik yok.' },
  },
  {
    check: { en: 'Keyboard', tr: 'Klavye' },
    method: { en: 'Reach every control without a mouse.', tr: 'Her kontrole fare olmadan ulaş.' },
    accept: { en: 'Focus is always visible.', tr: 'Odak her zaman görünür.' },
  },
  {
    check: { en: 'Contrast', tr: 'Kontrast' },
    method: { en: 'Measure text against its background.', tr: 'Metni zeminine karşı ölç.' },
    accept: { en: 'WCAG AA or better, in both themes.', tr: 'İki temada da WCAG AA veya üstü.' },
  },
  {
    check: { en: 'Reduced motion', tr: 'Azaltılmış hareket' },
    method: { en: 'Turn the system setting on.', tr: 'Sistem ayarını aç.' },
    accept: { en: 'Content still appears; movement is gone.', tr: 'İçerik görünür, hareket kalkar.' },
  },
  {
    check: { en: 'Console', tr: 'Konsol' },
    method: { en: 'Open each page with developer tools.', tr: 'Her sayfayı geliştirici araçlarıyla aç.' },
    accept: { en: 'No errors.', tr: 'Hata yok.' },
  },
];

export const CONTACT = {
  h2: {
    en: 'Have a role or a project? Write to me.',
    tr: 'Bir pozisyon ya da proje mi var? Bana yazın.',
  },
  email: { en: 'Email', tr: 'E-posta' },
  github: { en: 'GitHub', tr: 'GitHub' },
  linkedin: { en: 'LinkedIn', tr: 'LinkedIn' },
  source: { en: 'Source of this site', tr: 'Bu sitenin kaynak kodu' },
  set: { en: 'Set in Archivo and IBM Plex Mono.', tr: 'Archivo ve IBM Plex Mono ile dizildi.' },
} satisfies Record<string, L>;
