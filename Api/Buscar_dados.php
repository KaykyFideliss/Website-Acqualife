<?php
// Buscar_dados.php - COLOQUE NO INÍCIO
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Cache-Control");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'conexao.php';

// ✅ CORREÇÃO: Usar data_atualizacao em vez de data_hora
$resultado = $conn->query("SELECT * FROM arduino ORDER BY data_atualizacao DESC LIMIT 1");

if ($resultado && $resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();
    // ✅ CORREÇÃO: Campo correto é data_atualizacao
    echo $row['volume'] . "," . $row['volume2'] . "," . $row['ph'] . "," . $row['data_atualizacao'];
} else {
    echo "0,0,0,Nenhum dado";
}

$conn->close();
?>