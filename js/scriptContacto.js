const boton = document.getElementById ("btn");
const formulario = document.getElementById ("formulario");


class contacto {
    constructor (nombre, mail, mensaje) {
        this.nombre = nombre;
        this.mail = mail;
        this.mensaje = mensaje;
    }
}


const mensajes = [];

const guardarMensaje = () => {
    
    let nombre = document.getElementById ("nombre").value;
    let mail = document.getElementById ("mail").value;
    let mensaje = document.getElementById ("mensaje").value;

    if (nombre == "" || mail == "" || mensaje == "") {
        Swal.fire("Error al enviar mensaje: todos los campos deben ser completados")    
    } else {
        let nuevoMensaje = new contacto (nombre, mail, mensaje);
        mensajes.push (nuevoMensaje);
        localStorage.setItem("mensajes", JSON.stringify (mensajes));
        Swal.fire("Tu mensaje fue enviado con exito!")
    }
}


formulario.addEventListener ("submit", (evento)=> {
    evento.preventDefault();
})


boton.addEventListener("click", guardarMensaje);


let clave = localStorage.key (0);
let valor = JSON.parse (localStorage.getItem (clave))


const mostrarMensajes = () => {
        
    for (let i = 0; i < valor.length; i++) {
        console.log (`MENSAJE ${i + 1}: ` +  "\n" +
        `Nombre: ${valor [i].nombre}` +  "\n" +
        `Correo electronico: ${valor [i].mail}` +  "\n" +
        `Mensaje: ${valor [i].mensaje}`);
    };
};


mostrarMensajes ();
