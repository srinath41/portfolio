// JavaScript Document — custom.js (full replacement)

$(window).load(function () {
    "use strict";
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
});

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');
        $('html, body').animate({ scrollTop: $(id).offset().top - nav_height + 2 }, 600);
        return false;
    });

    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax
    var parallax = function () { $(window).stellar(); };
    $(function () { parallax(); });

    // AOS
    AOS.init({ duration: 1200, once: true, disable: 'mobile' });

    // isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({ filter: '*' });
        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: { duration: 500, animationEngine: "jquery" }
            });
            return false;
        });
    });

    // Contact form validation
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: { required: true, minlength: 2 },
                email: { required: true },
                phone: { required: false },
                message: { required: true }
            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "Your name must consist of at least 2 characters"
                },
                email: { required: "This field is required" },
                message: { required: "This field is required" }
            }
        });
    });

    // Close modal on backdrop click / Escape
    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.addEventListener('click', function (e) {
                if (e.target === modal) closeProjectModal();
            });
        }
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeProjectModal();
        });
    });
});

/* ================================================================
   PROJECT DATA
   Screenshots array: first item is the primary image; add as many
   additional real screenshot paths as you have.
   ================================================================ */

const projectsData = {

    'inspectra-web': {
        title: 'Inspectra — AI Code Review Platform',
        tag: 'Full Stack · AI',
        // Add real screenshot paths to the screenshots array; fallback to single
        screenshots: [
            'img/portfolio/inspectra.png',
            'img/portfolio/inspectra-2.png',
            'img/portfolio/inspectra-3.png'
        ],
        description: 'AI-powered debugging platform using ASP.NET Core REST APIs, FastAPI microservices, MongoDB Atlas, JWT authentication, and Docker-based multi-language code execution. Integrates OpenAI GPT-4o-mini and ChromaDB for code analysis, bug detection, severity scoring, and AI-generated fix suggestions with diff previews.',
        technologies: ['ASP.NET Core', 'React.js', 'TypeScript', 'MongoDB', 'FastAPI', 'GPT-4o-mini', 'ChromaDB', 'JWT', 'Docker', 'Monaco Editor'],
        features: [
            'AI-powered code review and bug detection using GPT-4o-mini',
            'Vector search via ChromaDB for context-aware analysis',
            'Multi-language Docker-based code execution sandbox',
            'Monaco Editor IDE with real-time terminal output',
            'Severity scoring with diff-preview fix suggestions',
            'Project management and execution history tracking',
            'Quality monitoring dashboards and bug analytics'
        ],
        github: 'https://github.com/srinath41/Inspectra',
        link: null
    },

    'plant-disease': {
        title: 'Plant Disease Detection & Treatment Suggestion',
        tag: 'Deep Learning · CV',
        screenshots: [
            'img/portfolio/PlantDoc.png',
            'img/portfolio/PlantDoc-2.png',
            'img/portfolio/PlantDoc-3.png',
            'img/portfolio/PlantDoc-4.png',
            'img/portfolio/PlantDoc-5.png',
            'img/portfolio/PlantDoc-6.png',
            'img/portfolio/PlantDoc-7.png',
            'img/portfolio/PlantDoc-8.png',
        ],
        description: 'Comprehensive plant disease detection system using 5 CNN models for Corn, Cotton, Grape, Potato, and Tomato classification. Implements TensorFlow, Keras, OpenCV, and Flask-based prediction pipelines for disease diagnosis from uploaded leaf images with integrated treatment recommendations.',
        technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        features: [
            '5 specialized CNN models covering 5 major crop types',
            'OpenCV-based image preprocessing and augmentation',
            'JSON-driven treatment recommendation engine',
            'Disease-specific prevention and treatment guidance',
            'Responsive upload UI with real-time diagnosis display',
            'Prediction confidence scores per disease class'
        ],
        github: 'https://github.com/srinath41/Plant-Disease-Detection-System',
        link: null
    },

    'team-pm': {
        title: 'Team Project Management System',
        tag: 'Full Stack · Web',
        screenshots: [
            // 'img/portfolio/PMsystem.png',
            'img/portfolio/PMsystem2.png',
            'img/portfolio/PMsystem3.png',
            'img/portfolio/PMsystem4.png',
            'img/portfolio/PMsystem5.png',
            'img/portfolio/PMsystem6.png',
            'img/portfolio/PMsystem7.png',
            'img/portfolio/PMsystem8.png',
        ],
        description: 'Full-stack project management platform built on ASP.NET Core, React.js, and MongoDB using a layered Repository-Service-Controller architecture. Features JWT authentication, role-based access control, and Agile-style task and sprint management.',
        technologies: ['ASP.NET Core', 'C#', 'React.js', 'TypeScript', 'MongoDB', 'JWT', 'RBAC', 'Tailwind CSS', 'Context API'],
        features: [
            'JWT authentication and role-based access control (RBAC)',
            'Layered Repository-Service-Controller architecture',
            'REST APIs for project, task, and user management',
            'React dashboards with protected routes and Context API',
            'Task assignment, filtering, sorting, and progress tracking',
            'Async MongoDB operations with RESTful design principles',
            'Responsive Tailwind CSS UI for all screen sizes'
        ],
        github: 'https://github.com/srinath41/Team-Project-Management-with-DotNet',
        link: null
    },

    'littlelemon': {
        title: 'Little Lemon Restaurant App',
        tag: 'Full Stack · Web',
        screenshots: [
            'img/portfolio/littlelemon.png',
            'img/portfolio/littlelemon3.png',
            'img/portfolio/littlelemon4.png',
        ],
        description: 'Django-based restaurant management application with dynamic menus, online reservations, and SQLite-backed data management. Uses Django ORM, ModelForms, and URL routing to deliver a complete customer booking experience.',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'Django ORM'],
        features: [
            'Menu and Booking models with Django ORM and form validation',
            'Customer reservation workflow via ModelForms',
            'Dynamic menu pages with item categorization',
            'Admin panel for restaurant operations',
            'Django templates and URL routing for all views',
            'Deployed on PythonAnywhere'
        ],
        github: 'https://github.com/srinath41/Restaurant-WebApp',
        link: 'https://iamsrinathdev.pythonanywhere.com/'
    },

    'wordworld': {
        title: 'Word-World — Web Dictionary',
        tag: 'Web · Django',
        screenshots: [
            'img/portfolio/wordworld.png'
        ],
        description: 'Interactive web-based dictionary application with comprehensive word definitions, meanings, and usage examples. Powered by Django backend with JSON data for fast word lookup and a clean, responsive interface.',
        technologies: ['Python', 'Django', 'JSON', 'HTML', 'CSS', 'JavaScript'],
        features: [
            'Fast word search with multiple definitions',
            'Phonetic pronunciation guide',
            'Word usage examples and sentence context',
            'Word categorization and part-of-speech tags',
            'Search history tracking',
            'Mobile-friendly responsive interface'
        ],
        github: 'https://github.com/srinath41/Word-World',
        link: null
    },

    'viewquest': {
        title: 'View-Quest — Frontend Basics Quiz App',
        tag: 'Web · Vanilla JS',
        screenshots: [
            'img/portfolio/quest.png'
        ],
        description: 'Engaging quiz application designed to test and reinforce frontend development fundamentals. Features interactive multiple-choice questions, instant feedback, countdown timer, and a detailed results summary.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        features: [
            'Interactive multiple-choice quiz questions',
            'Real-time score calculation and tracking',
            'Countdown timer per question',
            'Instant right/wrong feedback',
            'Question shuffle and randomization',
            'Progress bar and results analytics'
        ],
        github: 'https://github.com/srinath41/ViewQuest',
        link: 'https://srinath41.github.io/ViewQuest/'
    },

    'weatherapp': {
        title: 'WeatherApp — Real-time Weather Dashboard',
        tag: 'Web · API',
        screenshots: [
            'img/portfolio/WeatherApp.png'
        ],
        description: 'Modern React weather application providing real-time weather info and forecasts for any location worldwide, integrated with the OpenWeatherMap API for accurate meteorological data.',
        technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
        features: [
            'Real-time current weather display',
            'Multi-day weather forecast',
            'Location search and geolocation support',
            'Temperature unit conversion (°C / °F)',
            'Weather condition icons and detailed metrics',
            'Responsive design for all devices'
        ],
        github: 'https://github.com/srinath41/WeatherApp',
        link: 'https://srinath41.github.io/WeatherApp/'
    }
};

/* ================================================================
   CAROUSEL STATE
   ================================================================ */

let carouselState = {
    slides: [],
    current: 0,
    autoTimer: null,
    AUTO_DELAY: 3200  // ms between auto-advances
};

function buildCarousel(screenshots) {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');

    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Remove old counter if any
    const oldCounter = document.querySelector('.carousel-counter');
    if (oldCounter) oldCounter.remove();

    screenshots.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Screenshot ${i + 1}`;
        slide.appendChild(img);
        track.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    // Screenshot counter badge
    if (screenshots.length > 1) {
        const counter = document.createElement('div');
        counter.className = 'carousel-counter';
        counter.id = 'carouselCounter';
        counter.textContent = `1 / ${screenshots.length}`;
        document.querySelector('.carousel-wrapper').appendChild(counter);
    }

    carouselState.slides = screenshots;
    carouselState.current = 0;
    updateCarouselUI();

    // Show/hide arrows
    const prev = document.getElementById('carouselPrev');
    const next = document.getElementById('carouselNext');
    if (screenshots.length <= 1) {
        prev.classList.add('hidden');
        next.classList.add('hidden');
        dotsContainer.style.display = 'none';
    } else {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');
        dotsContainer.style.display = 'flex';
        startAutoScroll();
    }
}

function goToSlide(index) {
    const total = carouselState.slides.length;
    carouselState.current = (index + total) % total;
    updateCarouselUI();
    resetAutoScroll();
}

function updateCarouselUI() {
    const i = carouselState.current;
    const track = document.getElementById('carouselTrack');
    track.style.transform = `translateX(-${i * 100}%)`;

    document.querySelectorAll('.carousel-dot').forEach((d, idx) => {
        d.classList.toggle('active', idx === i);
    });

    const counter = document.getElementById('carouselCounter');
    if (counter) {
        counter.textContent = `${i + 1} / ${carouselState.slides.length}`;
    }
}

function startAutoScroll() {
    stopAutoScroll();
    if (carouselState.slides.length > 1) {
        carouselState.autoTimer = setInterval(() => {
            carouselState.current = (carouselState.current + 1) % carouselState.slides.length;
            updateCarouselUI();
        }, carouselState.AUTO_DELAY);
    }
}

function stopAutoScroll() {
    if (carouselState.autoTimer) {
        clearInterval(carouselState.autoTimer);
        carouselState.autoTimer = null;
    }
}

function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
}

// Arrow click handlers (attached once on DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('carouselPrev').addEventListener('click', function () {
        goToSlide(carouselState.current - 1);
    });
    document.getElementById('carouselNext').addEventListener('click', function () {
        goToSlide(carouselState.current + 1);
    });

    // Pause on hover
    const wrapper = document.querySelector('.carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoScroll);
        wrapper.addEventListener('mouseleave', startAutoScroll);
    }

    // Touch swipe support
    let touchStartX = 0;
    if (wrapper) {
        wrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        wrapper.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                goToSlide(carouselState.current + (diff > 0 ? 1 : -1));
            }
        }, { passive: true });
    }

    // Close modal on backdrop
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeProjectModal();
        });
    }
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeProjectModal();
        if (e.key === 'ArrowRight') goToSlide(carouselState.current + 1);
        if (e.key === 'ArrowLeft')  goToSlide(carouselState.current - 1);
    });
});

/* ================================================================
   OPEN / CLOSE MODAL
   ================================================================ */

function openProjectModal(element) {
    const projectId = element.getAttribute('data-project');
    const project = projectsData[projectId];
    if (!project) return;

    // Tag
    document.getElementById('modalProjectTag').textContent = project.tag || '';

    // Title & description
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectDescription').textContent = project.description;

    // Technologies
    const techContainer = document.getElementById('modalProjectTech');
    techContainer.innerHTML = project.technologies
        .map(t => `<span class="tech-tag">${t}</span>`)
        .join('');

    // Features
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = project.features
        .map(f => `<li>${f}</li>`)
        .join('');

    // Links
    document.getElementById('modalProjectGithub').href = project.github;
    const liveLink = document.getElementById('modalProjectLink');
    if (project.link) {
        liveLink.href = project.link;
        liveLink.style.display = 'inline-flex';
    } else {
        liveLink.style.display = 'none';
    }

    // Build carousel
    buildCarousel(project.screenshots || ['img/portfolio/default.png']);

    // Show modal
    const modal = document.getElementById('projectModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    stopAutoScroll();
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}