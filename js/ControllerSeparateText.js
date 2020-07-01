/** 
 * Function responsável por pegar os arquivos .txt da requisição file
 */	
function findInput(inputFile) {

	var file = inputFile.files[0];

	/**
	 * Alerta de arquivo maior que 10GB
	 */

	if(file.size >= 10737418240) {
		
		alert('Arquivo muito grande, sera retornado apenas palavras repetidas !');
	
	}

	/**
	 * Verificação, apenas arquivos .txt
	 */

	if(file.type != 'text/plain') {

		alert('Apenas arquivos .txt');
		
		document.getElementById('inputCSV').value = '';
		return false;
	}

	/**
	 * Permite ler assincronamente objetos file ou blob
	*/

	var fileReader = new FileReader();
	
	/**
	 * Filtrando o objeto inputFile
	*/

	var file = inputFile.files[0];

	/**
	 * Inicializa a leitura do blod e retorna o conteudo como string de texto;
	*/

	fileReader.readAsText(file);

	/**
	 * Evento chamado quando a leitura é concluída 
	*/
	
	
	return fileReader.onload = leCSV;

}

function leCSV(evt) {

	console.log(evt);

	/**
	 * Pegando a variável que é recebida como parametro filtrando, limpando todos os acentos e espaços,
	 * para retornar um array de palavras .
	 */

	var fileArray = evt.target.result.replace(/[^0-9a-zA-Z]|[0-9]/g, " ").split(' ').filter(x => x);

	/**
	 * Caso o arquivo sejá maior que 10gb sera retornado apenas palavras repetidas
	 */

	if(evt.loaded >= 10737418240){
	
		fileArray = fileArray.filter((este, i) => fileArray.indexOf(este) === i);
	
	}
	
	var table = '<table id="table-text" style="white-space: nowrap;" border="1">';
	
	table += '<thead>';

	/**
	 * Regra que determina o número de colunas, sendo que se fileArray menor que 50,
	 * limitador de colunas == fileArray.length
	 */

	var i = 0;
	var limitador = fileArray.length <= 50 ? fileArray.length : 50;
	
	/**
	 * Loop responsável por criar todo o <thead> da table
	 */

	while (i != limitador) {
		i += 1;

		table += `<th>${i}</th>`;

	} 

	table += '</thead>';

	table += '<tbody>';
	
	var x = 1;

	/**
	 * Loop responsável por criar todo o <tbody> da table
	 */
	
	for (var i in fileArray) {
		
		table += `<td>${fileArray[i]}</td>`;
		
		if(x % 50 == 0) table += '</tr>'; x++;

	}
	
	table += '</tbody>';
	table += '</table>';

	/**
	 * Após tosdos os processos, a variável table, que armazena toda tabela, é retornada
	 * para a div CSVsaida
	 */
			
	var CSVsaida = document.getElementById('CSVsaida');
		CSVsaida.innerHTML = table;

	return true;
}

/**
 * Function responsável por apagar qualquer arquivo de .txt carregado  
 */

function resetPol(){
	return document.getElementById('text-palin').value = '';
}

function DisplayNoneSdt() {
	
	/**
     * Revala o textarea responsável pelo palindromo
     */

	document.getElementById('CSVsaida').style.display = "block";
	document.getElementById('btn-sdt').style.display = "block";

	/**
     * Oculta a div responsál pelo separador de texto
     */

	document.getElementById('text-palin').style.display = "none";
	document.getElementById('btn-palin').style.display = "none";

	return true;
}
