   const problemCards = [
            {
                icon: "fa-solid fa-gauge-high",
                title: "slow loading speed",
                description: "Slow websites lose visitors and damage your reputation before customers even see your content."
            },
            {
                icon: "fa-solid fa-mobile-screen-button",
                title: "poor mobile experience",
                description: "Most users browse on mobile devices - a bad mobile experience means lost customers."
            },
            {
                icon: "fa-solid fa-magnifying-glass",
                title: "No visibility online",
                description: "Without SEO optimization, your website remains invisible to potential customers in search results."
            }
        ];

        const problemGrid = document.querySelector('.problem-grid');


        problemCards.forEach(card => {
            const problem = `
            <div class="problem-card">
                <div class="icon-wrapper"><i class=" ${card.icon}"></i></div>
                <h3 class="problem-title">${card.title}</h3>
               <div class="p-card-txt-container">
                 <p class="problem-description">${card.description}.</p>
               </div>
            </div>
            `
            problemGrid.innerHTML += problem
        })

        const reasons = [{
            icon: "fa-solid fa-bolt",
            title: "fast delivery",
            description: "Quick turnaround so your business goes online without delays"
        }, {
            icon: "fa-solid fa-layer-group",
            title: "Modern Design",
            description: "Clean modern interfaces designed to attract and convert customers."
        },
        {
            icon: "fa-solid fa-mobile-screen",
            title: "mobile first design",
            description: "Websites optimized for phones, tablets, and every screen size."
        },

        {
            icon: "fa-solid fa-chart-line",
            title: "Built for growth",
            description: "Strategically built websites that help businesses grow online."
        }
        ]

        const reasonContainer = document.querySelector('.why-card-container');

        reasons.forEach(reason => {
            const reasonHtml = `
            <div class="why-card">
                <div class="why-icon-container">
                    <i class="${reason.icon}"></i>
                </div>
                <div>
                    <h3 class="reason-title">${reason.title}</h3>
                <p class="reason-description">${reason.description}</p>
                </div>
            </div>
            `

            reasonContainer.innerHTML += reasonHtml
        })


        const projects = [{
            image: "images/logistics-mockup.png",
            title: "Logistics Website",
            description: "Clean logistics platform designed to present services and improve customer inquiries",
            icons: {
                html: "fa-brands fa-html5",
                css: "fa-brands fa-css3-alt",
                js: "fa-brands fa-js"
            },
            link: "https://veritas-logistics.vercel.app/"
        },
        {
            image: "images/real-estate-website.png",
            title: "Real Estate Website",
            description: "Modern real estate website built to showcase property listings and attract potential buyers.",
            icons: {
                html: "fa-brands fa-html5",
                css: "fa-brands fa-css3-alt",
                js: "fa-brands fa-js"
            },
            link: "https://elite-estate-and-properties.vercel.app/"
        }
        ]

        const projectGrid = document.querySelector('.project-container')

        projects.forEach(project => {
            const card = `
        <div class="project-card">
                    <div class="project-img-container">
                        <img src="${project.image}" alt="veritas-logistics"
                            style="width: 400px; object-fit: fill;" class="project-img">

                        <div class="circle pinned-project">
                            <i class="fa-solid fa-thumbtack"></i>
                        </div>
                    </div>
                    <div class="project-card-text-container">
                        <h3 class="project-title">
                            ${project.title}
                        </h3>
                        <p class="problem-description">
                            ${project.description}

                        </p>
                    </div>
                    <div class="project-icons-container">
                        <div class="icon-circle"><i class="fa-brands fa-html5"></i></div>
                        <div class="icon-circle"><i class="fa-brands fa-css3-alt"></i></div>
                        <div class="icon-circle"><i class="fa-brands fa-js"></i></div>
                    </div>

                    <div class="project-cta-container">
                        <a href="${project.link}" class="project-cta">visit
                            site <span>&rarr;</span></a>
                    </div>
                </div>
        `

            projectGrid.innerHTML += card
        });

        const processSteps = [
{
    number:"01",
    icon:"fa-solid fa-magnifying-glass",
    title:"Discovery",
    description:"Understanding the business goals and project requirements before development begins."
},
{
    number:"02",
    icon:"fa-solid fa-sitemap",
    title:"Planning",
    description:"Structuring the website layout and content for clarity and user experience."
},
{
    number:"03",
    icon:"fa-solid fa-code",
    title:"Development",
    description:"Building the website with clean code, responsive design, and fast performance."
},
{
    number:"04",
    icon:"fa-solid fa-rocket",
    title:"Launch",
    description:"Final testing and delivering a fully functional website ready for visitors."
}
]

const processContainer = document.querySelector(".process-container")

processSteps.forEach(step =>{

const stepCard = `
<div class="process-step">

<div class="process-number">${step.number}</div>

<div class="process-icon">
<i class="${step.icon}"></i>
</div>

<h3 class="process-title">${step.title}</h3>

<p class="process-description">${step.description}</p>

</div>
`

processContainer.innerHTML += stepCard

})

const testimonials = [
    {
        text: "VERITAS transformed our website into a lead-generating machine. Their design is sleek and functional!",
        author: "John Doe, CEO of Logistics Co."
    },
    {
        text: "Fast delivery and amazing support! Our website went live smoothly and exceeded expectations.",
        author: "Jane Smith, Founder of Real Estate Co."
    },
    {
        text: "Modern design, responsive and easy to navigate. Highly recommended for startups and small businesses.",
        author: "Mike Johnson, Entrepreneur"
    }
];

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Mobile menu toggle
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navList = document.querySelector('.nav-list');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
    
    // Block/unblock scrolling
    if (navList.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-li a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Dark mode persistence helpers
const darkModeBtn = document.querySelector('.darkmode-btn');
const body = document.body;
const themeStorageKey = 'veritas-theme';

function applyTheme(theme) {
    const isDark = theme === 'dark';
    body.classList.toggle('dark', isDark);
    const icon = darkModeBtn.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function saveTheme(theme) {
    try {
        localStorage.setItem(themeStorageKey, theme);
    } catch {
        // ignore if storage is blocked
    }
}

// Initialize theme from localStorage (or system preference)
const savedTheme = localStorage.getItem(themeStorageKey);
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
}

// Toggle theme on button click
darkModeBtn.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
    saveTheme(nextTheme);
});

// Contact form submission (FormSubmit.co)
const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!formStatus) return;

        formStatus.textContent = 'Sending...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Thanks! Your message has been sent.';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Oops — something went wrong. Please try again.';
            }
        } catch (error) {
            formStatus.textContent = 'Network error. Please try again.';
        }
    });
}

// IntersectionObserver for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Add slide-up to specific elements
document.querySelectorAll('.pricing-card, .project-card, .why-card, .service-card2, .problem-card, .add-ons li').forEach(card => {
    card.classList.add('slide-up');
    observer.observe(card);
});