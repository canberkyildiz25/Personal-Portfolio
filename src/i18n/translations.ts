export type Lang = 'tr' | 'en' | 'ru' | 'it' | 'es' | 'de' | 'fr';

export const langNames: Record<Lang, string> = {
  tr: 'Türkçe',
  en: 'English',
  ru: 'Русский',
  it: 'Italiano',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
};

export const translations = {
  en: {
    nav_about: 'About',
    nav_stack: 'Stack',
    nav_projects: 'Projects',
    nav_contact: 'Contact Me',
    hero_badge: 'Available for new opportunities',
    hero_h1_1: 'Engineering ',
    hero_h1_2: 'digital',
    hero_h1_3: ' experiences ',
    hero_h1_4: 'end-to-end.',
    hero_desc:
      'I build robust, scalable, and intuitive web applications by bridging the gap between pixel-perfect interfaces and complex backend architectures.',
    hero_cta_projects: 'View Projects',
    hero_cta_github: 'GitHub Profile',
    stack_title: 'Technical Arsenal',
    stack_desc:
      'A comprehensive suite of tools and technologies to deliver complete solutions from database design to client-side interactivity.',
    projects_title: 'Selected Work',
    projects_show_less: 'Show less',
    projects_view_all: 'View all',
    project_traveltrucks:
      'Camper and motorhome rental app. Includes filtering by location, equipment and vehicle type, favorites, and a booking form.',
    project_cinemania:
      'Movie discovery and personal library app. Lists upcoming films with detailed info, ratings, and genre-based browsing.',
    project_bookshelf:
      'Personal book library app. Allows adding books, tracking reading status, and managing your collection.',
    project_tastytreats:
      'Recipe discovery app. Features recipe search by category, ingredient lists, and step-by-step preparation instructions.',
    project_moneyguard:
      'Personal finance tracker. Offers income and expense management, category-based spending analysis, and visual reports.',
    project_focusframe:
      'Photography studio showcase site. A modern landing page featuring services, a portfolio gallery, and a contact form.',
    project_greenharvest:
      'Organic farm products e-commerce site. Features product listing, category filtering, and a shopping cart.',
    project_epharmacy:
      'Digital pharmacy platform connecting customers with pharmacies. Features location-based pharmacy discovery, order management, and analytics dashboard for pharmacy owners.',
    project_purr_pedia:
      'Cat encyclopedia featuring 60+ breeds with detailed characteristics, temperament scores, and images. Real-time search and smart filtering by energy level, coat length, and child compatibility. Compare up to 3 breeds side-by-side, interactive quiz to find your perfect cat match, and comprehensive care guide. PWA support for mobile app experience. Bilingual: Turkish and English.',
    project_pokeduel:
      'Interactive Pokémon TCG dueling game. Select trainers, build 5-card decks, choose dynamic arenas, and battle using type advantages and real stats. Features Framer Motion animations, sound effects, and responsive mobile design.',
    project_psychologist:
      'Psychologist services platform with animated hero, searchable psychologist directory with sorting by name, price, and popularity. Features private favorites page, Firebase authentication, and appointment booking with React Hook Form validation. Fully responsive design.',
    project_petlove:
      'Full-stack pet adoption and listing platform. Browse adoptable pets, report lost/found animals, read pet care guides, and discover nearby shelters and partner organizations.',
    contact_badge: 'Open to opportunities',
    contact_title: "Let's build together.",
    contact_desc:
      "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.",
    contact_email: 'Send an Email',
    footer_rights: '© 2026 FSD. All rights reserved.',
  },
  tr: {
    nav_about: 'Hakkımda',
    nav_stack: 'Stack',
    nav_projects: 'Projeler',
    nav_contact: 'İletişim',
    hero_badge: 'Yeni fırsatlara açığım',
    hero_h1_1: 'Uçtan uca ',
    hero_h1_2: 'dijital',
    hero_h1_3: ' deneyimler ',
    hero_h1_4: 'inşa ediyorum.',
    hero_desc:
      'Piksel mükemmeliyetindeki arayüzler ile karmaşık backend mimarileri arasındaki köprüyü kurarak sağlam, ölçeklenebilir ve sezgisel web uygulamaları geliştiriyorum.',
    hero_cta_projects: 'Projeleri Gör',
    hero_cta_github: 'GitHub Profilim',
    stack_title: 'Teknik Araç Setim',
    stack_desc:
      'Veritabanı tasarımından istemci tarafı etkileşimine kadar eksiksiz çözümler sunan kapsamlı araç ve teknoloji paketi.',
    projects_title: 'Seçili Çalışmalar',
    projects_show_less: 'Daha az göster',
    projects_view_all: 'Tümünü gör',
    project_traveltrucks:
      'Karavan ve campervan kiralama uygulaması. Lokasyon, ekipman ve araç tipine göre filtreleme, favorilere ekleme ve rezervasyon formu içerir.',
    project_cinemania:
      'Film keşif ve kişisel kütüphane uygulaması. Yaklaşan filmleri listeler, detaylı bilgi, puan ve türlere göre inceleme imkânı sunar.',
    project_bookshelf:
      'Kişisel kitap kütüphanesi uygulaması. Kitap ekleme, okuma durumu takibi ve koleksiyon yönetimi imkânı sunar.',
    project_tastytreats:
      'Tarif keşif uygulaması. Kategorilere göre yemek tarifi arama, malzeme listesi ve hazırlanış adımlarını sunar.',
    project_moneyguard:
      'Kişisel finans takip uygulaması. Gelir ve gider yönetimi, kategori bazlı harcama analizi ve görsel raporlar sunar.',
    project_focusframe:
      'Fotoğrafçılık stüdyosu tanıtım sitesi. Hizmetler, portföy galerisi ve iletişim formu içeren modern bir landing page.',
    project_greenharvest:
      'Organik tarım ürünleri e-ticaret sitesi. Ürün listeleme, kategori filtreleme ve alışveriş sepeti özelliklerini sunar.',
    project_epharmacy:
      'Müşterileri eczanelerle buluşturan dijital eczane platformu. Lokasyona göre yakın eczane keşfi, sipariş yönetimi ve eczane sahipleri için analitik paneli sunar.',
    project_purr_pedia:
      'Kedi ırkları ansiklopedisi. 60+ kedi ırkı, detaylı özellikler, mizaç skorları ve görseller. Anlık arama ve akıllı filtreleme (enerji seviyesi, tüy uzunluğu, çocuklarla uyum). En fazla 3 ırkı yan yana karşılaştır, hangi kedi sana uygun bulun (interaktif quiz) ve kedi bakım rehberi. PWA desteği ile mobilde uygulama gibi kullan. Türkçe ve İngilizce.',
    project_pokeduel:
      'İnteraktif Pokémon TCG düello oyunu. Antrenör seç, 5 kartlık deste oluştur, dinamik arena seç ve tip avantajları ile gerçek istatistikleri kullanarak savaş. Framer Motion animasyonları, ses efektleri ve responsive mobil tasarım.',
    project_psychologist:
      'Psikolog hizmetleri platformu. Animasyonlu hero bölümü, aranabilir psikolog dizini (ad, fiyat ve popülarite göre sıralanabilir). Özel favoriler sayfası, Firebase kimlik doğrulaması ve React Hook Form doğrulamalı randevu takılı. Tam responsive tasarım.',
    project_petlove:
      'Evcil hayvan sahiplenme ve listeleme platformu. Sahiplenilecek hayvanları keşfet, kayıp/bulunmuş hayvanları bildir, hayvan bakım rehberleri oku ve yakındaki barınakları keşfet.',
    contact_badge: 'Fırsatlara açığım',
    contact_title: 'Birlikte inşa edelim.',
    contact_desc:
      'Yeni fırsatlara açığım. Bir sorunuz olsun ya da sadece merhaba demek isteyin, en kısa sürede geri dönmeye çalışacağım.',
    contact_email: 'E-posta Gönder',
    footer_rights: '© 2026 FSD. Tüm hakları saklıdır.',
  },
  ru: {
    nav_about: 'Обо мне',
    nav_stack: 'Стек',
    nav_projects: 'Проекты',
    nav_contact: 'Связаться',
    hero_badge: 'Открыт для новых возможностей',
    hero_h1_1: 'Создаю ',
    hero_h1_2: 'цифровые',
    hero_h1_3: ' решения ',
    hero_h1_4: 'от и до.',
    hero_desc:
      'Разрабатываю надёжные, масштабируемые и интуитивные веб-приложения, соединяя пиксельно-точные интерфейсы со сложными бэкенд-архитектурами.',
    hero_cta_projects: 'Смотреть проекты',
    hero_cta_github: 'Профиль GitHub',
    stack_title: 'Технический арсенал',
    stack_desc:
      'Комплексный набор инструментов и технологий для создания полных решений — от проектирования баз данных до клиентской интерактивности.',
    projects_title: 'Избранные работы',
    projects_show_less: 'Свернуть',
    projects_view_all: 'Смотреть все',
    project_traveltrucks:
      'Приложение для аренды кемперов и автодомов. Включает фильтрацию по локации, оборудованию и типу транспорта, избранное и форму бронирования.',
    project_cinemania:
      'Приложение для поиска фильмов и личной библиотеки. Список предстоящих фильмов с подробной информацией, оценками и фильтрацией по жанрам.',
    project_bookshelf:
      'Личная книжная библиотека. Позволяет добавлять книги, отслеживать статус чтения и управлять коллекцией.',
    project_tastytreats:
      'Приложение для поиска рецептов. Поиск по категориям, список ингредиентов и пошаговые инструкции приготовления.',
    project_moneyguard:
      'Персональный финансовый трекер. Управление доходами и расходами, анализ трат по категориям и визуальные отчёты.',
    project_focusframe:
      'Сайт-визитка фотостудии. Современный лендинг с описанием услуг, портфолио и формой обратной связи.',
    project_greenharvest:
      'Интернет-магазин органических продуктов. Листинг товаров, фильтрация по категориям и корзина покупок.',
    project_epharmacy:
      'Цифровая платформа фармацевтических услуг, соединяющая клиентов с аптеками. Поиск аптек по геолокации, управление заказами и аналитическая панель для владельцев аптек.',
    project_purr_pedia:
      'Энциклопедия кошачьих пород с 60+ породами. Подробные характеристики, оценки характера и изображения. Поиск в реальном времени и умная фильтрация по энергичности, длине шерсти и совместимости с детьми. Сравнение до 3 пород рядом, интерактивная викторина для поиска идеальной кошки, полное руководство по уходу. Поддержка PWA для мобильного приложения. Двуязычный: турецкий и английский.',
    project_pokeduel:
      'Интерактивная карточная игра-дуэль в стиле Pokémon TCG. Выбирайте тренеров, создавайте колоды из 5 карт, выбирайте арены и сражайтесь с учётом типовых преимуществ и реальных характеристик. Анимации Framer Motion, звуковые эффекты и адаптивный дизайн.',
    project_psychologist:
      'Платформа психологических услуг с анимированным героем, поисковым каталогом психологов с сортировкой по имени, цене и популярности. Приватная страница избранного, аутентификация Firebase и форма записи на прием с валидацией React Hook Form. Полностью адаптивный дизайн.',
    project_petlove:
      'Полнофункциональная платформа для усыновления и размещения объявлений о домашних животных. Просмотр животных для усыновления, сообщение о потерянных/найденных животных, чтение руководств по уходу и поиск приютов.',
    contact_badge: 'Открыт для предложений',
    contact_title: 'Давайте создадим вместе.',
    contact_desc:
      'Открыт для новых возможностей. Есть вопрос или просто хотите поздороваться — постараюсь ответить как можно скорее.',
    contact_email: 'Написать письмо',
    footer_rights: '© 2026 FSD. Все права защищены.',
  },
  it: {
    nav_about: 'Chi sono',
    nav_stack: 'Stack',
    nav_projects: 'Progetti',
    nav_contact: 'Contattami',
    hero_badge: 'Disponibile per nuove opportunità',
    hero_h1_1: 'Costruisco ',
    hero_h1_2: 'esperienze',
    hero_h1_3: ' digitali ',
    hero_h1_4: 'end-to-end.',
    hero_desc:
      'Sviluppo applicazioni web robuste, scalabili e intuitive colmando il divario tra interfacce pixel-perfect e architetture backend complesse.',
    hero_cta_projects: 'Vedi Progetti',
    hero_cta_github: 'Profilo GitHub',
    stack_title: 'Arsenale Tecnico',
    stack_desc:
      "Una suite completa di strumenti e tecnologie per soluzioni complete, dal design del database all'interattività lato client.",
    projects_title: 'Lavori Selezionati',
    projects_show_less: 'Mostra meno',
    projects_view_all: 'Vedi tutti',
    project_traveltrucks:
      'App per il noleggio di camper e autocaravan. Include filtri per posizione, attrezzatura e tipo di veicolo, preferiti e modulo di prenotazione.',
    project_cinemania:
      'App per la scoperta di film e libreria personale. Elenca i film in uscita con informazioni dettagliate, valutazioni e navigazione per genere.',
    project_bookshelf:
      'Libreria personale di libri. Permette di aggiungere libri, tracciare lo stato di lettura e gestire la collezione.',
    project_tastytreats:
      'App per la scoperta di ricette. Ricerca per categoria, lista degli ingredienti e istruzioni passo passo.',
    project_moneyguard:
      'Tracker finanziario personale. Gestione entrate e uscite, analisi spese per categoria e report visivi.',
    project_focusframe:
      'Sito vetrina per studio fotografico. Una landing page moderna con servizi, galleria portfolio e modulo di contatto.',
    project_greenharvest:
      "E-commerce di prodotti agricoli biologici. Listino prodotti, filtro per categoria e carrello della spesa.",
    project_epharmacy:
      'Piattaforma farmaceutica digitale che connette clienti con farmacie. Include ricerca di farmacie per posizione, gestione ordini e pannello analitico per proprietari.',
    project_purr_pedia:
      'Enciclopedia felina con 60+ razze di gatti. Caratteristiche dettagliate, punteggi di temperamento e immagini. Ricerca in tempo reale e filtri intelligenti per livello energetico, lunghezza del mantello e compatibilità con bambini. Confronta fino a 3 razze affiancate, quiz interattivo per trovare il gatto perfetto per te e guida completa alla cura. Supporto PWA per esperienza da app mobile. Bilingue: turco e inglese.',
    project_pokeduel:
      'Gioco di duello interattivo ispirato al Pokémon TCG. Seleziona allenatori, costruisci mazzi da 5 carte, scegli arene dinamiche e combatti usando vantaggi di tipo e statistiche reali. Animazioni Framer Motion, effetti sonori e design mobile responsive.',
    project_psychologist:
      'Piattaforma di servizi psicologici con hero animato, directory di psicologi ricercabili con ordinamento per nome, prezzo e popolarità. Pagina preferiti privata, autenticazione Firebase e modulo prenotazione appuntamenti con validazione React Hook Form. Design completamente responsivo.',
    project_petlove:
      'Piattaforma full-stack di adozione e annunci di animali domestici. Sfoglia animali disponibili per l\'adozione, segnala animali persi/trovati, leggi guide sulla cura degli animali e scopri rifugi e organizzazioni partner.',
    contact_badge: 'Aperto a opportunità',
    contact_title: 'Costruiamo insieme.',
    contact_desc:
      'Attualmente aperto a nuove opportunità. Che tu abbia una domanda o voglia semplicemente salutare, farò del mio meglio per risponderti.',
    contact_email: 'Invia una Email',
    footer_rights: '© 2026 FSD. Tutti i diritti riservati.',
  },
  es: {
    nav_about: 'Sobre mí',
    nav_stack: 'Stack',
    nav_projects: 'Proyectos',
    nav_contact: 'Contáctame',
    hero_badge: 'Disponible para nuevas oportunidades',
    hero_h1_1: 'Construyo ',
    hero_h1_2: 'experiencias',
    hero_h1_3: ' digitales ',
    hero_h1_4: 'de punta a punta.',
    hero_desc:
      'Desarrollo aplicaciones web robustas, escalables e intuitivas uniendo interfaces pixel-perfect con arquitecturas backend complejas.',
    hero_cta_projects: 'Ver Proyectos',
    hero_cta_github: 'Perfil de GitHub',
    stack_title: 'Arsenal Técnico',
    stack_desc:
      'Una suite completa de herramientas y tecnologías para entregar soluciones completas desde el diseño de bases de datos hasta la interactividad del lado del cliente.',
    projects_title: 'Trabajos Seleccionados',
    projects_show_less: 'Mostrar menos',
    projects_view_all: 'Ver todos',
    project_traveltrucks:
      'App de alquiler de caravanas y autocaravanas. Incluye filtros por ubicación, equipamiento y tipo de vehículo, favoritos y formulario de reserva.',
    project_cinemania:
      'App de descubrimiento de películas y biblioteca personal. Lista los próximos estrenos con información detallada, puntuaciones y navegación por género.',
    project_bookshelf:
      'Biblioteca personal de libros. Permite añadir libros, rastrear el estado de lectura y gestionar tu colección.',
    project_tastytreats:
      'App de descubrimiento de recetas. Búsqueda por categoría, lista de ingredientes e instrucciones paso a paso.',
    project_moneyguard:
      'Rastreador de finanzas personales. Gestión de ingresos y gastos, análisis de gastos por categoría e informes visuales.',
    project_focusframe:
      'Sitio de presentación de estudio fotográfico. Una landing page moderna con servicios, galería de portafolio y formulario de contacto.',
    project_greenharvest:
      'Tienda online de productos agrícolas ecológicos. Listado de productos, filtro por categoría y carrito de compras.',
    project_epharmacy:
      'Plataforma farmacéutica digital que conecta clientes con farmacias. Incluye búsqueda de farmacias por ubicación, gestión de pedidos y panel analítico para propietarios.',
    project_purr_pedia:
      'Enciclopedia felina con 60+ razas de gatos. Características detalladas, puntuaciones de temperamento e imágenes. Búsqueda en tiempo real y filtrado inteligente por nivel de energía, longitud de pelaje y compatibilidad con niños. Compara hasta 3 razas lado a lado, cuestionario interactivo para encontrar tu gato perfecto y guía completa de cuidado. Soporte PWA para experiencia de app móvil. Bilingüe: turco e inglés.',
    project_pokeduel:
      'Juego interactivo de duelos basado en el Pokémon TCG. Selecciona entrenadores, construye mazos de 5 cartas, elige arenas dinámicas y batalla usando ventajas de tipo y estadísticas reales. Animaciones Framer Motion, efectos de sonido y diseño mobile responsive.',
    project_psychologist:
      'Plataforma de servicios psicológicos con hero animado, directorio de psicólogos buscable con clasificación por nombre, precio y popularidad. Página de favoritos privada, autenticación Firebase y formulario de cita con validación React Hook Form. Diseño completamente responsive.',
    project_petlove:
      'Plataforma full-stack de adopción y anuncios de mascotas. Explora mascotas disponibles para adopción, reporta animales perdidos/encontrados, lee guías de cuidado de mascotas y descubre refugios cercanos.',
    contact_badge: 'Abierto a oportunidades',
    contact_title: 'Construyamos juntos.',
    contact_desc:
      'Actualmente abierto a nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, haré todo lo posible para responderte.',
    contact_email: 'Enviar un Email',
    footer_rights: '© 2026 FSD. Todos los derechos reservados.',
  },
  de: {
    nav_about: 'Über mich',
    nav_stack: 'Stack',
    nav_projects: 'Projekte',
    nav_contact: 'Kontakt',
    hero_badge: 'Offen für neue Möglichkeiten',
    hero_h1_1: 'Digitale ',
    hero_h1_2: 'Erlebnisse',
    hero_h1_3: ' von Anfang ',
    hero_h1_4: 'bis Ende.',
    hero_desc:
      'Ich entwickle robuste, skalierbare und intuitive Webanwendungen, indem ich pixelgenaue Interfaces mit komplexen Backend-Architekturen verbinde.',
    hero_cta_projects: 'Projekte ansehen',
    hero_cta_github: 'GitHub-Profil',
    stack_title: 'Technisches Arsenal',
    stack_desc:
      'Eine umfassende Suite von Tools und Technologien für vollständige Lösungen — vom Datenbankdesign bis zur clientseitigen Interaktivität.',
    projects_title: 'Ausgewählte Arbeiten',
    projects_show_less: 'Weniger anzeigen',
    projects_view_all: 'Alle anzeigen',
    project_traveltrucks:
      'App zur Vermietung von Campern und Wohnmobilen. Mit Filterung nach Standort, Ausstattung und Fahrzeugtyp, Favoriten und Buchungsformular.',
    project_cinemania:
      'Film-Entdeckungs- und persönliche Bibliotheks-App. Listet kommende Filme mit detaillierten Infos, Bewertungen und Genre-Filterung auf.',
    project_bookshelf:
      'Persönliche Bücherbibliothek. Ermöglicht das Hinzufügen von Büchern, die Verfolgung des Lesestatus und die Verwaltung der Sammlung.',
    project_tastytreats:
      'Rezept-Entdeckungs-App. Rezeptsuche nach Kategorie, Zutatenlisten und schrittweise Zubereitungsanweisungen.',
    project_moneyguard:
      'Persönlicher Finanz-Tracker. Einnahmen- und Ausgabenverwaltung, kategoriebasierte Ausgabenanalyse und visuelle Berichte.',
    project_focusframe:
      'Präsentationsseite für ein Fotostudio. Eine moderne Landing Page mit Leistungen, Portfolio-Galerie und Kontaktformular.',
    project_greenharvest:
      'E-Commerce-Site für Bio-Landwirtschaftsprodukte. Produktlisting, Kategoriefilterung und Warenkorb.',
    project_epharmacy:
      'Digitale Apothekenplattform, die Kunden mit Apotheken verbindet. Standortbasierte Apothekensuche, Bestellverwaltung und Analyse-Dashboard für Apothekeninhaber.',
    project_purr_pedia:
      'Katzenenzyklopädie mit 60+ Katzenrassen. Detaillierte Charakteristiken, Temperaturwerte und Bilder. Echtzeitsucse und intelligente Filter nach Energielevel, Fellänge und Kindergerech. Vergleiche bis zu 3 Rassen nebeneinander, interaktives Quiz zur Findung deiner perfekten Katze und umfassender Pflegeleitfaden. PWA-Unterstützung für Mobile-App-Erlebnis. Zweisprachig: Türkisch und Englisch.',
    project_pokeduel:
      'Interaktives Pokémon-TCG-Duellspiel. Wähle Trainer, erstelle 5-Karten-Decks, wähle dynamische Arenen und kämpfe mit Typvorteilen und echten Statistiken. Framer-Motion-Animationen, Soundeffekte und responsives Mobile-Design.',
    project_psychologist:
      'Plattform für psychologische Dienstleistungen mit animiertem Hero, durchsuchbarem Psychologenverzeichnis mit Sortierung nach Name, Preis und Beliebtheit. Private Favoritenseite, Firebase-Authentifizierung und Terminbuchungsformular mit React Hook Form-Validierung. Vollständig responsives Design.',
    project_petlove:
      'Vollständige Plattform für Haustieradoption und Inserate. Durchsuchen Sie verfügbare Haustiere zur Adoption, melden Sie verlorene/gefundene Tiere, lesen Sie Pflegeleitfäden und entdecken Sie Tierheime in der Nähe.',
    contact_badge: 'Offen für Angebote',
    contact_title: 'Lass uns gemeinsam bauen.',
    contact_desc:
      'Derzeit offen für neue Möglichkeiten. Egal ob du eine Frage hast oder einfach Hallo sagen möchtest — ich versuche so schnell wie möglich zu antworten.',
    contact_email: 'E-Mail senden',
    footer_rights: '© 2026 FSD. Alle Rechte vorbehalten.',
  },
  fr: {
    nav_about: 'À propos',
    nav_stack: 'Stack',
    nav_projects: 'Projets',
    nav_contact: 'Me contacter',
    hero_badge: 'Disponible pour de nouvelles opportunités',
    hero_h1_1: 'Je construis des ',
    hero_h1_2: 'expériences',
    hero_h1_3: ' numériques ',
    hero_h1_4: 'de bout en bout.',
    hero_desc:
      "Je développe des applications web robustes, évolutives et intuitives en faisant le lien entre des interfaces pixel-perfect et des architectures backend complexes.",
    hero_cta_projects: 'Voir les Projets',
    hero_cta_github: 'Profil GitHub',
    stack_title: 'Arsenal Technique',
    stack_desc:
      "Une suite complète d'outils et de technologies pour livrer des solutions complètes, de la conception de bases de données à l'interactivité côté client.",
    projects_title: 'Travaux Sélectionnés',
    projects_show_less: 'Afficher moins',
    projects_view_all: 'Voir tout',
    project_traveltrucks:
      "Application de location de camping-cars et caravanes. Inclut des filtres par localisation, équipement et type de véhicule, des favoris et un formulaire de réservation.",
    project_cinemania:
      "Application de découverte de films et bibliothèque personnelle. Liste les films à venir avec des infos détaillées, des notes et une navigation par genre.",
    project_bookshelf:
      "Bibliothèque personnelle de livres. Permet d'ajouter des livres, de suivre le statut de lecture et de gérer sa collection.",
    project_tastytreats:
      "Application de découverte de recettes. Recherche par catégorie, liste d'ingrédients et instructions étape par étape.",
    project_moneyguard:
      "Gestionnaire de finances personnelles. Gestion des revenus et dépenses, analyse des dépenses par catégorie et rapports visuels.",
    project_focusframe:
      "Site vitrine pour studio photographique. Une landing page moderne avec services, galerie portfolio et formulaire de contact.",
    project_greenharvest:
      "Site e-commerce de produits agricoles biologiques. Listing de produits, filtrage par catégorie et panier d'achats.",
    project_epharmacy:
      'Plateforme pharmaceutique numérique connectant clients et pharmacies. Recherche de pharmacies par localisation, gestion des commandes et tableau de bord analytique pour propriétaires.',
    project_purr_pedia:
      'Encyclopédie féline avec 60+ races de chats. Caractéristiques détaillées, scores de tempérament et images. Recherche en temps réel et filtrage intelligent par niveau d\'énergie, longueur du pelage et compatibilité avec les enfants. Comparez jusqu\'à 3 races côte à côte, quiz interactif pour trouver votre chat parfait et guide complet de soins. Support PWA pour l\'expérience d\'une application mobile. Bilingue : turc et anglais.',
    project_pokeduel:
      'Jeu de duel interactif inspiré du Pokémon TCG. Sélectionnez des dresseurs, construisez des decks de 5 cartes, choisissez des arènes dynamiques et combattez en utilisant les avantages de type et les statistiques réelles. Animations Framer Motion, effets sonores et design mobile responsive.',
    project_psychologist:
      'Plateforme de services psychologiques avec hero animé, répertoire consultable de psychologues avec tri par nom, prix et popularité. Page des favoris privée, authentification Firebase et formulaire de prise de rendez-vous avec validation React Hook Form. Design entièrement réactif.',
    project_petlove:
      'Plateforme complète d\'adoption et d\'annonces d\'animaux de compagnie. Explorez les animaux disponibles à l\'adoption, signalez les animaux perdus/trouvés, lisez des guides de soins et découvrez les refuges à proximité.',
    contact_badge: 'Ouvert aux opportunités',
    contact_title: 'Construisons ensemble.',
    contact_desc:
      "Actuellement ouvert aux nouvelles opportunités. Que vous ayez une question ou souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre.",
    contact_email: 'Envoyer un Email',
    footer_rights: '© 2026 FSD. Tous droits réservés.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
