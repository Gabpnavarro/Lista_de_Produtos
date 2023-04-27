let produtos = {};

function adicionarProduto() {
    let nomeProduto = document.getElementById("produto").value;
    let quantidadeProduto = parseInt(document.getElementById("quantidade").value);


    if (produtos.hasOwnProperty(nomeProduto)) {
        produtos[nomeProduto].quantidade += quantidadeProduto;
    } 
    else {

        let novoProduto = {
            nome: nomeProduto,
            quantidade: quantidadeProduto
        };

        console.log(novoProduto);

        produtos[nomeProduto] = novoProduto;

    }

    mostrarProdutos();
}
  
function mostrarProdutos() {
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = "";

    for (let produto in produtos) {
      let itemLista = document.createElement("li");
      itemLista.innerHTML = `${produtos[produto].nome} ${produtos[produto].quantidade} itens`;
      listaProdutos.appendChild(itemLista);
    }
}
  
  
window.onload = function() {
    mostrarProdutos();
};  