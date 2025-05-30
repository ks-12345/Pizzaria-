let cadastro = [ 
  {sabor: "Calabresa", Ingrediente: "Calabresa, cebola, queijo", valor: 40 },

  { sabor: "Mussarela",Ingrediente: "Mussarela, tomate, orégano", valor: 35 },

  { sabor: "Frango com Catupiry", Ingrediente: "Frango, catupiry, milho", valor: 45 },

  {sabor: "Portuguesa",  Ingrediente: "Presunto, ovo, cebola, azeitona, ervilha, queijo", valor: 47},

  {sabor: "Quatro Queijos",  Ingrediente: "Mussarela, provolone, parmesão, catupiry", valor: 50},

  {sabor: "Pepperoni", Ingrediente: "Pepperoni, mussarela, molho de tomate", valor: 42},

  {sabor: "Vegetariana", Ingrediente: "Brócolis, milho, pimentão, cebola, azeitona, queijo", valor: 44},

  {sabor: "Bacon com Cheddar", Ingrediente: "Bacon, cheddar, mussarela", valor: 48},

  {sabor: "Atum",Ingrediente: "Atum, cebola, mussarela, azeitona", valor: 43},

  {sabor: "Margherita", Ingrediente: "Mussarela, tomate, manjericão, azeite", valor: 38}
];

function mostrarSecao(secao) {
  // Lista de todas as seções disponíveis no seu código
  const secoes = ["Cadastro", "consulta"];

  // Esconde todas as seções antes de exibir a desejada
  secoes.forEach((s) => {
    document.getElementById(s).classList.add("hidden");
  });

  // Mostra apenas a seção selecionada
  document.getElementById(secao).classList.remove("hidden");
}


function addpizza() {
  const sabor = document.getElementById("sabor").value;
  const Ingrediente = document.getElementById("Ingrediente").value;
  const valor = document.getElementById("valor").value;
  
  if (sabor && Ingrediente && valor) {
    cadastro.push({ sabor, Ingrediente, valor });
    document.getElementById("sabor").value = "";
    document.getElementById("Ingrediente").value = "";
    document.getElementById("valor").value = "";
    document.getElementById(
      "mensagem"
    ).innerHTML = `Pizza ${sabor} Adicionada com Sucesso ao Cardapio!`;
  } else {
   document.getElementById(
     "mensagem"
   ).innerHTML = `<strong> Campo Vazio</strong>`;
  }
}

function BuscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const mensagem = cadastro.filter((Pizza) =>
    Pizza.sabor.toLowerCase().includes(busca)
  );
  atualizarLista(mensagem);
}

function buscarPizzaParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  PizzaParaAlterar = biblioteca.find((Pizza) =>
    Pizza.Nome.toLowerCase().includes(busca)
  );

  if (PizzaParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-Nome").value = PizzaParaAlterar.Nome;
    document.getElementById("novo-autor").value = PizzaParaAlterar.autor;
    document.getElementById("novo-ano").value = PizzaParaAlterar.ano;
  } else {
    alert("Pizza não encontrado.");
  }
}

//Alterar Pizza

function alterarPizza() {
  if (PizzaParaAlterar) {
    const novoNome = document.getElementById("novo-Nome").value;
    const novoAutor = document.getElementById("novo-autor").value;
    const novoAno = parseInt(document.getElementById("novo-ano").value);

    if (novoNome && novoAutor && novoAno) {
      PizzaParaAlterar.Nome = novoNome;
      PizzaParaAlterar.autor = novoAutor;
      PizzaParaAlterar.ano = novoAno;

      atualizarLista();
      alert("Pizza alterado com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

function atualizarLista(lista = cadastro) {
  const tabela = document.getElementById("lista-pizza");
  tabela.innerHTML = "";

  lista.forEach((pizza) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>  ${pizza.sabor}</td>
      
      <td>${pizza.Ingrediente}</td>
      
      <td>${pizza.valor}</td>
    `;
    tabela.appendChild(tr);
  });
}

//Fim Cadastros

//Começo Alterar Pizza



