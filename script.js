/*
Ejemplo #1 con el metodo exec() 
--ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. 
Devuelve el resultado como array, o null--

Expresion Regular utilizada: 
1- /d(b+)d/g
Cadena a probar: 
1- cdbbdbsbz
2- dbbbd
****El uso de la función constructora (new RegExp()) ofrece la compilación en tiempo de ejecución de la expresión regular. 
Utilice la función constructora cuando sepa que el patrón de la expresión regular cambiará, o cuando desconozca el patrón 
y deba obtenerlo de otra fuente, como por ejemplo del usuario.****/
var myRe = new RegExp('/d(b+)d/', 'g');  //-> debe llevar 'd' al inicio, grupo de captura en el que pueden ir 1 o mas 'b' y debe llevar 'd' al final
var myArray = myRe.exec('cdbbdbsbz');
var myArray2 = /d(b+)d/g.exec('dbbbd'); 
console.log(myArray); //null, puede interpretarse como false es decir, que la cadena no coincidio
console.log(myArray2); //[ "dbbdb", "bbb" ]

/*
Ejemplo #2 con el metodo test()
--Devuelve un valor Boolean que indica si existe o no un patrón en una cadena de búsqueda-
-
Expresion Regular utilizada:
1-/\w+\s/g
Cadena a probar:
1- wwwcanales
2- la wea fome
*/
var myRe2 = new RegExp('/\w+\s/', 'g'); //-> uno o mas caracteres de palabras que tengan un espacio en blanco despues 
var tested = myRe2.test('wwwcanales');
var tested1 = myRe2.test('la wea fome');
console.log(tested); //false
console.log(tested1); //false

/* 
Si lo que necesita provarse es una cadena de entrada que coincida con la expresion el metodo test es el indicado pues su valor
de retorno es booleano.
Cuando necesite trabajar con los grupos e indices coincidentes entonces test es el indicado.
Entre estos dos metodos no importa mucho la velocidad o la eficiencia sino que se evalue la expresion.  
*/

/*
Ejemplo #3 utilizando ambos
Expresiones utilizadas: 
1-/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
2-/[a-z|A-Z]+/
*/
var user = prompt('Ingresa un nombre de usuario', 'Lolito');
var pass = prompt('Ingresa una contraseña');

var valUser = new RegExp('/[a-z|A-Z]+/', 'g'); //->Uno o varios caracteres de la 'a' a la 'z' mayusculas o minisculas 
var valPass = new RegExp('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/', 'g');
//->Minimo 8 caracteres, maximo 15, al menos una letra mayúscula o minuscula, al menos un digito, sin espacios en blanco y un caracter especial 
(valUser.exec(user) != null)
? console.log('Tu nombre cumple con el requisito')
: console.log('Tu nombre no cumple con el requisito...');

(valPass == true)
? console.log('Tu contrasenea es muy fuerte!')
: console.log('Alguien quiere ser suplantado...');