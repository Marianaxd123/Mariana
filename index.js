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
// PI = 5 ;
// imprimir por consola
//simple
console.log("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es "+edad+ "años");

//operadores
//suma
var a = 10;
let b = 20;
var suma =a + b
console.log(suma);

// residuo 
var residuo; 
residuo= 12% 2;//0
console.log (residuo); 

// contadores 
// incremento  
var incre=1 ; 
console.log (incre); 
incre=incre+1; 
console.log (incre); 
incre+=1;
console.log(incre); 
incre++;
console.log(incre); 

// decremento
var decre=1 ; 
console.log (decre); 
decre=decre-1; 
console.log (decre); 
decre-=1;
console.log(decre); 
decre--;
console.log(decre); 

// operaciones aumentadas 
// son operaciones que se les realiza a una variable y el resultado se guarda en si misma 
var sumaaumento;
sumaaumento 
sumaaumento += 1 ;
sumaaumento +=48 ;
// la variable debe tener un valor antes de realizar la operacion 
console.log(sumaaumento); 

var restaaumento;
restaaumento =20
restaaumento -= 1 ;
restaaumento -=8 ; 
console.log(restaaumento);

var restaaumento;
restaaaumento =20
restaaumento -= 1 ;
restaaumento -=8 ; 
console.log(restaaumento);

// potencia 
var exp;
exp = 3 **2 ; // 3^2 
console.log (exp); // 9
exp = 3**3 ; // 3^3
console.log (exp); // 27

// cadenas o texto
// suma de cadenas
var nombre= "mariana"
var apeliido = "arboleda"; 
var nomcompleto = nombre + " " + apellido; 
console.log (nomcompleto); 
// .length 
// permite saber la longuitud de una cadena o el tamaño de un vector 
// para encontrar eñ caracter en la ultima posicion de una cadena se debe buscar la longuitud menos 1 
(lenght-1)

