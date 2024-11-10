document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Pega os valores dos campos de cadastro
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const categoria = document.getElementById("categoria").value;
    const senha = document.getElementById("password").value;

    // Cria um objeto do usuário
    const usuario = {
        nome: nome,
        email: email,
        categoriaFavorita: categoria,
        senha: senha // Salva a senha do usuário
    };

    // Armazena o usuário no localStorage (transforma o objeto em uma string JSON)
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Exibe mensagem de sucesso
    document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";

    // Oculta o formulário de cadastro
    document.getElementById("formCadastro").style.display = "none";

    // Exibe o formulário de login
    document.getElementById("formLogin").style.display = "block";
});
