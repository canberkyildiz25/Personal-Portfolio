import type { L } from './site';

/* Single source for every project on the page. `id` is also the screenshot
   file name under /public/work. `started` is the month of the first commit
   in the project's repository; `rev` is B when the project was rebuilt or
   redesigned after its first version. */

export type Standing = 'product' | 'demo' | 'concept';

export interface Project {
  id: string;
  name: string;
  kind: L;
  standing: Standing;
  blurb: L;
  stack: string[];
  started: string;
  rev: 'A' | 'B';
  live: string;
  code?: string;
  feature?: {
    lede: L;
    detail: L;
    revision?: L;
  };
}

export const STANDING: Record<Standing, L> = {
  product: { en: 'Live product', tr: 'Yayındaki ürün' },
  demo: { en: 'Working demo', tr: 'Çalışan demo' },
  concept: { en: 'Concept project', tr: 'Konsept proje' },
};

const gh = (repo: string) => `https://github.com/canberkyildiz25/${repo}`;

export const PROJECTS: Project[] = [
  {
    id: 'rainbow',
    name: 'Rainbow Design',
    kind: { en: 'Website builder', tr: 'Site kurucu' },
    standing: 'product',
    blurb: {
      en: 'Site builder for small businesses: describe the business, publish on your own address.',
      tr: 'Küçük işletmeler için site kurucu: işini anlat, kendi adresinde yayınla.',
    },
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS 4'],
    started: '2026-08',
    rev: 'A',
    live: 'https://rainbowdesign.com.tr',
    feature: {
      lede: {
        en: 'A website builder for small businesses that have never had a site.',
        tr: 'Hiç sitesi olmamış küçük işletmeler için bir site kurucu.',
      },
      detail: {
        en: 'The owner describes the business in a few sentences and is walked through the rest in five steps. Every published site gets its own subdomain, so one Next.js app serves all customers behind a single wildcard domain. The data layer speaks PostgreSQL and falls back to an in-process database when none is configured, and payments sit behind a provider-neutral interface.',
        tr: 'İşletme sahibi işini birkaç cümleyle anlatıyor, gerisini beş adımda birlikte kuruyoruz. Yayınlanan her site kendi alt alan adını alıyor; tek bir Next.js uygulaması, tek bir joker alan adının arkasından bütün müşterilere hizmet veriyor. Veri katmanı PostgreSQL konuşuyor, veritabanı tanımlı değilse süreç içi bir veritabanına düşüyor; ödeme tarafı sağlayıcıdan bağımsız bir arayüzün arkasında duruyor.',
      },
    },
  },
  {
    id: 'spectra',
    name: 'Spectra CRM',
    kind: { en: 'Sales CRM', tr: 'Satış CRM’i' },
    standing: 'demo',
    blurb: {
      en: 'Full-stack CRM with a pipeline board, proposals, tasks and a dashboard.',
      tr: 'Satış hattı, teklifler, görevler ve gösterge paneli olan tam yığın CRM.',
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Node.js', 'Express', 'MongoDB'],
    started: '2026-05',
    rev: 'B',
    live: 'https://client-xi-three-50.vercel.app',
    code: gh('Spectra-CRM'),
    feature: {
      lede: {
        en: 'A sales CRM where every deal has a temperature.',
        tr: 'Her fırsatın bir sıcaklığı olduğu bir satış CRM’i.',
      },
      detail: {
        en: 'Built after years of running B2B sales cycles myself. A new lead is cold blue and a deal at the negotiating table is hot orange; that one scale runs through the pipeline board, the charts and the task list. Deals move between stages by drag, keyboard or touch, and proposals are built from line items and print to PDF. The Express and MongoDB API is deployed separately from the client.',
        tr: 'Yıllarca B2B satış döngüsünü kendim yürüttükten sonra yazdım. Yeni bir müşteri adayı soğuk mavi, pazarlık masasındaki fırsat sıcak turuncu; aynı ölçek satış hattında, grafiklerde ve görev listesinde kullanılıyor. Fırsatlar sürükleyerek, klavyeyle ya da dokunarak aşama değiştiriyor, teklifler kalemlerden kurulup PDF olarak basılıyor. Express ve MongoDB üzerindeki API istemciden ayrı yayınlanıyor.',
      },
      revision: {
        en: 'Rev B, September 2026: the frontend was rebuilt on Next.js 16 around the temperature scale.',
        tr: 'Rev B, Eylül 2026: arayüz, sıcaklık ölçeği etrafında Next.js 16 ile yeniden kuruldu.',
      },
    },
  },
  {
    id: 'mise',
    name: 'MISE',
    kind: { en: 'Recipe planner', tr: 'Tarif planlayıcı' },
    standing: 'concept',
    blurb: {
      en: 'Recipes written as prep tickets, with a schedule that runs backwards from dinner.',
      tr: 'Hazırlık fişi gibi yazılmış tarifler ve yemek saatinden geriye işleyen bir çizelge.',
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS 4', 'GSAP'],
    started: '2026-01',
    rev: 'B',
    live: 'https://mise-prep.vercel.app',
    code: gh('Tasty-Treats'),
    feature: {
      lede: {
        en: 'Recipes written as prep tickets, with a schedule that runs backwards.',
        tr: 'Hazırlık fişi gibi yazılmış tarifler ve geriye doğru işleyen bir çizelge.',
      },
      detail: {
        en: 'Say what time you want to eat and every step is handed a start time. The minutes that need you at the bench are marked apart from the ones you can walk away from, so a four-hour braise turns out to be an easy Tuesday and a thirty-minute pasta does not. Portions scale in quarter units and saved recipes stay in the browser.',
        tr: 'Kaçta yemek istediğini söylüyorsun, her adım kendi başlangıç saatini alıyor. Tezgâh başında durman gereken dakikalar, başından ayrılabileceklerinden ayrı işaretleniyor; dört saatlik bir fırın yemeği rahat bir salı akşamına dönüşüyor, otuz dakikalık makarna dönüşmüyor. Porsiyonlar çeyreklik birimlerle ölçekleniyor, kaydedilen tarifler tarayıcıda kalıyor.',
      },
      revision: {
        en: 'Rev B: began in January 2026 as a vanilla JavaScript assignment called Tasty Treats.',
        tr: 'Rev B: Ocak 2026’da Tasty Treats adlı sade JavaScript ödevi olarak başladı.',
      },
    },
  },
  {
    id: 'verdant',
    name: 'VERDANT',
    kind: { en: 'Online shop', tr: 'Çevrimiçi mağaza' },
    standing: 'concept',
    blurb: {
      en: 'Organic vegetable box shop where one seasonal calendar drives the catalogue.',
      tr: 'Kataloğu tek bir mevsim takviminin yönettiği organik sebze kutusu mağazası.',
    },
    stack: ['React 19', 'React Router 7', 'Zustand', 'Tailwind CSS 4', 'Vite'],
    started: '2025-11',
    rev: 'B',
    live: 'https://verdant-produce.netlify.app/',
    code: gh('verdant'),
    feature: {
      lede: {
        en: 'A vegetable box shop driven by one seasonal calendar.',
        tr: 'Tek bir mevsim takviminin yönettiği bir sebze kutusu mağazası.',
      },
      detail: {
        en: 'Every crop carries the months it is in the ground. The same data draws the twelve-month band, powers the season filter and stamps what is in season today. Around it sits a complete storefront: catalogue, product pages, a basket that survives a refresh and a checkout that issues an order reference.',
        tr: 'Her ürün, tarlada olduğu ayları taşıyor. Aynı veri on iki aylık şeridi çiziyor, mevsim filtresini besliyor ve bugün mevsiminde olanları damgalıyor. Çevresinde eksiksiz bir mağaza var: katalog, ürün sayfaları, sayfa yenilense de kaybolmayan sepet ve sipariş referansı üreten ödeme adımı.',
      },
      revision: {
        en: 'Rev B, July 2026: began in November 2025 as a course project called Green Harvest.',
        tr: 'Rev B, Temmuz 2026: Kasım 2025’te Green Harvest adlı kurs projesi olarak başladı.',
      },
    },
  },
  {
    id: 'aperture',
    name: 'APERTURE',
    kind: { en: 'Course enrolment site', tr: 'Kurs kayıt sitesi' },
    standing: 'concept',
    blurb: {
      en: 'Photography school with an exposure simulator drawn in CSS.',
      tr: 'CSS ile çizilmiş pozlama simülatörü olan bir fotoğraf okulu.',
    },
    stack: ['React 19', 'React Router 7', 'Zustand', 'Tailwind CSS 4', 'Vite'],
    started: '2025-09',
    rev: 'B',
    live: 'https://aperture-school.netlify.app/',
    code: gh('aperture'),
    feature: {
      lede: {
        en: 'A photography school with an exposure simulator drawn in CSS.',
        tr: 'Pozlama simülatörü CSS ile çizilmiş bir fotoğraf okulu.',
      },
      detail: {
        en: 'Aperture blurs the background, shutter speed smears the subject, ISO lifts the grain, and all three feed one exposure reading. The scene is drawn in CSS instead of a photograph, so the light responds to the controls. Around it is an enrolment flow: courses filtered by level and location, places held per start date, and a confirmation with a reference.',
        tr: 'Diyafram arka planı bulanıklaştırıyor, enstantane özneyi sürüklüyor, ISO greni yükseltiyor; üçü birden tek bir pozlama değerine bağlanıyor. Sahne fotoğraf değil, CSS ile çizildi; bu yüzden ışık ayarlara gerçekten tepki veriyor. Çevresinde bir kayıt akışı var: seviyeye ve mekâna göre filtrelenen kurslar, başlangıç tarihine göre tutulan kontenjan ve referans numaralı onay.',
      },
      revision: {
        en: 'Rev B, July 2026: began in September 2025 as Focus Frame, my first team project in HTML and CSS.',
        tr: 'Rev B, Temmuz 2026: Eylül 2025’te, HTML ve CSS ile yaptığım ilk ekip projesi Focus Frame olarak başladı.',
      },
    },
  },
  {
    id: 'forge',
    name: 'FORGE Athletic',
    kind: { en: 'Marketing site', tr: 'Tanıtım sitesi' },
    standing: 'concept',
    blurb: {
      en: 'Cinematic site for a performance gym: video hero and scroll-driven sequences.',
      tr: 'Bir performans salonu için sinematik site: video açılış ve kaydırmayla ilerleyen sahneler.',
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Framer Motion'],
    started: '2026-07',
    rev: 'A',
    live: 'https://forge-athletic.netlify.app',
    code: gh('forge'),
    feature: {
      lede: {
        en: 'A cinematic site for a London performance gym.',
        tr: 'Londra’daki bir performans salonu için sinematik bir site.',
      },
      detail: {
        en: 'A full-screen video hero, scroll-driven GSAP sequences and headlines that reveal word by word. The typefaces are self-hosted, and the page is laid out for a phone first. The gym is invented; the build is real.',
        tr: 'Tam ekran video açılış, kaydırmayla ilerleyen GSAP sahneleri ve kelime kelime beliren başlıklar. Yazı tipleri sitenin kendi sunucusundan geliyor, sayfa önce telefona göre kuruldu. Salon hayal ürünü, yapım gerçek.',
      },
    },
  },
  {
    id: 'infodaily',
    name: 'InfoDaily',
    kind: { en: 'Content site', tr: 'İçerik sitesi' },
    standing: 'product',
    blurb: {
      en: 'Technology and gaming guides on its own domain: getting more out of the hardware and software you already own.',
      tr: 'Kendi alan adında teknoloji ve oyun rehberleri: elindeki donanım ve yazılımdan daha fazlasını almak üzerine.',
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Markdown'],
    started: '2026-04',
    rev: 'B',
    live: 'https://www.infodaily.net',
    code: gh('info-daily'),
  },
  {
    id: 'fornace',
    name: 'Fornace',
    kind: { en: 'Restaurant site', tr: 'Restoran sitesi' },
    standing: 'concept',
    blurb: {
      en: 'Wood-fired pizzeria site with a menu and a reservation flow.',
      tr: 'Menüsü ve rezervasyon akışı olan odun fırınlı pizzacı sitesi.',
    },
    stack: ['Next.js 15', 'React 19'],
    started: '2026-06',
    rev: 'A',
    live: 'https://fornace-next.vercel.app/',
    code: gh('fornace-next'),
  },
  {
    id: 'apex',
    name: 'Apex Engineering',
    kind: { en: '3D showcase', tr: '3B vitrin' },
    standing: 'concept',
    blurb: {
      en: 'Engineering firm showcase with 3D parts you can rotate, modelled in code.',
      tr: 'Kodla modellenmiş, döndürülebilen 3B parçalarıyla mühendislik firması vitrini.',
    },
    stack: ['React 18', 'Three.js', 'React Three Fiber', 'Framer Motion'],
    started: '2026-05',
    rev: 'A',
    live: 'https://apex-engineering-two.vercel.app/',
    code: gh('apex-engineering'),
  },
  {
    id: 'pokeduel',
    name: 'PokéDuel',
    kind: { en: 'Card game', tr: 'Kart oyunu' },
    standing: 'concept',
    blurb: {
      en: 'Card duel game: pick a trainer, build a five-card deck, play type advantages.',
      tr: 'Kart düellosu: antrenör seç, beş kartlık deste kur, tip avantajlarını oyna.',
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Framer Motion'],
    started: '2026-04',
    rev: 'A',
    live: 'https://pokedueltr.netlify.app/',
    code: gh('PokeDuel'),
  },
  {
    id: 'mystic',
    name: 'Mystic',
    kind: { en: 'Web app', tr: 'Web uygulaması' },
    standing: 'concept',
    blurb: {
      en: 'Dream, coffee-cup and tarot readings behind Firebase sign-in.',
      tr: 'Firebase girişi arkasında rüya, kahve ve tarot yorumları.',
    },
    stack: ['React 19', 'TypeScript', 'Firebase', 'Tailwind CSS 4', 'Framer Motion'],
    started: '2026-05',
    rev: 'A',
    live: 'https://mystic-app-gules.vercel.app/',
  },
  {
    id: 'epharmacy',
    name: 'E-Pharmacy',
    kind: { en: 'Marketplace', tr: 'Pazar yeri' },
    standing: 'demo',
    blurb: {
      en: 'Pharmacy marketplace with location search and a dashboard for owners.',
      tr: 'Konuma göre arama ve eczacı paneli olan eczane pazar yeri.',
    },
    stack: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    started: '2026-03',
    rev: 'A',
    live: 'https://e-pharmacy-1.onrender.com/',
    code: gh('E-Pharmacy'),
  },
  {
    id: 'petlove',
    name: 'PetLove',
    kind: { en: 'Listings platform', tr: 'İlan platformu' },
    standing: 'demo',
    blurb: {
      en: 'Pet adoption listings with lost-and-found notices and care guides.',
      tr: 'Kayıp ve bulunan ilanları, bakım rehberleri olan sahiplendirme platformu.',
    },
    stack: ['React 19', 'React Router 7', 'Node.js', 'Express 5', 'MongoDB'],
    started: '2026-03',
    rev: 'A',
    live: 'https://pet-love-1.onrender.com/',
    code: gh('Pet-Love'),
  },
  {
    id: 'psychologist',
    name: 'Psychologist Services',
    kind: { en: 'Directory', tr: 'Rehber' },
    standing: 'demo',
    blurb: {
      en: 'Psychologist directory with sorting, favourites and appointment requests.',
      tr: 'Sıralama, favoriler ve randevu talebi olan psikolog rehberi.',
    },
    stack: ['React 19', 'Firebase', 'React Hook Form', 'Vite'],
    started: '2026-03',
    rev: 'A',
    live: 'https://resilient-salmiakki-c08a67.netlify.app/',
    code: gh('Psychologist-Services'),
  },
  {
    id: 'purrpedia',
    name: 'Purr Pedia',
    kind: { en: 'Reference app', tr: 'Başvuru uygulaması' },
    standing: 'concept',
    blurb: {
      en: 'Cat breed encyclopedia with search, side-by-side comparison and a quiz. Installable.',
      tr: 'Arama, yan yana karşılaştırma ve test içeren kedi ırkları ansiklopedisi. Kurulabilir.',
    },
    stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'PWA'],
    started: '2026-03',
    rev: 'A',
    live: 'https://purr-pedia.vercel.app/',
    code: gh('Purr-Pedia'),
  },
  {
    id: 'moneyguard',
    name: 'Money Guard',
    kind: { en: 'Personal ledger', tr: 'Kişisel hesap defteri' },
    standing: 'demo',
    blurb: {
      en: 'Income and expenses kept as rows in a ledger, with category totals and a demo that needs no account.',
      tr: 'Gelir ve giderlerin satır satır tutulduğu bir hesap defteri; kategori toplamları ve hesap gerektirmeyen demo.',
    },
    stack: ['React 19', 'Redux Toolkit', 'React Router 7', 'Chart.js'],
    started: '2026-02',
    rev: 'B',
    live: 'https://money-guard-pi.vercel.app/',
    code: gh('Money-Guard'),
  },
  {
    id: 'overland',
    name: 'OVERLAND',
    kind: { en: 'Rental site', tr: 'Kiralama sitesi' },
    standing: 'concept',
    blurb: {
      en: 'Campervan hire with fleet filters, favourites and a booking flow.',
      tr: 'Filo filtreleri, favoriler ve rezervasyon akışı olan karavan kiralama.',
    },
    stack: ['React 19', 'Redux Toolkit', 'React Router 7', 'Vite'],
    started: '2026-02',
    rev: 'B',
    live: 'https://overland-vans.vercel.app',
    code: gh('overland'),
  },
  {
    id: 'bookshelf',
    name: 'SHELFMARK',
    kind: { en: 'Bestseller archive', tr: 'Çok satanlar arşivi' },
    standing: 'concept',
    blurb: {
      en: 'A rack of bestsellers where each spine is as thick as the weeks the book stayed on its list.',
      tr: 'Her sırtın, kitabın listede kaldığı hafta kadar kalın olduğu bir çok satanlar rafı.',
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Zustand'],
    started: '2026-01',
    rev: 'B',
    live: 'https://book-shelf-brown.vercel.app/',
    code: gh('Book-Shelf'),
  },
  {
    id: 'filmhub',
    name: 'FILMHUB',
    kind: { en: 'Film discovery', tr: 'Film keşfi' },
    standing: 'concept',
    blurb: {
      en: 'Film discovery on TMDB data with in-page trailers and a watchlist.',
      tr: 'TMDB verisiyle film keşfi; sayfa içinde fragman ve izleme listesi.',
    },
    stack: ['React 19', 'TypeScript', 'Zustand', 'Tailwind CSS 4'],
    started: '2025-12',
    rev: 'B',
    live: 'https://filmhub-tr.netlify.app/',
    code: gh('Cinemania'),
  },
];

export const FEATURED = PROJECTS.filter((p) => p.feature);
