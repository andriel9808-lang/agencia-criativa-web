/* ========================================
   JAVASCRIPT - Agência Criativa Web
   Funcionalidades: Menu responsivo, Formulário, Smooth scroll
   ======================================== */

// ===== MENU HAMBÚRGUER RESPONSIVO =====
const menuToggle = document.querySelector('.header__menu-toggle');
const navList = document.querySelector('.header__nav-list');

// Toggle do menu ao clicar no hambúrguer
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('header__nav-list--active');
    menuToggle.classList.toggle('header__menu-toggle--active');
});

// Fecha o menu ao clicar em qualquer link de navegação
const navLinks = document.querySelectorAll('.header__nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('header__nav-list--active');
        menuToggle.classList.remove('header__menu-toggle--active');
    });
});

// ===== VALIDAÇÃO E ENVIO DO FORMULÁRIO =====
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validação básica já é feita pelo HTML5 (required)
    // Aqui você pode adicionar validações customizadas
    
    // Simula envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpa o formulário
    form.reset();
});

// ===== SMOOTH SCROLL PARA NAVEGAÇÃO =====
// Aplica scroll suave para todos os links âncora (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== DESTAQUE DO LINK ATIVO NA NAVEGAÇÃO =====
// Adiciona classe ao link da seção visível
const sections = document.querySelectorAll('section[id]');

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
        link.classList.remove('header__nav-link--active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('header__nav-link--active');
        }
    });
});