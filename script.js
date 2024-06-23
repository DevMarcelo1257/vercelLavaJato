// Script para mostrar seções ao rolar a página

// Seleciona todas as seções com a classe "section"
const sections = document.querySelectorAll('.section');

// Função para verificar se a seção está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Função para verificar se a seção está visível e mostrar
function showSections() {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.remove('hidden');
        }
    });
}

// Verifica ao carregar a página e ao rolar
window.addEventListener('load', showSections);
window.addEventListener('scroll', showSections);


// Redireciona a pagina principal para a de agendamento
document.addEventListener('DOMContentLoaded', function() {
    var agendarButton = document.getElementById('agendarServico');
    agendarButton.addEventListener('click', function() {
        window.location.href = './agendamento/agendamento.html';
    });
});