
let cadastro = [ 
  {sabor: "Calabresa", Ingrediente: "Calabresa, cebola, queijo", valor: 40 },
  {sabor: "Mussarela", Ingrediente: "Mussarela, tomate, orégano", valor: 35 },
  {sabor: "Frango com Catupiry", Ingrediente: "Frango, catupiry, milho", valor: 45 },
  {sabor: "Portuguesa", Ingrediente: "Presunto, ovo, cebola, azeitona, ervilha, queijo", valor: 47},
  {sabor: "Quatro Queijos", Ingrediente: "Mussarela, provolone, parmesão, catupiry", valor: 50},
  {sabor: "Pepperoni", Ingrediente: "Pepperoni, mussarela, molho de tomate", valor: 42},
  {sabor: "Vegetariana", Ingrediente: "Brócolis, milho, pimentão, cebola, azeitona, queijo", valor: 44},
  {sabor: "Bacon com Cheddar", Ingrediente: "Bacon, cheddar, mussarela", valor: 48},
  {sabor: "Atum", Ingrediente: "Atum, cebola, mussarela, azeitona", valor: 43},
  {sabor: "Margherita", Ingrediente: "Mussarela, tomate, manjericão, azeite", valor: 38}
];

function mostrarSecao(secao) {
  const secoes = ["Cadastro", "consulta", "alterar"];
  secoes.forEach((s) => {
    document.getElementById(s).classList.add("hidden");
  });
  document.getElementById(secao).classList.remove("hidden");
  if (secao === "consulta") {
    atualizarListaConsulta();
  }

}

// Adiciona pizza
function addpizza() {
  const sabor = document.getElementById("sabor").value;
  const Ingrediente = document.getElementById("Ingrediente").value;
  const valor =document.getElementById("valor").value;

  if (sabor && Ingrediente && valor) {
    cadastro.push({ sabor, Ingrediente, valor });
    document.getElementById("sabor").value = "";
    document.getElementById("Ingrediente").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("mensagem").innerHTML = `Pizza ${sabor} Adicionada com Sucesso ao Cardapio!`;
    atualizarListaConsulta(cadastro);
  } else {
    document.getElementById("mensagem").innerHTML = `<strong> Campo Vazio</strong>`;
  }
}

// Consulta pizza
function BuscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultado = cadastro.filter((Pizza) =>
    Pizza.sabor.toLowerCase().includes(busca)
  );
  atualizarListaConsulta(resultado);
}

// Atualiza tabela de consulta
function atualizarListaConsulta(lista = cadastro) {
  const tabela = document.getElementById("lista-pizza");
  tabela.innerHTML = "";
  lista.forEach((pizza) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pizza.sabor}</td>
      <td>${pizza.Ingrediente}</td>
      <td>${pizza.valor}</td>
    `;
    tabela.appendChild(tr);
  });
}

// Atualiza tabela de alteração
function atualizarListaAlterar(lista = cadastro) {
  const tabela = document.getElementById("lista-pizza-alterar");
  tabela.innerHTML = "";
  lista.forEach((pizza) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pizza.sabor}</td>
      <td>${pizza.Ingrediente}</td>
      <td>${pizza.valor}</td>
    `;
    tabela.appendChild(tr);
  });
}

// Buscar pizza para alterar
let PizzaParaAlterar = null;
function buscarPizzaParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  PizzaParaAlterar = cadastro.find((Pizza) =>
    Pizza.sabor.toLowerCase().includes(busca)
  );

  if (PizzaParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-sabor").value = PizzaParaAlterar.sabor;
    document.getElementById("novo-Ingrediente").value = PizzaParaAlterar.Ingrediente;
    document.getElementById("novo-valor").value = PizzaParaAlterar.valor;
  } else {
    document.getElementById("mensagem").innerHTML = "Pizza não encontrada.";
  }
}

// Alterar pizza
function alterarPizza() {
  if (PizzaParaAlterar) {
    const novosabor = document.getElementById("novo-sabor").value;
    const novoIngrediente = document.getElementById("novo-Ingrediente").value;
    const novovalor = parseInt(document.getElementById("novo-valor").value);

    if (novosabor && novoIngrediente && novovalor !== "" && !isNaN(novovalor)) {
      PizzaParaAlterar.sabor = novosabor;
      PizzaParaAlterar.Ingrediente = novoIngrediente;
      PizzaParaAlterar.valor = novovalor;

      atualizarListaAlterar();
      atualizarListaConsulta();
      document.getElementById("form-alterar").classList.add("hidden");
     document.getElementById("mensagem").innerHTML =
       "Pizza alterada com sucesso!";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

