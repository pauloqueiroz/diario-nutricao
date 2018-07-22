var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');
for (var i = 0; i < pacientes.length; i++) {
		var pacienteSelect = pacientes[i];

		var tdPeso = pacienteSelect.querySelector(".info-peso");
		var peso = tdPeso.textContent;

		var tdAltura = pacienteSelect.querySelector(".info-altura");
		var altura = tdAltura.textContent;

		var tdImc = pacienteSelect.querySelector(".info-imc");

		var pesoEhValido = validaPeso(peso);
		var alturaEhValida = validaAltura(altura);

		if (!pesoEhValido) {
		    console.log("Peso inválido!");
		    pesoEhValido = false;
		    tdImc.textContent = "Peso inválido";
		}

		if (!alturaEhValida) {
		    console.log("Altura inválida!");
		    alturaEhValida = false;
		    tdImc.textContent = "Altura inválida";
		}

		if (pesoEhValido && alturaEhValida) {
		    tdImc.textContent = calculaImc(peso, altura);
		}

		titulo.addEventListener("click", function (){
			console.log("Olá, eu fui clicado.");
		});
}

function validaPeso(peso){
	if (peso <= 0 || peso >= 1000) {
    	return false;
	}

	return true;
}

function validaAltura(altura){
	if (altura <= 0 || altura >= 3.00) {
		return false;
	}
	return true;
}

function calculaImc(peso,altura){
	var imc = peso /(altura * altura);
	return imc.toFixed(2);
}

