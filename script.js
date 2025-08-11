 class PortfolioSite {
            constructor() {
                this.init();
            }

            init() {
                this.setupNavigation();
                this.setupScrollEffects();
                this.setupFormHandling();
                this.setupAnimations();
                this.hideLoading();
            }

            setupNavigation() {
                const navLinks = document.querySelectorAll('.nav-link');
                const pages = document.querySelectorAll('.page');

                navLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.getAttribute('href').substring(1);
                        this.showPage(targetId, navLinks, pages, link);
                    });
                });
                // Handle CTA button
                const ctaButton = document.querySelector('.cta-button');
                if (ctaButton) {
                    ctaButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.showPage('contact', navLinks, pages, document.querySelector('[href="#contact"]'));
                    });
                }
            }
            showPage(targetId, navLinks, pages, activeLink) {
                // Show loading
                const loading = document.getElementById('loading');
                loading.classList.add('show');

                setTimeout(() => {
                    // Hide all pages
                    pages.forEach(page => page.classList.remove('active'));
                    // Show target page
                    document.getElementById(targetId).classList.add('active');
                    
                    // Update navigation
                    navLinks.forEach(link => link.classList.remove('active'));
                    activeLink.classList.add('active');
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                    
                    // Hide loading
                    loading.classList.remove('show');
                }, 300);
            }

            setupScrollEffects() {
                const navbar = document.getElementById('navbar');
                
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
            }

            setupFormHandling() {
                const form = document.getElementById('contact-form');
                if (form) {
                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.handleFormSubmit(e.target);
                    });
                }
            }

            handleFormSubmit(form) {
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                // Show success message
                this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
            }

            showNotification(message, type) {
                const notification = document.createElement('div');
                notification.className = `notification ${type}`;
                notification.textContent = message;
                
                Object.assign(notification.style, {
                    position: 'fixed',
                    top: '100px',
                    right: '20px',
                    background: type === 'success' ? '#10b981' : '#ef4444',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    zIndex: '10000',
                    boxShadow
: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: '1'
                });
                document.body.appendChild(notification);
                setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
            setupAnimations() {
                const pages = document.querySelectorAll('.page');
                pages.forEach(page => {
                    page.addEventListener('animationend', () => {
                        page.classList.remove('fade-in');
                    });
                });
            }
            hideLoading() {
                const loading = document.getElementById('loading');
                loading.classList.remove('show');
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            new PortfolioSite();
        });
        
                // Skills Preview Hover Effect
        const skillsPreview = document.getElementById('skillsPreview');
        const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Express'];
        
        skillsPreview.addEventListener('mouseenter', () => {
            const skillTags = document.querySelector('.skill-tags');
            skillTags.innerHTML = '';
            skills.forEach(skill => {
                const tag = document.createElement('span');
                tag.className = 'skill-tag';
                tag.textContent = skill;
                skillTags.appendChild(tag);
            });
        });