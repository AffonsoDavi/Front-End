function validaInscricao() {
	if (document.frmInscricao.txtnome.value == "") {
		alert("Preencha o campo Nome.");
		document.frmInscricao.txtnome.focus();
		return false;

	} else if (document.frmInscricao.txtdata.value == "") {
		alert("Preencha o campo Data.");
		document.frmInscricao.txtdata.focus();
		return false;
	}
	var cpf = document.frmInscricao.txtcpf.value;
	var expRegCpf = new RegExp("^[0-9]{9}[-]{1}[0-9]{2}$");
	if (!expRegCpf.test(cpf)) {
		alert("Preencha o campo cpf corretamente!")
		document.frmInscricao.txtcpf.focus();
		return false;
	}

	if (document.frmInscricao.txtfone.value == "") {
		alert("Preencha o campo Telefone.");
		document.frmInscricao.txtfone.focus();
		return false;
	}
	var Profissao = document.frmInscricao.txtprofissao.value;
	var expRegProfissao = new RegExp("^[A-zÀ-ü]{3,}$");
	if (!expRegProfissao.test(Profissao)) {
		alert("Preencha o campo Profissao corretamente!")
		document.frmInscricao.txtprofissao.focus();
		return false;


	} else if (document.frmInscricao.txtgenero.value == "") {
		alert("Preencha o campo Gênero.");
		return false;
	} else if (document.frmInscricao.txtemail.value == "") {
		alert("Preencha o campo Email.");
		document.frmInscricao.txtemail.focus();
		return false;
	} else if (document.frmInscricao.teste.check == "sim") {
		alert("Confirme que realmente você deseja participar.");
		document.frmInscricao.check.focus();
		return false;
		return true;
	}
}

