// Feito por Gustavo Bontempo
aProdutos = Array(
	["001", 85.70, "Blusa Manga Curta"		, "imagem1.png" ],
	["002",122.00, "Blusa Tomara que caia"	, "imagem2.png" ],
	["003", 95.00, "Blusa Manga Larga" 		, "imagem3.png" ],
	["004",129.55, "Blusa Especial"			, "" ],
	["005", 87.90, "Saia Verão"				, "" ]
)

function mostraArea(objBtn, nomeArea){
	// deixando os botões c/cor normal
	btn1.className=""
	btn2.className=""
	btn3.className=""
	btn4.className=""
	
	// Acendendo o botão enviado
	objBtn.className="botaoAceso"
	
	// Esconder todas as áreas de dados
	areaItens.style.display="none"
	areaCliente.style.display="none"
	areaEntrega.style.display="none"
	areaPagamento.style.display="none"
	
	// Mostrar a área desejada / enviada
	document.getElementById(nomeArea).style.display="block"
}

function areaPFPJ(objTipoPessoa){
	
	//alert(objTipoPessoa.value)
	let tipo=objTipoPessoa.value
	
	if(tipo=="PF")
	{
		// escondo dados de PJ
		areaPJ.style.display="none"
		areaPJDoc.style.display="none"
		
		// mostrar as divs/áreas de pessoa física
		areaPF.style.display="block"
		areaPFDoc.style.display="block"
	}
	else
	{
		// escondo dados de PF
		areaPF.style.display="none"
		areaPFDoc.style.display="none"
		
		// mostrar divs/áreas da pessoa jurídica
		areaPJ.style.display="block"
		areaPJDoc.style.display="block"
	}
}

function Hoje (numDias) {
    // função retorna uma determinada data numa string no formato YYYY-MM-DD
    var hoje = new Date ()

    // É para aumentar a data?
    if ( numDias > 0) { 
	hoje.setDate( hoje.getDate() + numDias )
    }

    // Pegar o dia - e transformar em String (é número)
    // e preencher com 0 à esquerda - 2 dígitos
    var dia = hoje.getDate().toString().padStart(2,'0')

    // Pegar o mês
    var mes = (hoje.getMonth() + 1).toString().padStart(2,'0')
    var ano = hoje.getFullYear()

    // Monta o string de retorno no formato "YYYY-MM-DD"
    var stringData = ano + "-" +   mes + "-" + dia

    return (stringData)
}

function formataMoeda(numero){
	let numeroFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(numero)

	return (numeroFormatado)
}

function popularListas()
{
	// produto1, produto2 e produto3
	
	// varrendo a matriz de produtos
	for(let prods=1; prods<=3; prods++)
	{
		// acessar produto1, produto2 e produto3
		let nomeCampo="produto"+prods
		
		// Como existem 3 listas de produtos, estas 3 listas serão atualizadas
		for(let n=0; n<aProdutos.length; n++)
		{
			let opcao=document.createElement("option")
			// <option></option>
			
			opcao.value = aProdutos[n][0]
			// <option value="001..005"></option>
			opcao.text  = aProdutos[n][2]
			// <option value="001..005">Texto produto1 até produto5</option>
			
			document.getElementById(nomeCampo).appendChild(opcao)
			
			// <option value="001">Blusa Manga Curta</option>
		}			
	}
}
function opcaoRetirada(opcao) {
	if(opcao =="E") {
		// // opção é de entrega - mostrar os campos de endereço do cliente 
		entregaEndereco.style.display = "block"
		$retiraLoja = false // desabilito o controle de frete para retirada na loja

		// Habilita formas de entrega de correio, pac, sedex
		areaRetirada.style.display = "block"
	}
	else {
		entregaEndereco.style.display = "none"
		$retiraLoja = true // único local em que se habilita a retirada do produto na loja
		// Desabilitar formas de entrega de correio, pac, sedex
		areaRetirada.style.display = "none"
	}
	CalcularTotal()	// atualizar o resumo totalizado
}

function VerificaCanal(canalInformado) {
	if(canalInformado=="L") {
		// venda via loja - habilita retirada em loja
		retirada.style.display = "block"
		opcaoRetirada.disabled = false // habilito a escolha de retirada na loja
	}
	else {
		retirada.style.display = "none" // não pode escolher tipo de retirada
		opcaoRetirada.value = "E" // seto como entrega
		$retiraLoja = false // desabilito o controle de frete para retirada na loja
		opcaoRetirada.disabled = true // desabilito a escolha de retirada da loja
	}
}

function ValidaCupom(codigoCupom) {
	// matriz de cupons c/ 3 cupons – outros podem ser adicionados
	const aCupons = Array(
		["pascoa",  5],
		["novo" 	, 10],
		["indica",  6]
	)
	
	// Limpando o percentual do cupom de desconto 
	$percDescCupom = 0

	 // Limpando o texto do lado do cupom
	textoCupom.innerHTML=""

	// Limpando o texto do resumo da % de cupom de desconto – 4. Pagamento
	//resumoTxtCupom.innerHTML="Cupom de Desconto"

	// foi digitado um cupom?
	if(codigoCupom.length>0)
	{
		// colocando o código digitado em minúsculo
		codigoCupom = codigoCupom.toLowerCase()
		// Cupom é válido - cupom digitado está dentro da matriz de cupons?
		for(let n=0; n<aCupons.length; n++){
			if(aCupons[n][0] == codigoCupom) {
			  // achou o cupom - recuperar o % de desconto
			  $percDescCupom = aCupons[n][1]
			  textoCupom.innerHTML="<img src='imgs/ok.png' width='20'>" // mostrando ok
				
			  // Ajustando o texto do resumo da % de cupom de desconto
  			  //resumoTxtCupom.innerHTML ="Cupom de Desconto (" + $percDescCupom + "%)"
			  
			  break // interromper o for/next
			}
		}
		if($percDescCupom == 0)
			textoCupom.innerHTML="<img src='imgs/erro.png' width='20'>"
	}
	CalcularTotal()
}

function CalcularProduto(numProd) {
	// limitado a 3 produtos (no HTML)
	// nome produto1, produto2 ou produto3
	let nomeCampo = "produto" +  numProd

	// Pegando o código do produto escolhido
	let codigo = document.getElementById(nomeCampo).value
	
	let valor =0  // valor padrão da variável
	let imagem="" // valor padrão da variável
		
	// Procurando o código na matriz de produtos
	for(let n=0; n<aProdutos.length; n++) {
		if(aProdutos[n][0] == codigo) {
			// encontrei - atualizo as variáveis
			valor = aProdutos[n][1]
			imagem= aProdutos[n][3]
			break
		}
	}

	// Se tem imagem vamos mostrar dentro do span areaImagem
	// Se não tem, apaga-se qualquer conteúdo anterior
	areaImagem.innerHTML= ""
	if(imagem != "") {
		areaImagem.innerHTML = "<img src='imgs/" + imagem + "'>"
	}
	
	// Nome do campo da qtd do produto que pode ser qtdProduto1, qtdProduto2 ou qtdProduto3
	nomeCampo = "qtdProduto" +  numProd
	// Criando a variável qtd que conterá a quantidade do produto escolhido
	let qtd = parseInt(document.getElementById(nomeCampo).value)
	
	// Nome do campo do preço do produto, que pode ser prProduto1, prProduto2 ou prProduto3
	nomeCampo = "prProduto" +  numProd
	// Criando o objeto DOM vinculado ao objeto preço do produto escolhido do formulário
	let objPrProd = document.getElementById(nomeCampo)
	
	// Nome do campo da soma do produto: somaProduto1, somaProduto2 ou somaProduto3
	nomeCampo = "somaProduto" +  numProd
	// Criando o objeto DOM vinculado ao campo que armazena o total (preçoxqtd) do produto
	let objSomaProd = document.getElementById(nomeCampo)

	// Calculando o preço atualizado pela qtd do prod. escolhido
	let total = valor * qtd 

	// Atualizando o preço do produto escolhido
	objPrProd.value = formataMoeda(valor)

	// Atualizando a caixa de soma do produto em R$
	objSomaProd.value = formataMoeda(total)
	
	// Depois de atualizar os dados do produto, calcula-se o total do pedido
	CalcularTotal()
}

function CalcularTotal(){
	// Inicialização de variáveis globais p/ início do cálculo

	$totalItens = 0 // valor dos itens
	$valorCupom = 0 // Desconto por cupom
	$valorPedido = 0 // zerando variável global valor total pedido
	$descontoItens = 0 // Desconto se total itens passar R$ 1000.00
	$custoEmbalagem = 0 // custo de embalagem p/presente total
	$valorFrete = 0 // Valor do frete
	
	// Calculando os totais dos itens informados no formulário
	$valorPedido = custoTotalProduto(1) + custoTotalProduto(2) +custoTotalProduto(3) 
	$totalItens = $valorPedido
	
	// Exibindo painel - linha 1
	resumoTotItens.innerHTML = formataMoeda($totalItens)
	
	// calculando o desconto por cupom
	if($percDescCupom>0)
		$valorCupom = $totalItens * $percDescCupom/100
	
	// Exibindo painel - linha 2
	resumoCupom.innerHTML = formataMoeda($valorCupom)
	
	// Exibindo painel - linha 3 - 1o subtotal
	let subTotal = $totalItens - $valorCupom
	resumoSubTot1.innerHTML = formataMoeda(subTotal)
	
	// Desconto s/ Itens
	if(subTotal >=1000) {
		// aplicando o desconto de 5% (total itens >= 1000)
		$descontoItens = subTotal * 5/100
		subTotal -= $descontoItens // recalculando subtotal
	}
	
	// Exibindo painel - linha 4 - Desconto p/ total itens
	resumoDescVlrPedido.innerHTML = formataMoeda($descontoItens)
	
	// Exibindo painel - linha 5 - - 2o subtotal
	resumoSubTot2.innerHTML = formataMoeda(subTotal)
	
	// Cálculo do custo de embalagem total
	$custoEmbalagem = custoEmbProduto(1) + custoEmbProduto(2) + custoEmbProduto(3) 
	
	// Exibindo painel - linha 6
	resumoEmbalagem.innerHTML = formataMoeda($custoEmbalagem)
	
	// Calculando o subtotal c/ o custo de embalagem
	subTotal += $custoEmbalagem
	
	// Exibindo painel - linha 7 - 3o subtotal
	resumoSubTot3.innerHTML = formataMoeda(subTotal)
	
	// Calculando o Frete
	$valorFrete = custoFrete()
	
	// Exibindo painel - linha 8 - frete
	resumoFrete.innerHTML = formataMoeda($valorFrete)
	
	// Calculo valor total do pedido
	$valorPedido = subTotal + $valorFrete
	
	// Exibindo painel - linha 9 - TOTAL DO PEDIDO
	resumoValorPedido.innerHTML = formataMoeda($valorPedido)
	
	// mostrando o valor estimado do pedido
	valorEstimadoPedido.innerHTML = formataMoeda($valorPedido)
}

function custoTotalProduto(numProd){
	let nomeCampo = "produto" + numProd
	let codigoProduto = document.getElementById(nomeCampo).value
	let valorUnitario = precoProduto(codigoProduto)
	let qtd = qtdProduto(numProd)
	let valorTotal = 0 // valor padrão
	
	// fazer o cálculo
	valorTotal = valorUnitario * qtd
	
	return(valorTotal)
}


function qtdProduto(numProd){
	let nomeCampo = "qtdProduto"+numProd // nome do campo
	let qtd = parseInt(document.getElementById(nomeCampo).value)
	return(qtd)
}

function precoProduto(codigo){
	let valor=0 // valor padrão do produto 
	
	if(codigo.length>0)
		for(let n=0; aProdutos.length; n++)
		{
			if(aProdutos[n][0] == codigo){
				// achei o produto procurado
				valor = aProdutos[n][1]
				break // caio fora do loop
			}
		}
	return (valor)
}

function custoEmbProduto(numProd) {
    let nomeCampo = "embProduto" + numProd // Traz o nome do campo de embalagem do produto
    let valorEmbalagem = 0

    if (document.getElementById(nomeCampo).checked) {
        let qtd = qtdProduto(numProd)
        if (qtd > 0) {
            valorEmbalagem = qtdProduto(numProd) * 10
            if (valorEmbalagem > 25)
                valorEmbalagem = 25
        }
    }
    return (valorEmbalagem)
}

function custoFrete(){
	// Define valor padrão para o frete
	let $frete=0
	
	switch(formaEntrega.value) {
		case "PAC":
			$frete=30
			break
			
		case "SEDEX":
			$frete=70
			break
		
		case "TRANSP":
			$frete=50
			break
	}
	
	// se escolhida retirada na loja ou pedido>=1000, zera o frete
	if ( ($retiraLoja) || ($valorPedido>=1000) )
		$frete=0
	
	return($frete)
}
