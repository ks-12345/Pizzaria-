let Usuarios = [];

function Login() { 
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const emailadm = "usuario@exemplo.com";
const senhaadm = "1234";

  if (email === emailadm && senha === senhaadm) {
    document.getElementById(
      "mensagem"
    ).innerHTML = `Bem Vindo de Volta Gerente`;
    setTimeout(() => {
      //redireciona para a pagina principal
      window.location.href = "MenuPizza.html";
    }, 1000);

  } else if (email && senha) {
      Usuarios.push({ email, senha });
      document.getElementById("email").value = "";
      document.getElementById("senha").value = "";
      document.getElementById("mensagem").innerHTML =
        "Login realizado com sucesso!";
      setTimeout(() => {
        //redireciona para a pagina principal
        window.location.href = "MenuPizza.html";
      }, 1000);
  } else {
    document.getElementById(
      "mensagem"
    ).innerHTML = `<strong> Por Favor, Preencha os Campos</strong>`;
  }
}