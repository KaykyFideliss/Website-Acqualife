<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include_once('conexao.php');

// Aceita tanto GET quanto POST
if (isset($_REQUEST['ph']) && isset($_REQUEST['volume']) && isset($_REQUEST['mac'])) {
    $ph = floatval($_REQUEST['ph']);
    $volume = floatval($_REQUEST['volume']);
    $mac = $_REQUEST['mac'];
    $id_user = isset($_REQUEST['id_user']) ? intval($_REQUEST['id_user']) : null;

    // Verifica se o MAC já existe
    $check = $conn->prepare("SELECT id, id_user FROM arduino WHERE mac_address = ?");
    $check->bind_param("s", $mac);
    $check->execute();
    $check_result = $check->get_result();

    if ($check_result->num_rows > 0) {
        // Atualiza dados existentes
        $existing_data = $check_result->fetch_assoc();
        $current_id_user = $existing_data['id_user'];
        
        // Se já tem id_user, mantém; se não, usa o novo (se fornecido)
        $final_id_user = $current_id_user ? $current_id_user : $id_user;
        
        $sql = "UPDATE arduino SET ph=?, volume=?, id_user=?, data_atualizacao=NOW() WHERE mac_address=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("diis", $ph, $volume, $final_id_user, $mac);
        $stmt->execute();
        echo json_encode(["status" => "ok", "msg" => "📡 Dados atualizados"]);
    } else {
        // Novo dispositivo - salva com id_user se fornecido
        $sql = "INSERT INTO arduino (mac_address, ph, volume, id_user) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sdii", $mac, $ph, $volume, $id_user);
        $stmt->execute();
        echo json_encode(["status" => "novo", "msg" => "✨ Novo dispositivo registrado"]);
    }
} else {
    echo json_encode(["status" => "erro", "msg" => "❌ Parâmetros ausentes"]);
}
?>