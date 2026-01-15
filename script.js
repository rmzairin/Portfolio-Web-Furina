// Smooth Scrolling
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

// Active Navigation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Water Drops Animation
function createWaterDrops() {
    const container = document.getElementById('waterDrops');
    const dropCount = 30;

    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        
        const size = Math.random() * 15 + 5;
        drop.style.width = `${size}px`;
        drop.style.height = `${size * 1.2}px`;
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 3 + 2}s`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(drop);
    }
}

// Bubbles Animation
function createBubbles() {
    const container = document.getElementById('bubbles');
    const bubbleCount = 20;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 60 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 10 + 8}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(bubble);
    }
}

// Continuous creation of water drops
setInterval(() => {
    const container = document.getElementById('waterDrops');
    if (container.children.length < 40) {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        
        const size = Math.random() * 15 + 5;
        drop.style.width = `${size}px`;
        drop.style.height = `${size * 1.2}px`;
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        container.appendChild(drop);
        
        setTimeout(() => {
            drop.remove();
        }, 5000);
    }
}, 300);

// Continuous creation of bubbles
setInterval(() => {
    const container = document.getElementById('bubbles');
    if (container.children.length < 30) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 60 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 10 + 8}s`;
        
        container.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 18000);
    }
}, 800);

// Mouse Follow Water Effect
let waterRipples = [];

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        createRipple(e.clientX, e.clientY);
    }
});

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(79, 195, 247, 0.8), transparent)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.zIndex = '999';
    ripple.style.animation = 'ripple 1s ease-out';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Card Hover Effects with Water Splash
const cards = document.querySelectorAll('.experience-card, .project-card, .stat-item, .contact-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        createWaterSplash(this);
    });
});

function createWaterSplash(element) {
    const rect = element.getBoundingClientRect();
    const splashCount = 5;
    
    for (let i = 0; i < splashCount; i++) {
        const splash = document.createElement('div');
        splash.style.position = 'fixed';
        splash.style.left = `${rect.left + Math.random() * rect.width}px`;
        splash.style.top = `${rect.top + Math.random() * rect.height}px`;
        splash.style.width = '5px';
        splash.style.height = '5px';
        splash.style.background = '#4fc3f7';
        splash.style.borderRadius = '50%';
        splash.style.pointerEvents = 'none';
        splash.style.zIndex = '999';
        splash.style.animation = `splash 0.8s ease-out`;
        
        document.body.appendChild(splash);
        
        setTimeout(() => {
            splash.remove();
        }, 800);
    }
}

// Add splash animation
const splashStyle = document.createElement('style');
splashStyle.textContent = `
    @keyframes splash {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(splashStyle);

// Parallax Effect for Sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home-content, .water-wave');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create success message
    const successMsg = document.createElement('div');
    successMsg.style.position = 'fixed';
    successMsg.style.top = '50%';
    successMsg.style.left = '50%';
    successMsg.style.transform = 'translate(-50%, -50%)';
    successMsg.style.background = 'linear-gradient(45deg, #4fc3f7, #64b5f6)';
    successMsg.style.color = '#1a2a6c';
    successMsg.style.padding = '2rem 3rem';
    successMsg.style.borderRadius = '20px';
    successMsg.style.fontSize = '1.5rem';
    successMsg.style.fontWeight = 'bold';
    successMsg.style.zIndex = '10000';
    successMsg.style.boxShadow = '0 0 50px rgba(79, 195, 247, 0.8)';
    successMsg.textContent = '✨ Message Sent Successfully! ✨';
    
    document.body.appendChild(successMsg);
    
    // Create water burst effect
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const burst = document.createElement('div');
            burst.style.position = 'fixed';
            burst.style.left = '50%';
            burst.style.top = '50%';
            burst.style.width = '10px';
            burst.style.height = '10px';
            burst.style.background = '#4fc3f7';
            burst.style.borderRadius = '50%';
            burst.style.pointerEvents = 'none';
            burst.style.zIndex = '9999';
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 5;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let posX = 0;
            let posY = 0;
            let opacity = 1;
            
            const animate = () => {
                posX += vx;
                posY += vy;
                opacity -= 0.02;
                
                burst.style.transform = `translate(${posX * 20}px, ${posY * 20}px)`;
                burst.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    burst.remove();
                }
            };
            
            document.body.appendChild(burst);
            animate();
        }, i * 20);
    }
    
    setTimeout(() => {
        successMsg.remove();
        contactForm.reset();
    }, 3000);
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.timeline-item, .experience-card, .project-card, .stat-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Initialize animations
createWaterDrops();
createBubbles();

// Cursor Trail Effect
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
    
    if (Math.random() > 0.95) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = '#4fc3f7';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '998';
        particle.style.boxShadow = '0 0 10px #4fc3f7';
        particle.style.animation = 'fadeOut 1s ease-out';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(fadeOutStyle);

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🌊 Hydro Archon Portfolio Loaded! 🌊');