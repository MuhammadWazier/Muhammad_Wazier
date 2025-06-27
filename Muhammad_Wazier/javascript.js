// Language data storage 

const languageData = {
    en: {
        nav: {
            home: "Home",
            about: "About Me",
            services: "My Services",
            portfolio: "My Work",
            testimonials: "Client Testimonials",
            contact: "Contact Me",
        },
        hero: {
            title: "Muhammad Wazier",
            subtitle: "Software Engineer | Designer | Tutor",
            quote: "Transforming ideas into elegant solutions through coding and design.",
            cta: "View My Work",
        },
        about: {
            title: "About Me",
            bio: "I am a passionate software engineer and designer with over 5 years of experience in creating digital solutions. My expertise includes software development, web and graphic design. I also enjoy sharing my knowledge through private tutoring in various technical subjects.",
            skills: [
                "Frontend development",
                "UI/UX design",
                "Responsive website design",
                "Desktop applications",
                "Graphic design",
                "Teaching and mentoring",
            ],
        },
        services: {
            title: "My Services",
            items: [
                {
                    icon: "laptop-code",
                    title: "Desktop Software Development",
                    description: "Custom applications that meet your business needs.",
                },
                {
                    icon: "globe",
                    title: "Website Design & Development",
                    description: "Modern websites that work on all devices.",
                },
                {
                    icon: "id-card",
                    title: "Business Card Design",
                    description: "Professional business cards that leave a great impression.",
                },
                {
                    icon: "book-open",
                    title: "Book & Magazine Cover Designs",
                    description: "Attractive designs for your publications.",
                },
                {
                    icon: "file-alt",
                    title: "Resume Design",
                    description: "Stand out with a professionally designed CV.",
                },
                {
                    icon: "chalkboard-teacher",
                    title: "Private Tutoring",
                    description: "One-on-one lessons in Math, English, Programming, and Computer Basics.",
                },
            ],
        },
        portfolio: {
            title: "My Work",
            viewDetails: "View Details",
            categories: ["All", "Software", "Websites", "Designs", "Teaching"],
            items: [
                {
                    title: "Gym Management System",
                    category: "Software",
                    description: "A desktop application for managing registrations and subscriptions.",
                    promo: "Streamline gym operations and member tracking with ease.",
                    image: "assets/images/gymSystem.jpg",
                    features: [
                        "Member registration and subscription tracking",
                        "Integrated payment history",
                        "Subscription expiration alerts",
                        "Clean and intuitive UI",
                    ],
                },
                {
                    title: "Personal Website",
                    category: "Websites",
                    description: "A website for sports coaching and nutrition.",
                    promo: "Showcase your personal brand with a responsive coaching site.",
                    image: "assets/images/personalWebsite.jpg",
                    features: [
                        "Mobile-first responsive layout",
                        "Nutrition and fitness sections",
                        "Blog and contact forms",
                        "Clean UX and modern design",
                    ],
                },
                {
                    title: "Book Cover Designs",
                    category: "Designs",
                    description: "A collection of book and magazine cover designs.",
                    promo: "Eye-catching cover designs that make your work stand out.",
                    image: "assets/images/bookCover.jpg",
                    features: [
                        "Custom illustration and typography",
                        "Genre-specific layout design",
                        "High-resolution print-ready files",
                    ],
                },
                {
                    title: "Teaching Materials for Math, English, and Programming",
                    category: "Teaching",
                    description: "Worksheets and lesson plans tailored for students of all educational levels.",
                    promo: "Empower students with engaging and effective resources.",
                    image: "assets/images/teaching.jpg",
                    features: [
                        "Printable worksheets",
                        "Beginner to advanced levels",
                        "Visual aids and explanations",
                        "Customizable lesson plans",
                    ],
                },
                {
                    title: "Business Card Collection",
                    category: "Designs",
                    description: "Modern business card designs for various professions.",
                    promo: "Make a memorable first impression with sleek designs.",
                    image: "assets/images/card.jpg",
                    features: [
                        "Tailored designs for various industries",
                        "Print-ready and digital formats",
                        "Professional and minimalistic style",
                    ],
                },
                {
                    title: "Personal Portfolio Website",
                    category: "Websites",
                    description: "A website showcasing computer services and skills.",
                    promo: "Highlight your work and skills with a modern portfolio site.",
                    image: "assets/images/portfolioWebsite.jpg",
                    features: [
                        "Animated sections and transitions",
                        "Project gallery with filtering",
                        "Integrated contact form",
                        "Multi-language support",
                    ],
                },
            ]
        },
        testimonials: {
            title: "Client Testimonials",
            items: [
                {
                    quote: "Mohammad developed exactly what we needed. His attention to detail is exceptional.",
                    author: "Ahmad Khaled",
                    role: "Business Owner",
                },
                {
                    quote: "The website he built increased our online sales by 40% in the first month!",
                    author: "Mahmoud Khattab",
                    role: "Fitness Coach",
                },
                {
                    quote: "My son's math grades improved significantly after just a few tutoring sessions.",
                    author: "Fatima Al-Ahmad",
                    role: "Mother",
                },
            ],
        }
        ,
        contact: {
            title: "Get in Touch",
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "Your Message",
                submit: "Send Message",
            },
            social: "Connect with me :",
            info: {
                emailLabel: "Email",
                phoneLabel: "Phone",
                locationLabel: "Location"
            },
            follow: "Follow me on social media",
        },
        footer: {
            title: "Muhammad Wazier",
            subtitle: "Software Engineer | Designer | Tutor",
            copyright: "© 2023 Muhammad Wazier. All rights reserved.",
        },
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "عني",
            services: "خدماتي",
            portfolio: "أعمالي",
            testimonials: "آراء العملاء",
            contact: "اتصل بي",
        },
        hero: {
            title: "محمد وزير",
            subtitle: "مهندس برمجيات | مصمم | مدرس",
            quote: "تحويل الأفكار إلى حلول أنيقة من خلال البرمجة والتصميم.",
            cta: "عرض أعمالي",
        },
        about: {
            title: "عني",
            bio: "أنا مهندس برمجيات ومصمم متحمس مع أكثر من 5 سنوات من الخبرة في إنشاء حلول رقمية. تشمل خبرتي تطوير البرمجيات وتصميم الويب والجرافيك. كما أستمتع بمشاركة معرفتي من خلال الدروس الخصوصية في مختلف الموضوعات التقنية.",
            skills: [
                "تطوير الواجهة الأمامية",
                "تصميم واجهات المستخدم",
                "تصميم مواقع متجاوبة",
                "تطبيقات سطح المكتب",
                "التصميم الجرافيكي",
                "التدريس والإرشاد",
            ],
        },
        services: {
            title: "خدماتي",
            items: [
                {
                    icon: "laptop-code",
                    title: "تطوير برامج سطح المكتب",
                    description: "تطبيقات مخصصة تلبي احتياجات عملك.",
                },
                {
                    icon: "globe",
                    title: "تصميم وتطوير المواقع",
                    description: "مواقع حديثة تعمل على جميع الأجهزة.",
                },
                {
                    icon: "id-card",
                    title: "تصميم بطاقات العمل",
                    description: "بطاقات عمل احترافية تترك انطباعًا رائعًا.",
                },
                {
                    icon: "book-open",
                    title: "تصاميم أغلفة الكتب والمجلات",
                    description: "تصاميم جذابة لمنشوراتك.",
                },
                {
                    icon: "file-alt",
                    title: "تصميم السيرة الذاتية",
                    description: "تميز عن الآخرين بسيرة ذاتية مصممة بشكل احترافي.",
                },
                {
                    icon: "chalkboard-teacher",
                    title: "دروس خصوصية",
                    description:
                        "دروس فردية في الرياضيات واللغة الإنجليزية والبرمجة وأساسيات الكمبيوتر.",
                },
            ],
        },
        portfolio: {
            title: "أعمالي",
            viewDetails: "عرض التفاصيل",
            categories: ["الكل", "برمجيات", "مواقع", "تصاميم", "تدريس"],
            items: [
                {
                    title: "نظام إدارة الأندية الرياضية",
                    category: "برمجيات",
                    description: "تطبيق سطح المكتب لتنظيم عمليات التسجيل والاشتراك.",
                    promo: "بسّط إدارة النادي وتابع اشتراكات الأعضاء بسهولة.",
                    image: "assets/images/gymSystem.jpg",
                    features: [
                        "تسجيل الأعضاء وتتبع الاشتراكات",
                        "تنبيهات لانتهاء الاشتراك",
                        "واجهة سهلة الاستخدام",
                        "تقارير دورية عن النشاطات والدفع"
                    ],
                },
                {
                    title: "موقع الكتروني شخصي",
                    category: "مواقع",
                    description: "موقع إلكتروني للتدريب الرياضي والتغذية.",
                    promo: "قدّم خدماتك الرياضية باحترافية على الإنترنت.",
                    image: "assets/images/personalWebsite.jpg",
                    features: [
                        "تصميم متجاوب لجميع الأجهزة",
                        "أقسام مخصصة للتغذية والتدريب",
                        "نموذج تواصل سهل الاستخدام",
                        "واجهة مستخدم نظيفة وجذابة"
                    ],
                },
                {
                    title: "تصاميم أغلفة الكتب",
                    category: "تصاميم",
                    description: "مجموعة من تصاميم أغلفة الروايات والمجلات.",
                    promo: "اجذب القرّاء بأغلفة إبداعية تعبر عن محتوى الكتاب.",
                    image: "assets/images/bookCover.jpg",
                    features: [
                        "تصاميم مخصصة حسب نوع المحتوى",
                        "خطوط وتنسيقات جذابة",
                        "ملفات عالية الدقة للطباعة",
                        "أسلوب يعكس مضمون الكتاب"
                    ],
                },
                {
                    title: "تدريس مواد الرياضيات واللغة الإنكليزية والبرمجة",
                    category: "تدريس",
                    description: "أوراق عمل وخطط دروس مخصصة لطلاب جميع المراحل التعليمية.",
                    promo: "علّم بفعالية باستخدام موارد تعليمية مُجربة.",
                    image: "assets/images/teaching.jpg",
                    features: [
                        "خطط دروس مخصصة لجميع المستويات",
                        "تمارين مطبوعة مع حلول",
                        "تبسيط المفاهيم الصعبة",
                        "تفاعل مباشر مع الطلاب"
                    ],
                },
                {
                    title: "مجموعة بطاقات عمل",
                    category: "تصاميم",
                    description: "تصاميم حديثة لبطاقات العمل لمختلف المهن.",
                    promo: "أترك انطباعاً مهنياً مع بطاقة عمل أنيقة.",
                    image: "assets/images/card.jpg",
                    features: [
                        "تصاميم موجهة لمختلف المجالات",
                        "أبعاد جاهزة للطباعة",
                        "تنسيق احترافي وعصري",
                        "خيارات تصميم متنوعة"
                    ],
                },
                {
                    title: "موقع الكتروني شخصي",
                    category: "مواقع",
                    description: "موقع إلكتروني لعرض الخدمات والمهارات في مجال الحاسوب.",
                    promo: "عرّف العالم بمهاراتك من خلال موقع احترافي.",
                    image: "assets/images/portfolioWebsite.jpg",
                    features: [
                        "عرض شامل للمشاريع والخبرات",
                        "نظام تصفية للمشاريع",
                        "تصميم حديث وسريع الاستجابة",
                        "دعم تعدد اللغات"
                    ],
                }
            ]
            ,
        },
        testimonials: {
            title: "آراء العملاء",
            items: [
                {
                    quote:
                        "طور محمد بالضبط ما نحتاجه . انتباهه للتفاصيل استثنائي.",
                    author: "أحمد خالد",
                    role: "صاحب عمل",
                },
                {
                    quote:
                        "الموقع الذي أنشأه زاد مبيعاتنا عبر الإنترنت بنسبة 40٪ في الشهر الأول!",
                    author: " محمود خطاب",
                    role: "مدرب رياضي ",
                },
                {
                    quote:
                        "تحسنت درجات ابني في الرياضيات بشكل كبير بعد بضع جلسات تدريس فقط.",
                    author: "فاطمة الأحمد",
                    role: "والدة",
                },
            ],
        },
        contact: {
            title: "تواصل معي",
            form: {
                name: "اسمك",
                email: "بريدك الإلكتروني",
                message: "رسالتك",
                submit: "إرسال الرسالة",
            },
            social: "تواصل معي :",
            info: {
                emailLabel: "البريد الإلكتروني",
                phoneLabel: "الهاتف",
                locationLabel: "الموقع"
            },
            follow: "تابعني على وسائل التواصل الإجتماعي",
        },
        footer: {
            title: "محمد وزير",
            subtitle: "مهندس برمجيات | مصمم | مدرس",
            copyright: "© 2023 محمد وزير. جميع الحقوق محفوظة.",
        },
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über Mich",
            services: "Meine Dienstleistungen",
            portfolio: "Meine Arbeiten",
            testimonials: "Kundenstimmen",
            contact: "Kontakt",
        },
        hero: {
            title: "Muhammad Wazier",
            subtitle: "Softwareentwickler | Designer | Tutor",
            quote: "Ideen durch Programmierung und Design in elegante Lösungen verwandeln.",
            cta: "Meine Arbeiten ansehen",
        },
        about: {
            title: "Über Mich",
            bio: "Ich bin ein leidenschaftlicher Softwareentwickler und Designer mit über 5 Jahren Erfahrung in der Erstellung digitaler Lösungen. Meine Fachgebiete umfassen Softwareentwicklung, Webdesign und Grafikdesign. Ich teile mein Wissen auch gerne durch Privatunterricht in verschiedenen technischen Bereichen.",
            skills: [
                "Frontend-Entwicklung",
                "UI/UX-Design",
                "Responsives Webdesign",
                "Desktop-Anwendungen",
                "Grafikdesign",
                "Unterrichten und Mentoring",
            ],
        },
        services: {
            title: "Meine Dienstleistungen",
            items: [
                {
                    title: "Fitnessstudio-Verwaltungssystem",
                    category: "Software",
                    description: "Eine Desktop-Anwendung zur Verwaltung von Registrierungen und Abonnements.",
                    promo: "Vereinfachen Sie den Betrieb Ihres Fitnessstudios mit einer intuitiven Softwarelösung.",
                    features: [
                        "Mitgliederverwaltung und Abo-Tracking",
                        "Zahlungshistorie und Berichte",
                        "Ablaufbenachrichtigungen",
                        "Benutzerfreundliches Design"
                    ],
                },
                {
                    title: "Persönliche Website",
                    category: "Websites",
                    description: "Eine Website für Fitness-Coaching und Ernährung.",
                    promo: "Präsentieren Sie Ihre Fitnessmarke mit einer modernen Website.",
                    features: [
                        "Responsives Design für alle Geräte",
                        "Abschnitte für Ernährung & Training",
                        "Kontaktformular integriert",
                        "Klares und professionelles Layout"
                    ],
                },
                {
                    title: "Buchcover-Designs",
                    category: "Designs",
                    description: "Eine Sammlung von Buch- und Magazincovern.",
                    promo: "Auffällige Cover, die Ihre Publikationen hervorheben.",
                    features: [
                        "Individuelle Layouts je nach Genre",
                        "Kreative Typografie und Illustrationen",
                        "Druckfertige Dateien in hoher Qualität",
                        "Ansprechende visuelle Konzepte"
                    ],
                },
                {
                    title: "Unterrichtsmaterialien für Mathe, Englisch und Programmierung",
                    category: "Unterrichten",
                    description: "Arbeitsblätter und angepasste Lehrpläne für Algebra-Schüler.",
                    promo: "Fördern Sie das Lernen mit effektiven Lehrmaterialien.",
                    features: [
                        "Ausdruckbare Arbeitsblätter",
                        "Stufenweise Lerninhalte",
                        "Visualisierte Erklärungen",
                        "Anpassbare Pläne für Lehrer"
                    ],
                },
                {
                    title: "Visitenkartensammlung",
                    category: "Designs",
                    description: "Moderne Visitenkarten für verschiedene Berufe.",
                    promo: "Hinterlassen Sie einen bleibenden Eindruck mit stilvollen Visitenkarten.",
                    features: [
                        "Branchenübergreifende Designs",
                        "Bereit für Druck und digital",
                        "Professionelles, minimalistisches Layout",
                        "Vielfältige Designoptionen"
                    ],
                },
                {
                    title: "Persönliche Portfolio-Website",
                    category: "Websites",
                    description: "Eine Website zur Präsentation von IT-Dienstleistungen und Fähigkeiten.",
                    promo: "Heben Sie Ihre Projekte und Fähigkeiten stilvoll hervor.",
                    features: [
                        "Animationen und weiche Übergänge",
                        "Projektgalerie mit Filteroption",
                        "Mehrsprachige Unterstützung",
                        "Kontaktformular integriert"
                    ],
                }
            ]
            ,
        },
        portfolio: {
            title: "Meine Arbeiten",
            viewDetails: "Details ansehen",
            categories: ["Alle", "Software", "Webseiten", "Designs", "Unterricht"],
            items: [
                {
                    title: "Fitnessstudio-Verwaltungssystem",
                    category: "Software",
                    description: "Eine Desktop-Anwendung zur Verwaltung von Anmeldungen und Abonnements.",
                    promo: "Optimieren Sie den Betrieb und die Mitgliederverwaltung Ihres Fitnessstudios ganz einfach.",
                    image: "assets/images/gymSystem.jpg",
                    features: [
                        "Mitgliederregistrierung und Abonnementverwaltung",
                        "Integrierte Zahlungshistorie",
                        "Benachrichtigungen bei Ablauf von Abonnements",
                        "Saubere und intuitive Benutzeroberfläche",
                    ],
                },
                {
                    title: "Persönliche Webseite",
                    category: "Webseiten",
                    description: "Eine Website für Sportcoaching und Ernährung.",
                    promo: "Präsentieren Sie Ihre persönliche Marke mit einer responsiven Coaching-Website.",
                    image: "assets/images/personalWebsite.jpg",
                    features: [
                        "Responsives Layout mit Mobile-First-Ansatz",
                        "Abschnitte für Ernährung und Fitness",
                        "Blog- und Kontaktformulare",
                        "Modernes Design und benutzerfreundliche UX",
                    ],
                },
                {
                    title: "Buchcover-Designs",
                    category: "Designs",
                    description: "Eine Sammlung von Buch- und Magazincover-Designs.",
                    promo: "Auffällige Cover-Designs, die Ihre Werke hervorheben.",
                    image: "assets/images/bookCover.jpg",
                    features: [
                        "Individuelle Illustrationen und Typografie",
                        "Genrespezifisches Layout-Design",
                        "Hochauflösende, druckfertige Dateien",
                    ],
                },
                {
                    title: "Lehrmaterialien für Mathematik, Englisch und Programmierung",
                    category: "Unterricht",
                    description: "Arbeitsblätter und Unterrichtspläne, maßgeschneidert für Schüler aller Bildungsstufen.",
                    promo: "Ermöglichen Sie Schülern effektives und ansprechendes Lernen.",
                    image: "assets/images/teaching.jpg",
                    features: [
                        "Druckbare Arbeitsblätter",
                        "Für Anfänger bis Fortgeschrittene",
                        "Visuelle Hilfen und Erklärungen",
                        "Anpassbare Unterrichtspläne",
                    ],
                },
                {
                    title: "Visitenkartensammlung",
                    category: "Designs",
                    description: "Moderne Visitenkartendesigns für verschiedene Berufe.",
                    promo: "Hinterlassen Sie einen bleibenden Eindruck mit stilvollen Designs.",
                    image: "assets/images/card.jpg",
                    features: [
                        "Maßgeschneiderte Designs für verschiedene Branchen",
                        "Druckfertige und digitale Formate",
                        "Professioneller und minimalistischer Stil",
                    ],
                },
                {
                    title: "Persönliche Portfolio-Webseite",
                    category: "Webseiten",
                    description: "Eine Website zur Präsentation von Computer-Dienstleistungen und Fähigkeiten.",
                    promo: "Heben Sie Ihre Arbeit und Fähigkeiten mit einer modernen Portfolio-Seite hervor.",
                    image: "assets/images/portfolioWebsite.jpg",
                    features: [
                        "Animierte Abschnitte und Übergänge",
                        "Projektgalerie mit Filterfunktion",
                        "Integriertes Kontaktformular",
                        "Mehrsprachige Unterstützung",
                    ],
                },
            ]
        }
,        
        testimonials: {
            title: "Kundenstimmen",
            items: [
                {
                    quote: "Muhammad hat genau das entwickelt, was wir brauchten. Seine Liebe zum Detail ist außergewöhnlich.",
                    author: "Ahmed Khalid",
                    role: "Geschäftsinhaber",
                },
                {
                    quote: "Die Website, die er erstellt hat, hat unseren Online-Umsatz im ersten Monat um 40 % gesteigert!",
                    author: "Mahmoud Khattab",
                    role: "Fitnesstrainer",
                },
                {
                    quote: "Die Mathematiknoten meines Sohnes haben sich nach nur wenigen Unterrichtsstunden stark verbessert.",
                    author: "Fatima Al-Ahmad",
                    role: "Mutter",
                },
            ],
        },
        contact: {
            title: "Kontaktieren Sie mich",
            form: {
                name: "Ihr Name",
                email: "Ihre E-Mail-Adresse",
                message: "Ihre Nachricht",
                submit: "Nachricht senden",
            },
            social: "Verbinden Sie sich mit mir :",
            info: {
                emailLabel: "E-Mail",
                phoneLabel: "Telefon",
                locationLabel: "Standort"
            },
            follow: "Folgen Sie mir in den sozialen Medien",
        },
        footer: {
            title: "Muhammad Wazier",
            subtitle: "Softwareentwickler | Designer | Tutor",
            copyright: "© 2023 Muhammad Wazier. Alle Rechte vorbehalten.",
        },
    },

};
const translations = {
    en: {
        features: "Features"
    },
    ar: {
        features: "الميزات"
    },
    de: {
        features: "Funktionen"
    }
};


    // منع النسخ والقص
    document.addEventListener("copy", function (e) {
        e.preventDefault();
        alert("نسخ النص غير مسموح!");
    });

    document.addEventListener("cut", function (e) {
        e.preventDefault();
    });

    // منع تحديد النص
    document.addEventListener("DOMContentLoaded", () => {
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
    });

    // منع زر الفأرة الأيمن
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });






let currentLanguage = "en";
// Mobile menu toggle
document
    .getElementById("mobile-menu-button")
    .addEventListener("click", function () {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById("mobile-menu");
            if (!mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
            }
        }
    });
});

// Portfolio modal functions
function openModal(lang, itemIndex) {
    const modal = document.getElementById("portfolio-modal");
    
    // الحصول على بيانات العنصر المحدد من الكائن الرئيسي
    const item = languageData[lang].portfolio.items[itemIndex];
    if (!item) return;

    // ملء عناصر المودال
    document.getElementById("modal-image").src = item.image;
    document.getElementById("modal-image").alt = item.title;
    document.getElementById("modal-title").textContent = item.title;
    document.getElementById("modal-description").textContent = item.description;
    document.getElementById("modal-promo").textContent = item.promo;

    // ملء قائمة الميزات
    const featuresList = document.getElementById("modal-features");
    featuresList.innerHTML = ''; // تفريغ القائمة القديمة
    item.features.forEach(featureText => {
        const li = document.createElement('li');
        li.textContent = featureText;
        featuresList.appendChild(li);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("portfolio-modal");
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}


// --- دوال قسم Portfolio ---
function filterPortfolio(category, buttonElement) {
    const portfolioItems = document.querySelectorAll('#portfolio-grid .portfolio-item');
    const filterButtons = document.querySelectorAll('#portfolio-filters button');

    // 1. تحديث شكل الأزرار (هذا الجزء سليم لديك)
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-green-500', 'text-white');
        btn.classList.add('bg-white', 'text-gray-900');
    });
    buttonElement.classList.add('bg-green-500', 'text-white');
    buttonElement.classList.remove('bg-white', 'text-gray-900');
    
    // 2. إظهار وإخفاء المشاريع (هنا التعديل المهم)
    portfolioItems.forEach(item => {
        // الشرط الأساسي: إذا كانت الفئة هي "الكل" (بكل اللغات)، أظهر العنصر
        if (category === 'All' || category === 'الكل' || category === 'Alle') {
            item.style.display = 'block';
        } 
        // وإلا، تحقق مما إذا كانت فئة العنصر تطابق الفئة المحددة
        else if (item.dataset.category === category) {
            item.style.display = 'block';
        } 
        // إذا لم يتحقق أي من الشرطين، قم بإخفاء العنصر
        else {
            item.style.display = 'none';
        }
    });
}

function renderPortfolio(lang) {
    const portfolioData = languageData[lang].portfolio;

    // تحديث العنوان والوصف
    document.getElementById('portfolio-title').textContent = portfolioData.title;
    document.getElementById('portfolio-description').textContent = portfolioData.description;
    document.getElementById("features").textContent = translations[lang].features;

    // إنشاء أزرار الفلترة
    const filtersContainer = document.getElementById('portfolio-filters');
    filtersContainer.innerHTML = ''; // تفريغ الحاوية
    portfolioData.categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = category;
        // تطبيق تصميم خاص للزر الأول والأخير ليكونا دائريين من الأطراف
        let roundedClass = '';
        if (index === 0) roundedClass = 'rounded-s-lg';
        if (index === portfolioData.categories.length - 1) roundedClass = 'rounded-e-lg';

        button.className = `px-4 py-2 text-sm font-medium border border-gray-200 hover:bg-gray-100 hover:text-green-600 focus:z-10 focus:ring-2 focus:ring-green-500 ${roundedClass}`;

        if (category === 'All' || category === 'الكل' || category === 'Alle') {
             button.classList.add('bg-green-500', 'text-white');
        } else {
            button.classList.add('bg-white', 'text-gray-900');
        }

        button.onclick = () => filterPortfolio(category, button);
        filtersContainer.appendChild(button);
    });


    // إنشاء بطاقات المشاريع
    const gridContainer = document.getElementById('portfolio-grid');
    gridContainer.innerHTML = ''; // تفريغ الحاوية
    portfolioData.items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'portfolio-item bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105';
        card.dataset.category = item.category;

        // استخدام innerHTML لسهولة بناء البطاقة
        card.innerHTML = `
            <div class="h-48 bg-gray-200 overflow-hidden">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contains" />
            </div>
            <div class="p-6 text-start">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${item.title}</h3>
                <p class="text-gray-600 mb-4">${item.description}</p>
                <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">${item.category}</span>
                <button onclick="openModal('${lang}', ${index})" class="mt-4 text-green-500 hover:text-green-600 font-medium inline-flex items-center">
                    ${portfolioData.viewDetails} 
                </button>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// Close modal when clicking outside
document
    .getElementById("portfolio-modal")
    .addEventListener("click", function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

// Language switching function
function changeLanguage(lang) {
    currentLanguage = lang;
    document.getElementById("features").textContent = translations[lang].features;

    updateContent();
    

    // Update direction for RTL languages
    if (lang === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
        document.body.classList.add("rtl");
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = lang;
        document.body.classList.remove("rtl");
    }
     // 1. نبحث عن القائمة الخاصة بالموبايل
     const mobileMenu = document.getElementById("mobile-menu");

     // 2. نتأكد من وجودها وأنها ليست مخفية، ثم نضيف كلاس "hidden" لإغلاقها
     if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
         mobileMenu.classList.add("hidden");
     }
}

// Update all content based on current language
    function updateContent() {
    const data = languageData[currentLanguage];
    // Navigation
    document
        .querySelectorAll('[href="#home"]')
        .forEach((el) => (el.textContent = data.nav.home));
    document
        .querySelectorAll('[href="#about"]')
        .forEach((el) => (el.textContent = data.nav.about));
    document
        .querySelectorAll('[href="#services"]')
        .forEach((el) => (el.textContent = data.nav.services));
    document
        .querySelectorAll('[href="#portfolio"]')
        .forEach((el) => (el.textContent = data.nav.portfolio));
    document
        .querySelectorAll('[href="#testimonials"]')
        .forEach((el) => (el.textContent = data.nav.testimonials));
    document
        .querySelectorAll('[href="#contact"]')
        .forEach((el) => (el.textContent = data.nav.contact));

    // Hero section
    document.querySelector("#home h1").textContent = data.hero.title;
    document.querySelector("#home h2").textContent = data.hero.subtitle;
    document.querySelector("#home p").textContent = data.hero.quote;
    document.querySelector("#home a").textContent = data.hero.cta;

    // About section
    document.querySelector("#about h2").textContent = data.about.title;
    document.querySelector("#about p").textContent = data.about.bio;

    // Services section
    document.querySelector("#services h2").textContent =
        data.services.title;
    document.querySelector("#services p").textContent =
        data.services.subtitle;

    // Portfolio section
    document.querySelector("#portfolio h2").textContent =
        data.portfolio.title;
    document.querySelector("#portfolio p").textContent =
        data.portfolio.subtitle;

    
    

    // Testimonials section
    document.querySelector("#testimonials h2").textContent =
        data.testimonials.title;
    document.querySelector("#testimonials p").textContent =
        data.testimonials.subtitle;



    const testimonialCards = document.querySelectorAll(".testimonial-card");
    data.testimonials.items.forEach((item, index) => {
        const card = testimonialCards[index];
        if (!card) return;

        // تحديث الاقتباس
        card.querySelector("p.text-gray-600.italic").textContent = item.quote;

        // تحديث الاسم
        card.querySelector("h4").textContent = item.author;

        // تحديث الوظيفة
        card.querySelector("p.text-gray-600.text-sm").textContent = item.role;


    });


    // Contact section
    document.querySelector("#contact h2").textContent = data.contact.title;
    document.querySelector("#contact p").textContent =
        data.contact.subtitle;
    document.querySelector('#contact form label[for="name"]').textContent =
        data.contact.form.name;
    document.querySelector('#contact form label[for="email"]').textContent =
        data.contact.form.email;
    document.querySelector(
        '#contact form label[for="message"]'
    ).textContent = data.contact.form.message;
    document.querySelector("#contact form button").textContent =
        data.contact.form.submit;
    document.querySelector("#contact .bg-gray-50 h3").textContent =
        data.contact.social;
        document.getElementById("follow-me").textContent = data.contact.follow;

        

    document.getElementById("contact-email-label").textContent = data.contact.info.emailLabel;
    document.getElementById("contact-phone-label").textContent = data.contact.info.phoneLabel;
    document.getElementById("contact-location-label").textContent = data.contact.info.locationLabel;

    // Footer
    document.querySelector("footer .text-center p").textContent = data.footer.copyright;
    document.getElementById("footer-title").textContent = data.footer.title;
    document.getElementById("footer-subtitle").textContent = data.footer.subtitle;

    // Services section (dynamic items)
    const servicesSection = document.querySelector("#services");
    servicesSection.querySelector("h2").textContent = data.services.title;
    servicesSection.querySelector("p").textContent = data.services.subtitle;

    // تحديث العناصر الفردية
    const serviceCards = servicesSection.querySelectorAll(".grid > div");

    data.services.items.forEach((item, index) => {
        const card = serviceCards[index];
        if (!card) return;

        // تحديث الأيقونة (اختياري إذا تغيّرت من لغة لأخرى)
        const iconEl = card.querySelector("i");
        iconEl.className = `fas fa-${item.icon} text-3xl text-green-500`;

        // تحديث العنوان والوصف
        card.querySelector("h3").textContent = item.title;
        card.querySelector("p").textContent = item.description;
    });


    // My Skills title
    document.querySelector("#skills-title").textContent =
        currentLanguage === "ar" ? "مهاراتي" : "My Skills";

    // My Skills badges
    const skillsContainer = document.querySelector("#skills-title + div");
    if (skillsContainer) {
        skillsContainer.innerHTML = ""; // تنظيف العناصر القديمة
        data.about.skills.forEach((skill) => {
            const span = document.createElement("span");
            span.className =
                "bg-green-100 text-green-800 px-4 py-2 rounded-full";
            span.textContent = skill;
            skillsContainer.appendChild(span);
        });
    }
    // تحديث مشاريع قسم Portfolio
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    data.portfolio.items.forEach((item, index) => {
        const card = portfolioItems[index];
        if (!card) return;

        // تحديث العنوان
        const titleEl = card.querySelector("h3");
        if (titleEl) titleEl.textContent = item.title;

        // تحديث الوصف
        const descEl = card.querySelector("p");
        if (descEl) descEl.textContent = item.description;

        // تحديث الفئة
        const categoryEl = card.querySelector("span");
        if (categoryEl) categoryEl.textContent = item.category;

        // تحديث الزر
        const buttonEl = card.querySelector("button");
        if (buttonEl) {
            buttonEl.innerHTML = `${data.portfolio.buttonText} <i class="fas fa-arrow-right ml-2"></i>`;
            buttonEl.setAttribute("onclick", `openModal('${item.title}', '${item.description}', '${item.image}')`);
        }
    });
// عكس اتجاه الأرقام عند اختيار العربية
if (currentLanguage === "ar") {
    document.getElementById("phone-1").style.direction = "ltr";
    document.getElementById("phone-1").style.unicodeBidi = "plaintext";
    document.getElementById("phone-2").style.direction = "ltr";
    document.getElementById("phone-2").style.unicodeBidi = "plaintext";
} else {
    document.getElementById("phone-1").style.direction = "";
    document.getElementById("phone-1").style.unicodeBidi = "";
    document.getElementById("phone-2").style.direction = "";
    document.getElementById("phone-2").style.unicodeBidi = "";
}

renderPortfolio(currentLanguage);
}    
function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById('nameError').classList.add('hidden');
    document.getElementById('emailError').classList.add('hidden');
    document.getElementById('messageError').classList.add('hidden');

    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check name
    if (name === "") {
        document.getElementById('nameError').classList.remove('hidden');
        valid = false;
    }

    // Check email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById('emailError').classList.remove('hidden');
        valid = false;
    }

    // Check message
    if (message === "") {
        document.getElementById('messageError').classList.remove('hidden');
        valid = false;
    }

    return valid;
}


// Initialize with English
// changeLanguage("en");
