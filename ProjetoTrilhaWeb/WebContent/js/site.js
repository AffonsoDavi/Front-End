function validaFaleConosco() {
	
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if (!expRegNome.test(nome)) {
		alert("Preecha o campo Nome corretamente.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	 if (!expRegFone.test(fone)) {
		alert("Preecha o camopo Telefone corretamente.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	} 
		
	 if (document.frmfaleconosco.txtemail.value == "") {
		alert("Preencha o campo Email.");
		document.frmfaleconosco.txtemail.focus();
		return false;

	} else if (document.frmfaleconosco.selmotivo.value == "") {
		alert("Preencha o campo Motivo.");
		document.frmfaleconosco.selmotivo.focus();
		return false;
	
	} else if(document.frmfaleconosco.selproduto.value == ""){
		alert("Preencha o campo Produto.");
		document.frmfaleconosco.selproduto.focus();
		return false;
		
	} else if (document.frmfaleconosco.txtcomentario.value == "") {
		alert("Preencha o campo Comentario.");
		document.frmfaleconosco.txtcomentario.focus();
		return false;
	}
	return true;

}
function verificaMotivo(motivo) {
	//capturamos a estrutura da div cujo ID é opcaoProduto na variavel elemento
	var elemento = document.getElementById("opcaoProduto");

	//se o valor da variavel motivo for "PR"
	if (motivo == "PR") {
		//criamos um elemento (tag) <select> e guardamos na variavel homônima
		var select = document.createElement("select");
		//Setamos nesse novo select o atributo 'name'com o valor 'selproduto'
		select.setAttribute("name", "selproduto");
		//Conteudo atual da variavel select:
		// <select name="selproduto"></select>

		//criamos um elemento (tag) <option> e guardamos na variavel homonima
		var option = document.createElement("option");
		//setamos nesse novo option o atributo 'value' com o valor vazio
		option.setAttribute("value", "");
		//Criamos um nó de texto "escolha" e gravamos na variavel 'texto'
		var texto = document.createTextNode("Escolha");
		//Colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//Conteudo atual da variavel option:
		//<option value="">Escolha</option>

		//colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//Conteudo atual da variavel select:
		//<select name="selproduto"><option value="">Escolha</option></select>

		var option = document.createElement("option");
		option.setAttribute("value", "FR");
		var texto = document.createTextNode("Freezer");
		option.appendChild(texto);
		select.appendChild(option);

		var option = document.createElement("option");
		option.setAttribute("value", "GE");
		var texto = document.createTextNode("Geladeira");
		option.appendChild(texto);
		select.appendChild(option);

		//Colocamos o select criado como "filho" da tag capturada no inicio da funcao
		elemento.appendChild(select);
		//se o valor da variavel motivo não for "PR"...
	} else {
		//se a div possuir algum "primeiro filho"
		if (elemento.firstChild)
			//removemos ele
			elemento.removeChild(elemento.firstChild);
	}
}//fim da função verificaMotivo