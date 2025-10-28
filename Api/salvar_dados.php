<?php
// ✅ ADICIONAR HEADERS CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Se for requisição OPTIONS (preflight), retorna OK
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'conexao.php';

// Dados recebidos
$mac = $_GET['mac'];
$ph = $_GET['ph'];
$volume = $_GET['volume'];
$volume2 = $_GET['volume2'] ?? 0;
$id_user = $_GET['id_user'] ?? 1;

// Verifica se já existe o MAC
$sql_check = "SELECT id FROM arduino WHERE mac_address = '$mac'";
$result = $conn->query($sql_check);

if ($result->num_rows > 0) {
    // ATUALIZAR
    $sql = "UPDATE arduino SET ph=$ph, volume=$volume, volume2=$volume2, id_user=$id_user WHERE mac_address='$mac'";
} else {
    // INSERIR
    $sql = "INSERT INTO arduino (mac_address, ph, volume, volume2, id_user) VALUES ('$mac', $ph, $volume, $volume2, $id_user)";
}

if ($conn->query($sql) === TRUE) {
    echo "OK";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>