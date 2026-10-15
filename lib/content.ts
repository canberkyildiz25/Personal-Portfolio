import type { L } from './site';

/* Every sentence on the page, in both languages. Facts here come from
   Canberk's own LinkedIn profile and GitHub history; nothing is estimated. */

export const META = {
  title: {
    en: 'Canberk Yıldız · Full-stack developer',
    tr: 'Canberk Yıldız · Full-stack geliştirici',
  },
  description: {
    en: 'Full-stack developer in İstanbul with a mechanical engineering degree. Nineteen live projects in Next.js, React, TypeScript and Node.js, and websites for small businesses.',
    tr: 'İstanbul’da yaşayan, makine mühendisliği mezunu full-stack geliştirici. Next.js, React, TypeScript ve Node.js ile yayında on dokuz proje; küçük işletmeler için web siteleri.',
  },
} satisfies Record<string, L>;

export const NAV = {
  skip: { en: 'Skip to content', tr: 'İçeriğe geç' },
  language: { en: 'Language', tr: 'Dil' },
  home: { en: 'Canberk Yıldız, top of page', tr: 'Canberk Yıldız, sayfa başı' },
  onStage: { en: 'On stage', tr: 'Sahnede' },
} satisfies Record<string, L>;

export const HERO = {
  role: {
    en: 'Full-stack developer, İstanbul',
    tr: 'Full-stack geliştirici, İstanbul',
  },
  line: {
    en: 'Software built by a mechanical engineer.',
    tr: 'Bir makine mühendisinin elinden çıkan yazılım.',
  },
  intro: {
    en: 'I trained as a mechanical engineer, worked on gas turbines and production lines, then spent years selling technical systems across borders. Now I design and build web products end to end: interface, API, database, deploy.',
    tr: 'Makine mühendisliği okudum, gaz türbinlerinde ve üretim hatlarında çalıştım, sonra yıllarca teknik sistemleri yurt dışına sattım. Şimdi web ürünlerini uçtan uca tasarlayıp geliştiriyorum: arayüz, API, veritabanı, yayın.',
  },
  roles: { en: 'Open to developer roles.', tr: 'Yazılım rollerine açığım.' },
  sites: { en: 'Building websites for small businesses.', tr: 'Küçük işletmelere web sitesi yapıyorum.' },
  work: { en: 'See the work', tr: 'İşleri gör' },
  mail: { en: 'Write to me', tr: 'Bana yazın' },
  pause: { en: 'Pause the reel', tr: 'Akışı durdur' },
  play: { en: 'Play the reel', tr: 'Akışı başlat' },
} satisfies Record<string, L>;

export const WORK = {
  h2: { en: 'Selected work', tr: 'Seçili işler' },
  sub: {
    en: 'Six of the nineteen. Every picture was taken from the live address.',
    tr: 'On dokuz işten altısı. Bütün görüntüler yayındaki adresten alındı.',
  },
  stack: { en: 'Stack', tr: 'Araçlar' },
  started: { en: 'Started', tr: 'Başlangıç' },
  revision: { en: 'Revision', tr: 'Revizyon' },
  firstIssue: { en: 'Rev A: first version.', tr: 'Rev A: ilk sürüm.' },
  open: { en: 'Open site', tr: 'Siteyi aç' },
  source: { en: 'Source', tr: 'Kaynak kod' },
  desktopAlt: { en: 'desktop view', tr: 'masaüstü görünümü' },
  phoneAlt: { en: 'phone view', tr: 'telefon görünümü' },
} satisfies Record<string, L>;

export const PARTS = {
  h2: { en: 'Every project', tr: 'Bütün projeler' },
  sub: {
    en: 'All nineteen are deployed, and each link opens the running site. Started is the month of the first commit; rev B means the project was rebuilt or redesigned after its first version.',
    tr: 'On dokuzu da yayında; bağlantılar çalışan siteyi açıyor. Başlangıç, ilk commit’in ayı; rev B, projenin ilk sürümünden sonra yeniden kurulduğunu ya da yeniden tasarlandığını gösteriyor.',
  },
  live: { en: 'Site', tr: 'Site' },
  code: { en: 'Code', tr: 'Kod' },
} satisfies Record<string, L>;

export const PATH = {
  h2: { en: 'From gas turbines to TypeScript', tr: 'Gaz türbinlerinden TypeScript’e' },
  intro: {
    en: 'I studied mechanical engineering in Odesa and worked in power generation and manufacturing in Russia and Ukraine. In İstanbul I moved into technical sales, where the job was to stand between a client and an engineering team and make each understand the other. In 2025 I started building the software myself.',
    tr: 'Odesa’da makine mühendisliği okudum, Rusya ve Ukrayna’da enerji üretimi ve imalat alanlarında çalıştım. İstanbul’da teknik satışa geçtim; işim müşteri ile mühendislik ekibinin arasında durup ikisinin birbirini anlamasını sağlamaktı. 2025’te yazılımı kendim yazmaya başladım.',
  },
  before: { en: 'Engineering and sales', tr: 'Mühendislik ve satış' },
  software: { en: 'Software', tr: 'Yazılım' },
  facts: { en: 'In short', tr: 'Kısaca' },
} satisfies Record<string, L>;

export const FACTS: { label: L; value: L }[] = [
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
];

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
      en: 'Finished the GoIT programme. First React projects.',
      tr: 'GoIT programını bitirdim. İlk React projeleri.',
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
      en: 'Started Rainbow Design, a site builder for small businesses. Money Guard redesigned as a ledger.',
      tr: 'Küçük işletmeler için site kurucu Rainbow Design’a başladım. Money Guard bir hesap defteri olarak yeniden tasarlandı.',
    },
  },
  {
    date: { en: '2026-09', tr: '2026-09' },
    text: {
      en: 'Spectra CRM and MISE rebuilt on Next.js 16. InfoDaily redesigned.',
      tr: 'Spectra CRM ve MISE, Next.js 16 ile yeniden kuruldu. InfoDaily yeniden tasarlandı.',
    },
  },
  {
    date: { en: '2026-10', tr: '2026-10' },
    text: {
      en: 'Rainbow Design running on its own domain, rainbowdesign.com.tr. Book-Shelf rebuilt as Shelfmark, Psychologist Services as FIFTY, Purr Pedia as Catalogue, PetLove as Yuva, E-Pharmacy as Nöbet; PokéDuel became a table for the real card game, and Apex Engineering an exhibition of three machines modelled in code.',
      tr: 'Rainbow Design kendi alan adında çalışıyor: rainbowdesign.com.tr. Book-Shelf, Shelfmark olarak; Psychologist Services, FIFTY olarak; Purr Pedia, Catalogue olarak; PetLove, Yuva olarak; E-Pharmacy, Nöbet olarak yeniden kuruldu; PokéDuel gerçek kart oyununun masası, Apex Engineering ise kodla modellenmiş üç makinenin sergisi oldu.',
    },
  },
];

export const HIRE = {
  h2: { en: 'Need a website for your business?', tr: 'İşletmeniz için bir site mi lazım?' },
  intro: {
    en: 'I also build websites for small businesses: a restaurant, a clinic, a workshop, a shop. You deal with one person from the first conversation to the day it goes live, in Turkish or in English.',
    tr: 'Küçük işletmelere de site yapıyorum: bir restoran, bir klinik, bir atölye, bir dükkân. İlk konuşmadan sitenin yayına girdiği güne kadar karşınızda tek bir kişi var; Türkçe ya da İngilizce.',
  },
  cta: { en: 'Write to me', tr: 'Bana yazın' },
  subject: { en: 'A website for my business', tr: 'İşletmem için web sitesi' },
  checksH: { en: 'Five checks before I hand a site over', tr: 'Bir siteyi teslim etmeden önce beş kontrol' },
  checksIntro: {
    en: 'In weld inspection a part is not accepted because it looks right. These are the checks I run on every site before I call it finished. This page passes all five.',
    tr: 'Kaynak muayenesinde bir parça, iyi göründüğü için kabul edilmez. Her siteye bitti demeden önce yaptığım kontroller bunlar. Bu sayfa beşinden de geçiyor.',
  },
  self: {
    en: 'Rather set it up yourself? Rainbow Design, my site builder for small businesses, walks you through it in five steps.',
    tr: 'Kendiniz kurmayı mı tercih edersiniz? Küçük işletmeler için yaptığım site kurucu Rainbow Design, beş adımda yol gösteriyor.',
  },
} satisfies Record<string, L>;

export const HIRE_STEPS: { title: L; text: L }[] = [
  {
    title: { en: 'Tell me about the business', tr: 'İşinizi anlatın' },
    text: {
      en: 'What you sell, who comes to you, and what they should be able to do on the site: call, book, order or find the door.',
      tr: 'Ne sattığınızı, size kimlerin geldiğini ve sitede ne yapabilmeleri gerektiğini: aramak, randevu almak, sipariş vermek ya da kapıyı bulmak.',
    },
  },
  {
    title: { en: 'Try it before it goes live', tr: 'Yayından önce deneyin' },
    text: {
      en: 'I design and build it, then send you a working address to open on your own phone. Changes are made on the site itself, not on a picture of it.',
      tr: 'Tasarlayıp kuruyorum, sonra kendi telefonunuzda açabileceğiniz çalışan bir adres gönderiyorum. Değişiklikler sitenin resmi üzerinde değil, kendisinde yapılıyor.',
    },
  },
  {
    title: { en: 'On an address of your own', tr: 'Kendi adresinizde' },
    text: {
      en: 'It goes up on your own domain, and after launch I am an email away for changes.',
      tr: 'Site kendi alan adınızda yayına giriyor; yayından sonra değişiklikler için bir e-posta kadar uzaktayım.',
    },
  },
];

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
    accept: { en: 'WCAG AA or better, everywhere.', tr: 'Her yerde WCAG AA veya üstü.' },
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
  github: { en: 'GitHub', tr: 'GitHub' },
  linkedin: { en: 'LinkedIn', tr: 'LinkedIn' },
  source: { en: 'Source of this site', tr: 'Bu sitenin kaynak kodu' },
  set: { en: 'Set in Funnel Display, Funnel Sans and Martian Mono.', tr: 'Funnel Display, Funnel Sans ve Martian Mono ile dizildi.' },
  top: { en: 'Back to the top', tr: 'Başa dön' },
} satisfies Record<string, L>;

export const NOT_FOUND = {
  title: { en: 'Nothing is on stage here.', tr: 'Bu sahnede kimse yok.' },
  body: {
    en: 'The address may be mistyped, or the page was taken down in a later version of the site.',
    tr: 'Adres yanlış yazılmış olabilir ya da sayfa sitenin sonraki bir sürümünde kaldırılmış olabilir.',
  },
  home: { en: 'Go to the front page', tr: 'Ön sayfaya git' },
  requested: { en: 'Requested', tr: 'İstenen' },
} satisfies Record<string, L>;
