let produtos = {};
// Lista de informações dentro de um objeto

function adicionarProduto() {
  let nomeProduto = document.getElementById("produto").value;
  let quantidadeProduto = parseInt(document.getElementById("quantidade").value);
  let unidadeProduto = document.getElementById("unidade").value;


  // Verifica se a palavra já foi escrita antes, se sim soma a quantidade do produto, se não adiciona um novo produto (objeto)
  if (produtos.hasOwnProperty(nomeProduto)) {
    produtos[nomeProduto].quantidade += quantidadeProduto;
    produtos[nomeProduto].produtosExistente = true;
  } else {

    let novoProduto = {
      nome: nomeProduto,
      quantidade: quantidadeProduto,
      unidade: unidadeProduto,
      produtosExistente: false,
    };

    // Produto existente ele é usado para saber se já o produto digitado é existente, se o atributo "produtosExistente:" não existir ele seria repetido todas as vezes que for adicionado, e graças ao if com o remove() a gente evita a repetição desse produto na lista.

    produtos[nomeProduto] = novoProduto;
  }

  mostrarProdutos(produtos[nomeProduto]);

  // Sempre que adicionar o produto reorganiza a lista com os marcados no final
  check();
}

function mostrarProdutos(produto) {
  let listaProdutos = document.getElementById("tabela-produtos");

  // Verifica se tem o produto na lista, se tiver ele é removido
  if (produto.produtosExistente) {
    let itemLista = document.getElementById(produto.nome);
    itemLista.remove();
  }

  // Incio de adicionar produtos

  // Cria o tr da linha da tabela
  let itemLista = listaProdutos.insertRow();
  itemLista.id = produto.nome;
  
  // Adiciona o checkbox
  const cell = itemLista.insertCell();
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  cell.appendChild(input);

  // Adiciona o item nome
  const cell2 = itemLista.insertCell();
  const nome = document.createElement('p');
  nome.innerHTML = produto.nome; 
  cell2.appendChild(nome);

  // Adiciona o item quantidade
  const cell3 = itemLista.insertCell();
  const quantidade = document.createElement('p');
  quantidade.innerHTML = produto.quantidade; 
  cell3.appendChild(quantidade);

  // Adiciona o item unidade
  const cell4 = itemLista.insertCell();
  const unidade = document.createElement('p');
  unidade.innerHTML = produto.unidade;
  cell4.appendChild(unidade);

  // Adiciona o botão de excluir
  const cell5 = itemLista.insertCell();
  const botaoExcluir = document.createElement('button');
  botaoExcluir.innerHTML = "Excluir";   
  botaoExcluir.addEventListener("click", function () {
    delete produtos[produto.nome];
    itemLista.remove();
  });
  cell5.appendChild(botaoExcluir);

  // Fim de adicionar produtos
}

let inputProduto = document.getElementById("produto");
let inputQuantidade = document.getElementById("quantidade");
let botaoAdicionar = document.getElementById("botao-adicionar");

inputProduto.addEventListener("input", validarInputs);
inputQuantidade.addEventListener("input", validarInputs);

function validarInputs() {
  if (inputProduto.value === "" || inputQuantidade.value === "") {
    botaoAdicionar.disabled = true;
  } else {
    botaoAdicionar.disabled = false;
  }
}

// Filtrar todos os itens selecionados
function check() {
  const lista = document.getElementById("tabela-produtos");
  const itensSelecionados = [];

  // Percorre a lista de itens e adiciona os selecionados no array "itensSelecionados"
  for (let i = 0; i < lista.children.length; i++) {
    const item = lista.children[i];
    const checkbox = item.querySelector("input[type=checkbox]");

    if (checkbox.checked) {
      itensSelecionados.push(item);
    }
  }

  // Adiciona os itens selecionados novamente no final da lista
  for (let i = 0; i < itensSelecionados.length; i++) {
    lista.appendChild(itensSelecionados[i]);
  }
}

