let tabla = document.querySelector("#tablaEstudiantes tbody");
let botonEliminarTodo = document.getElementById("btnEliminarTodo");

// Obtener los datos guardados o crear un arreglo vacío
let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

// Función para mostrar los datos en la tabla
function mostrarTabla() {
    tabla.innerHTML = "";

    if (estudiantes.length === 0) {
        tabla.innerHTML = "<tr><td colspan='5'>No hay estudiantes registrados.</td></tr>";
        return;
    }

    for (let i = 0; i < estudiantes.length; i++) {
        let est = estudiantes[i];
        let fila = `
      <tr>
        <td>${est.nombre}</td>
        <td>${est.edad}</td>
        <td>${est.carrera}</td>
        <td>${est.estrato}</td>
        <td><button onclick="eliminar(${i})">Eliminar</button></td>
      </tr>
    `;
        tabla.innerHTML += fila;
    }
}

// Función para eliminar un estudiante
function eliminar(i) {
    let confirmar = confirm("Deseas eliminar este estudiante?");
    if (confirmar) {
        estudiantes.splice(i, 1);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        mostrarTabla();
    }
}

// Botón para borrar todos los registros
botonEliminarTodo.onclick = function () {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes para eliminar.");
        return;
    }

    let confirmar = confirm("Deseas eliminar todos los estudiantes?");
    if (confirmar) {
        estudiantes = [];
        localStorage.removeItem("estudiantes");
        mostrarTabla();
        alert("Lista vaciada correctamente.");
    }
};

// Mostrar la tabla al cargar la página
mostrarTabla();