//querySelector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 elemento

// querySelectorAll
const enlaces = document.querySelectorAll('.nav a'); // 0 o todos los elementos 

// getElementById
const heading2 = document.getElementById('heading'); //no es necesario ponerle el #

// Generar nuevo enlace 
// <a href = 'nuevo-enlace.html' class='nav__link'>nuevo enlace</a>
const nuevoEnlace = document.createElement('A'); //pones la etiqueta que deseas crear en mayusculas

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'nuevo enlace';

// Agregar la clase
nuevoEnlace.classList.add('nav__link');

// Agregar al documento
const navegacion = document.querySelector('nav');
//navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

// EVENTOS
// console.log(1);

//load espera a que el js y archivo del html esten listos
// window.addEventListener('load', imprimir) // cuando este evento ocurre se ejecuta esta funcion (callback)

// function imprimir() {
//     console.log(5);
// }

// window.onload = () => { //es lo mismo que lo anterior pero escrito de otra forma
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// })

// console.log(2);

// window.onscroll = function() {
//     console.log('scrolling...');
// }

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.primary--button');
// btnEnviar.addEventListener('click', (evento) => {
//     console.log(evento);
//     evento.preventDefault(); //se requiere en la mayoria de formularios para no recargar la pagina
//     console.log('enviando formulario');
// })


// Eventos de los input y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.form');

nombre.addEventListener('input', leerTexto) //input validación en tiempo real
email.addEventListener('input', leerTexto) //input validación en tiempo real
mensaje.addEventListener('input', leerTexto) //input validación en tiempo real

// El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    //Validar formulario

    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return; //corta la ejecucion del codigo
    }
    mostrarAlerta("Tus datos fueron enviados");

    //Enviar formulario
});

function leerTexto(e){ //e se pasa automaticamente al agregar un event listener
    datos[e.target.id] = e.target.value;
    //console.log(e.target.value);
}

function mostrarAlerta(msj, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = msj;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('enviado');
    }

    formulario.appendChild(alerta);

    //Desaparecer despues de 5seg
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}