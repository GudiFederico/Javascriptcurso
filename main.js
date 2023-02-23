const users = [

    {
        nombre: "Federico",
        pass: "1234",
    },
    
    {
        nombre: "Eliana",
        pass: "4321",
    },
    {
        nombre: "Rita",
        pass:"1402"
    }

]


const clases = [
    {
        nombre: "crossfit",
        cupo: 15
    },

    {
        nombre: "kickboxing",
        cupo: 15
    },

    {
        nombre: "yoga",
        cupo: 15,
    }
]


let cupoCross = [];
let cupoKick = [];
let cupoYoga = [];

let usuarioIngresado = prompt("ingrese su usuario");
const usuarioEncontrado = users.find(usuario => usuario.nombre === usuarioIngresado);

function login() {
    if(usuarioEncontrado != undefined && usuarioEncontrado.nombre === usuarioIngresado){
        if(usuarioEncontrado.pass === prompt("ingrese su password")){
            alert("Bienvenido " + usuarioEncontrado.nombre);
            select();
        }
        else {
            alert("contraseña incorrecta");
        }
    } else  {

        alert("usuario inexistente");
    }

}


function addTurno(){
    let claseIngresada = prompt("ingrese la clase que desea asistir (crossfit, kickboxing, yoga)");
    const claseEncontrada = clases.find(clase => clase.nombre === claseIngresada);
    if(claseEncontrada != undefined && claseEncontrada.nombre === claseIngresada){
        switch(claseEncontrada.nombre){
            case "crossfit":
                if (cupoCross.includes(usuarioIngresado)){
                    alert("ya tiene turno para esta clase")
                    select();
                } else {
                cupoCross.push(usuarioEncontrado.nombre);
                alert("su turno se agendo exitosamente");
                select();}
                break;
            case "kickboxing":
                if (cupoKick.includes(usuarioIngresado)){
                    alert("ya tiene turno para esta clase")
                    select();
                } else {
                cupoKick.push(usuarioEncontrado.nombre);
                alert("su turno se agendo exitosamente");
                select();}
                break;
            case "yoga":
                if (cupoYoga.includes(usuarioIngresado)){
                    alert("ya tiene turno para esta clase")
                    select();
                } else {
                cupoYoga.push(usuarioEncontrado.nombre);
                alert("su turno se agendo exitosamente");
                select();}
                break;
        }
    
    } else  {

        alert("la clase que ingreso no existe, intentelo nuevamente");
        select();
    }
}


function cancelTurno() {
    let claseIngresada = prompt("ingrese la clase que desea asistir (crossfit, kickboxing, yoga)");
    const claseEncontrada = clases.find(clase => clase.nombre === claseIngresada);
    if(claseEncontrada != undefined && claseEncontrada.nombre === claseIngresada){
        switch(claseEncontrada.nombre){
            case "crossfit":
                if (cupoCross.includes(usuarioIngresado)){
                    let i= cupoCross.indexOf(usuarioEncontrado.nombre);
                    cupoCross.splice(i,1);
                    alert("su turno se cancelo exitosamente")
                    select();
                } else {
                    alert("ud no esta anotado en esta clase");
                    select();
                }
                break;

            case "kickboxing":
                if (cupoKick.includes(usuarioIngresado)){
                    let i= cupoKick.indexOf(usuarioEncontrado.nombre);
                    cupoKick.splice(i,1);
                    alert("su turno se cancelo exitosamente")
                    select();
                } else {
                    alert("ud no esta anotado en esta clase");
                    select();
                }
                break;
            case "yoga":
                if (cupoYoga.includes(usuarioIngresado)){
                    let i= cupoYoga.indexOf(usuarioEncontrado.nombre);
                    cupoYoga.splice(i,1);
                    alert("su turno se cancelo exitosamente")
                    select();
                } else {
                    alert("ud no esta anotado en esta clase");
                    select();
                }
                break;
        }
    
    } else  {

        alert("la clase que ingreso no existe, intentelo nuevamente");
        select();
    }
}


function select(){
    
    switch (prompt("ingrese (T) para solicitar un turno, ingrese (C) para cancelar un turno" )) {
        case "T":
            addTurno();
            break;
        case "C":
            cancelTurno();
            break;
        default:
            alert("Adios")
            break;
    }
}



login();




