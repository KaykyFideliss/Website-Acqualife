<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "acqualife";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Erro de conexão: " . $conn->connect_error]);
    exit();
}

// ✅ FILTRA POR USUÁRIO
$id_user = isset($_GET['id_user']) ? intval($_GET['id_user']) : null;

if ($id_user) {
    // Busca dados APENAS do usuário específico
    $sql = "SELECT * FROM arduino WHERE id_user = ? ORDER BY id DESC LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_user);
    $stmt->execute();
    $result = $stmt->get_result();
} else {
    // Se não passar id_user, busca qualquer dado (apenas para debug)
    $sql = "SELECT * FROM arduino ORDER BY id DESC LIMIT 1";
    $result = $conn->query($sql);
}

if ($result && $result->num_rows > 0) {
    $dados = $result->fetch_assoc();
    
    echo json_encode([
        "success" => true,
        "data" => [
            "volume1" => $dados['volume'] ?? 0,
            "volume2" => $dados['volume2'] ?? 0,
            "ph" => $dados['ph'] ?? 0
        ]
    ]);
} else {
    echo json_encode([
        "success" => true,
        "data" => [
            "volume1" => 0,
            "volume2" => 0,
            "ph" => 0
        ],
        "message" => "Nenhum dispositivo vinculado"
    ]);
}

$conn->close();
?>