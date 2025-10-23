<?php
// Permitir acesso do React (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Caso o navegador envie um pré-pedido (OPTIONS), apenas finalize aqui
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// Conexão com o banco
include "conexao.php";

// Captura os dados enviados pelo React (JSON)
$input = json_decode(file_get_contents("php://input"), true);
$email = $input["email"] ?? '';
$senha = $input["senha"] ?? '';

// Verifica se os campos vieram preenchidos
if (!$email || !$senha) {
  echo json_encode(["success" => false, "message" => "Preencha todos os campos"]);
  exit;
}

// Busca o usuário no banco
$sql = "SELECT * FROM usuario WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
  // Verifica a senha (criptografada)
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