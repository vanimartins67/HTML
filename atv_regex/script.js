document.getElementById("formCadastro").addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let cpf = document.getElementById("cpf");
    let telefone = document.getElementById("telefone");
    let senha = document.getElementById("senha");

    let nomeValido = /^.{3,}$/;
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    let telefoneValido = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    let senhaValida = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    let formularioValido = true;

    document.getElementById("erroNome").innerHTML = "";
    document.getElementById("erroEmail").innerHTML = "";
    document.getElementById("erroCpf").innerHTML = "";
    document.getElementById("erroTelefone").innerHTML = "";
    document.getElementById("erroSenha").innerHTML = "";

    nome.style.border = "1px solid #ccc";
    email.style.border = "1px solid #ccc";
    cpf.style.border = "1px solid #ccc";
    telefone.style.border = "1px solid #ccc";
    senha.style.border = "1px solid #ccc";

    if(nomeValido.test(nome.value) == false){

        document.getElementById("erroNome").innerHTML =
        "Nome deve possuir pelo menos 3 caracteres.";

        nome.style.border = "2px solid red";

        formularioValido = false;
    }

    if(emailValido.test(email.value) == false){

        document.getElementById("erroEmail").innerHTML =
        "E-mail inválido.";

        email.style.border = "2px solid red";

        formularioValido = false;
    }

    if(cpfValido.test(cpf.value) == false){

        document.getElementById("erroCpf").innerHTML =
        "CPF deve estar no formato 000.000.000-00.";

        cpf.style.border = "2px solid red";

        formularioValido = false;
    }

    if(telefoneValido.test(telefone.value) == false){

        document.getElementById("erroTelefone").innerHTML =
        "Telefone deve estar no formato (99) 99999-9999.";

        telefone.style.border = "2px solid red";

        formularioValido = false;
    }

    if(senhaValida.test(senha.value) == false){

        document.getElementById("erroSenha").innerHTML =
        "Senha deve possuir 8 caracteres, letra maiúscula, letra minúscula e número.";

        senha.style.border = "2px solid red";

        formularioValido = false;
    }

    if(formularioValido){

        alert("Cadastro realizado com sucesso!");

        document.getElementById("formCadastro").reset();
    }

});