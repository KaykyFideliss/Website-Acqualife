<?php
// ✅ CORS COMPLETO
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: text/plain'); // ✅ MUDEI PARA TEXTO SIMPLES

// Preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ✅ ATIVAR ERROS
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'conexao.php';

// ✅ LOG DE DEBUG
file_put_contents('debug_salvar.log', 
    date('Y-m-d H:i:s') . " - Dados recebidos: " . 
    print_r($_GET, true) . "\n", 
    FILE_APPEND
);

try {
    // ✅ Dados recebidos
    $mac = $conn->real_escape_string($_GET['mac'] ?? '');
    $ph = floatval($_GET['ph'] ?? 0);
    $volume = floatval($_GET['volume'] ?? 0);
    $volume2 = floatval($_GET['volume2'] ?? 0);
    $id_user = intval($_GET['id_user'] ?? 1);

    // ✅ Validar dados
    if (empty($mac) || $ph <= 0) {
        throw new Exception("Dados inválidos: MAC=$mac, pH=$ph");
    }

    // ✅ 1. ATUALIZAR/INSERIR NA TABELA ARDUINO
    $sql_check = "SELECT id FROM arduino WHERE mac_address = '$mac'";
    $result = $conn->query($sql_check);

    if ($result && $result->num_rows > 0) {
        $sql_arduino = "UPDATE arduino SET ph=$ph, volume=$volume, volume2=$volume2, id_user=$id_user WHERE mac_address='$mac'";
    } else {
        $sql_arduino = "INSERT INTO arduino (mac_address, ph, volume, volume2, id_user) VALUES ('$mac', $ph, $volume, $volume2, $id_user)";
    }

    if (!$conn->query($sql_arduino)) {
        throw new Exception("Erro na tabela arduino: " . $conn->error);
    }

    // ✅ 2. INSERIR NA TABELA ARDUINO_HISTORICO
    $sql_historico = "INSERT INTO arduino_historico (mac_address, ph, volume, id_user, data_registro) 
                     VALUES ('$mac', $ph, $volume, $id_user, NOW())";

    if (!$conn->query($sql_historico)) {
        throw new Exception("Erro na tabela histórico: " . $conn->error);
    }

    $historico_id = $conn->insert_id;

    // ✅ RESPOSTA SIMPLES QUE O ESP ESPERA
    echo "OK";
    
    // ✅ LOG DE SUCESSO
    file_put_contents('sucesso_salvar.log', 
        date('Y-m-d H:i:s') . " - Dados salvos: MAC=$mac, pH=$ph, Volume=$volume, ID=$historico_id\n", 
        FILE_APPEND
    );

} catch (Exception $e) {
    $error_msg = $e->getMessage();
    
    // ✅ RESPOSTA DE ERRO SIMPLES
    echo "ERRO: " . $error_msg;
    
    // ✅ LOG DE ERRO
    file_put_contents('erro_salvar.log', 
        date('Y-m-d H:i:s') . " - ERRO: " . $error_msg . "\n", 
        FILE_APPEND
    );
}

$conn->close();
?>