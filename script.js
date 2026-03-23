document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate Hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
    });

    // Section Switching Logic
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            
            // Update Active Nav Item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Active Page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                }
            });

            // Close menu
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => span.style.transform = 'none');
            spans[1].style.opacity = '1';

            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 5%';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'var(--white)';
        }
    });
});
