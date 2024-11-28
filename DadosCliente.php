<!doctype html> 
<html lang="pt-br"> <!--Feito por Gustavo Bontempo-->

<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Dados do Cadastro</title>
	<style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .nome {
            font-size: 2em;
            color: #4CAF50;
            margin: 20px 0;
        }
    </style>
</head>

<body>
    <h2><u>Dados do Cadastro!</u></h2>
<?php

    $nome  = $_POST["nome"];
	$nasc  = $_POST["dNascimento"];
	$sexo  = $_POST["sexo"];
	$civil = $_POST["ECivil"];
	$email = $_POST["email"];
	$ddd   = $_POST["ddd"];        $ddd2   = $_POST["ddd2"];    $ddd3   = $_POST["ddd3"];
	$fone1 = $_POST["numero"];     $fone2  = $_POST["numero2"]; $fone3  = $_POST["numero3"];
	$tipo1 = $_POST["tipo"];       $tipo2  = $_POST["tipo2"];   $tipo3  = $_POST["tipo3"];
    $obs   = $_POST["obs"];
	
	//evitar erros de checkbox quando ficar sem checked
	$check = 0;
	
	if(isset($_POST["caixaEmail"]))
		$check = $_POST["caixaEmail"];
/*-------------------------------------------------------------------------------------------*/
	if($nome == ""){
		die("<h2>O nome deve ser informado!!!</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='imgs/atencao.png' height='500'>");
	}
	
	if($nasc == "")
		die("<h2>O dia do seu Nascimento deve ser informado!!!</h2> <img src='imgs/data.png' height='500'>");
	
	if($email == "")
		die("<h2>O seu email deve ser informado!!!</h2> <img src='imgs/email.png' height='350'>" );
	
	if($obs == "")
		die("<h2>Por favor, informe algo na observação!!!</h2> <img src='imgs/obs.png' height='350'>");
	
	echo "<hr>";
	echo "<b>Nome:</b> $nome <br><br>"; echo "<b>Data de nascimento:</b> $nasc <br><br>"; echo "<b>Sexo:</b> $sexo <br><br>"; echo "<b>Estado Civil:</b> $civil <br><br>";
	echo "<b>Deseja receber e-mails:</b> $check <br><br>"; 
	echo "<b>Telefone:</b> ($ddd)  $fone1 &nbsp; &nbsp; <b>tipo:</b> $tipo1"; 
	
	if($tipo1 == "")
		echo "<br>";
	
	if($tipo1 == "RE")
		echo " - Residencial<br>"; 
	
	if($tipo1 == "CE")
		echo " - Celular<br>";
	
	if($tipo1 == "CO")
		echo " - Comercial<br>";
	
	if($tipo1 == "RC")
		echo " - Recados<br>";
	
	echo "<b>Telefone:</b> ($ddd2) $fone2 &nbsp;&nbsp; &nbsp; <b>tipo:</b> $tipo2";
	
	if($tipo2 == "")
		echo "<br>";
	
	if($tipo2 == "RE")
		echo " - Residencial<br>";
	
	if($tipo2 == "CE")
		echo " - Celular<br>";
	
	if($tipo2 == "CO")
		echo " - Comercial<br>";
	
	if($tipo2 == "RC")
		echo " - Recados<br>";
	
	echo "<b>Telefone:</b> ($ddd3) $fone3 &nbsp; &nbsp; <b>tipo:</b> $tipo3";
	
	if($tipo3 == "")
		echo "<br><br>";
	
	if($tipo3 == "RE")
		echo " - Residencial <br><br>";
	
	if($tipo3 == "CE")
		echo " - Celular<br><br>";
	
	if($tipo3 == "CO")
		echo " - Comercial<br><br>";
	
	if($tipo3 == "RC")
		echo " - Recados<br><br>";
	
	echo "<b>Observação:</b> $obs <br>";
	echo "<hr>";
/*----------------------------------------------------------------------------------------------------*/
	//Colocar dentro do banco de dados
	$con = mysqli_connect("localhost", "root","");
	
	mysqli_select_db($con, "sistemas") or
	    die("Erro ao abrir o banco de dados: <br>" . mysqli_error($con));
		
	$sql = "insert into clientes (
	                        nomoCliente,
							Nascimento,
							Sexo,
							EstadoCivil,
							Email,
							DDD1,
							Telefone1,
							Tipo1,
							DDD2,
							Telefone2,
							Tipo2,
							DDD3,
							Telefone3,
							Tipo3,
							OBS) 
					  value(
							'$nome', '$nasc', '$sexo', '$civil', '$email','$ddd', '$fone1', '$tipo1', 
							'$ddd2', '$fone2', '$tipo2', 
							'$ddd3', '$fone3', '$tipo3', 
							'$obs');";
							
		//die($sql);

		mysqli_query($con,$sql) or
		    die("Erro ao se cadastrar: <br>" . mysqli_error($con));
		
        //funcionou ufaaa
		echo "Dados do (a) <b>$nome</b> cadastrado com sucesso! &nbsp; <img src='imgs/certo.png' height='18'>";
		echo "<br>";
		echo "<img src='imgs/pronto.png' height='100' <br>";
		
?>
    <hr>
	    <h1>Cupom de Desconto</h1>
    <p>Parabéns, você acaba de ganhar um cumpom de desconto!!! pegue o seu cupom agora e escreve no <br>
	mesmo sentido que está aparecendo e coloque no campo de cupom do site antes de finalizar a compra!!!
	</p>
    <div>
        <p class="nome" id="nomeAleatorio"></p>
    </div>
    <script>
        // Lista com os nomes fixos
        const nomes = ["pascoa", "novo", "indica"];

        // Função para escolher um nome aleatório
        function gerarNome() {
            return nomes[Math.floor(Math.random() * nomes.length)];
        }

        // Exibir o nome na página
        document.getElementById("nomeAleatorio").innerText = gerarNome();
    </script>
	
	<hr>
	   <h4>Clique <a href="cadastro.html">aqui</a> para fazer um novo cadastro.</h4>
	   <h4>Clique <a href="roupas.html">aqui</a> para voltar a página de compras<h4>
</body>
</html>
