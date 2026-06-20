export function initApp() {
// Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

// Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

// Theme toggle (placeholder)
    // const themeToggle = document.getElementById('themeToggle');
    // const themeIcon = document.getElementById('themeIcon');
    // themeToggle.addEventListener('click', () => {
    //     document.documentElement.classList.toggle('dark');
    //     if (document.documentElement.classList.contains('dark')) {
    //         themeIcon.classList.replace('fa-moon', 'fa-sun');
    //     } else {
    //         themeIcon.classList.replace('fa-sun', 'fa-moon');
    //     }
    // });

// FAQ accordion
    document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        const isOpen = answer.classList.contains('open');
        // بستن همه
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-icon').forEach(i => {
            i.classList.remove('fa-minus');
            i.classList.add('fa-plus');
        });
        if (!isOpen) {
            answer.classList.add('open');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

// Scroll fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });
}