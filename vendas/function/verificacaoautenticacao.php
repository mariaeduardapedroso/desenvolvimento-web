<?php

// Importa p�gina base para opera��es com o banco de dados
include('../function/base.php');

// Atribui os valores digitados no formul�rio aos campos correspondentes
$email = isset($_POST["tf_email"]) ? addslashes(trim($_POST["tf_email"])) : false;
$senha = (strlen($_POST["tf_senha"]) > 0) ? md5(trim($_POST["tf_senha"])) : false;

// Procura pelo usu�rio no banco de dados
$usuario = executar_SQL("SELECT id, nome, email FROM Usuarios WHERE email = '$email' AND Senha = '$senha'");
$printar = print_r($usuario, 1);

// Verifica se o usu�rio existe
if (verifica_resultado($usuario)) {
	// Joga o resultado em um array associativo
	$us = retorna_linha($usuario);

	// Libera o resultado da consulta
	libera_consulta($usuario);

	// Atribui o nome e a id de usuario e vari�veis de sess�o
	session_start();
	$_SESSION["sidusuario"] = $us["id"];
	$_SESSION["snomeusuario"] = $us["email"];
	$_SESSION["snome"] = $us["nome"];
	$_SESSION['loggedin'] = true;
	// header('Location: dashboard.php');
}
// Se n�o recarrega a p�gina com erro de usu�rio ou senha incorretos.
else {
	echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=../index.html'>
            <script type=\"text/javascript\">
                alert(\"Email ou senha inválidos!\");
            </script>";
	// header("Location: ../index.html");
	exit;
}

// Redireciona para a p�gina de confirma��o de Login (Dashboard)
echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=../php/dashboard.php'>
            <script type=\"text/javascript\">
                alert(\"Login Efetuado com Sucesso!\");
            </script>";

?>