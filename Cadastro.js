let Usuarios = [];

function Cadastro() {
 
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const senha2 = document.getElementById("senha2").value;
  let termos = document.getElementById("termos");

  if (email === "usuario@exemplo.com" && senha === "1234") {
    document.getElementById("mensagem").innerHTML = `Bem Vindo de Volta Gerente`;
    } else if (senha !== senha2) {
    document.getElementById("mensagem").innerHTML = '<strong> Senhas não conferem</strong>';
  } else if (email && senha == senha2 && termos.checked == true) {
    Usuarios.push({ email, senha });
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("mensagem").innerHTML = `Cadastro feito com Sucesso!`;
    setTimeout(() => {
        //redireciona para a pagina principal
        window.location.href = "Login.html";
      }, 1000);
  
} else if (termos.checked == false ) {
      document.getElementById("mensagem").innerHTML = '<strong> Por Favor Aceite todos os termos para continuar</strong>';
  } 
}
