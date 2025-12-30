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

// Navegación por espacios
class EspaciosNavigation {
    constructor() {
        this.espacioButtons = document.querySelectorAll('.espacio-btn');
        this.espacioSections = document.querySelectorAll('.espacio-section');
        
        this.init();
    }
    
    init() {
        this.espacioButtons.forEach(button => {
            button.addEventListener('click', () => {
                const espacioId = button.getAttribute('data-espacio');
                this.showEspacio(espacioId);
                this.setActiveButton(button);
                
                // Scroll suave a la sección
                document.getElementById(espacioId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }
    
    showEspacio(espacioId) {
        // Ocultar todas las secciones
        this.espacioSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar sección seleccionada
        const targetSection = document.getElementById(espacioId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    
    setActiveButton(activeButton) {
        this.espacioButtons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
    new EspaciosNavigation();
    
    // Add animation to product cards
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
    
    // Observe product cards for animation
    const productCards = document.querySelectorAll('.producto-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe espacio buttons for animation
    const espacioButtons = document.querySelectorAll('.espacio-btn');
    espacioButtons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(button);
    });
});

// Función para cargar más productos (puede expandirse)
function cargarMasProductos(espacio) {
    // Aquí puedes implementar carga dinámica de productos
    console.log(`Cargando más productos para: ${espacio}`);
}
