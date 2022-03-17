<?php

    $nome = $_POST['cText'];
    $email = $_POST['cMail'];
    $mensagem = $_POST['cMensa'];

    $arquivo = ""
        <html>
            <p><b>Nome: </b>$nome</p>
            <p><b>E-mail:</b>$email</p>
            <p><b>Mensagem:</b>$mensagem</p>
        </html>
    ";

    $destino = "renan.silva@renovarsaneamento.com.br"
    $assunto = "Proposta de Serviço";;

    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset-iso-8859-1/n;
    $headers .= "From: $nome <$email>"

    mail($destino, $assunto, $arquivo, $headers);

    echo "<meta http-equiv-'refresh' contente-'10;URL-..index.html'>" 

?>
