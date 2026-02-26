/* =========================
   TYPING EFFECT
========================= */
const text = "AI Engineering • Data Science • MLOps";
const typingElement = document.querySelector(".typing");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 55);
    }
}
window.onload = typeEffect;


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
function lerp(a, b, t) { return a + (b - a) * t; }
function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(rand(min, max + 1)); }
function pickColor() { return COLOR_LIST[randInt(0, COLOR_LIST.length - 1)]; }


/* ── Grid settings ───────────────────────────────────── */
const CELL = 38;   // grid cell size in px
let COLS, ROWS;
let grid = [];     // grid[row][col] = node data

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
                active:  Math.random() < 0.55,   // whether this node is part of circuit
                dot:     Math.random() < 0.18,   // solder dot
                color:   pickColor(),
            };
        }
    }
}
buildGrid();


/* ── Trace segments (horizontal + vertical paths) ───── */
// A trace goes from node A → node B along grid lines
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


/* ── Signal pulses traveling along traces ────────────── */
const signals = [];
const MAX_SIGNALS = 55;

class Signal {
    constructor() { this.spawn(); }
    spawn() {
        // pick a random trace to travel on
        if (traces.length === 0) return;
        const tr   = traces[randInt(0, traces.length - 1)];
        this.x1    = tr.x1; this.y1 = tr.y1;
        this.x2    = tr.x2; this.y2 = tr.y2;
        this.t     = 0;
        this.speed = rand(0.004, 0.014);
        this.color = tr.color;
        this.size  = rand(2.5, 5);
        this.tail  = rand(0.12, 0.28);   // tail length as fraction of trace
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

        // tail gradient line
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

        // glowing head dot
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
    s.t = Math.random();   // stagger start
    signals.push(s);
}


/* ── Pulsing solder dots ─────────────────────────────── */
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

function drawDots(t) {
    dots.forEach(d => {
        const pulse = 0.25 + 0.2 * Math.sin(d.phase + t * 0.018);
        // outer glow
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 5);
        g.addColorStop(0,   rgba(d.color, pulse * 0.5));
        g.addColorStop(1,   rgba(d.color, 0));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        // core
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(d.color, 0.55 + 0.2 * Math.sin(d.phase + t * 0.018));
        ctx.fill();
    });
}


/* ── Draw static traces ──────────────────────────────── */
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


/* ── Ambient glow blobs ──────────────────────────────── */
const blobs = [
    { x: W * 0.15, y: H * 0.2,  r: 480, color: COLORS.violet, phase: 0    },
    { x: W * 0.85, y: H * 0.75, r: 420, color: COLORS.sky,    phase: 2.09 },
    { x: W * 0.5,  y: H * 0.5,  r: 380, color: COLORS.mint,   phase: 4.18 },
];

function drawBlobs(t) {
    blobs.forEach(b => {
        const a = 0.028 + 0.012 * Math.sin(b.phase + t * 0.006);
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


/* ── IC chip rectangles ──────────────────────────────── */
const chips = [];

function buildChips() {
    chips.length = 0;
    const count = randInt(6, 10);
    for (let i = 0; i < count; i++) {
        const cw = randInt(3, 6) * CELL;
        const ch = randInt(2, 4) * CELL;
        const cx = randInt(1, COLS - 5) * CELL;
        const cy = randInt(1, ROWS - 4) * CELL;
        chips.push({
            x: cx, y: cy, w: cw, h: ch,
            color: pickColor(),
            phase: rand(0, Math.PI * 2),
        });
    }
}
buildChips();

function drawChips(t) {
    chips.forEach(ch => {
        const a = 0.08 + 0.04 * Math.sin(ch.phase + t * 0.012);
        ctx.strokeStyle = rgba(ch.color, a);
        ctx.lineWidth   = 1;
        ctx.strokeRect(ch.x, ch.y, ch.w, ch.h);

        // inner cross lines
        ctx.beginPath();
        ctx.strokeStyle = rgba(ch.color, a * 0.5);
        ctx.moveTo(ch.x + ch.w / 2, ch.y);
        ctx.lineTo(ch.x + ch.w / 2, ch.y + ch.h);
        ctx.moveTo(ch.x, ch.y + ch.h / 2);
        ctx.lineTo(ch.x + ch.w, ch.y + ch.h / 2);
        ctx.stroke();
    });
}


/* ── HUD corners ─────────────────────────────────────── */
function drawHUD(t) {
    const s = 40, m = 22;
    const a = 0.3 + 0.08 * Math.sin(t * 0.025);
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


/* ── Main loop ───────────────────────────────────────── */
let frame = 0;

function animate() {
    ctx.clearRect(0, 0, W, H);

    drawBlobs(frame);
    drawTraces();
    drawChips(frame);
    drawDots(frame);

    // update & draw signals
    for (let i = signals.length - 1; i >= 0; i--) {
        signals[i].update();
        signals[i].draw();
        if (!signals[i].alive) {
            signals[i] = new Signal();   // respawn immediately
        }
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
    buildGrid();
    buildTraces();
    buildDots();
    buildChips();
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
const lightboxImg = document.getElementById("modalImage");
const lbCount     = document.getElementById("lbCount");

function openLightbox(images, idx) {
    lightboxImages = images;
    lightboxIndex  = idx;
    renderLightbox();
    imageModal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function renderLightbox() {
    lightboxImg.src = lightboxImages[lightboxIndex];
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

// keyboard nav
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
   BADGE CONFIG
========================= */
const badgeMap = {
    company:       { cls: "badge-company",       label: "Company Project" },
    poc:           { cls: "badge-poc",            label: "Proof of Concept" },
    competition:   { cls: "badge-competition",   label: "Competition"     },
    thesis:        { cls: "badge-thesis",         label: "Thesis Research" },
    academy:       { cls: "badge-academy",        label: "Academy"         },
    certification: { cls: "badge-certification",  label: "Certification"   },
};


/* =========================
   BUILD EVIDENCE GALLERY
========================= */
function buildGallery(evidence, cls = "evidence-gallery") {
    if (!evidence || evidence.length === 0) return "";

    const thumbs = evidence.map((img, i) => `
        <div class="${cls === "cert-gallery" ? "cert-thumb" : "evidence-thumb"}" 
             data-gallery-src="${img}" data-gallery-index="${i}">
            <img src="${img}" alt="Evidence ${i + 1}" loading="lazy">
            <div class="thumb-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
            </div>
        </div>
    `).join("");

    return `
        <div class="evidence-section">
            <div class="evidence-label">Evidence / Screenshots</div>
            <div class="${cls}">${thumbs}</div>
        </div>`;
}


/* =========================
   SCROLL REVEAL
========================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, i * 80);
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
        const images    = allThumbs.map(t => t.dataset.gallerySrc);
        const idx       = parseInt(thumb.dataset.galleryIndex, 10);
        openLightbox(images, idx);
    }
});


/* =========================
   SHOW PROJECTS FUNCTION
========================= */
let currentType = null;

function showProjects(type) {
    // update nav active state
    document.getElementById("aboutBtn")?.classList.remove("active");
    document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("onclick")?.includes(`'${type}'`));
    });


    const section = document.getElementById("dynamic-content");
    section.classList.add("fade-out");

    setTimeout(() => {
        section.innerHTML = "";

        if (type === "certification") {
            buildCertificationView(section);
        } else {
            buildProjectsView(type, section);
        }

        section.classList.remove("fade-out");
        applyReveal();
        currentType = type;
    }, 300);
}

/* ─── CERTIFICATIONS VIEW ──────────────────────────── */
function buildCertificationView(section) {
    const certs = projectsData.filter(p => p.type === "certification");
    const all   = certs.flatMap(c => c.evidence || []);

    let html = `<div class="section-header">
        <h2>Certifications</h2>
        <div class="section-line"></div>
    </div>`;

    if (all.length === 0) {
        html += "<p style='color:var(--muted)'>No certifications added yet.</p>";
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
    const data = type === "company"
    ? projectsData.filter(p => p.type === "company" || p.type === "poc")
    : projectsData.filter(p => p.type === type);

    const badge  = badgeMap[type] || { cls: "", label: type };
    const labels = {
        company:     "Projects",
        competition: "Competitions",
        thesis:      "Thesis Research",
        academy:     "Academy Programs",
    };

    let html = `<div class="section-header">
        <h2>${labels[type] || type}</h2>
        <div class="section-line"></div>
    </div>`;

    if (data.length === 0) {
        html += "<p style='color:var(--muted)'>No entries available yet.</p>";
        section.innerHTML = html;
        return;
    }

    html += `<div class="projects-grid">`;

    data.forEach(project => {
        const cardBadge = badgeMap[project.type] || badge; 
        html += `<div class="project-card">`;
        html += `<div class="card-badge ${cardBadge.cls}">${cardBadge.label}</div>`;
        html += `<h3>${project.title}</h3>`;

        // ─ Company type
        if (type === "company") {
            if (project.overview) {
                const fmt = project.overview
                    .replace(/Overview:/g, "<strong>Overview:</strong>")
                    .replace(/Problem:/g, "<strong>Problem:</strong>")
                    .replace(/Delivered Solution:/g, "<strong>Delivered Solution:</strong>")
                    .replace(/Impact:/g, "<strong>Impact:</strong>")
                    .trim();
                html += `<div class="overview-text">${fmt}</div>`;
            }
            if (project.role)              html += metaRow("Role", project.role);
            if (project.field)             html += metaRow("Field", project.field);
            if (project.duration)          html += metaRow("Duration", project.duration);
            if (project.responsibilities)  html += metaRow("Responsibilities", project.responsibilities);
            if (project.skills)            html += metaRow("Skills", project.skills);
            if (project.tools)             html += metaRow("Tools", project.tools);
        }

        // ─ Competition type
        if (type === "competition") {
            if (project.overview) html += `<div class="overview-text">${project.overview.trim()}</div>`;
            if (project.duration)       html += metaRow("Duration", project.duration);
            if (project.achievement)    html += metaRow("Achievement", `🏆 ${project.achievement}`);
            if (project.proposal)       html += metaRow("Proposal", project.proposal);
            if (project.held_by)        html += metaRow("Held By", project.held_by);
            if (project.responsibilities) html += metaRow("Responsibilities", project.responsibilities);
            if (project.methods)        html += metaRow("Methods", project.methods);
            if (project.skills)         html += metaRow("Skills", project.skills);
            if (project.tools)          html += metaRow("Tools", project.tools);
        }

        // ─ Thesis type
        if (type === "thesis") {
            if (project.year)         html += metaRow("Year", project.year);
            if (project.level)        html += metaRow("Level", project.level);
            if (project.institution)  html += metaRow("Institution", project.institution);
            if (project.objectives)   html += metaRow("Objectives", project.objectives);
            if (project.skills)       html += metaRow("Skills", project.skills);
            if (project.tools)        html += metaRow("Tools", project.tools);
        }

        // ─ Academy type
        if (type === "academy") {
            if (project.overview)     html += `<div class="overview-text">${project.overview.trim()}</div>`;
            if (project.duration)     html += metaRow("Duration", project.duration);
            if (project.role)         html += metaRow("Role", project.role);
            if (project.held_by)      html += metaRow("Held By", project.held_by);
            if (project.highlights)   html += metaRow("Highlights", project.highlights);
        }

        // ─ Evidence gallery
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

function showAbout() {
    // clear active dari nav
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    // set active di tombol about
    document.getElementById("aboutBtn")?.classList.add("active");

    const section = document.getElementById("dynamic-content");
    section.classList.add("fade-out");

    setTimeout(() => {
        section.innerHTML = `
            <div class="about-glass">
                <h2>About Me</h2>
                <p>AI Engineer with 4+ years of experience building scalable AI & ML systems
                from development to production. Experienced across AI Engineering,
                Data Science, Data Engineering, and MLOps. Delivering intelligent,
                production-ready solutions with measurable impact.</p>
            </div>`;
        section.classList.remove("fade-out");
    }, 300);
}

/* =========================
   INIT — default About view
========================= */
(function init() {
    showAbout();
})();