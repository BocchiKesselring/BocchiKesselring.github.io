<?php
// Establecer la conexión con la base de datos
$servername = "uwuhost"; // Nombre del servidor de la base de datos
$username = "Brayan"; // Nombre de usuario de la base de datos
$password = "123456"; // Contraseña de la base de datos
$dbname = "tareas"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$title = $_POST['task-title'];
$description = $_POST['task-description'];
$startDate = $_POST['task-start-date'];
$dueDate = $_POST['task-due-date'];

// Crear la consulta SQL para insertar los datos
$sql = "INSERT INTO tasks (title, description, start_date, due_date) VALUES ('$title', '$description', '$startDate', '$dueDate')";

// Ejecutar la consulta SQL
if ($conn->query($sql) === TRUE) {
    echo "Tarea guardada exitosamente";
} else {
    echo "Error al guardar la tarea: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>