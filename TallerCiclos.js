//1. Cree un ciclo while que se repita 7 veces, en cada vez debe imprimir el número de repeticiones que lleva.

var numerociclo = 0 
while(numerociclo<7){
    console.log (numerociclo);
    numerociclo+= 1 
}
//2. Diseñe un ciclo while cuyo incremento vaya de tres en tres e imprima los múltiplos de 3 desde el 0 hasta el 30.
var ciclom = 0 
while (ciclom<=30){
    console.log(ciclom);
    ciclom+= 3
}
//3. Escriba un ciclo que imprima los números pares hasta el 50.

var ciclopar = 0
while(ciclopar<=50){
    console.log(ciclopar);
    ciclopar+= 2 
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

var numero1 = parseInt (prompt("Ingrese un numero"));
var numeropar
while ((numero1 % 2) == 0) {
 console.log ("El numero " + numero1 + " es par"); 
numero = parseInt (prompt("ingrese un nuevo numero")); 
}           
console.log ("el numero " + numero1 + "es impar")
    
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

var palab = "perro"
var inte = 1
var interifa = prompt("cual cree que es la palabra correcta")
while (interifa!=palab){
    console.log ("la palabra es incorrecta")
    var interifa = prompt("cual cree que es la palabra correcta")
inte+= 1 
}
console.log ("felicidades se gano la rifa")
console.log ("el numero de intentos fue" + inte)




mayor=arreglo[0] //el primer valor del arreglo
for(var i=0; i<10; i++){

    if(arreglo[i] > mayor){
        mayor = arreglo[i]//valor en la posicion actual del arreglo
    }
}