window.onload = inicio;
/*Creo variable form para obtener los elementos del formulario*/
const form = document.getElementById('form-formulario');
/*funcion iniciar la cual activa el evento click y llama a la funcion validacion*/
function inicio() {
    var boton=document.getElementById('form-enviar')
    boton.addEventListener('click', validacion, false);
}


function validaNombre() {
    var name = document.getElementById('form-nombre');
    if (name.value == '') {
        alert('Debe ingresar un Nombre');
        return false;
    }
    return true;
}

function validarMail(mail) {
    var mail = document.getElementById('form-mail');
    if (mail.value == '') {
        alert('Debe ingresar un e-mail valido');
        return false;
    }
    return true;
}

function validarAsunto(elementoAsunto) {
    var elementoAsunto = document.getElementById('form-asunto');
    if (elementoAsunto.value == '') {
        alert('Debe incluir el asunto');
        return false;
    }
    return true;
}

function validacion(e) {
    var msjConfirmacion = 'Pulse Aceptar para mandar el E-Mail'
    if (validaNombre() && validarMail() && validarAsunto() && confirm(msjConfirmacion)) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}