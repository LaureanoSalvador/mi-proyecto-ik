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
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var marca = document.getElementById("marcas").value;
    var modelo = document.getElementById("modelos").value;

    if (!nombre || !apellido || !marca || !modelo || modelo === "Seleccione un modelo") {
        alert("⚠️ Todos los campos son obligatorios. Por favor, completa tu información y selecciona una marca y modelo válido.");
        return;
    }
    
    // Guardamos la selección para la siguiente pantalla
    localStorage.setItem("marcaSeleccionada", marca);
    localStorage.setItem("modeloSeleccionado", modelo);
    
    alert("¡Perfecto " + nombre + "! Hemos registrado tu " + marca + " " + modelo + ". Vamos a los detalles técnicos.");
    window.location.href = "personalizacion.html";
}

function cargarConfiguracion() {
    var marca = localStorage.getItem("marcaSeleccionada");
    var modelo = localStorage.getItem("modeloSeleccionado");
    
    if (!marca || !modelo) {
        window.location.href = "afiliacion de IK.html";
        return;
    }

    document.getElementById("resumen-seleccion").innerText = "Configurando: " + marca + " " + modelo;

    // Elementos del DOM
    var comboPuente = document.getElementById("puente");
    var comboPastillas = document.getElementById("pastillas");
    var comboCircuito = document.getElementById("circuito");
    var comboTrastes = document.getElementById("trastes");

    // Limpiar opciones
    comboPuente.innerHTML = "";
    comboPastillas.innerHTML = "";
    comboCircuito.innerHTML = "";

    // Lógica de restricciones según el tipo de cuerpo/modelo
    if (modelo === "STRATOCASTER" || modelo === "Pacifica") {
        agregarOpciones(comboPuente, ["Tremolo Sincronizado", "Hardtail (Fijo)", "Floyd Rose (Puente Flotante)"]);
        agregarOpciones(comboPastillas, ["SSS (3 Simples)", "HSS (Humbucker/2 Simples)", "HH (2 Humbuckers)"]);
        agregarOpciones(comboCircuito, ["Master Volume / 2 Tone / 5-Way Switch"]);
    } 
    else if (modelo === "Standard" || modelo === "Custom" || modelo === "McCarty") {
        agregarOpciones(comboPuente, ["Tune-O-Matic (Stopbar)", "Bigsby Tremolo"]);
        agregarOpciones(comboPastillas, ["HH (2 Humbuckers)", "P90 / P90"]);
        agregarOpciones(comboCircuito, ["2 Vol / 2 Tone / 3-Way Switch"]);
    }
    else if (modelo === "TELECASTER") {
        agregarOpciones(comboPuente, ["Ashtray Bridge", "Modern 6-Saddle"]);
        agregarOpciones(comboPastillas, ["SS (2 Simples Tele)", "HS (Humbucker/Simple)"]);
        agregarOpciones(comboCircuito, ["Master Vol / Master Tone / 3-Way"]);
    }
    else if (modelo === "RG Series" || modelo === "Iron Label") {
        agregarOpciones(comboPuente, ["Floyd Rose (Puente Flotante)", "Edge Zero", "Fixed Bridge"]);
        agregarOpciones(comboPastillas, ["HSH (Humbucker/Simple/Humbucker)", "HH Active"]);
        agregarOpciones(comboCircuito, ["Master Vol / Master Tone / High Pass Filter"]);
    }
    else {
        agregarOpciones(comboPuente, ["Puente Estándar"]);
        agregarOpciones(comboPastillas, ["Configuración Estándar"]);
        agregarOpciones(comboCircuito, ["Circuito Universal"]);
    }

    // Restricción de Trastes (Multiescala/Irregulares solo para modelos modernos/Ibanez)
    if (marca === "Ibanez" || modelo === "Iron Label") {
        agregarOpciones(comboTrastes, ["Estándar", "Trastes Irregulares (Multiescala / Fanned Frets)"]);
    } else {
        agregarOpciones(comboTrastes, ["Estándar (21 Trastes)", "Estándar (22 Trastes)"]);
    }
}

function agregarOpciones(select, opciones) {
    opciones.forEach(function(opt) {
        var el = document.createElement("option");
        el.value = opt;
        el.text = opt;
        select.add(el);
    });
}

function finalizarPersonalizacion() {
    // Capturamos los valores actuales de los selectores
    const puente = document.getElementById("puente").value;
    const marcaPuente = document.getElementById("marcaPuente").value;
    const pastillas = document.getElementById("pastillas").value;
    const marcaPastillas = document.getElementById("marcaPastillas").value;
    const maderaCuerpo = document.getElementById("maderaCuerpo").value;
    const maderaMastil = document.getElementById("maderaMastil").value;
    const circuito = document.getElementById("circuito").value;

    // Usamos Template Literals (backticks) para un mensaje limpio y sin errores de código
    const mensaje = `🎸 ¡ESPECIFICACIONES CONFIRMADAS! 🎸

Hardware: Puente ${marcaPuente} tipo ${puente}.
Electrónica: Pastillas ${marcaPastillas} (${pastillas}) con circuito ${circuito}.
Maderas: Cuerpo de ${maderaCuerpo} y mástil de ${maderaMastil}.

Tu configuración ha sido enviada a los maestros luthieres de IK Multimedia.`;

    alert(mensaje);
    console.log("Configuración final enviada:", { puente, marcaPuente, pastillas, maderaCuerpo });
}