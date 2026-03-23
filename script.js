// Form Logic
document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // UI Feedback
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    // Simulate API delay
    setTimeout(() => {
        const notification = document.getElementById('notification');
        notification.style.display = 'block';

        this.reset();
        btn.innerText = originalText;
        btn.disabled = false;

        setTimeout(() => {
            notification.style.display = 'none';
        }, 6000);
    }, 1200);
});

// Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const bsCollapseElement = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(bsCollapseElement);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});

// Sticky Navbar Effect
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'shadow-sm');
        nav.classList.remove('py-3');
    } else {
        nav.classList.add('py-3');
        nav.classList.remove('py-2', 'shadow-sm');
    }
});
