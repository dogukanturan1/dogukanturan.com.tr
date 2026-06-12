/* =========================================================
   Doğukan Turan — Portfolio
   i18n (TR/EN) · live feed · typed words · counters
   ========================================================= */
(function () {
    'use strict';

    /* ---------------- Translations ---------------- */
    const I18N = {
        tr: {
            skip: "İçeriğe atla",
            nav_transform: "Dönüşüm", nav_about: "Hakkımda", nav_projects: "Projeler",
            nav_stack: "Teknolojiler", nav_cta: "İletişime geç",

            hero_pill: "ERP · MES · Otomasyon · Yapay Zekâ",
            hero_h1_1: "Merhaba, ben Doğukan.",
            hero_h1_pre: "", hero_h1_post: " inşa ederim.",
            hero_sub: "Yazılım Uzmanı ve ERP Sistem Yöneticisiyim. Sanayi şirketlerinin eski, manuel süreçlerini alır; sahada her gün çalışan modern sistemlere dönüştürürüm.",
            hero_cta1: "Projelerimi gör", hero_cta2: "Nasıl çözüyorum?",
            term_title: "Sistem akışı — canlı",
            chip_ai: "Yapay Zekâ", chip_gear: "Otomasyon", chip_ok: "Rapor gönderildi — 07:00",

            tf_kicker: "Eskiden → yeniye",
            tf_h: "Eskiyi alırım, yeniyi inşa ederim.",
            tf_sub: "Her projem bir dönüşüm hikâyesi. İşte gerçek projelerimden örnekler:",
            d1_old: "Excel’de dağınık müşteri ve cari takibi",
            d1_new: "Tek ekranda CRM, cari ve raporlama — holding ERP",
            d2_old: "Saatler süren manuel kesim teklifleri",
            d2_new: "Çizim analiziyle 30 saniyede otomatik fiyat",
            d3_old: "Kâğıtta kaybolan iş emirleri",
            d3_new: "Canlı üretim takibi — planlama, kapasite, fire",
            d4_old: "Elle hazırlanan yönetim raporları",
            d4_new: "Her sabah 07:00’de otomatik rapor, cebinizde",
            d5_old: "Birbirinden kopuk programlar",
            d5_new: "Birbiriyle konuşan sistemler — üretimden finansa",

            about_kicker: "Hakkımda",
            about_h: "Kod yazan değil, sorun çözen biriyim.",
            about_p1: "Yazılım Uzmanı ve ERP Sistem Yöneticisi olarak sanayi ve üretim şirketleri için uçtan uca sistemler geliştiriyorum: satıştan satınalmaya, üretim planlamadan finansa. Lazer kesim tekliflerini otomatikleştiren çizim analiz motorlarından mobil ERP uygulamalarına ve yapay zekâ destekli satınalma ajanlarına kadar geniş bir alanda üretiyorum.",
            about_p2: "Benim için iyi yazılım; hızlı, güvenli ve sahada gerçekten kullanılan yazılımdır. Bir sistemi teslim etmek kadar, onu yıllarca sorunsuz yaşatmak da işimin parçası.",
            stat1_l: "teslim edilen sistem", stat2_l: "sektörel çözüm",
            stat3_l: "entegrasyon", stat4_l: "saha desteği",

            proj_kicker: "Projeler",
            proj_h: "Sahada çalışan sistemler",
            proj_sub: "Gerçek işletmeler için geliştirdiğim, her gün kullanılan çözümlerden bir seçki.",
            p1_t: "Otomatik Fiyatlandırma Motoru",
            p1_d: "Yüklenen teknik çizimi saniyeler içinde analiz eder: kesim uzunluğu, parça detayı, malzeme. Saatler süren manuel teklif sürecini 30 saniyeye indirir.",
            p2_t: "Çok Şirketli Holding ERP",
            p2_d: "Birden fazla şirketi tek çatıda yöneten ERP: satış, satınalma, finans, CRM, raporlama. Yetkilendirme ve kayıt güvenliği standart.",
            p3_t: "Üretim Yönetim Sistemi (MES)",
            p3_d: "Sac metal ve lazer kesim üretimi için planlama, iş emri, kapasite ve fire takibi. Kesim makineleriyle tam entegre çalışır.",
            p4_t: "Mobil ERP Uygulaması",
            p4_d: "Saha ekipleri ve yöneticiler için mobil öncelikli, güvenli ERP. Cari, fatura, tahsilat ve ziyaret takibi her yerden.",
            p5_t: "Yapay Zekâ Destekli Satınalma",
            p5_d: "Sisteme gömülü yapay zekâ: satınalma önerileri, otomatik veri analizi, karar desteği. Süreçler dijital ikizle görselleştirilir.",
            p6_t: "İK ve Otomasyon Araçları",
            p6_d: "Personel, izin ve günlük takip; toplu e-posta ve raporlama gibi tekrar eden işleri otomatikleştiren araçlar.",
            proj_note: "Projeler gizlilik gereği sektörel olarak anonimleştirilmiştir — referans ve demo için iletişime geçin.",

            serv_kicker: "Hizmetler",
            serv_h: "Neler yapıyorum?",
            serv1_t: "Kurumsal ERP geliştirme",
            serv1_d: "Satış, satınalma, finans ve CRM tek platformda — şirketinize özel.",
            serv2_t: "Üretim ve MES sistemleri",
            serv2_d: "Planlama, iş emri, kapasite, kalite ve fire; makine entegrasyonlarıyla.",
            serv3_t: "Mobil ve web uygulamaları",
            serv3_d: "Saha ve yönetim için güvenli, her yerden erişilebilir uygulamalar.",
            serv4_t: "Süreç otomasyonu",
            serv4_d: "Tekrar eden manuel işleri otomatikleştiren akışlar ve entegrasyonlar.",
            serv5_t: "Yapay zekâ entegrasyonu",
            serv5_d: "Karar destek, akıllı öneriler ve doküman analizi — süreçlere gömülü.",
            serv6_t: "Veri ve raporlama",
            serv6_d: "Otomatik Excel/PDF raporları, paneller ve anlık iş zekâsı.",

            stack_kicker: "Teknolojiler",
            stack_h: "Hangi araçlarla çalışıyorum?",
            st1_k: "Yazılım altyapısı", st2_k: "Veritabanı", st3_k: "Endüstri ve üretim",
            st4_k: "Veri ve raporlama", st5_k: "Yapay zekâ", st6_k: "Arayüz ve dağıtım",

            c_kicker: "İletişim",
            c_h: "Bir sorununuz mu var? Çözelim.",
            c_sub: "Bir ERP, üretim sistemi ya da otomasyon hakkında konuşalım. Genellikle 24 saat içinde dönüş yaparım.",
            c_btn: "E-posta gönder",
            c_email_l: "e-posta", c_phone_l: "telefon",

            ftr_role: "Yazılım Uzmanı ve ERP Sistem Yöneticisi"
        },
        en: {
            skip: "Skip to content",
            nav_transform: "Transform", nav_about: "About", nav_projects: "Projects",
            nav_stack: "Technologies", nav_cta: "Get in touch",

            hero_pill: "ERP · MES · Automation · AI",
            hero_h1_1: "Hi, I'm Doğukan.",
            hero_h1_pre: "I build ", hero_h1_post: ".",
            hero_sub: "I'm a Software Specialist and ERP Systems Manager. I take the old, manual processes of industrial companies and turn them into modern systems that run in the field every day.",
            hero_cta1: "See my work", hero_cta2: "How I solve it",
            term_title: "System feed — live",
            chip_ai: "AI", chip_gear: "Automation", chip_ok: "Report sent — 07:00",

            tf_kicker: "From old → to new",
            tf_h: "I take the old and build the new.",
            tf_sub: "Every project is a transformation story. Examples from my real projects:",
            d1_old: "Customer and account tracking scattered across Excel",
            d1_new: "CRM, accounts and reporting on one screen — holding ERP",
            d2_old: "Manual cutting quotes taking hours",
            d2_new: "Automatic pricing in 30 seconds via drawing analysis",
            d3_old: "Work orders lost on paper",
            d3_new: "Live production tracking — planning, capacity, scrap",
            d4_old: "Management reports prepared by hand",
            d4_new: "Automatic report every morning at 07:00, on your phone",
            d5_old: "Disconnected, isolated programs",
            d5_new: "Systems that talk to each other — from production to finance",

            about_kicker: "About",
            about_h: "Not just a coder — a problem solver.",
            about_p1: "As a Software Specialist and ERP Systems Manager, I build end-to-end systems for industrial and manufacturing companies: from sales and purchasing to production planning and finance. My work spans drawing-analysis engines that automate laser-cutting quotes, mobile ERP apps and AI-assisted purchasing agents.",
            about_p2: "To me, good software is fast, secure and actually used in the field. Delivering a system matters — keeping it running smoothly for years matters just as much.",
            stat1_l: "systems delivered", stat2_l: "industry solutions",
            stat3_l: "integrations", stat4_l: "field support",

            proj_kicker: "Projects",
            proj_h: "Systems running in the field",
            proj_sub: "A selection of solutions I built for real businesses, used every single day.",
            p1_t: "Automatic Quotation Engine",
            p1_d: "Analyzes an uploaded technical drawing in seconds: cut length, part details, material. Turns an hours-long manual quoting process into 30 seconds.",
            p2_t: "Multi-Company Holding ERP",
            p2_d: "One ERP managing multiple companies: sales, purchasing, finance, CRM, reporting. Access control and record security as standard.",
            p3_t: "Manufacturing Execution System (MES)",
            p3_d: "Planning, work orders, capacity and scrap tracking for sheet-metal and laser-cutting production. Fully integrated with cutting machines.",
            p4_t: "Mobile ERP Application",
            p4_d: "A mobile-first, secure ERP for field teams and managers. Accounts, invoices, collections and visit tracking from anywhere.",
            p5_t: "AI-Assisted Purchasing",
            p5_d: "AI embedded in the system: purchasing suggestions, automated data analysis, decision support. Processes visualized with a digital twin.",
            p6_t: "HR & Automation Tools",
            p6_d: "Staff, leave and daily tracking; tools automating repetitive work like bulk email and reporting.",
            proj_note: "Projects are anonymized by industry for confidentiality — contact me for references and demos.",

            serv_kicker: "Services",
            serv_h: "What I do",
            serv1_t: "Enterprise ERP development",
            serv1_d: "Sales, purchasing, finance and CRM on one platform — built for your company.",
            serv2_t: "Manufacturing & MES systems",
            serv2_d: "Planning, work orders, capacity, quality and scrap; with machine integrations.",
            serv3_t: "Mobile & web applications",
            serv3_d: "Secure apps for field and management, accessible from anywhere.",
            serv4_t: "Process automation",
            serv4_d: "Flows and integrations that automate repetitive manual work.",
            serv5_t: "AI integration",
            serv5_d: "Decision support, smart suggestions and document analysis — embedded in your processes.",
            serv6_t: "Data & reporting",
            serv6_d: "Automated Excel/PDF reports, dashboards and real-time business intelligence.",

            stack_kicker: "Technologies",
            stack_h: "The tools I work with",
            st1_k: "Software foundation", st2_k: "Database", st3_k: "Industry & manufacturing",
            st4_k: "Data & reporting", st5_k: "Artificial intelligence", st6_k: "Interface & delivery",

            c_kicker: "Contact",
            c_h: "Got a problem? Let's solve it.",
            c_sub: "Let's talk about an ERP, a production system or automation. I usually reply within 24 hours.",
            c_btn: "Send an email",
            c_email_l: "email", c_phone_l: "phone",

            ftr_role: "Software Specialist & ERP Systems Manager"
        }
    };

    const META = {
        tr: {
            title: "Doğukan Turan | Yazılım Uzmanı ve ERP Sistem Yöneticisi",
            desc: "Doğukan Turan — Yazılım Uzmanı ve ERP Sistem Yöneticisi. Eski süreçleri yeni sistemlere dönüştürürüm: kurumsal ERP, üretim yönetimi (MES), DXF otomasyonu ve yapay zekâ entegrasyonları."
        },
        en: {
            title: "Doğukan Turan | Software Specialist & ERP Systems Manager",
            desc: "Doğukan Turan — Software Specialist & ERP Systems Manager. I turn old processes into new systems: enterprise ERP, MES, DXF automation and AI integrations."
        }
    };

    /* Typed rotating words (hero) */
    const TYPED = {
        tr: ["ERP sistemleri", "üretim yazılımları", "otomasyon araçları", "yapay zekâ çözümleri", "mobil uygulamalar"],
        en: ["ERP systems", "manufacturing software", "automation tools", "AI solutions", "mobile apps"]
    };

    /* Live feed scenarios — plain language, any audience */
    const TERM = {
        tr: [
            [
                { c: 'out', t: 'Excel dosyaları inceleniyor…' },
                { c: 'out', t: '4 şirket, 12 tablo, 0 entegrasyon bulundu' },
                { c: 'ok',  t: 'Tek platformda birleştirildi: satış + finans + üretim' },
                { c: 'ok',  t: 'Sistem canlıda — sahada çalışıyor' }
            ],
            [
                { c: 'out', t: 'Teknik çizim yüklendi: teklif_cizimi' },
                { c: 'out', t: '142 parça detayı tespit edildi' },
                { c: 'ok',  t: 'Fiyat teklifi hazır — 30 saniye' }
            ],
            [
                { c: 'out', t: 'Saat 07:00 — günlük rapor hazırlanıyor…' },
                { c: 'ok',  t: 'Yönetim raporu gönderildi' },
                { c: 'out', t: 'Yapay zekâ satınalma verilerini analiz ediyor…' },
                { c: 'ok',  t: 'Tasarruf önerisi hazır — karar sizin' }
            ]
        ],
        en: [
            [
                { c: 'out', t: 'Scanning Excel files…' },
                { c: 'out', t: 'Found: 4 companies, 12 sheets, 0 integrations' },
                { c: 'ok',  t: 'Unified on one platform: sales + finance + production' },
                { c: 'ok',  t: 'System live — running in the field' }
            ],
            [
                { c: 'out', t: 'Technical drawing uploaded: quote_drawing' },
                { c: 'out', t: '142 part details detected' },
                { c: 'ok',  t: 'Price quote ready — 30 seconds' }
            ],
            [
                { c: 'out', t: '07:00 — preparing the daily report…' },
                { c: 'ok',  t: 'Management report delivered' },
                { c: 'out', t: 'AI analyzing purchasing data…' },
                { c: 'ok',  t: 'Savings suggestion ready — your call' }
            ]
        ]
    };

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

    /* ---------------- i18n ---------------- */
    function applyLang(lang) {
        if (!I18N[lang]) lang = 'tr';
        const dict = I18N[lang];
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });
        document.documentElement.lang = lang;
        document.title = META[lang].title;
        const pairs = [
            ['meta[name="description"]', META[lang].desc],
            ['meta[property="og:title"]', META[lang].title],
            ['meta[property="og:description"]', META[lang].desc],
            ['meta[name="twitter:title"]', META[lang].title],
            ['meta[name="twitter:description"]', META[lang].desc],
            ['meta[property="og:locale"]', lang === 'tr' ? 'tr_TR' : 'en_US']
        ];
        pairs.forEach(function (p) {
            const el = document.querySelector(p[0]);
            if (el) el.setAttribute('content', p[1]);
        });
        document.querySelectorAll('.lang-opt').forEach(function (o) {
            o.classList.toggle('active', o.getAttribute('data-lang') === lang);
        });
        try { localStorage.setItem('dt-lang', lang); } catch (e) {}

        // Ghost reserves the height of the longest rotating word,
        // so the typing animation never shifts the layout below it.
        const ghost = document.getElementById('h1Ghost');
        if (ghost) {
            const words = TYPED[lang] || TYPED.tr;
            const longest = words.reduce(function (a, b) { return b.length > a.length ? b : a; }, '');
            ghost.textContent = dict.hero_h1_pre + longest + dict.hero_h1_post;
        }

        startTyped(lang);
        startTerminal(lang);
    }

    /* ---------------- Typed rotating word ---------------- */
    let typedGen = 0;
    async function startTyped(lang) {
        const el = document.getElementById('typedWord');
        if (!el) return;
        const gen = ++typedGen;
        const words = TYPED[lang] || TYPED.tr;
        if (reduceMotion) { el.textContent = words[0]; return; }
        let i = 0;
        el.textContent = '';
        while (gen === typedGen) {
            const w = words[i % words.length];
            for (let k = 1; k <= w.length; k++) {
                if (gen !== typedGen) return;
                el.textContent = w.slice(0, k);
                await sleep(62);
            }
            await sleep(1300);
            for (let k = w.length; k >= 0; k--) {
                if (gen !== typedGen) return;
                el.textContent = w.slice(0, k);
                await sleep(28);
            }
            await sleep(260);
            i++;
        }
    }

    /* ---------------- Live feed ---------------- */
    let termGen = 0;
    async function startTerminal(lang) {
        const body = document.getElementById('termBody');
        if (!body) return;
        const gen = ++termGen;
        const scenarios = TERM[lang] || TERM.tr;

        if (reduceMotion) {
            body.innerHTML = '';
            scenarios[0].forEach(function (line) {
                const s = document.createElement('span');
                s.className = 't-line t-' + line.c;
                s.textContent = line.t;
                body.appendChild(s);
            });
            return;
        }

        let si = 0;
        while (gen === termGen) {
            body.innerHTML = '';
            const lines = scenarios[si % scenarios.length];
            for (let li = 0; li < lines.length; li++) {
                if (gen !== termGen) return;
                const line = lines[li];
                const s = document.createElement('span');
                s.className = 't-line t-' + line.c;
                body.appendChild(s);
                const cur = document.createElement('span');
                cur.className = 'term-cursor';
                body.appendChild(cur);
                const speed = line.c === 'ok' ? 14 : 22;
                for (let k = 1; k <= line.t.length; k++) {
                    if (gen !== termGen) return;
                    s.textContent = line.t.slice(0, k);
                    await sleep(speed);
                }
                cur.remove();
                await sleep(line.c === 'ok' ? 480 : 320);
            }
            const endCur = document.createElement('span');
            endCur.className = 'term-cursor';
            body.appendChild(endCur);
            await sleep(3200);
            endCur.remove();
            si++;
        }
    }

    /* ---------------- Init ---------------- */
    document.addEventListener('DOMContentLoaded', function () {

        let saved = null;
        try { saved = localStorage.getItem('dt-lang'); } catch (e) {}
        applyLang(saved === 'en' ? 'en' : 'tr');

        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', function () {
                applyLang(document.documentElement.lang === 'tr' ? 'en' : 'tr');
            });
        }

        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Navbar scrolled state
        const nav = document.getElementById('navbar');
        const onScroll = function () { if (nav) nav.classList.toggle('scrolled', window.scrollY > 20); };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                const id = this.getAttribute('href');
                if (id === '#' || id.length < 2) return;
                const target = document.querySelector(id);
                if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
            });
        });

        // Staggered reveal-on-scroll
        ['.cards', '.servs', '.stats', '.c-actions', '.stackg', '.swaps'].forEach(function (sel) {
            document.querySelectorAll(sel).forEach(function (grid) {
                Array.prototype.slice.call(grid.children).forEach(function (child, i) {
                    if (child.hasAttribute('data-reveal')) child.classList.add('d' + Math.min((i % 3) + 1, 3));
                });
            });
        });
        const revealEls = document.querySelectorAll('[data-reveal]');
        if ('IntersectionObserver' in window && !reduceMotion) {
            const io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
            revealEls.forEach(function (el) { io.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add('in'); });
        }

        // Count-up stats
        const counts = document.querySelectorAll('.count');
        if ('IntersectionObserver' in window && counts.length && !reduceMotion) {
            const co = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    co.unobserve(entry.target);
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
                    const t0 = performance.now();
                    const dur = 1200;
                    (function tick(now) {
                        const p = Math.min((now - t0) / dur, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        el.textContent = Math.round(eased * target);
                        if (p < 1) requestAnimationFrame(tick);
                    })(t0);
                });
            }, { threshold: 0.5 });
            counts.forEach(function (el) { co.observe(el); });
        } else {
            counts.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
        }

        // Active nav link
        const navAnchors = Array.prototype.slice.call(document.querySelectorAll('.links a'));
        const sections = navAnchors
            .map(function (a) { return document.querySelector(a.getAttribute('href')); })
            .filter(Boolean);
        if ('IntersectionObserver' in window && sections.length) {
            const spy = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const id = '#' + entry.target.id;
                        navAnchors.forEach(function (a) {
                            a.classList.toggle('active', a.getAttribute('href') === id);
                        });
                    }
                });
            }, { rootMargin: '-35% 0px -55% 0px' });
            sections.forEach(function (s) { spy.observe(s); });
        }
    });
})();
