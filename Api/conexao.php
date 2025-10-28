<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "acqualife";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha: " . $conn->connect_error);
}
?>