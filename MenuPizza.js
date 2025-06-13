
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
  const secoes = ["Cardapio", "Cadastro", "consulta", "alterar", "Carrinho", "final", "Relatorio"];
  secoes.forEach((s) => {
    document.getElementById(s).classList.add("hidden");
  });
  document.getElementById(secao).classList.remove("hidden");
  if (secao === "consulta") {
    atualizarListaConsulta();
  }
if (secao === "Cardapio") {
  atualizarListaCardapio();
}
if (secao === "Carrinho") {
 atualizarCarrinho();
}


}

//Cardapio

function atualizarListaCardapio(lista = cadastro) {
  const tabela = document.getElementById("lista-pizza-cardapio");
  tabela.innerHTML = "";
  lista.forEach((pizza, Pizzabotao) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pizza.sabor}</td>
      <td>${pizza.Ingrediente}</td>
      <td>R$ ${Number(pizza.valor).toFixed(2)}</td>
      <td><button onclick="adicionarAoCarrinho(${Pizzabotao})">Adicionar</button></td>
    `;
    tabela.appendChild(tr);
     
  });
}


// Adiciona pizza
function addpizza() {
  const sabor = document.getElementById("sabor").value;
  const Ingrediente = document.getElementById("Ingrediente").value;
  const valor =document.getElementById("valor").value;

  if (sabor && Ingrediente && valor){
    cadastro.push({ sabor, Ingrediente, valor: Number(valor) });
    document.getElementById("sabor").value = "";
    document.getElementById("Ingrediente").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("mensagem").innerHTML = `Pizza ${sabor} Adicionada com Sucesso ao Cardapio!`;
    atualizarListaConsulta(cadastro);
    atualizarListaCardapio();
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
      <td>R$ ${Number(pizza.valor).toFixed(2)}</td>
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
      <td>R$ ${Number(pizza.valor).toFixed(2)}</td>
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
     document.getElementById("mensagem1").innerHTML = `Pizza ${PizzaParaAlterar.sabor} encontrada!`;
  } else {
    document.getElementById("mensagem1").innerHTML = '<strong>Pizza não encontrada.</strong>';
  }
}

// Alterar pizza
function alterarPizza() {
  if (PizzaParaAlterar) {
    const novosabor = document.getElementById("novo-sabor").value;
    const novoIngrediente = document.getElementById("novo-Ingrediente").value;
    const novovalor = Number(document.getElementById("novo-valor").value);

    if (novosabor && novoIngrediente && novovalor !== "" && !isNaN(novovalor)) {
      PizzaParaAlterar.sabor = novosabor;
      PizzaParaAlterar.Ingrediente = novoIngrediente;
      PizzaParaAlterar.valor = novovalor;
document.getElementById("PizzaAlterada").innerHTML = `Pizza ${novosabor} alterada com sucesso!`;
      atualizarListaAlterar();
      atualizarListaConsulta();
      atualizarListaCardapio();
      
      document.getElementById("form-alterar").classList.add("hidden");
  
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

//Carrinho de Pizza
 let carrinho =[]
 
function adicionarAoCarrinho(Pizzabotao) {
  const pizza = cadastro[Pizzabotao];
  carrinho.push(pizza);
  document.getElementById("mensagemCardapio").innerHTML=`<strong>Pizza ${pizza.sabor} adicionada ao carrinho!</strong>`;
}


function atualizarCarrinho() {
 const tabela = document.getElementById("lista-pizza-carrinho"); 
  tabela.innerHTML = "";
  carrinho.forEach((pizza) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pizza.sabor}</td>
      <td>R$ ${Number(pizza.valor).toFixed(2)}</td>
    `;
    tabela.appendChild(tr);
  });
  total();
}

  
function total() {
  let totalcompra = carrinho.reduce((soma, pizza) => soma + Number(pizza.valor), 0);
  document.getElementById("Total").innerHTML = `R$ ${totalcompra.toFixed(2)}`;
}

function avançar() {
  const nome = document.getElementById("nomecliente").value;
  const preço =document.getElementById("valor").value;

  if (nome && preço){
    rel.push({ nome, preço: Number(preço) });
    document.getElementById("nomecliente").value = "";
    document.getElementById("valor").value = "";
    atualizarRelatorio();
  }
}

function finalizarPedido() {
const nome = document.getElementById("nomecliente").value;
  const CEP =document.getElementById("Cep").value;
let totalcompra = carrinho.reduce((soma, pizza) => soma + Number(pizza.valor), 0);

  if (nome && CEP && totalcompra > 0) {
    rel.push({ nome, preço: totalcompra });
   document.getElementById("nomecliente").value = "";
    document.getElementById("Cep").value= "";
    document.getElementById("mensagemFinal").innerHTML = "Pedido Finalizado com Sucesso!";
    carrinho = [];
    atualizarCarrinho();
    atualizarRelatorio();
    
} else {
  document.getElementById("mensagemFinal").innerHTML = "Por Favor, Preencha os Campos"
}}



//Relatorio 

let rel= []

function atualizarRelatorio(){
const tabela = document.getElementById("Vendas-Relatorio");
tabela.innerHTML = "";
rel.forEach((cliente) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${cliente.nome}</td>
    <td>R$ ${cliente.preço}</td>
  `;
  tabela.appendChild(tr); 
});
  totalVendas();
}

function totalVendas() {
  let vendas = rel.reduce((soma, cliente) => soma + Number(cliente.preço), 0);
  document.getElementById("TotalRelatorio").innerHTML = `R$ ${vendas.toFixed(2)}`;
}
