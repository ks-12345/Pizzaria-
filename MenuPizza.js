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


function addpizza() {
  const sabor = document.getElementById("sabor").value;
  const Ingrediente = document.getElementById("Ingrediente").value;
  const valor = document.getElementById("valor").value;
  
  if (sabor && Ingrediente) {
    cadastro.push({ sabor, Ingrediente, valor });
    document.getElementById("sabor").value = "";
    document.getElementById("Ingrediente").value = "";
    document.getElementById("valor").value = "";
    document.getElementById(
      "mensangem"
    ).innerHTML = `Pizza ${sabor} Adicionada com Sucesso ao Cardapio!`;
  } else {
   document.getElementById(
     "mensangem"
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


function atualizarLista(lista = cadastro) {
  const tabela = document.getElementById("lista-pizza");
  tabela.innerHTML = "";

  lista.forEach((pizza) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      ${pizza.sabor}
      </br>
      <td>${pizza.Ingrediente}</td>
      </br>
      <td>${pizza.valor}</td>
    `;
    tabela.appendChild(tr);
  });
}

//Fim Cadastros

function Cardapio() {
  document.getElementById("resultadoscardapio").innerHTML = `${cadastro}`}