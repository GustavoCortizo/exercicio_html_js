const form = document.getElementById('form-calcular');
const numeroX = document.getElementById('numero-x');
const numeroY = document.getElementById('numero-y');

const formEValido = false;

function calcular(numero) {
    numero = numeroX.value > numeroY.value;
    return numero;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

const mensagemSucesso = `O valor: <b>${numeroX.value}</b> é maior que o valor:<b>${numeroY.value}</b>`;
const mensagemError = `O valor: <b>${numeroX.value}</b> é menor que o valor:<b>${numeroY.value}</b>`;


    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    }
    else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
    }

    }
)



//containerMensagemError.style.display = 'none';
//containerMensagemSucesso.style.display = 'none';