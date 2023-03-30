// querySelector
const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);
// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[1].textContent = 'Nuevo texto para enlace';
enlaces[1].classList.add('nueva-clase');
//enlaces[1].classList.remove('navegacion__enlace');
//enlaces[2].href = 'http://google.com';
//console.log(enlaces[0]);

// getElementById
// const heading2 = document.getElementById("heading");
// heading2.textContent = 'heading con getElementById';


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos

// console.log(1);

// window.addEventListener('load', imprimir) // load espera a que js y los archivos que dependen del HTML(CSS, imagenes) esten listos


// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded solo espera el HTML, no espera CSS o imagenes
//     console.log(4);
// })

// console.log(5);

// function imprimir() {
//     console.log(2);
// }

//window.onscroll = function(evento) {
//    console.log(evento);
//}

// Seleccionar elementos y asociarles un evento

// Evento de click ==>> Podemos usarlo e cualquier cosa, ims, txts, etc.

//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(evento) {
//    console.log(evento);
//    evento.preventDefault();

// Validar un formulario



//    console.log('enviando formulario');
//})


// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// Eventos de submit ==>> Para formulario usamos submit, y seleccionamos el formulario (buenas practicas)
// con 'click' podemos seleccionar cualquier cosa
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Uno o mas campos estan vacios.');
        return; // Corta la ejecucion del programa
    }

    // Crea la alerta de enviado correctamente
    mostrarMensaje('Mensaje enviado correctamente.')
});


function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

// Muestra un alerta de que se envio correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);
    
    
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    
    formulario.appendChild(error); // Lo agrega al html

    console.log(error);

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}



// Muestra Alerta (Version resumida de la funcion mostrarError y mostrarMensaje)

//function mostrarAlerta(mensaje, error = null) {
//    const alerta = document.createElement('P');
//    alerta.textContent = mensaje;
    
//    if (error) {
//        alerta.classList.add('error');
//    } else {
//        alerta.classList.add('correcto');
//    }

//    formulario.appendChild(alerta);
 
    // Desaparezca despues de 5 segundos
//    setTimeout(() => {
//        error.remove();
//    }, 5000);
//}