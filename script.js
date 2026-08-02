/* ================= 1. ÇEVİRİ SÖZLÜĞÜ (DICTIONARY) ================= */
const translations = {
    tr: {
        nav_skills: "Yetenekler", nav_projects: "Projeler", nav_contact: "İletişim",
        hero_btn: "Projeleri İncele", skills_title: "Teknik Yetenekler", skill_ai: "AI Destekli Geliştirme",
        projects_title: "Öne Çıkan Çalışmalar", contact_title: "İletişime Geçin",
        contact_desc: "Yeni projelere ve profesyonel fırsatlara her zaman açığım.",
        form_name: "Adınız Soyadınız", form_email: "E-posta Adresiniz", form_message: "Mesajınız...", form_submit: "Gönder",
        footer_text: "© 2026 Muhammet Ali Oruç. Tüm hakları saklıdır.",
        btn_download: "İndir", btn_view3d: "3D İncele",
        typewriter: ["Bağımsız Yazılım Geliştirici", "Web, Masaüstü & Mobil Teknolojileri", "3D Modelleme & Oyun Geliştirme", "Yeni Mezun & Teknolojist"]
    },
    en: {
        nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_btn: "View Projects", skills_title: "Technical Skills", skill_ai: "AI Assisted Development",
        projects_title: "Featured Works", contact_title: "Get In Touch",
        contact_desc: "I am always open to new projects and professional opportunities.",
        form_name: "Full Name", form_email: "Email Address", form_message: "Your Message...", form_submit: "Send",
        footer_text: "© 2026 Muhammet Ali Oruç. All rights reserved.",
        btn_download: "Download", btn_view3d: "View 3D",
        typewriter: ["Independent Software Developer", "Web, Desktop & Mobile Tech", "3D Modeling & Game Dev", "New Graduate & Technologist"]
    }
};

/* ================= 2. DİNAMİK PROJELER VERİSİ ================= */
const projelerData = [
    {
        ikon: "fa-hotel", etiketler: ["C#", "OOP", "MySQL"],
        baslik: { tr: "Otel Rezervasyon Sistemi", en: "Hotel Reservation System" },
        aciklama: {
            tr: "Takım çalışması ile geliştirilen, müşteri kayıtları ve oda yönetimi operasyonlarını barındıran kapsamlı otomasyon projesi.",
            en: "A comprehensive automation project developed as a team, featuring customer records and room management."
        },
        indirmeLink: "#" // Buraya projenin .zip linkini ekleyebilirsin
    },
    {
        ikon: "fa-utensils", etiketler: [".NET MAUI", "C#"],
        baslik: { tr: "Restoran Sipariş Otomasyonu", en: "Restaurant Order Automation" },
        aciklama: {
            tr: "Aktif iş sahasında, masalardan daha hızlı sipariş alabilmek ve masa durumlarını takip etmek için geliştirilmiş mobil uygulama.",
            en: "A mobile app developed to speed up order taking and track table status in an active workspace."
        },
        indirmeLink: "#"
    },
    {
        ikon: "fa-newspaper", etiketler: ["AngularJS", "JavaScript", "HTML/CSS"],
        baslik: { tr: "Üniversite Dijital Gazetesi", en: "University Digital Newspaper" },
        aciklama: {
            tr: "Öğrencilerin güncel içeriklere erişmesi için takım çalışması ile geliştirilmiş dinamik ve responsive web projesi.",
            en: "A dynamic and responsive web project developed as a team to give students access to current content."
        },
        indirmeLink: "#"
    },
    {
        ikon: "fa-list-check", etiketler: ["C++", "Windows Forms"],
        baslik: { tr: "Görev Yönetimi (To-Do)", en: "Task Management (To-Do)" },
        aciklama: {
            tr: "GDI+ görsel arayüzü ile donatılmış, renk kodlu öncelik algoritmaları ve CSV dışa aktarımı barındıran masaüstü aracı.",
            en: "A desktop tool equipped with a GDI+ visual interface, color-coded priority algorithms, and CSV export."
        },
        indirmeLink: "#"
    },
    {
        ikon: "fa-unity", etiketler: ["Unreal Engine 5", "Blender 3D", "Unity"],
        baslik: { tr: "3D Oyun Tasarımları", en: "3D Game Designs" },
        aciklama: {
            tr: "Claude AI entegrasyonu (MCP) ile desteklenen, prosedürel içerik (PCG) ve blueprint oyun mekaniği tasarımları.",
            en: "Procedural content (PCG) and blueprint game mechanics supported by Claude AI integration (MCP)."
        },
        ozelSayfa: "3d-viewer.html" // 3D projeye tıklandığında açılacak sayfa
    }
];

let swiperInstance;

function renderProjects(lang) {
    if (swiperInstance) swiperInstance.destroy(true, true);
    const projeKapsayici = document.getElementById('proje-kapsayici');
    projeKapsayici.innerHTML = "";

    projelerData.forEach(proje => {
        let etiketHTML = proje.etiketler.map(e => `<span class="tech-tag">${e}</span>`).join('');

        // Eğer 3D proje ise "3D İncele" butonu, diğerleri ise "İndir" butonu koyalım
        let aksiyonButonu = proje.ozelSayfa
            ? `<a href="${proje.ozelSayfa}" class="card-btn"><i class="fa-solid fa-cube"></i> ${translations[lang].btn_view3d}</a>`
            : `<a href="${proje.indirmeLink}" class="card-btn" download><i class="fa-solid fa-download"></i> ${translations[lang].btn_download}</a>`;

        projeKapsayici.innerHTML += `
            <div class="swiper-slide">
                <div class="glass-card">
                    <div class="card-icon"><i class="fa-solid ${proje.ikon}"></i></div>
                    <h3 class="card-title">${proje.baslik[lang]}</h3>
                    <p class="card-desc">${proje.aciklama[lang]}</p>
                    <div class="tech-tags">${etiketHTML}</div>
                    <div class="card-actions">${aksiyonButonu}</div>
                </div>
            </div>`;
    });

    swiperInstance = new Swiper(".mySwiper", {
        effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", initialSlide: 1,
        coverflowEffect: { rotate: 0, stretch: 0, depth: 250, modifier: 1, slideShadows: false },
        loop: true, autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true }
    });
}

/* ================= 3. ÇOKLU DİL KONTROL MANTIĞI ================= */
let currentLang = localStorage.getItem("lang") || "tr";

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.getElementById("langToggle").innerText = lang === "tr" ? "EN" : "TR";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerText = translations[lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", translations[lang][key]);
    });

    renderProjects(lang);
    typewriterTexts = translations[lang].typewriter;
}

document.getElementById("langToggle").addEventListener("click", () => {
    applyLanguage(currentLang === "tr" ? "en" : "tr");
});

/* ================= 4. DAKTİLO EFEKTİ ================= */
let typewriterTexts = translations[currentLang].typewriter;
let textIndex = 0, charIndex = 0, isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (!typewriterTexts[textIndex]) textIndex = 0;
    const currentText = typewriterTexts[textIndex];

    if (isDeleting) charIndex--; else charIndex++;
    typewriterElement.textContent = currentText.substring(0, charIndex);

    let timeoutSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
        timeoutSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; textIndex = (textIndex + 1) % typewriterTexts.length; timeoutSpeed = 500;
    }
    setTimeout(type, timeoutSpeed);
}

/* ================= 5. SCROLL (KAYDIRMA) ANİMASYONU ================= */
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);

// Sayfa yüklendiğinde başlatılacaklar
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    setTimeout(type, 1000);
    reveal();
});
