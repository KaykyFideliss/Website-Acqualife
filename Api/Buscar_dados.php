<?php
include 'conexao.php'; // importa a conexão com o banco

$resultado = $conn->query("SELECT * FROM arduino ORDER BY id DESC LIMIT 1");

if ($resultado && $resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();
    echo $row['volume'] . "," . $row['volume2'] . "," . $row['ph'];
} else {
    echo "0,0,0";
}

$conn->close();
?>
