<?php
header("Content-Type: application/json");
require_once("conexao.php");

$dados = json_decode(file_get_contents("php://input"), true);

if (!$dados) {
    echo json_encode(["status" => "error", "message" => "Nenhum dado recebido"]);
    exit;
}

$mac = $conn->real_escape_string($dados["mac_address"] ?? '');
$ph = floatval($dados["ph"] ?? 0);
$volume = intval($dados["volume"] ?? 0);
$volume2 = intval($dados["volume2"] ?? 0);
$id_user = intval($dados["id_user"] ?? 0);

if (empty($mac)) {
    echo json_encode(["status" => "error", "message" => "MAC address ausente"]);
    exit;
}

// Verifica se já existe o MAC
$sql = "SELECT id FROM arduino WHERE mac_address = '$mac'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $sql = "UPDATE arduino SET ph=$ph, volume=$volume, volume2=$volume2, id_user=$id_user WHERE mac_address='$mac'";
} else {
    $sql = "INSERT INTO arduino (mac_address, ph, volume, volume2, id_user) VALUES ('$mac', $ph, $volume, $volume2, $id_user)";
}

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Dados salvos com sucesso"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
?>
