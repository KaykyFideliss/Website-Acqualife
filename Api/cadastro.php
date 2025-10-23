<?php
// Permitir requisições externas (React)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Caso o navegador envie um pré-pedido (OPTIONS), apenas finalize aqui
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// Desativar exibição de erros HTML
ini_set('display_errors', 0);
ini_set('log_errors', 1);

try {
    include "conexao.php";
    
    // Lê dados enviados (JSON)
    $json = file_get_contents("php://input");
    $input = json_decode($json, true);
    
    if ($input === null) {
        throw new Exception("JSON inválido");
    }
    
    $nome = $input["nome"] ?? '';
    $email = $input["email"] ?? '';
    $telefone = $input["telefone"] ?? '';
    $senha = $input["password"] ?? '';

    // Verificação básica
    if (empty($nome) || empty($email) || empty($telefone) || empty($senha)) {
        echo json_encode(["success" => false, "message" => "Preencha todos os campos."]);
        exit;
    }

    // Verifica se o e-mail já existe (AGORA COM usuario)
    $sql = "SELECT id_user FROM usuario WHERE email = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception("Erro na preparação: " . $conn->error);
    }
    
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "E-mail já cadastrado."]);
        $stmt->close();
        $conn->close();
        exit;
    }
    $stmt->close();

    // Criptografa a senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // Insere o novo usuário (AGORA COM usuario)
    $sql = "INSERT INTO usuario (nome, email, telefone, senha) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception("Erro na preparação: " . $conn->error);
    }
    
    $stmt->bind_param("ssss", $nome, $email, $telefone, $senhaHash);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Usuário cadastrado com sucesso!"]);
    } else {
        throw new Exception("Erro na execução: " . $stmt->error);
    }

    $stmt->close();
    $conn->close();

} catch (Exception $e) {
    // Retorna erro em formato JSON
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Erro interno do servidor: " . $e->getMessage()
    ]);
}
?>