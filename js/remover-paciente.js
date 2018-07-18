var tabela = document.querySelector("#tabela-pacientes");
console.log(tabela);
tabela.addEventListener("dblclick", function(event){
		console.log(event.target);
		event.target.parentNode.remove();
});