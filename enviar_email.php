<?php
// Verifica se o método de requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $placa = $_POST['placa'];
    $modelo = $_POST['modelo'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $tipoVeiculo = $_POST['tipo'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];
    $horario = $_POST['horario'];

    // Configurações para o envio de email
    $to = "olaranjao2010@gmail.com"; // Endereço de email para receber o agendamento
    $subject = "Novo Agendamento de Serviço";
    $message = "
        Nome: $nome $sobrenome \n
        Email: $email \n
        Telefone: $telefone \n
        Tipo de Veículo: $tipoVeiculo \n
        Placa do Veículo: $placa \n
        Modelo do Veículo: $modelo \n
        Serviço: $servico \n
        Data: $data \n
        Horário: $horario \n
    ";

    $headers = "From: $email";

    // Envia o email usando a função mail() do PHP
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Email enviado com sucesso!'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Falha ao enviar o email.'));
    }
} else {
    // Se o método de requisição não for POST, retorna erro
    echo json_encode(array('status' => 'error', 'message' => 'Método não permitido.'));
}
?>