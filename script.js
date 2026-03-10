/* =========================
   i18n TRANSLATIONS
========================= */
const i18n = {
    en: {
        /* nav & hero */
        portfolio:        "Portfolio",
        aboutMe:          "About Me",
        projects:         "Projects",
        competitions:     "Competitions",
        thesis:           "Thesis Research",
        academy:          "Academy",
        certifications:   "Certifications",
        prev:             "Prev",
        next:             "Next",
        evidence:         "Evidence",
        noEntries:        "No entries available yet.",
        noCerts:          "No certifications added yet.",
        langHint:         "🌐 Language",
        topbarRole:       "AI Engineer",

        /* typing text */
        typingText: "AI Engineering • Data Science • MLOps",

        /* about */
        aboutTitle: "About Me",
        aboutBody:  "AI Engineer with 4+ years of experience building scalable AI & ML systems from development to production. Experienced across AI Engineering, Data Science, Data Engineering, and MLOps. Delivering intelligent, production-ready solutions with measurable impact.",

        /* section labels */
        sectionProjects:     "Projects",
        sectionCompetitions: "Competitions",
        sectionThesis:       "Thesis Research",
        sectionAcademy:      "Academy Programs",
        sectionCerts:        "Certifications",

        /* meta labels */
        labelRole:             "Role",
        labelField:            "Field",
        labelDuration:         "Duration",
        labelResponsibilities: "Responsibilities",
        labelSkills:           "Skills",
        labelTools:            "Tools",
        labelAchievement:      "Achievement",
        labelProposal:         "Proposal",
        labelHeldBy:           "Held By",
        labelMethods:          "Methods",
        labelYear:             "Year",
        labelLevel:            "Level",
        labelInstitution:      "Institution",
        labelObjectives:       "Objectives",
        labelHighlights:       "Highlights",

        /* badge labels */
        badgeCompany:     "Company Project",
        badgePoc:         "Proof of Concept",
        badgeCompetition: "Competition",
        badgeThesis:      "Thesis Research",
        badgeAcademy:     "Academy",
        badgeCert:        "Certification",
    },

    id: {
        /* nav & hero */
        portfolio:        "Portofolio",
        aboutMe:          "Tentang Saya",
        projects:         "Proyek",
        competitions:     "Kompetisi",
        thesis:           "Penelitian Tugas Akhir",
        academy:          "Akademi",
        certifications:   "Sertifikasi",
        prev:             "Sebelum",
        next:             "Berikut",
        evidence:         "Bukti",
        noEntries:        "Belum ada entri yang tersedia.",
        noCerts:          "Belum ada sertifikasi yang ditambahkan.",
        langHint:         "🌐 Bahasa",
        topbarRole:       "AI Engineer",

        /* typing text */
        typingText: "AI Engineering • Data Science • MLOps",

        /* about */
        aboutTitle: "Tentang Saya",
        aboutBody:  "AI Engineer dengan pengalaman 4+ tahun membangun sistem AI & ML yang skalabel dari tahap pengembangan hingga produksi. Berpengalaman di bidang AI Engineering, Data Science, Data Engineering, dan MLOps. Menghadirkan solusi cerdas siap produksi dengan dampak yang terukur.",

        /* section labels */
        sectionProjects:     "Proyek",
        sectionCompetitions: "Kompetisi",
        sectionThesis:       "Penelitian Tugas Akhir",
        sectionAcademy:      "Program Akademi",
        sectionCerts:        "Sertifikasi",

        /* meta labels */
        labelRole:             "Peran",
        labelField:            "Bidang",
        labelDuration:         "Durasi",
        labelResponsibilities: "Tanggung Jawab",
        labelSkills:           "Keahlian",
        labelTools:            "Alat",
        labelAchievement:      "Pencapaian",
        labelProposal:         "Proposal",
        labelHeldBy:           "Diselenggarakan Oleh",
        labelMethods:          "Metode",
        labelYear:             "Tahun",
        labelLevel:            "Jenjang",
        labelInstitution:      "Institusi",
        labelObjectives:       "Tujuan",
        labelHighlights:       "Sorotan",

        /* badge labels */
        badgeCompany:     "Proyek Perusahaan",
        badgePoc:         "Proof of Concept",
        badgeCompetition: "Kompetisi",
        badgeThesis:      "Penelitian TA",
        badgeAcademy:     "Akademi",
        badgeCert:        "Sertifikasi",
    }
};

/* active language */
let lang = "en";

function t(key) {
    return (i18n[lang] && i18n[lang][key]) || i18n.en[key] || key;
}

function setLang(l) {
    lang = l;

    /* update toggle buttons */
    document.getElementById("btnEN").classList.toggle("active", l === "en");
    document.getElementById("btnID").classList.toggle("active", l === "id");

    /* re-render all [data-i18n] static elements */
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = t(key);
    });

    /* restart typing effect */
    restartTyping();

    /* re-render current view */
    if (currentView === "about") {
        showAbout(true);
    } else if (currentView) {
        showProjects(currentView, true);
    }
}


/* =========================
   TYPING EFFECT
========================= */
let typingTimer   = null;
let typingElement = null;

function restartTyping() {
    if (typingTimer) clearTimeout(typingTimer);
    typingElement = document.querySelector(".typing");
    if (!typingElement) return;
    typingElement.textContent = "";
    let index = 0;
    const text = t("typingText");

    function typeStep() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            typingTimer = setTimeout(typeStep, 55);
        }
    }
    typeStep();
}

window.addEventListener("load", restartTyping);


/* =========================
   CIRCUIT BOARD BACKGROUND
========================= */
const canvas = document.getElementById("network");
const ctx    = canvas.getContext("2d");
let W = canvas.width  = window.innerWidth;
let H = canvas.height = window.innerHeight;

const COLORS = {
    sky:    [56,  189, 248],
    violet: [129, 140, 248],
    mint:   [52,  211, 153],
    gold:   [251, 191, 36],
};
const COLOR_LIST = Object.values(COLORS);

function rgba(c, a) { return `rgba(${c[0]},${c[1]},${c[2]},${a})`; }
function lerp(a, b, t2) { return a + (b - a) * t2; }
function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(rand(min, max + 1)); }
function pickColor() { return COLOR_LIST[randInt(0, COLOR_LIST.length - 1)]; }

const CELL = 38;
let COLS, ROWS;
let grid = [];

function buildGrid() {
    COLS = Math.ceil(W / CELL) + 2;
    ROWS = Math.ceil(H / CELL) + 2;
    grid = [];
    for (let r = 0; r < ROWS; r++) {
        grid[r] = [];
        for (let c = 0; c < COLS; c++) {
            grid[r][c] = {
                x:       c * CELL,
                y:       r * CELL,
                active:  Math.random() < 0.55,
                dot:     Math.random() < 0.18,
                color:   pickColor(),
            };
        }
    }
}
buildGrid();

const traces = [];

function buildTraces() {
    traces.length = 0;
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS - 1; c++) {
            if (grid[r][c].active && grid[r][c + 1].active && Math.random() < 0.48) {
                traces.push({
                    x1: grid[r][c].x,     y1: grid[r][c].y,
                    x2: grid[r][c+1].x,   y2: grid[r][c].y,
                    color: grid[r][c].color,
                    alpha: rand(0.06, 0.18),
                });
            }
        }
    }
    for (let r = 0; r < ROWS - 1; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c].active && grid[r+1][c].active && Math.random() < 0.48) {
                traces.push({
                    x1: grid[r][c].x,   y1: grid[r][c].y,
                    x2: grid[r][c].x,   y2: grid[r+1][c].y,
                    color: grid[r][c].color,
                    alpha: rand(0.06, 0.18),
                });
            }
        }
    }
}
buildTraces();

const signals = [];
const MAX_SIGNALS = 55;

class Signal {
    constructor() { this.spawn(); }
    spawn() {
        if (traces.length === 0) return;
        const tr   = traces[randInt(0, traces.length - 1)];
        this.x1    = tr.x1; this.y1 = tr.y1;
        this.x2    = tr.x2; this.y2 = tr.y2;
        this.t     = 0;
        this.speed = rand(0.004, 0.014);
        this.color = tr.color;
        this.size  = rand(2.5, 5);
        this.tail  = rand(0.12, 0.28);
        this.alive = true;
        this.glow  = rand(0.7, 1.0);
    }
    update() {
        this.t += this.speed;
        if (this.t >= 1 + this.tail) { this.alive = false; }
    }
    draw() {
        const head = Math.min(this.t, 1);
        const tail = Math.max(this.t - this.tail, 0);
        const hx = lerp(this.x1, this.x2, head);
        const hy = lerp(this.y1, this.y2, head);
        const tx = lerp(this.x1, this.x2, tail);
        const ty = lerp(this.y1, this.y2, tail);
        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0,   rgba(this.color, 0));
        grad.addColorStop(0.6, rgba(this.color, 0.35 * this.glow));
        grad.addColorStop(1,   rgba(this.color, 0.9 * this.glow));
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth   = this.size * 0.6;
        ctx.lineCap     = "round";
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();
        if (this.t <= 1) {
            const g = ctx.createRadialGradient(hx, hy, 0, hx, hy, this.size * 3);
            g.addColorStop(0,   rgba(this.color, 0.9 * this.glow));
            g.addColorStop(0.4, rgba(this.color, 0.35 * this.glow));
            g.addColorStop(1,   rgba(this.color, 0));
            ctx.beginPath();
            ctx.arc(hx, hy, this.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(hx, hy, this.size * 0.55, 0, Math.PI * 2);
            ctx.fillStyle = rgba(this.color, this.glow);
            ctx.fill();
        }
    }
}

for (let i = 0; i < MAX_SIGNALS; i++) {
    const s = new Signal();
    s.t = Math.random();
    signals.push(s);
}

const dots = [];

function buildDots() {
    dots.length = 0;
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c].active && grid[r][c].dot) {
                dots.push({
                    x:     grid[r][c].x,
                    y:     grid[r][c].y,
                    color: grid[r][c].color,
                    phase: rand(0, Math.PI * 2),
                    r:     rand(2.5, 5),
                });
            }
        }
    }
}
buildDots();

function drawDots(f) {
    dots.forEach(d => {
        const pulse = 0.25 + 0.2 * Math.sin(d.phase + f * 0.018);
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 5);
        g.addColorStop(0,   rgba(d.color, pulse * 0.5));
        g.addColorStop(1,   rgba(d.color, 0));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(d.color, 0.55 + 0.2 * Math.sin(d.phase + f * 0.018));
        ctx.fill();
    });
}

function drawTraces() {
    traces.forEach(tr => {
        ctx.beginPath();
        ctx.strokeStyle = rgba(tr.color, tr.alpha);
        ctx.lineWidth   = 1.2;
        ctx.lineCap     = "square";
        ctx.moveTo(tr.x1, tr.y1);
        ctx.lineTo(tr.x2, tr.y2);
        ctx.stroke();
    });
}

const blobs = [
    { x: W * 0.15, y: H * 0.2,  r: 480, color: COLORS.violet, phase: 0    },
    { x: W * 0.85, y: H * 0.75, r: 420, color: COLORS.sky,    phase: 2.09 },
    { x: W * 0.5,  y: H * 0.5,  r: 380, color: COLORS.mint,   phase: 4.18 },
];

function drawBlobs(f) {
    blobs.forEach(b => {
        const a = 0.028 + 0.012 * Math.sin(b.phase + f * 0.006);
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0,   rgba(b.color, a));
        g.addColorStop(0.5, rgba(b.color, a * 0.4));
        g.addColorStop(1,   rgba(b.color, 0));
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    });
}

const chips = [];

function buildChips() {
    chips.length = 0;
    const count = randInt(6, 10);
    for (let i = 0; i < count; i++) {
        const cw = randInt(3, 6) * CELL;
        const ch = randInt(2, 4) * CELL;
        const cx = randInt(1, COLS - 5) * CELL;
        const cy = randInt(1, ROWS - 4) * CELL;
        chips.push({ x: cx, y: cy, w: cw, h: ch, color: pickColor(), phase: rand(0, Math.PI * 2) });
    }
}
buildChips();

function drawChips(f) {
    chips.forEach(ch => {
        const a = 0.08 + 0.04 * Math.sin(ch.phase + f * 0.012);
        ctx.strokeStyle = rgba(ch.color, a);
        ctx.lineWidth   = 1;
        ctx.strokeRect(ch.x, ch.y, ch.w, ch.h);
        ctx.beginPath();
        ctx.strokeStyle = rgba(ch.color, a * 0.5);
        ctx.moveTo(ch.x + ch.w / 2, ch.y);
        ctx.lineTo(ch.x + ch.w / 2, ch.y + ch.h);
        ctx.moveTo(ch.x, ch.y + ch.h / 2);
        ctx.lineTo(ch.x + ch.w, ch.y + ch.h / 2);
        ctx.stroke();
    });
}

function drawHUD(f) {
    const s = 40, m = 22;
    const a = 0.3 + 0.08 * Math.sin(f * 0.025);
    ctx.strokeStyle = rgba(COLORS.sky, a);
    ctx.lineWidth   = 1.2;
    [[m,m,1,1],[W-m,m,-1,1],[m,H-m,1,-1],[W-m,H-m,-1,-1]].forEach(([x,y,dx,dy]) => {
        ctx.beginPath();
        ctx.moveTo(x, y + dy * s);
        ctx.lineTo(x, y);
        ctx.lineTo(x + dx * s, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = rgba(COLORS.sky, a + 0.2);
        ctx.fill();
    });
}

let frame = 0;

function animate() {
    ctx.clearRect(0, 0, W, H);
    drawBlobs(frame);
    drawTraces();
    drawChips(frame);
    drawDots(frame);
    for (let i = signals.length - 1; i >= 0; i--) {
        signals[i].update();
        signals[i].draw();
        if (!signals[i].alive) { signals[i] = new Signal(); }
    }
    drawHUD(frame);
    frame++;
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    blobs[0].x = W * 0.15; blobs[0].y = H * 0.2;
    blobs[1].x = W * 0.85; blobs[1].y = H * 0.75;
    blobs[2].x = W * 0.5;  blobs[2].y = H * 0.5;
    buildGrid(); buildTraces(); buildDots(); buildChips();
});


/* =========================
   CURSOR GLOW
========================= */
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top  = e.clientY + "px";
});


/* =========================
   LIGHTBOX
========================= */
let lightboxImages = [];
let lightboxIndex  = 0;

const imageModal  = document.getElementById("imageModal");
const lbCount     = document.getElementById("lbCount");

function openLightbox(images, idx) {
    lightboxImages = images;
    lightboxIndex  = idx;
    renderLightbox();
    imageModal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function renderLightbox() {
    const src = lightboxImages[lightboxIndex];
    const isVideo = src.match(/\.(mp4|webm|ogg)$/i);
    const container = document.querySelector(".lightbox-inner");

    const old = document.getElementById("modalImage") || document.getElementById("modalVideo");
    if (old) old.remove();

    if (isVideo) {
        const vid = document.createElement("video");
        vid.id = "modalVideo";
        vid.src = src;
        vid.controls = true;
        vid.autoplay = true;
        vid.className = "lightbox-img";
        vid.style.maxHeight = "80vh";
        container.insertBefore(vid, container.querySelector(".lightbox-nav"));
    } else {
        const img = document.createElement("img");
        img.id = "modalImage";
        img.src = src;
        img.className = "lightbox-img";
        img.alt = "Evidence";
        container.insertBefore(img, container.querySelector(".lightbox-nav"));
    }

    lbCount.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function lightboxPrev() {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    renderLightbox();
}

function lightboxNext() {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    renderLightbox();
}

function closeLightbox() {
    imageModal.classList.remove("open");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
    if (!imageModal.classList.contains("open")) return;
    if (e.key === "ArrowLeft")  lightboxPrev();
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "Escape")     closeLightbox();
});

imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) closeLightbox();
});


/* =========================
   BADGE CONFIG  (dynamic, uses t())
========================= */
function getBadgeMap() {
    return {
        company:       { cls: "badge-company",     label: t("badgeCompany")     },
        poc:           { cls: "badge-poc",          label: t("badgePoc")         },
        competition:   { cls: "badge-competition", label: t("badgeCompetition") },
        thesis:        { cls: "badge-thesis",       label: t("badgeThesis")      },
        academy:       { cls: "badge-academy",      label: t("badgeAcademy")     },
        certification: { cls: "badge-certification",label: t("badgeCert")        },
    };
}


/* =========================
   BUILD EVIDENCE GALLERY
========================= */
function buildGallery(evidence, cls = "evidence-gallery") {
    if (!evidence || evidence.length === 0) return "";

    const thumbs = evidence.map((src, i) => {
        const isVideo = src.match(/\.(mp4|webm|ogg)$/i);

        if (isVideo) {
            return `
            <div class="${cls === "cert-gallery" ? "cert-thumb" : "evidence-thumb"} evidence-video-thumb"
                 data-gallery-src="${src}" data-gallery-index="${i}" data-is-video="true">
                <video src="${src}" muted playsinline preload="metadata"
                       style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;"></video>
                <div class="thumb-overlay video-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                        <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)"/>
                        <polygon points="10,8 16,12 10,16" fill="white"/>
                    </svg>
                </div>
            </div>`;
        }

        return `
        <div class="${cls === "cert-gallery" ? "cert-thumb" : "evidence-thumb"}"
             data-gallery-src="${src}" data-gallery-index="${i}">
            <img src="${src}" alt="Evidence ${i + 1}" loading="lazy">
            <div class="thumb-overlay"></div>
        </div>`;
    }).join("");

    return `
        <div class="evidence-section">
            <div class="evidence-label">${t("evidence")}</div>
            <div class="${cls}">${thumbs}</div>
        </div>`;
}


/* =========================
   SCROLL REVEAL
========================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => { entry.target.classList.add("show"); }, i * 80);
        }
    });
}, { threshold: 0.08 });

function applyReveal() {
    document.querySelectorAll(".project-card, .cert-thumb-standalone").forEach(el => {
        el.classList.add("hidden");
        revealObserver.observe(el);
    });
}


/* =========================
   GALLERY CLICK DELEGATION
========================= */
document.addEventListener("click", (e) => {
    const thumb = e.target.closest("[data-gallery-src]");
    if (thumb) {
        const container = thumb.closest(".evidence-gallery, .cert-gallery");
        if (!container) return;
        const allThumbs = [...container.querySelectorAll("[data-gallery-src]")];
        const images    = allThumbs.map(t2 => t2.dataset.gallerySrc);
        const idx       = parseInt(thumb.dataset.galleryIndex, 10);
        openLightbox(images, idx);
    }
});


/* =========================
   SHOW PROJECTS
========================= */
let currentView = null;

function showProjects(type, noTransition) {
    document.getElementById("aboutBtn")?.classList.remove("active");
    document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("onclick")?.includes(`'${type}'`));
    });

    const section = document.getElementById("dynamic-content");

    const render = () => {
        section.innerHTML = "";
        if (type === "certification") {
            buildCertificationView(section);
        } else {
            buildProjectsView(type, section);
        }
        section.classList.remove("fade-out");
        applyReveal();
        currentView = type;
    };

    if (noTransition) {
        render();
    } else {
        section.classList.add("fade-out");
        setTimeout(render, 300);
    }
}

/* ─── CERTIFICATIONS VIEW ──────────────────────────── */
function buildCertificationView(section) {
    const certs = projectsData.filter(p => p.type === "certification");
    const all   = certs.flatMap(c => c.evidence || []);

    let html = `<div class="section-header">
        <h2>${t("sectionCerts")}</h2>
        <div class="section-line"></div>
    </div>`;

    if (all.length === 0) {
        html += `<p style='color:var(--muted)'>${t("noCerts")}</p>`;
    } else {
        html += `<div class="cert-gallery">`;
        all.forEach((img, i) => {
            html += `
                <div class="cert-thumb" data-gallery-src="${img}" data-gallery-index="${i}">
                    <img src="${img}" alt="Certification ${i + 1}" loading="lazy">
                    <div class="thumb-overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                    </div>
                </div>`;
        });
        html += `</div>`;
    }

    section.innerHTML = html;
}

/* ─── PROJECTS VIEW ────────────────────────────────── */
function buildProjectsView(type, section) {
    const badgeMap = getBadgeMap();

    const data = type === "company"
        ? projectsData.filter(p => p.type === "company" || p.type === "poc")
        : projectsData.filter(p => p.type === type);

    const sectionLabels = {
        company:     t("sectionProjects"),
        competition: t("sectionCompetitions"),
        thesis:      t("sectionThesis"),
        academy:     t("sectionAcademy"),
    };

    let html = `<div class="section-header">
        <h2>${sectionLabels[type] || type}</h2>
        <div class="section-line"></div>
    </div>`;

    if (data.length === 0) {
        html += `<p style='color:var(--muted)'>${t("noEntries")}</p>`;
        section.innerHTML = html;
        return;
    }

    html += `<div class="projects-grid">`;

    data.forEach(project => {
        /* pick localised content */
        const lc        = (project.i18n && project.i18n[lang]) || {};
        const cardBadge = badgeMap[project.type] || badgeMap.company;

        const title           = lc.title           || project.title;
        const overview        = lc.overview        || project.overview;
        const role            = lc.role            || project.role;
        const field           = lc.field           || project.field;
        const duration        = lc.duration        || project.duration;
        const responsibilities= lc.responsibilities|| project.responsibilities;
        const skills          = lc.skills          || project.skills;
        const tools           = project.tools;          /* tools stay the same */
        const achievement     = lc.achievement     || project.achievement;
        const proposal        = lc.proposal        || project.proposal;
        const held_by         = lc.held_by         || project.held_by;
        const methods         = lc.methods         || project.methods;
        const year            = project.year;
        const level           = lc.level           || project.level;
        const institution     = lc.institution     || project.institution;
        const objectives      = lc.objectives      || project.objectives;
        const highlights      = lc.highlights      || project.highlights;

        html += `<div class="project-card">`;
        html += `<div class="card-badge ${cardBadge.cls}">${cardBadge.label}</div>`;
        html += `<h3>${title}</h3>`;

        /* ─ Company / POC */
        if (type === "company") {
            if (overview) {
                const fmt = overview
                    .replace(/Overview:/g,          "<strong>Overview:</strong>")
                    .replace(/Ikhtisar:/g,           "<strong>Ikhtisar:</strong>")
                    .replace(/Problem:/g,            "<strong>Problem:</strong>")
                    .replace(/Masalah:/g,            "<strong>Masalah:</strong>")
                    .replace(/Delivered Solution:/g, "<strong>Delivered Solution:</strong>")
                    .replace(/Solusi yang Diberikan:/g,"<strong>Solusi yang Diberikan:</strong>")
                    .replace(/Impact:/g,             "<strong>Impact:</strong>")
                    .replace(/Dampak:/g,             "<strong>Dampak:</strong>")
                    .trim();
                html += `<div class="overview-text">${fmt}</div>`;
            }
            if (role)              html += metaRow(t("labelRole"),             role);
            if (field)             html += metaRow(t("labelField"),            field);
            if (duration)          html += metaRow(t("labelDuration"),         duration);
            if (responsibilities)  html += metaRow(t("labelResponsibilities"), responsibilities);
            if (skills)            html += metaRow(t("labelSkills"),           skills);
            if (tools)             html += metaRow(t("labelTools"),            tools);
        }

        /* ─ Competition */
        if (type === "competition") {
            if (overview)           html += `<div class="overview-text">${overview.trim()}</div>`;
            if (duration)           html += metaRow(t("labelDuration"),         duration);
            if (achievement)        html += metaRow(t("labelAchievement"),      `🏆 ${achievement}`);
            if (proposal)           html += metaRow(t("labelProposal"),          proposal);
            if (held_by)            html += metaRow(t("labelHeldBy"),            held_by);
            if (responsibilities)   html += metaRow(t("labelResponsibilities"),  responsibilities);
            if (methods)            html += metaRow(t("labelMethods"),           methods);
            if (skills)             html += metaRow(t("labelSkills"),            skills);
            if (tools)              html += metaRow(t("labelTools"),             tools);
        }

        /* ─ Thesis */
        if (type === "thesis") {
            if (year)         html += metaRow(t("labelYear"),        year);
            if (level)        html += metaRow(t("labelLevel"),       level);
            if (institution)  html += metaRow(t("labelInstitution"), institution);
            if (objectives)   html += metaRow(t("labelObjectives"),  objectives);
            if (skills)       html += metaRow(t("labelSkills"),      skills);
            if (tools)        html += metaRow(t("labelTools"),       tools);
        }

        /* ─ Academy */
        if (type === "academy") {
            if (overview)   html += `<div class="overview-text">${overview.trim()}</div>`;
            if (duration)   html += metaRow(t("labelDuration"),   duration);
            if (role)       html += metaRow(t("labelRole"),        role);
            if (held_by)    html += metaRow(t("labelHeldBy"),      held_by);
            if (highlights) html += metaRow(t("labelHighlights"),  highlights);
        }

        /* ─ Evidence */
        if (project.evidence && project.evidence.length > 0) {
            html += `<div class="card-divider"></div>`;
            html += buildGallery(project.evidence, "evidence-gallery");
        }

        html += `</div>`;
    });

    html += `</div>`;
    section.innerHTML = html;
}

function metaRow(label, value) {
    return `<div class="meta-row">
        <span class="meta-label">${label}</span>
        <span class="meta-value">${value}</span>
    </div>`;
}


/* =========================
   SHOW ABOUT
========================= */
function showAbout(noTransition) {
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    document.getElementById("aboutBtn")?.classList.add("active");

    const section = document.getElementById("dynamic-content");

    const render = () => {
        section.innerHTML = `
            <div class="about-glass">
                <h2>${t("aboutTitle")}</h2>
                <p>${t("aboutBody")}</p>
            </div>`;
        section.classList.remove("fade-out");
        currentView = "about";
    };

    if (noTransition) {
        render();
    } else {
        section.classList.add("fade-out");
        setTimeout(render, 300);
    }
}


/* =========================
   INIT
========================= */
(function init() {
    showAbout(true);
})();