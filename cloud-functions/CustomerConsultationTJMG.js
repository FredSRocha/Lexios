/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
  */
function main({ name, district }) {
	let comrCodigo = district;
	switch (comrCodigo) {
		case 'Belo Horizonte':
			comrCodigo = 24
			break;
		case 'Contagem':
			comrCodigo = 79
			break;
		// ...
		default:
			comrCodigo = 24
	}
	if (name) {
	  return { body: `<div style="text-align:center;"><p><b>ATENÇÃO! Este link carregará uma nova página. Clique-o para continuar.</b></p><a href="https://www4.tjmg.jus.br/juridico/sf/proc_resultado_nome.jsp?nomePessoa=${name}&comrCodigo=${comrCodigo}&numero=1" style="color:#1a73e8;text-decoration:none;font-weight:700;font-size:16px">Abrir todos os pocessos de ${name}</a></div>` }
	} 
}