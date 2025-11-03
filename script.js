// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe pet cards
const petCards = document.querySelectorAll('.pet-card');
petCards.forEach(card => {
    observer.observe(card);
});

// Observe service items
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    observer.observe(item);
});

// Form submission handler
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Show success message (in a real app, you'd send this to a server)
    alert(`Thank you, ${name}! We've received your message and will get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Adopt button handlers
const adoptButtons = document.querySelectorAll('.pet-card button');
adoptButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const petCard = e.target.closest('.pet-card');
        const petName = petCard.querySelector('h3').textContent;
        
        // Show adoption interest message
        alert(`Thank you for your interest in adopting ${petName}! Please fill out the contact form below and mention ${petName} in your message.`);
        
        // Scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill message
        const messageField = document.getElementById('message');
        messageField.value = `I'm interested in adopting ${petName}. `;
        messageField.focus();
    });
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('border-b-2', 'border-blue-900');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('border-b-2', 'border-blue-900');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console welcome message
console.log('%c Welcome to Haven Adoption Center! 🐾', 'color: #4cc9f0; font-size: 20px; font-weight: bold;');
console.log('%c Every pet deserves a loving home! ', 'color: #2563eb; font-size: 14px;');