// Carousel functionality
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dotsContainer = document.querySelector('.carousel-dots');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        // Inicializar primer slide inmediatamente
        this.showSlide(this.currentSlide);
        
        // Create dots
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Start auto slide
        this.startAutoSlide();
        
        // Pause on hover
        const carousel = document.querySelector('.carousel-container');
        carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
        carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    }
    
    showSlide(index) {
        // Ocultar todos los slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Mostrar slide actual
        this.slides[index].classList.add('active');
        
        // Actualizar dots
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
    
    startAutoSlide() {
        this.stopAutoSlide(); // Limpiar intervalo previo
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Filter functionality
class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filtro-btn');
        this.projectCards = document.querySelectorAll('.proyecto-card');
        this.typeButtons = document.querySelectorAll('.btn-type');
        
        this.init();
    }
    
    init() {
        // Filter buttons
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);
                this.setActiveButton(button);
            });
        });
        
        // Type buttons (from type cards)
        this.typeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);
                this.setActiveButtonByFilter(filter);
                
                // Scroll to projects section
                document.getElementById('proyectos').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    
    filterProjects(filter) {
        this.projectCards.forEach(card => {
            if (filter === 'todos' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
    }
    
    setActiveButton(activeButton) {
        this.filterButtons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }
    
    setActiveButtonByFilter(filter) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-filter') === filter) {
                button.classList.add('active');
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
    new ProjectFilter();
    
    // Add animation to project cards
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
    
    // Observe project cards for animation
    const projectCards = document.querySelectorAll('.proyecto-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe ventajas cards for animation
    const ventajasCards = document.querySelectorAll('.ventaja-card');
    ventajasCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});