/* =====================
   SKILL BAR ANIMATION
   Animates bars into view when
   the skills section is scrolled to
   ===================== */
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width') + '%';
                bar.style.width = targetWidth;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
}

/* =====================
   ACTIVE NAV LINK
   Highlights the nav link matching
   the currently visible section
   ===================== */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
}

/* =====================
   SCROLL FADE-IN
   Fades in project cards and
   skill groups as they enter view
   ===================== */
function initScrollFade() {
    const targets = document.querySelectorAll('.project-card, .skill-group, .about-grid');

    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));
}

/* =====================
   CONTACT FORM
   Basic client-side validation
   and submission feedback
   ===================== */
function initContactForm() {
    const btn = document.getElementById('form-submit');
    const feedback = document.getElementById('form-feedback');

    if (!btn) return;

    btn.addEventListener('click', () => {
        const name    = document.getElementById('form-name').value.trim();
        const email   = document.getElementById('form-email').value.trim();
        const message = document.getElementById('form-message').value.trim();

        if (!name || !email || !message) {
            feedback.style.color = '#fca5a5';
            feedback.textContent = 'Please fill in all fields before sending.';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.style.color = '#fca5a5';
            feedback.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simulate send (replace with real API call / EmailJS / etc.)
        btn.textContent = 'Sending…';
        btn.disabled = true;

        setTimeout(() => {
            feedback.style.color = '#6ee7b7';
            feedback.textContent = 'Message sent! I\'ll get back to you soon.';
            btn.textContent = 'Send Message';
            btn.disabled = false;
            document.getElementById('form-name').value = '';
            document.getElementById('form-email').value = '';
            document.getElementById('form-message').value = '';
        }, 1200);
    });
}

/* =====================
   ACTIVE NAV LINK STYLE
   Injected via JS to keep CSS clean
   ===================== */
function injectActiveNavStyle() {
    const style = document.createElement('style');
    style.textContent = `.nav-links a.active { color: #1a2744; font-weight: 600; }`;
    document.head.appendChild(style);
}

/* =====================
   INIT ALL
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
    injectActiveNavStyle();
    initSkillBars();
    initActiveNav();
    initScrollFade();
    initContactForm();
});