document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão (a página não será recarregada)

    // Pega os valores dos campos de login
    const username = document.getElementById("login-username").value;  // Nome de usuário
    const password = document.getElementById("login-password").value;  // Senha

    // Recupera os dados do usuário armazenados no localStorage
    const usuario = JSON.parse(localStorage.getItem("usuario"));  // Recupera o objeto do usuário, se existir

    // Verifica se o usuário existe e se a senha está correta
    if (usuario && usuario.nome === username && usuario.senha === password) {
        alert('Login bem-sucedido!');  // Se os dados estiverem corretos, exibe a mensagem de sucesso
        // Aqui você pode redirecionar para outra página ou exibir informações adicionais do usuário
    } else {
        alert('Nome de usuário ou senha incorretos.');  // Caso contrário, exibe a mensagem de erro
    }
});
