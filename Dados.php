<!doctype html> <!--Feito por Gustavo Bontempo-->

<html lang="pt-br">

    <head>
	    <meta charset = "UTF-8">
		<title>Recebimento dos dados</title>
	</head>
	
	<body>
	    
		<h1>Pedido realizado com sucesso</h1>
		<hr>
		
		<?php
		    
			$canalVenda     = $_GET["canalVenda"];
			$situacao       = $_GET["situacao"];
			$loja           = $_GET["loja"];
			$vendedor       = $_GET["vendedor"];
			$gerente        = $_GET["gerente"];
			$obs            = $_GET["obs"];
			$produto1       = $_GET["produto1"];
			$prProduto1     = $_GET["prProduto1"];
			$qtdProduto1    = $_GET["qtdProduto1"];
			$embProduto1    = $_GET["embProduto1"];
			$produto2       = $_GET["produto2"];
			$qtdProduto1    = $_GET["qtdProduto1"];
			$produto3       = $_GET["produto3"];
			$tipoPessoa     = $_GET["tipoPessoa"];
			$nome           = $_GET["nome"];
			$razaoSocial    = $_GET["razaoSocial"];
			$email          = $_GET["email"];
			$aceitaEmails   = $_GET["aceitaEmails"];
			$dddFone        = $_GET["dddFone"];
			$fone           = $_GET["fone"];
			$tipoFone       = $_GET["tipoFone"];
			$dddCelular     = $_GET["dddCelular"];
			$celular        = $_GET["celular"];
			$cpf            = $_GET["cpf"];
			$rg             = $_GET["rg"];
			$emissaoRG      = $_GET["emissaoRG"];
			$localEmissaoRG = $_GET["localEmissaoRG"];
			$cnpj           = $_GET["cnpj"];
			$opcaoRetirada  = $_GET["opcaoRetirada"];
			$cep            = $_GET["cep"];
			$endereco       = $_GET["endereco"];
			$complemento    = $_GET["complemento"];
			$bairro         = $_GET["bairro"];
			$cidade         = $_GET["cidade"];
			$uf             = $_GET["uf"];
			$referencia     = $_GET["referencia"];
			$formaEntrega   = $_GET["formaEntrega"];
			$formaPgto      = $_GET["formaPgto"];
			
			//validando dados pra não ficar em branco
			
			//if ($vendedor=="")
			//{
				//die("<b>Nome do vendedor</b> deve ser informado. Sistema cancelado!");
			//}
			
			//Exibir dados
			
			echo "Vendedor: <b>$vendedor</b><br>";
			
			
		?>
					
	</body>
	
</html>
