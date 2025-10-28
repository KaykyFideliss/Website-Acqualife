<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "acqualife";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Erro na conexão: " . $conn->connect_error
    ]));
}
?>
