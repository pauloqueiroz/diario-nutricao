var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
	event.preventDefault();
	var form = document.querySelector("#formAdiciona");

	var paciente = obtemPaciente(form);
	var erros = validaPaciente(paciente);
	if(erros.length > 0){
		exibeMensagensErro(erros);
		return;
	}
	console.log(paciente);

/*	var pacienteTr = montaTr(paciente);

	var tbody = document.querySelector("#tabela-pacientes");
	tbody.appendChild(pacienteTr);*/
	adicionaPacienteNaTabela(paciente);

	form.reset();
	
	console.log("nome "+paciente.nome);
	console.log("altura "+paciente.altura);
	console.log("peso "+paciente.peso);
	console.log("gordura "+paciente.gordura);
});

function obtemPaciente(form){
	var paciente = {
		nome: form.nome.value,
		altura: form.altura.value,
		peso: form.peso.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	var nomeTd = montaTd("info-nome", paciente.nome);
	
	var pesoTd = montaTd("info-peso", paciente.peso);

	var alturaTd = montaTd("info-altura", paciente.altura);

	var gorduraTd = montaTd("info-gordura", paciente.gordura);
	
	var imcTd = montaTd("info-imc", paciente.imc);

	var pacienteTr =  document.createElement("tr");
	pacienteTr.classList.add("paciente");


	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	return pacienteTr;
}

function montaTd(classe, valor){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = valor;
	return td;
}

function validaPaciente(paciente){
	var erros = [];
	if(!validaPeso(paciente.peso)){
		erros.push("peso inválido");
	}
	if(!validaAltura(paciente.altura)){
		erros.push("altura inválida");
	}
	if(paciente.nome.length == 0){
		erros.push("Informe o nome");
	}
	if(paciente.gordura.length == 0){
		erros.push("Informe o percentual de gordura");
	}
	return erros;
}

function exibeMensagensErro(erros){
	var ul = document.querySelector(".mensagens-erro");
	ul.innerHTML = "";
	if(erros){
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
	}
}

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}