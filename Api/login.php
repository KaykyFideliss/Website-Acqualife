<?php
// --- CONFIGURAÇÃO CORS ---
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// --- CONEXÃO COM O BANCO ---
include "conexao.php";

// --- CAPTURA OS DADOS JSON ---
$input = json_decode(file_get_contents("php://input"), true);
$email = $input["email"] ?? '';
$senha = $input["senha"] ?? '';

if (!$email || !$senha) {
    echo json_encode(["success" => false, "message" => "Preencha todos os campos"]);
    exit;
}

// --- BUSCA O USUÁRIO ---
$sql = "SELECT * FROM usuario WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    if (password_verify($senha, $user["senha"])) {
        echo json_encode([
            "success" => true,
            "message" => "Login realizado com sucesso",
            "user" => [
                "id" => $user["id_user"],
                "nome" => $user["nome"],
                "email" => $user["email"]
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Senha incorreta"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Usuário não encontrado"]);
}

$stmt->close();
$conn->close();
?>
