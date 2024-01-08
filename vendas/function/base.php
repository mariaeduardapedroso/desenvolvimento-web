<?php

// Executa uma consulta e retorna o resultado, se houver
function executar_SQL($SQL)
{
	// Realiza a consulta
	$conexao = mysqli_connect("localhost", "root", "", "sistemavendas");

	$resultado = mysqli_query($conexao, $SQL);

	if (!$resultado)
		die('Não foi possivel realizar a consulta: ' . mysqli_error());

	// Retorna o resultado da consulta
	return $resultado;
}

// Coloca uma tupla de uma consulta em um array associativo
function retorna_linha($consulta)
{
	return mysqli_fetch_assoc($consulta);
}

// Fecha conexao com MySQL
function desconectar($conexao)
{
	mysqli_close($conexao);
}

// Verifica se a consulta gerou algum resultado
function verifica_resultado($resultado)
{
	return (mysqli_num_rows($resultado) != 0);
}

// Libera a mem�ria do resultado de uma query
function libera_consulta($consulta)
{
	mysqli_free_result($consulta);
}

function deletar($tabela, $condicao)
{
	// Cria a conexão com o banco de dados
	$conexao = mysqli_connect("localhost", "root", "", "sistemavendas");

	// Cria a query SQL
	$SQL = "DELETE FROM $tabela WHERE $condicao";

	// Executa a query
	$resultado = mysqli_query($conexao, $SQL);

	// Verifica se ocorreu algum erro durante a execução da query
	if (!$resultado) {
		die('Erro ao deletar registro: ' . mysqli_error($conexao));
	}

	// Fecha a conexão
	desconectar($conexao);

	return $resultado;
}

function alterar($tabela, $dados, $condicao)
{
	// Cria a conexão com o banco de dados
	$conexao = mysqli_connect("localhost", "root", "", "sistemavendas");

	// Monta a parte SET da query SQL com os dados a serem atualizados
	$sets = [];
	foreach ($dados as $chave => $valor) {
		$valorEscapado = mysqli_real_escape_string($conexao, $valor);
		$sets[] = "$chave = '$valorEscapado'";
	}
	$querySet = implode(", ", $sets);

	// Cria a query SQL
	$SQL = "UPDATE $tabela SET $querySet WHERE $condicao";

	// Executa a query
	$resultado = mysqli_query($conexao, $SQL);

	// Verifica se ocorreu algum erro durante a execução da query
	if (!$resultado) {
		die('Erro ao alterar registro: ' . mysqli_error($conexao));
	}

	// Fecha a conexão
	desconectar($conexao);

	return $resultado;
}


?>