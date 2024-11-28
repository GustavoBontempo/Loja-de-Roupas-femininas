function dados(){ //Feito por Gustavo Bontempo
	
	
	var fim            = document.getElementById("fim"); // variável pra mostrar a mensagem pro usuário
	var vendedor       = document.getElementById("vendedor").value.trim();           // Campo obrigatório
	var gerente        = document.getElementById("gerente").value.trim();            // Campo obrigatório
	var qtdProduto1    = parseInt(document.getElementById("qtdProduto1").value) || 0;// Campo obrigatório
	var qtdProduto2    = parseInt(document.getElementById("qtdProduto2").value) || 0;// Campo obrigatório
	var qtdProduto3    = parseInt(document.getElementById("qtdProduto3").value) || 0;// Campo obrigatório
	var nome           = document.getElementById("nome").value.trim();               // Campo obrigatório
	var email          = document.getElementById("email").value.trim();              // Campo obrigatório
	var cpf            = document.getElementById("cpf").value.trim();                // Campo obrigatório
	var rg             = document.getElementById("rg").value.trim();                 // Campo obrigatório
	var emissaoRG      = document.getElementById("emissaoRG").value.trim();          // Campo obrigatório
	var localEmissaoRG = document.getElementById("localEmissaoRG").value.trim();     // Campo obrigatório
	var cep            = document.getElementById("cep").value.trim();                // Campo obrigatório
	var endereco       = document.getElementById("endereco").value.trim();           // Campo obrigatório
	var bairro         = document.getElementById("bairro").value.trim();             // Campo obrigatório
	var cidade         = document.getElementById("cidade") .value.trim();            // Campo obrigatório
	var boleto         = document.getElementById("pgtoBoleto").checked;              // Campo obrigatório
	var MPago          = document.getElementById("pgtoMPago").checked;               // Campo obrigatório
	var credito        = document.getElementById("pgtoCC").checked;                  // Campo obrigatório
	var numeroCartao   = document.getElementById("numeroCartao").value.trim();       // Campo obrigatório
	var nomeCartao     = document.getElementById("nomeCartao").value.trim();         // Campo obrigatório
	var cvvCartao      = document.getElementById("cvvCartao").value.trim();          // Campo obrigatório
	
	//verificando se o campo está preenchido
	if (!nome || !email || !cpf || !rg || !emissaoRG || !localEmissaoRG || !cep || !endereco || !bairro || !cidade){
		alert("Por favor, preencha o campo que está em branco para prosseguir!");
		return;
	}
	
	// Validar CPF
    if (!ValidaCPF(cpf)) {
        alert("O CPF informado é inválido. Por favor, verifique.");
        return;
    }
	
	if(!boleto && !MPago && !credito){
		alert("Por favor, escolha a forma de pagamento!");
		return;
	}
	
	if (credito) {
        if (!numeroCartao || !nomeCartao || !cvvCartao) {
            alert("Por favor, preencha todos os campos do cartão de crédito!");
            return;
        }
    }
	
	// Verifica se ao menos um produto foi selecionado
    if (qtdProduto1 === 0 && qtdProduto2 === 0 && qtdProduto3 === 0) {
        alert("Por favor, selecione ao menos um produto/quantidade!");
        return;
    }
	
	// Se tudo estiver certo, exibe a mensagem de sucesso
    fim.innerHTML = `
        <b>PARABÉNS, ${nome.toUpperCase()}!!!</b><br><br>
        <b><span style="color:green">O seu pedido foi realizado com sucesso</span></b>
        <img src='certo.png' width='15' height='15'><br><br>
        <b><span style="color:gray">*Para visualizar/imprimir dados do pedido, aperte no botão abaixo:*</span></b>
    `;
	
}
