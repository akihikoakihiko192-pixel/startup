// Анимации при скролле
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));

    // Фильтры (демо)
    const filters = document.querySelectorAll('.filter-tag');
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Подсветка активной страницы в навигации
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});
