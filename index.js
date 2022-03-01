console.log("hola mundo");//imprimir por consola
//comentario en linea
/*comentario
en
varias
lineas
o
multilineas
*/
//variables
/*son espacios de memoria que almacenas datos o informacion 
existen varios tipos de variables es js, pero generalmente se utilizan los siguientes:
Stream: almacena cadenas de texto. Se debe declarar o asignar el valor entre comillas
Int: almacena numeros enteros.
Double: Almacena numeros reales
Boolean: Almacena valores de verdad (true, false)
*/
/*Declarar variables
Declarar una variable es crearla, decirle al lenguaje como se llama la variable e
indicarle que ya existe.
para declarar una variable se puede utilizar ya sea la palabra reservada var o let
*/
var nombre;
console.log(nombre);
/*iniciar varianbles
para iniciar variables es necesario asignar un valor cuando se crea una variable
*/
var apellido="peñaranda"
console.log(apellido);
/*asignar un valor:
asignar un valor se hace mediante el signo igual, se debe hacer sobre una variable que ya fue declarada
*/
nombre="Mariana";
console.log(nombre+" "+apellido);
//desde otra variable
var edad = 15 ;
var edadEstudiante = edad ;
//desde el teclado
var gradoEstudiante = prompt ("ingrese el grado")
console.log("elgrado es: " + gradoEstudiante);
/*constantes son valores que una vez inicializados no pueden cambiar lo que almacenan.se crean con la palabra reservada const el nombre de las constantes se escribe todo en mayuscula para diferenciarlo de las variables.
 */
const PI = 3.1416 ;
PI = 5 ;