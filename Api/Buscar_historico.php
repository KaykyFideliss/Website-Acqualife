<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Cache-Control");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'conexao.php';

try {
    // ✅ BUSCAR ALTURA (volume2) TAMBÉM
    $sql = "SELECT ph, volume, volume2, data_registro 
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
                'volume2' => floatval($row['volume2']), // ✅ AGORA COM ALTURA REAL
                'time' => date('H:i:s', strtotime($row['data_registro']))
            ];
        }
    }
    
    $historico = array_reverse($historico);
    echo json_encode($historico);
    
} catch (Exception $e) {
    echo json_encode([]);
}

$conn->close();
?>