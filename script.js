// Cargar estudiantes guardados o crear un arreglo vacío
var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

// Obtener los botones
var btnGuardar = document.getElementById("guardaBtn");

// Acción al hacer clic en GUARDAR
btnGuardar.onclick = function () {
    var nombre = document.getElementById("nombrePer").value;
    var edad = document.getElementById("edadPer").value;
    var carrera = document.getElementById("carreras").value;
    var estrato = document.getElementById("estratoPer").value;

    if (nombre === "" || edad === "" || carrera === "0" || estrato === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear el estudiante
    var estudiante = {
        nombre: nombre,
        edad: edad,
        carrera: carrera,
        estrato: estrato
    };

    // Guardar en la lista y en localStorage
    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    alert("Estudiante guardado con éxito.");

    // Limpiar los campos
    document.getElementById("nombrePer").value = "";
    document.getElementById("edadPer").value = "";
    document.getElementById("carreras").value = "0";
    document.getElementById("estratoPer").value = "";
};

