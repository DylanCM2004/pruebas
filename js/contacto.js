// Clase principal para funcionalidades de contacto
class ContactoManager {
    constructor() {
        this.whatsappBtn = document.getElementById('btn-whatsapp-gigante');
        this.contactForm = document.getElementById('contact-form');
        this.motivoSelect = document.getElementById('motivo');
        this.comentarioTextarea = document.getElementById('comentario');
        
        this.init();
    }
    
    init() {
        this.setupWhatsAppButton();
        this.setupFormValidation();
        this.setupMotivoChange();
    }
    
    setupWhatsAppButton() {
        this.whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.openWhatsApp();
        });
    }
    
    // Mensaje creativo automático para WhatsApp
    generarMensajeWhatsApp() {
        const saludos = ["¡Hola!", "Buenos días", "Buenas tardes", "¡Hola!"];
        const saludo = saludos[new Date().getHours() % 4];
        
        return `${saludo} Me gustaria recibir asesoría personalizada. 


¿Podrían ayudarme con?
Cortinas y Persianas
Telas y Accesorios 
Cotización o Toma de Medidas
Asesoría en Decoración

¡Quedo atento/a a su respuesta!`;
    }
    
    openWhatsApp() {
        const mensaje = this.generarMensajeWhatsApp();
        const telefono = "3229155349";
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
    
    setupMotivoChange() {
        this.motivoSelect.addEventListener('change', (e) => {
            this.actualizarPlaceholderComentario(e.target.value);
        });
    }
    
    actualizarPlaceholderComentario(motivo) {
        const placeholders = {
            'consulta': 'Cuéntanos qué necesitas saber...',
            'cotizacion': 'Describe lo que necesitas cotizar (medidas, tipo de tela, etc.)...',
            'garantía': 'Explícanos el problema que tienes con el producto...',
            'medidas': 'Indícanos la dirección y tipo de espacio donde necesitas la toma de medidas...',
            'asesoria': 'Cuéntanos sobre tu espacio y qué estilo buscas...',
            'otro': 'Explícanos en qué podemos ayudarte...'
        };
        
        this.comentarioTextarea.placeholder = placeholders[motivo] || 'Cuéntanos en qué podemos ayudarte...';
    }
    
    setupFormValidation() {
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validarFormulario()) {
                this.enviarFormulario();
            }
        });
        
        // Validación en tiempo real
        const inputs = this.contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validarCampo(input);
            });
        });
    }
    
    validarCampo(campo) {
        const valor = campo.value.trim();
        let esValido = true;
        let mensajeError = '';
        
        switch(campo.type) {
            case 'email':
                if (valor && !this.validarEmail(valor)) {
                    esValido = false;
                    mensajeError = 'Por favor ingresa un email válido';
                }
                break;
            case 'tel':
                if (valor && !this.validarTelefono(valor)) {
                    esValido = false;
                    mensajeError = 'Por favor ingresa un teléfono válido';
                }
                break;
            default:
                if (campo.required && !valor) {
                    esValido = false;
                    mensajeError = 'Este campo es obligatorio';
                }
        }
        
        this.mostrarError(campo, esValido, mensajeError);
        return esValido;
    }
    
    validarFormulario() {
        const campos = this.contactForm.querySelectorAll('input[required], select[required], textarea[required]');
        let esValido = true;
        
        campos.forEach(campo => {
            if (!this.validarCampo(campo)) {
                esValido = false;
            }
        });
        
        return esValido;
    }
    
    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    validarTelefono(telefono) {
        const regex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
        return regex.test(telefono);
    }
    
    mostrarError(campo, esValido, mensaje) {
        // Limpiar error anterior
        const errorAnterior = campo.parentNode.querySelector('.error-message');
        if (errorAnterior) {
            errorAnterior.remove();
        }
        
        campo.style.borderColor = esValido ? '#00C851' : '#ff4444';
        
        if (!esValido) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#ff4444';
            errorDiv.style.fontSize = '0.8rem';
            errorDiv.style.marginTop = '0.3rem';
            errorDiv.textContent = mensaje;
            campo.parentNode.appendChild(errorDiv);
        }
    }
    
    enviarFormulario() {
        const formData = new FormData(this.contactForm);
        const datos = Object.fromEntries(formData);
        
        const mensaje = `📋 *Nueva Solicitud - DecorHome*
        
        *Nombre:* ${datos.nombre}
        *Ciudad:* ${datos.ciudad}
        *Dirección:* ${datos.direccion || 'No proporcionada'}
        *Email:* ${datos.email}
        *Teléfono:* ${datos.telefono}
        *Horario preferido:* ${datos.horario || 'Cualquiera'}
        *Motivo:* ${datos.motivo}

        *Mensaje:*
        ${datos.comentario}

        _Enviado desde la web_`;    
        
        const telefono = "3229155349"; // ⬅️ CAMBIAR TAMBIÉN AQUÍ
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
    
    mostrarMensajeExito() {
        // Crear mensaje de éxito
        const mensajeExito = document.createElement('div');
        mensajeExito.className = 'mensaje-exito';
        mensajeExito.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            text-align: center;
            border: 1px solid #c3e6cb;
        `;
        mensajeExito.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>¡Mensaje enviado con éxito!</strong>
            <p>Te contactaremos pronto. Mientras tanto, ¿quieres chatear por WhatsApp para una respuesta más rápida?</p>
            <button onclick="contactoManager.openWhatsApp()" style="
                background: #25D366;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 20px;
                margin-top: 0.5rem;
                cursor: pointer;
            ">
                <i class="fab fa-whatsapp"></i> Chatear ahora
            </button>
        `;
        
        // Insertar antes del formulario
        this.contactForm.parentNode.insertBefore(mensajeExito, this.contactForm);
        
        // Remover después de 8 segundos
        setTimeout(() => {
            mensajeExito.remove();
        }, 8000);
    }
}

// Initialize when DOM is loaded
let contactoManager;
document.addEventListener('DOMContentLoaded', () => {
    contactoManager = new ContactoManager();
});