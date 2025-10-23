<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "acqualife";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Erro de conexão: " . $conn->connect_error]));
}
?>
