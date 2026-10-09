const numeroWhatsApp = "5579996439719";

const produtos = [

    {
        nome: "Camisa Chelsea Retrô",

        tamanho: "M",

        estado: "Excelente",

        descricao: "Camisa original e bem conservada.",

        preco: "R$ 70,00",

        imagem: "imagens/ChelseaFrente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Barcelona 22/23",

        tamanho: "M",

        estado: "Bom",

        descricao: "Camisa bem conservada.",

        preco: "R$ 40,00",

        imagem: "imagens/BarcelonaFrente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Seleção de Vôlei",

        tamanho: "G",

        estado: "Excelente",

        descricao: "Camisa bem conservada, original e pouco usada.",

        preco: "R$ 110,00",

        imagem: "imagens/BrasilFrente.jpg",

        disponivel: true
    },



    {
        nome: "Camisa Brasil Azul",

        tamanho: "M",

        estado: "Bom",

        descricao: "Bem conservada.",

        preco: "R$ 35,00",

        imagem: "imagens/BrasilAzulFrente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Santos Neymar Jr. 24/25",

        tamanho: "M",

        estado: "Muito bom",

        descricao: "Usada poucas vezes e bem conservada.",

        preco: "R$ 40,00",

        imagem: "imagens/SantosFrente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Barcelona 24/25",

        tamanho: "G",

        estado: "Muito bom",

        descricao: "Camisa bem conservada.",

        preco: "R$ 45,00",

        imagem: "imagens/BarcelonaPtFrente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Al-Nassr CR7",

        tamanho: "M",

        estado: "Bom",

        descricao: "Camisa em bom estado de conservação.",

        preco: "R$ 30,00",

        imagem: "imagens/AlNassrFrente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Nike",

        tamanho: "G",

        estado: "Bom",

        descricao: "Camisa em bom estado de conservação.",

        preco: "R$ 30,00",

        imagem: "imagens/Nike2Frente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Nike",

        tamanho: "G",

        estado: "Bom",

        descricao: "Camisa em bom estado de conservação.",

        preco: "R$ 30,00",

        imagem: "imagens/Nike1Frente.jpg",

        disponivel: true
    },


    {
        nome: "Camisa Adidas",

        tamanho: "M",

        estado: "Excelente",

        descricao: "Pouco uso e muito bem conservada.",

        preco: "R$ 30,00",

        imagem: "imagens/AdidasFrente.jpg",

        disponivel: true
    },


    {
        nome: "Moletom Preto",

        tamanho: "G",

        estado: "Bem Usado",

        descricao: "Moletom preto com estampa nas costas.",

        preco: "R$ 55,00",

        imagem: "imagens/casacoP.png",

        disponivel: true
    },


    {
        nome: "Casaco/Corta Vento",

        tamanho: "M",

        estado: "Excelente",

        descricao: "Pouco uso e muito bem conservada.",

        preco: "R$ 70,00",

        imagem: "imagens/CasacoM.png",

        disponivel: true
    },


    {
        nome: "Moletom Vermelho",

        tamanho: "G",

        estado: "Excelente",

        descricao: "Muito bem conservada e bem confortável.",

        preco: "R$ 65,00",

        imagem: "imagens/CasacoV.png",

        disponivel: true
    }

];


// CARDS

function carregarProdutos() {

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";


    produtos.forEach((produto, indice) => {

        const card = document.createElement("div");

        card.classList.add("produto");


        // Status

        const statusTexto = produto.disponivel
            ? "Disponível"
            : "Vendido";


        const statusClasse = produto.disponivel
            ? "status-disponivel"
            : "status-vendido";


        card.innerHTML = `

            <div class="produto-imagem">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <span class="status status-card ${statusClasse}">
                    ${statusTexto}
                </span>

            </div>


            <div class="produto-info">

                <h2>
                    ${produto.nome}
                </h2>

                <p class="produto-tamanho">
                    Tamanho: ${produto.tamanho}
                </p>

                <strong>
                    ${produto.preco}
                </strong>


                <button
                    class="botao-detalhes"
                    onclick="mostrarDetalhes(${indice})"
                >
                    Ver detalhes
                </button>

            </div>

        `;


        catalogo.appendChild(card);

    });

}


// ABRIR MODAL

function mostrarDetalhes(indice) {

    const produto = produtos[indice];


    // Imagem

    document.getElementById("modal-imagem").src =
        produto.imagem;


    document.getElementById("modal-imagem").alt =
        produto.nome;


    // Informações

    document.getElementById("modal-nome").textContent =
        produto.nome;


    document.getElementById("modal-tamanho").textContent =
        `Tamanho: ${produto.tamanho}`;


    document.getElementById("modal-estado").textContent =
        `Estado: ${produto.estado}`;


    document.getElementById("modal-descricao").textContent =
        produto.descricao;


    document.getElementById("modal-preco").textContent =
        produto.preco;


    // Status

    const status = document.getElementById("modal-status");


    if (produto.disponivel) {

        status.textContent = "Disponível";

        status.className = "status status-disponivel";

    }

    else {

        status.textContent = "Vendido";

        status.className = "status status-vendido";

    }


    

    const botaoWhatsApp =
        document.getElementById("botao-whatsapp");


    if (produto.disponivel) {

        botaoWhatsApp.style.display = "block";

        botaoWhatsApp.classList.remove("desabilitado");

        botaoWhatsApp.textContent =
            "💬 Tenho interesse";


        botaoWhatsApp.onclick = function() {

            const mensagem =
                `Olá! Tenho interesse na peça "${produto.nome}", ` +
                `tamanho ${produto.tamanho}, no valor de ${produto.preco}. ` +
                `Ela ainda está disponível?`;


            const link =
                `https://wa.me/${numeroWhatsApp}` +
                `?text=${encodeURIComponent(mensagem)}`;


            window.open(link, "_blank");

        };

    }

    else {
        botaoWhatsApp.style.display = "none";
    }

    
    // Mostrar modal

    document.getElementById("modal").style.display = "flex";

}


// FECHAR MODAL

function fecharModal() {

    document.getElementById("modal").style.display =
        "none";

}


// FECHAR CLICANDO FORA DO MODAL


window.onclick = function(event) {

    const modal = document.getElementById("modal");


    if (event.target === modal) {

        fecharModal();

    }

};


// FECHAR COM ESC

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharModal();

    }

});


// CARREGAR PRODUTOS

carregarProdutos();
