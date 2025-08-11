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
