var loginContainer = document.getElementById(`login-motorista-container`);
var registroContainer = document.getElementById(`registro-motorista-container`);
var anclaRegistro = document.getElementById(`ancla-registro`);

const renderizarLogin = () => {
    loginContainer.style.display = `grid`;
    registroContainer.style.display = `none`;
}

renderizarLogin();

const ocultar = () => {
    loginContainer.style.display = `none`;
    registroContainer.style.display = `grid`;

    console.log(`touched`);
}

/* js 2 */

var banderaValidaciones = 0;

function limpiarInputs() {
    var inputs = document.getElementsByClassName('input-bonito');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
    }
}
function validacionInputs() {
    var nombre = document.getElementById('inp-nombre');
    var email = document.getElementById('inp-email');
    var telefono = document.getElementById('inp-telefono');
    var contraseña = document.getElementById('inp-contraseña');
    var contraseña2 = document.getElementById('inp-contraseña-2');

    //expresiones regulares
    var letras = /^[a-zA-Z\s]+$/; //para el nombre
    var email_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var tel = /\d{4}-\d{4}$/;

    if ((letras.test(nombre.value))) {
        valido(nombre);
    } else {
        error(nombre);
        banderaValidaciones++;
    }

    if (email_valido.test(email.value)) {
        valido(email);
    } else {
        error(email);
        banderaValidaciones++;
    }

    if (tel.test(telefono.value)) {
        valido(telefono);
    } else {
        error(telefono);
        banderaValidaciones++;
    }

    if (banderaValidaciones > 0) {
        mensajeError();
    }

    /*aqui luego puede ser que si banderaValidaciones == 0
        significa que no hay errores entonces podemos avanzar, espero entendás jaja.
    */
    banderaValidaciones = 0;
}
function valido(etiqueta) {
    etiqueta.classList.remove('input-error');
    etiqueta.classList.add('input-succes');
};
function error(etiqueta) {
    etiqueta.classList.remove('input-succes');
    etiqueta.classList.add('input-error');
}
function mensajeError() {
    alert("Por favor corrija los inputs en rojo");
}
//se limpian al nomas cargar la página. cualquier cosa modificalo.
limpiarInputs();
