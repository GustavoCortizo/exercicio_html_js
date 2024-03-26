const form = document.getElementById('form-calcular');
const numeroX = document.getElementById('numero-x');
const numeroY = document.getElementById('numero-y');

function calcular() {
    const valorX = parseFloat(numeroX.value);
    const valorY = parseFloat(numeroY.value);
    return valorX > valorY;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = '';
    containerMensagemSucesso.style.display = 'none';
    
    const containerMensagemError = document.querySelector('.error-message');
    containerMensagemError.innerHTML = '';
    containerMensagemError.style.display = 'none';

    const mensagemSucesso = `O valor: <b>${numeroX.value}</b> é maior que o valor:<b>${numeroY.value}</b>`;
    const mensagemError = `O valor: <b>${numeroX.value}</b> é menor que o valor:<b>${numeroY.value}</b>`;

    if (calcular()) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
    }
});
