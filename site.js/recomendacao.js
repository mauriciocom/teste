// Função para recomendar produtos com base na categoria favorita do usuário
function recomendarProdutos() {
    // Recupera o usuário do localStorage
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        document.getElementById("mensagem").innerText = "Nenhum usuário cadastrado.";
        return;
    }

    // Lista de produtos disponíveis no site
    const produtos = [
        { id: 1, nome: "Bolsa Tote", categoria: "bolsas" },
        { id: 2, nome: "Bolsa Transversal", categoria: "bolsas" },
        { id: 3, nome: "Nécessaire Compacta", categoria: "necessaires" },
        { id: 4, nome: "Estojo de Viagem", categoria: "necessaires" },
        { id: 5, nome: "Mochila Casual", categoria: "mochilas" },
        { id: 6, nome: "Mochila Escolar", categoria: "mochilas" }
    ];

    // Filtra os produtos de acordo com a categoria favorita do usuário
    const produtosRecomendados = produtos.filter(produto => produto.categoria === usuario.categoriaFavorita);

    // Elemento onde as recomendações serão exibidas
    const listaRecomendacoes = document.getElementById("listaRecomendacoes");
    listaRecomendacoes.innerHTML = "";

    // Exibe os produtos recomendados na lista
    produtosRecomendados.forEach(produto => {
        const item = document.createElement("li");
        item.textContent = produto.nome;
        listaRecomendacoes.appendChild(item);
    });
}

// Chama a função de recomendação ao carregar a página
window.onload = recomendarProdutos;
