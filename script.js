function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

document.querySelector('.menu-mobile').addEventListener('click', toggleMenu);

// Validação do formulário de ouvidoria
document.querySelector('.ouvidoria-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Seleciona os campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Seleciona a div de mensagem
    const formMessage = document.getElementById('form-message');

    // Validação básica
    if (!nome || !email || !telefone || !assunto || !mensagem) {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return;
    }

    // Validação de e-mail simples
    if (!email.includes('@') || !email.includes('.')) {
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return;
    }

    // Se tudo estiver válido, exibe mensagem de sucesso
    formMessage.textContent = 'Mensagem enviada com sucesso!';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    formMessage.style.display = 'block';

    // Limpa o formulário após o envio
    this.reset();
});

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