const usuario1 = {
    nombre:"Eliana",
    contraseña : "RitayGreta",
}
const clase = {
    nombre: "crossfit",
    cupo: 5
}

function login() {
    if(prompt("ingrese usuario") == usuario1.nombre && prompt("ingrese contraseña") == usuario1.contraseña){
        alert("bienvenido " + usuario1.nombre);
        otorgarTurno();
    
    } else { 
        alert("usuario y/o contraseña incorrectos");
        login();
    }

}

function otorgarTurno() {
    while (prompt("ingrese la clase a solicitar (crossfit, kickboxing, yoga, pilates)") == clase.nombre && clase.cupo > 0) {
        alert("su turno para la clase de " + clase.nombre + " fue otorgado");
        clase.cupo --;
    }
    if (clase.cupo == 0) {
        alert("el cupo de la clase esta completo");
    } else {
        alert("la clase solicitada no existe");
    }
    
}

login();





