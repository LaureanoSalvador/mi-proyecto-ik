function validar() {
    var usu = document.getElementById("usuario").value;
    var pass = document.getElementById("password").value;

    if (usu == "carlos" && pass == "1234") {
        alert("Acceso concedido. Bienvenido " + usu);
        window.location.href = "afiliacion de IK.html";
    }
    else {
        alert("datos incorrectos");
    }

}




function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
}

function actualizarModelos() {
    var marca = document.getElementById("marcas").value;
    var comboModelos = document.getElementById("modelos");
    
    comboModelos.innerHTML = "";

    // Opción inicial
    var defaultOpt = document.createElement("option");
    defaultOpt.text = "Seleccione un modelo";
    defaultOpt.value = "";
    comboModelos.add(defaultOpt);

    var modelos = [];

    if (marca === "Fender" || marca === "Squier") {
        modelos = ["STRATOCASTER", "TELECASTER", "JAGUAR"];
    } else if (marca === "Les Paul" || marca === "Epiphone") {
        modelos = ["Standard", "Custom", "ES-335"];
    } else if (marca === "Ibanez") {
        modelos = ["RG Series", "S Series", "Iron Label"];
    } else if (marca === "PRS") {
        modelos = ["Custom 24", "McCarty", "Silver Sky"];
    } else if (marca === "Yamaha") {
        modelos = ["Pacifica", "Revstar"];
    }

    
    modelos.forEach(function(mod) {
        var opcion = document.createElement("option");
        opcion.value = mod;
        opcion.text = mod;
        comboModelos.add(opcion);
    });
}

function afiliar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    if (nombre == "" || apellido == "" || email == "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }
    alert("Afiliado con éxito con su " + document.getElementById("marcas").value + " " + document.getElementById("modelos").value);
}