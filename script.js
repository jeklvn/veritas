// ============================================================================
// VERITAS WEBSITE - MAIN JAVASCRIPT FILE
// ============================================================================

// Configuration
const CONFIG = {
    AUTO_SLIDE_INTERVAL: 5000,
    FORM_SUBMIT_URL: 'https://formsubmit.co/veritasdigitals2@gmail.com',
    THEME_STORAGE_KEY: 'veritas-theme'
};

// ============================================================================
// PROBLEM CARDS DATA
// ============================================================================

const problemCards = [
    {
        icon: "fa-solid fa-gauge-high",
        title: "Slow Loading Speed",
        description: "Slow websites lose visitors and damage your reputation before customers even see your content."
    },
    {
        icon: "fa-solid fa-mobile-screen-button",
        title: "Poor Mobile Experience",
        description: "Most users browse on mobile devices - a bad mobile experience means lost customers."
    },
    {
        icon: "fa-solid fa-magnifying-glass",
        title: "No Visibility Online",
        description: "Without SEO optimization, your website remains invisible to potential customers in search results."
    }
];

// ============================================================================
// SERVICES DATA
// ============================================================================

const services = [
    {
        icon: "fa-solid fa-laptop-code",
        title: "Web Development",
        description: "Custom coded websites built with modern technologies, fast performance, and user-friendly interfaces tailored to your business goals.",
        link: "#contact"
    },
    {
        icon: "fa-solid fa-code",
        title: "Web Design",
        description: "Beautiful, modern design that attracts customers and creates a professional brand image that builds trust and credibility online.",
        link: "#contact"
    },
    {
        icon: "fa-solid fa-gauge-high",
        title: "Website Optimization",
        description: "Improve loading speed, user experience, and search rankings through technical optimization and strategic improvements to boost conversions.",
        link: "#contact"
    },
    {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Website Maintenance / Support",
        description: "Ongoing support to keep your website secure, updated, and running smoothly with regular backups and technical assistance available.",
        link: "#contact"
    }
];

// ============================================================================
// WHY CHOOSE DATA
// ============================================================================

const reasons = [
    {
        icon: "fa-solid fa-bolt",
        title: "Fast Delivery",
        description: "Quick turnaround so your business goes online without delays"
    },
    {
        icon: "fa-solid fa-layer-group",
        title: "Modern Design",
        description: "Clean modern interfaces designed to attract and convert customers."
    },
    {
        icon: "fa-solid fa-mobile-screen",
        title: "Mobile First Design",
        description: "Websites optimized for phones, tablets, and every screen size."
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Built for Growth",
        description: "Strategically built websites that help businesses grow online."
    }
];

// ============================================================================
// PROJECTS DATA
// ============================================================================

const projects = [
    {
        image: "images/logistics-mockup.png",
        title: "Logistics Website",
        description: "Clean logistics platform designed to present services and improve customer inquiries",
        link: "https://veritas-logistics.vercel.app/"
    },
    {
        image: "images/real-estate-website.png",
        title: "Real Estate Website",
        description: "Modern real estate website built to showcase property listings and attract potential buyers.",
        link: "https://elite-estate-and-properties.vercel.app/"
    }
];

// ============================================================================
// PROCESS STEPS DATA
// ============================================================================

const processSteps = [
    {
        number: "01",
        icon: "fa-solid fa-magnifying-glass",
        title: "Discovery",
        description: "Understanding the business goals and project requirements before development begins."
    },
    {
        number: "02",
        icon: "fa-solid fa-sitemap",
        title: "Planning",
        description: "Structuring the website layout and content for clarity and user experience."
    },
    {
        number: "03",
        icon: "fa-solid fa-code",
        title: "Development",
        description: "Building the website with clean code, responsive design, and fast performance."
    },
    {
        number: "04",
        icon: "fa-solid fa-rocket",
        title: "Launch",
        description: "Final testing and delivering a fully functional website ready for visitors."
    }
];

// ============================================================================
// TESTIMONIALS DATA
// ============================================================================

const testimonials = [
    {
        text: "VERITAS transformed our website into a lead-generating machine. Their design is sleek and functional!",
        author: "Chinedu Okafor, CEO of Logistics Co."
    },
    {
        text: "Fast delivery and amazing support! Our website went live smoothly and exceeded expectations.",
        author: "Adeyemi Adebayo, Founder of Real Estate Co."
    },
    {
        text: "Modern design, responsive and easy to navigate. Highly recommended for startups and small businesses.",
        author: "Zainab Hassan, Entrepreneur"
    }
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create element with classes
 */
function createElement(tag, classes = '', html = '') {
    const element = document.createElement(tag);
    if (classes) element.className = classes;
    if (html) element.innerHTML = html;
    return element;
}

/**
 * Safely append elements
 */
function appendElements(parent, elements) {
    const fragment = document.createDocumentFragment();
    elements.forEach(el => fragment.appendChild(el));
    parent.appendChild(fragment);
}

// ============================================================================
// RENDER PROBLEM CARDS
// ============================================================================

function renderProblemCards() {
    const problemGrid = document.getElementById('problemGrid');
    if (!problemGrid) return;

    const cards = problemCards.map((card, index) => {
        const cardEl = createElement('div', 'problem-card slide-up');
        cardEl.style.animationDelay = `${index * 0.15}s`;
        cardEl.innerHTML = `
            <div class="icon-wrapper">
                <i class="${card.icon}"></i>
            </div>
            <h3 class="problem-title">${card.title}</h3>
            <div class="p-card-txt-container">
                <p class="problem-description">${card.description}</p>
            </div>
        `;
        return cardEl;
    });

    appendElements(problemGrid, cards);
}

// ============================================================================
// RENDER SERVICES
// ============================================================================

function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    const cards = services.map((service, index) => {
        const cardEl = createElement('div', 'service-card2 slide-up');
        cardEl.style.animationDelay = `${index * 0.15}s`;
        cardEl.innerHTML = `
            <div class="icon-container2">
                <i class="${service.icon}"></i>
            </div>
            <div class="card-txt-container2">
                <p class="service-title"><strong>${service.title}</strong></p>
                <p class="service-description">${service.description}</p>
            </div>
            <a href="${service.link}" class="service-cta">Get started <span>&rarr;</span></a>
        `;
        return cardEl;
    });

    appendElements(servicesGrid, cards);
}

// ============================================================================
// RENDER WHY CHOOSE REASONS
// ============================================================================

function renderReasons() {
    const reasonsContainer = document.getElementById('reasonsContainer');
    if (!reasonsContainer) return;

    const cards = reasons.map((reason, index) => {
        const cardEl = createElement('div', 'why-card slide-up');
        cardEl.style.animationDelay = `${index * 0.15}s`;
        cardEl.innerHTML = `
            <div class="why-icon-container">
                <i class="${reason.icon}"></i>
            </div>
            <div>
                <h3 class="reason-title">${reason.title}</h3>
                <p class="reason-description">${reason.description}</p>
            </div>
        `;
        return cardEl;
    });

    appendElements(reasonsContainer, cards);
}

// ============================================================================
// RENDER PROJECTS
// ============================================================================

function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    if (!projectGrid) return;

    const cards = projects.map((project, index) => {
        const cardEl = createElement('div', 'project-card slide-up');
        cardEl.style.animationDelay = `${index * 0.15}s`;
        cardEl.innerHTML = `
            <div class="project-img-container">
                <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
                <div class="circle pinned-project">
                    <i class="fa-solid fa-thumbtack"></i>
                </div>
            </div>
            <div class="project-card-text-container">
                <h3 class="project-title">${project.title}</h3>
                <p class="problem-description">${project.description}</p>
            </div>
            <div class="project-icons-container">
                <div class="icon-circle"><i class="fa-brands fa-html5"></i></div>
                <div class="icon-circle"><i class="fa-brands fa-css3-alt"></i></div>
                <div class="icon-circle"><i class="fa-brands fa-js"></i></div>
            </div>
            <div class="project-cta-container">
                <a href="${project.link}" class="project-cta" target="_blank" rel="noopener noreferrer">
                    Visit site <span>&rarr;</span>
                </a>
            </div>
        `;
        return cardEl;
    });

    appendElements(projectGrid, cards);
}

// ============================================================================
// RENDER PROCESS STEPS
// ============================================================================

function renderProcessSteps() {
    const processContainer = document.getElementById('processContainer');
    if (!processContainer) return;

    const steps = processSteps.map((step, index) => {
        const stepEl = createElement('div', 'process-step slide-up');
        stepEl.style.animationDelay = `${index * 0.15}s`;
        stepEl.innerHTML = `
            <div class="process-number">${step.number}</div>
            <div class="process-icon">
                <i class="${step.icon}"></i>
            </div>
            <h3 class="process-title">${step.title}</h3>
            <p class="process-description">${step.description}</p>
        `;
        return stepEl;
    });

    appendElements(processContainer, steps);
}

// ============================================================================
// TESTIMONIALS SLIDER
// ============================================================================

function initTestimonialSlider() {
    const sliderContainer = document.getElementById('testimonialSlider');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!sliderContainer || !dotsContainer) return;

    // Render testimonial slides
    const slides = testimonials.map((testimonial, index) => {
        const slideEl = createElement('div', `testimonial-slide fade-in ${index === 0 ? 'active' : ''}`);
        slideEl.style.animationDelay = `${index * 0.2}s`;
        slideEl.innerHTML = `
            <div class="testimonial-card">
                <blockquote class="testimonial-quote">
                    "${testimonial.text}"
                </blockquote>
                <cite class="testimonial-author">${testimonial.author}</cite>
            </div>
        `;
        return slideEl;
    });

    appendElements(sliderContainer, slides);

    // Render dots
    const dots = testimonials.map((_, index) => {
        const dotEl = createElement('span', `dot ${index === 0 ? 'active' : ''}`);
        dotEl.dataset.slide = index;
        return dotEl;
    });

    appendElements(dotsContainer, dots);

    // Slider functionality
    let currentSlide = 0;
    const allSlides = sliderContainer.querySelectorAll('.testimonial-slide');
    const allDots = dotsContainer.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-nav .prev');
    const nextBtn = document.querySelector('.testimonial-nav .next');

    function showSlide(index) {
        allSlides.forEach(slide => slide.classList.remove('active'));
        allDots.forEach(dot => dot.classList.remove('active'));
        allSlides[index].classList.add('active');
        allDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % allSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + allSlides.length) % allSlides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    allDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto slide
    setInterval(nextSlide, CONFIG.AUTO_SLIDE_INTERVAL);
}

// ============================================================================
// MOBILE MENU
// ============================================================================

function initMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-li a');

    if (!hamburgerBtn || !navList) return;

    hamburgerBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : 'auto';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// ============================================================================
// DARK MODE
// ============================================================================

function initDarkMode() {
    const darkModeBtn = document.querySelector('.darkmode-btn');
    const body = document.body;

    if (!darkModeBtn) return;

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        body.classList.toggle('dark', isDark);
        const icon = darkModeBtn.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme);
        } catch (e) {
            console.warn('LocalStorage not available');
        }
    }

    // Always default to light mode on initial load
    const savedTheme = localStorage.getItem(CONFIG.THEME_STORAGE_KEY);
    
    // First time visitor - default to light
    if (!savedTheme) {
        applyTheme('light');
        saveTheme('light');
    } else {
        // User has a saved preference - use it
        applyTheme(savedTheme);
    }

    // Toggle on button click
    darkModeBtn.addEventListener('click', () => {
        const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(nextTheme);
        saveTheme(nextTheme);
    });
}

// ============================================================================
// CONTACT FORM
// ============================================================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const formStatus = contactForm.querySelector('.form-status');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate form
        if (!contactForm.name.value.trim()) {
            formStatus.textContent = 'Please enter your name';
            formStatus.style.color = '#EF4444';
            return;
        }
        if (!contactForm.email.value.trim()) {
            formStatus.textContent = 'Please enter your email';
            formStatus.style.color = '#EF4444';
            return;
        }
        if (!contactForm.message.value.trim()) {
            formStatus.textContent = 'Please enter your message';
            formStatus.style.color = '#EF4444';
            return;
        }

        const formData = new FormData(contactForm);
        const originalText = submitBtn.textContent;

        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formStatus.textContent = '';

            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                formStatus.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
                formStatus.style.color = '#22C55E';
                contactForm.reset();
                
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.textContent = '✗ Error sending message. Please try again or contact us directly.';
            formStatus.style.color = '#EF4444';
            console.error('Form error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// ============================================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================================================

function initIntersectionObserver() {
    if (!window.IntersectionObserver) return;

    // Animate hero section immediately
    const heroElements = document.querySelectorAll('.hero-page .fade-in');
    heroElements.forEach(el => {
        el.classList.add('visible');
    });

    // Add scroll animation class to elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            '.fade-in:not(.hero-page .fade-in), .slide-up, .problem-card, .service-card2, ' +
            '.why-card, .project-card, .process-step, .pricing-card, .contact-item'
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', animateOnScroll);
    } else {
        animateOnScroll();
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderProblemCards();
    renderServices();
    renderReasons();
    renderProjects();
    renderProcessSteps();

    // Initialize features
    initTestimonialSlider();
    initMobileMenu();
    initDarkMode();
    initContactForm();
    initIntersectionObserver();
});

// ============================================================================
// SMOOTH SCROLL POLYFILL SUPPORT
// ============================================================================

if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
