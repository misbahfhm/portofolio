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
   FUTURISTIC AI CANVAS
========================= */
const canvas = document.getElementById("network");
const ctx    = canvas.getContext("2d");
let W = canvas.width  = window.innerWidth;
let H = canvas.height = window.innerHeight;

// ── Nodes (neural network neurons) ──
const NODE_COUNT  = 70;
const LINK_DIST   = 160;
const nodes = [];

class Node {
    constructor() { this.init(); }
    init() {
        this.x      = Math.random() * W;
        this.y      = Math.random() * H;
        this.vx     = (Math.random() - 0.5) * 0.45;
        this.vy     = (Math.random() - 0.5) * 0.45;
        this.r      = Math.random() * 2 + 1;
        this.pulse  = Math.random() * Math.PI * 2; // phase offset
        this.active = Math.random() < 0.2;          // some nodes "fire"
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
        this.pulse += 0.035;
        // randomly trigger firing
        if (Math.random() < 0.0008) this.active = true;
        if (this.active && Math.random() < 0.02) this.active = false;
    }
    draw(t) {
        const glow = this.active ? 1 : 0.45 + 0.3 * Math.sin(this.pulse);
        const col  = this.active ? "56,189,248" : "100,160,255";
        // outer glow ring
        if (this.active) {
            const ring = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 10);
            ring.addColorStop(0,   `rgba(56,189,248,0.35)`);
            ring.addColorStop(1,   `rgba(56,189,248,0)`);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r * 10, 0, Math.PI * 2);
            ctx.fillStyle = ring;
            ctx.fill();
        }
        // core dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${glow})`;
        ctx.fill();
    }
}

for (let i = 0; i < NODE_COUNT; i++) nodes.push(new Node());


// ── Data pulses traveling along edges ──
const pulses = [];

class Pulse {
    constructor(from, to) {
        this.from   = from;
        this.to     = to;
        this.t      = 0;         // 0 → 1 progress
        this.speed  = 0.012 + Math.random() * 0.018;
        this.active = true;
    }
    update() {
        this.t += this.speed;
        if (this.t >= 1) this.active = false;
    }
    draw() {
        const x = this.from.x + (this.to.x - this.from.x) * this.t;
        const y = this.from.y + (this.to.y - this.from.y) * this.t;
        const trail = ctx.createRadialGradient(x, y, 0, x, y, 6);
        trail.addColorStop(0,   "rgba(56,189,248,0.95)");
        trail.addColorStop(0.4, "rgba(129,140,248,0.5)");
        trail.addColorStop(1,   "rgba(56,189,248,0)");
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = trail;
        ctx.fill();
    }
}


// ── Floating hex grid (subtle) ──
function drawHexGrid() {
    const size    = 55;
    const cols    = Math.ceil(W / (size * 1.73)) + 2;
    const rows    = Math.ceil(H / (size * 1.5))  + 2;
    ctx.strokeStyle = "rgba(56,189,248,0.028)";
    ctx.lineWidth   = 0.8;
    for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
            const offset = c % 2 === 0 ? 0 : size * 0.75;
            const cx = c * size * 1.73 * 0.5;
            const cy = r * size * 1.5 + offset;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const px = cx + size * 0.5 * Math.cos(angle);
                const py = cy + size * 0.5 * Math.sin(angle);
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
        }
    }
}


// ── Scanline sweep ──
let scanY = 0;
function drawScanline() {
    scanY = (scanY + 0.6) % H;
    const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
    grad.addColorStop(0,   "rgba(56,189,248,0)");
    grad.addColorStop(0.5, "rgba(56,189,248,0.04)");
    grad.addColorStop(1,   "rgba(56,189,248,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, scanY - 40, W, 80);
}


// ── Corner brackets ──
function drawCorners() {
    const s = 36, m = 22;
    ctx.strokeStyle = "rgba(56,189,248,0.35)";
    ctx.lineWidth   = 1.5;
    const corners = [
        [m, m, 1, 1], [W - m, m, -1, 1],
        [m, H - m, 1, -1], [W - m, H - m, -1, -1]
    ];
    corners.forEach(([x, y, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(x, y + dy * s);
        ctx.lineTo(x, y);
        ctx.lineTo(x + dx * s, y);
        ctx.stroke();
    });
}


// ── Main animation loop ──
let frame = 0;
function animate() {
    ctx.clearRect(0, 0, W, H);

    // hex grid layer
    drawHexGrid();
    drawScanline();

    // edges between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx   = nodes[i].x - nodes[j].x;
            const dy   = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < LINK_DIST) {
                const alpha = (1 - dist / LINK_DIST) * 0.22;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(100,140,255,${alpha})`;
                ctx.lineWidth   = 0.8;
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();

                // occasionally spawn a pulse on active-node edges
                if (nodes[i].active && Math.random() < 0.003) {
                    pulses.push(new Pulse(nodes[i], nodes[j]));
                }
            }
        }
    }

    // update & draw nodes
    nodes.forEach(n => { n.update(); n.draw(frame); });

    // update & draw pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
        pulses[i].update();
        pulses[i].draw();
        if (!pulses[i].active) pulses.splice(i, 1);
    }

    drawCorners();

    frame++;
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    nodes.forEach(n => n.init());
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
    const data   = projectsData.filter(p => p.type === type);
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
        html += `<div class="project-card">`;
        html += `<div class="card-badge ${badge.cls}">${badge.label}</div>`;
        html += `<h3>${project.title}</h3>`;

        // ─ Company type
        if (type === "company") {
            if (project.overview) {
                const fmt = project.overview
                    .replace(/Problem:/g, "<strong>Problem:</strong>")
                    .replace(/Solution:/g, "<strong>Solution:</strong>")
                    .replace(/Impact:/g, "<strong>Impact:</strong>")
                    .trim();
                html += `<div class="overview-text">${fmt}</div>`;
            }
            if (project.role)              html += metaRow("Role", project.role);
            if (project.organization)      html += metaRow("Organization", project.organization);
            if (project.role_description)  html += metaRow("Description", project.role_description);
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
            if (project.organization) html += metaRow("University", project.organization);
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


/* =========================
   INIT — default About view
========================= */
(function init() {
    const section = document.getElementById("dynamic-content");
    section.innerHTML = `
        <div class="about-glass">
            <h2>About Me</h2>
            <p>AI Engineer with 4+ years of experience building scalable AI & ML systems
            from development to production. Experienced across AI Engineering,
            Data Science, Data Engineering, and MLOps. Delivering intelligent,
            production-ready solutions with measurable impact.</p>
        </div>`;
})();