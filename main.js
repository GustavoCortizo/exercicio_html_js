const form = document.getElementById('form-calcular');
const numeroX = document.getElementById('numero-x');
const numeroY = document.getElementById('numero-y');
let formEValido = false;

function calcular(numero) {
    numero = numeroX.value > numeroY.value;
    return numero;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

const mensagemSucesso = `O valor: <b>${numeroX.value}</b> é maior que o valor:<b>${numeroX.value}</b>`;
const mensagemError = `O valor: <b>${numeroX.value}</b> é menor que o valor:<b>${numeroX.value}</b>`;

    formEValido = calcular(numero.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numero.value = '';
        numeroX.value = '';
        numeroY.value = '';
    } else {
        numero.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numero.addEventListener('keyup', function(e){
        console.log(e.target.value);
        formEValido = calcular(e.target.value);

        if (!formEValido) {
            numero.classList.add('error');
            //numero.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
        } else {
            numero.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
});
