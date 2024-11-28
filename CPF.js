 // Feito por Gustavo Bontempo
function Validacao () {
	// Função pega o valor da caixa do CPF
	// e chama função ValidaCPF() p/ verificar se o cpf é válido ou não

	// Caso a função retorne falso
	// - Será inserida uma imagem de erro ao lado do CPF digitado (span)
	// - Será alterada a borda da caixa de texto do cpf p/vermelha (classe erro)
	// - Será alterada a cor de fundo para rosa (classe erro)

	// Caso não seja
	// - Será inserida uma imagem de OK ao lado do cpf digitado (span)
	// - Aplica o estilo normal na caixa de texto do CPF
	let ret=false // valor padrão p/ controle da rotina

	if (cpf.value!="") {
		ret = ValidaCPF (cpf.value)
	}

	// Se ret continuar false é porque o cpf estava vazio quando o botão foi 
	// clicado ou é inválido
   
	if (ret) {
		// CPF válido
		resultado.innerHTML = "<img src='imgs/ok.png'>"
		cpf.className = "caixa"
	}
	else {
		// Colocando a caixa de texto do cpf com borda vermelha e fundo rosa
		resultado.innerHTML = "<img src='imgs/erro.png'>"
		cpf.className = "erro"
	}
}

function ValidaCPF (textoCPF){
	let ret=false 
	
	if(textoCPF){
		let cpfNumero=""
		
		let tamanho=textoCPF.length
		
		for(let n=0; n<tamanho; n++)
		{
			// pegando caractere por caractere do string
			let caractere = textoCPF.substr(n,1)
			
			// é número?
			// se o caractere for maior ou igual a 0 E menor ou igual a 9
			if( (caractere >="0") && (caractere <="9") )
			{
				cpfNumero = cpfNumero + caractere
				// igual a cpfNumero += caractere
			}
		}
		
		// agora tenho cpfNumero contendo só os números
		console.log("cpfNumero = " + cpfNumero)
		
		// cpf tem 11 números?
		if(cpfNumero.length==11)
		{
			// 12345678900 (cpf digitado na caixa sem traços e pontos)
			// para o cálculo preciso dos 9 primeiros caracteres
			let cpfBase = cpfNumero.substr(0,9)
			
			console.log("cpf Base 1o cálculo  = " + cpfBase)
			
			let soma=0
			let multiplicador=10
			
			// Varrendo todos os digitos do CPF (do 1o ao último dos 9 dígitos)
			for (let n=0; n<cpfBase.length; n++)
			{
				// obtendo o dígito em formato de número inteiro
				let digito = parseInt(cpfBase.substr(n,1))
				
				// calculo com o multiplicador
				let calculoDigito = digito * multiplicador
				console.log( digito + " x " + multiplicador + " = " +  calculoDigito)
				
				// jogo dentro da variável soma
				soma = soma + calculoDigito
				
				// decremento o multiplicador
				multiplicador--
			}
			
			console.log("Soma = " + soma)
			
			// Passo 3 - aplicando o módulo 11
			let modulo = soma % 11
			console.log("Módulo de " + soma + " / 11 = " + modulo )
			
			// Passo 4 
			let mod11 = 11 - modulo
			console.log("Mod11 = " + mod11)
			
			if(mod11>9)
			{
				mod11 = 0
				console.log("Mod11 mudou para " + mod11)
			}
			
			// Calculamos o 1o dígito verificador do CPF
			var digito1 = mod11
			console.log("1o dígito verificador do CPF é " + digito1)
			
			// Passo 5 - Obter o 2o dígito verificador
			
			soma=0 // reinicializando a variável p/começar novamente
			multiplicador=11
			
			// Multiplicar tudo de novo
			// só que começando com a multiplicar com 11
			// Varrendo todos os digitos do CPF (do 1o ao último dos 9 dígitos)
			for (let n=0; n<cpfBase.length; n++)
			{
				// obtendo o dígito em formato de número inteiro
				let digito = parseInt(cpfBase.substr(n,1))
				
				// calculo com o multiplicador
				let calculoDigito = digito * multiplicador
				console.log( digito + " x " + multiplicador + " = " +  calculoDigito)
				
				// jogo dentro da variável soma
				soma = soma + calculoDigito
				
				// decremento o multiplicador
				multiplicador--
			}
			
			// Colocar na soma a multiplicação do 1o dígito verificador x 2
			soma = soma + (digito1*2)
			
			// Passo 6 - aplicando o módulo 11
			modulo = soma % 11
			console.log("Módulo de " + soma + " / 11 = " + modulo )
			
			// Passo 7
			mod11 = 11 - modulo
			console.log("Mod11 = " + mod11)
			
			if(mod11>9)
			{
				mod11 = 0
				console.log("Mod11 mudou para " + mod11)
			}
			
			var digito2 = mod11
			console.log("2o dígito verificador do CPF é " + digito2)
			
			// verificar se o CPF completo informado pelo usuário em números (cpfNumero)
			// é igual ao CPF calculado por nós
			// => cpfBase + 1o dígito verificador + 2o dígito verificador
			
			
			let cpfCalculado = cpfBase + digito1 + digito2
			
			if(cpfNumero == cpfCalculado)
			{
				// Cpf informado é igual ao CPF calculado
				ret = true
			}
			
		}
			
	}
	return (ret)
}
