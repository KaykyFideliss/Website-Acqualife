<?php
// Buscar_historico.php - CORREÇÃO
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Cache-Control");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8"); // ✅ ADICIONAR

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'conexao.php';

try {
    $sql = "SELECT ph, volume, data_registro 
            FROM arduino_historico 
            WHERE mac_address = '40:91:51:55:E8:93'
            ORDER BY data_registro DESC 
            LIMIT 50";
    
    $result = $conn->query($sql);
    
    $historico = [];
    if ($result && $result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $historico[] = [
                'ph' => floatval($row['ph']),
                'volume1' => floatval($row['volume']),
                'volume2' => 0,
                'time' => date('H:i:s', strtotime($row['data_registro']))
            ];
        }
    }
    
    $historico = array_reverse($historico);
    
    echo json_encode($historico); // ✅ MUDANÇA: Retornar array direto
    
} catch (Exception $e) {
    echo json_encode([]); // ✅ Retornar array vazio em caso de erro
}

$conn->close();
?>