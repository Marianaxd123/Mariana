//1. Cree un ciclo while que se repita 7 veces, en cada vez debe imprimir el número de repeticiones que lleva.

var ciclo = 1 

while(ciclo < 8) {
    console.log ("el numero del ciclo es " + ciclo);
    ciclo += 1
}

//2. Diseñe un ciclo while cuyo incremento vaya de tres en tres e imprima los múltiplos de 3 desde el 0 hasta el 30.

var multiplos = 0 

while(multiplos < 31) {
    console.log (multiplos + " es multiplo del 3");
    multiplos += 3
}

//3. Escriba un ciclo que imprima los números pares hasta el 50.

var numerospares = 0 

while(numerospares < 51) {
    console.log (numerospares + " es un numero par");
    numerospares += 2
}

//4.El usuario desea ver la lista de números impares desde uno (1) hasta determinado número, el algoritmo debe recibir el límite e imprimir solo los números impares

console.log("punto 4")
var n = 1;
var xnum = prompt("Ingresa un valor");

while (n <= xnum) {
    console.log(n);
    n+=2
}


//5. Consulter en internet ¿cómo saber si un número es par
// en javascript? Y diseñe un ciclo que se detenga cuando
// el usuario escriba un número impar, mientras el número 
// sea par, debe imprimir un mensaje que diga El número # es par.

var numero1 = prompt ("Ingrese un numero")
while ( (numero1 % 2) == 0) 
{
     console.log ("El numero " + numero1 + " es par"); 
     break
}           
    
    

//6. Lea en la guía sobre acumuladores en ciclos. 
// Cree un ciclo cuyo límite sea la cantidad de estudiantes de su salón y retorne la suma(acumulado) 
// de todas las edades de los estudiantes.

var cantidades = parseInt (prompt("ingrese la cantidad de estudiantes que hay en el salon")); ;
var edades 
var unciclo = 0 
 var acumulado = 0 
 while(unciclo<cantidades){

    edades=parseInt(prompt("ingrese la edad de los estudiantes")); 

    acumulado += edades;
    unciclo +=1
 }
console.log ("el acumulado de las edades del salon es de " + acumulado)


//7.En una reunión se juega una rifa, escoja usted la categoría y la palabra u objeto a adivinar.
// Diseñe un ciclo while que le pregunte a cada persona sobre cuál cree que es la respuesta, 
// el ciclo se detiene una vez alguien haya dicho la respuesta correcta. Al finalizar, 
// se debe mostrar un mensaje felicitando a la persona ganadora así como también imprimir cuántos 
// intentos hubo antes de acertar











//8. Diseñe un algoritmo para los maestros que reciba el nombre y n cantidad de notas de un estudiante. 
// Halle el promedio de esas notas y, según el resultado, muestre un mensaje indicando que el estudiante nombreEstudiante
// ganó o perdió la asignatura y su nota final.
