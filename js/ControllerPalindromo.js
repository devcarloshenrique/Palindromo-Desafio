/** 
 * Function responsável por limpar acentuações da string, retornando um array com todas as 
 * palavras da string.
 */

function clearString(string){

    return string.replace(/[^A-Za-z0-9]/g, '' ).split(/\s*,\s*/).join("");

}

/** 
 * Function responsável apenas por reverter a String, simplificando a verificação posteriormente
 */
function reverse(string) {
  
    return string.split("").reverse().join("");
  
}

/**
 * Function que verifica se a String é um sensitive Case
 */
  
function sensitiveCase(string, polindromo){

	var sensitiveCase = () => {
    
        return string == string.toLowerCase() || string == string.toUpperCase()
    
    };
    
    if(!polindromo) return false;
    
    if(sensitiveCase() && polindromo) return false;
        
    return true;

}
  
function polindromo(string){

    var string = clearString(string),

        reverseString = reverse(string),
        
        polindromo = string.toLowerCase() == reverseString.toLowerCase(),

    /**
     * Verificando se a String é um Sensitive Case true ou false
     */

    sensitivCase = sensitiveCase(string , polindromo);

    /**
     * Condição que determina se a String é um Palindromo true ou false
     */
    
    polindromo = string.toLowerCase() == reverseString.toLowerCase();
    
    return {string, reverseString, sensitivCase, polindromo};
}

/**
 * Function responsável por retornar se a string é um palindromo, é um sensitive case,
 * retornando true ou false;
 */

function findText(){

    var campo = document.getElementById('text-palin');

    /**
     * Evita consultas desnecessárias, quando o campo estiver vazio. 
     */

    if(campo.value == ''){
        alert('Preencha o textarea');
        return false;
    } 
    
    /**
     * Verificação de palindromo e sensitive Case
     */

    var palindromo = polindromo(campo.value).polindromo;

    var sensitiveCase = polindromo(campo.value).sensitivCase;
    
    alert(`
    Palindromo: ${palindromo}
    Sensitive Case: ${sensitiveCase}
    `);

    return true;
            
}

/**
 * Function responsável por apagar qualquer texto digitado 
 */

function resetDiv(){

    document.getElementById('CSVsaida').innerHTML = '<table></table>';
    document.getElementById('inputCSV').value = '';

    return true;
}

/**
 * Function reponsável por ocultar uma div enquanto revala outra
 */

function DisplayNonePalin() {

    /**
     * Revala a div responsável pelo separador de texto
     */
    document.getElementById('text-palin').style.display = "block";
    document.getElementById('btn-palin').style.display = "block";

    /**
     * Oculta o textarea do palindromo
     */
    document.getElementById('CSVsaida').style.display = "none";
    document.getElementById('btn-sdt').style.display = "none";

    return true;
}