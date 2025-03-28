// Menu de Navegação
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

document.querySelector('.menu-mobile').addEventListener('click', toggleMenu);

// Formulário de ouvidoria
document.querySelector('.ouvidoria-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const formMessage = document.getElementById('form-message');

    // Validação de dados
    if (!nome || !email || !telefone || !assunto || !mensagem) {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return;
    }

    // Se válido, exibe mensagem de sucesso
    formMessage.textContent = 'Mensagem enviada com sucesso!';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    formMessage.style.display = 'block';
    this.reset();
});

// Validação do telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let telefone = e.target.value.replace(/\D/g, '');

    if (telefone.length > 2) {
        telefone = `(${telefone.substring(0, 2)}) ${telefone.substring(2)}`;
    }
    if (telefone.length > 10) {
        telefone = `${telefone.substring(0, 10)}-${telefone.substring(10, 14)}`;
    }

    e.target.value = telefone;
});

// Move o menu de navegação com a página
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
