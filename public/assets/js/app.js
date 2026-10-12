document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.desktop-nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.desktop-nav');
    const sections = [...document.querySelectorAll('main section[id]')];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));

    menuToggle?.addEventListener('click', () => {
        const open = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!open));
        nav.classList.toggle('open', !open);
    });

    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.certificate-slide');
    const status = document.querySelector('.carousel-status strong');
    const buttons = document.querySelectorAll('.carousel-button');
    let current = 0;

    const viewport = document.querySelector('.carousel-stage');
    const updateCarousel = (index) => {
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === current));
        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const offset = (viewport.clientWidth - slideWidth) / 2 - current * (slideWidth + gap);
        track.style.transform = `translateX(${offset}px)`;
        status.textContent = String(current + 1).padStart(2, '0');
    };
    buttons.forEach((button) => button.addEventListener('click', () => updateCarousel(current + (button.dataset.direction === 'next' ? 1 : -1))));
    window.addEventListener('resize', () => updateCarousel(current));
    updateCarousel(0);
});
