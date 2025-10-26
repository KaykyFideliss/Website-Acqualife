<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (isset($_GET['id_user']) && isset($_GET['mac'])) {
    $id_user = intval($_GET['id_user']);
    $mac = $_GET['mac'];

    // Verifica se o dispositivo existe
    $check = $conn->prepare("SELECT id_user FROM arduino WHERE mac_address = ?");
    $check->bind_param("s", $mac);
    $check->execute();
    $result = $check->get_result()->fetch_assoc();

    if (!$result) {
        echo json_encode(["status" => "erro", "msg" => "❌ Dispositivo não encontrado"]);
        exit;
    }

    // Já está vinculado?
    if (!empty($result['id_user'])) {
        echo json_encode(["status" => "erro", "msg" => "⚠️ Dispositivo já vinculado a outro usuário"]);
        exit;
    }

    // Faz o vínculo
    $sql = "UPDATE arduino SET id_user = ? WHERE mac_address = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $id_user, $mac);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok", "msg" => "✅ Dispositivo vinculado ao usuário"]);
    } else {
        echo json_encode(["status" => "erro", "msg" => "❌ Falha ao vincular"]);
    }
} else {
    echo json_encode(["status" => "erro", "msg" => "Parâmetros ausentes"]);
}
?>
