/*
Ejemplo #1 con el metodo exec() 
--ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. 
Devuelve el resultado como array, o null--

Expresion Regular utilizada: 
1- /d(b+)d/g
Cadena a probar: 
1- cdbbdbsbz
2- dbbd
****El uso de la función constructora (new RegExp()) ofrece la compilación en tiempo de ejecución de la expresión regular. 
Utilice la función constructora cuando sepa que el patrón de la expresión regular cambiará, o cuando desconozca el patrón 
y deba obtenerlo de otra fuente, como por ejemplo del usuario.****/
var myRe = new RegExp('/d(b+)d/', 'g');
var myArray = myRe.exec('cdbbdbsbz');
var myArray2 = /d(b+)d/g.exec('dbbd'); 
console.log(myArray); //null, puede interpretarse como false es decir, que la cadena no coincidio
console.log(myArray2); //[ "dbbd", "bb" ]

/*
Ejemplo #2 con el metodo test()
--Devuelve un valor Boolean que indica si existe o no un patrón en una cadena de búsqueda-
-
Expresion Regular utilizada:
1-/\w+\s/g
Cadena a probar:
1- wwwcanales
2- laweafome
*/
var myRe2 = new RegExp('/\w+\s/', 'g');
var tested = myRe2.test('wwwcanales');
var tested1 = myRe2.test('laweafome');
console.log(tested); //true
console.log(tested1); //false