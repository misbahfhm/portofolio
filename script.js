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
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;


/* =========================
   NEURAL NETWORK ANIMATION
========================= */

const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = 2;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
    }
}

for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = "rgba(139,92,246,0.2)";
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.move();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function showProjects(type) {

    const section = document.getElementById("dynamic-content");
    section.classList.add("fade-out");

    setTimeout(() => {

        const data = projectsData.filter(p => p.type === type);

        let html = `<h2>${type.toUpperCase()}</h2>`;

        if (data.length === 0) {
            html += "<p>No projects available.</p>";
        }

        data.forEach(project => {

            html += `<div class="project-card">`;
            html += `<h3>${project.title}</h3>`;

            if (project.overview)
                html += `<p>${project.overview}</p>`;

            if (project.role)
                html += `<p><strong>Role:</strong> ${project.role}</p>`;

            if (project.organization)
                html += `<p><strong>Organization:</strong> ${project.organization}</p>`;

            if (project.achievement)
                html += `<p><strong>Achievement:</strong> ${project.achievement}</p>`;

            if (project.skills)
                html += `<p><strong>Skills:</strong> ${project.skills}</p>`;

            if (project.tools)
                html += `<p><strong>Tools:</strong> ${project.tools}</p>`;

            if (project.evidence && project.evidence.length > 0) {
                html += `<div class="evidence-gallery">`;

                project.evidence.forEach(img => {
                    html += `<img src="${img}" class="evidence-img" alt="Project Evidence">`;
                });

                html += `</div>`;
            }

            html += `</div>`;
        });

        section.innerHTML = html;
        section.classList.remove("fade-out");

    }, 300);
}