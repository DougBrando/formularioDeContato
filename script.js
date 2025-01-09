function validacao(){
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#mail').value;
    const mensagem = document.querySelector('#mensagem').value;
    const telefone = document.querySelector('#telefone').value;
    const senha = document.querySelector('#senha').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return false;
        }

    if (nome.length <3 || nome.length > 50){
        alert('O nome deve ter entre 3 e 50 caracteres.');
        return false;  
    }
    if (email.length <5 || email.length > 50){
        alert('O e-mail deve ter entre 5 e 50 caracteres.');
        return false;
    }

    const emailPadrao = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if(!emailPadrao.test(email)){
        alert('E-mail inválido.');
        return false;
    }

    const senhaPadrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(!senhaPadrao.test(senha)){
        alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
        return false;
        }
    
    const telefonePadrao = /^(?:\(\d{2}\)\s?\d{5}-\d{4}|\d{2}\s?\d{5}-\d{4}|\d{11})$/;
    if(!telefonePadrao.test(telefone)){
        alert('Telefone inválido. Formato esperado: (XX) XXXXX-XXXX');
        return false;
        }

    return true;
    }

    document.getElementById('cct').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validacao()) {
            alert('Formulário válido!');
            }
});
