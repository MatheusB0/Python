// Função para alternar a visibilidade do menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const button = document.querySelector('.toggle-btn');
    
    // Alterna a classe 'active' para o menu lateral
    sidebar.classList.toggle('active');
    
    // Alterna a classe 'active' para o conteúdo principal
    button.classList.toggle('active');
}
